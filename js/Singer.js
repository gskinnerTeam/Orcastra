(function () {

	function Singer(type) {
		this.type = type;
		this.Container_constructor();
		this.init();
	}

	var p = createjs.extend(Singer, createjs.Container);
	p.characters = {};

	p.init = function () {
		switch(this.type) {
			case "shark":
				data = {class:lib.Shark, name:this.type, pt:new createjs.Point(390, 360)};
				break;
			case "whale":
				data = {class:lib.Whale, name:this.type, pt:new createjs.Point(410, 380)};
				break;
			case "wormHover":
				data = {class:lib.Worm, name:this.type, pt:new createjs.Point(390, 360)};
				break;
			case "clam":
				data = {class:lib.Clam, name:this.type, pt:new createjs.Point(390, 420)};
				break;
			case "fish":
				data = {class:lib.Fish, name:this.type, pt:new createjs.Point(410, 360)};
				break;
		}
		if (data == null) {
			throw("ERROR - SINGER");
			return;
		}
		this.builder = new createjs.SpriteSheetBuilder();
		this.builder.data = data;
		this.builder.on("complete", this.handleBuildComplete, this, true);
		this.builder.addMovieClip(new data.class, null, 0.8);
		this.builder.buildAsync(0.95);
	};

	p.handleBuildComplete = function (event) {
		var target = event.target;
		var data = target.data;

		this.character = new createjs.Sprite(this.builder.spriteSheet).set({x:data.pt.x, y:data.pt.y});

		this.update(0);
		this.addChild(this.character);
	}

	p.update = function (value) {
		if (this.character == null) { return; }
		if ((this.type == "wormHover" && value < 7)  || (this.type == "fish" && value < 7)) {
			this.character.gotoAndStop(1);
			return;
		}
		this.character.gotoAndStop(value);
		this.mouthPosition = {x:410, y:380};
	}

	window.Singer = createjs.promote(Singer, "Container");
}());
