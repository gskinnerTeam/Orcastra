(function () {

	function Bubbles() {
		this.Container_constructor();
		this.init();
	}

	var p = createjs.extend(Bubbles, createjs.Container);

	p.init = function () {
		this.position = new createjs.Point(-100, -100);
		this.direction = -1;
		this.list = [];
		this.delay = 1;
		this.max = 100;
		this.offset = 0;
		this.xVibration = 2;
		this.minScale = .20;
		this.maxScale = .80;

		this.bubbleRef = new lib.Bubble();
		this.bubbleRef.cache(-10, -10, 20, 20);
	};

	p.removeAll = function () {
		this.list = [];
		this.removeAllChildren();
	};

	p.addBubble = function () {
		var b = new createjs.Bitmap(this.bubbleRef.cacheCanvas);
		if (b != null) {
			b.x = this.position.x;
			b.y = this.position.y;
			b.speedX = b.speedY = b.targetY =0;
			b.scaleX = b.scaleY = g.getRange(this.maxScale,this.minScale);
			b.width = b.height = 20*b.scaleX;
			this.list.push(b);
			this.addChild(b);
		}
	};

	p.update = function () {
		var l = this.list.length;
		for(var i=l-1;i>=0;i--) {
			var b = this.list[i];
			b.speedX += Math.random() * 2 - 1;
			b.speedX = Math.max(-this.xVibration/2, Math.min(b.speedX, this.xVibration/2));
			if (this.direction == -1) {
				b.x += this.offset + (b.speedX ) - 2;
			} else {
				b.x += this.offset + (b.speedX ) + 2;
			}
			b.speedY +=  g.getRange(0.25, -0.55);
			b.y +=  b.speedY*this.delay;
			if ((b.y+b.height) < b.targetY) {
				this.list.splice(i, 1);
				this.removeChild(b);
			}
		}
	};

	window.Bubbles = createjs.promote(Bubbles, "Container");
}());
