(function () {

	function Curtain (total) {
		this.Container_constructor();
		this.total = total;
		this.setup();
	}

var p = createjs.extend(Curtain, createjs.Container);

	p.setup = function() {
		this.curtain = null;
		this.isDown = true;
		this.addCurtain();
	};

	p.addCurtain = function () {
		this.curtain = new lib.CurtainMC();
		this.curtain.on('curtainOpened', this.handleAction, this);
		this.curtain.on('curtainClosed', this.handleAction, this);
		this.curtain.gotoAndStop(0);
		this.addChild(this.curtain);
	};

	p.open = function () {
		this.curtain.gotoAndPlay(1);
		this.isDown = false;
	};

	p.close = function () {
		this.curtain.gotoAndPlay(31);
	};

	p.handleAction = function (event) {
		if (event.type == 'curtainClosed') {
			this.isDown = true;
			this.dispatchEvent(new createjs.Event('curtainCloseComplete'));
		}else if (event.type == 'curtainOpened') {
			//this.isDown = false;
			this.dispatchEvent(new createjs.Event('curtainOpenComplete'));
		}
	};

window.Curtain = createjs.promote(Curtain, "Container");
}());

