var canvas, stage, menu, curtain, analyser, spotlight, background, w, h, bar, character, swapBtn, waves, weeds, bgImage, bubbles, status, loaderBar, micDetected, gskinnerLink, createjsLink;

//Helper Utils
window.g = {};
g.max = function (array) {
	var max = array[0];
	var len = array.length;
	for (var i = 0; i < len; ++i) {
		if (array[i] > max) {
			max = array[i];
		}
	}
	return max;
};

g.getRange = function (max, min) {
	var scale = (max - min);
	return Math.random() * scale + min;
};

g.STATUS_MESSAGE = {
	AllowMicMessage: "To use Orcastra you will need to allow your browser access to your microphone.",
	NotSupported: "Orcastra requires getUserMedia. Your browser may not support WebAudio API microphone input.",
	NoInput: "No input detected. Check your mic, ensure permissions are granted to sites.",
	ErrorMessage: "Oops, something when wrong :( Please ensure your browser supports WebAudio API.",
	MicDetected:"Microphone Input Detected."
}

function init() {
	canvas = document.getElementById("canvas");
	stage = new createjs.Stage(canvas);
	stage.enableMouseOver(10);

	micDetected = false;

	w = canvas.width;
	h = canvas.height;

	images = images||{};

	createProgressBar();

	//SD:Change this update to LoadQueue
	lq = new createjs.LoadQueue(false);
	lq.addEventListener("fileload", this.handleFileLoad);
	lq.addEventListener("complete", this.handleComplete);
	lq.addEventListener("progress", this.handleProgress);
	lq.loadManifest(lib.properties.manifest);
}

function createProgressBar() {
	var barHeight = 15;
	var barWidth = 300;
	var barPadding = 2;
	var bgFillColor = createjs.Graphics.getRGB(72,11,14);
	var barFillColor = createjs.Graphics.getRGB(160,7,22);
	var barStrokeColor = createjs.Graphics.getRGB(183,18,29);

	loaderBar = new createjs.Container();
	loaderBar.x = w - barWidth>>1;
	loaderBar.y = h - barHeight>>1;

	loaderBar.addChild(new createjs.Shape().set({graphics:new createjs.Graphics().ss(barPadding).f(bgFillColor).dr(0, 0, barWidth, barHeight)}));

	bar = loaderBar.addChild(new createjs.Shape().set({graphics:new createjs.Graphics().s(barStrokeColor).f(barFillColor).dr(barPadding/2, barPadding/2, barWidth-barPadding, barHeight-barPadding), scaleX:0}));

	stage.addChild(loaderBar);
}

function loaderFade(tween) {
	initMic();
}

function createLinks() {
	var padding = 10;
	var bounds;

	gskinnerLink = new lib.GSkinnerMC();
	gskinnerLink.on('click', handleLink, this);
	gskinnerLink.name = 'gskinnerLink';
	gskinnerLink.cursor = "pointer";

	bounds =  gskinnerLink.getBounds();

	gskinnerLink.hitArea = new createjs.Shape().set({graphics:new createjs.Graphics().f("#000000").dr(0, 0,bounds.width, bounds.height)});
	gskinnerLink.alpha = 0;
	gskinnerLink.x = padding+5;
	gskinnerLink.y = h - bounds.height - padding;

	createjsLink = new lib.CreateJSMC();
	createjsLink.name = 'createjsLink';
	createjsLink.cursor = "pointer";
	createjsLink.alpha = 0;
	createjsLink.on('click', handleLink, this);

	bounds = createjsLink.getBounds();
	createjsLink.x = w - bounds.width - (padding + padding/2);
	createjsLink.y = h - bounds.height - padding;
	createjsLink.hitArea =  new createjs.Shape().set({graphics:new createjs.Graphics().f("#000000").dr(0, 0,bounds.width, bounds.height)});

	this.stage.addChild(gskinnerLink, createjsLink);

	toggleLinks(true);
}

function createMenu() {
	this.singers = {};
	menu = new CharactorMenu();
	menu.checkMicStatus(status);
	menu.on("menuClick", handleMenuClick, this);
	menu.x = 8;
	menu.y = -800;
	stage.addChild(menu);
	showMenu();
}

