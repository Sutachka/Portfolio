(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Мультик Дамбо_atlas_1", frames: [[593,214,112,77],[566,593,319,300],[593,0,351,212],[0,0,591,591],[0,593,564,317]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Колесо = function() {
	this.initialize(ss["Мультик Дамбо_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ТуловищеДамбо = function() {
	this.initialize(ss["Мультик Дамбо_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Туловищемашины = function() {
	this.initialize(ss["Мультик Дамбо_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.УхоДамбо = function() {
	this.initialize(ss["Мультик Дамбо_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Фонцирк = function() {
	this.initialize(ss["Мультик Дамбо_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.Символ2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Колесо();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,112,77), null);


(lib.Символ1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.УхоДамбо();
	this.instance.setTransform(0,0,0.489,0.489);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(0,0,289,289), null);


(lib.УхоДамбо_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Символ1();
	this.instance.setTransform(289,144.5,1,1,0,0,0,289,144.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:144.5,scaleX:0.9788,x:147.55},0).wait(1).to({scaleX:0.9577,x:150.6},0).wait(1).to({scaleX:0.9365,x:153.65},0).wait(1).to({scaleX:0.9154,x:156.7},0).wait(1).to({scaleX:0.8942,x:159.75},0).wait(1).to({scaleX:0.873,x:162.8},0).wait(1).to({scaleX:0.8519,x:165.9},0).wait(1).to({scaleX:0.8307,x:168.95},0).wait(1).to({scaleX:0.8096,x:172},0).wait(1).to({scaleX:0.8307,x:168.95},0).wait(1).to({scaleX:0.8519,x:165.9},0).wait(1).to({scaleX:0.873,x:162.8},0).wait(1).to({scaleX:0.8942,x:159.75},0).wait(1).to({scaleX:0.9153,x:156.7},0).wait(1).to({scaleX:0.9365,x:153.65},0).wait(1).to({scaleX:0.9577,x:150.6},0).wait(1).to({scaleX:0.9788,x:147.55},0).wait(1).to({scaleX:1,x:144.5},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,289.1,289);


(lib.Колесо_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Символ2();
	this.instance.setTransform(56,38.5,1,1.3636,0,0,0,56,38.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:38.5,scaleY:1.2886,y:38.65},0).wait(1).to({scaleY:1.2135},0).wait(1).to({scaleY:1.1384},0).wait(1).to({scaleY:1.0633},0).wait(1).to({scaleY:0.9883,y:38.6},0).wait(1).to({scaleY:0.9132,y:38.55},0).wait(1).to({scaleY:0.8381},0).wait(1).to({scaleY:0.7631,y:38.6},0).wait(1).to({scaleY:0.688,y:38.55},0).wait(1).to({scaleY:0.7426},0).wait(1).to({scaleY:0.7973},0).wait(1).to({scaleY:0.8519},0).wait(1).to({scaleY:0.9066,y:38.6},0).wait(1).to({scaleY:0.9612},0).wait(1).to({scaleY:1.0158,y:38.65},0).wait(1).to({scaleY:1.0705},0).wait(1).to({scaleY:1.1251},0).wait(1).to({scaleY:1.1798},0).wait(1).to({scaleY:1.2344},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-13.8,112,105);


(lib.Дамбо = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.ТуловищеДамбо();
	this.instance.setTransform(67.25,30.05);

	this.instance_1 = new lib.УхоДамбо_1();
	this.instance_1.setTransform(309.1,144.5,1,1,0,0,180,144.5,144.5);

	this.instance_2 = new lib.УхоДамбо_1();
	this.instance_2.setTransform(144.5,148.55,1,1,0,0,0,144.5,144.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Дамбо, new cjs.Rectangle(0,0,453.6,330.1), null);


(lib.Символ4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Колесо_1();
	this.instance.setTransform(164.95,103,0.7733,0.7733,0,0,0,56,38.8);

	this.instance_1 = new lib.Колесо_1();
	this.instance_1.setTransform(44.6,99.9,0.7733,0.7733,0,0,0,56,38.8);

	this.instance_2 = new lib.Туловищемашины();
	this.instance_2.setTransform(0,0,0.6165,0.6165);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,216.4,143.5), null);


(lib.Машина = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Символ4();
	this.instance.setTransform(66,87.45,1,1,0,0,0,108.2,71.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:71.7,x:48.5,y:87.35},0).wait(1).to({x:30.95,y:87.4},0).wait(1).to({x:13.4},0).wait(1).to({x:-4.15,y:87.45},0).wait(1).to({x:-21.7},0).wait(1).to({x:-39.2,y:87.5},0).wait(1).to({x:-56.75},0).wait(1).to({x:-74.3,y:87.55},0).wait(1).to({x:-91.85},0).wait(1).to({x:-109.4,y:87.6},0).wait(1).to({x:-126.95},0).wait(1).to({x:-144.45,y:87.65},0).wait(1).to({x:-162},0).wait(1).to({x:-179.55,y:87.7},0).wait(1).to({x:-197.1},0).wait(1).to({x:-214.65,y:87.75},0).wait(1).to({x:-232.2},0).wait(1).to({x:-249.7,y:87.8},0).wait(1).to({x:-267.25},0).wait(1).to({x:-284.8,y:87.85},0).wait(1).to({x:-302.35,y:87.9},0).wait(1).to({x:-319.9},0).wait(1).to({x:-337.45,y:87.95},0).wait(1).to({x:-354.95},0).wait(1).to({x:-372.5,y:88},0).wait(1).to({x:-390.05},0).wait(1).to({x:-407.6,y:88.05},0).wait(1).to({x:-425.15},0).wait(1).to({x:-442.7,y:88.1},0).wait(1).to({x:-460.2},0).wait(1).to({x:-477.75,y:88.15},0).wait(1).to({x:-495.3},0).wait(1).to({x:-512.85,y:88.2},0).wait(1).to({x:-530.4},0).wait(1).to({x:-547.95,y:88.25},0).wait(1).to({x:-565.45},0).wait(1).to({x:-583,y:88.3},0).wait(1).to({x:-600.55},0).wait(1).to({x:-618.1,y:88.35},0).wait(1).to({x:-635.65,y:88.4},0).wait(1).to({x:-653.2},0).wait(1).to({x:-670.7,y:88.45},0).wait(1).to({x:-688.25},0).wait(1).to({x:-705.8,y:88.5},0).wait(1).to({x:-723.35},0).wait(1).to({x:-740.9,y:88.55},0).wait(1).to({x:-758.45},0).wait(1).to({x:-775.95,y:88.6},0).wait(1).to({x:-793.5},0).wait(1).to({x:-811.05,y:88.65},0).wait(1).to({x:-828.6},0).wait(1).to({x:-846.15,y:88.7},0).wait(1).to({x:-863.7},0).wait(1).to({x:-881.2,y:88.75},0).wait(1).to({x:-898.75},0).wait(1).to({x:-916.3,y:88.8},0).wait(1).to({x:-933.85},0).wait(1).to({x:-951.4,y:88.85},0).wait(1).to({x:-968.95,y:88.9},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1077.1,15.7,1251.3,145);


// stage content:
(lib.МультикДамбо = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Машина
	this.instance = new lib.Машина();
	this.instance.setTransform(1200.2,629.9,1,1,0,0,0,108.2,71.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-451.5,regY:88.2,x:623.25,y:646.3},0).wait(1).to({x:606,y:646.35},0).wait(1).to({x:588.75,y:646.4},0).wait(1).to({x:571.5,y:646.45},0).wait(1).to({x:554.25,y:646.5},0).wait(1).to({x:537,y:646.55},0).wait(1).to({x:519.75,y:646.6},0).wait(1).to({x:502.5,y:646.65},0).wait(1).to({x:485.25,y:646.7},0).wait(1).to({x:468,y:646.75},0).wait(1).to({x:450.75,y:646.8},0).wait(1).to({x:433.5,y:646.85},0).wait(1).to({x:416.25,y:646.9},0).wait(1).to({x:399,y:646.95},0).wait(1).to({x:381.75},0).wait(1).to({x:364.5,y:647},0).wait(1).to({x:347.25,y:647.05},0).wait(1).to({x:330,y:647.1},0).wait(1).to({x:312.75,y:647.15},0).wait(1).to({x:295.5,y:647.2},0).wait(1).to({x:278.25,y:647.25},0).wait(1).to({x:261,y:647.3},0).wait(1).to({x:243.75,y:647.35},0).wait(1).to({x:226.5,y:647.4},0).wait(1).to({x:209.25,y:647.45},0).wait(1).to({x:192,y:647.5},0).wait(1).to({x:174.75,y:647.55},0).wait(1).to({x:157.5,y:647.6},0).wait(1).to({x:140.25,y:647.65},0).wait(1).to({x:123},0).wait(1).to({x:105.75,y:647.7},0).wait(1).to({x:88.5,y:647.75},0).wait(1).to({x:71.25,y:647.8},0).wait(1).to({x:54,y:647.85},0).wait(1).to({x:36.75,y:647.9},0).wait(1).to({x:19.5,y:647.95},0).wait(1).to({x:2.25,y:648},0).wait(1).to({x:-15,y:648.05},0).wait(1).to({x:-32.25,y:648.1},0).wait(1).to({x:-49.5,y:648.15},0).wait(1).to({x:-66.75,y:648.2},0).wait(1).to({x:-84,y:648.25},0).wait(1).to({x:-101.25,y:648.3},0).wait(1).to({x:-118.5,y:648.35},0).wait(1).to({x:-135.75},0).wait(1).to({x:-153,y:648.4},0).wait(1).to({x:-170.25,y:648.45},0).wait(1).to({x:-187.5,y:648.5},0).wait(1).to({x:-204.75,y:648.55},0).wait(1).to({x:-222,y:648.6},0).wait(1).to({x:-239.25,y:648.65},0).wait(1).to({x:-256.5,y:648.7},0).wait(1).to({x:-273.75,y:648.75},0).wait(1).to({x:-291,y:648.8},0).wait(1).to({x:-308.25,y:648.85},0).wait(1).to({x:-325.5,y:648.9},0).wait(1).to({x:-342.75,y:648.95},0).wait(1).to({x:-360,y:649},0).wait(1).to({x:-377.25,y:649.05},0).to({_off:true},1).wait(4));

	// Дамбо
	this.instance_1 = new lib.Дамбо();
	this.instance_1.setTransform(600.85,389.55,0.7725,0.7725,0,0,0,226.8,165);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:600.8,y:379.95},0).wait(1).to({y:370.35},0).wait(1).to({y:360.75},0).wait(1).to({y:351.15},0).wait(1).to({y:341.55},0).wait(1).to({y:331.95},0).wait(1).to({y:322.35},0).wait(1).to({y:312.75},0).wait(1).to({y:303.15},0).wait(1).to({y:293.6},0).wait(1).to({y:284},0).wait(1).to({y:274.4},0).wait(1).to({y:264.8},0).wait(1).to({y:255.2},0).wait(1).to({y:245.6},0).wait(1).to({y:236},0).wait(1).to({y:226.4},0).wait(1).to({y:216.8},0).wait(1).to({y:207.2},0).wait(1).to({y:197.65},0).wait(1).to({y:188.05},0).wait(1).to({y:178.45},0).wait(1).to({y:168.85},0).wait(1).to({y:159.25},0).wait(1).to({y:149.65},0).wait(1).to({y:140.05},0).wait(1).to({y:130.45},0).wait(1).to({y:120.9},0).wait(1).to({y:111.3},0).wait(1).to({y:120.35},0).wait(1).to({y:129.3},0).wait(1).to({y:138.3},0).wait(1).to({y:147.35},0).wait(1).to({y:156.35},0).wait(1).to({y:165.35},0).wait(1).to({y:174.4},0).wait(1).to({y:183.4},0).wait(1).to({y:192.4},0).wait(1).to({y:201.45},0).wait(1).to({y:210.45},0).wait(1).to({y:219.45},0).wait(1).to({y:228.5},0).wait(1).to({y:237.5},0).wait(1).to({y:246.5},0).wait(1).to({y:255.55},0).wait(1).to({y:264.55},0).wait(1).to({y:273.55},0).wait(1).to({y:282.6},0).wait(1).to({y:291.6},0).wait(1).to({y:300.6},0).wait(1).to({y:309.65},0).wait(1).to({y:318.65},0).wait(1).to({y:327.65},0).wait(1).to({y:336.7},0).wait(1).to({y:345.7},0).wait(1).to({y:354.7},0).wait(1).to({y:363.75},0).wait(1).to({y:372.75},0).wait(1).to({y:381.75},0).to({_off:true},1).wait(4));

	// Дамбо
	this.instance_2 = new lib.Дамбо();
	this.instance_2.setTransform(1147.5,466.7,0.4623,0.4623,-2.3608,0,0,226.7,165);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:226.8,rotation:-5.3769,x:1137.75,y:439},0).wait(1).to({rotation:-8.8986,x:1127.25,y:413.9},0).wait(1).to({rotation:-12.9315,x:1116,y:391.35},0).wait(1).to({rotation:-17.5322,x:1104.05,y:371.25},0).wait(1).to({rotation:-22.7401,x:1091.35,y:353.6},0).wait(1).to({rotation:-28.5616,x:1077.9,y:338.3},0).wait(1).to({rotation:-34.9498,x:1063.75,y:325.3},0).wait(1).to({rotation:-41.7893,x:1048.9,y:314.5},0).wait(1).to({rotation:-48.8945,x:1033.3,y:305.85},0).wait(1).to({rotation:-56.0321,x:1017,y:299.3},0).wait(1).to({rotation:-62.9614,x:999.9,y:294.8},0).wait(1).to({rotation:-69.4787,x:982.15,y:292.3},0).wait(1).to({rotation:-75.446,x:963.65,y:291.7},0).wait(1).to({rotation:-80.797,x:944.4,y:293.05},0).wait(1).to({rotation:-85.523,x:924.45,y:296.15},0).wait(1).to({rotation:-89.655,x:903.8,y:301.05},0).wait(1).to({rotation:-93.247,x:882.3,y:307.7},0).wait(1).to({rotation:-96.358,x:860.1,y:316},0).wait(1).to({rotation:-99.049,x:837.2,y:325.9},0).wait(1).to({rotation:-101.377,x:813.5,y:337.4},0).wait(1).to({rotation:-103.39,x:789.05,y:350.45},0).wait(1).to({rotation:-105.132,x:763.9,y:365},0).wait(1).to({rotation:-106.64,x:737.9,y:380.9},0).wait(1).to({rotation:-107.945,x:711.1,y:398.25},0).wait(1).to({rotation:-109.072,x:683.6,y:416.95},0).wait(1).to({rotation:-110.044,x:655.2,y:436.9},0).wait(1).to({rotation:-110.879,x:626.1,y:458.2},0).wait(1).to({rotation:-111.593,x:596.15,y:480.65},0).wait(1).to({rotation:-112.198,x:565.4,y:504.25},0).wait(1).to({rotation:-96.246,x:540.8,y:514.95},0).wait(1).to({rotation:-92.76,x:516.75,y:523.85},0).wait(1).to({rotation:-88.981,x:493.35,y:530.7},0).wait(1).to({rotation:-84.903,x:470.7,y:535.8},0).wait(1).to({rotation:-80.53,x:448.7,y:539},0).wait(1).to({rotation:-75.878,x:427.35,y:540.4},0).wait(1).to({rotation:-70.9815,x:406.65,y:540.1},0).wait(1).to({rotation:-65.8884,x:386.75,y:538},0).wait(1).to({rotation:-60.6637,x:367.45,y:534.2},0).wait(1).to({rotation:-55.3833,x:348.8,y:528.75},0).wait(1).to({rotation:-50.1277,x:330.95,y:521.65},0).wait(1).to({rotation:-44.975,x:313.7,y:512.9},0).wait(1).to({rotation:-39.9935,x:297.25,y:502.6},0).wait(1).to({rotation:-35.2375,x:281.45,y:490.75},0).wait(1).to({rotation:-30.7445,x:266.35,y:477.45},0).wait(1).to({rotation:-26.5361,x:252,y:462.65},0).wait(1).to({rotation:-22.6195,x:238.35,y:446.45},0).wait(1).to({rotation:-18.9912,x:225.3,y:428.8},0).wait(1).to({rotation:-15.6398,x:213.05,y:409.85},0).wait(1).to({rotation:-12.5487,x:201.5,y:389.55},0).wait(1).to({rotation:-9.6986,x:190.7,y:368.05},0).wait(1).to({rotation:-7.0692,x:180.55,y:345.25},0).wait(1).to({rotation:-4.6401,x:171.1,y:321.25},0).wait(1).to({rotation:-2.3921,x:162.45,y:296.15},0).wait(1).to({rotation:-0.3067,x:154.45,y:269.9},0).wait(1).to({rotation:1.6327,x:147.2,y:242.6},0).wait(1).to({rotation:3.4413,x:140.55,y:214.25},0).wait(1).to({rotation:5.1331,x:134.8,y:184.9},0).wait(1).to({rotation:6.7202,x:129.6,y:154.65},0).wait(1).to({rotation:8.2138,x:125.1,y:123.5},0).to({_off:true},1).wait(4));

	// Дамбо
	this.instance_3 = new lib.Дамбо();
	this.instance_3.setTransform(77.65,508.6,0.3839,0.3839,0,0,0,202.2,165);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:226.8,scaleX:0.384,scaleY:0.384,rotation:8.5778,x:87.15,y:496.25},0).wait(1).to({scaleX:0.3839,scaleY:0.3839,rotation:18.9648,x:89.5,y:484.35},0).wait(1).to({rotation:26.7302,x:93.85,y:472.65},0).wait(1).to({rotation:34.3699,x:99.65,y:461.5},0).wait(1).to({rotation:36.7429,x:107,y:450.3},0).wait(1).to({rotation:38.3332,x:114.75,y:439.2},0).wait(1).to({rotation:39.9617,x:122.8,y:428.25},0).wait(1).to({rotation:41.927,x:131.15,y:417.75},0).wait(1).to({rotation:44.6314,x:139.8,y:407.6},0).wait(1).to({rotation:50.8355,x:148.7,y:398.35},0).wait(1).to({rotation:56.7602,x:158.75,y:390.45},0).wait(1).to({rotation:59.7432,x:169.75,y:382.9},0).wait(1).to({rotation:62.1976,x:181.15,y:375.9},0).wait(1).to({rotation:64.6253,x:192.85,y:369.4},0).wait(1).to({rotation:67.2699,x:204.75,y:363.35},0).wait(1).to({rotation:70.3722,x:216.95,y:358},0).wait(1).to({rotation:74.2497,x:229.3,y:353.4},0).wait(1).to({rotation:83.1656,x:241.2,y:350.25},0).wait(1).to({rotation:89.1121,x:253.95,y:348.85},0).wait(1).to({rotation:92.52,x:267.15,y:348.45},0).wait(1).to({rotation:94.8108,x:280.55,y:348.75},0).wait(1).to({rotation:96.5077,x:294.1,y:349.4},0).wait(1).to({rotation:97.8564,x:307.65,y:350.55},0).wait(1).to({rotation:98.9904,x:321.2,y:351.9},0).wait(1).to({rotation:99.9997,x:334.7,y:353.55},0).wait(1).to({rotation:100.961,x:348.25,y:355.45},0).wait(1).to({scaleX:0.384,scaleY:0.384,rotation:101.973,x:361.7,y:357.55},0).wait(1).to({scaleX:0.3839,scaleY:0.3839,rotation:103.299,x:375.05,y:359.9},0).wait(1).to({rotation:107.725,x:387.85,y:362.6},0).wait(1).to({scaleX:0.384,scaleY:0.384,rotation:100.095,x:419.4,y:367.15},0).wait(1).to({scaleX:0.3839,scaleY:0.3839,rotation:99.1851,x:449.95,y:370.95},0).wait(1).to({rotation:98.2574,x:480.6,y:374.2},0).wait(1).to({rotation:97.3087,x:511.25,y:377},0).wait(1).to({rotation:96.3355,x:542,y:379.3},0).wait(1).to({rotation:95.3334,x:572.7,y:381.05},0).wait(1).to({rotation:94.2986,x:603.45,y:382.25},0).wait(1).to({rotation:93.2229,x:634.3,y:382.9},0).wait(1).to({rotation:92.1025,x:665.1,y:382.95},0).wait(1).to({rotation:90.9282,x:695.95,y:382.4},0).wait(1).to({rotation:89.6912,x:726.75,y:381.15},0).wait(1).to({rotation:88.3817,x:757.6,y:379.25},0).wait(1).to({rotation:86.9845,x:788.35,y:376.65},0).wait(1).to({rotation:85.4843,x:819,y:373.2},0).wait(1).to({rotation:83.8627,x:849.6,y:368.95},0).wait(1).to({rotation:82.0925,x:880.15,y:363.8},0).wait(1).to({rotation:80.1464,x:910.5,y:357.7},0).wait(1).to({rotation:77.9794,x:940.6,y:350.45},0).wait(1).to({rotation:75.5392,x:970.5,y:341.95},0).wait(1).to({rotation:72.7608,x:999.95,y:332.15},0).wait(1).to({rotation:69.5499,x:1029,y:320.85},0).wait(1).to({rotation:65.7837,x:1057.35,y:307.7},0).wait(1).to({rotation:61.3021,x:1084.8,y:292.5},0).wait(1).to({rotation:55.9016,x:1110.95,y:274.95},0).wait(1).to({rotation:49.334,x:1135.35,y:254.65},0).wait(1).to({rotation:41.3791,x:1157.05,y:231.25},0).wait(1).to({rotation:31.9766,x:1175.15,y:204.7},0).wait(1).to({rotation:21.4478,x:1188.4,y:175.2},0).wait(1).to({rotation:10.5881,x:1195.95,y:143.7},0).wait(1).to({scaleX:0.384,scaleY:0.384,rotation:0.3808,x:1197.55,y:111.5},0).to({_off:true},1).wait(4));

	// Фон_цирк_jpg
	this.instance_4 = new lib.Фонцирк();
	this.instance_4.setTransform(-15,0,2.319,2.319);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},60).wait(4));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1293.1,735.2);
// library properties:
lib.properties = {
	id: '08C22144AC0EA647832E835F60DAF696',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Мультик Дамбо_atlas_1.png", id:"Мультик Дамбо_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['08C22144AC0EA647832E835F60DAF696'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;