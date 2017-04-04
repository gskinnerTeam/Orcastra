(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
var rect; // used to reference frame bounds
lib.ssMetadata = [];


// symbols:



(lib.clam = function() {
	this.initialize(img.clam);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,113,113);


(lib.CreateJSImage = function() {
	this.initialize(img.CreateJSImage);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,148,32);


(lib.fish = function() {
	this.initialize(img.fish);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,113,113);


(lib.gskinner = function() {
	this.initialize(img.gskinner);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,148,32);


(lib.orcaestracurtain = function() {
	this.initialize(img.orcaestracurtain);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,517,600);


(lib.shark = function() {
	this.initialize(img.shark);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,113,113);


(lib.SpotlightBottom = function() {
	this.initialize(img.SpotlightBottom);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,276,76);


(lib.SpotlightTop = function() {
	this.initialize(img.SpotlightTop);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,275,468);


(lib.SwitchBtn = function() {
	this.initialize(img.SwitchBtn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,54,52);


(lib.underwatersing = function() {
	this.initialize(img.underwatersing);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,600);


(lib.whale = function() {
	this.initialize(img.whale);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,114,113);


(lib.worm = function() {
	this.initialize(img.worm);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,113,113);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.UnderwaterMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.underwatersing();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.UnderwaterMC, rect = new cjs.Rectangle(0,0,800,600), [rect]);


(lib.SwitchBtnMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SwitchBtn();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.SwitchBtnMC, rect = new cjs.Rectangle(0,0,54,52), [rect]);


(lib.GSkinnerMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gskinner();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.GSkinnerMC, rect = new cjs.Rectangle(0,0,148,32), [rect]);


(lib.curtaininner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.orcaestracurtain();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.curtaininner, rect = new cjs.Rectangle(0,0,517,600), [rect]);


(lib.CreateJSMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CreateJSImage();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.CreateJSMC, rect = new cjs.Rectangle(0,0,148,32), [rect]);


(lib.wormtail = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3F2032").s().p("ABoCDQgGgBABgGQAHg2gIglQgKgugjggQgdgbgwgbQhGgmgIAjQgBAFgFgBQgGgBABgFQAGgqBCAaQAxATAfAbQAwAqARAvQAQAugJBBQgBAFgEAAIgCAAg");
	this.shape.setTransform(-0.3,13.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3F2032").s().p("AB8AnQgNgdgpgTQgjgRglgCQgjgDgkANQgrAPgJAcQgCAFgFgCQgEgCABgFQAKgfAvgTQAqgRAkAGQAwAIAeAOQAqASAPAjQADAFgGACIgDABQgDAAgCgEg");
	this.shape_1.setTransform(8.4,-12);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3F2032").s().p("AhMBFQgEgIABgFQACgSACgGQADgIAKgOQAegqAQgJQAlgVAIgDQAegMASAJQAFADgCAFQgCAEgFgCQgQgHggANQgbALgOAPQgdAcgJAPQgIANgEANQgCAJgDATIgBACQgBAAgDgEg");
	this.shape_2.setTransform(-0.6,-26.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.2)").s().p("AhwDfQg3hfBohkQBDhGAMgUQAkg4gRg8QgDgcgUgdQgXgkgcAKIgYgVIgKgBIARgBQB9gaArB7QAgBbgTCAQgLBKgqBFQgrBHg+AsQg1gTgagwg");
	this.shape_3.setTransform(-9.3,4.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.2)").s().p("ABwBtQAQhqgYhbQgdhrhOgxQgmgZgxACQgrACguAVIgFADQAIgRAYgPQANgIAagOQAugVArgBQAxgDAlAZQBPAxAdBsQAZBbgQBpQgMBRgwBFQgvBEhJArQBghfARhzg");
	this.shape_4.setTransform(2.6,-1.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3F2032").s().p("AieFIQgpgZgTgrQgWgpAKgtQAIglAcgkQAJgMAQgRIAZgZQAegeAQgSQAVgbAKgXQALgZgBgaIgDgXIgBgGIgBgDIAAgCIgBgBIgBgLQgEgTgIgSQgOgigTgGIgEgBIgDgBIgGAAIgFAAIAFgCIAGgBIAEAAIAFABQAVAFARAkQAJASAFAUIACAMIAAABIABABIAAADIACAFQACAGACAUQABAdgKAbQgKAZgWAcQgOARggAhIgZAaQgOAQgJAMQgaAigGAgQgIAnATAkQASAmAkAWQAmAXArgDQAOgBAdgJQAGgBAQgHIAUgKQAogUAkgiQBDhAAhhcQAOgpAFgtQAEgpgCgrQgFhWgjhBQgSgggYgZQgbgZgZgOQgYgNgggCQgZgCgbAFQgWAEgWAJIgkARQgaAPgQATIgMAPIACgFIAHgMQANgUAcgSIAagQIAKgEQAUgJAagGQAegGAZABQAhACAdAOQAcAOAcAaQAaAZAUAjQAlBEAGBZQADAsgEAsQgEAvgQAsQgiBihGBBQhPBLheAMIgMABQgrAAgmgYg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D86097").s().p("AiHFMQgvgVgXgsQgegzASg2QAOgtAvgtQBDhGANgUQAkg5gSg7QgDgfgQgeQgWgngcAJIgigdQANgXAWgRQANgKAdgQQAwgVArgCQAzgCAnAZQBSAyAeBsQAaBbgQBpQgPBohGBWQhLBbhkAYQgSAFgTAAQgcAAgdgMg");
	this.shape_6.setTransform(0,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.wormtail, rect = new cjs.Rectangle(-23.4,-35.1,46.8,70.4), [rect]);


(lib.wormmouthloudmove = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().p("AgDAfQgrgHgdgOQgegOACgOQACgNAfgEQAggDAqAHQArAIAdAPQAeANgCAOQgCANgfAEIgUABQgZAAgdgGg");
	this.shape.setTransform(9.3,-8.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3F2032").s().p("AgJAYIgFgSQgBgIACgIIAGgQQAEgHAJADQAHAAACAGQACAGgEAFQgBAAAAgBQAAAAgBABQAAAAAAAAQAAABAAAAIAAABIgFACIAEgBIAAACIgCAIQAAADACAEIADAIQAEALgMAEIgFACQgGAAgDgIg");
	this.shape_1.setTransform(-9.2,10.6,1,1.206);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3F2032").s().p("AgSASQgIgEABgJQAAgMATgIQAMgGAOAFQAIADgCAIQgBAIgIABIgCAAIgEACIgLAEIAAAAIgBABIgBAAIAAABQgCAEgFACIgFABIgEgBg");
	this.shape_2.setTransform(-2.3,-0.4,1,1.206);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3F2032").s().p("AgNBYQgbgDgPgEQgZgHgJgPQgRABgDgZQgIgIgBgNQgBgJACgIIABgHQACgGADgGQAEgNAKgIQAIgHAGgKIAJgHIAKgFIABgCIACgDIADgFIACgCIADAAIADgBIAHgBIAFABIAEAFQAUgHAfAAQAGAAANAEQAfgEAgANIADACIABACIACABIACAAIAHACIADACIABACIABACIABAEIgBACIgBACIgCAEIgCACQgCAFgGADQgHAEgJACIgFACQAAAIgGAEIgTAMQgOAHgFAEQgGANgJAMQgEAGgIAAQgKAYAAAPQAAAHgFAEQgFADgFAAIgCAAg");
	this.shape_3.setTransform(-8.5,4.9,1,1.206);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3F2032").s().p("AhIBCQgCgyA0glQAigXAQgNIAPgMQAGgDAMADQAGACAFACQAEADgFAAQgJgBgPAKIgWAQIghAXQgWAQgMASQgNATgFAbQgBAFgGAAQgFAAAAgFg");
	this.shape_4.setTransform(-1.1,6.2,1,1.206);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3F2032").s().p("AiHB8IgPgEIgQgGQgUgKgKgMQgNgQgDgWQgDgVAJgVQAJgSASgQIASgOQANgIAHgDQAWgLAYgBQAXgBAYAGIAtALIApAKQAtAKAkABQAWABAPgCQATgCAMgIQAFgDAEgGQADgGgBgFQgCgIgQgJQgJgFgngQQgagKgMgGQgPgHgIgHIgEgFIgBgDIAIAFQAKAGANAEIAmAMQAoANAMAGQAIAEAGAGQAJAHADAJQAFAWgWAQQgNAJgZAFQgNACgbAAQgpgCgrgJQgRgDgZgHIgsgLQgZgFgRABQgWABgRAJQgpASgPAfQgHAQABAQQACAQAKANQAHAJARAKIAOAGIAOAFQA0APAmgOQANgEAIgIIAHgGQABAAgFAJQgHAKgOAHQgWAKgcAAQgWAAgZgGg");
	this.shape_5.setTransform(0,-0.1,1,1.206,2.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D86097").s().p("AiKB3Qg6gOgHguQgIgtAvghQAogdArACQAPABBGASIAZAFIgqB3QgNAagtADIgSABQgbAAgWgIgABtgKQgmgCgqgKIAlhoQAIALBPAcQBAAYgOAbQgOAbg9AAIgTgBgAAdgWIAAAAg");
	this.shape_6.setTransform(0.1,-0.4,1,1.206,2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.wormmouthloudmove, rect = new cjs.Rectangle(-21.6,-15.4,43.2,31), [rect]);


(lib.wormmouth4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().p("AgDAaQgrgGgdgMQgegMACgLQACgLAfgDQAggDAqAHQArAGAdAMQAeALgCALQgCALgfAEIgVABQgYAAgdgFg");
	this.shape.setTransform(9.3,-6.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3F2032").s().p("AgJAYIgFgSQgBgIACgIIAGgQQAEgHAJADQAHAAACAGQACAGgEAFQgBAAAAgBQAAAAgBABQAAAAAAAAQAAABAAAAIAAABIgFACIAEgBIAAACIgCAIQAAADACAEIADAIQAEALgMAEIgFACQgGAAgDgIg");
	this.shape_1.setTransform(-9.2,8.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3F2032").s().p("AgSASQgIgEABgJQAAgMATgIQAMgGAOAFQAIADgCAIQgBAIgIABIgCAAIgEACIgLAEIAAAAIgBABIgBAAIAAABQgCAEgFACIgFABIgEgBg");
	this.shape_2.setTransform(-2.3,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3F2032").s().p("AgNBYQgbgDgPgEQgZgHgJgPQgRABgDgZQgIgIgBgNQgBgJACgIIABgHQACgGADgGQAEgNAKgIQAIgHAGgKIAJgHIAKgFIABgCIACgDIADgFIACgCIADAAIADgBIAHgBIAFABIAEAFQAUgHAfAAQAGAAANAEQAfgEAgANIADACIABACIACABIACAAIAHACIADACIABACIABACIABAEIgBACIgBACIgCAEIgCACQgCAFgGADQgHAEgJACIgFACQAAAIgGAEIgTAMQgOAHgFAEQgGANgJAMQgEAGgIAAQgKAYAAAPQAAAHgFAEQgFADgFAAIgCAAg");
	this.shape_3.setTransform(-8.5,4.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3F2032").s().p("AhIBCQgCgyA0glQAigXAQgNIAPgMQAGgDAMADQAGACAFACQAEADgFAAQgJgBgPAKIgWAQIghAXQgWAQgMASQgNATgFAbQgBAFgGAAQgFAAAAgFg");
	this.shape_4.setTransform(-1.1,5.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3F2032").s().p("AiHB8IgPgEIgQgGQgUgKgKgMQgNgQgDgWQgDgVAJgVQAJgSASgQIASgOQANgIAHgDQAWgLAYgBQAXgBAYAGIAtALIApAKQAtAKAkABQAWABAPgCQATgCAMgIQAFgDAEgGQADgGgBgFQgCgIgQgJQgJgFgngQQgagKgMgGQgPgHgIgHIgEgFIgBgDIAIAFQAKAGANAEIAmAMQAoANAMAGQAIAEAGAGQAJAHADAJQAFAWgWAQQgNAJgZAFQgNACgbAAQgpgCgrgJQgRgDgZgHIgsgLQgZgFgRABQgWABgRAJQgpASgPAfQgHAQABAQQACAQAKANQAHAJARAKIAOAGIAOAFQA0APAmgOQANgEAIgIIAHgGQABAAgFAJQgHAKgOAHQgWAKgcAAQgWAAgZgGg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D86097").s().p("AiKB3Qg6gOgHguQgIgtAvghQAogdArACQAPABBGASIAZAFIgqB3QgNAagtADIgSABQgbAAgWgIgABtgKQgmgCgqgKIAlhoQAIALBPAcQBAAYgOAbQgOAbg9AAIgTgBgAAdgWIAAAAg");
	this.shape_6.setTransform(0,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.wormmouth4, rect = new cjs.Rectangle(-21.3,-13,42.8,26), [rect]);


(lib.wormhook = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgSXRQAJo5AAhZQACj1gBnDQAAngABjYIAErCQADmYgEkmQgBgQADgOQACgQACADIAKAHQACgBACAKQACAMgBAPIAAA9QgBAggGgFIABAPIADFEQABDdgCG0IgBKaIAAKXQAADIgEJjQgDEvAAAxQABDRAMB/QACAWgCAYQgCAYgEAAQggAAACoMg");
	this.shape.setTransform(-20.7,-238.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAJBHQgJgBgFgUIgDgbQgIg2AAggQAAgHAHAAQAHAAABAHQAAAWAEAsIADAeQAEAZAEACQAFADgDAEQgCAEgEAAIgBAAg");
	this.shape_1.setTransform(-23.6,-30.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgVBIQgIgCACgHQAEgMAVgsQAPghAAgYQgCACgDgBQgDgBAAgEIgBgGQgCgEACgDQACgEAEAAIAKAAQAGAAABAFQAFAfgQAlQgaA8gBAFQgCAFgFAAIgDAAg");
	this.shape_2.setTransform(-16.6,-32.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AACBKQgGgEgBgQIgDg7QgBgkgHgXQgBgEACgDQADgDAEAAIAJACQAFAAAAAFIAFAPQAEAJAAAGQABAEgEACQgEABgCgDQACARABAiIABAfIABAHQADABACACQACADgBADQgBAFgEAEIgFABIgFgBg");
	this.shape_3.setTransform(-21.6,-32.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgOBBIAMhAQAHgogQgUQgEgGAFgEQAFgFAFAFQATAXgGAqIgLBFQAAAIgHAAQgJAAAAgIg");
	this.shape_4.setTransform(-18.9,-31.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#242628").s().p("AgsCyIgZgFQgagGgZgOQgagPgSgXQgSgYgIgfQgHgeAEgeIACgPIAEgQIAKgcQANgbAUgXQAkgoA7gRQAbgIAXgCIAYgDIAYAAQAwACAjAcQAdAXAQAhQAMAbAEAYQACAKAAAKIAAAOQgBALgBAAQgBAAgBgLQgCgRgEgPQgFgXgNgZQgRgegbgUQghgYgqAAQgKgBgjAEQgTACgbAIQg3ARgfAkQgRASgNAbIgJAaQgCADgBAKIgCANQgHA8AfAqQAcAlA4APIAYAGIAMABIALAAIAhgEIADAAIAKgBQAmgBAmgWQAegSAUgbQAQgTAKgZQAGgPAEgQIADgLQACAAgBAMIgCAOIgFATQgIAbgQAVQgUAeggAUQgnAZgrADIgHAAIgBAAIgPADQgLACgMABg");
	this.shape_5.setTransform(-20.7,-22.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#242628").s().p("AgaA/QgMgCgMgHQgQgKgGgQQgGgRAIgVIADgFIAIgNQAJgLAGgFQADgCAIgDIANgDIACAAIAAABIABgCIAEgDIACgBIAGgCQAKgFALAAQAMgCAMAFQAKADAJAJQAGAHAGAMQAHASgDASQgDARgKANQgNAVgYAFIgMACQgBAAgBAAQgBgBAAAAQgBAAAAAAQAAAAAAgBIAAAAQgBAAABAAQAAAAAAgBQABAAAAAAQABgBABAAIAKgFQATgJAKgRQAGgLABgOQABgOgFgNQgHgPgOgFQgHgDgIACQgFAAgMAEIgDACIgBAAIgIAGIgCAAIgHAAIgGABIgHAEQgFADgGAIIgIAMIgBABQgGAOADAMQADALALAIQAMAJAYAHQAOADABABIAAAAQAAADgPAAQgKAAgKgCg");
	this.shape_6.setTransform(-20.7,-22.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7D868E").s().p("AgsCqQhTgMglg1Qgkg0ARhOQAUhFA5glQAzghBLgFQBLgJAxA1QAuAzgBBNQgEBBgzAxQg0AxhBAAQgXAGgTAAIgTgCgAgtggQgLAJgIAQQgPAiAbAUQAWARAjgBQAggEAQgYQAOgWgEgYQgEgagTgLQgWgMgdAOIgIAGIgEgBQgLAAgLAJg");
	this.shape_7.setTransform(-20.3,-22.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#242628").s().p("AAcJTQgbgDgRgGIgWgHIgVgIQglgPgmghQgfgbgbglQgagkgSgkQgTgigPgoQgJgYgQgzIgUhKQgFgRgKg4QgUh2ADiXIAFjeIAFiXIACgJIADgJQAIgSARgGQANgFARAIQAQAJAQAXQAJAOAEALIADAJIgFgIQgHgNgHgKQgQgVgQgIQgOgHgLAFQgOAFgGAPQgEAKAAAZIgEFhQgCCUAVB2QALA5AEAPIAKAkIALAlQAOAuALAbQARArAQAeQASAjAZAiQAZAiAfAaQAjAfAjAOIAUAIIAUAGQAOAGAaACQAqAEAqgRQAogQAhgfQAfgcAbgoQASgeAWg1QAkhbAHhyQADg+gEhXQgQArgbApQgqBBg4AqQg/AwhBAJQgiAEghgHQgYgFgngRQg3gdgmg4QgPgYgOgdQgNgfgHgXQgahWgGh1QgCgfAAg6IADhzIAJhZIAGguIAHggQAGgbABABQABAAgEAbIgGAgIgFAtIgGBaIAAByQAAAkACA1QAJB1AaBSQAJAcALAYQAOAdAOAVQAjA0A0AbQAiAQAYAEQAfAHAfgFQA8gIA7gtQA1gqAog9QArhDANhBIAOhFIAFBHQAJB+gEBQQgHB1glBfQgWA1gVAgQgaApgjAgQgjAhgsARQglAQgmAAIgRgBg");
	this.shape_8.setTransform(5.4,44.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7D868E").s().p("AgVJCQhhgdhIhlQg4hQgkh3Qg/i6AHkFIACitQABhZADhTQACgtAjAAQAmgBAeBEIAMgjQgaBvAACUQgNHDDLBSQB6A4B9hqQBwhgAaiEQAKCKgHBYQgLB9guBiQgrBfhNAzQg4Akg7AAQghAAghgLg");
	this.shape_9.setTransform(5.2,43.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.wormhook, rect = new cjs.Rectangle(-40.2,-439.9,80.5,543.8), [rect]);


(lib.eyes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHAIQgEgDAAgFQAAgEAEgDQADgDAEAAQAFAAADADQAEADAAAEQAAAFgEADQgDADgFAAQgEAAgDgDg");
	this.shape.setTransform(-8.3,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgSATQgIgIAAgLQAAgKAIgIQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIQgIAIgLAAQgKAAgIgIg");
	this.shape_1.setTransform(-9.7,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGAAQAAgHAGAAQAHAAAAAHQAAAHgHAAQgGAAAAgHg");
	this.shape_2.setTransform(12.1,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgLAMQgEgFAAgHQAAgGAEgFQAGgFAFAAQAHAAAFAFQAEAFAAAGQAAAHgEAFQgFAFgHAAQgFAAgGgFg");
	this.shape_3.setTransform(11.3,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3F2032").s().p("AAgAIQgzgBgPgDQgGAAABgGQABgGAGABIAhAAQAVAAAMADQAHACgBAFQgBAFgGAAIgBAAg");
	this.shape_4.setTransform(12.1,-2.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3F2032").s().p("ABJAMIhJgIQgqgDgfAIQgFABgBgGQgCgEAFgCQA6gTBdAUQAGABgBAGQgBAGgFAAIgBAAg");
	this.shape_5.setTransform(-8,-3.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3F2032").s().p("AgCAhQgLgCgGgJQgFgGgDgJQgDgOAFgMIACgDIABgBIAAgBIAEgDQAEgEADgBQAHAAAAADQAAABgFACIgFAIIAAABIgBAAIAAACQgCAIAEAKQAFAOAIABQADAAAEgDQAEgCADgGQAFgHgDgLQgBgGgEgGIgDgGQABgCAGADQAIAEAEAKQAFAOgFANQgDAJgIAFQgHAGgJAAIgCAAg");
	this.shape_6.setTransform(11.9,0.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgRAPQgJgRAHgQIAHgIQADgCAFABIAMAAQAPAIAAATQAAASgQAIQgEACgDAAQgKAAgHgNg");
	this.shape_7.setTransform(11.9,0.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3F2032").s().p("AgkAtQgJgDgGgHQgGgHgCgIQgEgQAFgNQADgNAJgKQAHgIAKgEQAIgEAIABQAMABAAADIgMACQgPACgKAOQgPAVAHAUQAEAMALAEQAIACAEgBIAQgBQAkgHALgRQAGgIgCgMIgBgEIgCgFQgCgDgEgEQgJgGgUgBQgMAAAAgBQgBgCAMgDQAGgBAJAAQALAAAKAGQAEACAGAHIADAGIADAHQADAQgIANQgJAOgRAIQgOAHgRACIgRACIgCAAQgIAAgIgDg");
	this.shape_8.setTransform(-7.7,0.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgyAbQgIgOAFgSQAFgSAOgLQAPgMASAFIgBAHQAUgEAMADQASAEAHATQAEAbgbAPQgVALgfACQgVgBgJgPg");
	this.shape_9.setTransform(-7.7,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.eyes, rect = new cjs.Rectangle(-16,-5.1,32.1,10.2), [rect]);


(lib.whaletongue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A51941").s().p("AiMA6QgIAAgKgGQgJgGABgKQABgLALgDQARgFAOgQIAZgdQAggfAkAAQAWAAAzALIAXAEQAOACAJgBQAEgBAPgHIAVgIQASgFALARQAPAWgJAXQgIAUgZAMQgsAUg8ghQgngTgNgDQghgHgRAdQgMAXgTAOQgHAGgJABIgDAAQgHAAgIgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.whaletongue, rect = new cjs.Rectangle(-16.7,-6,33.4,12.1), [rect]);


(lib.whaletail = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#181B21").s().p("AggCzQAAgCAIgCQAJgDAQgBIAogDIAYgEQAPgDAKgGQAMgGADgNQABgHAAgHIgCgFIgDgFQgFgFgYgCIgUgEIgCAAIgRgMQgQgNgNgRIgegoIgJgKQgHgJgFgLQgHgQgFgdIgDgQIgCgGIgDgWQgEgdgEgNQgDgKgEgFIgCgBIgCgBIgEAAQgEAAgDAKQgCAFgCAMQgDAZACAvIAEA8IABADQAGAuAOAsIAJAYQAEAJgBAAQgBABgFgIQgGgJgHgOQgRglgKg1IgCgGIAAgCIgGg4QgDgzADgZQAAgKAEgMQACgFAEgGIAEgGIAIgEQAGgDAKACIAHADIAGAFQAHAIAFAPQADAKAGAiIAIArQAEAdAGAMIAKARIAGAGIABACIACABIABADIAEAEIAXAhQAPASAMAKIAMAJIAlAGQAMADAHAIIAGAJIACAFIABAHQAAAIgCAKQgFATgTAJQgKAGgTADQgMACgNAAIgpAAIgYAAIgHABIgCgBg");
	this.shape.setTransform(11.4,-15.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4D586D").s().p("AhCB5QgagsgOhRQgGg7gBgqQAAhTAiARQAMAIAGAkIAIAxIAKAuQAHAYARAQIAhAtQAWAbARAIQAOAEAYACQASAEAEARQAEAtg8AHQhGABgUAHg");
	this.shape_1.setTransform(11.4,-14.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.2)").s().p("AimCXIAQhiQAZAAApgRIA3gZQAfgOASgNQAYgRAPgYIAZgsQAOgaAQgPQASgQAOACQANACAIARIgFAJQggBGgPAdQghA6gjAjQgpAqg2AZQg8Aag6AAg");
	this.shape_2.setTransform(-6.8,17.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#181B21").s().p("AizDfIgCgBIAAgBQABgHABAAQAAAAAAABQABAAAAABQAAAAAAABQAAABAAABIAcgEIAcgGQA2gPAtgeIAagUIANgMIANgNQAbgeATggQAVgiASgpIAVguIABgDIABgBIABgDIAGgKIAJgUQAPgmgLgkIAAgBQgDgMgEgGQgFgIgEAAQgFgCgJAGQgFADgIAKQgKAMgKAVIgQAkQgEAKgFAIIgCAFIgDACIgJAIQgGAGgXAPQgQAKgnATQg3AdgdAEQgQABgJgCQgIgDAAgBIAIAAQAKABANgDQAcgHA0geQAjgTASgMQASgMAIgIIAJgJIAZg3QAKgYALgOQAKgMAHgEQAPgKAMABQAJACAGAFIAJALQAGAKADAOIAAgBQAOArgTAsQgCAHgIAQIgGAKIgXA0QgRAlgYAnQgWAkgcAcIgOANIgOAMIgOALIgOAJQgxAfg4AMIgdAEg");
	this.shape_3.setTransform(-5.2,11.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4D586D").s().p("AivDTIAhjbQAVAIAtgSIA9geIAngWQAWgOASgSQAGgKASgqQAOggAPgQQATgTAPAHQAOAGAFAaQASAzgmA/QgfBFgPAdQggA7gjAjQgpAqg3AZQg6Aag6AAg");
	this.shape_4.setTransform(-5.6,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.whaletail, rect = new cjs.Rectangle(-23.5,-33.3,47.1,66.8), [rect]);


(lib.whalemouthgroup1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag/CAQgugWgBgvQgJgPAAgaQgBgWAGgSQAUhAA6gbQA7gcArADQA8AEgGBFQgJBUgVA5QgKAagSAOQgPALgcAIQgQAEgQAAQgZAAgZgLgABFh4QgdAAgpAMQgcAIgXAPQgbASgMAZQgHARgEAYQgGAdAGAQQAIAAAAAJIABAFQADADgCAFQAJAjAmANQAjAMAhgMQAWgJAIgFQAPgKAFgTIAJggIAOg7QAIgrgBgUQgDglgeAAIgBAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A51941").s().p("AAhA7QgTgBgVgKQgqgUgUgcQgFgEACgIQAAgGAFgFQgEgHABgHQACgHAHgGQAKgGAQgCQAPgCALAEQASAFAVAUQAcAaAFAGQASAYgLATQgKAPgWAAIgFAAg");
	this.shape_1.setTransform(-3,7.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0C0808").s().p("AAHCBIgpgFQgagEgOgIQgXgNgBggIAAgNQgGgJgCgLQgDgfARgfIADgQQAHgWAWgUQAhgdA+gLQAWgEASAIQAHgBAIACQAHACAFAGQAGAHgBAIQAAAFgBAFIgBACQACAGAAAHQAAAGgCANQACAIgCAJQgEATgGAlQgFAmgFASQgFAVgaARQgYAQgUAAIgDAAg");
	this.shape_2.setTransform(-0.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.whalemouthgroup1, rect = new cjs.Rectangle(-12,-13.9,24.1,27.9), [rect]);


(lib.whalemouth2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0C0808").s().p("AhIgHQgDgEAFgCQAEgDADAEQAJAMAYAFQAWAEAOgFIAegLQAUgIALgDQAEgBACAFQACAEgEACQgzAWgXAEIgQABQgjAAgSgag");
	this.shape.setTransform(-4.4,23.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0C0808").s().p("Ag+DeQgdgHgSgZQgOgTgGgiQgFgbABgjIAEg7QAEhCAKgsQAGgYALgaQAKgXAQgUQANgNAFgDIAUgMIALgEIAKgDIAUgDQAegDAgANIAMAFIALAGQAHAEAKAIQAQAOAEAIIAFAJQgBAAgHgHQgGgGgPgMQgLgHgHgDIgWgKQgfgJgaADIAAABIAAAAQgoACgbAhQgPARgIAWQgKAWgFAZQgJArgEBAIgDA6QgBAhAEAaQAGAdALAPQANATAXAGQAVAFAYgDQAVgEATgLQAngWAPgnQAJgWgCgPIAAhJQAAgRACgPQAAgLADgSIAEgaQAHggAIgcQAAgBAAgBQAAAAABgBQAAAAABAAQAAgBABAAQABAAAAAAQABAAAAAAQAAAAAAAAQAAABgBAAIAAAAQgBABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAIgBAAIgHA+IgDAZQgCARAAAMIAAAfIACBJQABASgIAZQgQAtgsAaQgiAUgjAAQgPAAgQgEg");
	this.shape_1.setTransform(0,-2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0C0808").s().p("Ag8DYQg6gNgJhPQgCgVAFhqQAHhWAUgwQAghLBDgEQAigFAlARQAjAQAVAdIgRAeIgCAAQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAABQgNA+gEApQgCAXABAmIABBBQgFA3gvAiQgkAagoAAQgMAAgMgCg");
	this.shape_2.setTransform(0.6,-2.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.whalemouth2, rect = new cjs.Rectangle(-13.4,-25,26.9,50), [rect]);


(lib.whalelegr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.2)").s().p("Ag3AvQgig7AAgtICzgvQAAAjgOA0QgJAsgHAXQgPAsgWAIQgGADgHAAQggAAghg6g");
	this.shape.setTransform(-2.1,-3.8,1,1.108);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#181B21").s().p("AADBtQgMgCgLgIQgQgLgOgVQgUgegLgjQgJgYgBgWQgBgSADABQABAAAEAQQAHAXAJAUQAOAhATAZQAOATAMAIQAHAFAIABQAKACAGgEQAGgDAHgJIAJgRQAJgTAFgTIAJgiIAIggQAFgVAFgYQADgRACAAQACAAABASQAAAVgEAaIgGAgQgEAXgEANQgFAWgIATQgFAMgGAIQgIAMgMAHQgJAEgLAAIgIAAg");
	this.shape_1.setTransform(1.9,3.3,1,1.108);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4D586D").s().p("Ag2AvQgjg7AAgtICzgvQAAAjgOA0QgIAsgIAXQgPAsgWAIQgGADgHAAQggAAggg6g");
	this.shape_2.setTransform(1.9,2.8,1,1.108);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.whalelegr, rect = new cjs.Rectangle(-11.1,-15.4,22.3,30.9), [rect]);


(lib.whalelegl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.2)").s().p("AglBoQgegRgHhQQgDgZABhaIADAAICWAoQAAAyggBCQgeA9ghAAQgJAAgKgFg");
	this.shape.setTransform(1.9,-3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#181B21").s().p("AgoBtQgPgKgKgZQgHgQgDgUQgFgbgBglQAAgvAEgjIgDgBIAAgEIAKgCIAAAEQACAQAEBEQADAlAFAYQADASAGAPQAIASAKAHQAIAFAIgBQAIgBAIgGQANgJANgVQAQgZAPgoQAIgWAGgZQAEgSABAAQADAAAAATQgBAWgIAcQgLApgRAeQgPAZgQALQgNAKgMAAIgFABQgNAAgLgHg");
	this.shape_1.setTransform(-1.5,2.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4D586D").s().p("AgkBoQgdgRgIhSQgCgYAAhZICYAoQAAAzggBBQgdA9ghAAQgJAAgKgFg");
	this.shape_2.setTransform(-1.2,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.whalelegl, rect = new cjs.Rectangle(-9.6,-13.8,19.3,27.7), [rect]);


(lib.whaleeyes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{whaleEyesOpen:0,whaleEyesClosed:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// EyesNormal
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIAOQgDgFAAgJQAAgIADgFQAEgHAEAAQAFAAADAHQAEAFAAAIQAAAJgEAFQgDAGgFABQgEgBgEgGg");
	this.shape.setTransform(70,-9.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgSAhQgIgOAAgTQAAgSAIgOQAIgOAKAAQAMAAAHAOQAIAOAAASQAAATgIAOQgIAOgLAAQgKAAgIgOg");
	this.shape_1.setTransform(68.6,-6.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMAOQgGgFAAgJQAAgIAGgGQAFgFAHgBQAIABAGAFQAFAGAAAIQAAAJgFAFQgGAHgIAAQgHAAgFgHg");
	this.shape_2.setTransform(-59.4,1.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgeAhQgNgOAAgTQAAgSANgOQAMgOASAAQASAAANAOQANAOAAASQAAATgNAOQgNAOgSAAQgSAAgMgOg");
	this.shape_3.setTransform(-61.6,4.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgfAIQgFgBABgFQABgEAFABQAMABASgDIAegEQAEgBABAEQAAAEgEAAIggAGQgLACgKAAIgKAAg");
	this.shape_4.setTransform(75.7,-10.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag3ALQgEAAABgFQAAgEAFAAQAWAAAfgFIA3gJQAEgBAAAEQABAFgEAAIg4ANQgTAEgQAAQgLAAgJgCg");
	this.shape_5.setTransform(74.9,-14.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgEBTIgOgEIgLgHQgJgHgIgLQgMgRgHgYIgEgTIAAgSIAAgCQAEgVAJgMQAFgIAFgEIAIgHIAEgDQAMgCAKABQAKACACAEIAAgBIACAAIAMABIAIACIAJAEQAGADADAEIAJAJQAFAIAIARQAGAQACAPQACAUgIARQgIAUgSALIgJAGIgKAEIgMADIgHAAIgEAAgAgehGIgHAHIgHALQgGALgCARIgBACIABABIAAAEIABAJIAEAQQAGATALAPQANATAQACIAGAAIAHgBIAIgEIAHgEQANgIAHgPQALgYgLgfQgDgMgGgLIgDgEIgKgKIgNgIIgIgDIgCABIgBABIAAAAIgCgCQgEgCgHAAQgKABgIADg");
	this.shape_6.setTransform(66.3,-7.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgoAxQgVghAAgkQAFgiAXgTQAKgDAKABQANAAABAHIABgFQAaAEAMARQAZAlgEAhQgEAmgnARQgJADgIAAQgWAAgTgbg");
	this.shape_7.setTransform(66.3,-7.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAnAQQgSAAgWgIIgogMQgFgCABgFQACgFAFABIAmAMQAXAFAQABQAHAAAAAHQAAAGgGAAIgBAAg");
	this.shape_8.setTransform(-74.8,-1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgBAMQgvgSgXgIQgFgCABgFQACgFAFABIBEAXQAoAMAeADQAFABABAGQAAAFgGABIgHAAQgcAAgkgOg");
	this.shape_9.setTransform(-73.2,-6.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgQBoIgHgCIgOgFIgHgDIgFgEIgLgJQgVgTgGgZQgGgXAFgYQAFgUAKgTQALgSAKgLIAGgGIAGgFIANgHQAUgHARACIACABIAAABIAAACIAAgBQAGgFAMAAQANAAAPAGQACAAACADIADADIAGAHQAGAIAEAJQAKAUAAAYIAAAIIgBAGIgDALQgCAKgGAPQgMAbgTAVIgLALQgGAFgHAEIgIAEIgIADIgQACgAgWhWIgKAHIgFAEIgFAGQgJAMgIAQQgUApAKAgQAFAUARAPIAJAHQAIAFACAAIAJAEIAGABIAFAAQATABAXgXQASgTAKgXIAJgWIADgQIABgBIAAgDQAAgXgHgQQgDgKgEgGIgFgGIgCgDIgBgCQgNgGgLgCQgJgBgFACIgFADIgCgEQgSADgMAHg");
	this.shape_10.setTransform(-64.5,5.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgkBaQgvgcABgyQABgsAmgsQAVgUAgAAIAAAHQAEgJARACQANABAMAGQAbAbAAAuQgGAvgiAmQgaAdgZAAQgOAAgOgIg");
	this.shape_11.setTransform(-64.5,4.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AghAKQgBgFAFAAQANgBAQgGIAdgMQAEgBABAEQACAEgEABIgeAMQgQAHgOACIgBAAQgEAAAAgFg");
	this.shape_12.setTransform(74.9,-8.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ag4AUQAAgEAEgBQAWgFAegMIAzgVQAEgCABAEQACAEgEACIgzAYQgeAPgYAAQgEAAgBgEg");
	this.shape_13.setTransform(73.4,-11.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgeAWIgTgEIgNgGQgGgDgDgFQgBgEACgEQACgDAFgEIAJgEIADgBIAFgCIAVgBQAIAAAFACQAFABgBACQAAABgQAEIgOADIgIADIgBABQgBABAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIACAAIACAAQAHACAJABQASABARgBQAPgBALgCIALgDIACAAQAAAAAAAAQABAAAAgBQgBAAAAAAQAAAAgBgBIgGgCIgJgCIgcgDQgKgBAAgCQAAgCAKgDQAVgDAIAAIALABQAIABAFACQALADAEAGQACAEAAADQAAAEgDADIgHAGIgLAEIgOAEQgMAEgQABIgPABQgMAAgMgCg");
	this.shape_14.setTransform(66,-7.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgfAOQgagEgGgHQgBgGAVgGQAbgGAIADIAAgBQAWgCASABQAeAFABAHQACAGgkAIQgRAEgRAAQgNAAgNgCg");
	this.shape_15.setTransform(66,-8.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgsAVIgfgGQgIgCgDgDQgDgDgBgFQgBgDADgEQAFgHAOgEIAJgCIATgDIAmABQANABAAACQAAADgNACIgkAFIgUAFIgBABIgBABQgBAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAIACAAIAQACQAOACAUAAQAUAAAagEIAVgDIADgBIABAAIACAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAgBAAIgCgBIgGgCIgYgDQgWgDAAgBQgBgEAXgCIAagBIAJACQAFAAAHADQAHADADAEIACAFIABAFIgFAEQgDADgEABIgIAEIgIADIgXAFQgdAFgUAAQgRAAgTgDg");
	this.shape_16.setTransform(-65.7,2.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgkAPQgvgFABgIQABgGAmgHQAVgDAgAAIAAABQAJgDAlADQAbAEAAAIQgGAGgiAHQgZAEgYAAIgegBg");
	this.shape_17.setTransform(-65.7,2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9,p:{x:-73.2,y:-6.5}},{t:this.shape_8,p:{x:-74.8,y:-1.2}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_9,p:{x:-74.3,y:-2}},{t:this.shape_8,p:{x:-76,y:2.3}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80.8,-15.5,161.6,31);
p.frameBounds = [rect, new cjs.Rectangle(-81.9,-14.1,161.1,19.3)];


(lib.whalebody = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhLAdIhTgSQg6gSABggQABgFAFAAQAFAAAAAFQABAaA/ARQAdAIA5AIQBLAMA5gBQBJgBA5gWQAFgCACAFQACAFgEACQg+AbhUAAQhAAAhOgQg");
	this.shape.setTransform(-9.4,36.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag8CJQgQgSgNgiQgHgSgKgnQgBgOgCgMQgEgWgLALQgOAMgMAEQgIABgBgGQgNgxAOhKQABgGAFABQAGACgBAGIgGAyQgCAeAFAUQACAHALgHIANgJQATgFAGAJQAHAPAAAdQABARALAeQALAcAKAQQAWAiAYgyIAbhMQAKgaADgEQAKgTAOgEQAHgDADAIQAEAcAmgPQAHgQAEgNIAJgfQALgoAWgdQADgEAEAEQAFADgDAFQgKARgNAwQgMAsgOATQgKANgMAHQgPAKgMgHQgJgGgJgXQAAgBgJAPIgJARIgPApIgPApQgJAagNANQgKAJgJAAQgKAAgKgKg");
	this.shape_1.setTransform(-10.4,-7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.2)").s().p("AiuAXQgUgmAEgzQAEgxAZgpIErgGQAOgFAMAEQAKADALALQANAWgMAiQgIAYgUAbQgXAchGBHQgOALgiAjQgdAggWAPQgRAQgSAAQg0AAg1iPg");
	this.shape_2.setTransform(-6.2,-27.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#181B21").s().p("AhSCqQgPgFgPgOQgKgKgLgPQgYglgZhCQgQghABgsIABgRIAEgXIAGgUQAKgZAHgJIAIgLQACAAgGANQgFALgHAYIgFAaIgBAfQABAoAQAeIAAABQAaBBAXAhQAUAdAUAHQAMADAMgGIAMgIIANgKIB2hzQA+g9AXgnQANgbgCgUQAAgIgFgKQgIgIgEgCQgIgGgOAAQgIABgBgBQAAgBAJgDQANgDANAGQAGADAKAIIAFALIADAMQAEAXgOAfQgNAfgWAXQghAlgQAQIgfAgIgaAZIgdAeQgRATgPALIgNAKQgJAHgHAEQgHADgLACIgHABQgIAAgFgCg");
	this.shape_3.setTransform(-6.3,-27.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4D586D").s().p("AiuAXQgUgmAEgzQAEgxAZgpIErgGQAOgFAMAEQAKADALALQANAWgMAiQgIAYgUAbQgRAWgbAbIgxAyQgOALgiAjQgdAggWAPQgRAQgSAAQg0AAg1iPg");
	this.shape_4.setTransform(-6.2,-27.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.2)").s().p("AAWHQQhLgCg3gbQhdgrgehZQgYhGAPhsQAIAHAHAFQAJAFAJgEQAJgEADgJQADgIADgLQAegXAihlQAjADAohWIAqhuQAHgSgUgFQgTgFgHARIggBUQgLAcgOAaIgCACQgCgMgLgFQgLgFgJAKIgHAJQgFgFgHAAQgDgLgOgBQgOgCgGALIgJAPQAThuARg8QAahdApg+IAGAAIBLg8QChCXA5EwIAoDtQAbCVg4BFIgzAHQhEAKgzAAIgRAAg");
	this.shape_5.setTransform(6.5,-7.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAZCdQgUgFgPgOQgLgJgQgSQgQgTgIgGQgNgMgMAAIgHAAIgHABIgOAGIgZAUIgbAVQgRAMgNAEQgJADgKAAQgLgBgIgFQgIgEgGgHQgFgGgEgJQgGgOAAgSIAAgdIAAgGIgBgEIgHgJQgIgHgJACIgXAIQgQAFgKAAQgQABgKgGQgMgHgCgPQgBgKABgLQADgSAQgvQAJgaADgOIACgPQADAAgBAPQAAALgIAfIgJAeQgFATgCAQQgDAYANAGQAHAEALgCQANgBAJgDIAZgJQAJgCAHACQAIACAHAGIAFAGIAFAHIACAJIABAIIAAAcQAAAPAFALQAIAOAJAEQARALAggYIAZgVIAbgVIAJgFIATgFIALgBQASABATAQQAKAIAQATQAPARAIAHQANAMAQADQARAFALgHQAKgGAHgdIAFgXQAFgPAIgJQAJgMAQgBQALgDAPAEQASAFAXATIAhAbQASANAPABIAJAAIAIgCIALgFIAEgCQAPgMADgPIABgHIgCgGIAAgDIAAAAQAAgGgFgJIgUgdQgGgJgDgGIgEgKIgBgFIAAgDIAAgCIABgCIACgGIAEgFQAEgEAIgBQAJAAAKAEIAdAOQAMAFALgFQAMgEACgLQADgKgEgMIgBAAQgFgTgagSQgYgPgHgKQgHgKAAgPQAAgIABAAIACAIQADAPAFAGQAHAJAYANQAOAIAIAHQALALAFAPIAAgBQAGARgDAMQgEARgRAHQgRAHgRgGQgTgKgJgDQgJgDgEAAIgCABIgBACIgBACIAAABIABAEIACAGIAJANIAVAeQAHANAAAIIAAACIACAHIgBAMQgEAVgUARIgHAFIgOAGIgLACIgMABQgVgCgWgPIgigcQgUgQgOgEQgJgDgJACQgIABgFAHQgHAHgHAfQgDANgEALQgGAPgMAHQgJAGgNABIgFAAQgIAAgJgBg");
	this.shape_6.setTransform(0,41.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#960E24").s().p("AAjCZQgdgDgrgxQglgqgkAOQgRAHgwAqQgsAfgZghQgLgQAAgaQAAghgCgFQgMgVgTADQgWAIgOADQg8AMAPhCQAdhRgEgYIJ/gaQgDAdAhAUQAmAYAGAUQAJAYgOAOQgOAOgVgFIgjgQQgVgIgEARQAAANAUAaQAUAbAAANQAEAPgIAOQgHAOgQAKQglATgtgkQgWgUgMgJQgUgOgRAAQgWAAgLARQgFAJgGAbQgLAvgiAAIgFAAg");
	this.shape_7.setTransform(0,41.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AiOIIIg7gUIgogXIgMgJQgygmgWg5QgSgvgCg/QAAgvAIg5QADgUAPhLIAQhWQARhgAOg2QAOg7AWgzQAQgnARgaIALgQIAHABIgGABIgJAQQgQAggNAiQgSAtgPBBQgMA2gPBgIgOBWQgOBHgEAYQgIA4ACAtQABA6ASAuQAWA0AsAiIAMAIQAEAEAIAEIAZANIA3ATQA3AMBCgEIAegCIAfgEQAVgDArgEQBHgJAxgXQAegPAUgSQALgJAIgMQAJgOAFgLQATgtgEhEQgBgYgFghIgKg4IgijQQgThkgbhOQgahKgkhAQgdgyglgsQgYgcgagYIgSgSIAVAPIAXAUQAKAIAEAGIAQAQQAnArAeAyQAlA9AdBOQAeBUATBfQANBBAYCQIAJA4QAGAiABAYQAFBJgVAyQgGAOgKAOIgKANIgMAMQgZAWgdANQgzAZhLAJQgrAFgVADIggAEIgfACIgfABQg2AAgpgKg");
	this.shape_8.setTransform(-2.5,-4.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#960E24").s().p("AhDINQhMgDg3gbQh0g2gSiBQgMhWAhiXQAXiSARhLQAdiDAzhRIAGAAIDbimQBqBTBCCNQA1BxAdCcIAoDvQAdCdg/BGQgoAohEAUQguANhIAHQhEAKgyAAIgRAAg");
	this.shape_9.setTransform(-2.5,-5.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.whalebody, rect = new cjs.Rectangle(-37.8,-57.6,75.7,115.4), [rect]);


(lib.whalearmr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.2)").s().p("Ag4A2QgeglgPgzQgKglgBgUQASgBAcAWIArAlQAMAIA4AgQA2AiAOAXQgSAIgeAIIglAJQgKADgKAAQghAAgfgmg");
	this.shape.setTransform(-1.7,2.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#181B21").s().p("AgrB0QgRgIgQgSQgLgLgMgVQgTgigJghQgLgqAAgXQAAgUAIgMIAGgHIAGgFQAGgEAJgCQANgCAOAHQAIAEAMAJIAaAYQAUAVAAABQgCACgXgSIgcgVIgSgKQgMgFgIACQgIABgIALQgEAHAAARQAAAYAMAkQAJAgASAeQANAUAIAJQAPAQAMAGQAUAKASgFIAtgLQAXgGARgHQAXgIAHgKIAAgBQAEgGgCgHQgDgGgHgJQgJgLgSgOQgVgQgegTQgtgfACgCQABgCAwAaQAgARAWAQQATAMAMANQAIAKAFAKQACAHAAAHQAAAHgFAIIAAgBQgGAKgLAHIgUALQgTAHgYAHIgtALQgJADgJAAQgRAAgRgKg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4D586D").s().p("AhKBPQgeglgOgzQgUhJAQgUQAUgaAjAXQAUANAlAiQANAKBMAuQBBAsgSAZQgJARguAOIg9AQQgKADgJAAQgiAAgfgmg");
	this.shape_2.setTransform(0,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ABDA1QhAgihMg9QgEgEAEgEQADgEAEACQAtAjBeA8QAEADgCAFQgCACgCAAIgEAAg");
	this.shape_3.setTransform(-0.6,-6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.whalearmr, rect = new cjs.Rectangle(-13.8,-12.5,27.8,25.1), [rect]);


(lib.whalearml = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.2)").s().p("Ag8BYQgegFgWgIQAAgIAGgIQALgPAegOQAkgSAJgGQA2gpAZgZIAcggIAaB1QgZAfglASQglASgiABQgQAAgYgFg");
	this.shape.setTransform(2.5,3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#181B21").s().p("AgCCDIgbgDQglgGgVgIQgSgGgLgIQgIgGgGgHQgHgKAAgKQAAgKAFgKIABgCIALgNQANgKAPgIIAbgMQAOgGAJgGIBShCIAngnQARgRACACQABABgPATIgiAsIhRBGQgLAHgPAIIgaANQgiASAAAQQAAAJAMAJQAIAFARAHQAXAJAeAFIAaADIALAAIAMAAQAZgEAQgHQAegMAZgUQATgPABAAQABADgQASQgVAXghAQQgSAJgbAFIgNABIgKABIgDAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4D586D").s().p("AhYBuQg8gWAWgjQALgPAegOQAkgSAJgGQA2gpAZgZIAbgeQARgUAKgKIAoC6QgZAeglASQglATgiAAQgrAAgtgRg");
	this.shape_2.setTransform(0.5,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.whalearml, rect = new cjs.Rectangle(-13.8,-13.1,27.6,26.2), [rect]);


(lib.tophead = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhzATQABgEAHgEQAJgGAagIIAAAAQAagMAsgFQA4gFAfAEQASABAJAFQAFAEAAACIAAADQgBgDgGgCQgIgDgRAAQgdgBg5AFQgqAFgaAJIAAAAQgYAGgMAFIgIAFIgDADg");
	this.shape.setTransform(43.5,9.2,0.833,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCFCE3").s().p("AhhAHIAbgIQAYgKAzgHIA9gCQAzAAAAAMIjpAdQAAgGATgIg");
	this.shape_1.setTransform(43.5,9.4,0.833,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgKAPQgEgHAAgIQAAgHAEgHQAFgFAFAAQAGAAAFAFQAEAHAAAHQAAAIgEAHQgFAFgGAAQgFAAgFgFg");
	this.shape_2.setTransform(45.5,-18.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgXAhQgKgOAAgTQAAgSAKgOQAKgOANAAQAOAAAKAOQAKAOAAASQAAATgKAOQgKAOgOAAQgNAAgKgOg");
	this.shape_3.setTransform(43.8,-16.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhzATQABgEAHgEQAJgGAagIIAAAAQAagMAsgFQA4gFAfAEQASABAJAFQAFAEAAACIAAADQgBgDgGgCQgIgDgRAAQgdgBg5AFQgqAFgaAJIAAAAQgYAGgMAFIgIAFIgDADg");
	this.shape_4.setTransform(20.8,12.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FCFCE3").s().p("AhhAHIAbgIQAYgKAzgHIA9gCQAzAAAAAMIjpAdQAAgGATgIg");
	this.shape_5.setTransform(20.8,12.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ah9AeQABgEADgDQAFgHAUgJIAngRIAYgJIAbgHQAZgFAbgBIAMAAIAUACIAmAPIALACIgDACIgIAAQgJgBgUgHIgJgDIgCAAIgCAAIgFgBIgLAAIgLAAQgaACgZAEIhZAeQgTAIgGAFIgGAFIgCACIABgDg");
	this.shape_6.setTransform(-5.2,15.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FCFCE3").s().p("AhpANIAbgNQAzgVAcgEQAzgHAaADIAZAKQAPAFAIgBIj7AtQACgIASgJg");
	this.shape_7.setTransform(-5.3,16);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhoAgQAAgDACgEQAEgKANgJQAZgPA1gNQAdgIAOgCQAZgDANADIAOAEQAHACADADQAIAEgBABIgJgCIgKgDIgNgCQgNgCgXAEIgqAKQg5APgTAKQgMAHgGAIIgDAFQAAABgBAAQAAABAAAAQAAAAAAAAQgBAAAAAAg");
	this.shape_8.setTransform(-31,21.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FCFCE3").s().p("Ag+gCQAPgGArgMQAkgKASgBQAegCAZANIjRA0QACgTAogPg");
	this.shape_9.setTransform(-31,22);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#252728").s().p("AgLAgIgEgEIgBgEIgCgIQAAgMAEgLQAEgKAEgEIADgDIACAAIgBABIgBAEIgEAOQgCANABAHQAAAHACABIADAAIADgDQAIgIACgNQABgMgEgHQgDgGgGgCIgFgDQAAgBAFAAQAJAAAGAHQAHAKgBAPQgCAQgKALQgGAGgFAAQgEAAgDgBg");
	this.shape_10.setTransform(-58.3,-13.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3E4244").s().p("AgIAeQgJgFAFgZQAFgXAGAAIgHgGQAbAAgFAfQgFAcgMAAIgFAAg");
	this.shape_11.setTransform(-58.3,-13.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#252728").s().p("AgGAgIgJgBIgJgDIAAgJIABgEIACgHIAEgLQACgFAEgEIAGgGQAFgEAAABQABABgEAFIgEAGIgGATIgCAKIAAABIABAAIABAAIAHABQAIAAAFgCQALgGgCgQQgCgOgIgGQgGgFgHAEIgGACQgCAAAGgGIAIgEQAFgBAGAEQALAGAEASQABAJgCAIQgDALgJAEQgHAEgHAAIgEAAg");
	this.shape_12.setTransform(-25.1,-18.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3E4244").s().p("AgUAaQAAgKAEgNQAEgLAFgFIAHgHIgNAAQALgMAKAIQAKAHACAPQACAPgJAJQgGAGgKAAQgHAAgKgCg");
	this.shape_13.setTransform(-25.1,-19);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2A2C2D").s().p("AAQBjQgNgCgMgIQgUgLgPgWQgMgTgFgTQgIgZgBgdIAAgHQAAgPACgKQADgKAFgGIAHgHIAKgFQAIgDANAAIALABIALADQAWAJARAVQAhArgBA7QgBAQgEAOQgGARgNAJQgKAHgMAAIgJgBgAgnhSQgNACgFAPQgDAHgCAQIAAAAIAAADQAHAjAHASQARArAfAQQAWANAOgJQANgKACgfQABg0gcgmQgOgTgQgGIgIgDIgJgBIgGgBQgGAAgEACg");
	this.shape_14.setTransform(45.3,-19.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAABTQghgRgRgtQgLgcgCgiQABgWAFgJQALgWAkAFQAeAGAWAkQATAfADAmQADAngQATQgKALgOAAQgNAAgOgIg");
	this.shape_15.setTransform(45,-19.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAnBaIgUgMIgYgUIg/hHQgUgUgGgNIgDgGIgBgFQAAgBAAgBQAAgBAAAAQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAABAAAAQABABAAABIACADIAEAFQAIAJAVASIALAJIAfAhIAYAZIAOALIAJAHIABAAIAMg0QAJgkAKgVQAKgXANgMQALgLADADIgIANQgKAQgGATQgIAYgGAgIgHAjIgLAqIgBABg");
	this.shape_16.setTransform(43.7,17.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FCFCE3").s().p("AgJAwQgPgPgZgeIgbgaQgSgTgEgMIDFgdQgbAWgOA4IgWBZQgVgLgYgZg");
	this.shape_17.setTransform(43.7,16.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgmAeIgbgcIgMgMIgLgNQgRgXgJgVQgGgSACgBQABAAAKAPQAOAWAPARIAZAXIAdAaIAyA5IABgBIAGgWIAOgrIAJgSIAKgRQAGgLAOgRQATgaAFgQQAHgRABABQADAAgDATQgCASgSAdIgSAcIgIARIgIARIgaBhIgBACg");
	this.shape_18.setTransform(20.9,22.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FCFCE3").s().p("AgOA0QgdghgUgRQgkgggSguIDrgbQgCAYgQAaQgUAdgJAPQgNAWgKAhIgQA6Igug0g");
	this.shape_19.setTransform(20.8,21.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AANBNIgFgEIgEgEIgngfIgcgZIgYgTQgagUgJgMIgFgHIgCgFQgCgEABgBIAEADIAJAIQAJAIAdASQAJAGARANIAdAWIAQAMIAZATIAHAGIABgBIAFgXQAGgSANgTQAJgOAOgQIAUgZQATgWAIgPQAKgOABABQADAAgHARQgFAQgRAaIgTAaQgNARgHAMQgMASgEAQIgDAKIgCAKIgCAug");
	this.shape_20.setTransform(-5.5,24.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FCFCE3").s().p("AgQA0QgIgFgsglIghgXQgWgRgGgNIEDgzQgIAVgzBFQgnAzACAxQgPgSgjgag");
	this.shape_21.setTransform(-5.5,23.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("ABGBrIgVgVIgPgKIgggSIgCgBIgSgPIgegVIgWgVIgBgBIAAAAIgGgDIgQgMQgJgIgFgIQgEgHAAgHQAAgBAAgBQAAgBAAAAQAAgBAAAAQAAAAABAAIACADQADAGAEAEQAEAEALAJIAQAJIAHACIAZAUIAuAhIARAJIAUAKIAPAKIACACIAAAAIAEgNQAEgSACgWIALg5IAAgCIABgIQAEgcAKgSQAEgIAFgDIAEgBIABABIgCADQgEAFgBAGQgFASgCAaIAAAJIgHA7QgDAcgDANIgDAPIgBABIgBACIgKAcIAAABIAAgBg");
	this.shape_22.setTransform(-30.8,30.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FCFCE3").s().p("AAlBKIgigSQgGgGgcgTQgXgPgMgPQgOgFgNgLQgQgOgBgNIDdg4QgIAEgHAaQgGAaABANQgEAOgGAxQgFApgJAXQgKgMgUgMg");
	this.shape_23.setTransform(-30.8,29.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,255,255,0.149)").s().p("AnzCCQg3gngmg6IgDgLQBbhECigqQBdgYC0ghQBqgOA2gEQBagHBMAFQDRALCCApQgYA+g7AkQhAAthpAMIi4AIQhSAAhdAWQhHARhkAjQhdAlhCAGIgcABQhJAAg1gmg");
	this.shape_24.setTransform(-6.2,-22.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(0,0,0,0.2)").s().p("AnmChQhahAgvh5QAoA5A4AmQBCAtBfgIQBFgGBhglQBogjBKgRQBhgVBWAAIDAgIQBugMBDguQBKgrAUhRQAHCXhpA+QhAAuhpAMIi4AIQhSAAhdAWQhHARhkAjQhdAlhCAGIgcABQhJAAg1gmg");
	this.shape_25.setTransform(1.5,8.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333638").s().p("AmOFbQg0gLgpgjQgIgGgMgLIgTgSIghgpQgegsgVgyQgQgpgQg+IgThUIgThTIgEgSIACgCIAcgUQAUgMARgKIAmgTIAngQQBDgbBYgUICYgfIBXgRIA6gGIBHgHIAigDIAigCQAcgCAmAAIA/ACQBQAFAoAFQBzANBYAbIAqAOIAcANIAYAQIAPALIAZAYQAdAiATA0IAHAiQAAAAgLghQgLgYgGgNQgOgZgTgUQgxgzhSgVQhagahwgLQgngEhPgFIhAAAQgmgBgaADIhEAFQgtAEgZADIg5AHIgCAAIhVARQhyAXgkAJQhXAUhCAaIgTAIIgSAIIglASIg2AjIAAAAIABAFQAHAaAMA6QALA2AIAdQANA4ASAsQATAyAdAoIAPAUIAQATQAcAaAJAHQAlAgAxALQAqAJAzgIQAogFAzgRIBYggIAsgOIArgMQBYgYBPgGIAVgCIAVAAIBzgDQBYgDAygLQA9gMAxgjIAAAAQA8gkAUg4QAKgYAFgZQACgJACggQABgegCgdIgBgUQABAAADAUQAEAjAAAYQAAAZgDASQgDAYgKAaQgVA8g+AmIABAAQgyAlhAAOQg0AMhYAEIhNACIgnACQgbAAgNACQhNAGhYAZIiAAqIgsAQQg2ASgpAGQgZAEgXAAQgcAAgZgFg");
	this.shape_26.setTransform(0,-6.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#7C868E").s().p("AncExQhjhGguiKQgQgwgRhLIgch+QBbhFCigqQBcgYC1ghQBrgOA1gEQBagHBLAFQDgAMCIAwQBAAYAmAuQAlArAPBDIg1gHQALBYgQA7QgUBOhFApQhAAuhpAMIi4AIQhTAAhdAWQhGARhkAjQhdAlhCAGIgcABQhJAAg1gmg");
	this.shape_27.setTransform(0.6,-6.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tophead, rect = new cjs.Rectangle(-68.8,-41.4,137.7,82.4), [rect]);


(lib.tonguewiggle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#75001E").s().p("AiLDRQgogCgqgUQhRgmg3hQQgdgrgLgsQgGgcACgXQADgcAOgWQAMgUAagQIAjgQIAcgIIAFAcQABAIAFAOIAHAVIALASQAYAmAsABQARACAYgFQARgDAXgIQA2gTBWgzIBdg1IAggNQAfgIAfABQAXABAgAMQAlAQAlAgQAUASATAVQANAOgBABIgPgNQgUgTgVgQQgmgegjgNQgcgKgXgBQgcgBgeAJIgdAMIhbA2QhWA1g5AVQgaAJgRADQgXAFgWgCQgYAAgXgNQgXgNgNgVIgHgKIgGgLIgIgXIgGgYIgBgHIgBABIgGABIgVAIIgJAGQgXAOgJAQQgLASgDAXQgCASAGAaQAKAqAbAnQA0BNBLAjQAmASAlADQAiADAngPQAdgKAkgUIA5ghQBBglArgFQAZgDAYAFQAUAEASALQAVALAXAXQAOAOgCAAIgPgLIgSgOQgNgKgOgGQgRgJgTgEQgXgEgWAEQgoAGg/AmIg6AiQgjAVgeALQgSAHgUAEIgVADg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF3366").s().p("AkCCfQhEgtgnhFQgphHANg5QAPg/BTgTQAZCnCkg5QA0gTBRgwQBhg5ANgGQBJggBIAiQA3AZA8BCIhdDoQg1g3g4gGQgsgEg5AcIhkA5Qg/AiguAGIgSABQg9AAhAgqg");
	this.shape_1.setTransform(0.5,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tonguewiggle, rect = new cjs.Rectangle(-40.2,-20.9,80.4,41.8), [rect]);


(lib.neckandfin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E4559").s().p("AAAJNQggABgagUQgWgRgPgdQgMgWgJgeIgMgyIAAgCIgBgCQgFhDgKghQgNgpgmgkIhHg7QgsgmgSgYIgNgRIgRgaIgNgcQgMgfgKgnQgeh8AMhhQACgcAJgfIAHgTIgEAUQgGAcgCAeQgHBfAfB7QALAoALAcIAdAzIANAPQARAWAsAmIA3AqIAjAiQAMAOAEAGQAPAWAIAZQALAhAGBHIAAACIABADIALAsQAIAcAMAVQANAZATAOQAVAQAZgBIAAAAQBZAIBAgmQANgIATgQIAYgaIAKAAIACAAQAGgCAIgHQAHgFAIgJIAbggQATgWAIgGIACgBIAPgZIAQgfQAIgOAHgRQAchAAKhBQAJg+gEhFQgDg/gNg9QgZh6g5hgQgfg0gegiQgWgYgLgNQgNgPgVgTQhBg7hIglQg+ghg4gJQgrgHgkAHQgbAHgBgBIAHgEIAUgGQAmgKArAGQA6AIBBAgQBJAkBEA8QAQAOATAUIAiAlQAhAlAfAzQA6BhAbB9QANA8AEBDQAEBJgIA+QgLBDgdBDIgPAgQgKAWgHAKIgRAcIgDADIgDACQgHAFgQASIgcAiIgQAQQgKAIgMAEIgGABIgCAAIgUAVQgSAPgRALQgmAWgrAHQgXAFgeAAIgdgBg");
	this.shape.setTransform(-30.1,-12.8,0.57,0.623,0,17.2,19.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3D252B").s().p("AACJHQg0AAggg3QgVglgOhEQgFhMgNgiQgSgxgygpQhLg4gggkQgxg2gShEQgXhRgGhPQgHhhAXhEIDIj+QBbgkCDBBQBwA2BIBUQBgBgAyCNQAvCCAACRQAACjhdCQQgJAEgnAvQghAngTgDQgmAvg7AUQgpAOgwAAIgcgBg");
	this.shape_1.setTransform(-30,-12.6,0.57,0.623,0,17.2,19.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.2)").s().p("AA0JBQg0AAggg3QgVglgOhEQgFhMgNgiQgSgxgygpQhLg4gggkQgxg2gShEQgXhRgGhPQgHhhAXhEIDIj+IABAAQBSAKBbA5QBQAyA0A8QBgBgAyCNQAvCCAACRQAACjhdCQQgJAEgnAvQghAngTgDQgpAzhCATg");
	this.shape_2.setTransform(-8.7,7.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333638").s().p("AgsAoQAAgCARgIQAcgOAKgGQALgJAGgGQAIgKABgGIADgNQABgGABAAQABAAABAGQACAGgCAIQAAAJgIALQgJALgKAGQgPALgbAJQgNADgEAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAg");
	this.shape_3.setTransform(20.3,2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7C868E").s().p("AArgnQAEAfgeAUQgSAOgqAOg");
	this.shape_4.setTransform(20.2,2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333638").s().p("AgoBWIAGgFQAKgGAHgGQALgKAIgOQALgRAGgRQAJgZAGgrQADgdACAAQADAAgBAeQgBAlgMAhQgHAVgLAPQgKAQgNAIQgKAHgJAEIgIACIAAgBg");
	this.shape_5.setTransform(15.3,-6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7C868E").s().p("AAohWQAAA6gPAoQgUA5gsASg");
	this.shape_6.setTransform(15.2,-6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333638").s().p("AAAJNQggABgagUQgWgRgPgdQgMgWgJgeIgLguIgBgEIAAgCIgBgCQgFhDgKghQgNgpgmgkIhHg7QgsgmgSgYIgNgRIgRgaIgNgcQgMgfgKgnQgeh8AMhhQACgcAJgfIAHgTIgEAUQgGAcgCAeQgHBfAfB7QALAoALAcIANAaIAQAZIANAPQARAWAsAmIA3AqIAjAiQAMAOAEAGQAPAWAIAZQALAhAGBHIAAACIABADIALAsQAIAcAMAVQANAZATAOQAVAQAZgBIAAAAQBZAIBAgmQANgIATgQIAYgaIAKAAIACAAQAGgCAIgHQAHgFAIgJIAbggQATgWAIgGIACgBIAPgZIAQgfQAIgOAHgRQAchAAKhBQAJg+gEhFQgDg/gNg9QgZh6g5hgQgfg0gegiQgWgYgLgNQgNgPgVgTQhBg7hIglQg+ghg4gJQgrgHgkAHQgbAHgBgBIAHgEIAUgGQAmgKArAGQA6AIBBAgQBJAkBEA8QAQAOATAUIAiAlQAhAlAfAzQA6BhAbB9QANA8AEBDQAEBJgIA+QgLBDgdBDIgPAgIgRAgIgRAcQAAABAAAAQAAAAgBABQAAAAgBABQgBAAAAAAIgDACQgHAFgQASIgcAiIgQAQQgKAIgMAEIgGABIgCAAIgUAVQgSAPgRALQgmAWgrAHQgXAFgeAAIgdgBg");
	this.shape_7.setTransform(-3.5,7.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#7C868E").s().p("AACJHQg0AAggg3QgVglgOhEQgFhMgNgiQgSgxgygpQhLg4gggkQgxg2gShEQgXhRgGhPQgHhhAXhEIDIj+QBbgkCDBBQBwA2BIBUQBgBgAyCNQAvCCAACRQAACjhdCQQgJAEgnAvQghAngTgDQgmAvg7AUQgpAOgwAAIgcgBg");
	this.shape_8.setTransform(-3.7,7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333638").s().p("Ah1A6QgDgEADgEQAkg2BHgkQBTgrAtAsQADAEgDAEQgEADgEgDQgogkhGAkQg8AfgkAxQADACgBAEQAAAFgEAAIgMACIgBAAQgEAAgCgEg");
	this.shape_9.setTransform(11.4,-51.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,0,0,0.2)").s().p("Ai+BxQgxg6gQgYQgng6AEgnIB4AbQAxhgAhgiQAlgkBNgbQBiAABmBZQAqAsAXAnQg7gggeA6QgTAkgHBOIgIA5QgGAkgNAUQgRAbgjAIQgVAFgvAAQiBgUhahkg");
	this.shape_10.setTransform(13.6,-34);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.2)").s().p("AgtATIggglIAMhcQgEAnAnA7QAQAXAwA6QAVAYAXASQhHggg0g8g");
	this.shape_11.setTransform(-0.9,-23.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.2)").s().p("AkmBbQAHhYArhVQAvhbBaguQBWgrBrAHQA3AAA2ATQA5AVAsAlQhAgbhCAAQhsgHhVArQhaAugvBbQgUAngLAnQgOggACgWIghEJQg9g3AHhvg");
	this.shape_12.setTransform(5.3,-38.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333638").s().p("ABAEbIgOgDIgygNIgugUQgGgCgcgRQg2gjgrg3QgogygSggQgTghgCgZIgBgKIAAgHQABgFABAAIABAFIAAAHIACAJQAEAYAUAfQAQAbAsA0IATAWIAwArIAdAUQAWANAKAFIAsASIA7AOIAJAAQAdAAAOgCQAXgDAQgKQAJgFAHgIIAGgIIAFgJQAIgTAEgZIAHgwIAGgyQAEgcAHgXQALgfAQgRQAKgMAQgFQAOgFARAEQANACAPAIIAAgIIgEgZIgEgMQgIgWgRgZQgPgXgSgUIgSgTIgUgRQgqgfgygQQgvgPgzgBQgwgDgwAJQheAQhBA7QggAegTAgQgUAegOAlQgZA9gGA/QgFA2AMArQAEARAJAQIAOAWQAOAQgBABIgQgOQgYgegHgaQgPgsAEg4QAFg/AYhBQAPgoASgeQAWgkAggeQBEhABjgRQAvgKA0ADQA1AAAzARQA1ARAtAhIAWASIATAUQAVAXAOAWQARAZAKAaIAHAdIACAOIAAAKIgEAfIgagOQgMgHgKgCQgXgFgQARQgNANgJAcQgHAVgEAbIgHAyIgHAxQgEAagKAWIgGALIgIAKQgHAIgNAIQgSALgcAEQgQACgdAAg");
	this.shape_13.setTransform(10.1,-38.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#7C868E").s().p("AiZCaQgxg7gQgYQgng7AEglIghEJQg9g3AHhvQAHhXArhWQAvhbBaguQBWgrBrAHQA4AAA3AUQA6AVAsAnQAoAoAXAoQAgA3gIAtQhCgsghA5QgUAlgIBSIgIA5QgGAkgNAVQgRAagjAJQgVAFgvAAQiBgVhahjg");
	this.shape_14.setTransform(9.9,-38.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.neckandfin, rect = new cjs.Rectangle(-51,-66.4,96,132.8), [rect]);


(lib.legs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.2)").s().p("AgdBkQgHgSgLglIgNgyQgKgpgIgSICZhWQALBMgQBRQgTBegxAvIgCADQgPgPgOgkg");
	this.shape.setTransform(21.8,13.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#161D26").s().p("AgRCUQgKgHgLgNQgNgSgOgZIgTgnQgRgogKgOQgFgKgEgDIgEgFQAAgCAHADQAFAEAIAIQAOAPATAmIAVAlQARAbAKAMQAIAKAJAHQAJAIAKAAQAMgBAHgHIAKgKIAJgLIAPgXIAMgZQAIgRAJghQAMgsADgtQADgcAAghQgBgXACAAQACgBAEAXQAFAcAAAjQgBAwgLAsQgHAggKAVIgMAbQgNAVgEAFIgQASQgCAEgEACQgNANgTAAQgQgBgOgMg");
	this.shape_1.setTransform(17.9,14.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#35465E").s().p("AgTCJQgRgSgagvIgagzQgUgmgNgFIDuiFQALBMgQBRQgTBegxAvQgNANgOAAQgRAAgTgTg");
	this.shape_2.setTransform(17.6,14);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.2)").s().p("AhVCQQh6gghWg6Qg0gkgggfIgDgJQgHgZABgyIAEhDILFAPQA3AhAEA9QAEAzgfA/IgOAPQgnApg0ARIhuAZQgkAIgrAAQhDAAhTgVg");
	this.shape_3.setTransform(-0.9,-9.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#161D26").s().p("AAWDMQh8gNhyhFQgQgJgggXIgogjQgqgogVghQgYglAAgnQgBgbADghIAEgmQABgMABAAQABAAABANIgBAlQAAAqACARQACAkAXAiQAWAfAoAlQAMALAcAWQAbAUATALQBwBAB2ANIAhABIAQAAIAPgBIA9gMQAqgJARgGQAfgKAUgNQAhgYAlg3QAdgsANgmQAOgpgEghQgDgegQgXQgLgPgOgMIgKgIQAAgCAMAHQASALALAOQATAYAFAgQAFAlgNArQgNAqgcAtQgOAXgRAVIgqApQgeATgaAHQgLAEgxAMIhAANIgRABIgRAAIghgBg");
	this.shape_4.setTransform(-0.8,-5.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#35465E").s().p("AhKCzQhsgghLg6QhnhRgUhBQgHgZABgyIAEhDILFAPQBNAugVBhQgRBKg/BMQgiApguARIhgAZQghAIglAAQg7AAhIgVg");
	this.shape_5.setTransform(-0.9,-5.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#161D26").s().p("AA7DUQgLgFgNgMQgRgRgSgbIgegyIgLgSIgVgpQgSgigIgWIgKgcIgHgbQgHgoAAgJQgEgkAKgkQAGgZAEABQABAAgDAaQgFAmAFAeIAJAvIAIAaIAKAaQAHASATAkIAVAoIABABIABACIAJAPIAdAxQARAaAPAQQAWAVAOgGQANgEAAgbIgBgjIAAgEIABgCIAIgtIAAgLIAAgQIACgBIACABIACAAIAAgCIACgBIABABIgBADQAAAAAAABQAAAAAAAAQgBAAAAAAQAAABgBAAIgBAAIAAABIABADIACAJIABAMIAAAOIgEAhIgBACIAAABIACAOIABAVQAAAPgCAJQgEAJgDAEIgGAGIgHAEQgHADgJAAQgJgBgGgDg");
	this.shape_6.setTransform(-28.5,0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#35465E").s().p("AAQClIgyhRQgeg3gMgdQgVgvgHgrQgHggACgeQACgZAIghIDREIIAAAEIgFABQAEAQgCAVIgHAmIACApQgBAbgQAHQgFACgGAAQgZAAghgug");
	this.shape_7.setTransform(-28.2,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.legs, rect = new cjs.Rectangle(-40.1,-25.9,78.5,56.5), [rect]);


(lib.frontarm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#605517").s().p("AgIAnQgOgBgIgOIgFgKIgDgKQgDgLAEgJQAEgJAKgFQAKgEAMgCIAHgCQABACgHAFIgSALQgLAGAFAOQACAKAFAGQAFAIAFAAQAHABAHgGQAEgDAIgIQALgNAAgMQAAgJgKgCIgIgDQAAgDAJAAQAFgBAGADQAHAEABAKQACAQgMASQgGAJgJAGQgLAIgKAAIgCAAg");
	this.shape.setTransform(3.8,6.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F9E341").s().p("AgcASQgMgcAQgKQAXgIAGgHIAGAHQAVgCACAPQACANgMAQQgMASgOADIgFABQgNAAgIgSg");
	this.shape_1.setTransform(3.9,6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(7,7,7,0.2)").s().p("AAYDBQgsgYgcg/QgXgygJg+QgOh+AsgnIAegbQAwAVAVA4QAKAoAKBQQAKAqADAPQAFAfgDAaQgHAwgmAmQgIgCgHgEg");
	this.shape_2.setTransform(-5.1,-5.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#383838").s().p("AgJDhQgagHgWgUQgRgOgQgZQgWgigPg1QgGgVgDgUQgDgRgCgUQgFhKASgqQAHgSAKgJQAIgIABABIgGAJQgIANgFAPQgNAoAHBIIAGAjQADARAHAXQAOAvAWAiQAPAWAQANQATARAVAFQAVAGAZgJQAWgJATgTQAngrABgwQABgVgFgcIgKguIgCgHIgFgpIgHgrIgFgfIgBgBIgBgCIgBgFQgGgNgMgSQgTgbgegLIgNgEIgKgDQgMgDgJADQgQACgKALIgHAIQgCgBAGgKQAJgNASgFQAMgDAMABIAMADIAOAEQAgAKAYAdQAOATAHAPIADAHIABAEIAHAfIAIAsIAGArIABACIALAwQAGAdgBAYQAAAZgNAeQgNAbgUAVQgWAYgaAKQgSAGgRAAQgMAAgLgDg");
	this.shape_3.setTransform(0,-6.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F2F2F2").s().p("AgZDSQgtgYgcg/QgXgygJg/QgOh9AsgnIAtgoQAHgRATgGQARgGAQAEQAjAHAZAZQAXAVAMAgQAKAoAKBQQAKAqADAPQAFAfgDAaQgJA6gvAnQgfAZgfAAQgUAAgVgMg");
	this.shape_4.setTransform(-0.1,-7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.2)").s().p("AgDCLIgrhMQgagwgGgjQgRg9AHg7IBLgjQAqgUAgA4QAYApAGAwIgBBMQgCAtgHAhIgJApQgIAbgNAHQgFACgFAAQgYAAgUgqg");
	this.shape_5.setTransform(0.1,4.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333638").s().p("AAhC8QgKgCgMgJQgGgGgHgLQgGgHgFgKIgagwQgqhHgHguIABABQgKgoABgyQADghADABQABAAABAgQAFA3AJAfIABABQAIAqAqBEIAaAwQAFAJAFAGQAMARALACQADABADgBIADgBIACgCQAEgEAEgJQAGgOAEgXIAEgUIADgTQADgMACgZIADhXIAAgEIAAgBIAAgCIgBgHQgGgfgKgYQgKgagNgPQgMgQgPgEQgKgDgKACIgIABQgBgBAIgEQAJgFAOACQARADARASQAOAQANAaQAMAaAHAgIACAKIAAADIAAAEIAAAzIgBAlIgEAnIgHAoQgFAZgHAQQgFANgIAHIgGAEIgHADIgLABIgDAAg");
	this.shape_6.setTransform(3.4,10.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7C868E").s().p("AgDCLIgrhMQgagwgGgjQgRg9AHg7IBLgjQAqgUAgA4QAYApAGAwIgBBMQgCAtgHAhIgJApQgIAbgNAHQgFACgFAAQgYAAgUgqg");
	this.shape_7.setTransform(3.1,10.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.frontarm, rect = new cjs.Rectangle(-14.3,-29.6,28.6,59.3), [rect]);


(lib.bottomhead = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhRAjQAAgFAFAAQAogCAngVQAYgLAvgiQADgDAEAEQADAEgEADQgnAfgiARQgpAWgqAAQgFAAAAgFg");
	this.shape.setTransform(24.5,-7.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag3AfQgEgBAAgDQAAgDADgCQAAgBABAAQAAgBAAAAQABgBABAAQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQABABAAAAIALgDQAEgFAJAAQAXgIANgIQAfgUAHgGQADgDAEADQAEADgDAEQgCAEgDACIgIAEQgRANgKAFQgcAQgWAGIgCAAQgJADgHAAIgFAAg");
	this.shape_1.setTransform(24.5,-8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhqARQgEgBABgFQABgFAFABQAUAHAigDQASgBAigHIAzgHQAggGAQgLQAEgDADAEQACAFgEADQgSANglAHIg8AJQgkAFgNABIgKAAQgXAAgQgGg");
	this.shape_2.setTransform(4.9,-0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgWAOIgngBQgWgCgOgLQgDgCADgEQADgEADADQANAIAeABQARABAegCQAPgBAggGQAggGAQgBQAFAAAAAEQABAFgEABQgoAJgTAEQgZAEgWAAIgMAAg");
	this.shape_3.setTransform(-16.1,3.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhGApQgEAAAAgFQAAgEAEgBQBMgKA8g8QAEgDADAEQAFAEgFAEQgbAfglAUQglAUgjAAIgHAAg");
	this.shape_4.setTransform(-33.4,6.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhEBXQgEgDgCgGQgFgLAAgbIAAgZIgBgdQAAgOADgTIAEgSIABgEIAHgOIACgDQAAgBAAAAQABgBAAAAQABAAAAAAQABAAAAABIAIABIAIADIAJAHIA2A4IAJAIIADABIACACIAFAFQAMAJASAGQANADAAABQAAADgOAAQgVgBgQgLIgGgEIgBAAIgDgCIgMgHIgVgUIgigiIgDgCIgCgBIgBABIAAAAIgBAEIgEAPQgCAOgBARIgEA2QgDAXABAMQABAIACAFIgBAAIgDgCg");
	this.shape_5.setTransform(24.2,-12.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FCFCE3").s().p("AhMA0IABgqQAAhCANgaQALAAAfAfQAgAkAMAGQAUATAiAAIiSBJQgJgIABgXg");
	this.shape_6.setTransform(24.6,-12.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhrBUIAAguQABgnAGgcQAFgVAJgTIAGgLIANgTIACgBIBLBVIAvAuQATATAQAHIALADIAFABQAAACgFABQgFABgIgBQgTgDgXgTQgTgOgfgeIg+hCIAAAAIgEAIQgJARgFASQgFAVgGArIgGAuQgDAQgDAAQgBAAgBgRg");
	this.shape_7.setTransform(5.9,-8.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FCFCE3").s().p("AhhAAQAHg7AZgiQAHAIANAQIAUAYIAuAtQAZAZAQAMQAbATARgCIjTAnQAEg7AEgig");
	this.shape_8.setTransform(5.9,-7.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhqAZQgBgoAEgaIAFgTIAFgLIAKgNIAPACIADACQAFACAGAEQAGAFAKALIANARIAEADIABACIACACIAHAJQAEAHAHAIIALANQAmAoAHAGQASAQARAEIAMABQABAAAAABQABAAABAAQAAAAABAAQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAgBABQgBAAgBAAQgFACgHAAQgUABgYgRQgQgMggghIgagcIgGgIIgDgDIgfgiIgGgEIgCgBIgFAJIgFARQgDAQgEAuQgCA8gFAAQgEAAgDg8g");
	this.shape_9.setTransform(-15,-5.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FCFCE3").s().p("AhfAhQAAgnACgVQAFgnANgNQAMAAARASIAYAcQAOAVAnAnQAVAVAOAIQAPAKAPABIi/ANg");
	this.shape_10.setTransform(-15.4,-4.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgaBYQgFgCgGgGQgGgHgFgJIgKgWIgcg5QgJgTgEgTIgBgFIgBgcIABgCIAQAFIAQAFQAZAMApAiIAZAVIAFADIAUAIQAcAOALADQAPAGAAABQAAADgRgCQgMgBgegLIgUgGIgEgCIgFgEIgbgTQgqgfgWgLIgDgBIAAAAIAAAAIABAFQACANAIAVIAYA6IAHAYQAEAKAEAGIAGAJIACAEIgBAAIgDgBg");
	this.shape_11.setTransform(-36.6,1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FCFCE3").s().p("AgzAwIgcg+QgTgsACgYQAZAGAkAbIA1AqIAoAOQAXAJAQABIh8BCQgNgIgLgbg");
	this.shape_12.setTransform(-36.1,1.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(0,0,0,0.2)").s().p("Ag2D3QglgBhegLQgQgChJgFQg2gDghgIQAKgNAXgJQAMgFAZgHQAVgJAsgQQAsgQAWgJQAqgQBFgkQBSgsAggPQBZgmAmgYQBDgpAfg3QAshAgNguIAbAFQAbAvgaBtQgWBdglA7QhLB6iMArQg0APg+AAIgPAAg");
	this.shape_13.setTransform(12.9,0.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333638").s().p("AgKEAIhqgMIg3gDQghgCgXgDQgigEgXgIIgHgCIgUgJQgNgFgOgIQg1gfgfgdQgWgVgJgVQgHgOABgOQABgQAIgMIAAABQAFgMAQgJQAMgFAOgDIAZgDIAXAAIBdgIQBVgGBVgTIBPgQIBKgMQBQgLAygRQA4gTAlgjQAlgeAQgeQANgagDgXIgCgNQgBgBAAgBQAAgBAAAAQAAgBAAAAQAAAAAAAAIACAEIAFANQAFAZgNAbQgOAggmAgQglAlg7AWQgwAShUANIgkAGIglAHIhOARIitAaIh0AKIgXACQgaAFgHAOIAAAAIAAABQgMAQAKAVQAIARATATQAfAeAxAaIAZANIATAIIAGACQAXAHAfAFQAkAFBKADIA2AGIA0AGQAWACAcABQAnAAAKgBIAZgCIAXgEQAggIANgFQAmgMArgaQBFgsAshGQAPgWARgpQAOgjAHgYQARg1AEguQAEgngGgZQAAgEgFgMIgBgFIADAFQAFAHACAIQAIAYgCAqQgCArgQA7QgHAagNAiQgSAsgOAWQgrBHhJAxQgtAcgnANIgvAOIglAGIgNABQgSABgVAAQgeAAgigDg");
	this.shape_14.setTransform(3.3,0);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#7C868E").s().p("AAmD+QgmgBhcgLIhzgIQhCgGgtgXQg4gbgmgiQg7g2AagmQAJgSAdgFQARgEAgAAQAWgDAwgDQAugEAYgDQAtgEBMgQQBcgVAggFQBigOAqgMQBMgXAsgsQAjgcAPgeQASglgOggIBkAUQAbAvgbBtQgWBdgkA7QhMB6iMArQg0AQg/AAIgOgBg");
	this.shape_15.setTransform(3.6,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15,p:{rotation:0,x:3.6,y:-0.5}},{t:this.shape_14,p:{rotation:0,x:3.3,y:0}},{t:this.shape_13,p:{rotation:0,x:12.9,y:0.2}},{t:this.shape_12,p:{rotation:0,x:-36.1,y:1.7}},{t:this.shape_11,p:{rotation:0,x:-36.6,y:1}},{t:this.shape_10,p:{rotation:0,x:-15.4,y:-4.6}},{t:this.shape_9,p:{rotation:0,x:-15,y:-5.1}},{t:this.shape_8,p:{rotation:0,x:5.9,y:-7.9}},{t:this.shape_7,p:{rotation:0,x:5.9,y:-8.7}},{t:this.shape_6,p:{rotation:0,x:24.6,y:-12.3}},{t:this.shape_5,p:{rotation:0,x:24.2,y:-12.8}},{t:this.shape_4,p:{rotation:0,x:-33.4,y:6.3}},{t:this.shape_3,p:{rotation:0,x:-16.1,y:3.3}},{t:this.shape_2,p:{rotation:0,x:4.9,y:-0.7}},{t:this.shape_1,p:{rotation:0,x:24.5,y:-8}},{t:this.shape,p:{rotation:0,x:24.5,y:-7.6}}]}).to({state:[{t:this.shape_15,p:{rotation:-0.7,x:3.9,y:0}},{t:this.shape_14,p:{rotation:-0.7,x:3.6,y:0.5}},{t:this.shape_13,p:{rotation:-0.7,x:13.2,y:0.6}},{t:this.shape_12,p:{rotation:-0.7,x:-35.7,y:2.7}},{t:this.shape_11,p:{rotation:-0.7,x:-36.2,y:2}},{t:this.shape_10,p:{rotation:-0.7,x:-15.1,y:-3.8}},{t:this.shape_9,p:{rotation:-0.7,x:-14.8,y:-4.4}},{t:this.shape_8,p:{rotation:-0.7,x:6.2,y:-7.5}},{t:this.shape_7,p:{rotation:-0.7,x:6.1,y:-8.2}},{t:this.shape_6,p:{rotation:-0.7,x:24.8,y:-12}},{t:this.shape_5,p:{rotation:-0.7,x:24.4,y:-12.5}},{t:this.shape_4,p:{rotation:-0.7,x:-33.1,y:7.3}},{t:this.shape_3,p:{rotation:-0.7,x:-15.7,y:4}},{t:this.shape_2,p:{rotation:-0.7,x:5.2,y:-0.2}},{t:this.shape_1,p:{rotation:-0.7,x:24.7,y:-7.7}},{t:this.shape,p:{rotation:-0.7,x:24.8,y:-7.4}}]},2).to({state:[{t:this.shape_15,p:{rotation:0,x:3.6,y:-0.5}},{t:this.shape_14,p:{rotation:0,x:3.3,y:0}},{t:this.shape_13,p:{rotation:0,x:12.9,y:0.2}},{t:this.shape_12,p:{rotation:0,x:-36.1,y:1.7}},{t:this.shape_11,p:{rotation:0,x:-36.6,y:1}},{t:this.shape_10,p:{rotation:0,x:-15.4,y:-4.6}},{t:this.shape_9,p:{rotation:0,x:-15,y:-5.1}},{t:this.shape_8,p:{rotation:0,x:5.9,y:-7.9}},{t:this.shape_7,p:{rotation:0,x:5.9,y:-8.7}},{t:this.shape_6,p:{rotation:0,x:24.6,y:-12.3}},{t:this.shape_5,p:{rotation:0,x:24.2,y:-12.8}},{t:this.shape_4,p:{rotation:0,x:-33.4,y:6.3}},{t:this.shape_3,p:{rotation:0,x:-16.1,y:3.3}},{t:this.shape_2,p:{rotation:0,x:4.9,y:-0.7}},{t:this.shape_1,p:{rotation:0,x:24.5,y:-8}},{t:this.shape,p:{rotation:0,x:24.5,y:-7.6}}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.7,-25.9,96.1,51.9);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-46.5,-25.8,96,52.2), rect, new cjs.Rectangle(-46.7,-25.9,96.1,51.9)];


(lib.backtail = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333638").s().p("AgBDEQgNgHgJgLQgFgIgCgMQgBgQADAAQABgBADAQQADAKAFAGQAHAJALAFIABAAIAAAAQALAGAPgGQAQgGAMgOIAFgHQAFgGgCAAIABgCIAAAAIgBgBIgFgBQgZgJgOgZQgMgVgFgeQgEgTgBgkIgCgbIAAgeQABgOAJguIAEgWIAEgWIABgKIAAgEIgCACIgCABIgGAGQgLAKgCAEQgLALgMAUQgOAZgNArQgDAKgFAWIgEAeQgBAJAAATIABBCQABARACAIIADAJQgCAAgEgIQgFgIgCgRIgEgpIgDgaQgBgTABgKQABgUACgLIAHgiQANgvAOgaQAMgVAMgOQADgFANgLIAIgIIAhgVIAAAAIABAoIgKA5QgKAxAAAIIgBAbIACAcQACAjADASQAFAbAJASQALAVATAHIAPAGIACAAIABABIAAAAIgDAOQgDAGgEAGIgHAJQgPAQgTAFQgJADgHAAQgLAAgHgFg");
	this.shape.setTransform(22.9,-12.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7C868E").s().p("AACC5QgdgMAAgmIgjAFQgKgPAAgtQgJhCAOg1QAchxBCglQACAcgMA3QgNA3ADAbQAIBWACALQAPA6AtAJQgEAXgaARQgQAKgNAAQgJAAgHgFg");
	this.shape_1.setTransform(22.8,-11.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(51,54,56,0.2)").s().p("AkIBdIAAgFIAFgBIAFgFIAOhgQAlAgBMAJQA8AJA5gJQAqgDAugSQAsgQAkgbQAVgOAbghQAfgpAMgMQAKARAGAPQgiBIhWBMQhvBfiFAAQhLAAhagtg");
	this.shape_2.setTransform(-4.6,18.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333638").s().p("AiADUQghgCgkgLQgpgNgogXIgBAAIAAgBIAAgFIAAgDIACABIAEAAIADgCIADgBIgEAFIgEABIAAACIgBAAIABACIAAgCIAfANQAaAJAYAHQAmAJAcABIATAAIAUgBIAKAAIAggFQA0gMAigSQAugYAnghQAsgnAigqQAXgeAJgSQAPgbAGgbQAJgggGghIgEgQIgGgPIgDgHIgEADIgiAuQgMAQgKAKIgMALIgNAJQgwAjg8ARIgcAGIgZADQgbADgXgBQguAAgngKQgkgJgYgQQgHgEgLgKIgMgOQgHgMABAAIAKAKQAMAOASAKQA1AdBYgCQAWAAAagEIAygJQA5gSAtghIAMgJIALgKQAKgKAKgNIArg5IALgMQAGgFACALIAWAyIABAJQAIAkgKAmQgJAfgPAcQgLATgXAfQggApgwAqQgqAjgwAXQglATg2ALIghAEIgLABIgUAAIgDAAIgRgBg");
	this.shape_3.setTransform(-3.3,11.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7C868E").s().p("AkRCdIAAgEIAFgBIAFgFIAjj4QAbAuBRAQQBAAMA+gJQApgEArgSQAqgRAigaQATgOAZgjQAegpALgLQAvBNgvBdQgiBEhRBIQhvBeiFAAQhLABhagug");
	this.shape_4.setTransform(-3.6,11.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.backtail, rect = new cjs.Rectangle(-31.3,-32.4,62.6,65), [rect]);


(lib.backarm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#605517").s().p("AgIArQgNgDgGgKQgHgLABgMQAAgHAEgOQAFgKAJgHQASgNAOABQAKAAAEAHIADAGIAAAFQgCAIgCgBQgBAAgBgHIgBgDIgCgDQgCgCgGAAQgKABgNALQgHAHgCAFQgDAJAAAHIABAIIABAEIACADQACAFAIADQAMAEAKgKQAEgDADgEIADgIQABgHABgBQACAAABAIQAAAPgHAIQgLAMgPAAIgIgBg");
	this.shape.setTransform(-9.8,-1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F9E341").s().p("AgDAmQgjgBAOgvQAGgSAZgIQAagIgFAbIAAATQADARgLAKQgJAKgMAAIgCgBg");
	this.shape_1.setTransform(-9.6,-1.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(35,35,35,0.2)").s().p("AgyBsQgpgPgfgWQgrggAKg0QAJgzAsgfQAUgPAcgCQASgBAiAEQBAAPAygGQATgDAbgBIgLCOQgGAog2AUQgoAPgxAAQgXAAgZgFg");
	this.shape_2.setTransform(6.4,6.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#232323").s().p("AhKCAQgsgPgmgcIgTgRQgLgKgFgMQgMgWgBgcQAAg1AigsQARgVATgMQAUgMAbgBQANgBAfAFIAEAAIACABIACAAIADABIAJACIATAEIAjAFIAhAAQAKAAAVgDIAbgBIAtABIARACIALACIAKAAQgDADgHABIgMAAIgQAAIgsACIgbADQgZAEgGAAIgRABIgSAAIglgEIgUgDIgNgDIgBAAIgFgBQgbgDgNAAQgXACgPAJQgRAKgOATQgdAnAAAtQABAXAJATQAEAHAJALIAHAHIAJAHQAmAbAoAOQBMAdBFgJQAfgDAZgKQAXgJANgMQAFgEAFgIIAFgKQAEgJABAAQABAAgCAKQAAAEgEAIIgKAOQgMAPgZAMQgaALggAFQgWAEgXAAQgzAAg6gUg");
	this.shape_3.setTransform(2.1,3.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F2F2F2").s().p("AhEB5Qg4gTgoghQgrgjAKg9QAJg5AsgkQAUgQAcgCQARgCAjAFQBAARAygHQAegFBBAAIARACQAMABAGgDIgPDCQgHAog1AUQgoAPgyAAQgyAAg1gSg");
	this.shape_4.setTransform(2.6,3.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.2)").s().p("AAeBdQgwgFgkggQgUgYgPgdQgRgfgDgZIgBgJIABgfQALAAASAKQAWAOAEABQAZAKAnAUQAJAGAQADIAeAGIAMAIQAHADAGgGIAVBRQgWAfgsAAIgPgBg");
	this.shape_5.setTransform(-10.4,0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333638").s().p("Ag2BuIgHgFIgGgHIgTgbIgJgPQgUgkgFgeIgDgmIAEheIAAAAIACAAIACAAIADABIAQACIAJAEQAKAFARALIAaANQARAHAcAQIABAAQAJAGAXAGIAVAFIANAKQADACACgBIAGgCQgBADgEACQgEACgEgBIgKgFIgEgCIgUgDQgZgDgMgHIABAAIhKggIgbgPIgDgCIgCgBIgBAAIABBtQAEAaASAhIAaAnIAEAFIAFAEQAWASAZAIQAYAIAXgBQAXgBANgJIANgJQAHgGACgEIAKgQQADgGACAAIgBAHIgCAJIgFAKIgJANIgOAMQgRAMgYACIgPABQguAAgtghg");
	this.shape_6.setTransform(-10.3,-3.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7C868E").s().p("Ag8BfQgUgYgPgdQgRgfgDgYQgDgbABgkIACg5QALAAASAKQAWANAEABQAZAKAnAVQAJAFAQAEIAeAFIAMAIQAHAEAGgGIAjCFQgSA7g/ABQg3AAgrgog");
	this.shape_7.setTransform(-9.8,-3.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.backarm, rect = new cjs.Rectangle(-22.6,-18.1,45.3,36.3), [rect]);


(lib.Waves = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#60667F").s().p("Ag8BHIghgdIgPgOIgIgcIgBgNIABgOIAEgOQARgPASgJQAOgHAQgFQAAAAAAAAQABAAAAAAQAAgBAAAAQAAgBAAAAQAuAAAuAHQAbAFAaALIAOAdQACAHABAHQACAHAAAGIgGAOQgEAHgEAHIgJAPQgMAHgNAEQgSAHgTAGIgqANIgzgJg");
	this.shape.setTransform(410.3,74.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#60667F").s().p("AAYBdQimgIingMQhNgFAAhHQAAgnAigVQFNAHFEglQAdgCAXARIASAPQAKARACAVQADAbgPAYQiOBEinAAIgqgBg");
	this.shape_1.setTransform(393.6,75.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#60667F").s().p("AEXBjQhggHhigBQkxgDkpg4QgVgEgHgWQgRg8AzgkIAKgFQAGgCAGAAIAPgCIAAgBQFoAyFpgcQBdgHBgALQA5AHAqAlQAIAKAEAMQADAKAAAMIgBAHQgCAMgEALIgDAHIgFAIQhfAqhwAAQgYAAgZgCg");
	this.shape_2.setTransform(373.6,75.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#60667F").s().p("AElCLQhTgShWgCQlcgFlVhKQhpgWg8hLQgaggAZgkQAJgNAOgKQALgEAMgCIAOgDIAAgBQGXB5GpARQDxAKDtgFQA1gBAlAlQAJAOAEAPQAFAQgFAPQgEAQgJAOQh9AwiHAAQhWAAhagUg");
	this.shape_3.setTransform(347.2,71.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#60667F").s().p("Ao/BXQg5gcgpgxQhJhWgThvQgUg+AXg/QATg3A1gFQAZABASAOIARAPQAJAOAEAQQAIAcgNAZQBHEfE6AwQBIALBHASQEVBGEdAaQCFAMCCATQAQADANAMQAUAggHAkQgIAngmASIgdABQqeAApbkeg");
	this.shape_4.setTransform(313.1,46.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#60667F").s().p("AAIHtQhJglhPgaQlth2hSlhQgVhcAZhbQBQkaEYg/IAbgHQAvACAwAEQAbADASAVIAEAIQAGAPACAPQADAcgPAYQgYAcgkACQhEAEhDAMQhdAzg2BbQgbAugMA0QgFAXgJAWIAAAHQAAAPAEAOQAHAagBAcQB6ENEsBSQCRAnCPArQBiAeBkgTQBLgNAzAwIAEAIQAGAOACAQQAEAcgQAYQh6Arh6AAQipAAiohUg");
	this.shape_5.setTransform(298.2,25.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#60667F").s().p("ACMH9QjThKiniPQhrhcgoh+IgCgIQgNhBgChFQgChiAdhZQgCgQAGgPQAyh6ByhHQA1ggA2gKQCHgbB6AuQC9BHAkC+QAZCIg6B8IgIAGQhPA2gmhVQgRgoARgnIAAgIQACgTAGgTQAHgWADgXQACgOAAgPIgPglQglhahdgRQhbgQhdAAIgNAGIgWAJQitCSA+DjQAaBeBVBBQDECVDzAzQApAIAdAdIAEAIQAGAOADAQQAEAPgGAPQgEAMgHAKQg5AXg/AAQg+AAhDgXg");
	this.shape_6.setTransform(281.2,21.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#60667F").s().p("AkaFCQgmg0geg4QhYinAtitQAdhuBLhWQBuiACjgVQE8gUBTEiQBvGIlpDDQglAUgfgeQhMhLBfg4QCChNAtiRIAAgHIAAgdIAAgXIAAgeQgEgHgCgIQgEgbgIgaQgIgegMgeQgEgKACgMQgohLhSgTQhpgahiA3QgtAgghAqQg5BIgPBYIgFAkIADAIQAIAUAFAYQAFAWAHAWQAEALgCAMQAMAWAPAUQAiAuArAmQAbAYAOAeIBHA3QAyAngcA4QgKAYgZALQiYgRhmiGg");
	this.shape_7.setTransform(277.7,14.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#60667F").s().p("AmqHPQgcgKgBgfQgCgxAqgaQFWAFEEjRIAWgQIAEgIIAMgWIAMgPIAHgIQAohKAGhTQAKiUh5hbQhWgZhZAaQhJAVg9AyQgGASgLAOQgMAQgFAUQgJAegKAeQACAPgGAPIgKAdQgIAWACAYIAAAPQANAZARAXQAfAugSAvQgLAdgdAOQh+ABgViLQgTh4ArhvQAWiKB6hOQB5hNCLgNQETALBSEEQAfBggWBeQhwGPmmBrQhPAUhMAAQhfAAhZgfg");
	this.shape_8.setTransform(271.9,19.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#60667F").s().p("AoUH0QgigGAAgjQgBh1CCAYQBkAUBjgPQC1gZCchUQDxiABHj/QAJgfgBghQgCh2hog0QjpgMh5DKQgLASgWgLQhogzBHhnQBridCygpQDIgpCBCUQAxA5gDBMIADAIIAFAOQADALAAAMIgBAPQAgD/jIC6Qk2EhmPAAQhqAAhwgUg");
	this.shape_9.setTransform(255.3,21.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#60667F").s().p("ArOGJQhqg+Bmg/QAlgXAnAWQEgCbFMgzQEVgqDci4QC2iXgnjhQgHgPgEgPQgKgvgfgkQgVgXgbgOIgXgDQhOAcgjhGQgdg7A6giQAagQAagCQCTgOBcB1QAmAwAIA8QBxF7lID2QjLCYj1A7QgyAMg0AHQhQAKhOAAQkfAAj8iSg");
	this.shape_10.setTransform(234.2,22.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#60667F").s().p("AgzFhQh2gGhugtQlGiCldgPQh6AUAQh1QAEgeAbgQQH5gEHbC8QA4AWA9gEQGkggFAkVQBBg4AWhSQAThHA3goQAPgKAOgDQAYABASAOIASAPQAkDci+CYQmCE1nlAAQgpAAgrgDg");
	this.shape_11.setTransform(205.3,40.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#60667F").s().p("AFFDdQlrhRlxgtQkhgjkhAfQiBANiCAEQh/AlATh9QAHguAygGQLkhlLRCoQENA/EQgcQBlgKBegsQCvhSCBiJQAlgnAvgEQAZABASAOIASAPQAcCNiSBQQhRAuhSAqQjwCakRAAQhxAAh3gag");
	this.shape_12.setTransform(165,50.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#60667F").s().p("AL6CqQjBgPi7g2QmShzmiAHQhvAChrAgQkSBTkRgFQhnAjg7hqQgPgbASgZQAKgOAOgKIAWgHIAPgDQAlAFAlACQD3AED2hKQCJgqCIgPQGmgMGUB1QA5AQA6ATQGWCDGOifQArgRAgAjIAEAIQAFALADALQACAIAAAGQAAAQgHAOIgHAPQjvB/kLAAQgtAAgugEg");
	this.shape_13.setTransform(134.2,57.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#60667F").s().p("AtDAGQALgqAuAGQDrAeDzgyQEjg8EjgSQD7ASDxBLQBpAgg3BXQgJAOgPAIQkIgykJgPQiugJiqAfQlAA6lEAHIgIABQiQAAAih7g");
	this.shape_14.setTransform(77.8,51.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#60667F").s().p("AoOAgQgNgJAAgUQABgrAngXQCSAFCXATQAbADAegEQDpgjDogqIAbgGIB5ABQAkABAYAcIAEAHQAGAPABAQQAEAcgPAYQhnAqh5APQjfAdjcAiQgwAHguAAQihAAiEhcg");
	this.shape_15.setTransform(44.3,53.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#60667F").s().p("AiBBeQiogNAFiFQABgZAZgLQASgHAOgDQCzBGC9g5QA+gSA8ASQAQAFANAMQAqCMirASQhUAJhTAAQg7AAg7gFg");
	this.shape_16.setTransform(23.5,57.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(398.5,66.5,23.6,16);
p.frameBounds = [rect, new cjs.Rectangle(354.9,66.5,77.5,18.8), new cjs.Rectangle(318.6,65.5,110.1,20.3), new cjs.Rectangle(272.8,55.5,149,31.8), new cjs.Rectangle(235.6,9.5,155,74.5), new cjs.Rectangle(238,-32.5,120.4,115.4), new cjs.Rectangle(240.9,-31.5,80.7,106.4), new cjs.Rectangle(236.8,-32.7,81.8,94.7), new cjs.Rectangle(226.3,-29.5,91.2,98.8), new cjs.Rectangle(198.6,-30.4,113.5,104), new cjs.Rectangle(156.9,-31.7,154.7,107.9), new cjs.Rectangle(99,4.5,212.7,71.2), new cjs.Rectangle(29.5,25.5,271.1,49.3), new cjs.Rectangle(-3.1,40.4,274.6,34.8), new cjs.Rectangle(-6.4,38.5,168.5,25.7), new cjs.Rectangle(-9.7,41.5,108,24.9), new cjs.Rectangle(-5.7,47.5,58.6,19.8), null];


(lib.Spotlight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SpotlightTop();
	this.instance.parent = this;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(132,129,165,0.149)").s().p("AAHgDIgJAFIgEACIANgHg");
	this.shape.setTransform(265.8,484.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	// Layer 2
	this.instance_1 = new lib.SpotlightBottom();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,432);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Spotlight, rect = new cjs.Rectangle(0,0,276,508), [rect]);


(lib.seaweedMove = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#112818").s().p("AjFN+IgBgeQAAgfAFgSQAJgcAigYQAvgdAXgQQArgdAiggQApgoAeguQAjg2ARg8QAKgmAEgYQgMgUgTgbIgqg5QgcgogMgWIgIgRIgIgSIgGgSIgGgUQgJgoAFgpQAFgoALgkIAAgBIgSgnQgTgqgNgoQghhoAKhPQAGgyAYgqIAOgVIAtg4IAjgrIgBgCIgCgHIgFgTIgDgZIABgZQADgrAYg1QALgZAkg/QAgg2AMgiIAOgkIAFAlIAGAoQALBlg0BkQgYAxgtA9IAEAIIAXAqQANAYAFAVQAGAUACAcIACAuIAAAuQgBAagGAUIgJAWIgbA8QgzBpgQAtIARAdIAoBJQAXApAOAfQAkBRABBEIgBAmQAAAMgEAXIACADQAkA9AIA6QAKA+gTAyQgPApgjAsIgUAaIgJAGQgRAOgMALQgzAygRAmQgFAKgCASIAAAKQgBAAgBgKQAAgPAGgOQAOgpA0gzIAdgaIAHgHIAUgZQAhgrANgnQARgxgJg6QgJg0gdg0QgFAWgIAaQgSA/gkA2QgdAsgvArQgiAggrAdQgcASgsAZQggAWgJAaQgGARgBAeIgBApIgCgLgAAFBNQgFAlAIAnIAFASIAHARIAHARIAIAQQANAYAaAlIAoA5IAXAiIACgQIABgkQgChBgjhOQgOgfgXgoIgohIIgJgPQgHAagFAfgAAknOIgtA3IgMASQgWAmgGAvQgKBJAfBmQAMAkATAtIALAYQAKgbAOggIAkhOIAbg8IAIgTQAFgSABgYIAAgtIgCgtQgCgZgFgTQgFgSgMgXIgXgpIAAgBIgeAlgACKsCQglBAgKAWQgWAwgEAqIADAtIACALQAng1AWgsQAwhfgJhfIgBgEQgMAagTAhg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#28643C").s().p("Ai2NaIABgrIAAAAIAEgMIAFgcQAMgXAcgTQByhBA+hGIAKgLIAKgMIAFgHIBAh4IACgEIAAgBIAHgMIgBgCIACgKIABgEIADgMQAFgUAEgUQAPAZAKAYIAAAEQgJA3gfAxQgsBEg7A5IgBABIgEAGIgGAEIgMALIAEgEQgVAZgTAbIgUAkIgMAWQgNA5A5AWQALAFAJAHIjBAJgACbFpIgGgJIgHgKIAAgBIAAgIQgEgIgBgIQgCgLACgKQgVhigzhXQgfg1gPg6IAKggQATAkAmBCQAiA8AQAqQAkBfgQBgIgBgCgAAVgvIAAAAIgDgHIgCgFQgDgMAEgMIAAAAIgKAFQgMgcgJgbIAGACQAGgCAFgFIAQgMQAdgfAPgpQAIgVAFgVQAAgFACgFIAFgSIABgCIABgGIACgLIACgGQgBgHACgGIADgNIgFguIgEgsIAAgEIgCgFIAAgCIgCgEQgEgGAAgIQgHgIgCgKIgDgQQgDgHgCgJIgCgHIACgCIAVgcIAmBHQATApAAAzIABBLQgCArgTAgQgHASglBNIgoBgIgCAFQgGgBgEgGgABQomIgDgGQgZhPAyhiQA0hXAXg0IABAAQAFALAAANQAAALgEAKIgFAWQgCAKgGAJQgSAogPApIgOAlQgCAeAFAeIgEAHIgiAvIgDAEIgBAAg");
	this.shape_1.setTransform(-1.3,3.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#327A4A").s().p("AgVNlQg5gWANg5IAMgWIAUglQATgbAVgYIgEAEIAMgMIAGgEIAEgFIABgCQA7g4AshFQAfgwAJg4IAAgDQAaA6AAA1QAAAxgVAtQgSAkgpAyQgoAegiAqQgqA2AGAiIgFAAQgJgHgMgEgAjAMsQACgKAGgKIgFAcIgFAMIACgUgACEGvIgBAFIgCAJIABACIgHANIAJgdgAB8FdIg8hTQgigxgPglQgfhFAXhgQAPA7AfA1QAzBXAVBiQgCALACAKQABAJAEAIIAAAHIgGgIgAAPgTIgGgLQAEAFAGABIACgFIgCAGIgCAHIgCgDgAgEg9IAJgGIAAABQgEAMADALIACAFIgKgXgAgbh0QhJjHBWhyIA7hJIACAHQABAIAEAHIADAQQACAKAHAJQAAAHAEAGIABAEIABACIACAGIAAAEIAEAsIAEAuIgCAMQgCAHABAHIgCAFIgCAMIgBAFIgBACIgFATQgCAEAAAFQgFAWgIAUQgPApgdAgIgPALQgGAFgGACIgHgBgABEoWIABABIgBAAIAAgBgABupPQgFgeACgfIAOglQAPgpASgoQAGgIACgKIAFgXQAEgKAAgLQAAgNgFgLIgBAAIAKgXQAaB3hBB9QgMAWgSAcIAEgGg");
	this.shape_2.setTransform(-0.1,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.seaweedMove, rect = new cjs.Rectangle(-19.9,-90.4,39.8,181), [rect]);


(lib.Overlay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eg+fAu4MAAAhdvMB8/AAAMAAABdvg");
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Overlay, rect = new cjs.Rectangle(0,0,800,600), [rect]);


(lib.InfoClipBG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgiDAHbIAAu1MBEHAAAIAAO1g");
	this.shape.setTransform(218,47.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.InfoClipBG, rect = new cjs.Rectangle(0,0,436,95), [rect]);


(lib.CanaryLink = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AwPC+IAAl7MAgfAAAIAAF7g");
	this.shape.setTransform(104,19);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CanaryLink, rect = new cjs.Rectangle(0,0,208,38), [rect]);


(lib.Bubble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C8DEED").s().p("AgIAUQgGgCgBgFIgBgBQgCgCgBgEQgBgLAHgJQAGgIAIACIAEAAQAFAAADAEQAJAHgCAMQgBAFgFAFQgEAFgGACIgDAAQgCABgDAAIgEgBg");
	this.shape.setTransform(5.3,4.6,0.658,0.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C8DEED").s().p("AgHAvQgLgLgMgaQgIgSgBgGQgMgbAVgNQARgKASAQQAMAKAMAVQALATADASQAEAagSAJQgHAEgGAAQgNAAgKgMg");
	this.shape_1.setTransform(4,-2.5,0.658,0.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#84A4B7").s().p("AgOCTIgSgCIgVgGIgYgJIgYgQQgbgWgNgfQgPgiAJgpQAIgnAdgkQAfglArgOQAvgPArASIAKAFIAKAGIARANQAQAQAKAQQAXAgAJAkIADAZIgBAKQgCAMgIASQgXAwglAYQgMAIgLACQgKADABgCIAIgEQALgGAJgIQAhgbASgsQAFgLADgQIAAgEIAAgCIgEgWQgHgggXgeQgLgQgNgLIgPgMIgIgFIgJgEQgjgPgpANQglAMgcAhQgZAdgJAlQgJAiAMAfQALAcAXAUQAGAFAPAKIAQAJIAGACQAPAGAEAAQAKAEAHAAIAXAEQAJABAAABQAAABgJABIgKABg");
	this.shape_2.setTransform(0,0,0.658,0.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A7D2F2").s().p("AhzBXQgyg9AohOQAbg2A0gXQA2gYAzAaQAiATAZApQAaAqAAAlQgEAjgdAmQgeAoggAHIgeAKIgLAAQhOAAgtg3g");
	this.shape_3.setTransform(0,0.2,0.658,0.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Bubble, rect = new cjs.Rectangle(-10,-10,20,20), [rect]);


(lib.MenuItem = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{shark:0,whale:1,wormHover:2,fish:3,clam:4});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// character-02.png
	this.instance = new lib.shark();
	this.instance.parent = this;
	this.instance.setTransform(-5.5,0);

	this.instance_1 = new lib.whale();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-5.5,0);

	this.instance_2 = new lib.worm();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-5.5,0);

	this.instance_3 = new lib.fish();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-5.5,0);

	this.instance_4 = new lib.clam();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-5.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5.5,0,113,113);
p.frameBounds = [rect, new cjs.Rectangle(-5.5,0,114,113), rect=new cjs.Rectangle(-5.5,0,113,113), rect, rect];


(lib.Menu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 18
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.2)").s().p("AnFHSQgMgDgDgNQgUg/gEgSQgIgtAKgnQAYhXA0hDQA2hFBigsQAugUCIgqQB5gmA8gVQBmgkBKglQAugYAcgTQAqgfAOgfQAohVgChQQgBgPAOgEQAMAWANAQQAdBQgkBrQgRArgcAcQgsAthIAjQgtAXhYAgQg6ADhXAWQh9Afg/AwQhJAUgoAVQg2AbgnAyQgrAtgQA+QgEARgDAYIgBALIgDA6QgBAlgDAVQgHADgIAAIgHAAg");
	this.shape.setTransform(696.1,440.2,1,1,-14.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 19
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#443323").s().p("AmqH7QgKgCgLgIQgNgMgPgTQgKgPgKgUQgKgTgGgRIgIgnQgIhEAdhSQALggASgjIAhg+QAhg2A4gxQAtgpA7gjQBQgxB/gzIBcglQAZgKARgHIAmgSQBHgkArguQAIgJAKgMIAOgTIAXgfQADgFACgHQABgGgCgCIgEgHIACABQACABACAEQACAFAAAFQgBAHgEAGQgDAHgSAZIgOAVQgJAMgIAJQgrAwhHAnIgnATIgrASIhbAmQh7A0hQAxQg7AkgqAnQg3AxgeAzIghA9QgPAegMAjQgbBNAHBAIAIAjIAPAhQAUAoAWATQAHAFAHACQADACADgCIAHgCQAOgEgCgQQgBgLgKgYIgHgUQgFgOABgJIAAgBQABguARgnQAQgnAdgiQAxg3BSgsQA9giBSgdQAigNBqgiICJghQBOgUAtgVQAKgFArgYIAyghQAdgTAOgQQATgUAIgXIAAgBIAAAAQAHgQADgVIAEglIADglIABgEIAAgDIgCgaQgGg+gkgsQgOgQgUgOQgTgMgOgGIgsgNQgCAJgDAAIgBgKIAAAAIADAAIADAAIAAAAIAAAAIARACQARAEALAEQARAFASALQAYAQANAPQASAVAMAbQALAYAGAmIACARIABAJIAAAGIgBAEIgDAkQgBAVgCARQgEAZgGAPQgJAbgUAWQgSATgcASIgxAiQgrAZgNAGQg0AZhJAQQhpAagfAJQhmAiglAOQhQAdg8AhQhPArguA0QgbAggOAjQgQAlgBApIAAADQgBAIALAZQAKAeACALQACAOgGALQgHAMgOAEIgLADIgDAAIgLgBg");
	this.shape_1.setTransform(692.6,438,1,1,-14.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E2A66A").s().p("AncHGQgbgsgGggQgMg6AThIQAQg8AkhAQA7h8CbhdQBWg0DFhQQBSgeA1gjQBBgrAlg6QATgaACgFQAKgSgMgJIAvgrIABgKQBLALArAzQArAzACBTIgFA8QgEAqgJARQgMAkglAeQguAfgXARQg/AphWAXQhmAXg6ARQjZBGhVAwQivBkgCCQQgBAJAHATIANAiQAMAqglAGIgDAAQgaAAgfgxg");
	this.shape_2.setTransform(692.7,437.5,1,1,-14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer 20
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.2)").s().p("ADcGYQhNgBgrglQgEgDgCgHQgsgNgqgoQg1gxgohEQgig6gchPQgyiQgHgPQgmhXg4gzQgngjgdgSQgmgYgpgKQgZgGgSAIQgLAFgXAUIABgBIgGAKIgCACIgdgGIgZgGIAAgDQgGgUARgWQAKgNAXgTQAcgXAkgCQAdgCAnANQBJAYBAA2QBAA2AnBEQAeA1AoB5QAoB1AhA4QA6BlBIAlQANAHAUADQApAhAsALQAwANArgPQAVAAAQACQAjAFAZgDQAcgEAdgQQBCgkAfgXQAIgFAIAGQAHAGgGAIQgtA9g4AhQhCAnhDgHIhfABIgiAAg");
	this.shape_3.setTransform(678.9,315.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer 21
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#443323").s().p("AFvH7QhAgBg/gRQh/gkhOhUIAAAAQgjgjgZgpQgZgogQgsQgNgjgOgwIgWhPQgXhRgag5IgHgOIgJgNQgJgNgMgLQgSgTgZgVQgsgjgqgRQgpgQgeAGQgWAEgRARIgJALIgBAAIACgDIAGgKQARgSAXgGQAggIArAQQAqAQAvAjQAbAWASASIAWAZIAKAOIAIAPQAbA6AYBSIAXBOQAOAwANAiQASAsAWAkQAYAoAjAhIAAAAIAAAAQBJBPB9AkQA+AQA8AAQBEABA5gSQASgGAqgUIA6ggQBGgqAYgxIADgHIAGgPIABgIQADgOACgUQADgmgLgbQgHgQgKgKQgMgKgPgDQgQgDACACIgEAAIABAJQAAAHgBAEIgHATQgOAVgaAPQgRALgdAKQgzAPgxAAQgwgEgwgUQgngQgrgiQgcgXgmgtQgggsgSgjQgfg5gkhqIgchQQgQgtgOgfQgSgqgSgdQgTgigagZQgzguhLgVQhBgShDgBQh6gDhqAmQgeALgPAIQgWANgPANQgbAWgeAjQgqAygRAqQgFALgDALIgDAAIACgHIAFgQQAPgsAqg0QAcgiAdgZQARgQAVgMQAPgJAfgMQBrgnB9ABQBGABBCARQBQAXA1AvQAeAbATAkQARAbAUAtQAPAgAQAtIAcBQQAlBqAeA3QATAkAdAnQAiAqAdAXQAoAfAmAQQAuATAsADQApABAzgPQAagJARgKQAWgNALgRQAJgMgBgRIgCgSQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAABAAIANAAIAYABQAVAFAPAOQAOAMAJAVQAMAegDAsQgBAUgEAQIgCAJIgKAaQgQAfgdAbQgVAUgkAVQgVANgnATQglATgZAIQg5AShDAAIgHAAg");
	this.shape_4.setTransform(671.6,307);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Layer 22
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E2A66A").s().p("AEbHpQiXgehXhgQhNhJgsiUQgXhSgNgqQgXhJgZgzQgPgZgkghQgogjgpgXQhug7grBGQgIgDgJgBIgfgDIgCAAIgVgFIAAAAIgEABIgDAAIgCABIgxgGIgSgCIglgFIg5gFIgvgBQAJgvA1hBQA7hJAwgWQCEg+CnAMQC/AOBMByQAhAzAeBKIAwCHQA8CrBKBRQAsAxA2AdQA6AeA6ADQA8ADA+gbQBLghgLg2QA4gEAVAwQARApgLA8QgJA6g7AvQggAahPAoQhMApheAAQgvAAgzgLg");
	this.shape_5.setTransform(671.1,307);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// Layer 23
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(102,102,0,0.2)").s().p("AgRHLIgBgBQgKACgGgGIAAgBQg5gUg3g+QgggkgRgtQgNglgGg4QgEgtADgVQAFgrAcgKQANgFAOACIAZAFQAHgCAIABIAIAAQAFAAAFACQAXgGAZgaIAlgsQADgEAFgCQAEgWAMhIQAJg7ALgiQAahPArhCQAOgVAjgnQAigmAOgXQAFgIAIAGQAJAFgEAIIhNCCQgtBOgPA9QgIAfgJBcQgHBNgQArQgXA9gtAuQgNANghAcQgcAcgBAYQgDAqAhAoQATAXArAqQAHACAEAGIACAEQAGALgGALQgEAJgJAAIgFAAg");
	this.shape_6.setTransform(98.4,396.7,1,1,-15.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#443323").s().p("AiOHxQgpgHgmgfQgdgXgZgjQgUgdgPgiIgLgfIgHgeQgNg8AEgnQACgTAHgQIAHgMIAAgBIAAgBIgCgCIgCgEIgHAFIAHgIIAGgEIACgBIABgBIAAAAQAJgDAMgBIAxAAQAnABAUgUQAkgfASgsQAPgiALhKIAKhAIAJgjIANgeQAehCAtg+IAXggIAageIAYgZIArgbQApgWAogIIAKgCIAMgDQALgBAMABQAaABAUAEIAXAIQAPAHAHAJQAFAHABAIQAAAJgEAHQgDAHgEAEIgLAMIgFgCIgJgEIgEgBQgFgCgFAAQgIAAgLADQgRAFgRASQgaAZgbAxIgUAqIgHARIgBABIgFAaQgHAwAFBJIAHB4QAICFgeBiIgRAwIgBACIgcAyQgcAxgeAlQgkAtgpASQgiARgiAAQgNAAgNgDgAlCB6IAFAGIABACIgBABIgGAOQgFAPgCATQgDAlAPA7QADAPAEAOIAMAdQAOAgAUAcQAZAhAcAWQAjAbAmAHQAqAIAqgVQAmgSAggqQAbggAeg0IAZgvIACgDIABgBIAAgBIAPgtQAGgRAHgkIAEgcIADgcQAEg2gEg9IgDg7IgEg9QgFhLAIgyIAFgcIABgEIAHgRQAMgaAKgRQAcg0AcgcQAWgUAUgHQAOgFANACQAFAAAIACIAGACIACABIABgBIAFgIQADgGgEgFQgEgFgKgFIgUgGQgSgEgXgBQgMgBgJABQgFAAgEACIgLACQgkAHgpAVIgRALIgRAKIgGAEIgWAXIgaAdIgXAfQgsA9geA/IgMAbIgBACIgIAhQgGAcgFAjQgMBKgRAkQgWAvglAfQgOANgSAEQgOADgTgBQgkgDgNABQgKAAgIADQAEAGgBAAIgGgHg");
	this.shape_7.setTransform(109.5,389.2,1,1,-15.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E2A66A").s().p("AjLHOQhOg2gihrQgNg2gDgiQgEg2ATgeIgCgEIgMACQAEgEAGgDIAIgDQATgGAjACQA3ADAWgWQA4gwAThXQANhlAPgwQAahBAthDQArhCAtgpQBCgvBBgLQAhgKA1AQQA6ASgnAkQg0gbg2BHQggAqgfBJQgNA3AFBTIAHCFQALCdgvB1QhICKg4ApQgxAkgxAAQgsAAgsgeg");
	this.shape_8.setTransform(109.3,389.3,1,1,-15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(1));

	// Layer 24
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#111111").s().p("A0fExQgFAAAAgGQAAgGAFgBQAxgGCRgEQB4gDBJgTQA8gPCJglQB+gjBGgRQDjg3CegGQBagEB7ACIDWAEQDxAFBfgGQC9gLCLgzQCPgzBThDQB0hggKh4QgBgTATAAQATAAACATQAKB0hhBiQhLBMiAA1QiKA7iqAVQh9APjDgCIjqgEQiRgDhZABQjPAEjiA2QhEAQiTAnQiLAlhMASQhfAWhpAAQhWAAhcgPg");
	this.shape_9.setTransform(575.2,448.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

	// Layer 25
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#111111").s().p("ARMBRQhDgDhegLIihgUQh/gPjlgLQj8gNhpgJIi8gVQhzgNhLgFQisgKi+AGQhKAChwAGIi6AKQhtAGg0gCQhbgChEgVQgIgCABgJQABgIAIAAQCOANDVgLIFigTQDPgECbAKQBFAFBvAMICzAUQBaAIEEAOQDbALCBAQQDoAeBFAEQCpAKCEgfQAGgBADAGQADAGgGADQg4AehMAKQgmAFgvAAIg2gCg");
	this.shape_10.setTransform(319.5,469.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	// Layer 26
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#111111").s().p("Ai1CxQh4gZg+hsQg3heAFiCQAAgEAEgBQAFgBABAEQAQBVAKAgQASBBAeAqQBDBiCNAHQBHAEBLgSQA+gOBQgfIB4gwQBFgZA3gHQABAAAAAAQABABAAAAQABAAAAABQAAAAAAABQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAAAQgYASgvATIhLAeIhJAiQgqATghALQhxAohhAAQgvAAgrgJg");
	this.shape_11.setTransform(155.1,457.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

	// Layer 27
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#111111").s().p("AE5JZQgIgBAAgIQAAgyANhZQANhiACgqQAFhvgJiLQgIhsgKhFQgPhjgchMQhJjKisguQj1hCiDBOQgHAEgGgHQgFgHAGgGQA6g6B7gBQBWgBBsAbQC9AtBPCrQAnBUAUBqQAQBTAJBzQAMCsgHBvQgGBmgFApQgKBSgXA5QgCAGgHAAIgBAAg");
	this.shape_12.setTransform(676.1,345.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1));

	// Layer 28
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#111111").s().p("APhBiQgdhRhrgoQhIgchzgLQhTgIhnABQhCAAh5AGQiFAHjDAgIlIA1QhmAOjiAPIiaAOQheAJg8ABQgFAAAAgFQgBgEAEgCQBBgXBhgKQA4gGBugGQDwgSCKgVQD2goBCgKQCwgYCLgHQCEgGBMABQBzACBbARQBhASA6AiQBPAtARBOQABAEgEABIgCABQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAAAg");
	this.shape_13.setTransform(547.2,293);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(1));

	// Layer 29
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#111111").s().p("AAHAyQhQgDhfgMQhEgIhrgTQiVgYjIgTQgFgBgBgFQAAgGAGAAQCCgKDdAkQD9ApBfACQCjADC8gRQA4gEBwgNQBkgKBEAGQAEABABADQAAAEgEACQggAJgwAEIhRAHQhXAKhZAIQivAPh9AAIgzAAg");
	this.shape_14.setTransform(398.8,300.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(1));

	// Layer 30
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#111111").s().p("AtZBlQgEAAABgEQAAgEAEAAQBVgEB1gxQCjhDAfgJQDFg6DggIQD/gJDSAZIBvAOQBIAKAnAEIBpAIQBCAFAnAFQADAAAAAFQAAAEgDABQhaARiHgQQiZgXhIgHQjvgXjiALQiEAHhjARQh+AVhiAnQhuAxg6AUQhHAXg7AAQgZAAgWgEg");
	this.shape_15.setTransform(251.3,299.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(1));

	// Layer 31
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#111111").s().p("AlsGvQgbgdgXgyQgJgVgZhCQgXg9gLglQgRg3gFguQgKhfAWhTQAZhcA+hAQB0h4DQgbQCBgRCjABQBXAADOAKQAEAAAAAEQAAAEgEAAIkRAJQikAGhtALQjfAVhuBxQhCBCgXBeQgWBXARBgQALBCApBoQAvB6AMAuQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBABIgCAAIgCgBg");
	this.shape_16.setTransform(139.8,351.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(1));

	// Layer 32
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#111111").s().p("ABJFmQgKgegXg7QgYg7gKgfQgmiAgMg6QgXhtgFhCQgHhmAYhHQAAgBABgBQAAAAAAAAQABAAAAgBQABAAAAABQABAAAAAAQABAAAAABQAAAAAAAAQABABAAABIAABbQAAA1AFAnQAJBIAdByQAPBCAiB4QAIAeAJAxIAPBOIgBABIgBgBg");
	this.shape_17.setTransform(109.5,415.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(1));

	// Layer 33
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(85,78,109,0.8)").s().p("AqZB1QgtgFg0gOIhfgaQgLgDAEgLQADgLALACQBSAPCVgJQB+gHBagOQBegPCCgbIDdgyQCHgdBWgOQB6gTBlgCQCDgBBcAYQB/AgAcA8QAEAHgCAHQgCAIgHADQgkAQg9gFQhFgKgegCIhogHQg7gDgtABQhlACh7APQhUAKiLAWIjdAlQh/AShhAHQg9AEg0AAQg/AAgygGg");
	this.shape_18.setTransform(542.5,302.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(1));

	// Layer 34
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(0,0,0,0.2)").s().p("AFRDVQgagHgEgZQhRAGhOgCQiwgDjSgfQlcgJkMgbIjTgZQh+gPhWgDQjOgIjPAIIiKAGIiLAGQhvAXg/gWIgBAAQhNgCgmgDQhJAchNAYQh+AohKAHQh0ALhQgxQg3gjgdg/QgXgxgJhMQAxAqA/ASQBAATBIgIQBjAcCOgmIBLgXQBtgEB6gTIEqgOQCzgIB3ACQDFADEhAjIHlA5QEUAdDWAJQEGALDjgQQDAgND6gsIG0hZQAcAIAggLQAxgQA3gNIBzgUQBagMBygDQBhgCCbAMQDKAQAzACQDGAHEFhAQBegJBPgVQgMAUgSARIgoA6QgKAOgQAAQgQAAgLgKIgGAGQg+A+hUAqQgbALgTAFQhSAXhsAKQg0AFiOAFQiCAGiMANIipgJQhfgFhKAAIgaAAQhCgIhkAMQgZACgcAEQgMABgXAFQgxAIghAPQgIgEgHgIQhNASiXAsQhbAbgfAHQhFAQg3ADIghAKQiCAmhvAAQhNAAhEgTg");
	this.shape_19.setTransform(408.1,456);

	this.timeline.addTween(cjs.Tween.get(this.shape_19).wait(1));

	// Layer 35
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(85,78,109,0.8)").s().p("AgPAhIgBgBQgPgHgFgPQgFgPAIgOQAIgNAPgEQAOgEANAIQAHAEAEAFQALAMAAANQAAAOgLALQgJAJgMACIgFAAQgJAAgIgFg");
	this.shape_20.setTransform(363.5,310.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(1));

	// Layer 36
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(85,78,109,0.8)").s().p("AqLBGQgrgBgdgLQgGgCgCgGQgCgHAFgEQAZgVApgNQATgGA3gMQBcgVBVgKQDkgbCVACQC2AEDMARIBdAIQA3AFAnAFQAeAFA/AHQA3AIAkAOQAIADABAJQACAJgIAEQhEAhhqAFQguACiHgGIjBgMQh3gIhKgBQiTgDjmASQhdAHhcADQgqADgYAAIgIAAg");
	this.shape_21.setTransform(279.3,306.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(1));

	// Layer 37
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(85,78,109,0.8)").s().p("AgMAjQgOgEgHgNQgHgMADgNQAEgPAMgHQATgKAQAGQAPADAFALQADAHABAJQACAKgKAKQgFAIgIAEIgDACQgHAFgJAAIgKgBg");
	this.shape_22.setTransform(154.1,324);

	this.timeline.addTween(cjs.Tween.get(this.shape_22).wait(1));

	// Layer 38
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(85,78,109,0.8)").s().p("Ah9BuQgPgDgWgMQgSgKgGgWQgFgVALgSQAnhBBPglQBOgkBOAKQAXgMAbAKQAZAKAMAXIAAABQAGADABAGQACAGgDAFQABASgLAQQgXAfg1AZQgMAGhOAeQg7AYglAKQgOADgMAAIgOgBg");
	this.shape_23.setTransform(122.9,331.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(1));

	// Layer 39
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(0,0,0,0.2)").s().p("AiGG+QAlhDAWhBQArh8AaiNIAdiNQAEgTAIg2QAHgvAHgbIAShBQAKgmAJgZQAFgPATgiQARgfAFgRQACgIAJABQAJABgBAIQgCAVgNAfQgQAngDAMQgVBXgHAsIgaCxQALAGAAAOQgDBpgqCRIgFAkQgIA/gHAeQgLA5gUAkQgKgCgMADIhqAeg");
	this.shape_24.setTransform(570.1,242.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_24).wait(1));

	// Layer 40
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(0,0,0,0.2)").s().p("AGHJpQgNAKgQgCQgRgCgLgRIgFgIQgLgDgHgLIgWgjIgLABIgCABQgIgIgDgIQgJgSgEgRIgBgKIglgtQgGgJgFgOQgGgTgEgGIglg+QgTgggQgsQgLgegQgzIgiifQgVhXgWhEIAEgEIgBgEIgCgCQgJgUgPgfIgbg0QgFgLgQgpQgMgggMgSIgTgfQgJgSgBgQIAAgBQgxg7hOgzQg5glgogLIg1gQQgggJgWACQgHABgDgIQgDgIAIgDQBMgfBzA2QBgAsBCBIIAHAKQBWBwBHDAQApBtBJDZQAqBvAbA6QAwBlA0BBQAJADAHAHQAMANAUASIAhAeQAYAXgYAYQgMAMgMAAQgLAAgMgLg");
	this.shape_25.setTransform(166.1,236);

	this.timeline.addTween(cjs.Tween.get(this.shape_25).wait(1));

	// Layer 41
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#342E44").s().p("AGbO/QgagHgDgZQhSAFhNgBQiygEjQgfQldgIkMgcIjTgZQh+gOhVgEQjPgHjPAHIiKAHIiLAGQhvAWg+gVIgCgBQhNgCgmgDQhJAdhMAYQh/AohJAHQh1ALhPgyQg4gjgdhAQgXgzgJhNIgMhkQgIgwgPgzIg4ilQgjhlgNhFQhQi6gYh5Qgli6A8iDQBLijDvgpQBPgNCAgFQChgGAegDQBTgHBoggQASgFCkg5QDOhHCsgIQD3gLD7AOIB9AbQBNARAyAHQB3ASBmgTQFVA0BUAKQDxAbC7gLQDWgMFZgqQG5g2B1gMQAWgRAYgDQDNgfBHgHQCigRB6AKQAMgIAOgEQAVAGAfAEIAwAEQA7AFBUAAQAqANAXAQQAlAIA0APICAgQQBJgJA3gDQBegFA6AHIALAFQB7AwA8AsIABACQAfA5ARAcQAPAhAPAqIAHAlQAVCAAKDAQAFBgAODLQADCugxB1QgVAyggArIAAAFQAMADAHAIQAIAJAAAMQgFBWg9A7IgoA7QgKAOgQAAQgQAAgLgKIgFAGQhUBTh9AwQhoAoiHANQhoALiNgFQg5gCi9gLQiYgIhegBIgaAAQhCgIhjAMQgaACgcAEQgMABgXAGQgxAIghAPQgHgFgIgHQhNASiXAsQhaAaggAIQhFAQg3ACIggAKQiDAmhuAAQhOAAhEgSg");
	this.shape_26.setTransform(400.6,381.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_26).wait(1));

	// Layer 42
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(0,0,0,0.2)").s().p("AExEfQgWgRhChCQgogqgvg7IhRhoQhhiAhrhMQiMhkiAANQgHABgCgHQgCgIAHgCQAhgOAVgDQAagEAfAHQBQARAtAZQCKBOBaBdQAoApA8BHQBJBXAZAcQA8BEAwAkQAPALAhAUQAdAUALAVQAGAKgHAKQgHAJgLADQgHABgIAAQgoAAg0gog");
	this.shape_27.setTransform(71.2,349.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_27).wait(1));

	// Layer 43
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#443323").s().p("AGcEIIhbhxQhChSg4g8QhChGhJg5QhUhBhRgZQgvgPguAAQgyAAgrAQQgmAOguAgQgfAWgrAnIg5AzIAAgCIANhJQAPg2AbglQAcgnAqgdQAogcAtgTQBVglBlgEQAjgBAMABIAXABQAOABAKACIAtAIIAXAGIALADIALAEQBNAfBSA7QBAAuBKBCQAgAeBdBaIAAAYIgNgLIh9h3QhJhCg/gtQhPg5hMgdIgKgFIghgIIgrgIIgXgCIgWgCQgJgBgOABIgXAAQhfAEhTAkQhmAugtA/QgZAjgNAxQgCADABAIIABAGIAAABIAMgOQAugoAegWQAtggArgRQAygSAxABQAvAAA0AQQBUAaBXBDQBNA9BABFQA2A4BFBWIBUBpQAxA8AlApIABAGIgBAXQgpgtg1hAg");
	this.shape_28.setTransform(50.7,343.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E2A66A").s().p("AEvB8Qh2iQhdhNQikiMiWAGQhJAEhMAwQgsAehUBMQALhYAug5QAsg3BZgqQBSgmBggGQBfgHBYAbQBtAoB6BjQA8AyCSCNQgBCCABAyQACBlAJBQIgBAJQgWgYiujVg");
	this.shape_29.setTransform(51.4,343.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28}]}).wait(1));

	// Layer 44
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#443323").s().p("ADfKNQh7iChDilQgehIgehjIg0iyQgfhrgahFQgfhXgvhVQg2hehAg2QhRhEhbgDQgsgBgzALQgnAJg1ASIhIAZQgBAAAAAAQAAAAAAAAQABgBAAAAQAAAAABgBIAog+QAigsAngXQApgZAzgLQAugKAyAAQBegBBdAjIAWAIIAWAKQAhARAIAFIAUAMIAUAOIAcAVIAIAIQA7A6A1BWQApBEApBaQATAoAyB3QAtBoAYAwQAwBfAdAyQAvBRArAwQAgAjAWATIA5A0QA/A5A0AjQA3AlBIAaIAaAIIgMAMIgTgGQhKgZg4gnQg0ghhCg8Ig5gzQgRgPgngpQgug0gvhPQgZgsg0hmQgag1gshkIhFieQgphagohCQg0hUg5g3IgjgcIgSgNIgUgMIgogVQgIgFghgNQhYghhcABQhwAChCApQgkAUggAqIgHAJIgEAGIATgHQA4gTAngIQAzgMAxABQA1ADAuAUQAsATApAiQBEA5A2BgQAuBTAiBcQAcBLAdBnIA0CxQAdBiAdBHQBDCkB3B+IAhAhIgZABg");
	this.shape_30.setTransform(177.7,233.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E2A66A").s().p("AHaKaQiBgGhiAHQhphmhHiGQg8h1hIkAQhJj+g8h2QhijAiNg1QhFgZhYAQQg2AKhqAmQAthNBAgjQA+giBjgEQBagDBbAfQBZAfBIA7QBpBhBcDIQAUAsA2B9QAtBoAcA5QA4BtAdAwQA2BZA9A6IB5BsQBKA9BAAfQAnATAvAOIgJAIIgzAZQgYAKgyAQIiPgFg");
	this.shape_31.setTransform(178.6,233.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30}]}).wait(1));

	// Layer 45
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#443323").s().p("Ai0KhQBAh2AciAQARhLANhmIAVi3QANhtAOhNQAQheAghbQAmhpA5hDQAhgnAqgbQArgdAzgKQAtgJA3ACQAnADA7AJIAUADIgNgNQgmgjgogPQhIgdhuARQhZAOhTAwQghAUgFAEIgkAcIgQAPIgQAPIgQAQIgHAJIgHAJQgwBCgkBaQgdBHgaBgIgqCmQgaBtgRA3QghBtgSAvQghBWglA8QgeAugPASIgwA8QgcAkgXAZIgVgBQAbgdAggpIAvg8QASgXAbgoQAjg5AghWQAUg0AfhnQATg/AXhkIAqinQAahgAdhJQAmhdAxhEIAHgKIAYgZQAGgIALgJIARgPIAkgdQANgKAbgPQBUgyBfgPQAugIAyACQAzABAuATQAqAQApAmIAxA0IACACIABACIhLgNQg8gJgkgCQg0gCgrAIQhZAThFBQQg3BCgkBkQgfBXgSBfQgNBKgMBuIgVC3QgOBngRBMQgdCBg+Bzg");
	this.shape_32.setTransform(581.7,223.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E2A66A").s().p("AlkKXQipADgcAAQAbgeAigsIA6hKQAyhDAnhhQAUgzAkh2QATg8AbhwQAfiCAOgwQA6jVBWhwQA8hHBUgtQBTguBagMQBigNBDAXQBFAXA5BFQhwgUg2AAQhZgBhAAkQiDBMg+DOQgpB+gcEHQgcEIgpB+QgaBRgoBLQhLgKh3ADg");
	this.shape_33.setTransform(581,224);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32}]}).wait(1));

	// Layer 46
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(0,0,0,0.2)").s().p("AiEDcQgFgkghgcQgGgSgMgRQBSiWAxhIQBPh2BVhCQAlgZAtgUQgbAjgQAcQhEBphLC9QheDwgfBAQgBg3gJg4g");
	this.shape_34.setTransform(710.9,298.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_34).wait(1));

	// Layer 47
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#443323").s().p("AldGjQAWgzAchGIAxh8QAmhiAjhMQAqhWA2hPQA/haBIgzQArgeAugPQAygRAzADQAtADA1ARQAnAMA1AYIASAIIgJgQQgdgsghgYQg+gvhvgMQhagJhcAZIgqAOQgkAOgGADQgcANgMAIIgcASIgJAHQg/Ayg7BPQguA+gyBVQgTAihAB0IgqBMIgQgIIAqhMQA/h1AUgiQAyhWAvhAQA9hRBAg0IAJgHIAegTQANgIAdgOQAIgEANgFIAWgJIAsgOQBggaBdAKQAxAEAuAOQAxAPAnAdQAmAbAdAvIAjBCIAAACIhFggQg1gXglgMQgygQgrgDQhbgFhXA8QhEAwg+BYQg2BQgoBTQgdA8gsBwIg5CRQghBSgcA7QABgbAAgVg");
	this.shape_35.setTransform(735.2,284.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E2A66A").s().p("AloEpQgOgvgggmQgfgkgrgVICckWQBiidBlhPQBNg0BcgXQBdgXBZAMQBiANA7AnQA9ApAlBRQhmgwg0gOQhXgYhHASQiQAnhyC4QhCBmhGCvQhlD9gRAkQADhSgUhHg");
	this.shape_36.setTransform(734.5,283.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35}]}).wait(1));

	// Layer 48
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(0,0,0,0.2)").s().p("ACWEEQgVgTAHgXIg2g1QgggegbgQIgGgBQgzgPgngNQgQgFgIgSQgrgLgZgQQgigVgNggQgCgGAAgFQgHgJgJgOIgOgZQhEhwAShLQADgLAJgBQAHAcAOAkQAbBDAiAwQAnA1A3AkQAqAaBXAjQBdAmAnAXQBGApBKBMQgCAWgYAJQgZAKgUgQIgKgHQgKAJgKAFQgKAEgKAAQgPAAgNgMg");
	this.shape_37.setTransform(111.5,285.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_37).wait(1));

	// Layer 49
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#443323").s().p("AGzIcIgBgBIAAgBIAQhHIAAgDIAAgFIgBgdQABgPgBgHQgFg3gMgvIAAAAQgIgegRgjQgQgggaggQgQgSgNgMIgQgOIgQgQIgfghQgSgSgRgJIgBgBQgjgWgugQQgYgIhEgRQh9gohFgiQg4gcgmggQgxgrgVgxQgXg1AGhBQAEgiAJgaIAXg4IAJgYIAEgLIABgFIAAgBQgGgJgIgCQgIgCgLAFQgRAIgVAVQgOANgTAYIgIAKIgDADIgPAcQgKATgKAZQgTAwgFAsQgGAyAJAqQAGAYAJASIATAnIAMATIANASQAVAZAHAHQAYAZAnAbQAdASAqATIBGAfQAqASAXAOIAQAJIAOAKQAKAHAQAOQA0AtAbAvQAOAYAHAZQAFAWAAAYIAAABQADAegLAeIgRApIgOAiIACgJQABgGAHgUIAPgqQAJgcgEgeIgBAAIAAAAQAAgYgGgUQgHgZgNgVQgagsgzgsIgagUIgOgJIgPgIQgSgLgugUIhHgeQgqgTgfgTQgogbgbgbIgeghIgNgTIgMgTIgVgqQgKgUgGgZQgKgsAGg2QAFguAUgzQAIgWAMgYIARgeIAMgOQASgXAQgQQAYgYAUgJQARgIAPADQAKAEAGAFQAEAEAGAIQAEAFgBAHQAAAFgCADIgEAOIgKAZIgWA2QgDAGgEAWQgDANgCAPQgGA8AVAwQATAuAuAnQAjAeA3AcQBFAjB5AnQBEASAZAIQAuARAmAYIgBgBQATALAUAUIAeAiIAfAeQALAKASAVQAcAkAQAgQAOAeAKAmQAMAuADA5IAAA0IAAAFIAAADIgBACIgUBHIgBAAIAAAAg");
	this.shape_38.setTransform(126.7,288);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E2A66A").s().p("AArHjIAZhCQAOgmgEggQABhkh8hhQgjgbhGgeQhcgogXgMQg3gegtgwQgtgygXg7QgbhCAQhUQAOhMArhIQAzg6AHgGQAzgsAXAnQAEAHgSArQgXA3gDAIQgpChCBBkQBPA9DFA+QA5APAeAJQAvARAjAXQAWAMAZAbQAkAnAJAIQAmAhAaAsQAaAsAKAxQAVBGAABbIgNAwIgFATg");
	this.shape_39.setTransform(127,288.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38}]}).wait(1));

	// Layer 50
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(0,0,0,0.2)").s().p("AgkA5QgggGgSgSIAAgJQAAgeATgWQAXgbAfAsIgBgEQgFglAhgFQAcgEAfAPQAHAFAHAHQAAAcgTAYQgTAagdALQgQAEgPAAQgNAAgMgCg");
	this.shape_40.setTransform(383.2,286.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#0F2533").s().p("AgQBcQgbgDgWgMQgYgOgKgWQgJgVAEgXQABgMAFgPQAEgNAIgLQAIgLALgEQALgDAKAGQAIAFALAOIABACIgBgCIAAgEIAAgJIABgGQAFgQASgGQAQgFAYAEIAWAGIAGADIADACIADACIAKAIQAXAUACAfQADAdgUAfQgSAcghAOIgEACQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgUAEgAg/g6QgIADgFAJQgNAVAAAXIAAABQgBATAHAPQAJARASAKQASAKAYACIALABIAXgDIAHgCIADgBQAagLARgYQAQgYgBgYQgCgZgQgPIgJgHIgDgDIgFgCIgTgHQgUgFgOADQgMACgGAMIgCAEIgDAMQAAAGgBAAIAAAAIAAADQgBAAgGgGQgMgKgHgDQgEgCgEAAIgFABg");
	this.shape_41.setTransform(382.2,284);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#286FA3").s().p("Ag5BHQgtgXAGgxQAAgeASgWQAXgcAfAsIAAgDQgFgmAhgFQAcgEAfAQQAuAdgPA0QgOAzgyASQgSAFgQAAQgcAAgZgNg");
	this.shape_42.setTransform(382.2,283.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#0F2533").s().p("AgQBcQgbgDgWgMQgYgOgKgWQgJgVAEgXQABgMAFgPQAEgNAIgLQAIgLALgEQALgDAKAGQAIAFALAOIABACIgBgCIAAgEIAAgJIABgGQAFgQASgGQAQgFAYAEIAWAGIAGADIADACIADACIAKAIQAXAUACAfQADAdgUAfQgSAcghAOIgEACQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgUAEgAg/g6QgIADgFAJQgNAVAAAXIAAABQgBATAHAPQAJARASAKQASAKAYACIALABIAXgDIAHgCIADgBQAagLARgYQAQgYgBgYQgCgZgQgPIgJgHIgDgDIgFgCIgTgHQgUgFgOADQgMACgGAMIgCAEIgDAMQAAAGgBAAIAAAAIAAADQgBAAgGgGQgMgKgHgDQgEgCgEAAIgFABg");
	this.shape_43.setTransform(382.2,284);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#286FA3").s().p("Ag5BHQgtgXAGgxQAAgeASgWQAXgcAfAsIAAgDQgFgmAhgFQAcgEAfAQQAuAdgPA0QgOAzgyASQgSAFgQAAQgcAAgZgNg");
	this.shape_44.setTransform(382.2,283.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(0,0,0,0.2)").s().p("AAuByQgmgDglgPQghgSgNgIQgZgPgPgQIgIgBQAsg5AZgaQAogsApgZQAYgFAVA5IAaBLIAMAjQAJAYAEARIgJAIQgSASgkAAIgOgBg");
	this.shape_45.setTransform(400.9,279.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#0F2533").s().p("AAhCsQgSgDgTgGQgYgIgJgFIgygeQgOgJgFgGIgMgMIgMgDIgIgFIgCgDIADgCIACABQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAABIgCAAIAAAAIAHADIAMABIAQANQAFAEAOAIIAXANIAcAOQAFADAZAIQATAFAQABQAVADARgCQAVgEANgLIABgBQAOgLAFgRQAFgPgDgWQgDgdgUg1IgIgWIAAgCIAAAAIgEgIIgSg2QgIgbgHgMQgEgKgGgGQgGgHgFAAIgcASQgTAPgIAIIguAwIg+BKQgXAbgCgBQgCgCAUgdQAigwAYgeIAVgZIAYgaIAcgZIAfgVQAAAAAAAAQABAAAAgBQABAAABAAQAAAAABAAIAFAAQAGAAAIAEQAGAEAEAEQAGAHAHANQAJAQAIAaIANAqIAGAPIACADIAJAZQAUA2AEAhQACAZgGAUQgGAXgVAOIACgBQgRAPgbAEIgPABQgOAAgOgCg");
	this.shape_46.setTransform(401,274.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#286FA3").s().p("AAxCkQglgDglgPQgigSgNgIQgZgPgPgQQgHAAgKgEQgKgEALAAIgQgwQAdgiA3hJQAyg8AygeQAYgFAVA5IAaBMIAeBeQAMBAgjAZQgTASgkAAIgOgBg");
	this.shape_47.setTransform(400.6,274.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(0,0,0,0.2)").s().p("Ah7AqQABgzALgjQAOgtAbgIQAOgHBNA2QBQA2AXgEQgtAvgyAVQgzAfgjAAQgwAAgSg5g");
	this.shape_48.setTransform(363.9,289.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#0F2533").s().p("AhTCYQgaAAgTgRQgQgPgKgaQgGgVgEgaQgFg6AJg0QAGgeAJgVQAHgOAJgIQALgLANgEQAHgCAKACIAOAGQAIADAOAJIAmAbQAlAcAXAOQAeASANgBQAGAAAEgDIAEgDQAAAAAAABQAAAAAAABQAAAAAAABQgBABgBABQgEAGgIABQgQACgggQQgZgNgmgaIgngZIgVgLIgKgEQgGgCgBACIgCAAQgPAEgMAYQgJATgEAbQgIAyAFA3QACAVAHAVQAIAWAMALQAMAMAUABQASABATgHQANgEAWgKIANgIIADgBIAegQIAngbQATgQAUgVIAcgcQAYgaABACQACABgVAbQgnAwgZAYIgZAUIgWAPIgaAOIgBAAIgMAHQgZANgMAEQgUAIgRAAIgGgBg");
	this.shape_49.setTransform(366.2,285.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#286FA3").s().p("AidA4QgIgzAJg7QAMhNAlgLQANgGBdA/QBWA7ANgaIBAAYQg7BDgMAMQgrAqgvAUQgyAfgkAAQg7AAgNhYg");
	this.shape_50.setTransform(366.7,285.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(0,0,0,0.2)").s().p("Al+BtQgrgPgWgWQADgTAGgeIAMgyQAxArBZAaQA7ARBjANICgAAQAHgHAYgHQAagGAKgHQArgRA6gqIBQg8IAwgtQAdgbAYgIQASA+AqBBIAJANQguArhHAcQgxAUhRASQhuAeggAHQhOAThAAEQisAAh/gug");
	this.shape_51.setTransform(383.9,279.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AjNDMQg9gIgxgLIg0gPQgpgOgJgFIgXgNIgLgJQgHgGgDgEQgQgTgEgfQgCgXAFgcIAYhnIAAgBIABAAIAoAfQAfATApAQQA2ATBRANIA/AKICEAFQAAABgXABIhDACIgqABIhAgJQhSgMg4gSQgrgPghgUIgSgMIgDgCIgBgBQgBAAAAAAQAAgBAAABQAAAAAAAAQAAAAAAAAIgBAEIgHAeIgJAsQgEAZACAVQADAaANAOQACAEAGAFIAJAHIAVAMQALAFAlAMIAzAOQAzAMA4AGQBAAGAxAAQA3gDA7gNQArgJBGgTIA4gPIA3gNQBCgSAkgSIAMgFIA3gjIATgRIARgQQAJgKACgIQADgOgPgaIgxhSIgWg5IgBAAIgJAEQgPAIgRAPIgeAbQgQAPgOAJIhUA7Qg3AmgmANIgHAEIgCAAIgKAFIgtAMIgJAEIgDACQgBAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgGAAAAgBIAGgBQACAAAEgEIAJgFIAsgPIANgGIAFgCQAkgPA2gnIBTg8QAKgIASgRIAdgbQASgQARgKIAZgLQAAAAABAAQAAAAAAAAQAAAAAAAAQAAABAAAAIAOAoIAZAyIAMAUIAaAoQAIANAEALQAGAQgEAOQgDAMgLAMIghAhIg/ApIgMAFQgrAWg/AQIhuAdQhKATgpAJQhAANg1ADQg3AAg9gGg");
	this.shape_52.setTransform(384.3,274.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AmCCaQhSgagEhBQgCgZAIgmIARhIQBcBPDWAUICmAAQAHgEAZgIQAbgIALgHQAsgQA8grIBUg8IAxgtQAegbAZgIQATA/AsBAQAVAiADANQAGAYgXAVQgvAxhKAfQgzAVhWATQhuAeggAIQhOAShAAEQisAAh/gug");
	this.shape_53.setTransform(384.3,274.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(0,0,0,0.2)").s().p("AmNCaQhUgbgEhAQgCgZAJgmIARhIQA1AsBeAaQA+AQBpANICrAAQAHgHAagHQAcgGAKgHQAtgQA/grIBVg8IAzgtQAfgbAZgIQAUBAAtA/QAWAiADANQAGAYgYAVQgwAyhMAeQg0AVhYATQh0AfgfAGQhQAThBAEQixAAiDgug");
	this.shape_54.setTransform(385.1,279.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AopEpIgbg3QgYg1gNgmQgXhEgEg8QgBgoAIgkQAKgpAbgiQAcgiAqgYQAXgNATgHQAYgJAYgCQAmgCA9ASIAwAPIAxAIQA7AIAsgEIA1gHIA2gGIA0gKIBkgeQAWgJAXgOIArgbQAagRAUgIQAHgEASgFQAIgDASgBQAWAAAcAGQAnAJAxAYQArAUAiAXQAlAZAcAbQAiAhAMAeQAKAdAEAoQADAfgBAdQgCAxgJAxQgGAjgJAZQgGAUgCAAIAEgVQAHgdAFgfQAHg1AAgsQAAgdgEgeQgEgngKgaQgLgaghgfQgbgZgkgYQgpgagigPQgtgVgogKQgcgFgSAAQgQABgGADIgWAIQgRAHgZAQIgrAcQgZAPgYAJIgyASIg1AOIg1AKIg3AGIgHABIgCAAIgsAGQg0AEg3gIIgwgIIgCgBIgCAAIgwgQQg5gRgkACQgWABgVAIQgZAKgPAIQgoAWgZAfQgaAggJAlQgJAjACAlQACA3AVBGQAMAoAVAzIAYA5QAJAUgBAAIAAAAIgMgTg");
	this.shape_55.setTransform(388.1,299.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#1E1E1E").s().p("Ap9AbQgLikCfhAQAsgRA1AKQAMACBVAZQA4ALAsACQA1ADAvgJQB6gLBagkQAcgJA4glQAzgiAggHQBEgPB8BGQB9BHAXBDQATA7gGBcQgFBWgWA/IyAB+QhYizgHhpg");
	this.shape_56.setTransform(388.2,300.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]}).wait(1));

	// Layer 51
	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(0,0,0,0.2)").s().p("AjKC2QgSgHgmgNQgngNgSgHQgEAOgNAFQgOAGgKgMQgigpgLgsQgMgbADgmQgEgogPgZQgFgJADgKQAEgIAIgFQgGgNgCgQQAAgLAMgCQAMgCACALQALAsBGAdQA0AVA6AFIBqAMQA/AGArgBQBxgDBxg8QAYgMBBgdQA5gdARgfQAIgPARAFQAQAFABARQAAAUgJAVQAIANgKAQQgKAPgPAiQgPAhgLAPQglA0gkAdQgTAOgfAOIg0AYQggAQgMAFQgZAKgVADQgbAEgcgMIgWADIguAFQgeADgUAAQgMAFgNgGQgdgDgXgMQgKAMgQAAQgIANgMAAQgFAAgHgDg");
	this.shape_57.setTransform(381.2,271.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(0,0,0,0.2)").s().p("ABXBmQgGgEABgIQAIgygBgQQgBghgVgcQgOgSgfgGQgagGgcAHQgBAJgJAGQgPALgKAeQgMAkgHAKQgGAIgJABQgKAAgGgJQgPgWALgkQABgNAFgSIAKgdQADgKAKgCQAJgDAIAFQAngVAuAFQAwAGAgAdQAfAeAFA1QAGA5ggAbQgEAEgEAAIgFgCg");
	this.shape_58.setTransform(414,209.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(0,0,0,0.2)").s().p("AARAPQgBgGgWABIgcACQgRAAAAgQQAAgQARgBIAggDQACgCAFAAQAPAAAMAIQAPAHAFAQQAEARgQAEIgHABQgLAAgFgMg");
	this.shape_59.setTransform(343.3,210.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(0,0,0,0.2)").s().p("AgVBBQgLgJgCgNQgKgSASgsQARgqAZgIQAMgEAHAKQAGAKgFALIgJAXIAAABIgBAiQgEAmgWAOQgEADgEAAQgHAAgGgGg");
	this.shape_60.setTransform(334.7,217.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#443323").s().p("AhCA2QgCgKACgNQACgMALgSQALgPARgOQAfgZAggGQAMgDAKABQAIABAAADQgBABgHADIgSAHQgdAMgaAWQgOAMgLAMQgLAPgDAJQgEAHgCALQgCAHgBABIAAAAQgDAAgCgIg");
	this.shape_61.setTransform(338,213.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#443323").s().p("ABUAhIghgdQgWgSgUgLQgPgIgIgCIgOgDIgJABQgXAAgTAEQgRADgKAEIgKAEQgEgCAJgJQALgJARgFQAUgGAZgDQAZgDAfARQAUAKAZAXQALAJAUAXQAaAfgCADIgBAAQgGAAgbgYg");
	this.shape_62.setTransform(415,204.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgEAUQgGgCgDgHQgEgHACgHQACgIAGgFQAGgFAGACQAHACADAHQADAHgCAHQgDAIgFAFQgFADgDAAIgEAAg");
	this.shape_63.setTransform(415.1,220.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgKAtQgPgEgIgPQgHgQAFgSQAEgTAOgLQAOgKAOADQAPAEAIAQQAHAQgFASQgEATgOAKQgKAIgKAAIgIgBg");
	this.shape_64.setTransform(412.7,222.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgEAUQgHgCgDgHQgDgHACgHQACgIAGgFQAGgFAGACQAGACADAHQAEAHgCAHQgCAIgGAFQgFADgDAAIgEAAg");
	this.shape_65.setTransform(348.1,228.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgKAtQgPgEgIgPQgHgQAFgSQAEgTAOgLQAOgKAOADQAPAEAIAQQAHAQgFASQgEATgOAKQgKAIgKAAIgIgBg");
	this.shape_66.setTransform(345.7,230.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#443323").s().p("AhLAiQgDgBABgFQAAgIAHgNQAHgMALgNIAHgGIACgCIADgCIAFgCQALgEAKAAQANgBAYAEIAdAHQAZAHABADQAAACgIACQgIABgNgBIgdgDQgUgCgNABQgIAAgHACIgDABIgBABIgBABIgGAEQgJAHgKANIgLAOIgCAEIAAACIgEgBg");
	this.shape_67.setTransform(348,237.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#E2A66A").s().p("AhBAFQAPgUAMgJQASgJAlAGIA7AIIiVAxQgHgDAPgWg");
	this.shape_68.setTransform(348.1,237.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#443323").s().p("AhVAcQgBgDABgEQABgKALgLQAKgJATgKIATgIIAGgBIARgCQAVAAAUAHQATAGALALIAJAJIAGAJQAEAHgCACQgCAAgGgEIgRgMQgZgPgmAAIgOABIgEABQgIACgJAEQgOAFgNAIQgJAHgFAGIgDAFIgCACQAAAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBg");
	this.shape_69.setTransform(413.1,229.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#E2A66A").s().p("Ag7gGQATgMAVgFQAfgEAaAJQAdAKASAYIipAKQAAgRAZgPg");
	this.shape_70.setTransform(413.3,230.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgJCKQgOgFgQgRQgKgMgKgQQgOgZgKggQgEgOgBgNIgCgZQABgrAKggIAGgSIAAgBIACAAIABgFQAGgMAIgFQAOgIAVAHQARAFAWAQQAXASAPATIAJANIAHANQAIASADAMQAKAigDAiQAAAQgHAUQgJAVgLANQgQARgQAIQgKAEgLAAQgKAAgJgFgAhFhtIgCAOQgGAjACAnIACAXQACAOAEALQAJAbAPAZQAVAgAUAJQALAGAOgGIANgIIAGgFIAGgGQAJgLAHgRQAGgSABgNQADgdgJggQgCgLgHgQIgGgNIgHgLQgOgUgUgQQgQgOgRgIQgRgHgLAFQgIAEgGAIIgDADQAIACAAABIgGACIgCAAg");
	this.shape_71.setTransform(344.9,224.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgrBhQgggugFguQgHg7ARg1IAFAAIgHgCQAQgrA2AfQAtAbAQAhQAaAvgDA1QgDA+gtAbQgMAHgLAAQgbAAgbgmg");
	this.shape_72.setTransform(344.8,224.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgjCMQgWgEgQgPQgOgOgHgVQgFgRgBgTQgCghAHggQAGgdANgaQAGgLAHgKIAMgTQAPgUAIgHIAEgDQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAABIAQABIADAAIAIAAQATgBARAHQAWAKAOAXQAPAYAFAfQAFAhgGAhQgHAngTAeQgNATgPALQgQANgWAGQgKADgMAAQgJAAgKgCgAgXiDQgGAHgNAUIgKATIgLAVQgKAWgFAeQgGAfACAdQAEAnATAUQAMALAQADQARADAQgEQARgFANgKQANgLAKgPQASgbAHgiQAGgfgDgdQgEgdgMgWQgLgUgSgKQgNgHgSgCIgVABIgHgBIAAgBg");
	this.shape_73.setTransform(413.5,216.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AhbAwQgEhJAig2IASgeQANgTAJgGIAUAAIgPADQAygJAeAkQAdAhgBA7QAAA6gcAqQgfAvgxAAQhGAAgFhXg");
	this.shape_74.setTransform(413.4,215.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(255,255,255,0.2)").s().p("AlsELQizgUgIhoQgEg6AthGQAthCBRg+QC3iLDcgRQDWgQCiBzQBGAwApA/QApA9AFA7QAIBqiRAqQhdAckZAUQi8AOhxAAQhAAAgogEg");
	this.shape_75.setTransform(364.4,135);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("rgba(0,0,0,0.2)").s().p("Ag4AjQgIgFgBgJQAAgIAFgGQACgEAFgCQALgBAPgBQALAAAQgJIAQgOQALgJAIgDQAGgIALADQAKADACAJQACAEAAACQgBAJgHAJIgOAMIgQAPQgKAIgIAEQgQAIgRABIgHAAQgPAAgLgIg");
	this.shape_76.setTransform(381.8,253.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#443323").s().p("AgrAZQgJgDgGgEQgFgDABgCQABgCAFAAIAOAAQAKgBAJgDQAKgDAMgFQAegRANgEQAIgDAHAAQAFgBABACQABADgQAMQgXAQgSAJQgNAHgNACIgLABIgNgBg");
	this.shape_77.setTransform(382.4,251.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#E2A66A").s().p("Ag+ARIB9glIg9AfQgUAKgTAAQgMAAgNgEg");
	this.shape_78.setTransform(382.4,251.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#443323").s().p("AhZAPQgNgIgHgKQgFgJACgBQABgBAIAGQAKAHAKADQAOAFAUgCQAPgBAdgIQA9gSAWAAQARgBAKAEQAKAEgCACQAAACgKAAQgNAAgLADQgMACgXAHIgsAOQgdAIgTAAIgEAAQgWAAgPgIg");
	this.shape_79.setTransform(380.9,244.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#E2A66A").s().p("AhwgLICwAAIgGABIg+ARQgcAIgVAAQgpAAgSgagABAgLQAfgGASAGgABAgLg");
	this.shape_80.setTransform(380.9,244.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#443323").s().p("AAcPQIAngCIBBgDIATgCIBDgNQA6gPAsgXQA8ghAogwQAvg5AWhKQAWhBAahhQAliKAOgpQANgnAVg3IAmhgQAwh+AOhOQAKg4gBg3QAAg6gIg4QgQhwg3hyQgcg4gigzQgRgZg7hLQhWhmhrhDIg4ggIg9gbIg+gVIghgIIgggGQh/gTiFAnQg6ARg/AfIhwA+QhqBFhRBdIhJBgQgeAzgNA4QgaBpAiB1QAMAqAZA8IAZAvIAaAtQAkA8BIBtQBHBrAeAyQAOAXAdA1QASAeAQAuQAVBEABBTQABAvgBBUQABA/AJAuQADAUAMAXQAKATANAOQAZAcAcAFQARADAUgJIAMgGIgLAIQgVALgSgDQgegEgagcQgOgPgLgTQgNgYgEgVQgKgugBhBQAAhUgCgvQgBhRgWhCQgQgrgSgfIgrhKQgegxhHhrQhJhtglg8Ig0heQgYg1gPgzQgQg5gEg4QgDg+AOg4QAOg8Afg1IBKhjQBShdBuhJIAbgRIAcgQQAIgFAVgLIAdgOQA+gfA+gSQCMgpCAAUIBEAPQAPAEAyARIA+AcIA6AhQBvBGBWBoIAnAyQAXAdAPAXQAkA0AbA4QA4B2AQByQAJA6gBA7QABA2gLA8QgPBTgxB8IgmBgQgWA2gNAmQgNAngOA0IgZBYQgZBfgYBDIgOAmIgIARIgJASQgKATgJANQgJANgNAQQgqAyg/AgQgsAXg8APIhEAMIiKACIAOgCg");
	this.shape_81.setTransform(371.2,197.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#E2A66A").s().p("AilOaQgrAigwgnQgqgjgKgyQgKgzgChCIAAhwQgBiHgvhaQgthXhtikQhuijgthWQg4h5gGhmQgGh3A8hqQBDhqBmhXQBjhUB3g2QBtg1BxgNQB1gOBuAgQB2AiBqBOQBkBKBOBoQBaBwAxCCQAyCIgCCHQACBmgpB9QgYBKg9CUQgcBIgoCUQgnCUgdBIQgtBqhcA4QhRAxh6APQgUACgrAAQgpAAgWACg");
	this.shape_82.setTransform(371.2,198.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57}]}).wait(1));

	// Layer 52
	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("rgba(255,255,255,0.2)").s().p("AhhA9QgRgGgHgRQgIgSAKgPQAegsBagRQAqgIASAAQAgAAAZAPQAGAEABAGQACAHgDAFQgOAbgbARQgWAOgiAKQgoAPgVAFQgTAEgQAAQgQAAgMgEg");
	this.shape_83.setTransform(255.7,34.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("rgba(255,255,255,0.2)").s().p("AhnBCQgFgGACgHQAXhVB/gkQAxgNAMAxQAMAxguATQhTAjhQABQgHAAgEgGg");
	this.shape_84.setTransform(165.8,52.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("rgba(255,255,255,0.2)").s().p("AgZAcQgMgLAAgRQAAgQAMgLQALgMAOAAQAPAAAMAMQALALAAAQQAAARgLALQgMAMgPAAQgOAAgLgMg");
	this.shape_85.setTransform(112,79.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("rgba(255,255,255,0.2)").s().p("AhLCMQgRgogCgpQgCgvASgiQAdg7ATgXQAggpArgEQAUgBAOAQQANAPACAWQADAfgXAkIgpA5QgKASgbAmQgaAjgLAWQgFAKgMAAQgNAAgEgKg");
	this.shape_86.setTransform(101.1,100.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("rgba(255,255,255,0.2)").s().p("AgRBUQhegCgvhDQgOgTAMgYQAKgWAWgJQAngQAwgFQA4gHAnAOQAXgJAbAJQAYAIAXAVQATARgEAfQgDAggXAKQhRAmhJAAIgDAAg");
	this.shape_87.setTransform(358.6,22.4,1,0.88);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("rgba(255,255,255,0.2)").s().p("AgLBIQgSgJhfg6QgTgLAAgZQgBgZAUgLQAzgcA7AIQA/AIAcAwQAbAOAcAZQARASgHAYQgHAXgWAIQgWAJgZAAQgkAAgpgSg");
	this.shape_88.setTransform(648.1,62.6,1,0.861);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("rgba(255,255,255,0.2)").s().p("ACOBnQgGgDgdgXQhRggg1gOQhLgThDABQglAAgIgkQgJglAegVQA0glBEAGQAyACApARQBoAqBHBRIARAVQAHAJAAAOQAAANgHAKQgIAPgTACIgEAAQgSAAgTgLg");
	this.shape_89.setTransform(575.5,44.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("rgba(255,255,255,0.2)").s().p("AgDApQgRgCgMgLQgEgEgHgMQgKgQAKgSQAKgUATACQAOABAIADIAFAAQAPgBAKAMQALALAAAOQAAAPgKALQgJAKgOACIgKACIgGABIgDAAg");
	this.shape_90.setTransform(524.7,29.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("rgba(255,255,255,0.2)").s().p("AgBA9QhEgKhrgeQgWgGgDgXQgDgZATgLQAqgXApAEQAKgDAPAAIAbABQBAAAAgADQAyAGAdAKQArAOAYAcQAOAOgFAVQgEAWgUAFQgrAJgyAAQgpAAgsgGg");
	this.shape_91.setTransform(492.5,24);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("rgba(255,255,255,0.2)").s().p("AgFAjQgMgDgHgMQgIgNAEgOQADgPANgJQAKgGALADQALAEAGALQAEAGAAAJQACAJgDALQgEALgJAEQgHAFgHAAIgHgBg");
	this.shape_92.setTransform(408.5,32.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("rgba(255,255,255,0.2)").s().p("AioA4QgHggAZgTQA8gvBKgYQBMgZBJAGQAWADALASQAKATgKAVQgeA9hJAZQg7AThMgGQgTALgmABIgBAAQghAAgFgfg");
	this.shape_93.setTransform(430,19.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("rgba(255,255,255,0.2)").s().p("AiSBYQgMgRAFgTQANgxAqgmQAnglAxgRQAzgRAmAEQAyAFAXAqQAEAFgCAGQAHAfgbAOQhQAugpAUQhGAkg7ABIgBAAQgRAAgMgQg");
	this.shape_94.setTransform(290.8,31.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("rgba(255,255,255,0.2)").s().p("AgbAqQgMgKgEgPQgGgaAKgSQALgUAXgDQAWgDAPAQQAOAPAAATIgBAKQgBASgNAOQgOANgRAAQgOAAgNgKg");
	this.shape_95.setTransform(232.3,41.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("rgba(255,255,255,0.2)").s().p("AiWBqQgPgKgHgUQgIgJgCgPQgBgOAGgMQAMgaAWgVQAXgbAlgWQAggTAhgKQA0gRAtAFQA4AFAgAmQAPARABAXQABAZgRANQg8AxhBAaQhKAdhBgKQgJAGgHACQgHABgGAAQgMAAgMgHg");
	this.shape_96.setTransform(206,43.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("rgba(255,255,255,0.2)").s().p("AhlBiQgUgDgKgVQgJgUAEgUQAUhRBYglQBZglA/A0QAMAKACATQABATgIANQgQAagWAUQgGAJgLAFIgBABQgwAjg4AIQgVAFgVAAQgPAAgPgDg");
	this.shape_97.setTransform(136.7,69);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("rgba(0,0,0,0.2)").s().p("ADlE5QgUgEgagNQgcgPgOgHQgQgDgOgJQgHgEgFgGQgbgBgLgZQgLgagDgsQgDgygFgTQgDgMgEgDIgPgNIgEgEQgbA8giAfQgvAqg+gMQg9gLgig2IgEgIIgLAAQgZAAgQgVQgRgWAIgaQALgjAYgqIAshKQAIgwAihMQAEgKAHgGQgGgJAAgJQABgLAIgHQAUgTAlgCQAVgBAqAGQBBAIBCAQQBTAUA7A0QBBA4ATBOQANALAHAPQAHAQgCASQgPBYgGAZQAFAggCAxIgDBRQAAAegWARQgPAMgTAAQgHAAgHgCg");
	this.shape_98.setTransform(633.3,124.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("rgba(0,0,0,0.2)").s().p("ADgEzQhMgLglgIQhAgPgbgyQgrhRgNiNIgWgeQgKAmgQBQQgRBFgaAsQgLASgUAGQgUAGgSgLQg7gngpgFQgegEgPgYQgPgaAPgdQAfg8AZh4QAciFAVg0QAGgQANgGQADgPAOABQByAGBZAUIgBACQgNAeALAcQAFAQAUAFQARAFAQgHQAXgLAFgVQAJgKAGgKQCLAwBfBbQAXAXgNAeQgNAegdABIgQAAQgMAdgbAGIgVAFIgDAAQACAcAQAzIAWBAQAHAZgNASQAKAbAIAeQAIAYgTASQgNAOgRAAIgLgBgACmDHIgEgMQgFgGgCgEIAAAHIAAAKIALAFgABcipQgYgKgcgJIgXgIIAQAMIA7APIAAAAg");
	this.shape_99.setTransform(565.3,98.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("rgba(0,0,0,0.2)").s().p("AATEBQgvgHgfgOQglgQgYgcQgZgegIgoQgPhRAKhVQAKhZAihHQgEgFAAgIQABgIAGgEQAxglBIAMQASADBsAhQAaAIAAAbQABAZgXANQAIA0gGBrQgFBoAKA2QAEAYgMARQAAARgKAMQgLANgRgCQgNgBgcAEQgQACgLAAIgOgBg");
	this.shape_100.setTransform(496.5,86.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("rgba(0,0,0,0.2)").s().p("Aj5D0QgZgBgPgUQgRgWAIgYQAPgvALhBIAQhwQADgWAUgKQASgJAVADQAvAHApgGQA6gIATggQgBABABgJIAAgQQgCgTAFgPIACgFIgOgEIAAgEQgGgegGgOQAmAABJgDQBAgBAvALQBCAQAbAfQATAKAAAXIAAAIQALAMADAQQAIAigKAeQgJAagZAcQgNAOgQAEQg9BQhIAyQhPA4hWAQQgXAFgUgLQhIAcg/AAIgGAAg");
	this.shape_101.setTransform(436.8,87.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("rgba(0,0,0,0.2)").s().p("AkQEEQgQgDgLgTQgKgTAGgRQAwh8gojYQgFgXANgSQgMgOAKgPQAdgqBHgMQAngGBNADIAKAAQABA0AKA0QAJAoAogLQAmgMgJgoQgGgcgDgvQCCAMAhABQAVABAKAUQAKATgLATQANANAAATQABAUAeB0QAbBngEA4QAKAQAJANQAWAfgZAdQgYAcgggHIg5gNIgFAEQgVAOglADQgaADgQgVQgQgTABgbQgIgPgGgOIgLgoQgHgagJgNIgHAWIgXA8QgRAjgTASQgkAihHAJQgXADgXAAQgkAAgkgHg");
	this.shape_102.setTransform(364.9,85.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("rgba(0,0,0,0.2)").s().p("AAPDDQhUAOhHgxQgdgUgrgzQgsg0gZgTQgUgOgCgUQgCgVAOgTIADgEIgLgSQgHgKgDgGQgGgNABgMQgWABgEgaQgDgaAWgKQBVglBOAEQAPABAJAKQAKAKABAPIABAXQAGACAFAEQAlAaAXAiQAVgJATAMQAQALAfAGQAcAGAbAAQAcAAAJgCQgEgYAWgMIAOgGQAMgIAFgYQAFgYAXgCQAXgCANATQAVAiAHAsQAUAIAHAWQAQAuAFAWIAXBNQAEAOgGAPQgFAQgNAGQhoAzhRgFQgIAAgLgGQgXAKgcAGIgLABQgWAAgRgTgABdAqIgEAFIAWgGg");
	this.shape_103.setTransform(293.8,92.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("rgba(0,0,0,0.2)").s().p("AizD3QgVgGgGgVQgih1hChfQgLgPAKgUQgMgBgCgNQgCgOAKgHQBSg0CQg8QBMggAmgOQAYgJAjgGIA7gMQAXgFAKAYQALAYgWAMIgMAHQArAjArAyQAhAmApA8QAMAQgHAYQgGAXgSAKIhEAqQgpAYgeANQgLAEgPgEQgOgEgIgKQgigmgOgkQgnghgXgPQgkgXgfgIIgFgBQAFAOAEANQAZAZASAkQARAjAFAkQADAagPAPQgRAQgVgJQgfAIgUAJQgaAMgRATQgLAMgOAAQgFAAgGgCg");
	this.shape_104.setTransform(226.2,102.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("rgba(0,0,0,0.2)").s().p("AhYDOQg+gEhBgjQgbgPgBgbQgXgFgPgRQgPgQgEgZIgBgHQgUgTAHgYQAHgYAcgCIANgCIAjgMIArgTQAagMASgDQAZgFAPAQQAKAAAIADQAoAMBLgPQAWgFAKgDQARgGAMgJIAAAAIgEgMQgKgTAFgTQAFgSARgNQA+gwBhgZQAkgJAOAgQAOAfgXAaQAMAYgLAZQghBKgWApQgiA+glAqQhUBeiKAQIgGABQgWAAgQgZg");
	this.shape_105.setTransform(152.4,126.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AAnDUQhGgGgrguQgigkgSg1QgQgxABg2QACiDA6gwQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABABAAAAQAAABAAAAQAAABgBAAIgBACQAhgUAuAtQAdAcAeAvQBnChgbBgQgRA8hEAAIgNAAgAh6AUQANBiBBArQA2AkA1gIQA+gJgEhHQgEg6gcg/QgZg5gng0QgTgZgKgMQgUgUgSgIQgSgHgMAMQgGAGgLAXQgCAFgFgBQgFgBgBgEQggBWAMBXg");
	this.shape_106.setTransform(147.5,103.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#4D586D").s().p("AghHGQhsgLhJhZQg5hFgehrQgZhagEhrQgHi4BNiIQAEAAACgEQAhg3AbgYQAmghAzABQAtABA0AcQAlAUAvAnQBUBFA+BTQBIBhAZBdQAgBzguB4QgtB0hgBFQhRA7hZAAIgbgBgAhfjHQg6AwgCCDQgBA2AQAxQASA1AiAkQArAuBGAGQBQAGAShCQAbhghnihQgegvgcgcQgvgtghAUIABgCQAAAAABgBQAAAAAAgBQgBAAAAgBQAAAAgBgBIgCgBIgCABg");
	this.shape_107.setTransform(148.9,102.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AhLHZQhsgchHhrQg7hbgYiBQgaiEAPh4QASiMBEheQASgsAggdQAjggArgGQBTgMBkBIQBeBDBMBcQBRBlAjBoQAgBcgVBrQgUBng+BUQg/BWhWAnQg7Aag7AAQgkAAgkgJgAjCmnQgcAYggA3QgCADgEAAQhNCJAHC4QAEBrAZBZQAdBrA6BFQBJBZBsALQBnALBehEQBghFAsh1QAvh4gghyQgZhehIhgQg/hUhThFQgvgmgmgVQgzgbgtgBIgFAAQgwAAgkAgg");
	this.shape_108.setTransform(148.9,102.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgEACQgBgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQAAABABAAQgCgCAFgEIACADQADAFgFAFQgFgBgCgEg");
	this.shape_109.setTransform(207,128.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgcBLQgTgSgMgYQgNgcADgXQAEgcAPgSQAQgSAZgCQAVgKAUAHQAVAHAKAYQAKAZgEAfQgDAfgNAZQgOAbgXAGQgFACgGAAQgRAAgQgQgAgwgRQgCAYAMAUQATAhARAIQANAGANgNQAKgLAGgRQARgzgPgfQgJgTgVACIgkALQgFACgDgGQgPAQgBAag");
	this.shape_110.setTransform(216,69.3);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AA5B5IgEgGQgCgFgEgDQgcgkgchDQgnhXgLgVQgDgFACgFQACgEAFgCQgBADACACIAkAtQAOAeAYA/QAYA/APAgQAAAAABABQAAAAgBAAQAAABAAAAQAAAAgBABIgBAAIgCAAg");
	this.shape_111.setTransform(221.7,107.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgHAEQgBgEAEgDQADgDADADIAGAEQgDADgEABIgBAAQgEAAgDgBg");
	this.shape_112.setTransform(242,85.6);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AEPEUQAehUALg0QAPhLgKhBQgLhJghg4Qglg+g6gfQhkg3ivAZQheANg6AgQgaAOgYAXQgQAQgbAfIgGgPQAUg8BRgnQA6gcBOgMQBZgOBBADQBYAFA9AkQA+AlAoBAQAoA+AKBMQAKBNgLBKQgNBVgmA5IAAABIgGgEQgEgDgEADQgDADABAEQgIgEADgJg");
	this.shape_113.setTransform(213.7,57.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AAFAJIgOgKIAJgGQADgCAEADQAEADgCAEIgDAIg");
	this.shape_114.setTransform(258.4,104.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("ABQBiIAEgJQACgEgFgEQgEgDgEADIgIAFQgdgXgxg8Qg4g+gaghQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAEACAEAAQAFgBADgEQAVAPAXAZIAmAuQAnAsA0AwQAHAGgGAJQgDAGgFAAQgDAAgDgCg");
	this.shape_115.setTransform(251,95.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgBANQgHgBAAgHIABgSQAJAIAHAKIgBACQgCAHgGAAIgBgBg");
	this.shape_116.setTransform(309,50.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgiB4QACgcAPhcQANhWAPgrIACgEQAGgIAJAEQAJAEgCALQgVBXgHAqIgKBCQgGAngJAbQgHgLgJgIg");
	this.shape_117.setTransform(311.8,36.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#4D586D").s().p("AhFG5QhkgbhBhcQg5hRgVh1QgVhwAWhzQAWh1A9hdQAfgvAqgjQArgjAygTQA1gVBEAKQAmAGBUAZIAEABIAGAFIgCAEQgPArgNBWQgPBcgDAdQgngihGASQg4APguAlQg0ArgSBEQgTBGAcA9QAWAwA0AbQAuAZA2ABQA0ABAzgdQA7giACgzQARAVASAmIAcA+QAbA7AYBlQgoBDh+APQggAEghAAQhPAAhSgXg");
	this.shape_118.setTransform(293.9,65.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgBHoQh3gRhFg/QhMhFgohsQglhkABhxQAAhyAihlQAlhwBHhLQBNhQBdgXQBXgVCJA1QALAEgBAMQgCAMgKAAIgFgBQhTgZgmgGQhEgKg2AVQgyATgqAjQgrAjgeAvQg9BdgWB1QgWBzAUBwQAVB1A6BRQBBBcBjAbQB2AgBtgNQB9gPAphDIABADQACAIAIABQggBGhqAVQg9AMg8AAQgrAAgpgGg");
	this.shape_119.setTransform(293.2,65.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgIAFIgBgDIAHgLQACgGAFADQAGACgCAGQgEAMgDAGQgIgBgCgIg");
	this.shape_120.setTransform(327.2,103.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("ABACBQACgGgGgCQgGgDgCAGIgHAMQgYhlgag6Igcg+QgSgmgRgVIAAgCIAAgBIABAAQAcAKAXAkQAMASATAvQAbA6AJAZQASAyAAAnQAAAFgEAEQgDADgFAAQADgGAEgNg");
	this.shape_121.setTransform(321.7,89.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgXBSQgPgOgKgVQgJgWAAgVQABgdAHgWQgCgEADgFIAHgJQAKgSAPgHQAEgDAEAFQAPgHAOAEQAQAFAJASQAMAYAAAiQgBAegKAcQgKAcgSAMQgJAFgJAAQgLAAgNgLgAAAg9IgcASQgJAgAFAcQAGAhAXAOQARALAMgvQAMg1gPgbQgFgLgKAAQgEAAgEACg");
	this.shape_122.setTransform(363.3,64.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AhCBkIgDgGQANgCgDgOQgDgNgMABQgBgjAVgxQAJgWAdg1QAEgHAHAAQAHAAADAHQAOAYAUAyQAVAzANAYQADAFgCAGQgCAEgEADQgFADgFgBQgFgBgDgGQgNgXgQgoIgahAQgYAsgKAeQgDAKgGAgQgGAbgHAPQAAAAAAAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAg");
	this.shape_123.setTransform(365.8,101.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AAAgEQAHgBAFAGQgIADgPABQADgHAIgCg");
	this.shape_124.setTransform(376.9,13.5);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AAAABIAAgBIABABg");
	this.shape_125.setTransform(393.9,107.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("ABTHTQgVhFgUhkIghisQgPhRgijTQgei6gZhrQgBgFACgCQAQgBAHgDIACAEQAfBvAdC5QAkDsANA9IAtDaIALAqQgJgDgHAGQgIAFACALIAMA8IgBAFg");
	this.shape_126.setTransform(385.3,60.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgGAAIANgBQgDADgEAAQgCAAgEgCg");
	this.shape_127.setTransform(394.7,108.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgDApIABgFIgMg7QgCgKAIgGQAHgFAHADQANAzgFAbQgBAEgCACIgMAAg");
	this.shape_128.setTransform(394.2,103.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgEAqQACgCABgEQAEgbgMgzQAGACADAIQAOAvgFAcQgGgBgHAAg");
	this.shape_129.setTransform(395.9,103.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AAFAYQgHgBgCgGQgGgbAKgNIAAAEIgBAXQABAPAIAFg");
	this.shape_130.setTransform(406.8,108.9);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgBAEQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAAAgBQAAAAABgBQAAAAABAAIAEgCQgDAHgBACg");
	this.shape_131.setTransform(408.9,110.5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgFgDIAOADIgQAEg");
	this.shape_132.setTransform(410.1,109.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgICgQABgUADgTIADgQQAAgJgEgGQgDgFgEADQgHAFgEAKIgDASIgCALIgCADQACgwAFgxQAHhFAFgdQAKg4ARgnQACgGAGAAQgFAFAAAIQAAAHAHADIAFADQgYB1gGBlQAAA6gDAVg");
	this.shape_133.setTransform(409.8,93);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AAAAKQgHgDAAgHQAAgHAFgFQADAAAEAEQADAEgBAFIgDAMg");
	this.shape_134.setTransform(412.5,78.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AiIFgIADgMQABgGgDgEQgEgEgEAAQAFgGAHADQAmAPAZAFQAkAGAcgIQAbgJASgRQAVgVgDgbQgEgzgzguQgTgRhJgwQhZg7gjgqQg7hGAWhQQAYhTBKg0QA6gpBfgaQBlgdBGAHQBAAGATAdQgFgCgEABQgFACgCAFQiBgsiwBOQgzAXgbATQgpAcgTAlQgZA0AFAuQAEAxAnAnQAbAaArAeIBKAyQAzAlAXAWQAoAoAHAqQAQBchWAaQgeAJgeAAQgtAAgugUg");
	this.shape_135.setTransform(426.6,44.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#4D586D").s().p("Aj5HwQAEgUAAg7QAGhlAYh1QBNAiBLgXQBVgagQhcQgGgqgogoQgXgWg0gkIhKgyQgrgegbgbQgngngEgxQgFguAZg0QATglApgdQAbgTAzgXQCwhNCBArIgBAFIgIB0QgEBDABAxQgigOgYgFQgigHgbAIQgbAHgEAfQgGAbANAaQAOAbApATIBFAYQA0ARArArQApAqAVA2QArBuhDBoQg3BVhtA6QhVAshsAbQgWAGgwAEQgwAEgWAFIgPgEg");
	this.shape_136.setTransform(434.5,59.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgBADQgCgCACgCIABgDIADAJIgBAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBgBAAg");
	this.shape_137.setTransform(468.2,15.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgfAJIABgVQACgNAFgGQAIgIAigJIAOgCQgdAJgNASIgBgFQgBgDgEAAQgEgBgBAEQgFAagBA1QgIgSADgYg");
	this.shape_138.setTransform(469.2,17.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgIAAIARgBQgEADgFAAIAAAAQgFAAgDgCg");
	this.shape_139.setTransform(510.4,110);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AAFHUQgkgJgSgUQgTgWgFgnQgdjwBYlFQhKgOiGgBQgGAAgEgEQgEgEAAgGIAEhOIAFhMIACg7IAFAIQADAEACgEQAIgMADgQIACgfQADAXAAAgIgDA3IgEBFQgDApAAAdQCIABBQAQQAGACADAGQADAGgCAFQhREvARDhIADAoQADAZAIAOQAJANAVAHQAJAEAZAEQAnAHAwABIBWgBQAEADAFAAQAFgBAEgDQAPABAAAQQgBAQgPAAIhsACQg+gBgugMg");
	this.shape_140.setTransform(489.1,65.2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgDAwQgGgCAAgJQACgoAPgyQgHAzAAAlQAAAEAEADQgBAIAGAFg");
	this.shape_141.setTransform(530.5,111.6);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgFAFQABgJAKgBIAAAAIgBAFQgBAEgEACIgBAAIgEgBg");
	this.shape_142.setTransform(531.6,115.2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgNBAQAAgmAHgyIAQgsQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAAAAAQgBAUgHAsQgGAoAAAWIACAAIAAABIAAAAQgKABgBALQgEgDAAgEg");
	this.shape_143.setTransform(532,108.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AAEAOIgPgBIgIgDQgGgFABgHQADACADgCQAEgBABgEIABgGIACAAQAZAGAGAEQAFACAAAFQAAAFgFACQgHADgJAAg");
	this.shape_144.setTransform(533.5,116);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#4D586D").s().p("Ah0HXQgZgEgKgDQgVgHgJgOQgIgNgDgZIgDgpQgRjgBSkvQACgGgDgGQgDgGgGgBQhRgRiIAAQAAgdADgpIAEhGIADg3QAAgggDgXIAAgEIABgIQABgDAFgCIADgCQAZgJAkgBQAVgBApABQBVAECIAcQB5AYA7AQQBmAbBIAkIgMBnQgHA+gQAmQgLAahZghQhegpgSgEQgGgCgGADQgHAEgBAGQgXCkgOCzQgHBmgCBSIgBA/QABAkAHAaIAEAHIhVABQgwgBgngHg");
	this.shape_145.setTransform(503.9,62.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AAbHmQgHgagBgkIABg/QAChSAHhmQAOizAXikQABgHAHgDQAGgDAGACQASAEBeApQBZAhALgaQAQgmAHg+IAMhoQhIgjhmgcQg7gPh4gYQiJgchVgEQgpgBgVAAQgkACgZAJIATgHIARgGQAKgCAGgEQADgBAAgDQAAgEgDgCQgKgEgPABQAYgGAygBQBdABCCAYQCIAaBDASQBzAdBRAqQAKAEgDAPQgFAXgEAoIgHBAIgJA9QgJAmgQARQgRAPgigFQgRgDgkgNQgQgFgqgRQgkgQgWgGQgVCagNCvQgEA/gCBTIgCCTQAAAHgEADIgSABg");
	this.shape_146.setTransform(506.4,60.6);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgOgBQAAgJAKgDQAHgDAFAJIAHAPQgNAEgQADg");
	this.shape_147.setTransform(587,98.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AEhC3QgrgJhSgNQhWgOgogIQgJgCgCgKQgFgQgWhwQgRhPgVgvQgmB5gSBZQgBAGgGADQgGADgFgBIhagdQg2gRgkgGQAJAAAIgEQAEgCAAgFQAAgGgEgCQgHgEgagGQApgCA2ARQAgAKA+AWQAShbAtiMQADgKAKgCQAKgBAFAJQAcAvARBIQALAqAQBUQAGAbACADQAGAKATAEIBPANQBCAKA2AKQgIhFgThYIgPg9QgKgmgCgYQARgDANgEQAKAaAIApIAMBEQAVBkAGBIQAAAIgGAFQgFAEgFAAIgEgBg");
	this.shape_148.setTransform(563.3,113.3);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#4D586D").s().p("ABnHWIhOgNQgUgEgFgKQgBgDgGgbQgRhVgKgqQgShIgdgvQgFgJgKABQgJACgDAKQgtCMgTBcQg+gWgfgKQg3gRgoACIgCgBQANgxAUhbQAVhhALgrIBQkiIA6jdQAQg7B2AGQB2AGBdA+QBgBAAyBvQA3B7gsCHQgvCUiDAQQgPACAAAQQAAARAPgCIAFAAQABAYAKAmIAQA9QATBZAHBFQg1gKhDgKgAgFiLQgQANgNAVQgUAiAIA1QAEAbAUAJQATAKAVgPQAVgOAQgaQAPgZAHgcQAHgegLgZQgNgbgdgCQgGgBgEAGQgEAGACAGIgNADIgCABIAAABIgBAAIgBAAQgCAAgFADg");
	this.shape_149.setTransform(568.5,79);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgIAKQgIgHACgJIACgGIAFAAIAXAJIgJALQgEAFgEAAQgDAAgEgDg");
	this.shape_150.setTransform(601.4,132.2);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("Al4G3QABgXAGgoQAHgsABgUQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAABgBAAQAAAAAAABIgRArQAJg6AThOIAiiFIAwi5QAdhuAXhKQALgzAIgYQAOgsAdgPQBFgkB7AaQBEAPAyAXQA7AcAsAtQAuAvAfA4QAhA7ALA/QAWB4gxBtQg1B3hrAdIgHgQQgFgJgJADQgJADAAAJIAAARIgFAAQgPACAAgRQAAgQAPgCQCDgQAviUQAsiHg3h7QgyhvhghAQhdg+h2gGQh2gGgQA7Ig6DdIhQEiQgLArgVBhQgUBbgNAxg");
	this.shape_151.setTransform(569.6,70.6);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AipGwIgFAAQAFgTAPgeIAWgwQAahDAQgwQAQgvA8i7QA0iiAfhLQAchGANgcQAag3AdgiQADgDAEADQAFADgCAFIgBADIgFgBQgLgBgCANQgCAMAJAEQgKAbggBJQgcA+gOAmQggBYgvCVQg0CrgXA+IgeBYQgUA1gUAdg");
	this.shape_152.setTransform(617.6,87.7);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AguA/IgGgBQAJgiAZglQANgTAhgsQAHgIAIAEQAIAEACAKIgBACIgKAZQgRAWgXAhIgmA6QAAgMgKgDg");
	this.shape_153.setTransform(631.9,134.8);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AAEgKIACgCQACAJgHAGIgGAKIAJgXg");
	this.shape_154.setTransform(636.7,129.9);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgLAAQgDgDADgFQADgFAEACIARAIQgBAPgKABg");
	this.shape_155.setTransform(637.4,146.7);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgPA+IgBgxQAAgwAEgYIADgKIAIgLQAFgHgCgJQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAQADACAAADQgBAJACASIACAcQAAAtABAYIADAVQACASgCAKIgQgJQgFgCgCAFQgDAFADAEIAMAOIgCAAIgBAAQgNAAgEgkg");
	this.shape_156.setTransform(637,138.2);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgoBSQgLgRABgaQADhnAtgLQgDgJAGgIQAIgHAHAGQAXARAIAgQAIAegIAeQgHAagNAUQgPAYgTAIQgGADgGAAQgNAAgIgPgAgGgsQgIAKgDALQgHAXgBAkQAAASACAGQAEALALgJQAXgTAHgoQAIgjgXgeIgNASg");
	this.shape_157.setTransform(643.2,100.1);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgPAAIAAgQQAWAEAJALIABABIAAAAQAAARgRAAQgQAAABgRg");
	this.shape_158.setTransform(662.2,155.6);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AA+AzIhEgaQgwgSgSgHQgkgRgYgXQAKgBACgQQA1AaBGAYQA1ARAbAGIAPACIAAARQAAARARAAQAQAAAAgRIAAgBQAEAJgFAFQgLAKgTAAQgQAAgWgHg");
	this.shape_159.setTransform(650.8,152.1);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgKAJIgDgLQgCgIAHgCQAHgDADAGQAIAJAEAMIgBABIgFABQgJAAgJgFg");
	this.shape_160.setTransform(666.3,60.9);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgMghQALAFAMgBIABgBIABACQgFAAgIATQgGAQAAAFIgDAWQAAgygDgRg");
	this.shape_161.setTransform(666.5,65.2);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AgFBAQgJgYAAgqIACgXQAAgEAHgRQAHgUAGABQAKAdgDAlQgDAhgMAeQAAABAAAAQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAgBg");
	this.shape_162.setTransform(667,69);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AgJHRQgJgLgXgEQABiHARjQQAXkqACgrQACgaAAg6QABg2ACgeQAAAsAKAYQAAAAABABQAAAAAAABQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAgBAAAAQAAgBAAAAQAMgeADgiQADgmgKgdQADABACAEQAAABAAAAQABABgBAAQAAAAAAABQgBAAgBAAQASACgWEmIgZE5QgLC1gBCFg");
	this.shape_163.setTransform(664.8,108.9);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AgIANQg8AAgRgCQgkgJgBAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAIAHgEQARgJAagCQAQAAAgABQBDABAZgCIAUgBQgDAPAFAHQADAFAHgBIAEAAQAHgCAEgIIADgPIAFABQAEABABAEQABAEgDACQgSATgtABIhFgEg");
	this.shape_164.setTransform(385.2,109.7);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AgGgEIANgEIgEABQgDACgBAEIgCAHIAAADg");
	this.shape_165.setTransform(469.2,16.2);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("Ah2gGQAKAAAAgIIABgGIAMAFIALAFQAXAFArgCQA4gDBKgNIACAAQABAQAEALQhVAQgpACIgeACQhLAAgGgeg");
	this.shape_166.setTransform(347,110.7);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AglBaQgUgKgEgbQgIg1AUghQANgWAQgNQAGgEADABIABABIAAgCIACAAQAAAAABAAQAAAAABABQAAAAAAAAQAAABgBABIgEANIgRAeQgPAgAHAlQADAPADAEQACAEADAAIAGgBQAGgDAGgFQAfgeAKgpQAFgYgFgKQgDgHgHgFIgOgIQgEgBgCgGQgCgHAEgFQAEgGAGAAQAdACANAcQALAYgHAfQgHAbgPAYQgQAagVAPQgMAKgNAAQgIAAgHgEg");
	this.shape_167.setTransform(570,71.8);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgYAJQAFgIAIgFQALgHAagCQgkAJgPASg");
	this.shape_168.setTransform(341.7,15);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AgGAtIgEgIQABg1AFgaQAAgEAEAAQAEAAABAEIABAFIgCADQgCADACACQABABAAAAQABAAAAABQABAAAAAAQABAAABAAIACAOIgCAdQgCARgHAMQgBAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAIgDgCg");
	this.shape_169.setTransform(467.6,18.5);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AAIAHIgSgHQACgEAFgCQAEgBAEACIAGAJIgBACIgBABIgBAAg");
	this.shape_170.setTransform(451.6,11.2);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("Ag0AIQAGgYAPgNQAPgMAZgHQAbgGAUAFQg5AIgXAcIABgHQAAgBAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgSAbgIAvQgGgVAGgYg");
	this.shape_171.setTransform(341.8,15.6);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AgBAIQgEgDABgEIADgJIAGAOIgBABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAIgCgBg");
	this.shape_172.setTransform(178.9,44.1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#4D586D").s().p("AD5IRQgcgGg1gSQhGgYg2gaQABgKgCgRIgCgWQgBgXAAgvIgDgbQgCgSABgJQABgEgDgBQgBgBAAAAQgBAAAAAAQgBABAAAAQgBAAAAABQgCgKgIgEQgIgFgHAJQghArgNATQgaAmgIAiQhRgVgwgUQgTgHgigSQglgTgRgHQAUgeAUg1IAehXQAXg+A1iqQAviWAghZQANglAcg/QAhhIAKgbIABAAIBYAeQAzARAlARQAuAUAwAeIAUAPQANAJAHADQADASAAAzQgCAdAAA3QgBA6gCAZQgCAsgYEpQgQDQgBCHgABbhjQgIAIAEAJQguALgCBnQgBAaALARQAMAVAVgJQATgIAQgYQANgUAGgaQAJgegJgeQgIgggWgRQgDgDgEAAQgEAAgEAEg");
	this.shape_173.setTransform(634.3,100.8);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AgHgNQALAAADANQADAMgMACQgEgMgBgPg");
	this.shape_174.setTransform(359.1,109.7);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AgEgOIABAAQAJAFgBAKQAAAMgIACQgBgPAAgOg");
	this.shape_175.setTransform(449.9,36.4);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AgMAJQgFgIADgOIADAAQAHAGAFgGQAIAAAHABIgEAPQgEAIgGACIgEABIgCAAQgFAAgDgFg");
	this.shape_176.setTransform(395.2,109.3);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AgOCMIgBgLQAJgCAAgMQABgLgKgFIgBAAQgCgyAEhBIAIh0IABgFIASAHIACgBIABgCIgGgKQAHACAAAJQADA3gKBRIgRCIQgBAEgDAAQgDAAAAgEg");
	this.shape_177.setTransform(451.1,25);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#4D586D").s().p("AkJHjIgKgFIgMgGQAGgqAAhDIABhuIAOkEQAFhygEh5QgChKABgyQAAgRADgZIAFgoQAPgUAlgJIABAAQAagCAKgEQAXgCAgAAIAsABQApAABQAGIAcADQARACAMAAQgCADABAFQAZBqAeC6QAhDUARBRIAhCrQAUBlAUBEIADAEIAAACIgVACQgZABhEgBQgfgBgQAAQgaACgRAJIgIAAQAEgDACgFQACgFgDgGQgNgYgUgzQgVgzgOgYQgDgGgHAAQgHAAgEAGQgdA2gJAWQgVAxABAkIgCAAQhJAMg6AEIgXAAQgaAAgRgDgAghg7QgPAIgKARIgHAKQgDAEACAFQgHAVgBAdQAAAWAJAVQAJAVAQAPQAWATAUgOQASgMAKgcQAKgcAAgfQABgggMgZQgJgRgQgFQgNgEgQAGQgDgDgCAAIgDABg");
	this.shape_178.setTransform(365,61.3);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AgHgBQACgNAJABIAFABIgJAaQgKgEADgLg");
	this.shape_179.setTransform(634.1,46.2);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("ACbBAQgFgGgHACQgHADACAHIADANQgHgEgNgJIgUgOQgwgegugVQgjgPg0gSIhZgdIgBgBIALgbQBWANBnAzQA0AXAkAYIAgATQARANAEATQABAGgFADQgFgNgHgJg");
	this.shape_180.setTransform(651,53.5);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AADgGIgBAGIgEAGIAAABQACgHADgGg");
	this.shape_181.setTransform(338.9,16.5);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AgDAPQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQADgPAIgMIgBAQQgDAGgCAIIgBABIgCgBg");
	this.shape_182.setTransform(338.7,15.7);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AgRgSQgCgCABgDQAJgEAFAIQAMAVALAYIgkgsg");
	this.shape_183.setTransform(218.2,97.8);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AgEAwQgJgFgBgPIABgZIAAgDIADgDIABgKIAEgTQADgJAGgFQAFgDADAFQAEAGgBAJIgCAQQgDASgCAUIAGABIgCAJIgFABQAAAAgBABQAAAAgBAAQAAABAAAAQAAABAAABQgBAAAAABQAAAAABABQAAAAAAAAQABABAAAAIACABQgCAEgEABg");
	this.shape_184.setTransform(408,106.6);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AgFADQAAgGAGgCIABgBQAAAAABAAQAAgBABAAQAAAAABABQAAAAABAAIgBAGQgBAHgIAAg");
	this.shape_185.setTransform(335.6,109.3);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AAODJQg2gBgugZQg0gbgWgwQgcg9AThGQAShEA0grQAuglA4gPQBGgSAnAiIgBASQAAAIAHABQAIABACgHIABgDIAEAGQACAEgDADQgDADgDgCQgkgUgYgFQgggIggAKQhBATgoAyQgkAtgJA2QgJA8AgAsQAaAkArASQApASAsgEQAvgEAggXQANgKARgVQASgZAJgHQADgEAFACQAEABABAFQgBAAAAABQAAAAAAAAQAAABAAAAQAAAAABABIAAAAQgCAzg7AiQgwAcgyAAIgFAAg");
	this.shape_186.setTransform(297,66.6);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AgJAqQgDgFgBgGQAHguASgcQAAAAABAAQABAAAAAAQAAAAAAAAQAAABAAAAIAAAHQgJAMgDAPQAAABAAABQAAAAAAABQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQABgBAAAAQAAAAABgBQgCAFgDASQgCAPgDAIQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAIgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAgBg");
	this.shape_187.setTransform(337.9,17.8);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AgFARQgFgBABgGQAAgJAEgRIAGACQAJADAAALIgKAOQgBADgCAAIgCAAg");
	this.shape_188.setTransform(627.2,142.7);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AgPAAQADgBACgDQAKAGAQADQgGAAgZgFg");
	this.shape_189.setTransform(409.9,111.5);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AgWACQACgCADgGIARgGIAMABQAJABACAKQABAKgJACIgLAAQgPgDgLgHg");
	this.shape_190.setTransform(411.1,110.8);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AhiA2QAFgGgDgGIgCgDQAQgMAygZIA5gcQAigRAagJQAEgBADABIAGAIQADAMgKAEQgfALgtAVIhJAlQgZANgMAAIgDAAg");
	this.shape_191.setTransform(217.2,123.5);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("ACGGwQgbgggXg1QgNgcgYhBQgmhkggh8Ih7nMQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAABIAEAHIgDAKQgBAEADADQAEACADgDIAAgBQAjBRAhB4IA1DOQAnCTAdBPQAOAlAeA9QAiBEALAbQgGAFACACQgBgBAAAAQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAAAAAQgBAAAAABQAAAAAAABQABAAAAABQACAEAGABQgCAEgEAAIgBAAQgEAAgCgDg");
	this.shape_192.setTransform(192.6,85.8);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AgXHMQgHgwAEhJQAHhRABgnIAPkTQADgygBhIIgBh8IAAg6QABgkADgaQACAGADAFQAAAAABABQAAAAAAAAQABABAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAgBAAAAQABgBAAAAQADgIADgQQACgRACgGIABAAIAEgIIgEAoQgDAZgBARQgBAyADBLQAEB4gGBzIgNEEIgBBtQgBBDgFAqQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIgBABQgHADAAAGIABAFQgKAAgCgIg");
	this.shape_193.setTransform(336.3,63.2);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("ABiARIgcgDQhQgGgpgBIgsgBQggAAgXACQAFgCAGgFQAAAAABAAQAAgBABAAQAAAAAAAAQAAAAAAgBQAAgBAAAAQAAgBAAgBQgBAAAAAAQgBgBAAAAQgHgGgKgDQATgCAygCQA/gBBPAGIAwABQAdACASAGQAHACAAAHQAAAIgHACQgFgHgIABQgIACgCAIQgMAAgRgCg");
	this.shape_194.setTransform(363.1,12.1);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AgwAJQAWgbA6gHQAJACAHAGQABAAAAABQABAAAAABQAAAAAAABQABABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQgFAFgGACQgTABgRAEIgBAAQgYACgMAIQgJAFgFAIg");
	this.shape_195.setTransform(344.3,13.2);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("ACBBEQg9gFhbgqQgqgTgUgKQghgTgWgXQgEgEABgGQACgFAFgCIgCAGQgCAKAIAHQAJAHAHgJIAJgMQARAHAlATQAiASATAHQAvATBRAVQgEASgBAJQAAAGAEABQAEABADgEIAKgOQAAAHgEAGQgEAFgGAAIgBAAg");
	this.shape_196.setTransform(613.8,137.7);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AkWGMIALgBQAJgCgBgLQgCgKgJAAIgNgBQAWgFAwgEQAwgEAWgGQBtgbBUgsQBtg6A3hVQBDhogrhtQgVg3gpgqQgrgrg0gRIhFgYQgogTgOgbQgOgaAGgbQAFgfAbgHQAagIAiAHQAYAFAiAOQAAAQACAPQgFABgDgCQgygTgYgCIgVAAQgOACgEAIQgGAMADAOQADANAKAJQAVAUAxAPQA1APAUAOQBVA8AnBTQAsBegfBfQgdBYhLBAQg9A0hgApQhiAphXAOIgzAJIgZABQgOAAgNgCg");
	this.shape_197.setTransform(439.4,72.5);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AgiAJQAOgSAbgIQAPgCAKAFQAEACAAADQgBADgDACQgFADgLACIgQAFIgSAIIgOAFIgCgKg");
	this.shape_198.setTransform(471.8,13.8);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AgIADQgBAAgBAAQAAAAgBgBQAAAAAAgBQAAgBAAAAQAAAAABgBQAAAAAAgBQABAAAAAAQABgBABAAIARgDQAFAGgGAHQgJgBgIgDg");
	this.shape_199.setTransform(237.7,116.8);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AhAAeQAFgHgFgHQA6gLAqgcIAYgGQABAAAAAAQABAAABAAQAAAAABABQAAAAAAABQABAAAAABQAAABAAAAQAAABAAAAQgBABAAAAQgTAVgiAMIg8AUg");
	this.shape_200.setTransform(245.1,114.5);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AghAuQAigNATgVQAAAAAAgBQABgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBgBQAAAAgBAAQAAgBgBAAQgBAAAAAAIgXAGIAIgGQAMgIAagbQAZgZAPgKIAPAMIAAAAQgVAshJAqQgzAhgrAAIA9gUg");
	this.shape_201.setTransform(249.6,110.9);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AhIgyQgKgXgNgWQgFgJgJAEQACgFAEADQAwAgA+BCQBZBeAOANQgOACgMgTQgDgEgEACQgEABABAFIAEAPQhbhXg7hEg");
	this.shape_202.setTransform(227.3,105.5);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AgMAFQgJgIgDgHIASAPQAEAEAEAAQAEgBAEgEIAPAAIgBABIgTAGIgEAAQgGAAgHgGg");
	this.shape_203.setTransform(237.6,117.1);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AgxASIgCgBQAEAAAHgDIAngOIA1gTQgrAcg5ALg");
	this.shape_204.setTransform(243.6,114.1);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AACARIgRgQIgEgOQAAgFAEgBQAEgCACAEQALASAPgBIABAAIACACIgSADQgBAAAAABQgBAAAAAAQAAABAAAAQAAABgBABQAAABAAAAQAAABABAAQAAABAAAAQAAAAABAAQAIADAKABQgDAEgFABIgBAAQgEAAgEgEg");
	this.shape_205.setTransform(236.7,115.9);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#4D586D").s().p("AicGDQgdg9gOglQgdhPgpiUIg1jNQggh4gjhRQAagfAQgQQAYgXAbgOQA5ggBfgNQCvgZBkA3QA5AfAlA+QAhA4AMBJQAKBCgPBLQgLA0gfBTQgDAJAIAEQAAABAAAAQAAABABAAQAAAAAAABQAAAAABABQAaAhA3A/QAzA8AcAXQgOAKgZAaQgaAagNAKIgJAGIg2ATIgnAPQgHADgEAAQgOgNhZhfQg/hCgvggQgEgDgCAFQgFACgCAFQgCAFADAFQALAUAmBYQAdBEAcAkQgDgCgFACQgZAJgiARIg6AdQgxAYgQAMQgMgbgihEgAghi3QgZACgQASQgPASgEAcQgDAYANAcQAMAYATASQAVAVAYgHQAWgGAOgbQANgZADgfQAEgggKgZQgKgYgVgHQgIgDgIAAQgMAAgNAGg");
	this.shape_206.setTransform(218.4,79.2);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("rgba(0,0,0,0.2)").s().p("EgrhAFuQgsgggWg3QgdgSgagbIgBgBQAVgFAXADQA1AJBHgSQAfgIBaggQBjgjCXhUQEhihEihfQJCi9LwgNQGBgHIcAqQE0AYJoA2QEnAWCLAYQDzAqCsBaIAFACQAYgEAZAGQBMARBeAlQAlAPCAA4QBxAxAvAPIA8ASQAoALAUAHQgOAlgTAlQgoBOgbAdQgvAxhBgGQhFgGhPgnQgvgYhXg5QjCh/ilhOQgzgMgwgRQhBgFhxgaQh+gcgqgGQkggmh+gMQl5gjisgJQheAJg4AAQhSAAhCgOIgggBQgYAHgUgBQgfgBgpgJIhHgRIgkgJIgPgBIgxgDQiDgEhCgDQh0gEhSgLIgHAAQkkgChfACQjaAFinAYQg0AIhAAFQiYAgg7AKQgUARgbAIQhHAUh+AxQiIA0g8ASQgfAOgvAQIgxARIgWAJQg1AYguAaQg0AdhLAzIh9BTQhPA0gwAXQhLAjhAACIgHAAQg4AAgtgfg");
	this.shape_207.setTransform(397.8,121.9);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("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");
	this.shape_208.setTransform(391.6,89.2);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#342E44").s().p("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");
	this.shape_209.setTransform(392.2,88.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Menu, rect = new cjs.Rectangle(0,7,784.7,490.8), [rect]);


(lib.CharacterSelect = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.2)").s().p("AnaFUQhcgUhQgGIhygRIhNgLQgsgFgggBIgrAAQgYgBgRgDQgTgMgcgJQgvgQhEARQiEgfinhGIi6hKQhvgthJgkQhGgkgrhCQgqhBgGhOQgBgVAUgBQATgCAHARQAjBTBpAqQA8AYCAAhQBHAaCOA1QB+AuBaAWQBUAVB/AKIDUARQA3AGCmAaQCJAWBTAGQC8AQEXgbIHUguQC7gMAogFQB/gNBigdQBfgcB6guIDVhVICRg2QBZghA2gZQBvg0BdhVIAEAfQgBAbgHA2QgCAdAAAXQgJATgMAWQgNAYgLANIgXAXIgNAJQgbASgdAMIg7AWQjtBUixA2QjhBEjEAqQjNArjHANQgsADiuAIQiGAGhTAIQhXAIh5ADIjQAFIhUAEQg3AEgcAAg");
	this.shape.setTransform(199.7,63.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(85,78,109,0.8)").s().p("AinAUQgEgCAAgGQAAgGAEgCQAcgNAzgCIBRgEQAcgDA7gJQA1gGAjAGQAEABAAADQABAEgDACQgiAQg1AIIhaALQg1AJgcADIgVABQgjAAgXgLg");
	this.shape_1.setTransform(259.2,40.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(85,78,109,0.8)").s().p("AgMAAQAAgZARAOIADACQAFAEAAAFQAAAGgFAEIgDACQgFAFgFAAQgHAAAAgRg");
	this.shape_2.setTransform(238.7,41.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(85,78,109,0.8)").s().p("AgPASQgEgDgCgGQgCgHAGgIIACgDQADgFAHgEQAMgHAKAKQAKAKgHAMQgHANgSABIgBAAQgFAAgEgDg");
	this.shape_3.setTransform(232.9,41.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(85,78,109,0.8)").s().p("AACAWQgKgBgFgGQgHgJACgNQACgOAQAAQAQAAACAOIABAKIAAACQAAAGgFAGQgFAFgGAAIgBAAg");
	this.shape_4.setTransform(28.4,13.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(85,78,109,0.8)").s().p("AEUCMQhIgFhMgfQg7gYhMguQhkg8gygeIg/ggQgmgUgVgSQgFgDADgGQACgFAGAAQAbABAjAPQANAGAtAYQAfAQBrA/QBVAyA5AcQBQAoBHAWQAGACgBAHQgBAHgFAAIgBgBg");
	this.shape_5.setTransform(61.8,26.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(85,78,109,0.8)").s().p("AgMAMQgJgIAJgJIAMgJQAGgFAHAHQAHAHgFAFIgJANQgFAEgDAAQgFAAgFgFg");
	this.shape_6.setTransform(334.9,28.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#554E6D").s().p("AgEAQQgJgCgBgIIAAgBQgCgLAIgEIAFgDQAHgGAIAIQAHAIgFAHIgBAAQgBAGgDACQgEAEgFAAIgEAAg");
	this.shape_7.setTransform(341.1,25.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(85,78,109,0.8)").s().p("AgFAKIgBgBQgCgDgCgFQgBgEADgEQAEgFAEAAQAFAAAEAFQADAEgBAEQgCAFgCADIgBABQgCADgEAAQgDAAgCgDg");
	this.shape_8.setTransform(11.9,27.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(85,78,109,0.8)").s().p("AADBLQgRgEgIgbQgGgUACgXQADgaAGgQQAJgYARgJQAHgCAGADQAGADAAAHQAAAMgFAYQgFAYAAAMIADAhQAAAUgJALQgCADgEAAIgDgBg");
	this.shape_9.setTransform(6.8,38.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(85,78,109,0.8)").s().p("AgSASQgKgKAEgNQAGgSATgBQAIAAAHAFQAHAFACAIQAEARgPAKIgJAEIgFAAQgLAAgHgHg");
	this.shape_10.setTransform(373.2,6.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(85,78,109,0.8)").s().p("Ah+BIQgBgDACgCQAagTAugcQA2ggASgMQAPgKAggZQAdgUAYAFQAEABACADQADAEAAADQgEAdgkAYIg+AhQgpAXgeAMQgoAPglACIgBABQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAgBg");
	this.shape_11.setTransform(357.2,16.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(85,78,109,0.8)").s().p("AgSAIQgCgFgBgEQAAgFAGgIQADgDAGAAIAJgBQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgQAAgFgLg");
	this.shape_12.setTransform(97.4,42);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhvAvQgEgIAJgFQBqgyBZglQAOgFAHANQAIAOgOAFIhjAvQg8AdgrAFIgCAAQgHAAgEgIg");
	this.shape_13.setTransform(363.2,25.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAUB1QgEgKgJgjQgGgYgchOQgYg/gCgoQgBgFAFgBQAFgBADAEQArBGAXBdIARBCIAHAWIAAABIAEAEIABADQACAFgFAFQgGAHgFAAQgKAAgKgXg");
	this.shape_14.setTransform(366.8,40.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag5CPQgvgjALheQAOhhAsgvQAUgWAYgCQAdgCANAbQACAEgDADQgDADgEgCQgwgWgfA8QgXAsgFA7QgHBOAeATQAZAQAmgVIA8giQAHgCAEAGQAFAGgEAGQgUAggxATQgZAKgTAAQgWAAgQgMg");
	this.shape_15.setTransform(343.3,46.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag5ATQgCgFAEgDQAXgQAkgJIAagHQAQgCAJAGQAFADgDAFQgFAJgPAFIgaAGIg9ALIgCAAQgEAAgBgDg");
	this.shape_16.setTransform(316.2,38.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag6ARQgCgFAEgEQAOgPAlgGIAcgGQASgCAKAEQAIADABAHQAAAHgGAEQgIAGgQACIgbABQgQABgkAGIgCAAQgEAAgDgDg");
	this.shape_17.setTransform(320,50.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgeCIQgGgDgCgHQgUgvgXhgIgPg5QgJgigCgYQAAgCADgCQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAfAmAUBNIAgB8QAjgPBJgYQANgEADANQADAOgMAEQhPAaglARQgDACgDAAIgGgBg");
	this.shape_18.setTransform(321.3,53.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ag6CZQgMAAgCgOQgEgqgShkQgRhbgCgzQAAgGAGgBQAGAAACAFQAWA4ANBPQAIAuAKBbQAdgBAvgWQAygXAagCQAGgBACAGQACAGgEAEQgXAdg4ASQgrAOgnAAIgJAAg");
	this.shape_19.setTransform(303.6,58);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhXATQgFgCgBgFQAAgGAEgCQARgHAbgFIAtgFQA8gIATAAQAMAAACANQACAMgMACQgTAEgbADIguAFIgnAEIgKAAQgQAAgNgDg");
	this.shape_20.setTransform(279.4,46.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhJAMQgBgHAFgEQAOgKAVgDQAKgCAaAAQAKAAAZgDQAWgCALAHQADACABAEQABADgCADQgIAMgUACIgjABQgYAAgyADIgBAAQgHAAgBgGg");
	this.shape_21.setTransform(280.7,60.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhCCSQgFgFAAgGQgBgVgUh3QgPhYAJg1QAAgEAEABQAEAAACADQALAdAIAtIAMBKQAKA4AGA8IA+gFQAkgEAcgHQANgDAEANQADAOgNAEQgfAKgqAEIhLAGIgBAAQgFAAgEgEg");
	this.shape_22.setTransform(281.3,61.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag4CaQg0gTASgqQADgHAHAAQAHAAACAHQAHAeAnAIQAgAIAggKQAQgFAOgPQARgRgFgPQgHgSgkgNQg5gRgcgMQgxgVgMgnQgMglAUgiQATgeAigNQAigOAaAOQAdAPAEAsQAAAFgEABQgFABgCgEQglhEgxAkQgVAQgIAXQgKAaAPAVQAWAeBBARQBDATAWAbQAcAhghAnQgeAigoAFIgXACQgeAAgdgLg");
	this.shape_23.setTransform(258.3,63.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhNCjQgOhCgMhbIgRieQgBgFAFgEQAEgEAFAAQAvgDAnASQAuAVAJAqQAPBChKAkIBAA2QAmAcAiAMQAOAEgEAPQgEAPgOgFQgpgOgvglIhPhBQgHgFADgJQACgIAIgCQAkgNATgXQAXgdgWgeQgdgpg9gBIASCVQAIBWABBBQAAAFgFABIgCAAQgEAAgBgEg");
	this.shape_24.setTransform(221.1,68.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgxAQIgCgBQgDABgCgEQgBgEADgCIABgCIAHgEQAHgEATgEQAlgJAaADQAGAAAEADQAEAEAAAGIgBACQAAAEgEAEQgEADgEgBQgYgBgkAEIgaACg");
	this.shape_25.setTransform(197.1,55.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgyAEQgDgCAAgDQAAgEAEgBQALgDAQgBIAbgBIAYgCQAOgBAJAHQAEADgDAFQgGAKgPADQgGABgVAAQgmAAgRgLg");
	this.shape_26.setTransform(197.5,69.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgnCZQgGgEgBgIQAAgMgSiFQgNhcAOg2QACgEAFgBQAGAAABAFQAGAcAFAuIAIBLQALBRACApQA4gOAaAJQAEACACAEQABAFgDADQgPAMgfAFIgxAIIgEABQgFAAgEgDg");
	this.shape_27.setTransform(198.1,70);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AANAQQhGgEgggHQgGgCAAgEQAAgGAFgCQAVgFAfABIAyACQANAAAbgFQAZgDAOAHQADABABAEQABAEgCADQgKAOgbADIgKABIgigCg");
	this.shape_28.setTransform(177.3,56.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgCCPQgIgaAAgsQABgwgBgXIgGhIQgEgtABgcQAAgFAFgBQAFgBACAFQAKAfAGAqQADAYACAyIAGBHQACArgHAbQgCAHgHAAIgBAAQgGAAgBgHg");
	this.shape_29.setTransform(178.8,70.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgKCXQgigUgWgnQgRgfgIgoQgThgAsgzQAYgcAsgGQAvgHAfAWQABAAAAABQABAAAAABQAAAAAAABQAAAAgBABQgBADgEAAQgxACgVADQgkAGgQAdQgZAtAQBBQATBKAjAeQATARAUgCQALgCAhgOQAGgDAFAEQAGADgCAFQgLAdgiAIQgKACgKAAQgWAAgUgMg");
	this.shape_30.setTransform(158,71.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAmARIgXgFQgLgDgTgBIgfgCQgFgBgBgFQgBgGAEgCQAXgLAkAFIAbAEQAQAFABALQAAALgMAAIgEAAg");
	this.shape_31.setTransform(137.2,72.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("ABDCeQgPgogVhlQgThagVgwQgbA6gQBEIgIBAQgFAqgMASIgCABQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQgQgTAFgtQACgPAMgzQAXheAhhBQAEgHAJAAQAIAAADAHQAhA5AXBfIAjCfQAEANgNADIgFABQgIAAgEgKg");
	this.shape_32.setTransform(137.4,71.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("ABMC2QgogSgwgzQg0g7gagYQgHgHAEgJQAEgJAKgBQArgFApgZQA4gggbgkQgSgYgrgSQgygUgQgOQgEgDADgGQADgFAFABQBfAfAKAFQBCAigOA0QgKAkgkAZQgdATgrAKICLCEQAIAIgHAJQgEAGgGAAIgHgCg");
	this.shape_33.setTransform(115.6,66.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgVCoQgDhBAMhmIAHhZQAEg3AIgjQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQAMAjgCAvQgBAQgHBDQgNB1ADBAQAAANgMAAQgOAAAAgNg");
	this.shape_34.setTransform(105.7,64.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("Ag/gFQgHgDACgIQADgJAHAAQARAAAXAGIAmAMIAeAEQAWAFgDAMQgDAMgUAAQggAAhNgfg");
	this.shape_35.setTransform(87,63.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("ABdCrQgQgzgVhmQgWhmgPgyQglA3giBMQgYA0gLAlIgEAYQgDAOgHAGQgDADgEgDQgSgOARg1IAdhDQAag9APgcQAagyAbggQAFgGAJACQAIACACAIQASA6AXBtQAYB0AOAyQAEAMgMAEIgFABQgIAAgDgKg");
	this.shape_36.setTransform(86.8,62);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("Ag/CWQgGgBgBgFQgGgaASguIAghEIAlhRQAZgwAcgXQADgDADACQADACgBADQgHAegYAtIglBIQgYA2gNAoIgIAbQgFAPgJAJQgCADgEAAIgCgBg");
	this.shape_37.setTransform(69.9,57.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgcAJQg5geAUgRQAAAAABAAQAAgBAAAAQABAAAAAAQAAAAABAAQAAABAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIACABIAGADIAGAEQAQAJAZALQAXAKAYAHIAOADQAIACAFAEQADADAAAFQAAAFgDADQgHAHgMAAQgaAAgzgfg");
	this.shape_38.setTransform(62.2,52.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AhFCjQgGgfARgwIAghKIArhiIARgmQAKgWALgMQAFgGAGAEQAGAEgBAHQgCAQgLAWIgTAlIgnBVIgdBPQgTAwgQAcIgDABQAAAAAAAAQgBgBAAAAQAAAAAAAAQgBgBAAAAg");
	this.shape_39.setTransform(56.3,49.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AhLClQgkgbgUg1QgSgxAEgwQAEg9AgguQAigyA1gLQBDgOAwAoQA/A1gKArIgCACIgDAAQgOgIgQgYQgSgbgKgJQgegZgjgDQgjgEghAWQgiAXgRAlQgSAlACAqQACAnAMAhQAOAmAZAVQAfAaAhgLQARgGArggQAHgGAHAIQAHAHgFAIQgaApgsAKQgMADgMAAQgeAAgbgTg");
	this.shape_40.setTransform(37.8,42);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("ApOC+QhrgIh9giQhbgYiFgyIhmgmQg4gYgqgWIhcg3Qg6gjgjgTQgzgbgZgKQgsgRgmAAQgpABgcAOQgjASgHAlQgBAFgGAAQgHgBABgGQAHg4A5gUQAwgSA5AMQAiAHApATQAYALAuAbIBRAxQAyAeAgARQApAXA3AWQAeAMBFAZQB8AuBMAWQCEAlBaAIQBLAHCHgCQEVgEDMgVIDwgYQCLgOBlgHIB6gHQBMgEAugEQAtgEBHgLIB1gSIBygNQBHgIArgHQBAgLAtgNQA8gRArgZQAEgCAEADQAagNA2gXQAYgMA1gfQAxgcAcgNQAAgBABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAQABAAAAAAQAAABgBAAQAAAAAAABQgWAdgqAaQgZAPg0AYIhHAjQgqATghAHQgpAThHAPQhCAPh7ANQgsAFibAWQh7AShMAFQknARiDAOIjOAWQh4AMhWAGQhoAHiKABIh3ACIgRAAQg6AAgsgDg");
	this.shape_41.setTransform(187.1,25.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AFMDXQgEgTgBgeIgEgxQgIhBgPg5QgThEgVgoQghg/gugQQg9gXhOAmQghAQhaBAQhIAzgsAUIhLAfQgsATgdAQQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQAegYAygXIBTgoQAbgOAkgZIA9grQBKg0AsgSQBMgeA4AZQBSAlArCZQASA+AIBBIAFA0QABAfgHAVQgBADgDAAQgEAAgBgDg");
	this.shape_42.setTransform(365.4,21.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("ArrECQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQABAAAAgBQAAAAABAAQAAAAABAAQAmADAzgGQAdgDA7gJQCIgTBVgQQBggSB/gjIDbg/QBrgfBtgcQBxgcA3gUQBlgkA/gwQBZhEAFhVQAAgHAHAAQAHAAAAAHQACBShNBFQg5AzhcAmQhOAfh4AgQiGAihDASQibAuhOAVQiJAmhkATQhMAOiWAUIhZALIgYAAQglAAgcgIg");
	this.shape_43.setTransform(324.7,66.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("Al9AiQgcgDhNgOQhCgLgngDIhEgDQgqgCgagDQglgFgLgDQgcgIgLgSQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAABAAQAAAAABAAQAAAAABABQAHAJAQAFIAbAGQAeAEAqADIA8ACQAkABAYAEQEEArDHgHQFKgJCEgHIB0gHQBCgEAxAAQAmgBBLABQBDgBAugGQADgBAAAEQABAEgDAAIgJADQgsAOhFAAQhNgCglABQgxABhIAEIh5AHQjHAKkZAHIg0AAQhcAAhcgLg");
	this.shape_44.setTransform(177.2,92.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AEYBsQgzgBgvgFQhggMhdgcQhbgdhagoQg5gagfgRQgxgZgjgZQgDgCACgDQABgDAEABQAeAOA5AeQA7AeAdANQBhArBRAYQC/A5CtgMQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAABQgQAJgYACIgYAAIgSAAg");
	this.shape_45.setTransform(62.3,78.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAnECQgqgWgrgmQhahSgEhbQgFhiBBhbQA/hZBcgcQABAAAAAAQABAAAAAAQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAABQg3AigYAUQgpAggaAnQg/BgAHBPQAHBbBZBMQApAlAnASQASAJAaAIIAsAOQABAAAAAAQAAAAAAABQAAAAABAAQAAAAAAABIgCACIgMAAQgpAAgwgYg");
	this.shape_46.setTransform(14.4,40.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#342E44").s().p("AspG0QgwABg/gKIhqgTIgWgEQhgABhHgJIgsgIQhBgGhNghQgkgGgsgRQgdgLgvgVQhAgdhVg0IgNgFQiIgghUhoQheh0BBh2IAEgHQAmhNA8g+QAPgQAUgNQAOgkAcgVQAegWAoAAQAqABAyAVQAfAOA1AfIBTA0QAyAeAiASQAeAQAkAPIAOAFIAgAKQAaAIAaAKQAoALBZAfQBUAdAuAMQATAFAMAKQAkAFBnASIBLAHQBuANCPgBQA6AADDgHIAEAAQA1gIBMgFICBgHIAqgEIAXgGQA/gSAegCQANgBAQAEIAVgBQArgKA2gCQAmAAA8AEQB3gJDvgcQBLgJDDgeQAbgEBSgVQBJgSArgFQAZgJAngLQBqg1B9hUQA7goAcgOQAzgbAtgFQArgEAfAeQASASAcAxQAnBHAcB7QALAwACAfQAEAvgLAhQgJAYgPARQgIAYgXAVQgmBBiaA9QhBAZiDAlQhyAfigAlIkTA+QirAnh8ARQiDAShMgIQg+ADhSgDQhDAFgvAFQhgALhBgHQgxAEhTAEIiFAHQhtAHg5gHQhGAHhEAAQijAAiXgpg");
	this.shape_47.setTransform(199.5,48.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.CharacterSelect, rect = new cjs.Rectangle(0,0,400.1,97.7), [rect]);


(lib.tailsway = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.2)").s().p("AiTBdIgEgOQAnAVA8gbQA0gWAggmQAdggAVgqQAVgtAHgpIAqAwQgFAsgXAwQgVAsgfAkQguA1hCARQgSAFgQAAQg0AAgVg3g");
	this.shape.setTransform(-15.8,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#363D1C").s().p("AhgCtQgYgHgQgVQgQgVgDgYQgEgVAEgYQAFgmAVgpQAihAA2gsQAqgiApgIQAOgCAMABQAJAAAAACQAAABgJABQgNABgLAEQgnALglAiQgxAsgfA+QgTAkgFAkQgDAVADATQADATANAQQAMARASAFQAPAFAXgDQAigFAkgXQAjgUAUgYQAUgYAQgaQAZgnAMgrIAHgYQACgIACAAQABAAgBAJIgDAZQgJAtgYAqQgRAfgTAXQgUAZglAYQgoAaglAFQgKACgJAAQgPAAgNgEg");
	this.shape_1.setTransform(-16.3,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B1D159").s().p("AiSB0QgZhRBQhoQBQhqBUAFIBQBeQgFArgXAvQgVAugfAkQguA0hCASQgSAFgQAAQg0AAgVg3g");
	this.shape_2.setTransform(-15.9,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.2)").s().p("AhNBlQgrgygXg9QgXg/AAhBIgdg5QAXgaAOgHQAlgsBbgjQgVBjAOB8QALA0AbA6QAZA1AhAxQA0BXAHAKQAkA1AqAeQicgYh1i3g");
	this.shape_3.setTransform(9.1,9.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#363D1C").s().p("ADDGdQhFgMg3gkQgsgcgugzQgjgogcgsIgOgTQgEgFgJgPIgMgTIgKgSQgdg9gFg+IgCgTIAAgOIABgMQABAAABAMIAFAgQAIA9AfA6IAJASIAMASIANASIAPATQAhAxAfAhQArAvAsAbQAlAZAsAMQgUgTgQgVQgQgUgkg7IgyhTQgZgtgSgtIgahRIgCgTQgFgyACgxQABgwAJgxQACgOAKgfIAQgrQAUgvAagdIAPgQIARgOIAEgDIABAAIABgBIABAAIgBgBIgBAAIgBAAIgDgBIgJgBIgSAAQgVADgOAEIghALIgfANQg2AXgoAvQgXAagcAxQgSAhgDAUQgBAKACAEIADAEIgBAAIgDgDQgEgFAAgKQACgWAQgiQAKgUAKgSIALgPIAEgDIAKgRIAEgGIASgVQAHgIAQgMQAggYAYgLIAggNQAVgJANgEQAVgGARgBIAUgBIALABIACAAIANAEIAPAGIAIADIggAXIgPANIgNAOQgZAdgTArQgGARgIAYQgJAdgCAPQgIArgCAyQgBAsAFA2IABALIAAADIAAACIAZBNQASAtAYArIAyBTQAgA2ASAXQAbAkAiAZIAeAXg");
	this.shape_4.setTransform(9.1,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B1D159").s().p("Ag8DJQgrgygXg/QgXg+AAhAIg4hyQgRgIAag3QAXgyAQgNQASgiAmgdQAlgcAsgQQBUgjAsAWQhSAtgmCNQgWBkAOB+QALA0AbA8QAZA1AhAwQA0BXAHALQAkA0AqAeQicgYh1i2g");
	this.shape_5.setTransform(7.4,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tailsway, rect = new cjs.Rectangle(-32.1,-41.9,64.4,83.9), [rect]);


(lib.fishmouthanim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0F1E16").s().p("AAlEAQgogDgmgQQgkgRgigbQg6gwgrhMQgphKgIhDQgFgpAIgfIACgIIAIgQIAHgMQABAAAAgBQAAAAABAAQAAgBABAAQAAgBABAAIASgRQAtghBAgOQAsgJA1ABQAuACAZAHQAaAFASALQAMAHAAADIgEgBIgKgGQgUgIgXgEQgcgFgqAAQgwAAguALQg8APgqAfQgtAdALBUQAJA/AnBGQArBKA2AtQAfAZAiAQQAhAPAmACQBCAEBDgtQAcgSATgaIAQgaQAIgXABgGQAHgbgDgfQgBgagHgaQgFgWgKgZIgSgqIgIgSIgJgQIgTgaQgRgTgPgNIgLgMIANAIQASANASARIAVAaIAKARIAcA8QAKAWAIAaQAIAaACAdQADAfgHAfQgGAhgVAdQgVAegeAUQgJAGgXAMQgDADgOAFIgRAHQgfAMgmAAIgJAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#363D1C").s().p("AgRDtQhSgbhChVQg8hOgVhXQgWhaAigsQAjgjA4gTQAzgSBAgCQBpAAAlAeIANANQAuAkATAeQAIAMAaA6QAiBKgFBDQgGBchTAvQg6Amg8AAQghAAgggMg");
	this.shape_1.setTransform(0,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fishmouthanim, rect = new cjs.Rectangle(-26.4,-25.6,52.8,51.2), [rect]);


(lib.fishfin2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#363D1C").s().p("AgtBZQgKgBABgDQAAgBAIgDQALgEAHgHQAWgSATgpQAQggALglQAFgQAAgGIAAgHQAAgBAAAAQABAAAAAAQAAAAABAAQABAAAAABQADABACAFQADAJgCARQgDAkgUAnQgWAtgdARQgMAHgKAAIgDAAg");
	this.shape.setTransform(-11,-13.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B1D159").s().p("AgzBWIBjisQAHADgFAcQgGAdgOAfQgjBSgqAAIgEgBg");
	this.shape_1.setTransform(-11.3,-13.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#19303F").s().p("AA4DTIgSgBIgJgBIgHgBQgUgEgQgRQgLgMgNgSIgfgsIgWgtIgUg5QgWg6gGggIgBgKIgBgZIABgXIABgDIACAAQADABAGgFQABAAABgBQAAAAABAAQAAAAABAAQAAABAAAAIgDACIgDADIgFADIADAuIADAJQAFAcAaA8IAVA3IAHAOIAjA5IALANQAOAUAJAHQAMAOAQACIADABIAAAAIAAAAIAAgBIgDgHQgGgIgDgPQgGgeAIgVIAGgKIADgEIAGgFIAFgEQAKgFAPgFIAYgFQANgDAGgFIABAAIgDAAIgUgBQgVgDgRgJQgJgFgHgIQgIgJgCgLQgBgLAEgLQAEgJAGgIIAGgHIAHgGIAOgLIAbgSQANgJAGgKIgCABQgPAJgOADQgYAGgfgCQgZgBgXgGIgMgEIgLgEQgMgGgHgHQgNgNgHgVQgFgNgCgTQgCgXAEgVIABgBIACAAIAFAAIABgFIABAHIAAABIgBAAIgEABQgBAVACATQADAPAFAOQAIATAMAKQAGAGAKAEIAJAEIAKACQAXAFAXABQAeABAVgGQAKgCAOgIQALgIAGgKIANgVIADAYQADAUgIAPQgHAOgSAMIgbATIgNAKIgFAFIgFAGQgKANABAKQACALAPAJQANAGASADIATABIAjgHIgHAWIgCAGIgFAGIgKAKQgKAHgQADIgXAGQgMADgIAEIgEADIgDADIgCACIgCAFQgHAQAFAYQACAJAFAKIACAFIABACIACABIAFAHIAEADIAgAUg");
	this.shape_2.setTransform(2.3,1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3D79A5").s().p("AAPDHQgOgHgUgZQgxg+gRg0QgYg7gKgfQgRg2AEgpQAEAAADgDQADgEADAAIAhg3QgEAlALAfQAPAmAgAJQAsANArgEQA2gEASggQAEAdgcAWQgQANghAXQglAoAnAXQAkAVAqgMQgEAXgjAJQgtAMgKAKQgPATAIAkQAHAjAUAKQgeAAgPgIgAhVjHIACAAIgDAFIABgFgAhTjHIAEgHIAAAHgAhTjHg");
	this.shape_3.setTransform(1.8,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fishfin2, rect = new cjs.Rectangle(-16.5,-22.4,33.1,44.8), [rect]);


(lib.fishfin1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#19303F").s().p("AgKCMIgKgRIgGgTIgCgEIgBgbIgBgOIgBgNIgDgMQgDgFAAgFIAAgDIgBAAQgEAAgFADIgXAOIgBABIgLAQQgLARgKAcIgLAmIgHgnQgLhGAXg3QASguAqgoQAMgMAUgQIAZgWIATgTIANgPIAFAAIADgFIAAADQAAABAAABQAAABAAAAQAAABgBAAQAAABAAAAIgFABIgKAPIgSAVIgYAYIgeAdQgmApgQAqQgOAkACArIAHgOIAOgVIACgBIAEgCIALgHQAHgFAGgDQAGgEAMgBIAFABIAHABQAGADACAGQABAEgBAHIABADIAEAQIAEAtIAAAJIABADIAGAQIAHAPIAAABIAAAAIABAAIAAgDIAGgbQAFgRAIgMQAEgGAHgGIAPgMIADgCIABgBQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAfA3IgEgMQgHgagDgeIgGgnIAAgJIAGgqQAIgmAKgSQAFgKAFgDQAGgDAAACIgFADQgDAEgDAJQgHARgGAnQgDAXAAARIgBAGIABAEIAGAkQAGAhAGAUQAFAQAFALQAHAOAIAGIABABIgHAPIgNgFIgMgIIgLgKIgJgMIgWgnIAAAAIgBABIgIAKQgGALgEANIgEANIgBAHIgBAEIgCBHg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3D79A5").s().p("AgGCWQgLgSgEgQQAAgugGgUQgCgDAAgMQAAgFgMAAQgHAAgNAHIgUANIgTAfQgJASgFARQgKg8AQgyQAQgyAtgtIAtgpQAcgaAMgTQAGAAAAgCQABAAAAgFIA8BJQgNAAgLAyQgJAqAAAbIANBOQAMA4AVANQgZgJgPgYIgagvQgXANgKAjQgHAZAAAiIgSgig");
	this.shape_1.setTransform(0.2,-1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fishfin1, rect = new cjs.Rectangle(-12.5,-20.2,25.1,40.5), [rect]);


(lib.clamtop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHAMQgDgFAAgHQAAgGADgEQADgFAEAAQAFAAADAFQADAEAAAGQAAAGgDAGQgDAEgFAAQgEAAgDgEg");
	this.shape.setTransform(1,-26.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgRAaQgIgLAAgPQAAgOAIgLQAHgLAKABQALgBAHALQAIALAAAOQAAAPgIALQgHALgLAAQgKAAgHgLg");
	this.shape_1.setTransform(-0.3,-24.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgJAOQgEgFAAgJQAAgHAEgGQAEgGAFAAQAGAAAEAGQAEAGAAAHQAAAJgEAFQgEAGgGAAQgFAAgEgGg");
	this.shape_2.setTransform(52.7,-0.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgWAgQgJgNAAgTQAAgSAJgNQAKgOAMAAQANAAAKAOQAJAOAAARQAAATgJANQgKAOgNAAQgMAAgKgOg");
	this.shape_3.setTransform(51,1.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#353534").s().p("Ag7AhQgCgFAEgDQAIgGARgRQAPgPALgHQAKgFATgDIAegFQAGgCABAGQACAFgGACIglAHQgWAEgMALQgXAYgOAKIgDABQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBgBAAg");
	this.shape_4.setTransform(25.5,-2.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#353534").s().p("AhbBHQgDgFAEgCQARgLATgfQAVgfAOgLQA6gsAvgJQAFgBACAFQABAGgFABQgiAKgbAOQgiARgRAVIgcAnQgRAYgRAKIgCABQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_5.setTransform(4,-7.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#353534").s().p("AhUA/QgEgDACgDQBJhjBbgVQAHgCACAHQACAGgHACQhUAUhMBdQAAAAAAABQgBAAAAAAQAAAAgBAAQAAABgBAAIgDgCg");
	this.shape_6.setTransform(-14.1,-14.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#353534").s().p("Ah1BUQgDgEAEgDQANgHAOgUQASgZAGgGQAkghAXgMQATgLAmgZQAigUAcgEQAFAAABAFQAAAGgEABQhAAShKA4QgmAbgcAnQgKAOgMAGIgCABQgBAAAAAAQgBAAAAgBQgBAAAAgBQgBAAAAgBg");
	this.shape_7.setTransform(-40.8,-18.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.4)").s().p("ADMBzQgcgFhGgRQiBggh/gHQgvgCgwgRQgvgRgngbQgQgLgCgRQgDgRAMgJIAFgIQALgOAagFQAKgCAigEQAPgBA0gOQApgMAbAEIBPALQAtAIAfAMIAeAKQA/AHAuAVQAUAJAgAUQAkAVAQAHIAdAPQARAJAJAKQAXAWgIAXQgBARgPADQgMAJgRADQgQADgUAAQgdAAgjgGg");
	this.shape_8.setTransform(-18,-9.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAaBpIgEAAIgOgCQgJgDgDgFQgIgBgHgFQgTgNgOgiQgIgTgDgTQgFgVABgXQABgOAEgMQAFgOAKgKQAKgLASgDQAQgCAOAIQAXALAPAgQAKAWAFAaQAKA2gQAeQgDAGgIAJQgIAIgFACIgEACIgCABgAgCBbQADADAIABQAEABAGgBIAGAAIADgDQALgHAGgOQALgagLgwQgFgZgJgTQgMgZgRgJQgIgEgKABQgLABgGAHQgNAMgCAZQgEAiANAqQALAgAOAOIAIAGQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAQABAAACAEg");
	this.shape_9.setTransform(51.7,4.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAGBgQgGgCgDgEQgQgDgPgaQgQgbgGgkQgGgnAKgaQALgeAeAAQAhAAAVAzQAQAnAAAoQAAAxggAPQgPABgGgCg");
	this.shape_10.setTransform(51.7,4.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#353534").s().p("AgSBVQgRgGgPgNIgGgGIgFgEQgHgGgEgIQgKgYAFgbQAEgTAHgKIABgBIABAAQAHABAAABQAAABgFABQgEAOAAANQgBAZAJASQAEAGADACIAHAFIAGAFQAMAJAOAFQAQAFANgEQAPgFAIgPQAZgugFgdQgCgQgNgMIgGgFIgDgCIAAAAIgCgBIgPgGQgdgLgOADQgFABgFAEIgEADQgBgBACgEIAEgFIAHgFQAQgIAhAKIASAFIAHAEQAEACAEAEQASAPAEAVQAEAVgHAYQgDAMgEAKIgKAWQgLAVgYAIQgIACgIAAQgLAAgOgEg");
	this.shape_11.setTransform(62.8,23.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C9C7C0").s().p("AgxA3QgSgJgDgfQgDgcALgWIAGAAIAUggQAIgRAcAFQAJABAgALQAfARAAAkQAAAbgSAkQgOAgghAAQgeAAgagag");
	this.shape_12.setTransform(62.6,22.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#353534").s().p("AgRAtIgGgCIgDgCIgBAAIgMgEQgKgFgJgKQgNgOgFgTQgEgOABgLQABgJADAAQABAAADAIIAIAVQAJAQAJAJQAHAGAHAEIAIADIAHACIAEABQAOAEATgKIAcgTQAMgHAJgEQAJgEABACQABACgGAGIgRAQQgQAQgMAHQgLAIgKACQgHACgGAAQgGAAgHgBg");
	this.shape_13.setTransform(25.6,9.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C9C7C0").s().p("AgZAlQgXgFgPgYQgOgWAAgaICbAgQggAZgSAMQgTAMgPAAQgKAAgJgEg");
	this.shape_14.setTransform(25.8,9.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#353534").s().p("AgtA2QgSgDgQgLQgXgQgOgbQgJgTgDgRQgDgOADAAQABgBAGANQAJASAIANQAPAWAVANQAMAIAOABQAIABAGgBIADAAIADgBIAMAAQAQgCAOgEQANgFAOgIQAPgLAWgZQASgSAOgEQAHgCAEABQABAAABAAQAAAAABAAQAAABAAAAQABAAAAABIgEACIgIAEQgLAHgNARIgQATQgIALgNALQgNAKgSAHQgRAGgSACIgPAAIgCABIgKAAIgKAAg");
	this.shape_15.setTransform(6.2,9.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C9C7C0").s().p("AhaAZQgcgbgLguIEDAKQgRAAgUAWQgXAagLAJQgeAdg0AAIgOABQgcAAgZgYg");
	this.shape_16.setTransform(6.3,8.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#353534").s().p("AgwBQQgqgPgYgjQgMgQgFgRQgFgRADgQQADgYASgRQAFgFAEgDQABAAABgBQABAAAAAAQABgBAAAAQABABAAAAIgIAOQgMAUgBASQgBAcAUAZQAXAdAkANQAUAHARAAQAQAAAQgHQAJgDAUgNIAVgPIAAgBIACgBQAIgIAPgGIASgGIAJgGQABAAABgBQABAAAAAAQABAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAQAAABgBABQAAAAgBABQgBADgHAHIgRAJQgNAHgFAHIgBABIgWATQgXARgIADQgWAJgSAAIgGABQgRAAgVgIg");
	this.shape_17.setTransform(-16.3,4.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C9C7C0").s().p("AhxAaQgpg8A1gvIDpBXQgHAIgTAJQgUAIgGAJQgfAZgMAGQgWALgZAAQhAAAgng4g");
	this.shape_18.setTransform(-16,4.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#353534").s().p("AgwBSQgvgLgigjQgigjACgjQABgRAKgMQAHgJAKgGQAFgDAHgDQAFgBAAABQABABgEADIgKAIQgTASABAVQABAcAeAcQAhAeAoAKQAUAFAVgEIAIgCIBZglIAdgUQANgGAHgDIAIgCIAGgBQAFgBAAACQAAABgEACIgFACIgXAPIgWASIgHAFIgIAFIhQAmIgMADQgLADgMAAQgNAAgOgEg");
	this.shape_19.setTransform(-41.9,2.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C9C7C0").s().p("AhBBJQgmgOgbgdQgcgeAAgcQAAghAngTIEWBOQgRADgSANIgeAWIhYAnQgNAGgQAAQgUAAgWgIg");
	this.shape_20.setTransform(-41.5,2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#353534").s().p("AgdA3IgCAAIgKgCIgLgEIgKgGQgKgHgCgOQgDgOAIgVQAGgQAOgXIABgDIACABQAGABAAACQAAAAAAABQAAAAgBAAQAAABgBAAQgBAAgBABQgBAIgIAgQgFARACAKQACAGAEADQAEADAKADIAFABIADAAIABAAIABAAIAKAAIATgFIAlgLQAPgDAMAAQAKABgBADQAAABgJADIgXAIIgjAPIgWAHIgOACg");
	this.shape_21.setTransform(-63.1,-0.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C9C7C0").s().p("AhGAMIATg8IAHAAIB0BHQgVAAgiANQghANgPAAQgqgEADghg");
	this.shape_22.setTransform(-62.7,-1.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#353534").s().p("AJBD3IgbgPIgigSQgWgMgTgIQgKgFgngOQgMgEgQgEIgegHIAAAAIhoghIgngLIgDgBIgOAAQgXAAgmAJIghAHIgRADIgNACIgFAAIgSgBIgSgCIgjgHIhGgUQgagGgwgCIgjAAIgsgHQgzgHgdACIhTAJQg6AGgfgFQghgGg0gXIgVgJQgIgEgMgCQglgJgHgDQgOgFgJgHQgFgEgFgGQgFgGgCgGQgJgWAIgdQAHgXANgWQANgVARgSQAXgZAggXQAdgTAjgOIARgGIASgFIAigHQAlgHAegFQBQgNA3AEQBHAFA4AcQA7AdA0AQQAQAFApAJIAcAIIAbAJIA1AWQARAHAfARICtBeICHBbQAnAZARAMQA0AnAZAdQAVAYAHAZIAAADIAAAAIgBAAIAAABQgBACAAgBIAAgEQgKgYgUgWQgcgegzgiQgZgSgfgSIiIhYIgogWIiFhGQgggQgQgHIgzgVIg3gQIg4gOQg1gPg+gfQg2gahCgEQg1gDhNANIh1AXIgQAGQgeALgeAUQgfAXgUAWQgOAOgOAVQgMAUgGAUQgGAXAGAQIAEAHIAHAGQAHAFAKAEIArALQAMADALAFIAVAJQAyAWAfAGQASADAXgBIAqgDIA/gHIAVgBQAigDAxAIIAsAHIAiABQAvACAeAHQA0APASAFIAIACIAaAFIAhADIAQgBIAwgKQAugJATAAIAVACIAnAMIBnAjIgBAAQA4AMA1AZQAfAPArAaQANAJANAGQANAHAGgCQAFgCAAgIIAAgFIACAFIgBAGQAAAFgEACIgGABQgGAAgLgEg");
	this.shape_23.setTransform(-0.8,-2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C9C7C0").s().p("AJBDyIgkgUQhWg2hagSQgSgFgzgRQgtgQgdgHQgbgEgqAJIhKAOQgeAAgjgIIhAgSQgngNhUAAIg3gJQgegEgaAAQgaAAgwAHQgxAGgaAAQgiAAglgMQgPgFgzgWQgFgCgugMQgjgJgLgQQgSgZASgsQAOgjAZgZQBDhNBmgUQB9gWAlgDQBagFBJAeQBUAqBAAQQAwALAhAKQAnANAkASQBrA2BGAoQBhA2BHA1QA7AlAiAcQA4AuANAmIhOgNQADARgMABQgFAAgIgEg");
	this.shape_24.setTransform(-0.4,-1.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AABBjQgHAAgKgIQgJgIgIgRQgDgJgCgNQgBgIABgFQAAgBAAgBQAAgBABgBQAAAAAAgBQABAAAAAAQAAAAAAABQABAAAAAAQAAABAAABQABABAAABIADAMIAIASQAJANAHAGQAKAHALgHQAMgKAHgRQAKgegMgyIgKgfIgEgIQgKgRgPAEQgNADgLAQQgHANgDAPIgBABIgCAuQgCASgCAAQgCAAgCgSIgDgwQACgTAIgQIAGgJIADgEIAEgEQAIgIAMgEQAMgEAOAGIAGAEIAGAEIAIAKIAGALIAMAiQAGAaAAAUQAAAcgIASQgIAVgSAMQgJAGgKAAIgDAAg");
	this.shape_25.setTransform(-0.1,-22);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgSBMQgRgWAAgdIgNAHIAAhAQAFguAhgKQAggLAOAvQANAnAAAfQAAAsgbAWQgJAHgIAAQgMAAgLgPg");
	this.shape_26.setTransform(-0.2,-21.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.clamtop, rect = new cjs.Rectangle(-70.7,-31.9,141.4,63.9), [rect]);


(lib.clammid = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231C1F").s().p("AiTD3QhNgYgggOQg+gegRgrQgOgjAMhFQAOhKgGgdQgJgtgfgjQgZgcgtgcIAggUQAegeA0ACQAdABA6AOQBiAUC1AnQCQAUBnAmQCuBBgZBaQgMAuhAAsQgMAHheA1IheAlQg0ATgqAJQg2AJg0AAQg2AAg2gJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.clammid, rect = new cjs.Rectangle(-44,-25.6,88.1,51.3), [rect]);


(lib.Path_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#332A1C").s().p("AiuAFQAAgLCgACQBWACARgBIAugHQAngGABACQAHANhXAJQhAAIgeAAQivgBAAgKg");
	this.shape.setTransform(17.5,1.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_19, rect = new cjs.Rectangle(0,0,35.1,3.2), [rect]);


(lib.Path_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#332A1C").s().p("AhPAFQAAgLBPgEQBRgEgBAKQAAAMhQAEIgiAAQgtAAAAgHg");
	this.shape.setTransform(8,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_18, rect = new cjs.Rectangle(0,0,16,2.5), [rect]);


(lib.Path_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#332A1C").s().p("AiKAKQgHgCAWgLQAPgFAdgBIBdABQB/gBAAAJQAAALh/gBQgjABg7gFIgfgBQgUAFgFAAIgCAAg");
	this.shape.setTransform(14.1,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_17, rect = new cjs.Rectangle(0,0,28.2,2.1), [rect]);


(lib.Path_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#332A1C").s().p("AhzADQAAgJB1AFQAoABAdgFIAXgHQATgGABACQAQAPhzATQiCgBAAgOg");
	this.shape.setTransform(11.6,1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_16, rect = new cjs.Rectangle(0,0,23.2,3.6), [rect]);


(lib.Path_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#332A1C").s().p("AlEAKQAAgLFEgJQFFgJAAAKQAAALlFAJQiVAEhRAAQheAAAAgFg");
	this.shape.setTransform(32.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_13, rect = new cjs.Rectangle(0,-0.1,65,3.1), [rect]);


(lib.Path_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#332A1C").s().p("AmAAWQAAgGGAgXQGAgYABAEQABASmCAXQjmAPhdAAQg9AAAAgHg");
	this.shape.setTransform(38.5,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_12, rect = new cjs.Rectangle(0,0,77,5.7), [rect]);


(lib.Path_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#332A1C").s().p("AhVgCQAAgLBWAHIAsgDQAmgEABABQAMAMhSANQhjgDAAgMg");
	this.shape.setTransform(8.6,1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_11, rect = new cjs.Rectangle(0,0.1,17.2,2.7), [rect]);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#332A1C").s().p("AlaAaQAAgDCkgUIC1gVQFcgTAAAKQAAANlbAPQjzAehIAAQgfAAAAgFg");
	this.shape.setTransform(34.7,3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_5, rect = new cjs.Rectangle(0,0,69.4,6.3), [rect]);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#332A1C").s().p("AgmAGQAHgIAjgGQAkgHAAAMQgBANgoABIgOABQgcAAAFgGg");
	this.shape.setTransform(3.9,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4, rect = new cjs.Rectangle(0,0,8,2.4), [rect]);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyTB7QgbAAgMgIQgKgHAAgNQAAgNAKgGQAOgLAigEIA0gGQAegEA+gEQBmgGBZgCQBXgCB0gMIDJgXQBbgJE6gsQD5gjCcgMIDMgPQBygHBZAAIDMgCQBqAABPAJIACAAIAGABIACAAIAKABQASADAAARQAAASgSACQgyAGg8ADQgtABhKAAIh2AAQhkABiFALIjoAUQilAPkqAqQlCAtiPAPQiYAQjsAJQiIADhEAFIgnACIgDAAg");
	this.shape.setTransform(122.1,12.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, rect = new cjs.Rectangle(0,0,244.2,24.7), [rect]);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgDAaQgrgGgdgMQgegMACgLQACgLAfgDQAggDAqAHQArAGAdAMQAeALgCALQgCALgfAEIgVABQgYAAgdgFg");
	this.shape.setTransform(10.4,3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, rect = new cjs.Rectangle(0,0,20.8,6.2), [rect]);


(lib.Path_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgDAaQgrgGgdgMQgegMACgLQACgLAfgDQAggDAqAHQArAGAdAMQAeALgCALQgCALgfAEIgVABQgYAAgdgFg");
	this.shape_1.setTransform(10.4,3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_1, rect = new cjs.Rectangle(0,0,20.8,6.2), [rect]);


(lib.Path_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgDAaQgrgGgdgMQgegMACgLQACgLAfgDQAggDAqAHQArAGAdAMQAeALgCALQgCALgfAEIgVABQgYAAgdgFg");
	this.shape_2.setTransform(10.4,3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_2, rect = new cjs.Rectangle(0,0,20.8,6.2), [rect]);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AnvDBQjUg5gGhhQgFhfDNhQQDNhQEogQQEngQDVA4QDVA5AFBhQAFBfjNBQQjNBQkoAQQhAAEg+AAQjYAAimgsg");
	this.shape_1.setTransform(71.4,23.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2, rect = new cjs.Rectangle(0.1,0,142.8,47.3), [rect]);


(lib.Path_12_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiyBfQgtgNgZgNQgmgTgSgbIgbAAIAAgKQANgPAXgRQAbgRAOgKQBKgyCIglIAJgDQA9AKA+ARQBjAbBKAnQB7BAhZAqQgvAahKAOIh+AUIhBAOQg+gMhjgeg");
	this.shape_1.setTransform(33.2,13.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_12_1, rect = new cjs.Rectangle(0,0,66.4,27.4), [rect]);


(lib.Path_4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhlDWQgWgpgEgnQgIgvALgrQAHgYAbg7IAthJQAbgrAMgeQAOgdAAgTIAwgxIADAgQADAYAAAIQADATAKAgIAMAvIATBqIANAtQAJAgADAUQgzARhCBBIgpA2QgbAlgBAbQgegngQgeg");
	this.shape_1.setTransform(13.2,28.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4_1, rect = new cjs.Rectangle(0,0,26.3,56.6), [rect]);


(lib.WavesMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// wave0
	this.wave0 = new lib.Waves();
	this.wave0.parent = this;
	this.wave0.setTransform(-322.1,60.6,0.53,0.53,0,0,0,394.1,76);
	this.wave0._off = true;

	this.timeline.addTween(cjs.Tween.get(this.wave0).wait(4).to({_off:false},0).wait(18));

	// wave1
	this.wave1 = new lib.Waves();
	this.wave1.parent = this;
	this.wave1.setTransform(291.8,39.1,1,1,0,0,0,394.1,76);

	this.timeline.addTween(cjs.Tween.get(this.wave1).to({_off:true},1).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(296.2,29.6,23.6,16);
p.frameBounds = [rect, rect=null, rect, rect, rect=new cjs.Rectangle(-319.7,55.5,12.5,8.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.CurtainMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.dispatchEvent(new createjs.Event('curtainOpened'));
		this.stop();
	}
	this.frame_59 = function() {
		this.dispatchEvent(new createjs.Event("curtainClosed"));
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(30).call(this.frame_59).wait(1));

	// curtaininner
	this.instance = new lib.curtaininner();
	this.instance.parent = this;
	this.instance.setTransform(549.5,300,1,1,0,0,180,258.5,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1066.5},29,cjs.Ease.get(1)).to({x:549.5},30,cjs.Ease.get(1)).wait(1));

	// curtaininner
	this.instance_1 = new lib.curtaininner();
	this.instance_1.parent = this;
	this.instance_1.setTransform(258.5,300,1,1,0,0,0,258.5,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-258.4},29,cjs.Ease.get(1)).to({x:258.5},30,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,808,600);
p.frameBounds = [rect, new cjs.Rectangle(-35,0,878.1,600), new cjs.Rectangle(-68.8,0,945.7,600), new cjs.Rectangle(-101.4,0,1010.9,600), new cjs.Rectangle(-132.7,0,1073.6,600), new cjs.Rectangle(-162.9,0,1133.8,600), new cjs.Rectangle(-191.8,0,1191.6,600), new cjs.Rectangle(-219.4,0,1246.9,600), new cjs.Rectangle(-245.9,0,1299.8,600), new cjs.Rectangle(-271.1,0,1350.2,600), new cjs.Rectangle(-295,0,1398.1,600), new cjs.Rectangle(-317.8,0,1443.6,600), new cjs.Rectangle(-339.3,0,1486.6,600), new cjs.Rectangle(-359.6,0,1527.3,600), new cjs.Rectangle(-378.6,0,1565.4,600), new cjs.Rectangle(-396.5,0,1601,600), new cjs.Rectangle(-413,0,1634.1,600), new cjs.Rectangle(-428.4,0,1665,600), new cjs.Rectangle(-442.5,0,1693.2,600), new cjs.Rectangle(-455.5,0,1719,600), new cjs.Rectangle(-467.1,0,1742.4,600), new cjs.Rectangle(-477.6,0,1763.3,600), new cjs.Rectangle(-486.8,0,1781.8,600), new cjs.Rectangle(-494.8,0,1797.7,600), new cjs.Rectangle(-501.6,0,1811.3,600), new cjs.Rectangle(-507.1,0,1822.3,600), new cjs.Rectangle(-511.4,0,1830.9,600), new cjs.Rectangle(-514.5,0,1837.1,600), new cjs.Rectangle(-516.3,0,1840.8,600), new cjs.Rectangle(-516.9,0,1842,600), new cjs.Rectangle(-483,0,1774.2,600), new cjs.Rectangle(-450.3,0,1708.7,600), new cjs.Rectangle(-418.7,0,1645.5,600), new cjs.Rectangle(-388.3,0,1584.6,600), new cjs.Rectangle(-359,0,1526.1,600), new cjs.Rectangle(-330.8,0,1469.8,600), new cjs.Rectangle(-303.8,0,1415.8,600), new cjs.Rectangle(-278,0,1364.1,600), new cjs.Rectangle(-253.3,0,1314.6,600), new cjs.Rectangle(-229.7,0,1267.6,600), new cjs.Rectangle(-207.3,0,1222.7,600), new cjs.Rectangle(-186.1,0,1180.2,600), new cjs.Rectangle(-166,0,1140,600), new cjs.Rectangle(-147,0,1102.1,600), new cjs.Rectangle(-129.2,0,1066.5,600), new cjs.Rectangle(-112.6,0,1033.2,600), new cjs.Rectangle(-97,0,1002.2,600), new cjs.Rectangle(-82.7,0,973.4,600), new cjs.Rectangle(-69.5,0,947,600), new cjs.Rectangle(-57.4,0,922.9,600), new cjs.Rectangle(-46.5,0,901.1,600), new cjs.Rectangle(-36.7,0,881.5,600), new cjs.Rectangle(-28.1,0,864.3,600), new cjs.Rectangle(-20.6,0,849.4,600), new cjs.Rectangle(-14.3,0,836.7,600), new cjs.Rectangle(-9.2,0,826.4,600), new cjs.Rectangle(-5.1,0,818.3,600), new cjs.Rectangle(-2.3,0,812.6,600), new cjs.Rectangle(-0.6,0,809.2,600), new cjs.Rectangle(0,0,808,600)];


(lib.wormVolumeBody = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.eyes();
	this.instance.parent = this;
	this.instance.setTransform(26.2,-37.1,1,0.938,1.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3F2032").s().p("AigArQgFgBABgEQACgeA2gUQAlgPAsgGIAvgIQAcgDAUAFQAnAMA2AkQAEACAAAGQABAFgEgCIgjgTQgXgMgOgFQgYgKgbAAQgPAAgjAFQiGARgJArQAAAEgEAAIgCAAg");
	this.shape.setTransform(24,-51.3,1,0.938,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3F2032").s().p("AALAzQgbgcgDgcQgBgKAEgMIAGgWQABgEAFABQAEABAAAEIAAABIgGAUQgEAMACAJQAFAXAXAcQACAEgDACIgEABQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_1.setTransform(-24.2,58.2,1,0.938,1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3F2032").s().p("AgwBMQgTgmAmg5QAkg5AqgDQAFAAABAFQAAAGgFAAQgmAGgeAxQgfAwALAlQACAFgFACIgCABQgDAAgCgEg");
	this.shape_2.setTransform(-36.5,44.7,1,0.938,1.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3F2032").s().p("AA3BrQgugXgKgIQgdgTgOgcQgPgdgCgjQgCgcAFgoQABgFAFABQAFABAAAFQgFAlAAAWQABAiANAXQAPAdAaAUIA4AiQAFACgCAFQAAABgBAAQAAABgBAAQAAABgBAAQAAAAgBAAIgDgBg");
	this.shape_3.setTransform(-15.4,12.8,1,0.938,1.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3F2032").s().p("AAXBcQgtgRglgiQgygugDhBQgBgOAHgJQAHgJAMACIABAAQAGAAgBAHQAAAGgGgBQgUgCAKAqQAJAkALAOQALAPARAOIAgAYQAYAVAjAIQAoAKAVgTQAEgEAEAEQAEAFgEADQgRASgbAAQgUAAgYgJg");
	this.shape_4.setTransform(3.5,-1,1,0.938,1.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.2)").s().p("AgdJoQjagGgdiUQgOhdAihrQAehdA+hcQAqg/BfhTQBzhoAhgkQA6hFAThRQAQhIgLhnQgDgwAEghQAhAiAUAvQATAuAEAyQAGBZgjBeQgiBZhABPQgxBBhoBnQhzBygtA3QghAjAhAgQALALAeAZQAcAbATAcIBkCFQAAAcgjAvIgRAAIgFAAg");
	this.shape_5.setTransform(-13.4,6.1,1,0.938,1.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.2)").s().p("ACMBJQgGheg8hDQhBhKhbAJQg5ABgfAjQAShrBkgCQBbgJBBBKQA8BDAGBeQAIBug6B2QAZhQgFhLg");
	this.shape_6.setTransform(25.4,-40.7,1,0.938,1.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3F2032").s().p("AjPKwQgtgDgpgOQgxgSgkgmQgngsgIg6QgRh0A9iIQAbhAArg+QAjgyBCg/IB1hpIA5g6QAcgeATgjQAohFADhaQACgmgFgxIgDgsQAAgXACgXQACgaAIgbQAJgcARgWIAKgKIALgJIAMgHQAFgDAIgDQATgIAigCQArgEAnAOQAnAMAfAdQA7A0AWBRQAKAjABApQACAkgGAmQgLBGgeBBQgaA5grA7QgxA9ggAjQg3A6hmBkIgjAjIggAjIg6A/Qg/A/gUAsQgMAXgDAXQgCAUAFAQQADALAFAJIADAHIgFgGQgGgKgDgKQgGgQABgVQACgZALgYQAUgtA/hCIAcgfIAcghIAggjIAiglQBlhkA2g7QAggjAvg8QAqg6AZg3QAehCAJhBQAFgkgBgjQgCglgJgiQgXhMg1gvQgbgagkgMQgkgMgnAEIAAAAQgiADgNAGQgYAIgOASQgPASgHAZQgHAWgCAbIgCArIADAsQAEAsgBAsQgDAzgKAlQgMAsgVAkQgVAlgcAgIg7A6QgnAlhOBFQg/A8glAxQgpA8gcA+Qg8CFAPBvIAAAHIAMAnIAPAdIAQAVQAgAkAvARQAmAPAtADQAdADAqgDQBEgFAYgZIAFgGIAEgGIAEgJQABgJABAAIAAAJQAAADgDAIIgEAGIgCAEIgDADQgMAOgZAIQgWAJgjAEQgYADgYAAIgZgBg");
	this.shape_7.setTransform(0.1,0,1,0.938,1.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D86097").s().p("AlJKEQhHgrgRhUQgOhbAkhrQAdhYA7hZQAsg9BfhVQBxhmAigmQA6hFAShRQARhIgLhnQgGhbAVgxQAdhFBRgBQBhgKBFBNQA9BGAIBkQAGBZgkBeQghBZhABQQgxBAhqBoQhyBxgsA3QhQBUgTAfQg0BQAnA6IBoB0QgBAng5ARQgiAKg1AAIgLAAQhVAAg9glg");
	this.shape_8.setTransform(0,0.2,1,0.938,1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.wormVolumeBody, rect = new cjs.Rectangle(-44.1,-64,88.3,128.1), [rect]);


(lib.wormmouth5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wormmouthloudmove();
	this.instance.parent = this;
	this.instance.setTransform(1.2,-8.3,1,1,0,0,0,1.2,-8.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.91},2).to({scaleY:1},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-21.6,-15.4,43.2,31);
p.frameBounds = [rect, new cjs.Rectangle(-21.6,-15.1,43.2,29.6), new cjs.Rectangle(-21.6,-14.7,43.2,28.1), new cjs.Rectangle(-21.5,-15.1,43.2,29.6), new cjs.Rectangle(-21.6,-15.4,43.2,31)];


(lib.wormmouth3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3F2032").s().p("AAIAyIgpgOIgsgLQgegIgFgRQgEgRATgIQAKgFAVgFQAXgNAXgCQARgDAeAEQAGAAANAFQAMAEAEAAIABAAQAEAAAIAIIACAEQALgGAOgBQAHgBADAEIgBACQAEADgCAEIAAABQgBAEgDAAQgKAMgOATIgXAhQgCADgEgBQgEgBgBgDIgCABQgMAHgOAAQgHAAgIgCg");
	this.shape.setTransform(-7.9,4);

	this.instance = new lib.Path_1_2();
	this.instance.parent = this;
	this.instance.setTransform(8.3,-3.2,1,1,0,0,0,10.3,3.1);
	this.instance.alpha = 0.199;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3F2032").s().p("AhPBbIgegGIghgFQgUgFgPgGQgLgDgIgIQgFgFgCgHQgCgHADgIQAEgIAKgLIARgMQAUgMAUgGQAUgGAZABQAQABAdAHQA3APAbAFQAuAIAgAAQASABARgDQASgDAKgIQAFgFABgFQACgFgCgFQgFgIgPgIQgLgGglgOQgZgJgLgGQgPgHgHgHIgEgFIgBgDIAIAFQAHAFAPAFIAlAMQAkALAOAGQAIAEAGAEQAIAFAFAJQAGAJgDAMQgDAKgIAHQgMAMgXAFQgSAEgVAAQhDAAhigcQgxgMgfAIQgRAEgRAMIgPALQgHAGgDAFQgBAEADAEQAEADAJAEQANAGATAEIAgAIIAdAFQBAALAXgJQAMgDAIgJIAHgGQABAAgFAJQgGAKgOAGQgPAJgfAAQgUAAgagDg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D86097").s().p("AhYBVQhLgQgPgHQgkgRAogdQAogcArACQAQABBHARQAXAGAXAEIgGAtQgNAZgmADIgGAAQgVAAgugGgABkAZQgcgBgegGIAPhsQAIALBPAcQBAAYgOAbQgOAag9AAIgTgBgAAqASIAAAAg");
	this.shape_2.setTransform(0.1,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.wormmouth3, rect = new cjs.Rectangle(-20.4,-9.3,41,18.7), [rect]);


(lib.wormmouth2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3F2032").s().p("ABGAjQg7ADgOgNQgQABgKgDIgegLQgJgCgHgDIAAAAQgPAAgEgHIgDgDQgHADAAgHQAAgTAOgBIADABQAPgLAWgBQAVAAARAIIAAABQAPAAASAGQARAHAKAJIAjAHIACgBQAHgHAHAFQAHAEgBAIQgDAWgUAHIgEABQgEAAgEgEg");
	this.shape.setTransform(-8,3.1);

	this.instance = new lib.Path_1();
	this.instance.parent = this;
	this.instance.setTransform(7.7,-1.6,1,1,0,0,0,10.3,3.1);
	this.instance.alpha = 0.199;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3F2032").s().p("Ag1BMIgfgFIhDgRQgYgIgNgJQgHgHgCgFQgDgJAGgIIADgDIABgCIAEgDIAJgHQASgOAZgCQAVAAAYAHIAqAPQAVAIAUAFIAoAJQAtAIAhABQAVABAOgEQAUgDAIgIQAGgFABgGQACgEgCgEQgEgHgQgKIgvgTQgZgKgMgGQgPgHgHgHIgEgFIgBgCIAIAEQAHAFAPAFIAlAMQAlAMANAGIAOAIQAJAGAEAHQAGAJgDAMQgDAKgIAIQgMALgYAGQgSADgVAAQgZAAgdgEIAAABQgGALgNAHQgXAOgnAAQgOAAgQgBgAiFgDQgRAAgQALIgHAFIgGAGIAAABIADADQAJAHAVAHQAUAHAOADIAfAIIAeAHQA5AIAdgOQALgEAHgIIgXgEIgpgJIgrgOIgpgPQgUgFgPAAIgDAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D86097").s().p("Ag9BGQiUgdAXgaQAggiAyANQAeAGBAAYQAkAKAiAFIAAABQgSAig7AAQgUAAgYgEgABeAqIgigDIgJhwQAIALBPAcQBAAXgOAbQgOAbg9AAIgTgBgAA8Ang");
	this.shape_2.setTransform(0.1,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.wormmouth2, rect = new cjs.Rectangle(-19.9,-7.7,39.8,15.5), [rect]);


(lib.wormmouth1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3F2032").s().p("AgnAMQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBQgCgCACgDIgBgBQABgEAFgDIAJgFQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQAAABABAAQAAABgBABIAGgDQACgBADABIAAAAIABgBIACAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAAAABIAFgCQAFgCALACIAQACIACgBIAGgBQAFgCABAFQACAFgFACIgFAAQgGABgRgBQgOAAgIADIgQAHIgCABQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAIgEAAIgEAAg");
	this.shape.setTransform(-12.8,1.7);

	this.instance = new lib.Path_1_1();
	this.instance.parent = this;
	this.instance.setTransform(7.7,-0.1,1,1,0,0,0,10.3,3.1);
	this.instance.alpha = 0.199;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3F2032").s().p("AAnA4QgagEgPgEQgTgEgXgJIgEgBIgLgCQgZgFgjAFQgQACgRAEIgLACIgQADQgJABgDgCQgEgCgCgEIgBgFIAAgBIABgBIAKgOIAMgKIAGgEIAFgBQAUgKAYACQATACAYAIIAoAPQAWAHARAFIAoAIQAvAIAdgBQAUAAAOgDQASgFAIgIQAEgGABgFQAAgFgDgEQgFgHgQgHIgugTIgkgPQgNgHgIgHQgHgIACAAIAHAFIAWAKIAkALQAgAJASAIQATAKAIAJQAHAIgBALQgBAJgHAKQgMAOgWAGQgPAEgXABIgFAAQgjAAgogHgAilAVIABABIABAAIAHgCIAjgFIARgBIgSgDQgTgCgPAHIgEACIgBABIgBAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D86097").s().p("ABdA6IgigEIgJhvQAIALBPAcQBAAWgOAcQgOAag9AAIgTAAgAg+AdQgjgHg7AMQgoAHAJgKQAggiAyAMQAdAHA+AXQgcgHgUgDg");
	this.shape_2.setTransform(0.2,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.wormmouth1, rect = new cjs.Rectangle(-19.8,-6.3,39.8,12.6), [rect]);


(lib.wormmouth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3F2032").s().p("AgnAMQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBQgCgCACgDIgBgBQABgEAFgDIAJgFQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQAAABABAAQAAABgBABIAGgDQACgBADABIAAAAIABgBIACAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAAAABIAFgCQAFgCALACIAQACIACgBIAGgBQAFgCABAFQACAFgFACIgFAAQgGABgRgBQgOAAgIADIgQAHIgCABQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAIgEAAIgEAAg");
	this.shape.setTransform(-12,-5.9);

	this.instance = new lib.Path_1_1();
	this.instance.parent = this;
	this.instance.setTransform(8.5,-7.8,1,1,0,0,0,10.3,3.1);
	this.instance.alpha = 0.199;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3F2032").s().p("AAnA4QgagEgPgEQgTgEgXgJIgEgBIgLgCQgZgFgjAFQgQACgRAEIgLACIgQADQgJABgDgCQgEgCgCgEIgBgFIAAgBIABgBIAKgOIAMgKIAGgEIAFgBQAUgKAYACQATACAYAIIAoAPQAWAHARAFIAoAIQAvAIAdgBQAUAAAOgDQASgFAIgIQAEgGABgFQAAgFgDgEQgFgHgQgHIgugTIgkgPQgNgHgIgHQgHgIACAAIAHAFIAWAKIAkALQAgAJASAIQATAKAIAJQAHAIgBALQgBAJgHAKQgMAOgWAGQgPAEgXABIgFAAQgjAAgogHgAilAVIABABIABAAIAHgCIAjgFIARgBIgSgDQgTgCgPAHIgEACIgBABIgBAAg");
	this.shape_1.setTransform(0.8,-7.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D86097").s().p("ABdA6IgigEIgJhvQAIALBPAcQBAAWgOAcQgOAag9AAIgTAAgAg+AdQgjgHg7AMQgoAHAJgKQAggiAyAMQAdAHA+AXQgcgHgUgDg");
	this.shape_2.setTransform(1,-8.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.wormmouth, rect = new cjs.Rectangle(-19,-13.9,39.8,12.5), [rect]);


(lib.wormbody = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// wormeyes
	this.instance = new lib.eyes();
	this.instance.parent = this;
	this.instance.setTransform(21.1,-40.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// wormmouth
	this.mouth = new lib.wormmouth();
	this.mouth.parent = this;
	this.mouth.setTransform(25.5,-22.4);

	this.timeline.addTween(cjs.Tween.get(this.mouth).wait(1));

	// wormbody
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3F2032").s().p("AigArQgFgBABgEQACgeA2gUQAlgPAsgGIAvgIQAcgDAUAFQAnAMA2AkQAEACAAAGQABAFgEgCIgjgTQgXgMgOgFQgYgKgbAAQgPAAgjAFQiGARgJArQAAAEgEAAIgCAAg");
	this.shape.setTransform(18.4,-55.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3F2032").s().p("AALAzQgbgcgDgcQgBgKAEgMIAGgWQABgEAFABQAEABAAAEIAAABIgGAUQgEAMACAJQAFAXAXAcQACAEgDACIgEABQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_1.setTransform(-26.6,62.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3F2032").s().p("AgwBMQgTgmAmg5QAkg5AqgDQAFAAABAFQAAAGgFAAQgmAGgeAxQgfAwALAlQACAFgFACIgCABQgDAAgCgEg");
	this.shape_2.setTransform(-39.2,48.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3F2032").s().p("AA3BrQgugXgKgIQgdgTgOgcQgPgdgCgjQgCgcAFgoQABgFAFABQAFABAAAFQgFAlAAAWQABAiANAXQAPAdAaAUIA4AiQAFACgCAFQAAABgBAAQAAABgBAAQAAABgBAAQAAAAgBAAIgDgBg");
	this.shape_3.setTransform(-19.1,14.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3F2032").s().p("AAXBcQgtgRglgiQgygugDhBQgBgOAHgJQAHgJAMACIABAAQAGAAgBAHQAAAGgGgBQgUgCAKAqQAJAkALAOQALAPARAOIAgAYQAYAVAjAIQAoAKAVgTQAEgEAEAEQAEAFgEADQgRASgbAAQgUAAgYgJg");
	this.shape_4.setTransform(-0.5,-1.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.2)").s().p("AgdJoQjagGgdiUQgOhdAihrQAehdA+hcQAqg/BfhTQBzhoAhgkQA6hFAThRQAQhIgLhnQgDgwAEghQAhAiAUAvQATAuAEAyQAGBZgjBeQgiBZhABPQgxBBhoBnQhzBygtA3QghAjAhAgQALALAeAZQAcAbATAcIBkCFQAAAcgjAvIgRAAIgFAAg");
	this.shape_5.setTransform(-17.3,6.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.2)").s().p("ACMBJQgGheg8hDQhBhKhbAJQg5ABgfAjQAShrBkgCQBbgJBBBKQA8BDAGBeQAIBug6B2QAZhQgFhLg");
	this.shape_6.setTransform(20.2,-44.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3F2032").s().p("AjPKwQgtgDgpgOQgxgSgkgmQgngsgIg6QgRh0A9iIQAbhAArg+QAjgyBCg/IB1hpIA5g6QAcgeATgjQAohFADhaQACgmgFgxIgDgsQAAgXACgXQACgaAIgbQAJgcARgWIAKgKIALgJIAMgHQAFgDAIgDQATgIAigCQArgEAnAOQAnAMAfAdQA7A0AWBRQAKAjABApQACAkgGAmQgLBGgeBBQgaA5grA7QgxA9ggAjQg3A6hmBkIgjAjIggAjIg6A/Qg/A/gUAsQgMAXgDAXQgCAUAFAQQADALAFAJIADAHIgFgGQgGgKgDgKQgGgQABgVQACgZALgYQAUgtA/hCIAcgfIAcghIAggjIAiglQBlhkA2g7QAggjAvg8QAqg6AZg3QAehCAJhBQAFgkgBgjQgCglgJgiQgXhMg1gvQgbgagkgMQgkgMgnAEIAAAAQgiADgNAGQgYAIgOASQgPASgHAZQgHAWgCAbIgCArIADAsQAEAsgBAsQgDAzgKAlQgMAsgVAkQgVAlgcAgIg7A6QgnAlhOBFQg/A8glAxQgpA8gcA+Qg8CFAPBvIAAAHIAMAnIAPAdIAQAVQAgAkAvARQAmAPAtADQAdADAqgDQBEgFAYgZIAFgGIAEgGIAEgJQABgJABAAIAAAJQAAADgDAIIgEAGIgCAEIgDADQgMAOgZAIQgWAJgjAEQgYADgYAAIgZgBg");
	this.shape_7.setTransform(-3.9,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D86097").s().p("AlJKEQhHgrgRhUQgOhbAkhrQAdhYA7hZQAsg9BfhVQBxhmAigmQA6hFAShRQARhIgLhnQgGhbAVgxQAdhFBRgBQBhgKBFBNQA9BGAIBkQAGBZgkBeQghBZhABQQgxBAhqBoQhyBxgsA3QhQBUgTAfQg0BQAnA6IBoB0QgBAng5ARQgiAKg1AAIgLAAQhVAAg9glg");
	this.shape_8.setTransform(-4,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.wormbody, rect = new cjs.Rectangle(-46.9,-68.8,93.1,137.7), [rect]);


(lib.wiggletongue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// whaletongue
	this.instance = new lib.whaletongue();
	this.instance.parent = this;
	this.instance.setTransform(-7.7,8.4,1,1,6.7,0,0,-15.9,4.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-16,rotation:-8,x:-7.8},2).to({regX:-15.9,rotation:6.7,x:-7.7},2).wait(1).to({regX:-16,rotation:-8,x:-7.8},2).to({regX:-15.9,rotation:6.7,x:-7.7},2).wait(1));

	// whalemouth2
	this.instance_1 = new lib.whalemouth2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1.3,-4.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:0.96,y:-3.7},2).to({scaleY:1,y:-4.7},2).wait(1).to({scaleY:0.96,y:-3.7},2).to({scaleY:1,y:-4.7},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-12.1,-29.7,38,50);
p.frameBounds = [rect, new cjs.Rectangle(-12.1,-28.7,36.9,49), new cjs.Rectangle(-12.1,-27.7,37,48), new cjs.Rectangle(-12.1,-28.7,37,49), rect=new cjs.Rectangle(-12.1,-29.7,38,50), rect, new cjs.Rectangle(-12.1,-28.7,36.9,49), new cjs.Rectangle(-12.1,-27.7,37,48), new cjs.Rectangle(-12.1,-28.7,37,49), new cjs.Rectangle(-12.1,-29.7,38,50)];


(lib.whalehead = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// whaleeyes
	this.whaleEyes = new lib.whaleeyes();
	this.whaleEyes.parent = this;
	this.whaleEyes.setTransform(17.7,14.6);

	this.timeline.addTween(cjs.Tween.get(this.whaleEyes).wait(1));

	// whalehead
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.102)").s().p("AofBTQjigMAAgiQAAgqDigoQDzgsEsAAQEuAADzAsQDhAoAAAqQAAAijhAMQiWAHmLAAQmKAAiVgHg");
	this.shape.setTransform(12.5,-37.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.2)").s().p("ArmCrQggg+gRg6QgehlgFiuQAKBJAPA1QAOAwAnA8QAsBFAlATIAZABQAZANAtACQAZABAsgDQA1gEBJgNIB6gWQGjhBBDgKQEXgzDIhCQBcgfAKgNQAIgLACgVIACg6IADgQIgBBUQgBA2gGAiQgTBkhQAaQjIBDkXAyQhDAMmkBBIh4AWQhKAOg0ADQguACgYgBQgtgBgZgMIgiAUQgjgSgphRg");
	this.shape_1.setTransform(11.5,23.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#181B21").s().p("AqpHyIgLgJQgKgJgEgGQgigogihOQgohYgNh4QgFgrgEhbIgGiUQgGhrAEg7IAFgsIAKgqIAAgBIABgBIBggZQCGgkA1gKIBjgRIAzgGIAzgGQDBgUDzAHQDkAHDvAhIATACIAEACIBeAVQAjAJAXAIQAhANAVAQIAMAMIAKAMIAIANIAHAOQAMAZAGAgQAHAvgGBGIgLBwQgCAkAABIQgCBGgLAnQgHAUgDAGIgGANIgHAMQgCADgHAIIgJALIgQAOIgRALIgaAKIhtAiIgxANQg/AQgfAHIhcAUQioAiirAZIkYApIilAcIhYAKIgkABQgjABgWgEIgLgCIgYgHIgLgFIAMADQAQAFASACQAZACAggBIAkgBID8grIEXgsQCmgaCrgjIBcgUQAfgHA/gRIAwgNIBtgiIALgFIALgFIAKgGQAmgYARg4QAKglAChDQgBhIADgmQAIhKADgmQAFhEgHgrQgFgegLgXIgGgMIgHgLIgJgLIgJgJQgRgOgggMQgQgGgngLIhfgVIgVgDQjwgijhgGQjqgIjHATIhmAMIhiAQQgyAKiHAjIhYAWIgBABIAAABIgHAgIgFAqQgFA6AFBqIAECVQADBUAFAxQANB5AkBVQAhBPAfAnIANAQIAUARg");
	this.shape_2.setTransform(11.9,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4D586D").s().p("ArpGRQggg/gRg6QgVhIgJhiQgEg4gDh1QgFhqgBg4QgChjASg9ICogtQBkgaBHgLQDxglEgAGQEBAGERAnQAdAIBVASQBMAVAaAdQAvA1gCBuQgBA+gNBxIgBBTQgBA2gGAiQgTBkhQAbQjIBDkXAyQhCAMmlBAIh5AXQhJANg1AEQgtACgZgBQgsgBgagNIghAUQgjgSgphQg");
	this.shape_3.setTransform(11.8,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.2)").s().p("AA2DAQgXgHglgUQgdgLgpgEQgZgCg0AAQgTAAg2AOQgCgHAAgHQAAgXAPgWQAUgYAIgOQAVghAlgsIBAhPQAUgbAsgfIBIg0ICaD1QAGARgNAVQgIAMgTATQgHAOgdAhQgeAigMAGQgHACgJAAQgTAAgagKg");
	this.shape_4.setTransform(-65.6,26);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#181B21").s().p("ABeDgQgUgHgbgNQgQgJgfgGQgVgEghgBIg5AAQgTABgmALQgpALgVACIgTABQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAgBIgKgWIgOgdQgHgSACgQQABgOAKgSQAGgKAMgPIARgWIAigtQA7hLBPg9QAMgKATgNIAcgUIArgjQATgOAMgEQANgEAAADQAAABgLAEQgLAGgRAOIgqAlIgaAWIgfAYQhNBBg3BHIggAtIgSAYQgMAOgEAIQgIAPAAAJQgCAMAGANIANAbIAFALIAFAAQASgCApgLQAmgKAXgBIAIgBIAzABQAiACAVAEQAiAGATALQAaANASAHQAYAKATACIAKAAIAFgBIACAAIACAAIADgCIALgKQATgRAfgkIALgPQAAgDADgBIAFgFIARgSQANgQACgOIAAgMIACADIACAJQABAPgOATQgIAMgIAIIgFAGIgCACIgLARQgYAhgYAYIgIAHIgLAIIgHABIgSABQgXgCgYgJg");
	this.shape_5.setTransform(-70.5,23.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4D586D").s().p("ABjDdQgXgHgmgUQgdgLgogEQgZgCg0AAQgWAAgvANQgwANgWAAIgQgjQgKgTAAgQQAAgVAPgVQAUgXAIgNQBXh/CEhcIAsgnQAhgbAQAAIC+EvQAGARgNAVQgIAMgTATQgHAOgdAhQgeAigMAGQgHACgJAAQgTAAgagKg");
	this.shape_6.setTransform(-70.1,23.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#181B21").s().p("AA1DjQhAgBgVgEQgvgHgggaQgEgDAEgEQAEgDAEADQAjAcA/AFQAiACBIgGQAWgCA9gPQA1gNAeABQAFAAAAAFQAAAFgFAAQgWABgkAKIg6AOQg0AKgqAAIgEAAgAipCzQgWgfgYg6Qg7iQAEinQAAgFAFAAQAEAAABAFQADBiAIArQAEAYALAkIASA7QARBAAYArQAmBDAvgCQAFAAABAGQABAHgGABIgLABQgkAAghgvg");
	this.shape_7.setTransform(-44.2,27.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.whalehead, rect = new cjs.Rectangle(-98.5,-50.4,197,100.8), [rect]);


(lib.tongue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tonguewiggle();
	this.instance.parent = this;
	this.instance.setTransform(29.9,-2.1,1,1,0,0,0,29.9,-2.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:30.2,regY:-2.2,rotation:5.2,x:30.2},3).to({regX:29.9,regY:-2.1,rotation:0,x:29.9},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40.2,-20.9,80.4,41.8);
p.frameBounds = [rect, new cjs.Rectangle(-40,-21.2,80.5,40.9), new cjs.Rectangle(-39.8,-21.4,80.6,39.8), new cjs.Rectangle(-42,-27.1,83.9,48.8), new cjs.Rectangle(-39.9,-21.3,80.4,39.8), new cjs.Rectangle(-40.2,-21.1,80.5,40.9), new cjs.Rectangle(-40.2,-20.9,80.4,41.8)];


(lib.body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.2)").s().p("AgkAZQgKgXgDgLQgGgWANgNQAHgOA8ABIARABQADABAHABIgFAAQgOAygWAgQgKAXgQAHQgNgNgIgUg");
	this.shape.setTransform(7,-29.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4C0915").s().p("AgqA7QgKgKgHgKIgHgLIgDgGIgDgHQgJgWgEgNQgDgNADgKQACgLAJgIIAAgBQAEgGAKgEIAOgDIAYgCIApACQApAEAQAPIACACIAAACQAAAAAAABQAAAAAAABQAAAAAAAAQABABAAAAIAEACQABAAABAAQABABAAAAQABAAAAAAQABABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAgBAAIgBABQAAAEgDANQgFAXgMAZIgKATIAAAAIAAAAIgCAFIgFAJQgHALgJAFIgFAEIgGACQgDABgKABIgCABQgWAAgXgUgAgWg8IgVACIgKADQgFABgBACIgCADQgJAJAFAPQACALAKAXQAJAWAQANQAQAQAQAAQAQAAALgQIAFgHIADgGIABAAIABgCIAJgOQAKgSAMgaIAHgPIgCgBIgEgDIgCgDQgUgKghAAIgoABg");
	this.shape_1.setTransform(3.6,-30);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B2192C").s().p("AgQBDQgigNgRgpQgKgWgDgMQgFgWANgNQAHgOA9ABQA0AAAVAPQAAAIANAAIgGAAQgNAxgXAhQgPAigZAAQgHAAgJgDg");
	this.shape_2.setTransform(4.1,-30);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.2)").s().p("AhhCDQgIgvALgrQAHgZAbg7IAthIQAagrAMgeQAHgMAFgSIALAtIALAoIATBqIANAtQAJAgADAUQgzAQhBBCIgYAeQgSAVgKAQQgZgtgFgrg");
	this.shape_3.setTransform(2.5,-2.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4C0915").s().p("AhSD6IgdguQgWgrgEgnIAAABQgIgwALgoQAHgdAVgrIAIgRIAbgrIAfgyIAYgpQALgVAEgKIAGgUIACgIQACAAgBAIQAAAKgEAMQgCAHgKAaIgWArIgdAzIgYAoIgIATQgUAqgGAcQgJAnAIApIAAABQAEAlAUAlIAhAzIABgCQAEgMAFgIQAMgWAagfIASgXIAXgWQAegbARgLIANgHIANgIIANgGIAFgCIABAAIgBgFIgQg+IgVhzQgBgLgHgbIgIgiQgEgPgDgQIgCgOIgCgvQAAgNABAAIADAMIAHAwIACAMIATA/QAIAcABALIAXBxIAWBRIAAABIAAACIggANIgMAHIgLAHQgWAPgXAVIgQAPIgYAdQgaAigIAPIgJASIgCAJIgCAMIgCAZg");
	this.shape_4.setTransform(-0.4,-2.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B2192C").s().p("AhlDWQgWgpgEgnQgIgvALgrQAHgYAbg7IAthJQAbgrAMgeQAOgdAAgTIAwgxIADAgQADAYAAAIQADATAKAgIAMAvIATBqIANAtQAJAgADAUQgzARhCBBIgpA2QgbAlgBAbQgegngQgeg");
	this.shape_5.setTransform(-0.5,-3.5);

	this.instance = new lib.Path_4_1();
	this.instance.parent = this;
	this.instance.setTransform(2.6,-1.5,1,1,0,0,0,13.2,28.2);
	this.instance.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#605517").s().p("AATA3QgOgCgMgGQgPgGgUgLIgLgJQAAgCAOAFIAkAOIAYAFIAMgBIAFgBIADgFQAGgMAFgSIACgHIABgDIgEgIIgFgFQgIgGgXgJIgegIQgRgEgLADQgHADgDADIgEADIgBADQgEAeABAGQAAAGACAEIACADIgBAAIgDgCQgDgCgDgHQgDgIABgfQAFgQARgGQAQgGASAEIAhAIQAZAJAKAIQAKAJADAJIACAEIgBAIIgDAJQgEARgJAQIgHAJIgFACIgFABIgIABIgJgBg");
	this.shape_6.setTransform(-14.4,52.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F9E341").s().p("AgEAqIgvgVIgEgBQgIgFAAgTIACgdQANgRAYABQAJABAhAJQAUAGAIAFQAOAIAEAOQAAAIgHAUQgIATgFAFQgGAEgKAAQgOAAgSgIg");
	this.shape_7.setTransform(-14.6,52.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AghCxIAAgLIAAgnQABgiAEgZQACgPAOg2IAJhFQAGgkAHgVIAIgWIAHgPQAIgNABABQACABgFANIgFAQIgGAWQgEATgGAlIgHA9IgCAJIgPBFIgIA4IgFAnIgDALIAAAAg");
	this.shape_8.setTransform(-11.3,33.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.2)").s().p("AgIATQgfglgPgoIAFgHIAIABQALAHAMAQIAkAaQAFAEANAEIATAHQgDAUAAAgIgGAOQgagKgcglg");
	this.shape_9.setTransform(-8,-26.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#282828").s().p("AA1BuIgGgCIgXgJIgGgEIgLgJQgRgQgRgXQgdgngMgmQgLglAHgXQADgJAFgGQAEgFAAACIgBAFIgDAPQgDAVANAgQAOAjAbAkQASAXAPAMIAKAHIAFAEIABAAIAAgBQAAgWACgRIADgTIACgOIAAgBIABgDQABgHAEgLIAGgPQADgKAAgDQAAgEgDgDIgBgCIgBABIAAAAIgIgDIgagGQgGgCgGgEIgigTIgEgEIgDgDIgMgMQgHgFAAgBQAAgCAJAEQAFACAFAEIALAIIAuAUIAhAGIAEACIAFADIgBgBIAFAEIADAFIADAFIABAGQAAAGgDANIgGARQgEAIAAAGIgBAFIgBAEIgDAbQgCAMAAAZIgBAZQAAABAAABQAAAAAAABQAAAAgBABQAAAAgBAAIAAAAg");
	this.shape_10.setTransform(-7.4,-29.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EFEFEF").s().p("AgnAPQguhPAcgmIAHAAQANAGANAOIAnAUQAGADAUADQARADAEAEQAMAIgIAXQgLAfAAAEQgGAaAAA8QgsgKgshOg");
	this.shape_11.setTransform(-7.7,-30.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.2)").s().p("AiHBbQAFgRAJgFIAhgLQAngKAjgYQAjgQAjgaQAkgeATghQAFgFAPgbQAMgWAIAAIABADQgJBug3AkQgaATgsAUQg1AZgQAKQgRAHhTApQAIgeAIgPg");
	this.shape_12.setTransform(26.4,-36.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#282828").s().p("AimCoIAHgQIAAgBIABgBIAAgCIARhOIAIgaIAJgWQABABAAgBQADgLACgDQABgDAEgEQACgCAGgDIAigLIABgBIAhgLQAPgHAWgNIACgBIARgIIAxgeQAcgWASgXIAQgVIAMgSQAMgTAHgHQADgEAEgBIADABIgCABQgDACgCAEQgEAFgLAWIgMAUIgCACIgBACIgLASQgRAYgeAZIgfAXIgkATQgTANgUAJIgXAJIgsAOQgEADAAACQgCACgCAIIgBADIgCAEIgHARIgHAYQgEAQgGAkIgHAbIgBADIAAABIByg2IACgBIADgCIAsgWQA3gYAZgQQATgLAMgOQAKgMAJgRQAMgZAIgkQAEgVADgcQAEgqABAAQADAAgBArQAAAWgDAcQgGAlgMAcQgLAWgKALQgKAOgXAPQgZARg5AaIgqAWIiuBUg");
	this.shape_13.setTransform(23.4,-38.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EFEFEF").s().p("AiVB0QAKg5ANgXQAEgQAKgFQAGgEAbgHQAngJAigYQAkgQAigcQAlgeATghQAEgEAQgcQAMgVAIAAIANAiQAAChhCAsQgbATgrAUQg1AZgQAKQgYAJguAYQgvAXgXAKQANgVAKg1g");
	this.shape_14.setTransform(24.5,-39.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(0,0,0,0.2)").s().p("AjTFyQgmg4gDhMQgCg8AVhPQAUhEArhjIBFiiQAjhgAfhZIASgKIBeg/QA5AVAygHQAZgJAsgbQgEBFgXBeQgNA2gcBmQgbCCAUCVIAVCFQAJBOgRA3QgYBDg5AoQgyAlhHANQiNg2g7hXg");
	this.shape_15.setTransform(16.2,6.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AhWIlQgcgHgtgQQghgLgmgRQhPgkguguQgcgdgQgfQgPgfgEgoQgGg6AZhPQAVg2AihAIA6hrIBgjDIA8iNIABgBIAhATQA/AjA/AEIAaAAIAGgBIAQgFQARgFAQgIIAcgLQAAABgGADIgUALQgMAHgVAIIgUAGIgDABIgbABQhAgChDgjIgWgMIgBABIgBACIg0CAIheDFIg6BrQggA/gUA1QgXBJAFA5QAEAjAOAcQAOAdAaAaQArArBMAjQAcANApAOQAuAQAaAGQBKATBIgBQBPgBA9gXQBFgaAog1QAVgcAKgdQAIgeABgiQACgwgNhOQgQhbgCgfQgJhwAVhrIAGgYIApiWQAShEAIhBQAFgqgBgrIgBgeIABAHIAEAXQAEAmgEAwQgFA/gSBIQgIAlgNAuIgSBEQgEAMgBALQgUBoALBvQAAAOADAPIAPBaQAOBRgBAyQgBAkgKAgQgKAggXAfQgqA6hLAcQhBAZhSABIgDAAQhHAAhNgSg");
	this.shape_16.setTransform(-0.1,2.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AiVINQhKgZgygcQhDgmgkgxQglgzAAhDQAAg1AYhFQAXg7AwhWIBLiNQBQitAihXQBiA+BXgJQAcgGA0gbIESi0QANBVgbB8Ig1DMQgcCDAVCUIAWCGQAJBOgRA3QgyCEioAaQgpAGgpAAQhiAAhlglg");
	this.shape_17.setTransform(0.2,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.body, rect = new cjs.Rectangle(-42.1,-58.8,84.2,118.1), [rect]);


(lib.Sign = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.addEventListener("click",function() {
			window.open('https://tools.google.com/dlpage/chromesxs/','_newtab');
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgdBtIgBgBIAAgDIgMhWIgOhXIgCgZQAAgHAGgCQAHgBACAHQAFAOADAcQACAeAEANQAMgsARgXQAWgjAkAAQAEALgMAFIgWAIQgaATgJAqQgJAmAAAwIABAmQgBASgGAAQgDAAgEgFg");
	this.shape.setTransform(241.6,125.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AghBvQgXgFgCgjIAAAAQgCghAIgmQAHgjAPghQAXgxAaAHQANgDAEAaQADASgBANQgFAkgXAmQgPAcgfAlQASAZAhgcQAcgXALgbQANAJgPAXQgNAVgaAQQgVANgRAAIgIgBgAgfgZQgRA6AGAYQAYAAAZhHQAahHgWgFQAEABgEAAQgBAAgBAAQAAAAAAAAQAAgBAAAAQABAAABAAQgXACgTA/g");
	this.shape_1.setTransform(229,126.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgeBsQgXgEgDgOQAPgBAkAGQAfADANgXQAMgVgbgbIgsgjQgagVgIgUQgMgbAYgUQATgNAXAAQAaAAABAZQACAcgNgQQgRgYgBAAQgbADgIATQgJATATATIAqAkQAaAUALAUQAQAbgSAWQgRATgeACQgXAAgKgCg");
	this.shape_2.setTransform(216.3,127.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhuAgQgUhRgCgiQAEgPAHAKQAGAHACAKIAlCgQAKgMAHhGQAFg7AigIQAcgIAbBAQAhBPAGAFQAAgyAMhHQAShnAdAUQgTASgJAlQgEAVgEAqQgBAQABAxQgBAtgOAQQgQgOgOgaQgHgNgOggIgQgsQgPgjgJAAQgUAAgIAfQgEAPgCAdQgEAhgEARQgHAdgMASIgBAAQgRAAgWhgg");
	this.shape_3.setTransform(196.4,127.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgeBoQgUgRgDgmIAAgJQAAgoADgUQAEgpAPgaQATgkAcASQAbAQAHAiQAHAmgGAmQgIAsgXAbQgSAUgOAAQgKAAgIgIgAgngIQgLBXAcAOQASAIAQgbQAQgaAIgoQAHgpgHgdQgIghgZAAIgBAAQgfAAgKBXg");
	this.shape_4.setTransform(177.8,130.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgdBtIgBgBIAAgDIgMhVIgOhYQgDgUABgFQAAgHAGgBQAGgCADAHQAFAOADAcQACAeAEANQAbhmA8AAQAEALgMAFIgWAJQgaATgJApQgJAjAAA0IABAlQgBASgGAAQgDAAgEgFg");
	this.shape_5.setTransform(166.6,130.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgQB6QghgOgHgfIAAgCQAEgzgOhEQgKgcgDgTQgHglATAAIAbCBQAdhcAwAWQAVAKAMAcQAKAXACAbQADBQgqAWQgPAIgPAAQgOAAgPgHgAgQgVQgTAxAFA+QABATAdACQAaACANgJQAWgQAEgkQAEgdgIgeQgKgkgagIIgJgCQgUAAgMAgg");
	this.shape_6.setTransform(151.9,130.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgeBsQgXgEgDgOQAPgBAkAGQAeACANgVQAOgWgcgbIgsgjQgagVgIgUQgMgcAZgSQASgOAXAAQAaAAABAZQACAcgNgQQgRgXgBAAQgbACgIATQgIATASATQAOANAcAXQAZAUAMAUQAQAcgTAVQgQATgeACQgXAAgKgCg");
	this.shape_7.setTransform(127.3,133.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAKBpIgCgcIgJhJQgJgfgDgUQgHgnANgEQALAgAQBNQATBfgOAGIgEABQgIAAgDgQgAgbhnQgHgHAJgIQAMgFAIAJQAIAJgPAEIAAAAQgDACgDAAQgFAAgEgEg");
	this.shape_8.setTransform(117.3,132.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ag6B+IgBgIQgKg0gGhIIgHg+QgGgYgCgOQgCgZASACIAXC8QAIg7AfgvQAlg4AfBHQASApAMBDIAEAVQADAQgGAAQgHgBgHgVIgGgaIgLgtQgHgagGgSQgLgegOAAQgNAAgNAdQgTAqgLBCIgGAoQAAAGgHABIgCAAQgGAAABgEg");
	this.shape_9.setTransform(105.7,133.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgfgsIgRADQgJAEgEAAQgGABgDgIQgCgIALgEIAUgFQAKgFgBgUIgEgdQgBgLAJgGQAIgGABAOIAEA1IBWgXQABARgkALQgpAKgJAFQgDAGADAVIAEAcIAJBJQADA5gUABg");
	this.shape_10.setTransform(93.5,133.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ag4BwQgEgBAAgTQgIg3gCgpQgFhQAUgBIAGBWQgBgfATgsQAYg6AiAdQAYAWAIA2QAEAdACA3IAHAfQACAWgRgCQgKgCgEglIgDgvQgFgzgHgeQgRg7gaAtQgRAdgFAvQgCATgBA/IgBAVQgCAIgHAAIgGgCg");
	this.shape_11.setTransform(68.7,137.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAKBpIgCgcIgJhKQgJgegDgUQgHgnAOgEQAKAfAQBOQATBfgOAGIgEABQgIAAgDgQgAgbhnQgHgHAJgIQAMgFAJAJQAIAJgPAEIABAAIgCAAQgDACgDAAQgFAAgEgEg");
	this.shape_12.setTransform(58,137);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AA9CEQgGgJgDgRIgEgcQgXAcgJAJQgUATgVACQgZABgNgWQgLgTABgaQACg0AYgpQANgWAagNQAdgPACAjQgEAAgIgDQgIgEgEAAQgTABgRAlQgNAdgFAbQgGAkANAVQAOAXAZgQQATgMAOgWQAPgZgBgjQgBgTgHgrIgGgzQgBgnAPgDQAJgCgBATIgCAZQABAeAGAlIAMBAQAIAnACAaQADAjgHAAQgDAAgFgFg");
	this.shape_13.setTransform(236.2,81.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AghBvQgXgFgCgiIAAgBQgCgiAIglQAHgjAPghQAXgwAaAGQANgCAEAYQAEAUgCAMQgFAkgXAmQgPAcgfAlQASAZAhgcQAcgXALgbQANAJgPAXQgNAVgaAPQgVAOgRAAIgIgBgAgfgZQgRA6AGAYQAYAAAZhHQAahHgWgEQgXABgTA/g");
	this.shape_14.setTransform(220.9,85.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgfgsIgQADQgKAEgEAAQgGABgDgIQgCgIAMgEIAUgFQAJgFgBgTIgDgeQgBgLAIgFQAIgGABAOIAFA0IBVgXQABARgkALQgpAKgJAFQgDAGADAVIAEAcQAHAsACAdQADA4gUABg");
	this.shape_15.setTransform(209.6,83.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgdBtIgBgCIgZivIgDgZQAAgHAGgBQAHgCACAHQAFAOADAcQADAeADANQAMgsARgXQAWgjAlAAQADALgMAFIgWAIQgaAUgIApQgJAigBA1QACAWgBAPQgBASgGAAQgDAAgEgFg");
	this.shape_16.setTransform(195.8,86.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgeBoQgUgRgDgmQABAFAAgOIgBgDQABgoACgRQAFgpAOgaQAUgjAcARQAaAQAHAiQAIAmgHAnQgIArgXAbQgSAUgOAAQgKAAgIgIgAgngIQgLBXAdAOQASAIAQgcQAQgZAHgoQAIgpgIgdQgIghgZAAIAAAAQggAAgKBXg");
	this.shape_17.setTransform(184,87.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgcB0QgEghgCgsIgNAAQgFgBgHgHQAaACgDgiQgCgTgJgiIgQhoQgKgUAxADQA0ABAXAgQAZAkgSA2QgRAxgkAaIgQAKQgEADABAMIAMCBIgBAAQgRAAgIg9gAgtihIAcCxQAggOASgfQARgegDgiQgDgigXgTQgTgRgdAAIgSACg");
	this.shape_18.setTransform(170.7,95.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgcB0IgFhNIgOAAQgFgBgGgHQAaACgEgiQgCgTgJgiIgQhoQgJgUAwADQA0ABAXAgQAaAkgTA2QgQAxglAaIgPAKQgEADABAMIALCBIgBAAQgRAAgIg9gAgtihIAcCxQAggOASgfQARgegDgiQgDgigXgTQgUgRgdAAIgRACg");
	this.shape_19.setTransform(156.9,96.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("Ag2AOQgPhpAdAGQgFAoAEAtQAFAzAPAfQAIARAPgVQAKgOAHgRQAWgzABg5QAAgIgFgUQgDgSAJgEQAMgGAEAfQADAXgCAQQgPCRg6APIgEAAQgYAAgNhjg");
	this.shape_20.setTransform(143.2,90.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgeBsQgXgEgDgOQAPgBAkAGQAeACANgVQANgWgbgbIgsgjQgagVgIgUQgMgbAYgTQASgOAYABQAaAAABAZQACAcgNgRQgRgXgBAAQgbACgIATQgIATASATIAqAkQAZAVAMATQAPAbgSAWQgQATgeACQgXAAgKgCg");
	this.shape_21.setTransform(131.3,91.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgfgsQgJABgHACIgOAEQgGABgDgIQgCgIAMgEIAUgFQAJgFgBgTIgDgeQgBgKAIgGQAIgGABAOIAFA0IBVgXQABARgkALQgpAKgJAFQgDAGADAVIAEAcQAHAsACAdQADA4gUABg");
	this.shape_22.setTransform(107.2,91);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgeBoQgUgRgDgmIAAgJQAAgoADgUQAEgpAPgaQAUgjAcARQAaAQAHAiQAHAmgGAnQgIArgXAbQgSAUgOAAQgKAAgIgIgAgngIQgLBXAdAOQARAIARgbQAPgaAIgoQAHgpgHgdQgIghgZAAIgBAAQgfAAgKBXg");
	this.shape_23.setTransform(95.4,94);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("Ag7BtQgCgCAAgJIABgLQgIg2gCgnQgGhOAVgBIAGBVQgBgfATgqQAYg6AiAdQAYAVAIA2QAEAeACA2IAHAfQACAWgRgDQgKgBgFgmIgDguIgDgsQgCgbgFgTQgHgWgPABQgNAAgLAUQgRAfgEAyQgBAGgCBPQAAAQgBgBIgKABQgGAAgBgEg");
	this.shape_24.setTransform(81.4,94.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgeBsQgXgEgEgOQAQgBAlAGQAdACAOgVQANgWgcgbIgsgjQgagVgIgUQgMgbAZgTQARgOAYABQAaAAACAZQABAcgMgQQgSgYgBAAQgbACgJATQgHAUATASIApAkQAaAVALATQAQAcgTAVQgQATgeACQgYAAgJgCg");
	this.shape_25.setTransform(56.9,96.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAKBpIgCgcIgJhJIgMgzQgHgnAOgEQAKAgAQBNQATBfgOAFIgEABQgIAAgDgPgAgbhnQgHgHAJgIQAMgFAJAJQAIAJgPAEQgEACgDAAQgFAAgEgEg");
	this.shape_26.setTransform(46.9,96);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAKB1QgKgKgCgIIgNiEIgFhEQAAgLAFgHQAGgHACAQQADAaAEA+QACA4AFAgQABAIAGAQQAGAPAAAIQABAJgEAAQgCAAgFgFg");
	this.shape_27.setTransform(233.9,41.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgsB5QgGgOgBgaIgDgpIgJhVIgBAAQgagKAWgaQARgVAVgKQA3gaAgAWQAwAgg5BAQgWAXgYAMQgZAMgJgLQgBgHAdgPIAhgVQATgRAIgVQAKgbgWgMQgRgKgZAIQgUAFgTAOQgKAHADAjIAGAwQAEA5AEAVIACARQACAJgBAHQgBAHgGAFIgEABQgEAAgCgGg");
	this.shape_28.setTransform(222.8,42.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AhcCHQgBgLAIgRIANgaQAEgLADgQIAGgcIANg8QAIglADgYQAFgwAUgBQAJgBAHATIAHAZIAXBDQAIAVAEAAIAYgFQAAAJgLAQQgKANAKASIAXAlQAQAegOACQgSADgPgyQgOgvgaALQgeAOgNAKQgUAPgGAYIgKApQgDAKgLAFIgFACQgGAAgBgKgAgpAfIAtgQQAcgMgHgUIgRg2QgKgigNgRg");
	this.shape_29.setTransform(205.6,44.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgfBoQgUgRgCgmQAAgxADgUQAEgpAPgaQATgkAcASQAbAQAHAiQAHAmgHAmQgHAsgXAbQgSAUgOAAQgKAAgJgIgAgngIQgLBXAcAOQASAIAQgbQAQgaAIgoQAHgpgHgdQgIghgZgBIgBAAQgfAAgKBYg");
	this.shape_30.setTransform(178.2,46.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAKBpQgCgKAAgSIgJhJIgMgzQgHgnAOgDQAKAeAQBOQATBfgOAGIgEABQgIAAgDgQgAgbhnQgHgHAJgIQAMgFAJAJQAIAJgPAEQgEACgDAAQgFAAgEgEg");
	this.shape_31.setTransform(169.1,45.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AA9CEQgGgJgDgRIgEgbIgBACQAAAAgBAAQAAAAAAAAQAAAAABgBQAAAAAAgBQgWAbgJAJQgVATgUACQgZABgNgWQgLgTABgaQACg1AYgoQAMgWAbgNQAdgOACAiQgEAAgIgDQgIgEgEAAQgTACgRAkQgNAegFAaQgGAkANAVQAOAXAZgQQATgMAOgWQAPgZgBgjQgBgTgHgrIgGgzQgBgnAPgDQAJgCgBATIgCAZQABAeAGAlIAMBAQAIAnACAaQADAkgHAAQgDAAgFgGg");
	this.shape_32.setTransform(159,45.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgNBxQACgBABAAQABAAAAAAQAAAAAAAAQgBAAgBABIgDAAIABAAgAg2AOQgPhqAdAHQgFAoAEAtQAFAzAPAfQAIARAPgVQAKgOAHgRQAXg0AAg4QAAgIgFgUQgDgSAJgEQAMgGAEAfQACASgBAUQgPCSg6APIgDAAQgZAAgNhjgAgNBxIAAAAg");
	this.shape_33.setTransform(143.5,48.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AhcCHQAAgLAHgRIANgaQAEgLAEgQIAFgcIANg8QAIgkADgZQADgVADgJQAGgTANAAQAKgBAGATIAHAZIAXBDQAIAVAEAAIAYgFQABAJgMAQQgJAOAJARIAXAmQAQAdgNACQgTADgPgyQgOgvgaAMQgeANgNAKQgUAPgGAYIgKApQgCAKgLAFIgGACQgGAAgBgKgAgpAfIAtgQQAcgMgHgUIgRg2QgJgigOgRg");
	this.shape_34.setTransform(127,50.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgVB3QgcgNgHgdIAAgCQAEgzgOhEIgNgvQgHgkATAAIAbCAQAchcAxAXQAXAKANAhQAKAagBAeQgCBSgvAMQgLADgKAAQgRAAgQgJgAgQgVQgTAxAFA+QABATAdACQAaADANgKQAWgPAEglQAEgdgIgdQgKglgagIIgJgBQgUAAgMAfg");
	this.shape_35.setTransform(96.8,50.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AghBvQgXgFgCgjQAAABAAABQAAAAAAAAQAAAAAAgBQgBAAAAgCQAAgEABAFQgDghAJgmQAHgjAPghQAWgxAbAHQANgDAEAZQADASgBAOQgFAkgXAmQgPAbggAmQATAZAhgcQAcgXALgbQAMAJgOAXQgOAVgZAPQgUAOgRAAIgJgBgAgfgZQgRA6AGAYQAYAAAZhHQAahIgXgEQgWACgTA/g");
	this.shape_36.setTransform(82.2,52.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("Ag+B2QgSgngghQQgDgHgYgtQgVgqAIgGQAeAiAYA/QAgBTAKATQAFgLAThNQAVhGAOgBQAKAEAHAZIAHAiQASBDAoAfQAMgaADgtIAFhHQAEgfALgdQASgsARAjQgSgGgHAXQgCAEgEAhIgRByIgDAjQgEAdgEABQggAFgehCQgKgVgXhHQgHASgVBIQgHAggGARQgGATgHAAQgFAAgEgJg");
	this.shape_37.setTransform(61.5,52.7);

	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(129.4,16.1,1,1,0,0,0,122.1,12.3);
	this.instance.alpha = 0.102;

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(51,42,28,0.2)").s().p("AgaAdQgZAAgIgLQgUgaA5gOQA3gOAVARIABABQAVASgYAOQgUAOgVAAIgfABIgGAAg");
	this.shape_38.setTransform(138.8,97.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(51,42,28,0.2)").s().p("AktAeQgZgXAwgMQAYgHAlgDQAjgGAvgCIBRgDICtgIQBWgDBCADIAMAAIAJABQAMABAEAKQAFALgIAJQgIAIgcACIgpAAIivASQhfAJhiAAIhigBIghACIgDAAQgTAAgIgGg");
	this.shape_39.setTransform(108.4,93.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#332A1C").s().p("AgOAOQgCgJANgOQAMgPAGAKQAEAKgQAOQgIAJgFAAQgDAAgBgFg");
	this.shape_40.setTransform(9.1,32.1);

	this.instance_1 = new lib.Path_4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(176.6,110.3,1,1,0,0,0,3.9,1.2);
	this.instance_1.alpha = 0.398;

	this.instance_2 = new lib.Path_5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(126.5,114.7,1,1,0,0,0,34.6,3.1);
	this.instance_2.alpha = 0.398;

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(51,42,28,0.2)").s().p("AjZDqQgFgtgBg+IAAhrQAAglgFhIQgEhLAAgjQgBgYAEgEQAEgEAXgEQAdgEAigDQAugDBBABQBdADB/AVQAHDxAiDKIAAABIAAAAIgDAAQh+ADhsAHIhyAHQgiADgWABIgIAAQghAAgCgLg");
	this.shape_41.setTransform(156.5,191.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#332A1C").s().p("AgKAAQAAgxAKAAQALAAAAAxQAAAygLAAQgKAAAAgyg");
	this.shape_42.setTransform(162.6,251.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#332A1C").s().p("AgEBZQgFhpgBgIQgEgbADglIgDhlQAKgFAFBHIAFBTQASDmgTAAQgFAAgEhlg");
	this.shape_43.setTransform(170.1,236.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#332A1C").s().p("AAAB2QgJhFgEgxQgCg4ADg/QACgsgDgWQAAgDgGgPQgGgOAAgBQABgFAKAMIAJAMQAHAUACAuQABAsABBYQAYDcgGACIAAAAQgKAAgOhng");
	this.shape_44.setTransform(151.2,192.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#332A1C").s().p("AgFBIQgJg5AAgSQgBgpABgfQABgpAGgNIgBgFQABAAAAAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAIgBAFQAFANACApQAAAegBAqIAGBIQAGBBgCABIgCAAQgJAAgJg/g");
	this.shape_45.setTransform(144.1,183.1);

	this.instance_3 = new lib.Path_11();
	this.instance_3.parent = this;
	this.instance_3.setTransform(251.2,151.9,1,1,0,0,0,8.6,1.4);
	this.instance_3.alpha = 0.398;

	this.instance_4 = new lib.Path_12();
	this.instance_4.parent = this;
	this.instance_4.setTransform(212.1,159.5,1,1,0,0,0,38.5,2.9);
	this.instance_4.alpha = 0.398;

	this.instance_5 = new lib.Path_13();
	this.instance_5.parent = this;
	this.instance_5.setTransform(162.1,18.6,1,1,0,0,0,32.5,1.4);
	this.instance_5.alpha = 0.398;

	this.instance_6 = new lib.Path_16();
	this.instance_6.parent = this;
	this.instance_6.setTransform(265.2,83.4,1,1,0,0,0,11.6,1.8);
	this.instance_6.alpha = 0.398;

	this.instance_7 = new lib.Path_17();
	this.instance_7.parent = this;
	this.instance_7.setTransform(21.6,64.7,1,1,0,0,0,14.1,1.1);
	this.instance_7.alpha = 0.398;

	this.instance_8 = new lib.Path_18();
	this.instance_8.parent = this;
	this.instance_8.setTransform(21.6,70.2,1,1,0,0,0,8,1.2);
	this.instance_8.alpha = 0.398;

	this.instance_9 = new lib.Path_19();
	this.instance_9.parent = this;
	this.instance_9.setTransform(50.1,142.2,1,1,0,0,0,17.5,1.6);
	this.instance_9.alpha = 0.398;

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#332A1C").s().p("AgLEAIABAAIgBAAgAAaDwQAogKAJAAQAcAAANgUQALgSgCgcQgHiNgJhnQgDgQgDglQgCgigEgTQgGgbgFgHQgGgKgTgEQg9gOghAKQgLADgPgCIgbgDQgGAAgwAHQgEgCAQgHIARgGQAXgEAuADQAXgHAcABIA0AEQAXACAJAHQAKAJAHAZQARA3ABBGQAIA2ADBEQACApABBTQABAjgPAUQgQAWghADIglAAQgEAAgZAGIgYAHQgGgGArgKg");
	this.shape_46.setTransform(262.7,27);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#917A50").s().p("AiJjsQAPgPAhABQATABAhADQAZgIAiADIA8AFQAYAIAJA5QADAVADA6IAQD5QACAcgDAPQgFAYgTAKQgPAJguABQgpABgRASg");
	this.shape_47.setTransform(262.4,27.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(51,42,28,0.2)").s().p("Ah6AJQgFgaAygJQAigGAxgCIBVgBIADAAQAWABAGAZQAGAagWALQgMAGgZgBQgbgBgLAAIhTAEIgHAAQg6AAgFgbg");
	this.shape_48.setTransform(265.2,82.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(51,42,28,0.2)").s().p("AneBFQgUgBgLgDQgWgEgEgKQgGgNALgHQAGgFAPgDQA5gLBggCICYgCQBXgCBAgHQA7gIBegHICbgLQAygEBigQQALgCApgQQAggMAYAEIACABQATAFAFAWQAFAXgQAOQgRAQgjAJQgUAFgnAEQg+AIhRAEIiQAFQi7AFh8AOQhfAKg0ACIgtABQg4AAgvgGg");
	this.shape_49.setTransform(218.9,58.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(51,42,28,0.2)").s().p("AiAAlQgngHgYgHQgugNgFgSQgKgtBVAIQArAEA9APQAbAEAogGIBEgJQBZgIA+ALIAGABQAKACAEAKQADAKgFAJQgFAJgWAEIgfAFQhXARhHAIQgsAGggAAQgpgBgkgJg");
	this.shape_50.setTransform(33.2,67.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(51,42,28,0.2)").s().p("A0hEjQgOgUgFgeIgGg2QgLhFAJg8QACgLAVgTQASgQgFgKQgEgHgOgRQgMgPgFgKQgGgSgFgYIgGgrIgZi/IBdAUQA4AMAmAGQAeAGBBAIQA+AHAhAGQBZAQBvACQBFACCEgFQCSgGEAgVQEegYBzgGIDPgKIDQgKQCWgIAwgBQBwgDBXAHIBfAJQA3AFApgEQAOgBAbgEQAXgBALAQQAIAMAGAUIAHAhQAFAcATAxQATA0AGAZQAGAdACA4QACA1AFAbIABACIAAABIAAABQAAALANAtQAKAlgKATQgQAjhAADIhtAEQhCACgsAFIkZAeQieAQh7AEQilAFj8gDImfgEIrFAAQghAAgsANIhLAUQgbAGgXAAQg7AAgbgog");
	this.shape_51.setTransform(150.2,140.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(51,42,28,0.2)").s().p("Al9AlQgMgMAYgQQAegUAxAAQCIgBBFgIQAugGA/gCIBvgEQAmgCBNgFQA5gEApAAIAAAAIAJAAIAJABQAXAAgEASQgEASgRAGQglAMg6ACIjSAIQgoAChEAIQhOAKgeACQgVABhKgIQg8gHghALQgJADgIAAQgLAAgIgHg");
	this.shape_52.setTransform(160.3,18.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#332A1C").s().p("AkGB9IABAAQgTgUgIgkQgEgXgBgpIAAhFQABgpAJgdQAEgNALgBIAagCIAlgGIAfgEQAAAEgcAFQgfAGgDACQgHAGgXAGQgGACgDAfQgGBUADAjQAGBRAoAXQAbAPArgBQAXgBAxgIIBLgNIBKgMQDsgdAAANQAAACkKAkQhfAYg4AHQgWADgUAAQhEAAgegkg");
	this.shape_53.setTransform(44.1,157.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#917A50").s().p("AkaBCQgJgzAAgxQABg6ANgpQARAAAggKQAhgKASAAIHVD5Qg4AAhQALQhZAOgtAFQgPAChMAPQg4AKglABIgHAAQhiAAgPhYg");
	this.shape_54.setTransform(44.4,157);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#332A1C").s().p("AyINWQgegOgPgMQgigbgQgRQgagdgFgdQgRhpAUgpQAJgLARgPQAKgMgRgSQgVgVgIgeQgDgLgHgvIgXidQgFgjgWhwQgRhdgGg2IgFgsQgCgaAFgRQAEgOAYgKQAbgJAFgKQABgHgcgVQgegWgCgMQgQg+gIhCIgJhEQgGgmgKgcQgOgqgEgiQgJhKBbghQA8gVBcAAQAsgECRgTQB2gQBIgBQBLgCBxgOIC7gWQAxgEBOgNIB+gUQAxgGBagEQBggEArgFQCXgRDSgFQB5gCDxgCIBbgBQA1AAAlgCIBbgFQA0AAAlAPQASAHAMAJQARAOgDAPQgDANgMASQgOAUgDALQgEASAEAbQABANAHAgQAKAuAaBGQAZBBAxCWQAUAwAGAaIAGAiQADAWAGALQANAdgNAjQgGARgYApQAjACAKA3QAEAXAAA9QAKAvACAbQAEAxgdAMQAGAEAjBxQAjBwADAOQAHAiADAvIAEBTQABAVAOAxQAIAqgbAVQgXAVgrADIhKgCIgcADIgcAEQiaAMjNAWQilASjPADQiBACj1gDQjqgEnWgCIkfgBIhEgBQgogBgbADQgWACgpAAQg5ABADgHQgCAFA4gCQA0gCAKgCQAegDArAAIBKAAIFAgBQD8gCH2ADQGpADFsgqQCEgPCKgMIA6ABQAjABAXgHQAggLABgfQAAgMgLgvQgHgbgBgoIgChEQgDgsgPgzQgKgjgXg5QgDgJgJgrQgHgggNgRQgKgJgRgKIgdgQIAeADQASABAMAAQAPgEABgZQAAgJgEgbQgDgTgDg0QgDgtgGgYQgFgVgKgHQgKgIgTADQABgUAOgcQAQgiAEgNQAEgRgHggIgNgwQgUhZgqhvIgthzQgZhDgJgzIgHgoQgDgaAEgPQADgLAOgVQANgUACgLQAFgQg9gQQgkgJgzADQg7AFgdABIpWAJQh1ABjNAWQghAEhlAEQhVADgyAIQhGALj1AgQhOALiYAKQibAKhKAKIhjAOQg7AIgoADQiQAAg1ArQgbAVAEAsQACAaAQAuQALAhAHAzQAGA5AFAcIgBgBQAFAPAFAkQAFAhAGASQAFANAVAPQAYAQAGAJQAFANgNAKQgGAEgUAJQgTAJgFALQgEAIABAXQACAhAHArIAOBKQAKA5AZC0QAEAcAGA9QAGA2AKAiQAEALAKAOIARAXQAMAVgFAIQgNALgLALQgMANgCAdQgBAHABAoQAAAmADAOQAEAdAPATQAnAwArAcQAWAPAQACQATgDADgCQgBAJgKAAQgKAAgUgJg");
	this.shape_55.setTransform(144.6,86.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#917A50").s().p("AyrM+QgkgdgeglQgPgSgFgZQgDgOgBgjIgCg2QACgiAPgPQADgDANgIQAMgIgCgGQgDgLgLgMQgMgOgFgIQgSgZgGg0QgEg6gEgYQgdjdggigQAAgWgEgoQACgfAfgOQAVgKAFgGQAGgKgRgOIgZgSQgOgLgFgOQgMgigHg0IgKhYQgEgdgMgtQgPg4gEgSQgaiBDtgIQA/gCB4gRQB7gSA7gCQBTgEB4gNIDLgWQAhgDCVgWQBvgRBIAAQBBgBCEgPQCDgPBEAAQBuAAEegGQCMgDBHAAQARAABLgFQA4gEAjADQAmAEAbAMQAoATgSAdQgTAegEAYQgEAXAFAlQAKBBAqBrQAwB4AMAzQAGAaATA8QASA3AHAfQAFAZgUAiQgWAkAAARQAkgHAKA6QAFAggBA0QALAzAAAcQABAzgqgGQAcAOAKApIARBEQAVA0AKAiQAPAxADApQACAbACA2QACAvAJAgQAZBYhOAMQgZAEgsABQgxABgVACQgdADg+AEQg7ADggAEIi1AVQivATjgADQiZADj6gDQk5gEhZAAIpeAAIhcAJQg6AFghgOIAAAUQgHAKgNAAQgVAAgkgcg");
	this.shape_56.setTransform(144.5,86.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#332A1C").s().p("AibJOQgpgCgMgVQgSgWgDgvIAAhKQgEhPgPh8QgKhIgChsQgCh4gDg8QgHiVAIjCIABgxQACgtACAAQgCAAAHEzQAHEqACAtQADA7AQCEQAPB8ABBEIADA7QAFAnAVAIQAXAOAwgFIBIgJQCEgBAzgDQA+gEAJgCQAngLgFgmQgKhMgShwIggi9QgYiZgKi7QgIiQAAjIIAAgYIgBABIgHAEQgBgBAMgMQAFBAAOEHQAKDKASB8IAfC9QATB1AKBHIALBNQAAAsgqAKQggAIgxACIhRAAQh6ADgmADQghACgSAAIgJAAg");
	this.shape_57.setTransform(159.6,199.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#917A50").s().p("AiZJGQgfgDgOgSQgLgPgFgjQgDgagBgtQAAg1gCgSQgDgmgHg0IgMhZQgLhNgCh3QgDiogBgdQgEhIAChwIAEi5IGPAAIAKgKQAACBAPD9QANDZAfCsIASBfQAJA3AEApQACAOALA7QAJAvgBAbQgCAhgtAJIhIAEQg9AEh4AAQgPAAgrAEQgXACgRAAIgSgBg");
	this.shape_58.setTransform(159.4,198.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.instance_2},{t:this.instance_1},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.instance},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Sign, rect = new cjs.Rectangle(0,0,289.2,258.3), [rect]);


(lib.seaweed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.seaweedMove();
	this.instance.parent = this;
	this.instance.setTransform(-8,93,1,1,0,0,0,-8,91);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.07,scaleY:1.04,skewX:0.9,skewY:-20.5,y:95},19).to({scaleX:1,scaleY:1,skewX:0,skewY:0,y:93},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-19.9,-88.4,39.8,181);
p.frameBounds = [rect, new cjs.Rectangle(-20,-89.1,40.1,182.1), new cjs.Rectangle(-20,-89.9,40.1,183.1), new cjs.Rectangle(-20.1,-90.7,40.3,184.3), new cjs.Rectangle(-20,-91.6,40.4,185.5), new cjs.Rectangle(-20.1,-92.3,40.5,186.6), new cjs.Rectangle(-20.1,-93.1,40.7,187.6), new cjs.Rectangle(-20.1,-94.1,40.8,188.9), new cjs.Rectangle(-20.2,-94.8,40.8,190), new cjs.Rectangle(-20.2,-95.6,40.8,191.2), new cjs.Rectangle(-20.2,-96.5,40.9,192.4), new cjs.Rectangle(-20.1,-97.2,41.3,193.5), new cjs.Rectangle(-20.1,-98,41.3,194.6), new cjs.Rectangle(-20.1,-99,41.4,196), new cjs.Rectangle(-20.1,-99.8,41.4,197), new cjs.Rectangle(-20,-100.5,41.3,198.2), new cjs.Rectangle(-20,-101.4,41.9,199.3), new cjs.Rectangle(-20,-102.3,41.9,200.6), new cjs.Rectangle(-20,-103.1,41.8,201.8), new cjs.Rectangle(-20,-104.9,43.3,203.9), new cjs.Rectangle(-19.9,-103.1,41.8,201.8), new cjs.Rectangle(-20,-102.3,41.9,200.6), new cjs.Rectangle(-20,-101.5,41.9,199.6), new cjs.Rectangle(-20,-100.7,41.9,198.4), new cjs.Rectangle(-20.1,-99.9,41.4,197.3), new cjs.Rectangle(-20.1,-99.1,41.3,196.2), new cjs.Rectangle(-20.1,-98.4,41.4,195.2), new cjs.Rectangle(-20.1,-97.6,41.3,194), new cjs.Rectangle(-20.1,-96.8,41.3,193), new cjs.Rectangle(-20.2,-96,40.8,191.8), new cjs.Rectangle(-20.1,-95.2,40.8,190.6), new cjs.Rectangle(-20.2,-94.5,40.8,189.6), new cjs.Rectangle(-20.1,-93.7,40.7,188.4), new cjs.Rectangle(-20.1,-92.9,40.7,187.4), new cjs.Rectangle(-20.1,-92.1,40.5,186.3), new cjs.Rectangle(-20.1,-91.4,40.4,185.3), new cjs.Rectangle(-20,-90.6,40.2,184.1), new cjs.Rectangle(-20,-89.8,40.1,183.1), new cjs.Rectangle(-20,-89.1,40.1,182), new cjs.Rectangle(-19.9,-88.4,39.8,181)];


(lib.InfoClip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{out:0,over:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AruGnQgQgKgHgUIAZAAQAGAJAJAFQAJAFALAAQAUAAAMgLQAMgNAAgUIAAgCQgJAKgLAFQgLAFgNgBQgeAAgTgTQgTgUAAgdQAAgOAEgMQAFgOAJgIQAKgLAMgEQAMgGAPAAQANAAALAGQAMAEAJAJIAAgPIAYAAIAABtQAAAigSATQgRAVgfAAQgXAAgQgMgAroEcQgNANAAAUQAAATANANQAOAOATAAQAQAAAOgOQAOgNAAgRQAAgVgOgNQgNgOgSAAQgSAAgOANgAx0GVIA5jHIARAAIg4DHgAy4GVIA5jHIASAAIg5DHgAc3F+QgNgGgJgKQgKgJgEgNQgGgNAAgOQAAgOAFgLQAFgNAJgKQAKgKANgFQAMgGAPAAQAWAAARAMQAQANAIAWIgaAAQgGgMgKgGQgKgGgNAAQgSAAgMANQgMAOAAATQAAAUAMAMQANAOASAAQAMAAAKgGQALgGAFgNIAaAAQgIAYgRAMQgQAMgXAAQgPAAgLgEgAS7F+QgMgGgKgKQgJgJgGgNQgEgNAAgOQAAgNAEgMQAFgNAJgKQAKgKAMgFQANgGAOAAQARAAAPAIQAPAIAKAOQAFAJADALQADAKAAAOIAAAEIhvAAQADAQAMALQAMAKARAAQALAAAKgGQAJgGAGgKIAbAAQgJAWgRALQgQAMgVAAQgPAAgMgEgAS7EXQgLAKgFAQIBUAAQgEgQgLgKQgLgIgPAAQgQAAgLAIgAHrF+QgMgGgKgKQgJgJgFgNQgFgNAAgOQAAgNAFgMQAFgNAIgKQALgKAMgFQAMgGAOAAQASAAAPAIQAOAIAKAOQAGAJACALQADAKAAAOIAAAEIhvAAQAEAQALALQANAKAQAAQALAAAKgGQAJgGAHgKIAaAAQgJAWgQALQgQAMgWAAQgPAAgMgEgAHrEXQgLAKgFAQIBUAAQgEgQgLgKQgLgIgPAAQgQAAgLAIgADnF+QgMgGgKgKQgJgJgFgNQgFgNAAgOQAAgOAEgLQAFgNAJgKQAKgKANgFQANgGAOAAQAWAAARAMQARANAHAWIgaAAQgGgMgKgGQgJgGgOAAQgSAAgMANQgMAOAAATQAAAUAMAMQANAOASAAQANAAAKgGQAKgGAFgNIAaAAQgIAYgQAMQgRAMgXAAQgOAAgMgEgABSF+QgMgGgKgKQgJgJgFgNQgFgNAAgOQAAgNAFgMQAFgNAIgKQALgKAMgFQAMgGAOAAQASAAAPAIQAOAIAKAOQAGAJACALQADAKAAAOIAAAEIhvAAQAEAQALALQANAKAQAAQALAAAKgGQAJgGAHgKIAaAAQgJAWgQALQgQAMgWAAQgPAAgMgEgABSEXQgLAKgFAQIBUAAQgEgQgLgKQgLgIgPAAQgQAAgLAIgAjKF+QgMgGgKgKQgJgJgFgNQgFgNAAgOQAAgOAEgLQAFgNAJgKQAKgKANgFQANgGAOAAQAWAAARAMQARANAHAWIgaAAQgGgMgKgGQgJgGgOAAQgSAAgMANQgMAOAAATQAAAUAMAMQANAOASAAQANAAAKgGQAKgGAFgNIAaAAQgIAYgQAMQgRAMgXAAQgPAAgLgEgAmOF2QgLgMgBgWIAWAAQAAALAGAGQAGAIAIAAQAJgBAFgFQAFgFAAgIQAAgGgEgFQgEgFgIgDIgIgEQgOgFgEgDQgGgGgEgHQgDgHAAgJQAAgQALgMQALgLAQAAQARAAAKALQAJAJACASIgXAAQAAgIgFgDQgEgFgHAAQgGABgFAFQgEAEAAAFQAAAMATAHIAJADQAPAGAGAJQAHAJAAAQQAAARgMALQgNAMgRAAQgTAAgLgMgApmF2QgLgMgCgWIAXAAQAAALAGAGQAFAIAJAAQAIgBAGgFQAFgFAAgIQAAgGgEgFQgEgFgIgDIgIgEQgOgFgEgDQgHgGgDgHQgEgHAAgJQAAgQALgMQAMgLAPAAQARAAALALQAJAJABASIgXAAQAAgIgEgDQgFgFgGAAQgGABgFAFQgEAEAAAFQAAAMATAHIAJADQAPAGAGAJQAGAJAAAQQAAARgMALQgMAMgSAAQgSAAgLgMgA1cF+QgMgGgKgKQgJgJgGgNQgEgNAAgOQAAgNAEgMQAFgNAJgKQAKgKAMgFQAMgGAPAAQARAAAPAIQAOAIALAOQAFAJADALQADAKAAAOIAAAEIhvAAQADAQAMALQAMAKAQAAQAMAAAJgGQAKgGAGgKIAaAAQgIAWgRALQgQAMgWAAQgPAAgLgEgA1cEXQgMAKgEAQIBUAAQgEgQgLgKQgLgIgQAAQgPAAgLAIgA7FF+QgMgGgKgKQgIgJgGgNQgFgNAAgOQAAgNAEgMQAFgNAKgKQAJgKANgFQAMgHAOAAQAOAAAMAFQANAGAJAJQAKALAFAM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");
	this.shape.setTransform(216.9,50.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AMcBuIASguIgvh/IAYAAIAkBhIAnhhIAZAAIhGCtgABrA/QgRgIgNgPQgLgMgGgPQgFgPAAgSQAAgSAGgQQAIgQANgOQAMgMAQgHQAQgGARAAQAbAAAUANQAUAMALAXIgeAAQgIgLgNgGQgMgGgPAAQgMAAgMAFQgLAFgIAIQgJAKgFAMQgGAMAAANQABANAFALQAEAMAIAKQAJAIAMAFQAMAGAMAAQAPgBAMgFQALgGAJgLIAfAAQgLAXgVAMQgTANgbAAQgUAAgQgIgAh6BBQgMgEgLgLQgIgKgFgMQgGgNAAgOQAAgMAGgNQAEgMAJgJQAKgLANgFQAMgGAOAAQASAAAOAIQAOAIALAPQAFAIADAMQADAKgBANIAAADIhuAAQAEARALAKQANAJAQAAQALABAJgGQAKgFAGgKIAbAAQgJAVgRAMQgQAMgVAAQgPgBgMgFgAh6gjQgMAKgEAPIBUAAQgEgQgLgJQgLgJgPAAQgQAAgLAJgAniBBQgNgEgKgLQgIgKgFgMQgGgNAAgOQAAgMAFgNQAEgMAKgJQAJgLAOgFQAMgHANAAQAPABAMAFQALAGAKAIQALALAEAMQAFANAAAMQABANgFAOQgFAMgJAJQgKALgMAGQgNAGgNAAQgPgBgMgFgAnngfQgMAOAAASQAAAUAMANQAMANAUAAQARAAANgNQAMgNAAgUQAAgTgMgNQgNgNgSAAQgTAAgMANgAteA/QgSgIgNgPQgLgMgGgPQgFgPAAgSQAAgSAHgQQAHgQAOgOQAMgMAPgHQAQgGASAAQAbAAATANQAUAMAKAXIgcAAQgKgLgLgGQgMgGgPAAQgNAAgLAFQgLAFgJAIQgJAKgFAMQgFAMAAANQAAANAEALQAFAMAJAKQAIAIANAFQALAGANAAQAPgBAMgFQALgGAIgLIAeAAQgKAXgUAMQgUANgaAAQgVAAgPgIgAIsAyQgUgUAAgdQABgNAEgMQAFgNAIgJQALgLAMgEQALgFAQAAQANAAALAFQALAFAKAIIAAgPIAXAAIAACCIgXAAIAAgQQgKAJgLAFQgKAFgNAAQgeAAgTgUgAI9gfQgMANAAATQAAATAMAOQAOANATAAQARAAAOgNQAOgOAAgSQAAgSgOgOQgNgOgSAAQgTAAgOANgAECAyQgTgUgBgdQAAgNAGgMQAEgNAJgJQAKgLALgEQANgFAPAAQANAAALAFQALAFAKAIIAAgPIAYAAIAACCIgYAAIAAgQQgJAJgLAFQgLAFgNAAQgdAAgUgUgAEUgfQgNANAAATQAAATANAOQANANAUAAQARAAANgNQAOgOAAgSQAAgSgOgOQgNgOgSAAQgSAAgOANgAN9BDIAAgdIAXAAIAAAdgAK8BDIAAiCIAXAAIAAAPQAGgIAHgFQAIgEAJgBIAAAZQgPACgHAIQgGAIAAASIAABIgAHrBDIAAhFQABgUgJgLQgHgKgQAAQgSAAgIAMQgIAMAAAbIAAA7IgXAAIAAiCIAWAAIAAAPQAIgIAJgFQAIgFAMAAQAaABANAPQAPAPAAAcIAABKgAjQBDIAAhLQAAgRgIgJQgHgKgNAAQgPAAgHAKQgHAKAAAYIAABDIgXAAIAAhCQAAgXgHgLQgGgLgPAAQgQAAgGALQgIALAAAWIAABDIgWAAIAAiCIAVAAIAAAPQAGgIAJgFQAIgFAKAAQAPABAJAFQAJAGAHALQAFgLALgGQAKgFAOgBQAXAAANAPQAOAOAAAZIAABPgApLBDIAAiCIAXAAIAAAPQAGgIAHgFQAIgEAJgBIAAAZQgPACgHAIQgHAIAAASIAABIgAp+BDIAAhDQAAgVgHgLQgIgLgPAAQgKAAgHAEQgHAGgEAHQgDAFgBAHIgBAWIAAA7IgXAAIAAisIAXAAIAAA5QAGgIAJgFQAJgFANAAQAXABANAPQANAPAAAcIAABKg");
	this.shape_1.setTransform(323.6,18.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AruGmQgQgLgHgUIAZAAQAGAKAJAEQAJAFALAAQAUAAAMgLQAMgMAAgUIAAgCQgJAJgLAFQgLAFgNAAQgeAAgTgUQgTgUAAgdQAAgOAEgMQAFgNAJgJQAKgLAMgEQAMgFAPAAQANAAALAFQAMAEAJAKIAAgQIAYAAIAABtQAAAigSAUQgRAUgfAAQgXAAgQgLgAroEbQgNANAAATQAAATANAOQAOANATAAQAQAAAOgNQAOgOAAgRQAAgUgOgOQgNgOgSAAQgSAAgOAOgAx0GTIA5jHIARAAIg4DHgAy4GTIA5jHIASAAIg5DHgAc3F8QgNgGgJgKQgKgJgEgNQgGgNAAgOQAAgNAFgMQAFgMAJgKQAKgLANgFQANgGAOAAQAWAAARAMQAQANAIAXIgaAAQgGgNgKgGQgKgGgNAAQgSAAgMAOQgMANAAATQAAAUAMANQANANASAAQAMAAAKgGQALgGAFgNIAaAAQgIAYgRAMQgQAMgXAAQgPAAgLgEgAS7F8QgMgGgKgKQgJgJgGgNQgEgNAAgOQAAgNAEgMQAFgNAJgJQAKgLAMgFQANgGAOAAQARAAAPAIQAPAIAKAPQAFAIADALQADAKAAAPIAAADIhvAAQAEAQALALQAMAKARAAQALAAAKgGQAJgFAGgKIAbAAQgJAVgQAMQgRALgVAAQgPAAgMgEgAS7EWQgLAJgFAQIBUAAQgEgQgLgJQgLgJgPAAQgQAAgLAJgAHrF8QgMgGgKgKQgJgJgFgNQgFgNAAgOQAAgNAFgMQAFgNAIgJQALgLAMgFQAMgGAOAAQASAAAPAIQAOAIAKAPQAGAIACALQADAKAAAPIAAADIhvAAQAEAQALALQANAKAQAAQALAAAKgGQAJgFAHgKIAaAAQgJAVgQAMQgQALgWAAQgPAAgMgEgAHrEWQgLAJgFAQIBUAAQgEgQgLgJQgKgJgQAAQgQAAgLAJgADnF8QgMgGgKgKQgJgJgFgNQgFgNAAgOQAAgNAEgMQAFgMAJgKQAKgLANgFQANgGAOAAQAXAAAQAMQARANAHAXIgaAAQgGgNgKgGQgJgGgOAAQgSAAgMAOQgMANAAATQAAAUAMANQANANASAAQANAAAKgGQAKgGAFgNIAaAAQgIAYgQAMQgQAMgYAAQgOAAgMgEgABSF8QgMgGgKgKQgJgJgFgNQgFgNAAgOQAAgNAFgMQAFgNAIgJQALgLAMgFQAMgGAOAAQASAAAPAIQAOAIAKAPQAGAIACALQADAKAAAPIAAADIhuAAQADAQALALQANAKAQAAQALAAAKgGQAJgFAHgKIAaAAQgJAVgQAMQgQALgWAAQgPAAgMgEgABSEWQgLAJgFAQIBUAAQgEgQgLgJQgKgJgQAAQgQAAgLAJgAjKF8QgMgGgKgKQgJgJgFgNQgFgNAAgOQAAgNAEgMQAFgMAJgKQAKgLANgFQANgGAOAAQAWAAARAMQARANAHAXIgaAAQgGgNgKgGQgJgGgOAAQgSAAgMAOQgMANAAATQAAAUAMANQANANASAAQANAAAKgGQAKgGAFgNIAaAAQgIAYgQAMQgRAMgXAAQgPAAgLgEgAmOF0QgLgMgBgWIAWAAQAAALAGAHQAGAHAIAAQAJAAAFgGQAFgEAAgJQAAgGgEgFQgEgFgIgDIgIgEQgOgEgEgEQgGgFgEgIQgDgGAAgKQAAgQALgLQALgMAQAAQARAAAKALQAJAJACASIgXAAQAAgHgFgEQgEgEgHAAQgGAAgFAFQgEAEAAAGQAAALATAHIAJADQAPAHAGAIQAHAJAAAQQAAARgMAMQgNALgRAAQgTAAgLgMgApmF0QgLgMgCgWIAXAAQAAALAGAHQAFAHAJAAQAIAAAGgGQAFgEAAgJQAAgGgEgFQgEgFgIgDIgIgEQgOgEgEgEQgHgFgDgIQgEgGAAgKQAAgQALgLQAMgMAPAAQARAAALALQAJAJABASIgXAAQAAgHgEgEQgEgEgHAAQgGAAgFAFQgEAEAAAGQAAALATAHIAJADQAPAHAGAIQAGAJAAAQQAAARgMAMQgMALgSAAQgSAAgLgMgA1cF8QgMgGgKgKQgJgJgGgNQgEgNAAgOQAAgNAEgMQAFgNAJgJQAKgLAMgFQAMgGAPAAQARAAAPAIQAOAIALAPQAFAIADALQADAKAAAPIAAADIhvAAQADAQAMALQAMAKAQAAQAMAAAJgGQAKgFAGgKIAaAAQgIAVgRAMQgQALgWAAQgPAAgLgEgA1cEWQgMAJgEAQIBUAAQgEgQgLgJQgLgJgQAAQgPAAgLAJgA7FF8QgMgGgKgKQgIgJgGgNQgFgNAAgOQAAgNAEgMQAFgNAKgJQAJgLANgFQAMgHAOAAQAOAAAMAGQANAFAJAKQAKAKAFAM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ANANASAAQATAAANgNQANgNAAgRQAAgVgNgNQgNgOgTAAQgSAAgNAOgANrA8QgNgGgJgKQgJgKgFgMQgGgNAAgNQAAgNAFgNQAFgMAJgJQAKgLANgGQAMgGANAAQAPAAAMAGQAMAFAKAKQAKAKAFAMQAFANAAANQAAAMgFANQgFANgIAKQgLAKgMAGQgNAFgNAAQgPAAgMgEgANngkQgNAMAAAUQAAATANANQAMANATAAQARAAANgNQANgNAAgTQAAgUgNgNQgNgNgSAAQgSAAgMAOgAAGA8QgLgGgLgKQgIgKgGgMQgFgNAAgNQAAgNAFgNQAFgMAJgJQAKgLALgGQAMgFAPAAQARAAAPAIQAOAIALAOQAFAJADALQACAKAAAOIAAADIhtAAQADAQALALQAMAKAQAAQAMAAAJgGQAKgFAGgKIAaAAQgIAVgRAMQgQALgWAAQgPAAgLgEgAAGgpQgLAJgEAQIBTAAQgEgQgLgJQgLgJgQAAQgPAAgLAJgAnkA8QgMgGgKgKQgJgKgFgMQgFgNAAgNQAAgNAFgNQAFgMAIgJQALgLAMgGQAMgFAOAAQASAAAPAIQAOAIAKAOQAGAJACALQADAKAAAOIAAADIhvAAQAEAQALALQANAKAQAAQALAAAKgGQAJgFAHgKIAaAAQgJAVgQAMQgQALgWAAQgPAAgMgEgAnkgpQgLAJgFAQIBUAAQgEgQgLgJQgLgJgPAAQgQAAgLAJgAsyA0QgLgMgBgWIAWAAQAAALAGAHQAGAHAJAAQAIAAAFgGQAGgFAAgIQAAgGgFgFQgEgFgIgDIgIgEQgNgDgEgEQgHgFgEgIQgDgHAAgJQAAgQALgLQALgMAQAAQARAAAKAKQAKAKABASIgXAAQAAgHgFgEQgEgEgHAAQgGAAgFAEQgEAEAAAHQAAALATAHIAJADQAPAGAGAJQAHAIAAAQQAAARgMAMQgMALgSAAQgSAAgMgMgAw0A8QgMgGgKgKQgJgKgFgMQgFgNAAgNQAAgNAFgNQAEgMAJgJQAKgLANgGQAMgFAOAAQASAAAPAIQAOAIAKAOQAFAJADALQADAKAAAOIAAADIhvAAQAEAQALALQAMAKARAAQALAAAKgGQAJgFAGgKIAbAAQgJAVgQAMQgRALgVAAQgPAAgMgEgAw0gpQgLAJgFAQIBUAAQgEgQgLgJQgLgJ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");
	this.shape_2.setTransform(216.9,50.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

	// Layer 5
	this.canaryLink = new lib.CanaryLink();
	this.canaryLink.parent = this;
	this.canaryLink.setTransform(330,18,1,1,0,0,0,104,19);

	this.timeline.addTween(cjs.Tween.get(this.canaryLink).wait(2));

	// Layer 2
	this.bg = new lib.InfoClipBG();
	this.bg.parent = this;
	this.bg.setTransform(216,46.5,1,1,0,0,0,218,47.5);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-2,-1,436,95.2);
p.frameBounds = [rect, rect];


(lib.fishtail = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tailsway();
	this.instance.parent = this;
	this.instance.setTransform(-20.3,1,0.782,1,0,0,0,-17,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.03,x:-16.5},24).to({scaleX:0.78,x:-20.3},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.1,-41.9,50.3,83.9);
p.frameBounds = [rect, new cjs.Rectangle(-32.1,-41.9,51,83.9), new cjs.Rectangle(-32.1,-41.9,51.7,83.9), new cjs.Rectangle(-32,-41.9,52.3,83.9), new cjs.Rectangle(-32.1,-41.9,53,83.9), new cjs.Rectangle(-32.1,-41.9,53.7,83.9), new cjs.Rectangle(-32.1,-41.9,54.3,83.9), new cjs.Rectangle(-32.1,-41.9,55,83.9), new cjs.Rectangle(-32.1,-41.9,55.7,83.9), new cjs.Rectangle(-32,-41.9,56.3,83.9), new cjs.Rectangle(-32.1,-41.9,57,83.9), new cjs.Rectangle(-32.1,-41.9,57.7,83.9), new cjs.Rectangle(-32.1,-41.9,58.4,83.9), new cjs.Rectangle(-32.1,-41.9,59,83.9), new cjs.Rectangle(-32,-41.9,59.7,83.9), new cjs.Rectangle(-32,-41.9,60.3,83.9), new cjs.Rectangle(-32.1,-41.9,61,83.9), new cjs.Rectangle(-32,-41.9,61.6,83.9), new cjs.Rectangle(-32.1,-41.9,62.3,83.9), new cjs.Rectangle(-32.1,-41.9,63,83.9), new cjs.Rectangle(-32,-41.9,63.6,83.9), new cjs.Rectangle(-32.1,-41.9,64.3,83.9), new cjs.Rectangle(-32.1,-41.9,64.9,83.9), new cjs.Rectangle(-32.1,-41.9,65.7,83.9), new cjs.Rectangle(-32.1,-41.9,66.3,83.9), new cjs.Rectangle(-32.1,-41.9,65.7,83.9), new cjs.Rectangle(-32.1,-41.9,65.1,83.9), new cjs.Rectangle(-32.1,-41.9,64.4,83.9), new cjs.Rectangle(-32.1,-41.9,63.8,83.9), new cjs.Rectangle(-32.1,-41.9,63.1,83.9), new cjs.Rectangle(-32.1,-41.9,62.5,83.9), new cjs.Rectangle(-32.1,-41.9,61.8,83.9), new cjs.Rectangle(-32.1,-41.9,61.2,83.9), new cjs.Rectangle(-32,-41.9,60.6,83.9), new cjs.Rectangle(-32.1,-41.9,59.9,83.9), new cjs.Rectangle(-32.1,-41.9,59.3,83.9), new cjs.Rectangle(-32.1,-41.9,58.6,83.9), new cjs.Rectangle(-32.1,-41.9,58,83.9), new cjs.Rectangle(-32.1,-41.9,57.4,83.9), new cjs.Rectangle(-32.1,-41.9,56.7,83.9), new cjs.Rectangle(-32.2,-41.9,56.1,83.9), new cjs.Rectangle(-32.1,-41.9,55.4,83.9), new cjs.Rectangle(-32.1,-41.9,54.8,83.9), new cjs.Rectangle(-32.1,-41.9,54.2,83.9), new cjs.Rectangle(-32.1,-41.9,53.6,83.9), new cjs.Rectangle(-32.1,-41.9,52.9,83.9), new cjs.Rectangle(-32.1,-41.9,52.3,83.9), new cjs.Rectangle(-32.1,-41.9,51.7,83.9), new cjs.Rectangle(-32.1,-41.9,51,83.9), new cjs.Rectangle(-32.1,-41.9,50.3,83.9)];


(lib.fishmouth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.fishmouthanim();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.88},2).to({scaleY:1},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26.4,-25.6,52.8,51.2);
p.frameBounds = [rect, new cjs.Rectangle(-26.4,-24.1,52.8,48.2), new cjs.Rectangle(-26.4,-22.6,52.8,45.2), new cjs.Rectangle(-26.4,-24.1,52.8,48.2), new cjs.Rectangle(-26.4,-25.6,52.8,51.2)];


(lib.fishIdleMove = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.mouth = new lib.fishmouth();
	this.mouth.parent = this;
	this.mouth.setTransform(-24.5,17.5,0.643,0.143);

	this.instance = new lib.fishfin2();
	this.instance.parent = this;
	this.instance.setTransform(16.7,24.7,1,0.83,0,0,0,-11,-12.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMAOQgFgFgBgJQABgHAFgHQAGgFAGgBQAIABAFAFQAFAHAAAHQAAAJgFAFQgFAHgIgBQgGABgGgHg");
	this.shape.setTransform(-53,-17.5,1,0.83);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdAhQgMgOAAgTQAAgSAMgOQANgOAQAAQASAAAMAOQAMAOAAASQAAATgMAOQgMAOgSAAQgQAAgNgOg");
	this.shape_1.setTransform(-55.1,-15.6,1,0.83);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMAOQgGgFAAgJQAAgIAGgGQAFgFAHgBQAIABAGAFQAFAGAAAIQAAAJgFAFQgGAHgIAAQgHAAgFgHg");
	this.shape_2.setTransform(11.2,-18.3,1,0.83);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgeAhQgNgOAAgTQAAgSANgOQAMgOASAAQASAAANAOQANAOAAASQAAATgNAOQgNAOgSAAQgSAAgMgOg");
	this.shape_3.setTransform(9.1,-16.4,1,0.83);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.2)").s().p("AhMgQQBBhRBfgqQgEAeATARQAOAMAtAUQgmARgVAnQgYArAgAUIgKAAQgpgWhYAeQhWAdgoAsQAZhXA5hFg");
	this.shape_4.setTransform(-8.1,-36.2,1,0.83);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#19303F").s().p("AjWDbQAAgJAEgJQANgYAjgaQAqgeA2gTQAigMAfgDQATgCARADIALADIgCgEIgCgMQAAgRAMgYQALgSAPgOIATgOIAAAAIgHgEQgRgIgJgFQgQgLgHgLQgJgPABgSQAAgLAFgUIAPgcQARgaAZgUQAKgIAKgHQgsACglAMIgdALIgZANQgbAQgVASQgnAgggAxQgXAjgUAvQgYA9gLBGIgFAlQgBANgBAAQgBAAAAgNQgBgQACgVQAFhFAZhDQARguAZgoQAhg0AngiQAWgTAcgRIAcgOIAegMQA7gUBMAFIA8ADIg7AQQgdAIgcAWQgVARgQAZIgIAMIgFALQgEANgBANQAAANAGAIQAEAIANAIQAKAHANAGIAqATIgjASIgOALQgOANgJAQQgLASABANQAAAOANAJIAWAQIgmAAIgGgDIgEgCIgPgFQgQgDgQABQgcADgiAKQgxAQgtAcQgkAYgNAVQgEAGgDAJIgBAGIAAAAIgBgGg");
	this.shape_5.setTransform(-4.3,-40.1,1,0.83);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3D79A5").s().p("AjBDQQABieBXh9QBsidC+AOQglAJghAfQgeAbgOAhQgMApARAVQANAPA1AXQgmARgWAlQgYArAgAWIgKAAQgzgihyA2QgwAWgdAbQghAdADAWg");
	this.shape_6.setTransform(-7.2,-39.7,1,0.83);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#363D1C").s().p("ABCBPQgCgBABgKQADgVAAgGQgBgQgJgVQgJgUgRgRIgIgHIgIgGIgIgFIgBgBIgCgBIgEgCQgRgGgOAAQgSgBgTAJIgEACIgCAAIgJACIAGgHQAJgKAHgDIANgGIARgDQASgBAUAGIAHADIAEACIASANIAIAHQAWAUAJAaQAIAZgCATQgBAMgIAQQgFAJgCAAIAAAAg");
	this.shape_7.setTransform(2.2,-7.4,1,0.83);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B1D159").s().p("AhDg6IgHAAQAPgOAagCQAZgBAUALQAyAeAKAxQAEARgCAPIgJAcg");
	this.shape_8.setTransform(2.3,-7.1,1,0.83);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AglCNIgGgEIgIgJIgCgEQgEgIABAAQABgBAFAGIALAKIAGADQAOAHASgDQASgDAVgOQAbgUAJgTQAPgbAFgfQAEghgLghQgMghgbgcQgRgQgMgFQgOgHgQADIgPAFIgNAJQgJAHgNARQgQAXgMAhIgHAcIgDAZQgDAxAMAeQACAIAIALIAEAGQgBABgGgEQgKgJgEgKQgQgdAAg1QAAgQACgLQADgRAEgNQAJghATgdQAPgVAKgHIAQgMQANgGAHgBIAGgBIAPAAIALACIAKAEQARAHASASQAfAfAMAmQANAngGAkQgFAigTAeQgFAMgPAMQgJAKgOAHQgYAPgVACIgHAAQgRAAgNgIg");
	this.shape_9.setTransform(9.1,-20.1,1,0.83);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag3ByIgUAHQgWgOgGgxQgFgnAHgiQAMhBAnglQAtgtAxAnQAyArAKA8QAJA6gjA3QgZAhgnANQgNADgKAAQgdAAgRgcg");
	this.shape_10.setTransform(9,-19.9,1,0.83);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#363D1C").s().p("AhCA0IgDgPIgBgLIACgNQAGgdAfgUQATgMAUgEQAWgDAMACQANACAJAEQAHAEgBACQAAABgIABIgVAAQgLAAgSAFQgSAGgOAJQgYAQgIAVIgDAKIgCAJIgBAMQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAACgHACIgCAAg");
	this.shape_11.setTransform(-48.6,-8.7,1,0.83);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B1D159").s().p("AhBAyQgJg0AwgdQAtgcAwAQIh9Bdg");
	this.shape_12.setTransform(-48.3,-8.6,1,0.83);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgCCGIgJgBIgJgDQgSgGgRgWQgjgtgHg6QgEgnALgdIAIgRIATgWIAIgGQAFgDAMgGQARgIAUgDQATgBASAJQAOAHAOARQAKAPAGAPQAKAZAFAhIAEAaIAAAZIgBAGIgEASIgIATIgKAOIgKAMQgTASgCgBQgBgBAQgVIAIgMIAIgPIAGgRIADgPIAAgRIgCgMIgEgYQgHghgJgVQgFgNgKgMQgKgOgLgFQgNgGgOABQgPACgPAHIgOAIIgGAEIgLALIgEAGIgHAOQgJAaACAhQAGA1AdAsQAQAUAMAFIAIAEIAHACIANACIAUABQAHAAAAABQAAABgHACIgIACIgMABIgOgBg");
	this.shape_13.setTransform(-54.8,-18.5,1,0.83);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgQB7QgZgJgRgeQgfgugBg6QgBhDAtgZQA5ggAjAjQAcAcALBBQAKAtgIAbQgJAdgjAjIgGAGQgNACgLAAQgQAAgNgFg");
	this.shape_14.setTransform(-54.7,-18.2,1,0.83);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(0,0,0,0.102)").s().p("Ag6GhQiIgih1h9QhghmgqhwQCWBmCiAXQC2AZCahUIAagPQAUhUAGhEQAKhogZgxQgfhAAegGQAPgDAVAKIBJibIAPAIQARAOAQAZQAwBRAECrQAYCJhCCMQg+CDhzBTQhbBDhoAAQgqAAgugMg");
	this.shape_15.setTransform(-14.7,11,1,0.83);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.2)").s().p("AiuBoQhSgTgHgtQgGgrBIgrQBIgrBtgRQBsgRBSATQBTAUAGAsQAHArhIAsQhIArhuARQgyAIgsAAQg0AAgsgLg");
	this.shape_16.setTransform(-18.5,-21.1,1,0.83);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#363D1C").s().p("AgOHfQg9gKg/ggQg5geg3gvQg0gtgsg5Qgug6gfhAQgihHgJhDQgMhJAUhEQAShDArg2IAVgaIAXgYQAfgeASgNQBehKB3ggQALgEAQgDIAbgFQAogGAMAAQAngEA9AGIAvAIQAWAFAUAHQAqANAiAPQBIAgAmAkQAVAUAKARQAKAQACARIABANIgBAJQgBAHAAAAQAAgKgDgSQgDgPgKgQQgMgRgTgRQgngihGgeQglgPgmgLQgUgGgWgFIgtgHQg8gFgmAEIgyAHIgaAFQgOADgNAEQhyAfhcBKQgRAMgeAdIgpAwQgqA1gQA+QgSA/AKBHQAKBCAgBBQAeA+AsA5QAsA4AyArQAzAtA5AeQA8AfA6AKQA7AKA6gKIA2gQIAagLIASgJIAGgEQAqgZApgnQAmglAbgkQAzhEAchQQAVg8AFhBQADgogEgnIgCgcQAAgBAGAcQAGAhgBAwQgDBBgUA+QgcBUgyBFQgdAnglAlQgrApgrAaIgGAEIgTAKQgSAJgJADIg5ARQggAGggAAQgeAAgdgFg");
	this.shape_17.setTransform(-16.5,7.1,1,0.83);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B1D159").s().p("AgrHRQiJgjh0h8Qh2h+gkiIQgsikBgiCQBZh7Cag9QCbg+CUAeQBcASBUAvQBzBAgLBJIAcCoQAeCMhCCRQg+CIh2BVQhcBChnAAQgsAAgsgLg");
	this.shape_18.setTransform(-16.2,7,1,0.83);

	this.instance_1 = new lib.fishfin1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-41.1,30.3,1,0.83,0,0,0,3.5,-14);

	this.instance_2 = new lib.fishtail();
	this.instance_2.parent = this;
	this.instance_2.setTransform(29.5,-3.8,1,0.868,9.5,0,0,-12,-4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance},{t:this.mouth}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fishIdleMove, rect = new cjs.Rectangle(-64.7,-58.7,129.4,117.5), [rect]);


(lib.fishIdle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.fishIdleMove();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.05,scaleY:0.88,y:11},9).to({scaleX:1,scaleY:1,y:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64.7,-58.7,129.4,117.5);
p.frameBounds = [rect, new cjs.Rectangle(-65,-56.7,120.3,115.9), new cjs.Rectangle(-65.4,-54.7,120.9,114.3), new cjs.Rectangle(-65.7,-52.7,121.5,112.8), new cjs.Rectangle(-66,-50.7,122.1,111.2), new cjs.Rectangle(-66.4,-48.7,122.7,109.7), new cjs.Rectangle(-66.7,-46.7,123.3,108.1), new cjs.Rectangle(-67,-44.7,123.9,106.6), new cjs.Rectangle(-67.4,-42.7,124.6,105), new cjs.Rectangle(-67.7,-40.7,135.4,103.5), new cjs.Rectangle(-67.4,-42.5,124.6,104.9), new cjs.Rectangle(-67.1,-44.3,124.1,106.3), new cjs.Rectangle(-66.8,-46.1,123.5,107.7), new cjs.Rectangle(-66.5,-47.9,123,109.1), new cjs.Rectangle(-66.2,-49.7,122.4,110.5), new cjs.Rectangle(-65.9,-51.5,121.9,111.9), new cjs.Rectangle(-65.6,-53.3,121.3,113.3), new cjs.Rectangle(-65.3,-55.1,120.8,114.7), new cjs.Rectangle(-65,-56.9,120.2,116.1), new cjs.Rectangle(-64.7,-58.7,129.4,117.5)];


(lib.fishbody = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// fishfin2
	this.instance = new lib.fishfin2();
	this.instance.parent = this;
	this.instance.setTransform(26.9,29.8,1,1,0,0,0,-11,-12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.11,skewX:18,skewY:43.9},24).to({scaleX:1,skewX:0,skewY:0},25).wait(1));

	// fishbody
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMAOQgFgFgBgJQABgHAFgHQAGgFAGgBQAIABAFAFQAFAHAAAHQAAAJgFAFQgFAHgIgBQgGABgGgHg");
	this.shape.setTransform(-42.7,-21);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdAhQgMgOAAgTQAAgSAMgOQANgOAQAAQASAAAMAOQAMAOAAASQAAATgMAOQgMAOgSAAQgQAAgNgOg");
	this.shape_1.setTransform(-44.8,-18.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMAOQgGgFAAgJQAAgIAGgGQAFgFAHgBQAIABAGAFQAFAGAAAIQAAAJgFAFQgGAHgIAAQgHAAgFgHg");
	this.shape_2.setTransform(21.5,-22);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgeAhQgNgOAAgTQAAgSANgOQAMgOASAAQASAAANAOQANAOAAASQAAATgNAOQgNAOgSAAQgSAAgMgOg");
	this.shape_3.setTransform(19.3,-19.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.2)").s().p("AhMgQQBBhRBfgqQgEAeATARQAOAMAtAUQgmARgVAnQgYArAgAUIgKAAQgpgWhYAeQhWAdgoAsQAZhXA5hFg");
	this.shape_4.setTransform(2.2,-43.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#19303F").s().p("AjWDbQAAgJAEgJQANgYAjgaQAqgeA2gTQAigMAfgDQATgCARADIALADIgCgEIgCgMQAAgRAMgYQALgSAPgOIATgOIAAAAIgHgEQgRgIgJgFQgQgLgHgLQgJgPABgSQAAgLAFgUIAPgcQARgaAZgUQAKgIAKgHQgsACglAMIgdALIgZANQgbAQgVASQgnAgggAxQgXAjgUAvQgYA9gLBGIgFAlQgBANgBAAQgBAAAAgNQgBgQACgVQAFhFAZhDQARguAZgoQAhg0AngiQAWgTAcgRIAcgOIAegMQA7gUBMAFIA8ADIg7AQQgdAIgcAWQgVARgQAZIgIAMIgFALQgEANgBANQAAANAGAIQAEAIANAIQAKAHANAGIAqATIgjASIgOALQgOANgJAQQgLASABANQAAAOANAJIAWAQIgmAAIgGgDIgEgCIgPgFQgQgDgQABQgcADgiAKQgxAQgtAcQgkAYgNAVQgEAGgDAJIgBAGIAAAAIgBgGg");
	this.shape_5.setTransform(6,-48.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3D79A5").s().p("AjBDQQABieBXh9QBsidC+AOQglAJghAfQgeAbgOAhQgMApARAVQANAPA1AXQgmARgWAlQgYArAgAWIgKAAQgzgihyA2QgwAWgdAbQghAdADAWg");
	this.shape_6.setTransform(3.1,-47.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#363D1C").s().p("ABCBPQgCgBABgKQADgVAAgGQgBgQgJgVQgJgUgRgRIgIgHIgIgGIgIgFIgBgBIgCgBIgEgCQgRgGgOAAQgSgBgTAJIgEACIgCAAIgJACIAGgHQAJgKAHgDIANgGIARgDQASgBAUAGIAHADIAEACIASANIAIAHQAWAUAJAaQAIAZgCATQgBAMgIAQQgFAJgCAAIAAAAg");
	this.shape_7.setTransform(12.5,-8.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B1D159").s().p("AhDg6IgHAAQAPgOAagCQAZgBAUALQAyAeAKAxQAEARgCAPIgJAcg");
	this.shape_8.setTransform(12.5,-8.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AglCNIgGgEIgIgJIgCgEQgEgIABAAQABgBAFAGIALAKIAGADQAOAHASgDQASgDAVgOQAbgUAJgTQAPgbAFgfQAEghgLghQgMghgbgcQgRgQgMgFQgOgHgQADIgPAFIgNAJQgJAHgNARQgQAXgMAhIgHAcIgDAZQgDAxAMAeQACAIAIALIAEAGQgBABgGgEQgKgJgEgKQgQgdAAg1QAAgQACgLQADgRAEgNQAJghATgdQAPgVAKgHIAQgMQANgGAHgBIAGgBIAPAAIALACIAKAEQARAHASASQAfAfAMAmQANAngGAkQgFAigTAeQgFAMgPAMQgJAKgOAHQgYAPgVACIgHAAQgRAAgNgIg");
	this.shape_9.setTransform(19.4,-24.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag3ByIgUAHQgWgOgGgxQgFgnAHgiQAMhBAnglQAtgtAxAnQAyArAKA8QAJA6gjA3QgZAhgnANQgNADgKAAQgdAAgRgcg");
	this.shape_10.setTransform(19.3,-24);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#363D1C").s().p("AhCA0IgDgPIgBgLIACgNQAGgdAfgUQATgMAUgEQAWgDAMACQANACAJAEQAHAEgBACQAAABgIABIgVAAQgLAAgSAFQgSAGgOAJQgYAQgIAVIgDAKIgCAJIgBAMQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAACgHACIgCAAg");
	this.shape_11.setTransform(-38.3,-10.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B1D159").s().p("AhBAyQgJg0AwgdQAtgcAwAQIh9Bdg");
	this.shape_12.setTransform(-38,-10.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgCCGIgJgBIgJgDQgSgGgRgWQgjgtgHg6QgEgnALgdIAIgRIATgWIAIgGQAFgDAMgGQARgIAUgDQATgBASAJQAOAHAOARQAKAPAGAPQAKAZAFAhIAEAaIAAAZIgBAGIgEASIgIATIgKAOIgKAMQgTASgCgBQgBgBAQgVIAIgMIAIgPIAGgRIADgPIAAgRIgCgMIgEgYQgHghgJgVQgFgNgKgMQgKgOgLgFQgNgGgOABQgPACgPAHIgOAIIgGAEIgLALIgEAGIgHAOQgJAaACAhQAGA1AdAsQAQAUAMAFIAIAEIAHACIANACIAUABQAHAAAAABQAAABgHACIgIACIgMABIgOgBg");
	this.shape_13.setTransform(-44.6,-22.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgQB7QgZgJgRgeQgfgugBg6QgBhDAtgZQA5ggAjAjQAcAcALBBQAKAtgIAbQgJAdgjAjIgGAGQgNACgLAAQgQAAgNgFg");
	this.shape_14.setTransform(-44.4,-21.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(0,0,0,0.102)").s().p("Ag6GhQiIgih1h9QhghmgqhwQCWBmCiAXQC2AZCahUIAagPQAUhUAGhEQAKhogZgxQgfhAAegGQAPgDAVAKIBJibIAPAIQARAOAQAZQAwBRAECrQAYCJhCCMQg+CDhzBTQhbBDhoAAQgqAAgugMg");
	this.shape_15.setTransform(-4.5,13.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.2)").s().p("AiuBoQhSgTgHgtQgGgrBIgrQBIgrBtgRQBsgRBSATQBTAUAGAsQAHArhIAsQhIArhuARQgyAIgsAAQg0AAgsgLg");
	this.shape_16.setTransform(-8.3,-25.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#363D1C").s().p("AgOHfQg9gKg/ggQg5geg3gvQg0gtgsg5Qgug6gfhAQgihHgJhDQgMhJAUhEQAShDArg2IAVgaIAXgYQAfgeASgNQBehKB3ggQALgEAQgDIAbgFQAogGAMAAQAngEA9AGIAvAIQAWAFAUAHQAqANAiAPQBIAgAmAkQAVAUAKARQAKAQACARIABANIgBAJQgBAHAAAAQAAgKgDgSQgDgPgKgQQgMgRgTgRQgngihGgeQglgPgmgLQgUgGgWgFIgtgHQg8gFgmAEIgyAHIgaAFQgOADgNAEQhyAfhcBKQgRAMgeAdIgpAwQgqA1gQA+QgSA/AKBHQAKBCAgBBQAeA+AsA5QAsA4AyArQAzAtA5AeQA8AfA6AKQA7AKA6gKIA2gQIAagLIASgJIAGgEQAqgZApgnQAmglAbgkQAzhEAchQQAVg8AFhBQADgogEgnIgCgcQAAgBAGAcQAGAhgBAwQgDBBgUA+QgcBUgyBFQgdAnglAlQgrApgrAaIgGAEIgTAKQgSAJgJADIg5ARQggAGggAAQgeAAgdgFg");
	this.shape_17.setTransform(-6.2,8.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B1D159").s().p("AgrHRQiJgjh0h8Qh2h+gkiIQgsikBgiCQBZh7Cag9QCbg+CUAeQBcASBUAvQBzBAgLBJIAcCoQAeCMhCCRQg+CIh2BVQhcBChnAAQgsAAgsgLg");
	this.shape_18.setTransform(-5.9,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(50));

	// fishfin1
	this.instance_1 = new lib.fishfin1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-30.8,36.5,1,1,0,0,0,3.5,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:-14.1,scaleX:1.14,skewX:-15,skewY:-43.5,x:-30.9,y:36.4},24).to({regY:-14,scaleX:1,skewX:0,skewY:0,x:-30.8,y:36.5},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54.5,-70.7,109,141.5);
p.frameBounds = [rect, new cjs.Rectangle(-54.5,-70.7,109,141.6), new cjs.Rectangle(-54.5,-70.7,108.8,141.6), new cjs.Rectangle(-54.5,-70.7,108.6,141.6), new cjs.Rectangle(-54.5,-70.7,108.5,141.6), new cjs.Rectangle(-54.5,-70.7,108.3,141.7), new cjs.Rectangle(-54.5,-70.7,108,141.7), new cjs.Rectangle(-54.5,-70.7,107.8,141.7), new cjs.Rectangle(-54.5,-70.7,107.6,141.7), new cjs.Rectangle(-54.5,-70.7,107.5,141.7), new cjs.Rectangle(-54.5,-70.7,107.3,142.5), new cjs.Rectangle(-54.5,-70.7,107.1,143.2), new cjs.Rectangle(-54.5,-70.7,106.9,143.8), new cjs.Rectangle(-54.5,-70.7,106.8,144.5), new cjs.Rectangle(-54.5,-70.7,106.5,145.2), new cjs.Rectangle(-54.5,-70.7,106.2,145.7), new cjs.Rectangle(-54.5,-70.7,105.8,146.4), new cjs.Rectangle(-54.5,-70.7,105.5,147), new cjs.Rectangle(-54.5,-70.7,105.2,147.6), new cjs.Rectangle(-54.5,-70.7,104.7,148.3), new cjs.Rectangle(-54.5,-70.7,104.3,148.8), new cjs.Rectangle(-54.5,-70.7,103.8,149.4), new cjs.Rectangle(-54.5,-70.7,103.3,150), new cjs.Rectangle(-54.5,-70.7,102.9,150.4), new cjs.Rectangle(-54.5,-70.7,105.8,155), new cjs.Rectangle(-54.5,-70.7,102.8,150.4), new cjs.Rectangle(-54.5,-70.7,103.3,149.9), new cjs.Rectangle(-54.5,-70.7,103.7,149.4), new cjs.Rectangle(-54.5,-70.7,104.2,148.8), new cjs.Rectangle(-54.5,-70.7,104.5,148.3), new cjs.Rectangle(-54.5,-70.7,104.9,147.8), new cjs.Rectangle(-54.5,-70.7,105.4,147.2), new cjs.Rectangle(-54.5,-70.7,105.7,146.6), new cjs.Rectangle(-54.5,-70.7,106,146), new cjs.Rectangle(-54.5,-70.7,106.3,145.4), new cjs.Rectangle(-54.5,-70.7,106.6,144.7), new cjs.Rectangle(-54.5,-70.7,106.8,144.1), new cjs.Rectangle(-54.5,-70.7,106.9,143.6), new cjs.Rectangle(-54.5,-70.7,107.2,143), new cjs.Rectangle(-54.5,-70.7,107.3,142.2), new cjs.Rectangle(-54.5,-70.7,107.4,141.8), new cjs.Rectangle(-54.5,-70.7,107.6,141.7), new cjs.Rectangle(-54.5,-70.7,107.7,141.7), new cjs.Rectangle(-54.5,-70.7,107.9,141.7), new cjs.Rectangle(-54.5,-70.7,108.2,141.7), new cjs.Rectangle(-54.5,-70.7,108.4,141.7), new cjs.Rectangle(-54.5,-70.7,108.6,141.6), new cjs.Rectangle(-54.5,-70.7,108.7,141.7), new cjs.Rectangle(-54.5,-70.7,108.8,141.6), new cjs.Rectangle(-54.5,-70.7,109,141.5)];


(lib.clambottom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#353534").s().p("AARAZQgRAAgLgOQgLgNABgRQAAgFAFAAQAFAAAAAFQACANAGAJQAHALANAAQAFAAAAAGQAAAFgEAAIgBAAg");
	this.shape.setTransform(18.4,13);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#353534").s().p("AgVATQgGgPgKg+QgBgFAFgBQAFgBABAFIAPBFQANApAgAEQAGABAAAFQAAAFgGABIgBAAQgkAAgRgvg");
	this.shape_1.setTransform(-9.9,14.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#353534").s().p("AgWAVQgSgrgBgsQAAgFAFAAQAFAAAAAFQABAoAPAkQATAxAgACQAFAAABAFQABAFgFAAIgIABQgfAAgVgzg");
	this.shape_2.setTransform(-36.2,14.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#353534").s().p("AAjBEQgjgKgWgrQgTgjAAgrQAAgFAFAAQAFAAABAFQABAoAQAeQASAlAhANQAFADgBAFQgBAEgEAAIgCgBg");
	this.shape_3.setTransform(-49.6,11.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#353531").s().p("AggBOQgJgCgOgIIgVgMIgHgGQgRgPgEgXQgBgKADgNQAEgOAHgJQAQgWAZgNIANgFIAOgEQAKgBASACQAeAEAXALQAdAOALAXQAHALAAAOIgCAMIgDAIIgDAFQgLAMgUAPQgcAUgXAFQgKADgGgDQAAgBgBAAQAAgBgBAAQAAgBAAAAQAAAAgBgBIAAgBIAEABQAEAAAJgDQAUgJAZgVQAPgMAKgNIAEgGIAAgJQgBgKgEgHQgJgQgXgLQgVgKgagEQgQgBgHABIgLADIgLAEQgVAKgNARQgNASACARQABAPANAOIAYATQAMAIAIADIANAGIAFACQAAABgFABIgCAAQgHAAgHgCg");
	this.shape_4.setTransform(-8.1,-14.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FCFCE3").s().p("AgoBCQgJgFgVgNQgngdATgoQATgoAvgKQAlgHAqAWQAxAYgJAoQgFARgqAcQgrAdgJgOIgGAGQgNAAgRgIg");
	this.shape_5.setTransform(-8.1,-14.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#353534").s().p("Ah9A9IAAgRIABgRIAFgTIAFgMQAFgMAMgPIALgNIAPgMIARgJIATgFQAfgIAaAMIAXANIAKAHIAIAFQATALANAAIAWgCIABgDQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBIADAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAABAAQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAIgBABIABABIAAAHIgNAFIgPAEIgKAAIgKgBQgMgEgIgEIgLgGIgJgGQgLgGgKgEQgWgJgXAGIgQAFIgOAHIgNAJIgKAKQgOASgCAEIgGAMIgHAVIgCAKIgDAQQgCANgCAAIAAAAQgCAAgCgNg");
	this.shape_6.setTransform(27.8,1.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C9C7C0").s().p("AhpgOQAUghAggNQAdgMAYAFQAWAFAbATQAVANAOABIAMAAIjbBiQgEgvAWgkgAB3gnIAAgCQABgBAEAAIgFADIgBAGQgNADgJABg");
	this.shape_7.setTransform(28,2.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#353534").s().p("ACjA6QgTgCgagQQgMgHgughQgWgPgMgHQgUgLgQgCIgHAAIgBgBQgngEgnANQgiAMgUATQgQAQgGAUQgEAQgCAAQgCAAAAgRQACgYASgTQAUgaAmgOQAWgIATgDQAYgDAWADIgCAAIAJAAQAVADAXANQAXAPAMAKIA2AqQAXAQARAGIAMAEQABAAABAAQABABAAAAQABAAAAABQAAAAAAAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBABgBAAg");
	this.shape_8.setTransform(5.3,-1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C9C7C0").s().p("AiyA0QAAg0A5geQAzgbA1AIQAhAABBAyQBAAyAjABg");
	this.shape_9.setTransform(5.4,-0.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#353534").s().p("ACuA4Ig0geQgfgRgLgJIABABQgZgQgSgIQgZgMgZgDQgNgDgWACIgiAHQglAIgTAMQgVAMgJATIgHAaQAFABAAABQAAABgIABIgDABIAAgDQgCgQAEgQQAIgZAYgPQAVgPAogLIAkgHQAXgDARADQAfAFAYANQARAHAcAUIAAAAIAAABIAmAaIAfAVIASARQAFAHgBABIgBAAQgBAAgGgEg");
	this.shape_10.setTransform(-21.4,-3.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C9C7C0").s().p("AizAqQAAgqAggVQAZgSA3gMQAngJAnAMQAhAKAoAbQAJAIAqAZQAkAWAJALg");
	this.shape_11.setTransform(-21.2,-3.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#353534").s().p("AhlA1QgGgVACgQQAEgZAVgYIAFgGIAEgEIAEgCIAXgLIAJgDQADgBAPgCIARgBIASADIAYAJIAEADIADADQAKAKAJANIAMAWQALASAHAJIAIALQAAAAAAAAQAAAAgBAAQAAAAgBAAQgBAAgBAAQgEgBgFgEQgMgIgNgTIgOgSQgJgMgIgHIgCgCIgJgEIgNgEIgNgCIgPAAIgPADIgHACIgHADIgNAGIgDACIgGAGQgTAVgGATQgCAIAAAKIAAAOQACAMgCABIAAAAQgCAAgGgLg");
	this.shape_12.setTransform(-44.5,-4.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C9C7C0").s().p("AhFgoQAagQAbgCQAdgDAXAPQANAJAVAhQATAeAOAHIjHAaQgVg0Awgvg");
	this.shape_13.setTransform(-44.2,-4.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#353534").s().p("AgGBRQgBAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAgBIgBgBIAAgBIAAgCIgIgDQgGgDgEgFQgKgKgIgSQgIgTgCgUIAAgWIABgXQACgMACgFQADgGAEgDQAGgEAGAAQAJgBAJAFIANAHIgBgBQAWAOAaAgQAPAUgCADQgCABgTgQQghgdgQgIIgLgGQgFgDgDABIgDADQgBACgBAJIgCApQABAPAFATQAGARAHAIQAFAIAKAIIAAAEIAAACIgBAAIABABQABAAAAAAQABAAAAABQABAAAAAAQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBABg");
	this.shape_14.setTransform(-57.7,-0.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C9C7C0").s().p("AgLBKQgBgBAAgFQgUgJgLgbQgJgYgBgaQABgmAFgKQAHgQAcASQAPAIAWAWQAMALAQATIg6BPQgGAAAAgBg");
	this.shape_15.setTransform(-57.2,-0.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(0,0,0,0.2)").s().p("AmhCoQhEgVg3gpQhJg1gEg8IgBgEQAbAoA7AjQAuAcAwAQQB+AmCggYICPgUQBUgMA6gSQCEgiCAhbQA7gTA9goQAggVBKg5IAAAHQjdD6j4BBQg6AShTAMIiMAUQg+AJg5AAQhaAAhNgXg");
	this.shape_16.setTransform(0.6,2.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#353534").s().p("Al3C5QgJgBgZgHQgPgDgTgIQgdgKgjgUQgkgUgYgWQghgcgPgeIgEgJIgGgTIgCgIQgEgVAGgUQAIgVARgLQANgKAWgHQAdgJArgBQASAAARABIAOACIADAAIARAAQA5ACBOALIB/AVQAKACAUABIBbAFIByAHIBsAHQA5ADApgDQA3gEAigJIAngMQAKgCAagMQA0gXA7goIBKg1IABgBIAAADIAAADIgBALQAAAIgBAAIgBgLIgMAOQgJALgOAPIggAiQg0AzgtAkQhHA3hIAnQgrAXgwATQgmAOhCASQgxAMhBAKIh4ARIhAAIIhBAEIgOABQg/AAg7gNgAovhHQgmALgJAaQgEAOADARIABAHIAFAPIAEAIQAOAbAdAZQAZAWAfASQAcAQAiANQAQAHAQADIAhAIQA+ANBFgBIBBgDIA+gIIB5gQQBAgJAwgMQBDgRAkgOQAsgQAugXQBHglBHg2QAsghA2gzIBJhHIAAgEIgBABIhDA0Qg3Apg4AbQgdANgHACIgoAMQgiAKg5AFQgqADg6gCIhsgFIjNgLQgVgBgLgCIh/gUQhNgLg3gBIgXgBIgMgBQgRgCgRAAQgmABgcAJg");
	this.shape_17.setTransform(0.7,3.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C9C7C0").s().p("AmmCoQhEgWg3goQhJg1gEg8QgEg4BEgRQAwgNA9AIQA/AABUANICSAXQAoADBUAEQBSADAoAEQBkAHAxgBQBSgCA+gSQA/gTBBgpQApgaBHg3IAAAHQhrB3htBLQh8BWiFAjQg6AShVAMIiPAUQg9AJg5AAQhaAAhOgXg");
	this.shape_18.setTransform(1.1,2.8);

	this.instance = new lib.Path_12_1();
	this.instance.parent = this;
	this.instance.setTransform(2.7,-2.6,1,1,0,0,0,33.2,13.7);
	this.instance.alpha = 0.398;

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#470E23").s().p("Ai2COQgygMhDgVIgvgQQgRgGgVgLQgcgOgTgVQgNgQACAAIAOAOQAWATAZALQAQAIAWAHIAwAOQBUAYAgAHQBQAQA/gDQAigBAsgIIBVgQQAegHA8gJQA+gJAegHIAugMQAlgOAIgEQAegPAIgJQAHgHgBgIQgCgIgIgIQgLgNgXgOQgPgKgYgLQgigQgwgSQgxgSghgIQgxgMgggGQioghh5AkQhFATgsARQguARgoAYIgRALIgqAbQgLAIgTASIAAAIIAAAAIgCAAIAAgJQAMgRARgNIAZgTIAggWQAogZAugUQAtgSBFgUQAagIApgHQAjgFAmgBQAjgBApADQAhADAvAIQAqAIApAKQAlAKAvARQAuAQAmASQAeAPALAHQAaARAMAOQAMANACANQADASgMANQgJAKgOAIIgXALQgKAGglANIgwAMQggAHg+AJQg8AJgdAGIhVAQQguAHgjABIgPAAQg9AAhGgRg");
	this.shape_19.setTransform(-9.6,-2.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E01B58").s().p("Ai1CHQgugLhUgaQhggbgfguIgUAAIAAgHQANgRAVgPIAngbQBNgzCCgkQBYgbBsAGQBYAGBsAdQBkAbBKAnQB6BAhZAqQgvAZhKAPIh+AUIhuAWQhBALgyAAQg6AAhIgQg");
	this.shape_20.setTransform(-10,-2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.instance},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.clambottom, rect = new cjs.Rectangle(-63.5,-22.7,127.2,45.6), [rect]);


(lib.SeaweedMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.weed2 = new lib.seaweed();
	this.weed2.parent = this;
	this.weed2.setTransform(-97.8,43,0.699,0.566);

	this.weed3 = new lib.seaweed();
	this.weed3.parent = this;
	this.weed3.setTransform(327.3,21.1,0.699,0.699,0,0,180);

	this.weed0 = new lib.seaweed();
	this.weed0.parent = this;
	this.weed0.setTransform(-357.8,21.1,0.699,0.699);

	this.weed1 = new lib.seaweed();
	this.weed1.parent = this;
	this.weed1.setTransform(-315.3,-6.8,1,1,0,0,180);

	this.weed4 = new lib.seaweed();
	this.weed4.parent = this;
	this.weed4.setTransform(351.9,-6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.weed4},{t:this.weed1},{t:this.weed0},{t:this.weed3},{t:this.weed2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.SeaweedMC, rect = new cjs.Rectangle(-371.7,-95.2,743.6,190.6), [rect]);


(lib.Whale = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_99 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(1));

	// Layer 4
	this.instance = new lib.wiggletongue();
	this.instance.parent = this;
	this.instance.setTransform(29.1,-60.8,1,1,-22.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(91).to({_off:false},0).to({rotation:-24.7,x:26.8,y:-64.3},8).wait(1));

	// Layer 3
	this.whaleSingMouth5 = new lib.whalemouthgroup1();
	this.whaleSingMouth5.parent = this;
	this.whaleSingMouth5.setTransform(51.1,-24.6,1,0.22);

	this.timeline.addTween(cjs.Tween.get(this.whaleSingMouth5).to({scaleY:1.43,rotation:-27.5,x:27.7,y:-61.7},90).to({_off:true},1).wait(9));

	// whalehead
	this.whaleHead = new lib.whalehead();
	this.whaleHead.parent = this;
	this.whaleHead.setTransform(-42,-3.5,1,1,5.5,0,0,-42,45);

	this.timeline.addTween(cjs.Tween.get(this.whaleHead).to({regX:-42.1,scaleX:1,scaleY:1.04,rotation:0,skewX:-13.5,skewY:-15.1,x:-50.9,y:-5.7},91).to({regX:-42,scaleX:1,scaleY:1.05,skewX:-15.3,skewY:-17,x:-51.6,y:-5.9},8).wait(1));

	// whalearmr
	this.instance_1 = new lib.whalearmr();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-8.3,20.8,1,1,31.7,0,0,-9.1,-5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:-9,rotation:-83.3,x:-15.2,y:12.4},99).wait(1));

	// whalebody
	this.instance_2 = new lib.whalebody();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-35.7,72.6,1,1,0,0,0,-5,39.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleY:1.01,skewX:-7.1,y:70.1},99).wait(1));

	// whaletail
	this.instance_3 = new lib.whaletail();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-7.7,60.7,1,1,62.3,0,0,-21,18.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:-20.9,rotation:2.9,x:-7.6,y:58.3},99).wait(1));

	// whalelegr
	this.instance_4 = new lib.whalelegr();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-16.9,80.3,1,1.247,-3.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:9.8,x:-15.6,y:83.8},99).wait(1));

	// whalelegl
	this.instance_5 = new lib.whalelegl();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-53.5,83.6,1,1.149,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleY:1.38,rotation:-16.7,y:81.7},99).wait(1));

	// whalearmback
	this.instance_6 = new lib.whalearml();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-58.9,18.1,1,1,-19.7,0,0,7.9,-5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:8,rotation:49.2,y:15.6},99).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-98.4,-101.4,203.5,201.4);
p.frameBounds = [rect, new cjs.Rectangle(-97.7,-95.3,199.9,194.9), new cjs.Rectangle(-97.8,-95.5,199.6,195.1), new cjs.Rectangle(-98,-95.7,199.4,195.4), new cjs.Rectangle(-98.2,-95.9,199.3,195.5), new cjs.Rectangle(-98.3,-96.2,199.2,195.9), new cjs.Rectangle(-98.4,-96.3,199,196), new cjs.Rectangle(-98.6,-96.5,199.1,196.3), new cjs.Rectangle(-98.7,-96.8,199,196.6), new cjs.Rectangle(-98.8,-97,198.9,196.8), new cjs.Rectangle(-98.9,-97.2,198.8,197.1), new cjs.Rectangle(-99.1,-97.5,198.6,197.4), new cjs.Rectangle(-99.2,-97.6,198.5,197.6), new cjs.Rectangle(-99.3,-97.8,198.5,197.8), new cjs.Rectangle(-99.4,-98,198.3,198.1), new cjs.Rectangle(-99.6,-98.3,198.2,198.4), new cjs.Rectangle(-99.7,-98.6,198.1,198.6), new cjs.Rectangle(-99.8,-98.8,198,199), new cjs.Rectangle(-100,-99.1,197.8,199.4), new cjs.Rectangle(-100.2,-99.3,197.7,199.6), new cjs.Rectangle(-100.2,-99.7,197.7,200), new cjs.Rectangle(-100.3,-99.9,197.5,200.3), new cjs.Rectangle(-100.5,-100,197.3,200.4), new cjs.Rectangle(-100.5,-100.2,197.1,200.7), new cjs.Rectangle(-100.7,-100.6,197.1,201.1), new cjs.Rectangle(-100.9,-100.6,196.9,201.2), new cjs.Rectangle(-101,-100.9,196.9,201.5), new cjs.Rectangle(-101.1,-101.3,196.8,201.9), new cjs.Rectangle(-101.2,-101.6,196.6,202.3), new cjs.Rectangle(-101.4,-101.8,196.5,202.6), new cjs.Rectangle(-101.5,-102.2,196.3,203), new cjs.Rectangle(-101.6,-102.5,196.1,203.3), new cjs.Rectangle(-101.7,-102.8,196,203.7), new cjs.Rectangle(-101.8,-102.9,195.9,203.8), new cjs.Rectangle(-101.9,-103.3,195.6,204.1), new cjs.Rectangle(-102,-103.6,195.4,204.6), new cjs.Rectangle(-102.1,-104,195.2,205), new cjs.Rectangle(-102.3,-104.3,195,205.4), new cjs.Rectangle(-102.3,-104.7,194.9,205.8), new cjs.Rectangle(-102.4,-105.1,194.8,206.2), new cjs.Rectangle(-102.6,-105.4,194.5,206.5), new cjs.Rectangle(-102.7,-105.8,194.3,207.1), new cjs.Rectangle(-102.8,-106.1,194.1,207.4), new cjs.Rectangle(-103,-106.3,193.9,207.6), new cjs.Rectangle(-103.1,-106.7,193.8,208), new cjs.Rectangle(-103.2,-107,193.5,208.4), new cjs.Rectangle(-103.3,-107.5,193.4,208.9), new cjs.Rectangle(-103.5,-107.9,193.1,209.3), new cjs.Rectangle(-103.5,-108.3,192.9,209.8), new cjs.Rectangle(-103.7,-108.7,192.6,210.3), new cjs.Rectangle(-103.8,-109.1,192.5,210.7), new cjs.Rectangle(-103.9,-109.6,192.2,211.2), new cjs.Rectangle(-103.9,-109.9,191.9,211.5), new cjs.Rectangle(-104,-110.1,191.8,211.7), new cjs.Rectangle(-104.1,-110.5,191.6,212.3), new cjs.Rectangle(-104.3,-111,191.3,212.8), new cjs.Rectangle(-104.3,-111.5,191.1,213.3), new cjs.Rectangle(-104.5,-111.9,190.9,213.7), new cjs.Rectangle(-104.5,-112.4,190.6,214.2), new cjs.Rectangle(-104.7,-112.9,190.3,214.8), new cjs.Rectangle(-104.7,-113.3,190,215.3), new cjs.Rectangle(-104.9,-113.8,189.8,215.8), new cjs.Rectangle(-104.9,-114.4,189.6,216.4), new cjs.Rectangle(-105.1,-114.9,189.3,217.1), new cjs.Rectangle(-105.2,-114.9,189.1,217.1), new cjs.Rectangle(-105.4,-115.4,188.9,217.5), new cjs.Rectangle(-105.4,-115.9,188.6,218.1), new cjs.Rectangle(-105.5,-116.4,188.3,218.6), new cjs.Rectangle(-105.5,-116.9,188.1,219.1), new cjs.Rectangle(-105.6,-117.3,187.7,219.6), new cjs.Rectangle(-105.7,-117.9,187.5,220.3), new cjs.Rectangle(-105.7,-118.3,187.1,220.7), new cjs.Rectangle(-105.9,-118.9,186.8,221.3), new cjs.Rectangle(-106,-119.3,186.4,221.8), new cjs.Rectangle(-106.1,-119.5,186.4,222), new cjs.Rectangle(-106.1,-119.9,186.1,222.4), new cjs.Rectangle(-106.3,-120.4,185.7,223), new cjs.Rectangle(-106.3,-120.8,185.4,223.3), new cjs.Rectangle(-106.4,-121.3,185.1,224), new cjs.Rectangle(-106.5,-121.7,184.7,224.4), new cjs.Rectangle(-106.6,-122.3,184.5,225), new cjs.Rectangle(-106.6,-122.7,184.2,225.4), new cjs.Rectangle(-106.8,-123.2,183.9,226), new cjs.Rectangle(-106.8,-123.5,183.5,226.4), new cjs.Rectangle(-106.9,-123.7,183.3,226.5), new cjs.Rectangle(-107,-124.1,182.9,227), new cjs.Rectangle(-107.1,-124.7,182.6,227.7), new cjs.Rectangle(-107.2,-125.2,182.4,228.2), new cjs.Rectangle(-107.3,-125.7,182,228.7), new cjs.Rectangle(-107.3,-126.1,181.6,229.1), new cjs.Rectangle(-107.4,-126.7,181.3,229.9), new cjs.Rectangle(-116.2,-138.5,200.3,241.6), new cjs.Rectangle(-107.5,-127.7,180.5,230.9), new cjs.Rectangle(-107.6,-128.3,180.3,231.5), new cjs.Rectangle(-107.7,-128.7,179.9,232), new cjs.Rectangle(-107.7,-129.3,179.5,232.6), new cjs.Rectangle(-107.9,-129.7,179.2,233.1), new cjs.Rectangle(-107.9,-130.3,178.8,233.7), new cjs.Rectangle(-108,-130.7,178.4,234.1), new cjs.Rectangle(-118,-143,200.2,247.7)];


(lib.Shark = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_99 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(1));

	// Layer 2
	this.frontArm = new lib.frontarm();
	this.frontArm.parent = this;
	this.frontArm.setTransform(57.5,12.5,1,1,0,0,0,0,-19.1);

	this.timeline.addTween(cjs.Tween.get(this.frontArm).to({regX:0.1,regY:-19,rotation:11,x:59.5,y:14.1},9).to({regX:0,rotation:20.4,x:60.5,y:17.6},20).to({regX:0.1,rotation:40.6,x:63.5,y:21.1},20).to({rotation:48.8,x:63.6,y:24.9},20).to({regY:-18.9,rotation:72,x:63.4,y:28.1},20).to({rotation:77.9,x:63.9,y:30.1},10).wait(1));

	// Layer 3
	this.topHead = new lib.tophead();
	this.topHead.parent = this;
	this.topHead.setTransform(24.4,-78.9,1,1,0,0,0,60,-14.1);

	this.timeline.addTween(cjs.Tween.get(this.topHead).to({regX:60.1,rotation:5.9,x:30.3,y:-79},9).to({rotation:16.8,x:35.4,y:-79.1},20).to({regY:-14,rotation:32.5,x:43.9,y:-77.6},20).to({rotation:42.8,x:50.9,y:-76.4},20).to({rotation:55,x:60.1,y:-73.5},20).to({rotation:61.2,x:63.8,y:-72.6},10).wait(1));

	// Layer 5
	this.bottomHead = new lib.bottomhead();
	this.bottomHead.parent = this;
	this.bottomHead.setTransform(33.2,-64.9,1,1,0,0,0,47.7,-18.2);

	this.timeline.addTween(cjs.Tween.get(this.bottomHead).to({rotation:-3.3,x:38.6,y:-64.7},9).to({regX:47.8,regY:-18.1,rotation:-7.5,x:43.1,y:-64.2},20).to({regY:-18.2,rotation:-10.3,x:50.1,y:-62.3},20).to({rotation:-15.3,x:55.8,y:-60.6},20).to({rotation:-18.2,x:63.2,y:-57.3},20).to({rotation:-20.7,x:66.3,y:-56.2},10).wait(1));

	// Layer 4
	this.body = new lib.body();
	this.body.parent = this;
	this.body.setTransform(20,80.8,1,1,0,0,0,0,48);

	this.timeline.addTween(cjs.Tween.get(this.body).to({scaleY:1,skewX:2.5},9).to({skewY:4.8},20).to({regX:-0.1,regY:47.9,scaleX:1,skewX:4.7,skewY:9.7,y:80.7},20).to({regX:0,scaleX:1.01,skewX:6.4,skewY:15.1},20).to({regX:-0.1,skewX:8.6,skewY:17.3},20).to({regY:48,scaleX:1.02,skewX:9.8,skewY:20.8,y:80.8},10).wait(1));

	// Layer 2
	this.instance = new lib.tongue();
	this.instance.parent = this;
	this.instance.setTransform(23.1,-69.3,1,1,-14.2,0,0,32.5,-13.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({x:26.1,y:-59.8},20).to({rotation:-14.7,x:35.1,y:-61.8},20).to({rotation:-5.8,x:47.7,y:-54.3},20).to({rotation:-4.3,x:50.3,y:-54.2},6).to({rotation:-1.2,x:56.6,y:-53.8},14).to({regY:-13.2,rotation:11.7,x:59.5,y:-53.1},10).wait(1));

	// Layer 6
	this.neckAndFin = new lib.neckandfin();
	this.neckAndFin.parent = this;
	this.neckAndFin.setTransform(23.4,6.4,1,1,0,0,0,0,57);

	this.timeline.addTween(cjs.Tween.get(this.neckAndFin).to({rotation:1.7,x:26.7,y:6.2},9).to({rotation:4.8,y:5.9},19).to({regX:0.1,rotation:5.2,x:26.8,y:5.8},1).to({rotation:11.8,x:27},20).to({regY:57.1,scaleX:0.92,rotation:16.5,x:30.3,y:6.5},20).to({regX:0,rotation:22.8,x:30.6,y:6.6},20).to({rotation:25.2,x:30.9,y:6.2},10).wait(1));

	// Layer 7
	this.backArm = new lib.backarm();
	this.backArm.parent = this;
	this.backArm.setTransform(10.2,12.2,1,1,-49.2,0,0,22.6,0);

	this.timeline.addTween(cjs.Tween.get(this.backArm).to({rotation:-33.7},9).to({regX:22.7,regY:-0.1,rotation:-18.1,x:11.8,y:12.1},20).to({rotation:-0.4,x:15.2,y:10.6},20).to({regX:22.6,regY:0,rotation:10.6,y:10.7},20).to({rotation:35.5,x:25.1,y:13.2},20).to({regY:0.1,rotation:38.5,x:26.6,y:13.3},10).wait(1));

	// Layer 8
	this.legs = new lib.legs();
	this.legs.parent = this;
	this.legs.setTransform(17.4,74.3,1,1,0,0,0,0,-15);

	this.timeline.addTween(cjs.Tween.get(this.legs).to({scaleX:0.98},9).to({scaleX:0.96,skewY:1.5},20).to({scaleX:0.94,skewY:4.5,x:18.7},20).to({scaleX:0.92,scaleY:1,skewX:-2,skewY:7.6,x:19.4,y:74.4},20).to({scaleX:0.9,x:20.2,y:74.5},20).to({regX:-0.1,regY:-14.9,scaleX:0.88,x:20.9,y:74.7},10).wait(1));

	// Layer 9
	this.tail = new lib.backtail();
	this.tail.parent = this;
	this.tail.setTransform(57.3,73.7,1,1,0,0,0,-16,19);

	this.timeline.addTween(cjs.Tween.get(this.tail).to({rotation:4.2},9).to({regX:-16.1,regY:19.1,rotation:9.1,x:55.2,y:77.8},20).to({regY:19,rotation:16.3,x:56.2,y:82.9},20).to({rotation:23.8,x:53.7,y:88.8},20).to({rotation:32.5,x:54.7,y:87.4},20).to({regX:-16,rotation:35,x:54.8,y:90.6},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-104.5,-117,209.1,236.8);
p.frameBounds = [rect, new cjs.Rectangle(-103.7,-116.9,208.3,236.7), new cjs.Rectangle(-102.9,-116.9,207.7,236.7), new cjs.Rectangle(-102.1,-116.9,207.1,236.7), new cjs.Rectangle(-101.3,-116.9,206.4,236.7), new cjs.Rectangle(-100.5,-116.9,205.7,236.7), new cjs.Rectangle(-99.7,-116.8,205,236.6), new cjs.Rectangle(-98.8,-116.8,204.3,236.6), new cjs.Rectangle(-98,-116.8,203.5,236.6), new cjs.Rectangle(-102.5,-119.5,210.7,239.3), new cjs.Rectangle(-96.6,-116.7,202.2,236.5), new cjs.Rectangle(-96.2,-116.7,201.8,236.5), new cjs.Rectangle(-95.6,-116.7,201.1,236.5), new cjs.Rectangle(-95.1,-116.6,200.6,236.5), new cjs.Rectangle(-94.6,-116.6,200,236.5), new cjs.Rectangle(-94.1,-116.6,199.5,236.5), new cjs.Rectangle(-93.6,-116.5,198.9,236.5), new cjs.Rectangle(-92.9,-117.4,198.3,237.3), new cjs.Rectangle(-92.4,-117.9,197.7,237.9), new cjs.Rectangle(-91.9,-118.6,197.1,238.5), new cjs.Rectangle(-91.3,-119.4,196.5,239.4), new cjs.Rectangle(-90.7,-120.2,195.8,240.2), new cjs.Rectangle(-90.2,-121.3,195.2,241.3), new cjs.Rectangle(-89.7,-122.1,194.7,242.2), new cjs.Rectangle(-89.3,-122.9,194.2,243), new cjs.Rectangle(-88.9,-123.7,193.8,243.8), new cjs.Rectangle(-88.4,-124.7,193.4,244.8), new cjs.Rectangle(-87.9,-125.7,192.9,245.9), new cjs.Rectangle(-87.4,-126.6,192.5,246.8), new cjs.Rectangle(-100.5,-142.5,210.7,263.1), new cjs.Rectangle(-86.4,-128.8,191.9,249.1), new cjs.Rectangle(-85.7,-130.1,191.6,250.4), new cjs.Rectangle(-84.9,-131.3,191.1,251.7), new cjs.Rectangle(-84.2,-132.6,190.9,253), new cjs.Rectangle(-83.3,-134.2,190.2,254.6), new cjs.Rectangle(-82.6,-135.4,189.8,255.9), new cjs.Rectangle(-81.8,-136.7,189.3,257.3), new cjs.Rectangle(-81,-138,188.9,258.6), new cjs.Rectangle(-80.3,-139.2,188.4,259.9), new cjs.Rectangle(-79.4,-140.5,187.8,261.1), new cjs.Rectangle(-78.5,-141.8,187.3,262.6), new cjs.Rectangle(-77.6,-143.4,186.6,264.2), new cjs.Rectangle(-76.8,-144.6,186.3,265.5), new cjs.Rectangle(-75.9,-145.9,185.5,266.9), new cjs.Rectangle(-75.1,-147.2,185.1,268.2), new cjs.Rectangle(-74.1,-148.5,184.4,269.5), new cjs.Rectangle(-73.3,-149.8,183.9,270.9), new cjs.Rectangle(-72.3,-151.1,183.1,272.3), new cjs.Rectangle(-71.2,-152.6,182.3,273.8), new cjs.Rectangle(-87.9,-170.1,204.1,292.2), new cjs.Rectangle(-69.7,-154.8,181.2,276.1), new cjs.Rectangle(-69.1,-155.6,180.7,277), new cjs.Rectangle(-68.3,-156.4,180,277.8), new cjs.Rectangle(-67.5,-157.2,179.4,278.7), new cjs.Rectangle(-66.9,-158,178.8,279.6), new cjs.Rectangle(-66.1,-158.8,178.2,280.4), new cjs.Rectangle(-65.4,-159.6,177.6,281.3), new cjs.Rectangle(-64.6,-160.5,176.9,282.3), new cjs.Rectangle(-63.9,-161.2,176.3,283), new cjs.Rectangle(-63.2,-162,175.7,283.9), new cjs.Rectangle(-62.4,-162.8,174.9,284.8), new cjs.Rectangle(-61.7,-163.5,174.3,285.5), new cjs.Rectangle(-60.8,-164.3,173.5,286.5), new cjs.Rectangle(-60.1,-165.1,172.9,287.3), new cjs.Rectangle(-59.4,-165.9,172.3,288.2), new cjs.Rectangle(-58.5,-166.6,171.5,288.9), new cjs.Rectangle(-57.8,-167.3,170.8,289.7), new cjs.Rectangle(-56.8,-168.4,170,290.9), new cjs.Rectangle(-56,-169.1,169.1,291.6), new cjs.Rectangle(-72.9,-184.1,190.8,307.9), new cjs.Rectangle(-54.2,-170.5,167.8,292.9), new cjs.Rectangle(-53.2,-171.5,167,294), new cjs.Rectangle(-52.1,-172.1,166.2,294.6), new cjs.Rectangle(-51.2,-172.8,165.6,295.3), new cjs.Rectangle(-50,-173.7,164.6,296.2), new cjs.Rectangle(-49.1,-174.4,163.9,296.8), new cjs.Rectangle(-47.9,-175.2,163,297.7), new cjs.Rectangle(-46.9,-175.8,162.3,298.3), new cjs.Rectangle(-45.8,-176.6,161.4,299.1), new cjs.Rectangle(-44.8,-177.3,160.6,299.7), new cjs.Rectangle(-43.7,-177.9,159.8,300.4), new cjs.Rectangle(-42.6,-178.7,158.9,301.2), new cjs.Rectangle(-41.5,-179.2,158.1,301.7), new cjs.Rectangle(-40.3,-180.1,157.1,302.6), new cjs.Rectangle(-39.2,-180.6,156.2,303.1), new cjs.Rectangle(-38.1,-181.3,155.3,303.9), new cjs.Rectangle(-37,-181.8,154.4,304.4), new cjs.Rectangle(-36,-182.4,153.6,304.9), new cjs.Rectangle(-34.7,-183.1,152.6,305.6), new cjs.Rectangle(-49.1,-194.8,171.5,318.6), new cjs.Rectangle(-32.5,-184.2,150.7,306.7), new cjs.Rectangle(-31.4,-184.8,149.7,307.4), new cjs.Rectangle(-30.5,-185.5,148.9,308), new cjs.Rectangle(-29.7,-186,148.2,308.5), new cjs.Rectangle(-28.9,-186.7,147.5,309.3), new cjs.Rectangle(-28.1,-187.2,146.8,309.8), new cjs.Rectangle(-27.2,-187.8,145.8,310.4), new cjs.Rectangle(-26.4,-188.3,145.1,310.9), new cjs.Rectangle(-25.5,-189,144.3,311.6), new cjs.Rectangle(-36,-198.8,159,323.8)];


(lib.Fish = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_99 = function() {
		//stop();
		///* js
		//this.stop();
		//*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(1));

	// idle
	this.instance = new lib.fishIdle();
	this.instance.parent = this;
	this.instance.setTransform(-4.4,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},7).wait(93));

	// mouth
	this.mouth = new lib.fishmouth();
	this.mouth.parent = this;
	this.mouth.setTransform(-28.9,17.3,0.643,0.143);
	this.mouth._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mouth).wait(7).to({_off:false},0).to({scaleX:1.1,scaleY:1,x:-31.9,y:1.3},92).wait(1));

	// fishbod
	this.body = new lib.fishbody();
	this.body.parent = this;
	this.body.setTransform(18.3,-1,1,0.83,0,0,0,33,-1);
	this.body._off = true;

	this.timeline.addTween(cjs.Tween.get(this.body).wait(7).to({_off:false},0).to({regY:-0.9,scaleX:1.06,scaleY:1.02,rotation:6.2,x:18.2,y:-15.4},92).wait(1));

	// fishtail
	this.instance_1 = new lib.fishtail();
	this.instance_1.parent = this;
	this.instance_1.setTransform(25,-4,1,0.868,9.5,0,0,-12,-4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).to({regX:-12.1,regY:-4.1,scaleX:1.03,scaleY:0.95,rotation:0,skewY:13.1,y:-17.1},92).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69.2,-58.9,129.4,117.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-69.2,-59.3,119.6,117.7), new cjs.Rectangle(-69.2,-59.6,119.6,118), new cjs.Rectangle(-69.2,-59.9,119.6,118.3), new cjs.Rectangle(-69.2,-60.2,119.5,118.4), new cjs.Rectangle(-69.3,-60.5,119.5,118.7), new cjs.Rectangle(-69.4,-60.7,119.6,118.9), new cjs.Rectangle(-69.4,-61.1,119.6,119.3), new cjs.Rectangle(-69.3,-61.5,119.5,119.4), new cjs.Rectangle(-69.4,-61.7,119.5,119.6), new cjs.Rectangle(-69.4,-62,119.5,119.9), new cjs.Rectangle(-69.4,-62.3,119.4,120.1), new cjs.Rectangle(-69.4,-62.7,119.4,120.3), new cjs.Rectangle(-69.5,-63.1,119.4,120.6), new cjs.Rectangle(-69.6,-63.4,119.5,120.9), new cjs.Rectangle(-69.5,-63.7,119.3,121), new cjs.Rectangle(-69.5,-64,119.3,121.2), new cjs.Rectangle(-69.6,-64.3,119.3,121.5), new cjs.Rectangle(-69.7,-64.6,119.3,121.8), new cjs.Rectangle(-69.6,-65,119.4,122), new cjs.Rectangle(-69.7,-65.3,119.5,122.2), new cjs.Rectangle(-69.7,-65.6,119.6,122.5), new cjs.Rectangle(-69.8,-65.9,119.8,122.7), new cjs.Rectangle(-69.7,-66.3,119.7,122.9), new cjs.Rectangle(-69.8,-66.5,119.9,123.2), new cjs.Rectangle(-69.8,-66.9,120,123.5), new cjs.Rectangle(-69.8,-67.2,120,123.5), new cjs.Rectangle(-69.8,-67.5,120.2,123.8), new cjs.Rectangle(-69.9,-67.8,120.4,124.1), new cjs.Rectangle(-69.9,-68.1,120.5,124.4), new cjs.Rectangle(-69.9,-68.4,120.5,124.4), new cjs.Rectangle(-70,-68.8,120.6,124.7), new cjs.Rectangle(-70,-69.1,120.8,125), new cjs.Rectangle(-70,-69.4,120.8,125.3), new cjs.Rectangle(-70,-69.7,120.9,125.4), new cjs.Rectangle(-70,-70.1,120.9,125.7), new cjs.Rectangle(-70.1,-70.4,121,125.9), new cjs.Rectangle(-70.1,-70.7,121.2,126.1), new cjs.Rectangle(-70.1,-71,121.2,126.4), new cjs.Rectangle(-70.2,-71.3,121.5,126.6), new cjs.Rectangle(-70.2,-71.6,121.5,127), new cjs.Rectangle(-70.2,-72,121.7,127), new cjs.Rectangle(-70.4,-72.3,121.9,127.3), new cjs.Rectangle(-70.4,-72.6,121.9,127.6), new cjs.Rectangle(-70.5,-72.9,122.1,127.9), new cjs.Rectangle(-70.5,-73.2,122.2,127.9), new cjs.Rectangle(-70.5,-73.5,122.4,128.1), new cjs.Rectangle(-70.6,-73.8,122.4,128.5), new cjs.Rectangle(-70.6,-74.2,122.4,128.6), new cjs.Rectangle(-70.7,-74.5,122.8,128.8), new cjs.Rectangle(-70.9,-74.8,122.9,129.1), new cjs.Rectangle(-70.9,-75.1,123,129.4), new cjs.Rectangle(-70.9,-75.5,123.1,129.5), new cjs.Rectangle(-71,-75.8,123.1,129.8), new cjs.Rectangle(-71,-76.1,123.4,130.1), new cjs.Rectangle(-71.1,-76.4,123.4,130.4), new cjs.Rectangle(-71.1,-76.7,123.7,130.5), new cjs.Rectangle(-71.2,-77,123.8,130.7), new cjs.Rectangle(-71.3,-77.4,124,131), new cjs.Rectangle(-71.3,-77.7,123.9,131.2), new cjs.Rectangle(-71.3,-78,124,131.5), new cjs.Rectangle(-71.4,-78.3,124.3,131.8), new cjs.Rectangle(-71.5,-78.5,124.4,132), new cjs.Rectangle(-71.5,-78.9,124.6,132.4), new cjs.Rectangle(-71.6,-79.2,124.7,132.7), new cjs.Rectangle(-71.6,-79.5,124.7,133), new cjs.Rectangle(-71.7,-79.9,125,133.3), new cjs.Rectangle(-71.7,-80.2,125.1,133.7), new cjs.Rectangle(-71.8,-80.5,125.3,134), new cjs.Rectangle(-71.8,-80.8,125.4,134.2), new cjs.Rectangle(-71.9,-81.2,125.6,134.6), new cjs.Rectangle(-72,-81.5,125.7,134.9), new cjs.Rectangle(-72,-81.7,125.7,135.2), new cjs.Rectangle(-72,-82.1,125.9,135.5), new cjs.Rectangle(-72.1,-82.4,126,135.8), new cjs.Rectangle(-72.2,-82.8,126.3,136.2), new cjs.Rectangle(-72.2,-83,126.3,136.4), new cjs.Rectangle(-72.3,-83.3,126.4,136.8), new cjs.Rectangle(-72.3,-83.7,126.7,137.1), new cjs.Rectangle(-72.3,-84,126.6,137.3), new cjs.Rectangle(-72.4,-84.3,126.9,137.7), new cjs.Rectangle(-72.5,-84.6,126.9,138.1), new cjs.Rectangle(-72.5,-84.9,127.2,138.3), new cjs.Rectangle(-72.6,-85.3,127.3,138.6), new cjs.Rectangle(-72.7,-85.5,127.4,138.9), new cjs.Rectangle(-72.7,-85.9,127.6,139.3), new cjs.Rectangle(-72.8,-86.1,127.7,139.6), new cjs.Rectangle(-72.8,-86.5,127.9,139.9), new cjs.Rectangle(-72.9,-86.8,127.9,140.1), new cjs.Rectangle(-72.9,-87.2,127.9,140.5), new cjs.Rectangle(-73,-87.5,128.2,140.8), new cjs.Rectangle(-73,-87.8,128.2,141.1), new cjs.Rectangle(-79,-92.2,134.3,146)];


(lib.Clam = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_99 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(1));

	// clamtop
	this.instance = new lib.clamtop();
	this.instance.parent = this;
	this.instance.setTransform(64.4,-0.1,1,1,-20,0,0,63.9,22.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:64,regY:23,rotation:27,x:64.1,y:8.8},99).wait(1));

	// clambottom
	this.instance_1 = new lib.clambottom();
	this.instance_1.parent = this;
	this.instance_1.setTransform(5.9,22.4,1,1,-7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:0,x:3,y:23.4},99).wait(1));

	// clammid
	this.instance_2 = new lib.clammid();
	this.instance_2.parent = this;
	this.instance_2.setTransform(17.7,3.7,1,1,-7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.68,scaleY:1.47,rotation:0,x:32.1,y:-4.5},99).wait(1));

	// Layer 2
	this.instance_3 = new lib.Path_2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(5.5,35.1,1,1,0,0,0,71.4,23.6);
	this.instance_3.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77.6,-48.2,154.5,107);
p.frameBounds = [rect, new cjs.Rectangle(-70.2,-30.4,147.1,89.2), new cjs.Rectangle(-70.2,-30.8,147.2,89.6), new cjs.Rectangle(-70.4,-31.4,147.3,90.2), new cjs.Rectangle(-70.6,-32,147.5,90.8), new cjs.Rectangle(-70.7,-32.5,147.7,91.3), new cjs.Rectangle(-70.9,-33.1,147.9,91.9), new cjs.Rectangle(-71.1,-33.6,148,92.4), new cjs.Rectangle(-71.1,-34.2,148.1,93), new cjs.Rectangle(-71.2,-34.8,148.2,93.6), new cjs.Rectangle(-71.3,-35.3,148.3,94.1), new cjs.Rectangle(-71.4,-35.7,148.4,94.5), new cjs.Rectangle(-71.5,-36.2,148.5,95), new cjs.Rectangle(-71.6,-36.8,148.6,95.6), new cjs.Rectangle(-71.7,-37.3,148.6,96.1), new cjs.Rectangle(-71.7,-37.9,148.6,96.7), new cjs.Rectangle(-71.8,-38.4,148.8,97.2), new cjs.Rectangle(-71.9,-38.9,148.8,97.7), new cjs.Rectangle(-71.9,-39.5,148.9,98.3), new cjs.Rectangle(-71.9,-40.1,148.9,98.9), new cjs.Rectangle(-72,-40.6,148.9,99.4), new cjs.Rectangle(-72,-40.9,148.9,99.7), new cjs.Rectangle(-72,-41.4,148.9,100.2), new cjs.Rectangle(-72,-42,148.9,100.8), new cjs.Rectangle(-72,-42.5,148.9,101.3), new cjs.Rectangle(-72,-43.1,148.9,101.9), new cjs.Rectangle(-72,-43.5,148.9,102.3), new cjs.Rectangle(-72,-44.1,148.9,102.9), new cjs.Rectangle(-71.9,-44.7,148.8,103.5), new cjs.Rectangle(-71.8,-45.2,148.8,104), new cjs.Rectangle(-71.7,-45.6,148.7,104.4), new cjs.Rectangle(-71.7,-45.9,148.7,104.7), new cjs.Rectangle(-71.6,-46.4,148.6,105.2), new cjs.Rectangle(-71.5,-46.9,148.5,105.7), new cjs.Rectangle(-71.4,-47.5,148.3,106.3), new cjs.Rectangle(-71.3,-47.8,148.2,106.6), new cjs.Rectangle(-71.2,-48.4,148.2,107.2), new cjs.Rectangle(-71,-48.9,148,107.7), new cjs.Rectangle(-71,-49.4,147.9,108.2), new cjs.Rectangle(-70.8,-49.9,147.7,108.7), new cjs.Rectangle(-70.7,-50.1,147.6,108.9), new cjs.Rectangle(-70.5,-50.6,147.5,109.4), new cjs.Rectangle(-70.4,-51,147.4,109.8), new cjs.Rectangle(-70.2,-51.4,147.2,110.2), new cjs.Rectangle(-70,-51.8,147,110.6), new cjs.Rectangle(-69.8,-52.2,146.8,111), new cjs.Rectangle(-69.6,-52.6,146.6,111.4), new cjs.Rectangle(-69.4,-53.1,146.3,111.9), new cjs.Rectangle(-69.2,-53.5,146.1,112.3), new cjs.Rectangle(-68.9,-54,145.8,112.8), new cjs.Rectangle(-68.7,-54.2,145.7,113), new cjs.Rectangle(-68.5,-54.6,145.4,113.4), new cjs.Rectangle(-68.2,-55,145.2,113.8), new cjs.Rectangle(-67.9,-55.5,144.9,114.3), new cjs.Rectangle(-67.6,-56,144.5,114.8), new cjs.Rectangle(-67.3,-56.3,144.2,115.1), new cjs.Rectangle(-67,-56.8,143.9,115.6), new cjs.Rectangle(-66.6,-57.2,143.6,116), new cjs.Rectangle(-66.3,-57.6,143.3,116.4), new cjs.Rectangle(-66.1,-57.8,143.1,116.6), new cjs.Rectangle(-65.8,-58.2,142.8,117), new cjs.Rectangle(-65.8,-58.6,142.8,117.4), new cjs.Rectangle(-65.8,-59.2,142.8,118), new cjs.Rectangle(-65.8,-59.9,142.8,118.7), new cjs.Rectangle(-65.8,-60.7,142.8,119.5), new cjs.Rectangle(-65.8,-61.4,142.8,120.2), new cjs.Rectangle(-65.8,-62.1,142.8,120.9), new cjs.Rectangle(-65.8,-62.9,142.8,121.7), new cjs.Rectangle(-65.8,-63.7,142.8,122.5), new cjs.Rectangle(-65.8,-64.1,142.8,122.9), new cjs.Rectangle(-65.8,-64.9,142.8,123.7), new cjs.Rectangle(-65.8,-65.5,142.8,124.3), new cjs.Rectangle(-65.8,-66.4,142.8,125.2), new cjs.Rectangle(-65.8,-67.1,142.8,125.9), new cjs.Rectangle(-65.8,-67.9,142.8,126.7), new cjs.Rectangle(-65.8,-68.6,142.8,127.4), new cjs.Rectangle(-65.8,-69.3,142.8,128.1), new cjs.Rectangle(-65.8,-70.1,142.8,128.9), new cjs.Rectangle(-65.8,-70.5,142.8,129.3), new cjs.Rectangle(-65.8,-71.2,142.8,130), new cjs.Rectangle(-65.8,-72,142.8,130.8), new cjs.Rectangle(-65.8,-72.6,142.8,131.4), new cjs.Rectangle(-65.8,-73.4,142.8,132.2), new cjs.Rectangle(-65.8,-74.1,142.8,132.9), new cjs.Rectangle(-65.8,-74.9,142.8,133.7), new cjs.Rectangle(-65.8,-75.5,142.8,134.3), new cjs.Rectangle(-65.8,-76.3,142.8,135.1), new cjs.Rectangle(-65.8,-77,142.8,135.8), new cjs.Rectangle(-65.8,-77.4,142.8,136.2), new cjs.Rectangle(-65.8,-78,142.8,136.8), new cjs.Rectangle(-65.8,-78.7,142.8,137.5), new cjs.Rectangle(-65.8,-79.4,142.8,138.2), new cjs.Rectangle(-65.8,-80.1,142.8,138.9), new cjs.Rectangle(-65.8,-80.8,142.8,139.6), new cjs.Rectangle(-65.8,-81.4,142.8,140.2), new cjs.Rectangle(-65.8,-82.1,142.8,140.9), new cjs.Rectangle(-65.8,-82.7,142.8,141.5), new cjs.Rectangle(-65.8,-83.4,142.8,142.2), new cjs.Rectangle(-65.8,-83.8,142.8,142.6), new cjs.Rectangle(-65.8,-96.1,155.6,154.9)];


(lib.wormswing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// wormtail
	this.instance = new lib.wormtail();
	this.instance.parent = this;
	this.instance.setTransform(-10.4,56.7,1,0.932,-7,0,0,-10.8,-22.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-22.2,scaleY:1.03,rotation:4,x:-10.3},19).to({regY:-22.1,scaleY:0.93,rotation:-7,x:-10.4},20).wait(1));

	// wormhook
	this.instance_1 = new lib.wormhook();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-31.4,-111.4,1,1,0,0,0,-21.1,-101.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

	// wormbody
	this.topHalf = new lib.wormbody();
	this.topHalf.parent = this;
	this.topHalf.setTransform(-18.9,69.6,1,0.938,0,0,0,-22.6,45.6);

	this.timeline.addTween(cjs.Tween.get(this.topHalf).to({regX:-22.5,regY:45.7,scaleY:0.99,rotation:-4.9,x:-18.7,y:69.7},19).to({regX:-22.6,regY:45.6,scaleY:0.94,rotation:0,x:-18.9,y:69.6},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.6,-450.1,100.5,561.4);
p.frameBounds = [rect, new cjs.Rectangle(-50.6,-450.1,100.2,560.1), new cjs.Rectangle(-50.6,-450.1,99.8,560.4), new cjs.Rectangle(-50.6,-450.1,99.5,560.7), new cjs.Rectangle(-50.6,-450.1,99.3,561.1), new cjs.Rectangle(-50.6,-450.1,99,561.4), new cjs.Rectangle(-50.6,-450.1,98.6,561.9), new cjs.Rectangle(-50.6,-450.1,98.3,562.3), new cjs.Rectangle(-50.6,-450.1,97.9,562.6), new cjs.Rectangle(-50.6,-450.1,97.6,562.9), new cjs.Rectangle(-50.6,-450.1,97.3,563.2), new cjs.Rectangle(-50.6,-450.1,97,563.6), new cjs.Rectangle(-50.6,-450.1,96.7,563.9), new cjs.Rectangle(-50.6,-450.1,96.3,564.3), new cjs.Rectangle(-50.6,-450.1,95.9,564.6), new cjs.Rectangle(-50.6,-450.1,95.6,564.9), new cjs.Rectangle(-50.6,-450.1,95.3,565.2), new cjs.Rectangle(-50.6,-450.1,95,565.5), new cjs.Rectangle(-50.6,-450.1,94.6,565.8), new cjs.Rectangle(-52.8,-450.1,97.4,568.3), new cjs.Rectangle(-50.6,-450.1,94.5,565.9), new cjs.Rectangle(-50.6,-450.1,94.9,565.6), new cjs.Rectangle(-50.6,-450.1,95.2,565.4), new cjs.Rectangle(-50.6,-450.1,95.5,565), new cjs.Rectangle(-50.6,-450.1,95.9,564.7), new cjs.Rectangle(-50.6,-450.1,96.2,564.4), new cjs.Rectangle(-50.6,-450.1,96.5,564.2), new cjs.Rectangle(-50.6,-450.1,96.9,563.9), new cjs.Rectangle(-50.6,-450.1,97.2,563.5), new cjs.Rectangle(-50.6,-450.1,97.6,563.2), new cjs.Rectangle(-50.6,-450.1,97.9,562.8), new cjs.Rectangle(-50.6,-450.1,98.2,562.5), new cjs.Rectangle(-50.6,-450.1,98.5,562.1), new cjs.Rectangle(-50.6,-450.1,98.8,561.8), new cjs.Rectangle(-50.6,-450.1,99,561.4), new cjs.Rectangle(-50.6,-450.1,99.2,561.1), new cjs.Rectangle(-50.6,-450.1,99.5,560.8), new cjs.Rectangle(-50.6,-450.1,99.8,560.4), new cjs.Rectangle(-50.6,-450.1,100.1,560.1), new cjs.Rectangle(-50.6,-450.1,100.5,561.4)];


(lib.Worm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_99 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(1));

	// wormtail
	this.instance = new lib.wormtail();
	this.instance.parent = this;
	this.instance.setTransform(-10.2,55.6,1,0.932,-7,0,0,-10.7,-22.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).to({rotation:-14.2,y:55.7},93).wait(1));

	// wormhook
	this.instance_1 = new lib.wormhook();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-31.5,-112.5,1,1,0,0,0,-21.1,-101.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).wait(94));

	// Layer 7
	this.instance_2 = new lib.wormmouth1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(31.3,-1.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({x:30.3,y:-2.6},12).to({_off:true},1).wait(81));

	// Layer 11
	this.instance_3 = new lib.wormmouth2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(30.1,-1.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).to({rotation:-3.7,x:27.6,y:-2.7},19).to({_off:true},1).wait(61));

	// Layer 10
	this.instance_4 = new lib.wormmouth3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(27.6,-1.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(39).to({_off:false},0).to({rotation:-3.5,x:24.1,y:-3.5},22).to({_off:true},1).wait(38));

	// Layer 9
	this.instance_5 = new lib.wormmouth4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(23.5,0.2,1,1,-3);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(62).to({_off:false},0).to({rotation:-7.2,x:21.5,y:-2.3},21).to({_off:true},1).wait(16));

	// Layer 8
	this.instance_6 = new lib.wormmouth5();
	this.instance_6.parent = this;
	this.instance_6.setTransform(21.5,-2.1,1,0.827,-11.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(84).to({_off:false},0).to({scaleY:0.94,rotation:-13.4,x:19.8,y:-1.7},15).wait(1));

	// topHalf
	this.instance_7 = new lib.wormVolumeBody();
	this.instance_7.parent = this;
	this.instance_7.setTransform(1,26.3);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(6).to({_off:false},0).to({rotation:-9,x:-6.3,y:21.8},93).wait(1));

	// wormswangin
	this.wormIdle = new lib.wormswing();
	this.wormIdle.parent = this;
	this.wormIdle.setTransform(-31,-120,1,1,0,0,0,-31,-119);

	this.timeline.addTween(cjs.Tween.get(this.wormIdle).to({_off:true},6).wait(94));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.6,-451.2,100.5,561.3);
p.frameBounds = [rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-50.6,-451.2,101.8,561.4), rect=new cjs.Rectangle(-50.6,-451.2,101.7,559.6), rect, new cjs.Rectangle(-50.6,-451.2,101.6,559.7), new cjs.Rectangle(-50.6,-451.2,101.5,559.7), new cjs.Rectangle(-50.6,-451.2,101.4,559.6), new cjs.Rectangle(-50.6,-451.2,101.3,559.6), rect=new cjs.Rectangle(-50.6,-451.2,101.2,559.6), rect, new cjs.Rectangle(-50.6,-451.2,101.1,559.6), new cjs.Rectangle(-50.6,-451.2,101,559.6), new cjs.Rectangle(-50.6,-451.2,100.9,559.6), new cjs.Rectangle(-50.6,-451.2,100.8,559.6), new cjs.Rectangle(-50.6,-451.2,100.7,559.5), new cjs.Rectangle(-50.6,-451.2,100.5,559.6), new cjs.Rectangle(-50.6,-451.2,100.4,559.5), new cjs.Rectangle(-50.6,-451.2,100.2,559.5), new cjs.Rectangle(-50.6,-451.2,100.1,559.4), new cjs.Rectangle(-50.6,-451.2,100,559.5), new cjs.Rectangle(-50.6,-451.2,99.8,559.5), new cjs.Rectangle(-50.6,-451.2,99.7,559.5), new cjs.Rectangle(-50.6,-451.2,99.6,559.5), new cjs.Rectangle(-50.6,-451.2,99.5,559.4), new cjs.Rectangle(-50.6,-451.2,99.4,559.4), new cjs.Rectangle(-50.6,-451.2,99.1,559.4), new cjs.Rectangle(-50.6,-451.2,99,559.4), new cjs.Rectangle(-50.6,-451.2,98.9,559.3), rect=new cjs.Rectangle(-50.6,-451.2,98.7,559.4), rect, new cjs.Rectangle(-50.6,-451.2,98.5,559.3), new cjs.Rectangle(-50.6,-451.2,98.4,559.3), new cjs.Rectangle(-50.6,-451.2,98.2,559.3), new cjs.Rectangle(-50.6,-451.2,98.6,559.3), new cjs.Rectangle(-50.6,-451.2,98.7,559.3), new cjs.Rectangle(-50.6,-451.2,98.5,559.3), new cjs.Rectangle(-50.6,-451.2,98.4,559.4), new cjs.Rectangle(-50.6,-451.2,98.2,559.3), new cjs.Rectangle(-50.6,-451.2,98.1,559.2), new cjs.Rectangle(-50.6,-451.2,97.9,559.3), new cjs.Rectangle(-50.6,-451.2,97.7,559.2), new cjs.Rectangle(-50.6,-451.2,97.6,559.2), new cjs.Rectangle(-50.6,-451.2,97.4,559.2), new cjs.Rectangle(-50.6,-451.2,97.2,559.2), new cjs.Rectangle(-50.6,-451.2,97.1,559.2), new cjs.Rectangle(-50.6,-451.2,96.9,559.2), new cjs.Rectangle(-50.6,-451.2,96.8,559.1), new cjs.Rectangle(-50.6,-451.2,96.6,559.1), new cjs.Rectangle(-50.6,-451.2,96.4,559.1), new cjs.Rectangle(-50.6,-451.2,96.2,559.1), new cjs.Rectangle(-50.6,-451.2,96.1,559.1), new cjs.Rectangle(-50.6,-451.2,95.9,559.1), new cjs.Rectangle(-50.6,-451.2,95.8,559.1), new cjs.Rectangle(-50.6,-451.2,95.7,559.1), new cjs.Rectangle(-50.6,-451.2,95.4,559), new cjs.Rectangle(-50.6,-451.2,95.3,559.1), new cjs.Rectangle(-50.6,-451.2,95.7,559), new cjs.Rectangle(-50.6,-451.2,96.1,559), new cjs.Rectangle(-50.6,-451.2,95.1,559), new cjs.Rectangle(-50.6,-451.2,95,558.9), new cjs.Rectangle(-50.6,-451.2,94.9,558.9), new cjs.Rectangle(-50.6,-451.2,94.8,559), new cjs.Rectangle(-50.6,-451.2,94.7,559), new cjs.Rectangle(-50.6,-451.2,94.6,559), new cjs.Rectangle(-50.6,-451.2,94.5,559), new cjs.Rectangle(-50.6,-451.2,94.3,559), new cjs.Rectangle(-50.6,-451.2,94.2,558.9), new cjs.Rectangle(-50.6,-451.2,94.1,558.9), new cjs.Rectangle(-50.6,-451.2,94,558.9), new cjs.Rectangle(-50.6,-451.2,93.9,558.9), new cjs.Rectangle(-50.6,-451.2,93.7,558.8), new cjs.Rectangle(-50.6,-451.2,93.6,558.9), rect=new cjs.Rectangle(-50.6,-451.2,93.4,558.8), rect, new cjs.Rectangle(-50.6,-451.2,93.3,558.7), new cjs.Rectangle(-50.6,-451.2,93.2,558.7), new cjs.Rectangle(-50.6,-451.2,93.1,558.7), new cjs.Rectangle(-50.6,-451.2,92.9,558.7), new cjs.Rectangle(-50.6,-451.2,95,558.7), new cjs.Rectangle(-50.6,-451.2,95.7,558.7), new cjs.Rectangle(-50.6,-451.2,92.4,558.7), new cjs.Rectangle(-50.6,-451.2,92.2,558.7), new cjs.Rectangle(-50.6,-451.2,92,558.6), new cjs.Rectangle(-50.6,-451.2,91.9,558.6), new cjs.Rectangle(-50.6,-451.2,91.8,558.6), new cjs.Rectangle(-50.6,-451.2,91.6,558.6), new cjs.Rectangle(-50.6,-451.2,91.5,558.6), new cjs.Rectangle(-50.6,-451.2,91.4,558.6), new cjs.Rectangle(-50.6,-451.2,91.2,558.5), new cjs.Rectangle(-50.6,-451.2,91.1,558.6), new cjs.Rectangle(-50.6,-451.2,91,558.5), new cjs.Rectangle(-50.6,-451.2,90.9,558.5), new cjs.Rectangle(-50.6,-451.2,90.7,558.5), new cjs.Rectangle(-50.6,-451.2,90.5,558.4), new cjs.Rectangle(-59.8,-451.2,107.1,561.8)];


// stage content:
(lib.Orcastra_Art = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect];
// library properties:
lib.properties = {
	width: 800,
	height: 600,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"../images/clam.png?1491252063567", id:"clam"},
		{src:"../images/CreateJSImage.png?1491252063567", id:"CreateJSImage"},
		{src:"../images/fish.png?1491252063567", id:"fish"},
		{src:"../images/gskinner.png?1491252063567", id:"gskinner"},
		{src:"../images/orcaestracurtain.png?1491252063567", id:"orcaestracurtain"},
		{src:"../images/shark.png?1491252063567", id:"shark"},
		{src:"../images/SpotlightBottom.png?1491252063567", id:"SpotlightBottom"},
		{src:"../images/SpotlightTop.png?1491252063567", id:"SpotlightTop"},
		{src:"../images/SwitchBtn.png?1491252063567", id:"SwitchBtn"},
		{src:"../images/underwatersing.png?1491252063567", id:"underwatersing"},
		{src:"../images/whale.png?1491252063567", id:"whale"},
		{src:"../images/worm.png?1491252063567", id:"worm"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;