function createScene() {
	spotlight = new lib.Spotlight();
	spotlight.alpha = 0;
	spotlight.x = canvas.width - spotlight.getBounds().width >> 1;
	spotlight.y = -1;

	bubbles = new Bubbles();
	bgImage = new lib.UnderwaterMC();
	background = new Background(w, h, 25);
	bgImage.x = -1;

	stage.addChildAt(bgImage, 0);
	stage.addChild(background, spotlight);

	waves = new lib.WavesMC();
	waves.x = 502;
	waves.y = 156;
	waves.alpha = 0.25;

	weeds = new lib.SeaweedMC();
	weeds.x = 393;
	weeds.y = 516;

	stage.addChild(waves, weeds);

	this.swapBtn = new lib.SwitchBtnMC();
	this.swapBtn.x = w - this.swapBtn.getBounds().width;
	this.swapBtn.y = -5;
	this.swapBtn.on("click", handleChangeSinger, this);
	stage.addChild(this.swapBtn);

	toggleEnvironment(false);
}

function createCurtain() {
	this.curtain = new Curtain();
	this.curtain.on("curtainOpenComplete", handleCurtainOpenComplete, this);
	this.curtain.on("curtainCloseComplete", handleCurtainCloseComplete, this);

	stage.addChild(this.curtain);
}

function createOcastra() {
	createScene();
	createCurtain();
	createMenu();
	createLinks();
}

function handleChangeSinger(event) {
	createjs.Tween.get(this.swapBtn, {override:true}).to({y:-50}, 500);
	createjs.Tween.get(this.bgImage, {override:true}).to({alpha:1}, 1000, createjs.Ease.circOut);

	this.spotlight.alpha = 0;

	this.curtain.close();
}

function toggleEnvironment(value) {
	background.resetAll();
	bubbles.removeAll();

	weeds.visible = waves.visible = bgImage.visible = value;
}

function toggleLinks(value) {
	var alphaValue = (value) ? 1 : 0;

	createjs.Tween.get(createjsLink).to({alpha:alphaValue}, 1000);
	createjs.Tween.get(gskinnerLink).to({alpha:alphaValue}, 1000);
}

function handleLink(event) {
	var name = event.target.name;
	switch (name) {
		case "gskinnerLink":
			window.open("http://www.gskinner.com", "_blank");
			break;
		case "createjsLink":
			window.open("http://www.createjs.com", "_blank");
			break;
	}
}

function handleCurtainOpenComplete(event) {
	createjs.Tween.get(this.swapBtn, {override:true}).to({y:-5}, 500);
	createjs.Tween.get(this.bgImage, {override:true}).to({alpha:0.45}, 1000, createjs.Ease.circOut);

	this.spotlight.alpha = 1;
}

function handleCurtainCloseComplete(event) {
	if (character != null) { stage.removeChild(character); }
	toggleEnvironment(false);
	toggleLinks(true);
	showMenu();
}

function handleProgress(event) {
	bar.scaleX = event.loaded;
	stage.update();
}

function handleFileLoad(o) {
	if (o.item.type == "image") {
		images[o.item.id] = o.result;
	}
}

function handleComplete(event) {
	createjs.Ticker.setFPS(24);

	var queue = event.target;
	var ssMetadata = lib.ssMetadata;
	for(i=0; i<ssMetadata.length; i++) {
		ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
	}

	createjs.Ticker.addEventListener("tick", onTick);
	createjs.Touch.enable(stage);
	createjs.Tween.get(loaderBar).to({alpha:0}, 1000).call(loaderFade);
}

function handleMenuClick(event) {

	toggleEnvironment(true);

	selectSinger(event.data);

	this.hideMenu();

	toggleLinks(false);
}

