(function () {

	function Background (width, height, amount) {
		this.Container_constructor();
		this.width = width;
		this.height = height;
		this.amount = amount;
		this.setup();
	}

var p = createjs.extend(Background, createjs.Container);
	p.BASE_VELOCITY = 0.6;
	p.minScale = 0.40;
	p.maxScale = 1.0;

	p.setup = function() {
		var i=0;
		this.bubbles = [];
		this.vel = 25;
		var bubbleRef = new lib.Bubble();
		bubbleRef.cache(-10, -10, 20, 20);
		while (i++ < this.amount) {
			var bubble = new createjs.Bitmap(bubbleRef.cacheCanvas);
			var scale = g.getRange(this.maxScale,this.minScale);
			bubble.width = 10*scale;
			bubble.height = 10*scale;
			bubble.radius = bubble.width/2;
			bubble.scaleX = bubble.scaleY = scale;
			bubble.x =  Math.random()*this.width;
			bubble.y = this.height+bubble.radius;
			bubble.alpha = 0.1+Math.random()*0.5;
			this.bubbles.push(bubble);
			this.addChild(bubble);
		}
	};

	p.resetBubble = function (bubble) {
		bubble.y = (this.height + bubble.height);
		bubble.x = ((this.width * 0.1) + ((Math.random() * this.width) * 0.8));
	};

	p.resetAll = function () {
		var bubble;
		var l = this.bubbles.length;
		for(var i=0;i<l;i++) {
			bubble = this.bubbles[i];
			bubble.y = this.height + (Math.random()*this.height/2)+bubble.radius;
		}
	};

	p.update = function () {
		var bubble;
		this.vel = (this.vel +(this.BASE_VELOCITY - this.vel*0.07));
		var l = this.bubbles.length;
		var i = 0;

		while (i<l) {
			bubble = this.bubbles[i];
			bubble.y = bubble.y - (this.vel * bubble.scaleX);
			if (bubble.y < -(bubble.height)) {
				this.resetBubble(bubble);
			} else {
				bubble.x = (bubble.x + bubble.rotation);
				if (bubble.x > (this.width + (bubble.width / 2))){
					bubble.x = (bubble.x - (this.width + (bubble.width / 2)));
				} else {
					if (bubble.x < (-(bubble.width) / 2)){
						bubble.x = (bubble.x + (this.width + (bubble.width / 2)));
					}
				}
			}
			i++
		}
	};

window.Background = createjs.promote(Background, "Container");
}());
