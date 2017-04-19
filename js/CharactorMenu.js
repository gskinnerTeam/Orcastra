(function () {

	function CharactorMenu () {
		this.Container_constructor();
		this.setup();
	}

var p = createjs.extend(CharactorMenu, createjs.Container);
	p.setup = function() {
		this.menuAssets = new lib.Menu();
		this.menuAssets.cache(0, 0, 784, 498);



		this.characterShown = false;

		this.characterSelect = new lib.CharacterSelect();
		this.characterSelect.cache(0, 0, 410, 97);

		this.characterSelect.x = this.menuAssets.cacheCanvas.width - this.characterSelect.cacheCanvas.width >>1;
		this.characterSelect.y = 498>>1;
		this.characterSelect.alpha = 0;
		this.addChild(this.characterSelect, this.menuAssets);

		this.overScale = 1.20;
		this.normalScale = 1.00;
		var clipWidth = 113;
		var padding = -6;
		var menuItemWidth = clipWidth*this.normalScale;
		this.items = [];
		var item, label;
		for(var i=0;i<5;i++) {
			item = new lib.MenuItem();
			label = item.labels[i];
			item.cursor = "pointer";
			item.name =label.label;
			item.gotoAndStop(label.position);
			item.on("click", this._handleAction, this);
			item.on("rollover", this._handleAction, this);
			item.on("rollout", this._handleAction, this);
			item.regX = menuItemWidth/2;
			item.regY = menuItemWidth/2;
			item.x = 195+(menuItemWidth+padding) * i;
			item.y = 385;
			item.alpha = 0;
			item.scaleX = item.scaleY = this.normalScale;
			this.items[i] = item;
			this.addChild(item);
		}

		this.displayMessage = this.addChild(new createjs.Text("", "30px Arial","#FFFFFF").set({x:400, y:335,lineWidth:500, textAlign:"center", alpha:0}));
	};


	p.checkMicStatus = function (message) {
		this.displayMessage.text = message;
		createjs.Tween.get(this.displayMessage).wait(1000).to({alpha:1}, 1000)
	}

	p.showCharacter = function () {
		if (this.characterShown) { return; }
		var targetY = 350;
		createjs.Tween.get(this.displayMessage, {override:false}).to({alpha:1}, 1).wait(2000).to({alpha:0}, 500).set({y:targetY, text:g.STATUS_MESSAGE.MicDetected}).to({alpha:1}, 1000).wait(1000).to({alpha:0}, 550).call(this.titleFadeOut, {}, this);
	};

	p.titleFadeOut = function (tween) {
		for(var i=0;i<5;i++) {
			var item = this.items[i];
			var waitDuration = (0.5+i*0.04)*1500;
			createjs.Tween.get(item).wait(waitDuration).to({alpha:1}, 500);
		}

		createjs.Tween.get(this.characterSelect).to({alpha:1, y:this.menuAssets.cacheCanvas.height - 15}, 1000);
		this.characterShown = true;
	};

	p._handleAction = function (event) {
		if (event.type == 'click') {
			var target = event.target.parent;
			var event = new createjs.Event("menuClick");
			event.data = target.name;
			this.dispatchEvent(event);
		} else if (event.type == 'rollout' || event.type == 'rollover') {
			var scale = (event.type == 'rollout') ? this.normalScale : this.overScale;
			var ease = (event.type == 'rollout') ? createjs.Ease.circOut : createjs.Ease.circOut;
			createjs.Tween.get(event.target).to({scaleX:scale, scaleY:scale}, 250, ease);
		}

	};

window.CharactorMenu = createjs.promote(CharactorMenu, "Container");
}());