function selectSinger(name) {
	if (character != null) {
		stage.removeChild(character);
	}
	if (this.singers[name] == null) {
		this.singers[name] = new Singer(name);
	}
	character = this.singers[name];
	var pt;
	var direction;
	switch(name) {
		case "shark":
			pt = new createjs.Point(380, 300);
			direction = -1;
			break;
		case "whale":
			direction = 1;
			pt = new createjs.Point(440, 320);
			break;
		case "wormHover":
			direction = -1;
			pt = new createjs.Point(390, 355);
			break;
		case "clam":
			direction = -1;
			pt = new createjs.Point(390, 420);
			break;
		case "fish":
			direction = 1;
			pt = new createjs.Point(380, 360);
			break;
	}

	bubbles.direction = direction;
	bubbles.position = pt;

	stage.addChildAt(character, 4);
	stage.addChildAt(bubbles, 5);
}

function initMic() {
	try {
		var promisifiedOldGUM = function(constraints, successCallback, errorCallback) {
		// First get ahold of getUserMedia, if present
			var getUserMedia = (navigator.getUserMedia ||
			navigator.webkitGetUserMedia ||
			navigator.mozGetUserMedia);

		  // Some browsers just don't implement it - return a rejected promise with an error
		  // to keep a consistent interface
		  if(!getUserMedia) {
			return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
		  }

		  // Otherwise, wrap the call to the old navigator.getUserMedia with a Promise
		  return new Promise(function(successCallback, errorCallback) {
			getUserMedia.call(navigator, constraints, successCallback, errorCallback);
		  });
		};

		if(navigator.mediaDevices === undefined) {
			navigator.mediaDevices = {};
		}

		if(navigator.mediaDevices.getUserMedia === undefined) {
			navigator.mediaDevices.getUserMedia = promisifiedOldGUM;
		}

		navigator.mediaDevices.getUserMedia({audio:true}).then(function(stream) {
			var context = new AudioContext();
			analyser = context.createAnalyser();
			analyser.fftSize = 2048;

			var microphone = context.createMediaStreamSource(stream);
			microphone.connect(analyser);
			this.status = g.STATUS_MESSAGE.AllowMicMessage;

			this.getAnalyserData();

			createOcastra();

		}).catch(function(err) {
			handleError(err);
		});

	} catch (e) {
		handleError(e);
	}
}

function handleError(event) {
	switch(event.name) {
		case 'Error':
			this.status = g.STATUS_MESSAGE.NotSupported;
			break;
		case 'PermissionDeniedError':
			this.status = g.STATUS_MESSAGE.NoInput;
			break;
		case 'NotFoundError':
		case 'NotAllowedError':
		case 'NotSupportedError':
		case 'NotReadableError':
		case 'OverConstrainedError':
		case 'SecurityError':
		case 'TypeError':
			this.status = g.STATUS_MESSAGE.ErrorMessage;
			break;
	}
	createOcastra();
}

function getAnalyserData() {
	var freqData = new Uint8Array(analyser.frequencyBinCount);
	analyser.getByteFrequencyData(freqData);

	var percent = Math.round(((g.max(freqData) - 128) / 128)*100);
	percent = Math.max(0, Math.min(percent, 100));

	setTimeout(getAnalyserData, 1000/40);

	this.micDetected = (percent > 0 || (this.micDetected==true)) ? true : false;
	if (this.micDetected) {
		if (!menu.characterShown) {
			menu.showCharacter();
		}
		updateCharacter(percent);
	}
}

function updateCharacter(value) {
	if (character == null || this.curtain.isDown) { return; }
	if (value > 80 && value <= 100) { this.bubbles.addBubble();}
	if (value > 60 && value < 79) {
		if (Math.random() < 0.5) {
			this.bubbles.addBubble();
		}
	}
	character.update(value);
}

function hideMenu() {
	createjs.Tween.get(menu, {override:true}).wait(500).to({y:-800}, 1000).call(this.handleMenuComplete);
}

function showMenu() {
	menu.visible = true;
	createjs.Tween.get(menu, {override:true}).wait(500).to({y:0}, 1000);
}

function handleMenuComplete() {
	curtain.open();
	menu.visible = false;
}

function onTick() {
	if (this.curtain != null) {
		if (!this.curtain.isDown) {
			background.update();
			bubbles.update();
		}
	}
	stage.update();
}
