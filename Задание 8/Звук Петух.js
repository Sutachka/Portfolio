(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Звук Петух_atlas_1", frames: [[566,1697,188,236],[0,1798,564,180],[462,978,439,296],[465,1276,260,419],[727,1276,260,419],[0,0,861,976],[0,978,460,423],[0,1403,463,393]]},
		{name:"Звук Петух_atlas_2", frames: [[0,0,1483,1521]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.currentSoundStreamInMovieclip;
	this.soundStreamDuration = new Map();
	this.streamSoundSymbolsList = [];

	this.gotoAndPlayForStreamSoundSync = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.gotoAndPlay = function(positionOrLabel){
		this.clearAllSoundStreams();
		var pos = this.timeline.resolve(positionOrLabel);
		if (pos != null) { this.startStreamSoundsForTargetedFrame(pos); }
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(this.currentFrame);
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		this.clearAllSoundStreams();
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
		this.clearAllSoundStreams();
	}
	this.startStreamSoundsForTargetedFrame = function(targetFrame){
		for(var index=0; index<this.streamSoundSymbolsList.length; index++){
			if(index <= targetFrame && this.streamSoundSymbolsList[index] != undefined){
				for(var i=0; i<this.streamSoundSymbolsList[index].length; i++){
					var sound = this.streamSoundSymbolsList[index][i];
					if(sound.endFrame > targetFrame){
						var targetPosition = Math.abs((((targetFrame - sound.startFrame)/lib.properties.fps) * 1000));
						var instance = playSound(sound.id);
						var remainingLoop = 0;
						if(sound.offset){
							targetPosition = targetPosition + sound.offset;
						}
						else if(sound.loop > 1){
							var loop = targetPosition /instance.duration;
							remainingLoop = Math.floor(sound.loop - loop);
							if(targetPosition == 0){ remainingLoop -= 1; }
							targetPosition = targetPosition % instance.duration;
						}
						instance.loop = remainingLoop;
						instance.position = Math.round(targetPosition);
						this.InsertIntoSoundStreamData(instance, sound.startFrame, sound.endFrame, sound.loop , sound.offset);
					}
				}
			}
		}
	}
	this.InsertIntoSoundStreamData = function(soundInstance, startIndex, endIndex, loopValue, offsetValue){ 
 		this.soundStreamDuration.set({instance:soundInstance}, {start: startIndex, end:endIndex, loop:loopValue, offset:offsetValue});
	}
	this.clearAllSoundStreams = function(){
		this.soundStreamDuration.forEach(function(value,key){
			key.instance.stop();
		});
 		this.soundStreamDuration.clear();
		this.currentSoundStreamInMovieclip = undefined;
	}
	this.stopSoundStreams = function(currentFrame){
		if(this.soundStreamDuration.size > 0){
			var _this = this;
			this.soundStreamDuration.forEach(function(value,key,arr){
				if((value.end) == currentFrame){
					key.instance.stop();
					if(_this.currentSoundStreamInMovieclip == key) { _this.currentSoundStreamInMovieclip = undefined; }
					arr.delete(key);
				}
			});
		}
	}

	this.computeCurrentSoundStreamInstance = function(currentFrame){
		if(this.currentSoundStreamInMovieclip == undefined){
			var _this = this;
			if(this.soundStreamDuration.size > 0){
				var maxDuration = 0;
				this.soundStreamDuration.forEach(function(value,key){
					if(value.end > maxDuration){
						maxDuration = value.end;
						_this.currentSoundStreamInMovieclip = key;
					}
				});
			}
		}
	}
	this.getDesiredFrame = function(currentFrame, calculatedDesiredFrame){
		for(var frameIndex in this.actionFrames){
			if((frameIndex > currentFrame) && (frameIndex < calculatedDesiredFrame)){
				return frameIndex;
			}
		}
		return calculatedDesiredFrame;
	}

	this.syncStreamSounds = function(){
		this.stopSoundStreams(this.currentFrame);
		this.computeCurrentSoundStreamInstance(this.currentFrame);
		if(this.currentSoundStreamInMovieclip != undefined){
			var soundInstance = this.currentSoundStreamInMovieclip.instance;
			if(soundInstance.position != 0){
				var soundValue = this.soundStreamDuration.get(this.currentSoundStreamInMovieclip);
				var soundPosition = (soundValue.offset?(soundInstance.position - soundValue.offset): soundInstance.position);
				var calculatedDesiredFrame = (soundValue.start)+((soundPosition/1000) * lib.properties.fps);
				if(soundValue.loop > 1){
					calculatedDesiredFrame +=(((((soundValue.loop - soundInstance.loop -1)*soundInstance.duration)) / 1000) * lib.properties.fps);
				}
				calculatedDesiredFrame = Math.floor(calculatedDesiredFrame);
				var deltaFrame = calculatedDesiredFrame - this.currentFrame;
				if((deltaFrame >= 0) && this.ignorePause){
					cjs.MovieClip.prototype.play.call(this);
					this.ignorePause = false;
				}
				else if(deltaFrame >= 2){
					this.gotoAndPlayForStreamSoundSync(this.getDesiredFrame(this.currentFrame,calculatedDesiredFrame));
				}
				else if(deltaFrame <= -2){
					cjs.MovieClip.prototype.stop.call(this);
					this.ignorePause = true;
				}
			}
		}
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Голова = function() {
	this.initialize(ss["Звук Петух_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Заборpngкопия = function() {
	this.initialize(ss["Звук Петух_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Крыло = function() {
	this.initialize(ss["Звук Петух_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Нога1 = function() {
	this.initialize(ss["Звук Петух_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Нога2 = function() {
	this.initialize(ss["Звук Петух_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Солнце = function() {
	this.initialize(ss["Звук Петух_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Туловище = function() {
	this.initialize(ss["Звук Петух_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Хвост = function() {
	this.initialize(ss["Звук Петух_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Хохолок = function() {
	this.initialize(ss["Звук Петух_atlas_1"]);
	this.gotoAndStop(7);
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


(lib.Символ13 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Хвост();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(0,0,460,423), null);


(lib.Символ12 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Нога1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(0,0,260,419), null);


(lib.Символ11 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Нога2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(0,0,260,419), null);


(lib.Символ10 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Хохолок();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(0,0,463,393), null);


(lib.Символ9 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Голова();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(0,0,188,236), null);


(lib.Символ8 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Туловище();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(0,0,861,976), null);


(lib.Символ7 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Крыло();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(0,0,439,296), null);


(lib.Символ3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Солнце();
	this.instance.setTransform(0,0,0.1721,0.1721);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,255.3,261.8), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A6C2CE").ss(1,1,1).p("EhkJg4dMDITAAAMAAABw7MjITAAAg");
	this.shape.setTransform(640.975,361.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0064C3").s().p("EhkJA4eMAAAhw7MDITAAAMAAABw7g");
	this.shape_1.setTransform(640.975,361.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(-1,-1,1284,724.9), null);


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
	this.instance = new lib.Заборpngкопия();
	this.instance.setTransform(0,0,2.2684,2.2548);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(0,0,1279.4,405.9), null);


// stage content:
(lib.ЗвукПетух = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,175];
	this.streamSoundSymbolsList[0] = [{id:"Рассвет",startFrame:0,endFrame:175,loop:1,offset:0}];
	this.streamSoundSymbolsList[175] = [{id:"КрикПетуха",startFrame:175,endFrame:248,loop:1,offset:0}];
	// timeline functions:
	this.frame_0 = function() {
		this.clearAllSoundStreams();
		 
		var soundInstance = playSound("Рассвет",0);
		this.InsertIntoSoundStreamData(soundInstance,0,175,1);
	}
	this.frame_175 = function() {
		var soundInstance = playSound("КрикПетуха",0);
		this.InsertIntoSoundStreamData(soundInstance,175,248,1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(175).call(this.frame_175).wait(73));

	// Петух
	this.ikNode_10 = new lib.Символ12();
	this.ikNode_10.name = "ikNode_10";
	this.ikNode_10.setTransform(1370.15,705.1,0.1895,0.1895,0,0,0,207.9,52.8);

	this.ikNode_8 = new lib.Символ11();
	this.ikNode_8.name = "ikNode_8";
	this.ikNode_8.setTransform(1332.5,690.25,0.1894,0.1894,0,0,0,208.8,42.5);

	this.ikNode_4 = new lib.Символ9();
	this.ikNode_4.name = "ikNode_4";
	this.ikNode_4.setTransform(1318.65,523.15,0.1904,0.1904,0,0,0,143.7,38.9);

	this.ikNode_2 = new lib.Символ7();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(1332.15,618.3,0.1857,0.1857);

	this.ikNode_2_1 = new lib.Символ8();
	this.ikNode_2_1.name = "ikNode_2_1";
	this.ikNode_2_1.setTransform(1355.75,629.4,0.2013,0.2013,0,0,0,345.3,568.6);

	this.ikNode_12 = new lib.Символ13();
	this.ikNode_12.name = "ikNode_12";
	this.ikNode_12.setTransform(1403.7,614,0.3263,0.3263,0,0,0,27.6,393.9);

	this.ikNode_6 = new lib.Символ10();
	this.ikNode_6.name = "ikNode_6";
	this.ikNode_6.setTransform(1324.6,526.9,0.1872,0.1872,0,0,0,155.5,365.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:0,x:1324.6,y:526.9,regX:155.5,scaleX:0.1872,scaleY:0.1872}},{t:this.ikNode_12,p:{rotation:0,x:1403.7,y:614,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:1355.75,y:629.4}},{t:this.ikNode_2,p:{x:1332.15,y:618.3,rotation:0}},{t:this.ikNode_4,p:{x:1318.65,y:523.15,regX:143.7,regY:38.9,rotation:0}},{t:this.ikNode_8,p:{regX:208.8,rotation:0,x:1332.5,y:690.25,regY:42.5}},{t:this.ikNode_10,p:{regX:207.9,regY:52.8,rotation:0,x:1370.15,y:705.1}}]},68).to({state:[{t:this.ikNode_6,p:{regY:366,rotation:-2.7852,x:1331.15,y:531,regX:155.5,scaleX:0.1872,scaleY:0.1872}},{t:this.ikNode_12,p:{rotation:-2.8762,x:1409.55,y:617.55,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:1355.55,y:632.25}},{t:this.ikNode_2,p:{x:1335.15,y:622.95,rotation:0}},{t:this.ikNode_4,p:{x:1320.1,y:526.7,regX:143.7,regY:38.9,rotation:0}},{t:this.ikNode_8,p:{regX:209,rotation:1.2327,x:1333.7,y:695.8,regY:42.5}},{t:this.ikNode_10,p:{regX:208,regY:52.9,rotation:-4.7675,x:1374.25,y:708.7}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.8,rotation:-5.5865,x:1329.6,y:532.1,regX:155.3,scaleX:0.1872,scaleY:0.1872}},{t:this.ikNode_12,p:{rotation:-5.757,x:1412.9,y:619.85,regY:394,regX:27.6}},{t:this.ikNode_2_1,p:{x:1355.35,y:635.1}},{t:this.ikNode_2,p:{x:1334.95,y:625.95,rotation:0}},{t:this.ikNode_4,p:{x:1319.2,y:529.2,regX:143.7,regY:38.9,rotation:0}},{t:this.ikNode_8,p:{regX:208.8,rotation:2.4797,x:1333.7,y:700.55,regY:42.5}},{t:this.ikNode_10,p:{regX:207.9,regY:52.6,rotation:-9.5496,x:1376.75,y:711.35}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:-8.3825,x:1328.25,y:533.25,regX:155.7,scaleX:0.1872,scaleY:0.1872}},{t:this.ikNode_12,p:{rotation:-8.6417,x:1416.3,y:622.2,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:1355.15,y:637.95}},{t:this.ikNode_2,p:{x:1334.75,y:628.95,rotation:0}},{t:this.ikNode_4,p:{x:1318.4,y:531.75,regX:143.7,regY:38.9,rotation:0}},{t:this.ikNode_8,p:{regX:208.8,rotation:3.7235,x:1333.75,y:705.35,regY:42.5}},{t:this.ikNode_10,p:{regX:207.7,regY:52.8,rotation:-14.3328,x:1379.4,y:714.05}}]},1).to({state:[{t:this.ikNode_6,p:{regY:366,rotation:-11.1844,x:1326.7,y:534.4,regX:155.6,scaleX:0.1872,scaleY:0.1872}},{t:this.ikNode_12,p:{rotation:-11.5238,x:1419.65,y:624.45,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:1354.95,y:640.8}},{t:this.ikNode_2,p:{x:1334.55,y:631.95,rotation:0}},{t:this.ikNode_4,p:{x:1317.55,y:534.25,regX:143.7,regY:38.9,rotation:0}},{t:this.ikNode_8,p:{regX:208.8,rotation:4.9687,x:1333.75,y:710,regY:42.2}},{t:this.ikNode_10,p:{regX:207.7,regY:52.7,rotation:-19.1106,x:1381.9,y:716.7}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:-13.9807,x:1325.2,y:535.55,regX:155.6,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:-14.4054,x:1423.05,y:626.75,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:1354.75,y:643.7}},{t:this.ikNode_2,p:{x:1334.35,y:634.95,rotation:0}},{t:this.ikNode_4,p:{x:1316.7,y:536.8,regX:143.7,regY:38.9,rotation:0}},{t:this.ikNode_8,p:{regX:208.8,rotation:6.2168,x:1333.8,y:714.85,regY:42.6}},{t:this.ikNode_10,p:{regX:207.8,regY:52.8,rotation:-23.8936,x:1384.45,y:719.2}}]},1).to({state:[{t:this.ikNode_6,p:{regY:366.1,rotation:-10.8418,x:1315.4,y:529.3,regX:155.7,scaleX:0.1872,scaleY:0.1872}},{t:this.ikNode_12,p:{rotation:-11.6058,x:1412.8,y:620.25,regY:393.9,regX:27.5}},{t:this.ikNode_2_1,p:{x:1344.9,y:637.2}},{t:this.ikNode_2,p:{x:1325.5,y:629.85,rotation:-2.4302}},{t:this.ikNode_4,p:{x:1307.15,y:530.6,regX:143.7,regY:38.9,rotation:0}},{t:this.ikNode_8,p:{regX:208.8,rotation:3.1593,x:1324.65,y:708.9,regY:42.7}},{t:this.ikNode_10,p:{regX:207.8,regY:52.7,rotation:-24.9469,x:1375.25,y:713.3}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:-7.7033,x:1305.5,y:522.95,regX:155.7,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:-8.8042,x:1402.6,y:613.75,regY:393.8,regX:27.6}},{t:this.ikNode_2_1,p:{x:1335,y:630.85}},{t:this.ikNode_2,p:{x:1316.6,y:624.8,rotation:-4.8743}},{t:this.ikNode_4,p:{x:1297.55,y:524.4,regX:143.7,regY:38.9,rotation:0}},{t:this.ikNode_8,p:{regX:208.9,rotation:0.1062,x:1315.4,y:702.75,regY:42.4}},{t:this.ikNode_10,p:{regX:207.9,regY:53,rotation:-25.9955,x:1366.2,y:707.65}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:-4.5642,x:1295.45,y:516.7,regX:155.5,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:-6.0047,x:1392.45,y:607.55,regY:393.8,regX:27.6}},{t:this.ikNode_2_1,p:{x:1325,y:624.65}},{t:this.ikNode_2,p:{x:1307.7,y:619.75,rotation:-7.3177}},{t:this.ikNode_4,p:{x:1287.85,y:518.3,regX:143.7,regY:38.9,rotation:0}},{t:this.ikNode_8,p:{regX:208.8,rotation:-2.9281,x:1305.9,y:696.8,regY:42.6}},{t:this.ikNode_10,p:{regX:208,regY:52.9,rotation:-27.048,x:1356.9,y:701.85}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:-1.4202,x:1285.35,y:510.55,regX:155.6,scaleX:0.1872,scaleY:0.1872}},{t:this.ikNode_12,p:{rotation:-3.2035,x:1382.2,y:601.45,regY:394,regX:27.7}},{t:this.ikNode_2_1,p:{x:1314.95,y:618.5}},{t:this.ikNode_2,p:{x:1298.75,y:614.7,rotation:-9.7603}},{t:this.ikNode_4,p:{x:1278.1,y:512.2,regX:143.7,regY:38.9,rotation:0}},{t:this.ikNode_8,p:{regX:209,rotation:-5.9802,x:1296.4,y:690.8,regY:42.6}},{t:this.ikNode_10,p:{regX:207.9,regY:52.6,rotation:-28.0985,x:1347.5,y:696.1}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:1.6959,x:1275.2,y:504.25,regX:155.5,scaleX:0.1872,scaleY:0.1872}},{t:this.ikNode_12,p:{rotation:-0.4046,x:1371.95,y:595.45,regY:394,regX:27.6}},{t:this.ikNode_2_1,p:{x:1304.85,y:612.45}},{t:this.ikNode_2,p:{x:1289.95,y:609.65,rotation:-12.202}},{t:this.ikNode_4,p:{x:1268.2,y:506.05,regX:143.7,regY:38.9,rotation:0}},{t:this.ikNode_8,p:{regX:208.7,rotation:-9.035,x:1286.65,y:684.75,regY:42.6}},{t:this.ikNode_10,p:{regX:207.8,regY:52.8,rotation:-29.1496,x:1338.1,y:690.45}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:4.8358,x:1264.9,y:498.05,regX:155.7,scaleX:0.1872,scaleY:0.1872}},{t:this.ikNode_12,p:{rotation:2.3826,x:1361.8,y:589.35,regY:393.8,regX:27.6}},{t:this.ikNode_2_1,p:{x:1294.7,y:606.5}},{t:this.ikNode_2,p:{x:1281.05,y:604.55,rotation:-14.6472}},{t:this.ikNode_4,p:{x:1258.2,y:500,regX:143.7,regY:38.9,rotation:0}},{t:this.ikNode_8,p:{regX:208.8,rotation:-12.0922,x:1277,y:678.65,regY:42.3}},{t:this.ikNode_10,p:{regX:208,regY:53,rotation:-30.2016,x:1328.6,y:684.9}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:7.9768,x:1254.3,y:491.95,regX:155.4,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:5.1835,x:1351.55,y:583.5,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:1284.5,y:600.65}},{t:this.ikNode_2,p:{x:1272.15,y:599.5,rotation:-17.0903}},{t:this.ikNode_4,p:{x:1248.1,y:493.95,regX:143.7,regY:38.9,rotation:0}},{t:this.ikNode_8,p:{regX:208.8,rotation:-15.147,x:1267.15,y:672.55,regY:42.3}},{t:this.ikNode_10,p:{regX:207.9,regY:52.7,rotation:-31.255,x:1319.1,y:679.25}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:11.113,x:1243.75,y:485.8,regX:155.5,scaleX:0.1872,scaleY:0.1872}},{t:this.ikNode_12,p:{rotation:7.9835,x:1341.3,y:577.75,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:1274.25,y:594.95}},{t:this.ikNode_2,p:{x:1263.2,y:594.5,rotation:-19.5354}},{t:this.ikNode_4,p:{x:1237.9,y:487.9,regX:143.7,regY:38.9,rotation:0}},{t:this.ikNode_8,p:{regX:208.7,rotation:-18.2028,x:1257.3,y:666.55,regY:42.5}},{t:this.ikNode_10,p:{regX:208,regY:52.8,rotation:-32.3077,x:1309.6,y:673.65}}]},1).to({state:[{t:this.ikNode_6,p:{regY:366,rotation:14.2549,x:1233.05,y:479.75,regX:155.6,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:10.7839,x:1331.1,y:572,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:1264,y:589.4}},{t:this.ikNode_2,p:{x:1254.4,y:589.4,rotation:-21.9763}},{t:this.ikNode_4,p:{x:1227.55,y:481.95,regX:143.7,regY:38.9,rotation:0}},{t:this.ikNode_8,p:{regX:208.8,rotation:-21.2596,x:1247.55,y:660.45,regY:42.4}},{t:this.ikNode_10,p:{regX:207.9,regY:52.8,rotation:-33.356,x:1300,y:668.15}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:17.0832,x:1214.4,y:472.9,regX:155.5,scaleX:0.1872,scaleY:0.1872}},{t:this.ikNode_12,p:{rotation:13.5495,x:1312.85,y:564.95,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:1246.45,y:583.15}},{t:this.ikNode_2,p:{x:1236.3,y:584,rotation:-25.788}},{t:this.ikNode_4,p:{x:1209.5,y:474.65,regX:143.8,regY:38.8,rotation:1.7178}},{t:this.ikNode_8,p:{regX:209.1,rotation:-22.1092,x:1231.95,y:653.95,regY:42.5}},{t:this.ikNode_10,p:{regX:207.8,regY:52.8,rotation:-34.5066,x:1282.6,y:660.75}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:19.9109,x:1195.55,y:466.15,regX:155.6,scaleX:0.1872,scaleY:0.1872}},{t:this.ikNode_12,p:{rotation:16.3145,x:1294.5,y:557.85,regY:393.9,regX:27.7}},{t:this.ikNode_2_1,p:{x:1228.9,y:576.9}},{t:this.ikNode_2,p:{x:1218.35,y:578.65,rotation:-29.5965}},{t:this.ikNode_4,p:{x:1191.2,y:467.45,regX:143.7,regY:39,rotation:3.4463}},{t:this.ikNode_8,p:{regX:208.9,rotation:-22.964,x:1215.95,y:647.4,regY:42.4}},{t:this.ikNode_10,p:{regX:208,regY:52.8,rotation:-35.6525,x:1265.1,y:653.45}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:22.7618,x:1182.1,y:459.75,regX:155.6,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:19.0942,x:1281.75,y:551,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:1216.4,y:570.45}},{t:this.ikNode_2,p:{x:1205.85,y:573.5,rotation:-33.425}},{t:this.ikNode_4,p:{x:1178.25,y:460.45,regX:143.8,regY:38.9,rotation:5.2148}},{t:this.ikNode_8,p:{regX:208.8,rotation:-23.8345,x:1205.35,y:641.05,regY:42.3}},{t:this.ikNode_10,p:{regX:208,regY:52.8,rotation:-36.8081,x:1252.95,y:646.45}}]},1).to({state:[{t:this.ikNode_6,p:{regY:366,rotation:25.6082,x:1168.6,y:453.4,regX:155.6,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:21.8746,x:1268.95,y:544.15,regY:393.9,regX:27.5}},{t:this.ikNode_2_1,p:{x:1203.75,y:564}},{t:this.ikNode_2,p:{x:1193.5,y:568.35,rotation:-37.2485}},{t:this.ikNode_4,p:{x:1165.25,y:453.6,regX:143.7,regY:38.8,rotation:6.9792}},{t:this.ikNode_8,p:{regX:208.6,rotation:-24.7003,x:1194.65,y:634.7,regY:42.5}},{t:this.ikNode_10,p:{regX:207.9,regY:52.7,rotation:-37.9571,x:1240.55,y:639.6}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.8,rotation:28.4561,x:1155,y:447,regX:155.4,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:24.6546,x:1256.2,y:537.35,regY:393.9,regX:27.7}},{t:this.ikNode_2_1,p:{x:1191,y:557.65}},{t:this.ikNode_2,p:{x:1181.05,y:563.25,rotation:-41.0747}},{t:this.ikNode_4,p:{x:1151.95,y:446.8,regX:143.6,regY:38.8,rotation:8.7504}},{t:this.ikNode_8,p:{regX:208.6,rotation:-25.5678,x:1183.75,y:628.3,regY:42.5}},{t:this.ikNode_10,p:{regX:207.8,regY:52.6,rotation:-39.1131,x:1228,y:632.9}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:31.3027,x:1141.15,y:440.7,regX:155.2,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:27.4374,x:1243.35,y:530.5,regY:393.8,regX:27.7}},{t:this.ikNode_2_1,p:{x:1178.05,y:551.3}},{t:this.ikNode_2,p:{x:1168.65,y:558.1,rotation:-44.9001}},{t:this.ikNode_4,p:{x:1138.55,y:439.95,regX:143.7,regY:38.8,rotation:10.5209}},{t:this.ikNode_8,p:{regX:208.8,rotation:-26.4412,x:1172.75,y:621.75,regY:42.6}},{t:this.ikNode_10,p:{regX:207.8,regY:52.8,rotation:-40.2635,x:1215.25,y:626.3}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:34.1527,x:1127.15,y:434.55,regX:155.6,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:30.2152,x:1230.45,y:523.65,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:1165,y:545}},{t:this.ikNode_2,p:{x:1156.25,y:552.9,rotation:-48.725}},{t:this.ikNode_4,p:{x:1124.8,y:433.35,regX:143.7,regY:38.9,rotation:12.2872}},{t:this.ikNode_8,p:{regX:209,rotation:-27.3104,x:1161.5,y:615.35,regY:42.5}},{t:this.ikNode_10,p:{regX:207.8,regY:52.8,rotation:-41.4182,x:1202.35,y:619.75}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:36.9998,x:1112.85,y:428.4,regX:155.6,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:32.9967,x:1217.45,y:516.75,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:1151.85,y:538.8}},{t:this.ikNode_2,p:{x:1143.85,y:547.75,rotation:-52.55}},{t:this.ikNode_4,p:{x:1110.75,y:426.75,regX:143.8,regY:38.8,rotation:14.0563}},{t:this.ikNode_8,p:{regX:208.7,rotation:-28.1757,x:1150.15,y:608.85,regY:42.6}},{t:this.ikNode_10,p:{regX:207.8,regY:52.6,rotation:-42.5717,x:1189.45,y:613.25}}]},1).to({state:[{t:this.ikNode_6,p:{regY:366,rotation:38.6875,x:1109.55,y:422.15,regX:155.5,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:33.9308,x:1207.4,y:512.9,regY:394.1,regX:27.6}},{t:this.ikNode_2_1,p:{x:1144.7,y:531.6}},{t:this.ikNode_2,p:{x:1133.4,y:539.6,rotation:-44.4806}},{t:this.ikNode_4,p:{x:1108.75,y:420.9,regX:143.6,regY:38.6,rotation:12.4934}},{t:this.ikNode_8,p:{regX:208.8,rotation:-27.1948,x:1141.8,y:604,regY:42.6}},{t:this.ikNode_10,p:{regX:207.8,regY:52.6,rotation:-41.7876,x:1182.1,y:607.65}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:40.3768,x:1104.2,y:416.6,regX:155.4,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:34.8636,x:1197,y:507.9,regY:393.9,regX:27.7}},{t:this.ikNode_2_1,p:{x:1137.35,y:525.2}},{t:this.ikNode_2,p:{x:1122.95,y:531.4,rotation:-36.4179}},{t:this.ikNode_4,p:{x:1104.7,y:416,regX:143.7,regY:38.9,rotation:10.9272}},{t:this.ikNode_8,p:{regX:208.7,rotation:-26.2141,x:1134.4,y:598.95,regY:42.4}},{t:this.ikNode_10,p:{regX:207.8,regY:52.6,rotation:-41.0062,x:1175.4,y:601.55}}]},1).to({state:[{t:this.ikNode_6,p:{regY:366.1,rotation:42.0619,x:1096.45,y:411.6,regX:155.5,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:35.7959,x:1186.2,y:502.25,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:1129.65,y:519.55}},{t:this.ikNode_2,p:{x:1112.5,y:523.25,rotation:-28.3489}},{t:this.ikNode_4,p:{x:1098.4,y:411.65,regX:143.8,regY:38.9,rotation:9.3642}},{t:this.ikNode_8,p:{regX:208.8,rotation:-25.2353,x:1127.35,y:593.7,regY:42.6}},{t:this.ikNode_10,p:{regX:207.8,regY:52.7,rotation:-40.2239,x:1168.8,y:595.35}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:43.7512,x:1086.55,y:406.85,regX:155.3,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:36.7295,x:1175.1,y:495.9,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:1121.4,y:514.55}},{t:this.ikNode_2,p:{x:1102.05,y:515.15,rotation:-20.2816}},{t:this.ikNode_4,p:{x:1089.85,y:407.55,regX:143.7,regY:38.9,rotation:7.8034}},{t:this.ikNode_8,p:{regX:208.8,rotation:-24.2541,x:1119.7,y:588.45,regY:42.5}},{t:this.ikNode_10,p:{regX:207.8,regY:52.7,rotation:-39.441,x:1161.75,y:589.45}}]},1).to({state:[{t:this.ikNode_6,p:{regY:366.1,rotation:45.4361,x:1074.75,y:402.5,regX:155.5,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:37.6647,x:1163.85,y:488.95,regY:393.9,regX:27.7}},{t:this.ikNode_2_1,p:{x:1112.6,y:510.05}},{t:this.ikNode_2,p:{x:1091.65,y:507,rotation:-12.2168}},{t:this.ikNode_4,p:{x:1079.35,y:403.75,regX:143.8,regY:38.7,rotation:6.2398}},{t:this.ikNode_8,p:{regX:208.8,rotation:-23.2701,x:1110.9,y:583.55,regY:42.6}},{t:this.ikNode_10,p:{regX:207.9,regY:52.8,rotation:-38.6605,x:1153.7,y:584.35}}]},1).to({state:[{t:this.ikNode_6,p:{regY:366.1,rotation:47.1245,x:1061.9,y:398.25,regX:155.6,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:38.5979,x:1152.5,y:481.75,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:1103.05,y:505.95}},{t:this.ikNode_2,p:{x:1081.2,y:498.85,rotation:-4.147}},{t:this.ikNode_4,p:{x:1067.35,y:400.2,regX:143.7,regY:38.9,rotation:4.6755}},{t:this.ikNode_8,p:{regX:208.8,rotation:-22.2892,x:1100.45,y:578.95,regY:42.5}},{t:this.ikNode_10,p:{regX:208,regY:52.8,rotation:-37.8815,x:1144.3,y:580.3}}]},1).to({state:[{t:this.ikNode_6,p:{regY:366.1,rotation:48.815,x:1048.95,y:394.15,regX:155.5,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:39.5311,x:1141.2,y:474.65,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:1092.75,y:502.15}},{t:this.ikNode_2,p:{x:1070.75,y:490.65,rotation:3.8921}},{t:this.ikNode_4,p:{x:1054.8,y:396.7,regX:143.7,regY:39,rotation:3.1151}},{t:this.ikNode_8,p:{regX:208.7,rotation:-21.3093,x:1088.2,y:574.8,regY:42.6}},{t:this.ikNode_10,p:{regX:208,regY:52.7,rotation:-37.0951,x:1133.3,y:577.4}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:50.5019,x:1036.9,y:389.95,regX:155.4,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:40.465,x:1130,y:468,regY:393.9,regX:27.7}},{t:this.ikNode_2_1,p:{x:1081.6,y:498.5}},{t:this.ikNode_2,p:{x:1060.3,y:482.45,rotation:11.9563}},{t:this.ikNode_4,p:{x:1042.65,y:393.25,regX:143.7,regY:39,rotation:1.5524}},{t:this.ikNode_8,p:{regX:209,rotation:-20.3259,x:1074.15,y:570.85,regY:42.5}},{t:this.ikNode_10,p:{regX:208,regY:52.6,rotation:-36.3134,x:1120.55,y:575.55}}]},1).to({state:[{t:this.ikNode_6,p:{regY:366,rotation:52.1873,x:1026.4,y:385.45,regX:155.7,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:41.3977,x:1118.75,y:461.85,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:1069.65,y:494.85}},{t:this.ikNode_2,p:{x:1049.8,y:474.35,rotation:20.0253}},{t:this.ikNode_4,p:{x:1031.6,y:389.6,regX:143.7,regY:38.9,rotation:0}},{t:this.ikNode_8,p:{regX:208.7,rotation:-19.3445,x:1058.25,y:566.9,regY:42.5}},{t:this.ikNode_10,p:{regX:207.8,regY:52.8,rotation:-35.5334,x:1105.95,y:574.4}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:47.852,x:1019.4,y:368.75,regX:155.8,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:38.4682,x:1113.55,y:447.4,regY:393.9,regX:27.7}},{t:this.ikNode_2_1,p:{x:1061.8,y:477.8}},{t:this.ikNode_2,p:{x:1041.85,y:457.8,rotation:15.3439}},{t:this.ikNode_4,p:{x:1023.25,y:372,regX:143.7,regY:39,rotation:-1.5891}},{t:this.ikNode_8,p:{regX:208.8,rotation:-14.67,x:1050.75,y:550,regY:42.6}},{t:this.ikNode_10,p:{regX:207.9,regY:52.9,rotation:-30.6298,x:1098.4,y:557.3}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:43.5132,x:1013.05,y:351.85,regX:155.5,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:35.5386,x:1108.25,y:433.25,regY:393.9,regX:27.8}},{t:this.ikNode_2_1,p:{x:1053.85,y:460.8}},{t:this.ikNode_2,p:{x:1033.8,y:441.25,rotation:10.6599}},{t:this.ikNode_4,p:{x:1015,y:354.4,regX:143.6,regY:39.1,rotation:-3.1933}},{t:this.ikNode_8,p:{regX:208.8,rotation:-9.9943,x:1042.8,y:533.15,regY:42.7}},{t:this.ikNode_10,p:{regX:208.1,regY:52.8,rotation:-25.723,x:1090.4,y:540.45}}]},1).to({state:[{t:this.ikNode_6,p:{regY:366.1,rotation:39.1727,x:1007.25,y:334.95,regX:155.6,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:32.6109,x:1102.75,y:419.2,regY:393.8,regX:27.7}},{t:this.ikNode_2_1,p:{x:1045.9,y:443.9}},{t:this.ikNode_2,p:{x:1025.85,y:424.7,rotation:5.9809}},{t:this.ikNode_4,p:{x:1006.85,y:336.55,regX:143.6,regY:38.6,rotation:-4.7953}},{t:this.ikNode_8,p:{regX:208.7,rotation:-5.3211,x:1034.45,y:516.35,regY:42.5}},{t:this.ikNode_10,p:{regX:207.8,regY:52.8,rotation:-20.8185,x:1082,y:523.8}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.7,rotation:34.8355,x:1001.95,y:317.95,regX:155.6,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:29.6797,x:1097.1,y:405,regY:393.9,regX:27.4}},{t:this.ikNode_2_1,p:{x:1037.85,y:427.05}},{t:this.ikNode_2,p:{x:1017.85,y:408.15,rotation:1.2996}},{t:this.ikNode_4,p:{x:998.65,y:319,regX:143.7,regY:38.9,rotation:-6.397}},{t:this.ikNode_8,p:{regX:208.9,rotation:-0.6463,x:1025.95,y:499.55,regY:42.5}},{t:this.ikNode_10,p:{regX:208.1,regY:52.8,rotation:-15.9112,x:1073.45,y:507.3}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.8,rotation:30.4935,x:996.75,y:301.05,regX:155.6,scaleX:0.1872,scaleY:0.1872}},{t:this.ikNode_12,p:{rotation:26.7508,x:1091.55,y:390.4,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:1029.8,y:410.2}},{t:this.ikNode_2,p:{x:1009.85,y:391.6,rotation:-3.359}},{t:this.ikNode_4,p:{x:990.25,y:301.35,regX:143.8,regY:38.8,rotation:-7.9983}},{t:this.ikNode_8,p:{regX:208.9,rotation:4.0011,x:1017.3,y:482.75,regY:42.6}},{t:this.ikNode_10,p:{regX:207.8,regY:52.8,rotation:-11.0086,x:1064.65,y:490.85}}]},1).to({state:[{t:this.ikNode_6,p:{regY:366,rotation:26.1597,x:991.4,y:284.25,regX:155.4,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:23.8224,x:1085.95,y:375.2,regY:393.9,regX:27.7}},{t:this.ikNode_2_1,p:{x:1021.7,y:393.4}},{t:this.ikNode_2,p:{x:1001.8,y:375.05,rotation:-8.0449}},{t:this.ikNode_4,p:{x:981.6,y:283.8,regX:143.7,regY:39,rotation:-9.602}},{t:this.ikNode_8,p:{regX:208.9,rotation:8.6753,x:1008.65,y:465.9,regY:42.4}},{t:this.ikNode_10,p:{regX:207.8,regY:52.8,rotation:-6.1022,x:1055.95,y:474.45}}]},1).to({state:[{t:this.ikNode_6,p:{regY:366,rotation:21.817,x:985.8,y:267.55,regX:155.5,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:20.8929,x:1080.3,y:359.35,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:1013.6,y:376.6}},{t:this.ikNode_2,p:{x:993.85,y:358.5,rotation:-12.7229}},{t:this.ikNode_4,p:{x:972.65,y:266.25,regX:143.6,regY:38.9,rotation:-11.2037}},{t:this.ikNode_8,p:{regX:208.8,rotation:13.3521,x:1000.1,y:449.2,regY:42.7}},{t:this.ikNode_10,p:{regX:208,regY:52.9,rotation:-1.1997,x:1047.5,y:457.85}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:17.4806,x:979.65,y:250.95,regX:155.6,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:17.9638,x:1074.65,y:342.7,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:1005.5,y:359.8}},{t:this.ikNode_2,p:{x:985.85,y:341.9,rotation:-17.4046}},{t:this.ikNode_4,p:{x:963.3,y:248.85,regX:143.6,regY:38.9,rotation:-12.8043}},{t:this.ikNode_8,p:{regX:208.8,rotation:18.0233,x:991.85,y:432.3,regY:42.6}},{t:this.ikNode_10,p:{regX:207.8,regY:52.8,rotation:3.6799,x:1039.2,y:441.15}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:13.1434,x:972.85,y:234.4,regX:155.7,scaleX:0.1872,scaleY:0.1872}},{t:this.ikNode_12,p:{rotation:15.0345,x:1069,y:325.3,regY:394,regX:27.6}},{t:this.ikNode_2_1,p:{x:997.45,y:343}},{t:this.ikNode_2,p:{x:977.85,y:325.35,rotation:-22.0882}},{t:this.ikNode_4,p:{x:953.55,y:231.6,regX:143.8,regY:38.9,rotation:-14.406}},{t:this.ikNode_8,p:{regX:208.8,rotation:22.6991,x:983.85,y:415.35,regY:42.3}},{t:this.ikNode_10,p:{regX:207.9,regY:53,rotation:8.5869,x:1031.35,y:424.3}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:11.714,x:965.6,y:236.35,regX:155.6,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:12.7052,x:1061.65,y:327.5,regY:394,regX:27.7}},{t:this.ikNode_2_1,p:{x:989.25,y:344.55}},{t:this.ikNode_2,p:{x:970.6,y:327.25,rotation:-19.1347}},{t:this.ikNode_4,p:{x:946.45,y:233.4,regX:143.8,regY:39,rotation:-14.445}},{t:this.ikNode_8,p:{regX:209,rotation:20.488,x:976.9,y:417.45,regY:42.6}},{t:this.ikNode_10,p:{regX:208,regY:52.6,rotation:7.1754,x:1023.75,y:425.7}}]},1).to({state:[{t:this.ikNode_6,p:{regY:366,rotation:10.2902,x:958.3,y:238.45,regX:155.5,scaleX:0.1872,scaleY:0.1872}},{t:this.ikNode_12,p:{rotation:10.3777,x:1054.2,y:329.55,regY:393.8,regX:27.6}},{t:this.ikNode_2_1,p:{x:981.15,y:346.1}},{t:this.ikNode_2,p:{x:963.5,y:329.15,rotation:-16.1802}},{t:this.ikNode_4,p:{x:939.2,y:235.25,regX:143.8,regY:38.8,rotation:-14.4874}},{t:this.ikNode_8,p:{regX:209,rotation:18.2758,x:970.1,y:419.4,regY:42.5}},{t:this.ikNode_10,p:{regX:208,regY:52.8,rotation:5.7593,x:1016.25,y:427.1}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:8.8641,x:950.9,y:240.4,regX:155.5,scaleX:0.1872,scaleY:0.1872}},{t:this.ikNode_12,p:{rotation:8.0513,x:1046.8,y:331.6,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:973.1,y:347.5}},{t:this.ikNode_2,p:{x:956.35,y:331.1,rotation:-13.2254}},{t:this.ikNode_4,p:{x:931.8,y:237.1,regX:143.5,regY:38.8,rotation:-14.5297}},{t:this.ikNode_8,p:{regX:208.8,rotation:16.0678,x:963.15,y:421.35,regY:42.6}},{t:this.ikNode_10,p:{regX:208.1,regY:52.8,rotation:4.3463,x:1009,y:428.4}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.8,rotation:7.4391,x:943.45,y:242.45,regX:155.6,scaleX:0.1872,scaleY:0.1872}},{t:this.ikNode_12,p:{rotation:5.7221,x:1039.4,y:333.55,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:965.15,y:348.85}},{t:this.ikNode_2,p:{x:949.15,y:333,rotation:-10.272}},{t:this.ikNode_4,p:{x:924.45,y:238.85,regX:143.6,regY:38.6,rotation:-14.572}},{t:this.ikNode_8,p:{regX:208.7,rotation:13.8593,x:956.35,y:423.25,regY:42.4}},{t:this.ikNode_10,p:{regX:208,regY:52.8,rotation:2.9359,x:1001.8,y:429.7}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:6.009,x:936,y:244.5,regX:155.7,scaleX:0.1872,scaleY:0.1872}},{t:this.ikNode_12,p:{rotation:3.3967,x:1032,y:335.4,regY:393.9,regX:27.7}},{t:this.ikNode_2_1,p:{x:957.25,y:350.1}},{t:this.ikNode_2,p:{x:942,y:334.9,rotation:-7.3177}},{t:this.ikNode_4,p:{x:917.1,y:240.8,regX:143.6,regY:38.8,rotation:-14.611}},{t:this.ikNode_8,p:{regX:208.8,rotation:11.6495,x:949.55,y:425.3,regY:42.6}},{t:this.ikNode_10,p:{regX:208.1,regY:52.8,rotation:1.5229,x:994.7,y:430.95}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:4.5829,x:928.45,y:246.45,regX:155.6,scaleX:0.1872,scaleY:0.1872}},{t:this.ikNode_12,p:{rotation:1.0691,x:1024.55,y:337.25,regY:393.8,regX:27.6}},{t:this.ikNode_2_1,p:{x:949.45,y:351.3}},{t:this.ikNode_2,p:{x:934.85,y:336.8,rotation:-4.364}},{t:this.ikNode_4,p:{x:909.65,y:242.65,regX:143.5,regY:38.9,rotation:-14.6533}},{t:this.ikNode_8,p:{regX:208.9,rotation:9.4373,x:942.95,y:427.15,regY:42.6}},{t:this.ikNode_10,p:{regX:208.1,regY:52.9,rotation:0.1107,x:987.7,y:432.05}}]},1).to({state:[{t:this.ikNode_6,p:{regY:366,rotation:3.1594,x:920.95,y:248.6,regX:155.6,scaleX:0.1872,scaleY:0.1872}},{t:this.ikNode_12,p:{rotation:-1.2433,x:1017.1,y:339.15,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:941.7,y:352.45}},{t:this.ikNode_2,p:{x:927.7,y:338.7,rotation:-1.4079}},{t:this.ikNode_4,p:{x:902.45,y:244.55,regX:143.8,regY:38.8,rotation:-14.6956}},{t:this.ikNode_8,p:{regX:209,rotation:7.2258,x:936.15,y:429.2,regY:42.5}},{t:this.ikNode_10,p:{regX:207.9,regY:52.7,rotation:-1.2783,x:980.55,y:433.25}}]},1).to({state:[{t:this.ikNode_6,p:{regY:366,rotation:1.7333,x:913.5,y:250.65,regX:155.7,scaleX:0.1872,scaleY:0.1872}},{t:this.ikNode_12,p:{rotation:-3.5712,x:1009.7,y:341.1,regY:394,regX:27.6}},{t:this.ikNode_2_1,p:{x:934.05,y:353.5}},{t:this.ikNode_2,p:{x:920.5,y:340.55,rotation:1.5209}},{t:this.ikNode_4,p:{x:895.2,y:246.35,regX:143.8,regY:38.9,rotation:-14.7335}},{t:this.ikNode_8,p:{regX:208.8,rotation:5.0151,x:929.3,y:431.05,regY:42.4}},{t:this.ikNode_10,p:{regX:207.8,regY:52.9,rotation:-2.691,x:973.5,y:434.45}}]},1).to({state:[{t:this.ikNode_6,p:{regY:366,rotation:0.3083,x:906.1,y:252.65,regX:155.6,scaleX:0.1872,scaleY:0.1872}},{t:this.ikNode_12,p:{rotation:-5.8996,x:1002.25,y:342.95,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:926.4,y:354.45}},{t:this.ikNode_2,p:{x:913.35,y:342.5,rotation:4.4774}},{t:this.ikNode_4,p:{x:887.95,y:248.2,regX:143.8,regY:39,rotation:-14.777}},{t:this.ikNode_8,p:{regX:208.8,rotation:2.808,x:922.3,y:433.1,regY:42.6}},{t:this.ikNode_10,p:{regX:207.9,regY:52.8,rotation:-4.1057,x:966.45,y:435.7}}]},1).to({state:[{t:this.ikNode_6,p:{regY:366.1,rotation:-1.0932,x:898.75,y:254.7,regX:155.5,scaleX:0.1872,scaleY:0.1872}},{t:this.ikNode_12,p:{rotation:-8.2271,x:994.9,y:345,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:918.85,y:355.4}},{t:this.ikNode_2,p:{x:906.15,y:344.45,rotation:7.4316}},{t:this.ikNode_4,p:{x:880.9,y:249.95,regX:143.8,regY:38.9,rotation:-14.8193}},{t:this.ikNode_8,p:{regX:208.8,rotation:0.5955,x:915.25,y:435.05,regY:42.5}},{t:this.ikNode_10,p:{regX:207.8,regY:52.7,rotation:-5.5178,x:959.25,y:436.85}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:1.4717,x:893.55,y:254.6,regX:155.6,scaleX:0.1872,scaleY:0.1872}},{t:this.ikNode_12,p:{rotation:-5.6869,x:989.65,y:345,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:913.9,y:355.3}},{t:this.ikNode_2,p:{x:901.25,y:344.15,rotation:7.351}},{t:this.ikNode_4,p:{x:876.05,y:249.8,regX:143.8,regY:38.9,rotation:-13.5261}},{t:this.ikNode_8,p:{regX:208.7,rotation:1.7915,x:910.45,y:434.95,regY:42.6}},{t:this.ikNode_10,p:{regX:207.7,regY:52.8,rotation:-6.6872,x:954.2,y:437}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.8,rotation:4.063,x:888.4,y:254.55,regX:155.6,scaleX:0.1872,scaleY:0.1872}},{t:this.ikNode_12,p:{rotation:-3.1471,x:984.4,y:345.05,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:908.95,y:355.15}},{t:this.ikNode_2,p:{x:896.35,y:343.9,rotation:7.2751}},{t:this.ikNode_4,p:{x:871.15,y:249.65,regX:143.7,regY:39,rotation:-12.2304}},{t:this.ikNode_8,p:{regX:209,rotation:2.9883,x:905.7,y:434.85,regY:42.5}},{t:this.ikNode_10,p:{regX:207.7,regY:52.6,rotation:-7.8547,x:949.1,y:437}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:6.6482,x:883.1,y:254.45,regX:155.3,scaleX:0.1872,scaleY:0.1872}},{t:this.ikNode_12,p:{rotation:-0.6055,x:979.1,y:345.05,regY:393.8,regX:27.6}},{t:this.ikNode_2_1,p:{x:904.05,y:355.05}},{t:this.ikNode_2,p:{x:891.45,y:343.65,rotation:7.1945}},{t:this.ikNode_4,p:{x:866.25,y:249.5,regX:143.7,regY:38.8,rotation:-10.9416}},{t:this.ikNode_8,p:{regX:208.8,rotation:4.1817,x:900.9,y:434.75,regY:42.7}},{t:this.ikNode_10,p:{regX:207.8,regY:52.5,rotation:-9.0261,x:943.95,y:437.1}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:9.2381,x:877.9,y:254.35,regX:155.3,scaleX:0.1872,scaleY:0.1872}},{t:this.ikNode_12,p:{rotation:1.9188,x:973.95,y:345.15,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:899.1,y:354.9}},{t:this.ikNode_2,p:{x:886.5,y:343.4,rotation:7.1139}},{t:this.ikNode_4,p:{x:861.35,y:249.35,regX:143.7,regY:38.8,rotation:-9.648}},{t:this.ikNode_8,p:{regX:208.7,rotation:5.3812,x:896.15,y:434.6,regY:42.4}},{t:this.ikNode_10,p:{regX:207.7,regY:52.9,rotation:-10.1913,x:938.9,y:437.3}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:11.8331,x:872.7,y:254.35,regX:155.6,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:4.4604,x:968.75,y:345.2,regY:393.9,regX:27.7}},{t:this.ikNode_2_1,p:{x:894.2,y:354.8}},{t:this.ikNode_2,p:{x:881.6,y:343.15,rotation:7.038}},{t:this.ikNode_4,p:{x:856.45,y:249.3,regX:143.5,regY:38.9,rotation:-8.3555}},{t:this.ikNode_8,p:{regX:209.1,rotation:6.5747,x:891.45,y:434.55,regY:42.6}},{t:this.ikNode_10,p:{regX:207.7,regY:52.8,rotation:-11.3606,x:933.85,y:437.35}}]},1).to({state:[{t:this.ikNode_6,p:{regY:366.1,rotation:14.4192,x:867.5,y:254.3,regX:155.7,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:6.9997,x:963.55,y:345.2,regY:393.9,regX:27.7}},{t:this.ikNode_2_1,p:{x:889.25,y:354.7}},{t:this.ikNode_2,p:{x:876.65,y:342.85,rotation:6.9574}},{t:this.ikNode_4,p:{x:851.6,y:249.1,regX:143.7,regY:39,rotation:-7.0629}},{t:this.ikNode_8,p:{regX:208.8,rotation:7.7704,x:886.6,y:434.4,regY:42.4}},{t:this.ikNode_10,p:{regX:207.8,regY:52.7,rotation:-12.5308,x:928.75,y:437.4}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:17.0107,x:862.25,y:254.3,regX:155.6,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:9.5398,x:958.3,y:345.25,regY:393.9,regX:27.7}},{t:this.ikNode_2_1,p:{x:884.35,y:354.55}},{t:this.ikNode_2,p:{x:871.75,y:342.6,rotation:6.8815}},{t:this.ikNode_4,p:{x:846.7,y:248.95,regX:143.7,regY:38.8,rotation:-5.7686}},{t:this.ikNode_8,p:{regX:208.8,rotation:8.9652,x:881.85,y:434.3,regY:42.5}},{t:this.ikNode_10,p:{regX:207.8,regY:52.6,rotation:-13.7016,x:923.6,y:437.5}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.8,rotation:19.5991,x:857.05,y:254.2,regX:155.5,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:12.0824,x:953.05,y:345.4,regY:394,regX:27.6}},{t:this.ikNode_2_1,p:{x:879.4,y:354.4}},{t:this.ikNode_2,p:{x:866.85,y:342.4,rotation:6.8003}},{t:this.ikNode_4,p:{x:841.75,y:248.75,regX:143.7,regY:38.6,rotation:-4.473}},{t:this.ikNode_8,p:{regX:208.8,rotation:10.1636,x:877.05,y:434.15,regY:42.5}},{t:this.ikNode_10,p:{regX:207.7,regY:52.7,rotation:-14.8678,x:918.6,y:437.6}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:22.1901,x:851.85,y:254.15,regX:155.6,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:14.6218,x:947.75,y:345.35,regY:393.8,regX:27.5}},{t:this.ikNode_2_1,p:{x:874.45,y:354.3}},{t:this.ikNode_2,p:{x:861.95,y:342.15,rotation:6.7197}},{t:this.ikNode_4,p:{x:836.85,y:248.7,regX:143.6,regY:39.1,rotation:-3.1842}},{t:this.ikNode_8,p:{regX:208.7,rotation:11.357,x:872.25,y:434.15,regY:42.6}},{t:this.ikNode_10,p:{regX:207.8,regY:52.6,rotation:-16.0411,x:913.45,y:437.7}}]},1).to({state:[{t:this.ikNode_6,p:{regY:366.1,rotation:24.7826,x:846.6,y:254.15,regX:155.5,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:17.1622,x:942.45,y:345.45,regY:393.9,regX:27.5}},{t:this.ikNode_2_1,p:{x:869.55,y:354.15}},{t:this.ikNode_2,p:{x:857,y:341.9,rotation:6.6444}},{t:this.ikNode_4,p:{x:832.1,y:248.5,regX:143.8,regY:38.9,rotation:-1.8879}},{t:this.ikNode_8,p:{regX:208.8,rotation:12.5558,x:867.55,y:434,regY:42.5}},{t:this.ikNode_10,p:{regX:208,regY:52.8,rotation:-17.2062,x:908.45,y:437.8}}]},1).to({state:[{t:this.ikNode_6,p:{regY:366,rotation:27.3736,x:841.4,y:254.1,regX:155.5,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:19.7018,x:937.35,y:345.55,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:864.6,y:354.05}},{t:this.ikNode_2,p:{x:852.1,y:341.65,rotation:6.5638}},{t:this.ikNode_4,p:{x:827.15,y:248.3,regX:143.8,regY:38.8,rotation:-0.597}},{t:this.ikNode_8,p:{regX:208.8,rotation:13.7507,x:862.75,y:433.9,regY:42.4}},{t:this.ikNode_10,p:{regX:207.9,regY:53,rotation:-18.378,x:903.4,y:437.95}}]},1).to({state:[{t:this.ikNode_6,p:{regY:366.2,rotation:29.9622,x:836.15,y:254.05,regX:155.6,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:22.2423,x:932.05,y:345.55,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:859.7,y:353.9}},{t:this.ikNode_2,p:{x:847.2,y:341.4,rotation:6.4879}},{t:this.ikNode_4,p:{x:822.3,y:248.15,regX:143.6,regY:38.8,rotation:0.6751}},{t:this.ikNode_8,p:{regX:208.7,rotation:14.9466,x:857.95,y:433.8,regY:42.6}},{t:this.ikNode_10,p:{regX:207.9,regY:52.6,rotation:-19.5455,x:898.25,y:437.95}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.8,rotation:27.641,x:832.65,y:254,regX:155.7,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:20.8301,x:929.15,y:346.05,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:856.35,y:354.45}},{t:this.ikNode_2,p:{x:843.65,y:341.5,rotation:5.295}},{t:this.ikNode_4,p:{x:819.05,y:248.55,regX:143.6,regY:38.9,rotation:0.62}},{t:this.ikNode_8,p:{regX:208.7,rotation:13.1617,x:854.45,y:433.85,regY:42.6}},{t:this.ikNode_10,p:{regX:208,regY:52.9,rotation:-18.3649,x:894.65,y:438.05}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:25.3282,x:829.05,y:253.9,regX:155.5,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:19.4179,x:926.3,y:346.7,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:853.05,y:354.95}},{t:this.ikNode_2,p:{x:840.1,y:341.6,rotation:4.1091}},{t:this.ikNode_4,p:{x:815.9,y:248.9,regX:143.8,regY:38.8,rotation:0.5694}},{t:this.ikNode_8,p:{regX:208.7,rotation:11.3806,x:850.85,y:433.95,regY:42.6}},{t:this.ikNode_10,p:{regX:208,regY:52.8,rotation:-17.1872,x:891,y:438}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.8,rotation:23.009,x:825.45,y:253.95,regX:155.7,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:18.0062,x:923.3,y:347.3,regY:394.1,regX:27.6}},{t:this.ikNode_2_1,p:{x:849.75,y:355.45}},{t:this.ikNode_2,p:{x:836.5,y:341.7,rotation:2.9202}},{t:this.ikNode_4,p:{x:812.75,y:249.25,regX:143.8,regY:38.9,rotation:0.5143}},{t:this.ikNode_8,p:{regX:208.8,rotation:9.5967,x:847.3,y:433.9,regY:42.6}},{t:this.ikNode_10,p:{regX:207.8,regY:52.8,rotation:-16.0062,x:887.35,y:438.2}}]},1).to({state:[{t:this.ikNode_6,p:{regY:366,rotation:20.6944,x:821.9,y:253.85,regX:155.4,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:16.5943,x:920.45,y:347.75,regY:393.8,regX:27.7}},{t:this.ikNode_2_1,p:{x:846.45,y:355.9}},{t:this.ikNode_2,p:{x:832.95,y:341.8,rotation:1.7281}},{t:this.ikNode_4,p:{x:809.65,y:249.65,regX:143.7,regY:38.8,rotation:0.4638}},{t:this.ikNode_8,p:{regX:208.9,rotation:7.8167,x:843.75,y:433.95,regY:42.5}},{t:this.ikNode_10,p:{regX:208,regY:52.6,rotation:-14.8253,x:883.7,y:438.2}}]},1).to({state:[{t:this.ikNode_6,p:{regY:366.2,rotation:18.3788,x:818.35,y:253.95,regX:155.5,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:15.1813,x:917.55,y:348.2,regY:393.9,regX:27.7}},{t:this.ikNode_2_1,p:{x:843.15,y:356.4}},{t:this.ikNode_2,p:{x:829.4,y:341.9,rotation:0.5414}},{t:this.ikNode_4,p:{x:806.5,y:250.05,regX:143.7,regY:38.9,rotation:0.4087}},{t:this.ikNode_8,p:{regX:208.7,rotation:6.0358,x:840.1,y:434,regY:42.5}},{t:this.ikNode_10,p:{regX:208,regY:52.6,rotation:-13.6445,x:880,y:438.25}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:16.0603,x:814.75,y:253.8,regX:155.4,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:13.7705,x:914.6,y:348.7,regY:394,regX:27.6}},{t:this.ikNode_2_1,p:{x:839.9,y:356.85}},{t:this.ikNode_2,p:{x:825.85,y:342,rotation:-0.6262}},{t:this.ikNode_4,p:{x:803.4,y:250.4,regX:143.7,regY:38.8,rotation:0.3582}},{t:this.ikNode_8,p:{regX:208.9,rotation:4.2511,x:836.55,y:434.1,regY:42.7}},{t:this.ikNode_10,p:{regX:207.8,regY:52.7,rotation:-12.4637,x:876.3,y:438.35}}]},1).to({state:[{t:this.ikNode_6,p:{regY:366,rotation:13.7439,x:811.25,y:253.8,regX:155.6,scaleX:0.1872,scaleY:0.1872}},{t:this.ikNode_12,p:{rotation:12.3594,x:911.75,y:349.1,regY:393.9,regX:27.7}},{t:this.ikNode_2_1,p:{x:836.65,y:357.3}},{t:this.ikNode_2,p:{x:822.3,y:342.1,rotation:-1.813}},{t:this.ikNode_4,p:{x:800.35,y:250.8,regX:143.6,regY:38.9,rotation:0.3031}},{t:this.ikNode_8,p:{regX:208.8,rotation:2.4705,x:832.9,y:434.05,regY:42.5}},{t:this.ikNode_10,p:{regX:208,regY:52.8,rotation:-11.2855,x:872.6,y:438.45}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:11.4272,x:807.7,y:253.7,regX:155.8,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:10.9474,x:908.85,y:349.5,regY:393.9,regX:27.7}},{t:this.ikNode_2_1,p:{x:833.45,y:357.7}},{t:this.ikNode_2,p:{x:818.75,y:342.25,rotation:-3.0051}},{t:this.ikNode_4,p:{x:797.3,y:251.15,regX:143.6,regY:38.8,rotation:0.2526}},{t:this.ikNode_8,p:{regX:208.8,rotation:0.6878,x:829.3,y:434.05,regY:42.4}},{t:this.ikNode_10,p:{regX:208,regY:52.9,rotation:-10.1026,x:868.9,y:438.6}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.8,rotation:9.1106,x:804,y:253.7,regX:155.6,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:9.5341,x:905.85,y:349.85,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:830.2,y:358.15}},{t:this.ikNode_2,p:{x:815.2,y:342.3,rotation:-4.194}},{t:this.ikNode_4,p:{x:794.25,y:251.5,regX:143.6,regY:38.9,rotation:0.1975}},{t:this.ikNode_8,p:{regX:208.8,rotation:-1.0711,x:825.7,y:434.2,regY:42.5}},{t:this.ikNode_10,p:{regX:207.8,regY:52.6,rotation:-8.923,x:865.2,y:438.6}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:6.7942,x:800.4,y:253.7,regX:155.6,scaleX:0.1872,scaleY:0.1872}},{t:this.ikNode_12,p:{rotation:8.1218,x:903,y:350.2,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:827,y:358.55}},{t:this.ikNode_2,p:{x:811.65,y:342.4,rotation:-5.3803}},{t:this.ikNode_4,p:{x:791.25,y:251.85,regX:143.8,regY:38.8,rotation:0.147}},{t:this.ikNode_8,p:{regX:208.8,rotation:-2.8541,x:822.1,y:434.3,regY:42.6}},{t:this.ikNode_10,p:{regX:208,regY:52.8,rotation:-7.7431,x:861.6,y:438.7}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:4.4797,x:796.75,y:253.65,regX:155.4,scaleX:0.1872,scaleY:0.1872}},{t:this.ikNode_12,p:{rotation:6.7109,x:900.2,y:350.5,regY:393.9,regX:27.7}},{t:this.ikNode_2_1,p:{x:823.8,y:358.95}},{t:this.ikNode_2,p:{x:808.1,y:342.5,rotation:-6.5731}},{t:this.ikNode_4,p:{x:788.2,y:252.25,regX:143.8,regY:38.9,rotation:0.0918}},{t:this.ikNode_8,p:{regX:208.8,rotation:-4.6352,x:818.5,y:434.25,regY:42.4}},{t:this.ikNode_10,p:{regX:208,regY:52.9,rotation:-6.5618,x:857.85,y:438.8}}]},1).to({state:[{t:this.ikNode_6,p:{regY:366,rotation:2.1633,x:793.15,y:253.65,regX:155.5,scaleX:0.1872,scaleY:0.1872}},{t:this.ikNode_12,p:{rotation:5.2992,x:897.2,y:350.8,regY:394,regX:27.6}},{t:this.ikNode_2_1,p:{x:820.65,y:359.3}},{t:this.ikNode_2,p:{x:804.55,y:342.6,rotation:-7.7592}},{t:this.ikNode_4,p:{x:785.15,y:252.6,regX:143.7,regY:38.8,rotation:0.0413}},{t:this.ikNode_8,p:{regX:208.8,rotation:-6.4167,x:814.9,y:434.35,regY:42.6}},{t:this.ikNode_10,p:{regX:207.9,regY:52.7,rotation:-5.3837,x:854.2,y:438.85}}]},1).to({state:[{t:this.ikNode_6,p:{regY:366.1,rotation:-0.1308,x:789.45,y:253.65,regX:155.5,scaleX:0.1872,scaleY:0.1872}},{t:this.ikNode_12,p:{rotation:3.8854,x:894.3,y:351,regY:393.9,regX:27.7}},{t:this.ikNode_2_1,p:{x:817.5,y:359.65}},{t:this.ikNode_2,p:{x:801,y:342.75,rotation:-8.9491}},{t:this.ikNode_4,p:{x:782.15,y:253,regX:143.7,regY:38.9,rotation:0}},{t:this.ikNode_8,p:{regX:208.9,rotation:-8.1993,x:811.3,y:434.35,regY:42.4}},{t:this.ikNode_10,p:{regX:208.1,regY:52.6,rotation:-4.2027,x:850.6,y:438.9}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:2.8601,x:784.65,y:253.15,regX:155.5,scaleX:0.1872,scaleY:0.1872}},{t:this.ikNode_12,p:{rotation:5.9428,x:890.55,y:349.5,regY:394,regX:27.6}},{t:this.ikNode_2_1,p:{x:813.15,y:359.6}},{t:this.ikNode_2,p:{x:795.9,y:342.45,rotation:-6.9241}},{t:this.ikNode_4,p:{x:777.5,y:253,regX:143.7,regY:38.9,rotation:0}},{t:this.ikNode_8,p:{regX:208.8,rotation:-5.762,x:806.15,y:434.15,regY:42.6}},{t:this.ikNode_10,p:{regX:208,regY:52.9,rotation:-5.6385,x:845.35,y:438.7}}]},1).to({state:[{t:this.ikNode_6,p:{regY:366.2,rotation:5.8728,x:779.65,y:252.75,regX:155.6,scaleX:0.1872,scaleY:0.1872}},{t:this.ikNode_12,p:{rotation:7.9998,x:886.65,y:348,regY:393.9,regX:27.5}},{t:this.ikNode_2_1,p:{x:808.75,y:359.55}},{t:this.ikNode_2,p:{x:790.85,y:342.25,rotation:-4.8931}},{t:this.ikNode_4,p:{x:772.85,y:253,regX:143.7,regY:38.9,rotation:0}},{t:this.ikNode_8,p:{regX:208.6,rotation:-3.3212,x:801,y:433.8,regY:42.5}},{t:this.ikNode_10,p:{regX:208.1,regY:52.6,rotation:-7.0729,x:840.25,y:438.35}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:8.8879,x:774.7,y:252.15,regX:155.4,scaleX:0.1872,scaleY:0.1872}},{t:this.ikNode_12,p:{rotation:10.0566,x:882.85,y:346.4,regY:393.9,regX:27.5}},{t:this.ikNode_2_1,p:{x:804.35,y:359.5}},{t:this.ikNode_2,p:{x:785.8,y:342,rotation:-2.8638}},{t:this.ikNode_4,p:{x:768.15,y:253,regX:143.7,regY:38.9,rotation:0}},{t:this.ikNode_8,p:{regX:208.8,rotation:-0.8818,x:795.95,y:433.55,regY:42.6}},{t:this.ikNode_10,p:{regX:208,regY:52.8,rotation:-8.5079,x:835.05,y:438.1}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:11.9,x:769.9,y:251.65,regX:155.8,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:12.1123,x:879.05,y:345,regY:393.9,regX:27.7}},{t:this.ikNode_2_1,p:{x:799.95,y:359.5}},{t:this.ikNode_2,p:{x:780.7,y:341.7,rotation:-0.8381}},{t:this.ikNode_4,p:{x:763.4,y:253.05,regX:143.7,regY:38.9,rotation:0}},{t:this.ikNode_8,p:{regX:209,rotation:1.5328,x:790.95,y:433.2,regY:42.5}},{t:this.ikNode_10,p:{regX:207.8,regY:52.8,rotation:-9.9379,x:829.9,y:437.8}}]},1).to({state:[{t:this.ikNode_6,p:{regY:366.2,rotation:14.9155,x:764.8,y:251.25,regX:155.3,scaleX:0.1872,scaleY:0.1872}},{t:this.ikNode_12,p:{rotation:14.1708,x:875.15,y:343.6,regY:393.8,regX:27.7}},{t:this.ikNode_2_1,p:{x:795.5,y:359.5}},{t:this.ikNode_2,p:{x:775.7,y:341.5,rotation:1.1677}},{t:this.ikNode_4,p:{x:758.6,y:253.1,regX:143.7,regY:38.9,rotation:0}},{t:this.ikNode_8,p:{regX:208.8,rotation:3.9735,x:785.85,y:432.9,regY:42.6}},{t:this.ikNode_10,p:{regX:207.7,regY:52.8,rotation:-11.3751,x:824.7,y:437.45}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:17.9312,x:759.95,y:250.7,regX:155.5,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:16.2255,x:871.25,y:342.3,regY:393.8,regX:27.7}},{t:this.ikNode_2_1,p:{x:791,y:359.55}},{t:this.ikNode_2,p:{x:770.6,y:341.25,rotation:3.1939}},{t:this.ikNode_4,p:{x:753.8,y:253.15,regX:143.7,regY:38.9,rotation:0}},{t:this.ikNode_8,p:{regX:208.8,rotation:6.4167,x:780.8,y:432.65,regY:42.4}},{t:this.ikNode_10,p:{regX:207.8,regY:52.6,rotation:-12.8096,x:819.6,y:437.05}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:20.9443,x:755.1,y:250.2,regX:155.5,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:18.285,x:867.3,y:341.2,regY:394,regX:27.7}},{t:this.ikNode_2_1,p:{x:786.5,y:359.65}},{t:this.ikNode_2,p:{x:765.6,y:341,rotation:5.2238}},{t:this.ikNode_4,p:{x:749,y:253.2,regX:143.7,regY:38.9,rotation:0}},{t:this.ikNode_8,p:{regX:208.7,rotation:8.8574,x:775.7,y:432.35,regY:42.6}},{t:this.ikNode_10,p:{regX:208,regY:52.8,rotation:-14.2433,x:814.6,y:436.8}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:23.9568,x:750.2,y:249.7,regX:155.6,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:20.3409,x:863.4,y:340.05,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:781.95,y:359.8}},{t:this.ikNode_2,p:{x:760.55,y:340.75,rotation:7.2512}},{t:this.ikNode_4,p:{x:744.15,y:253.25,regX:143.7,regY:38.9,rotation:0}},{t:this.ikNode_8,p:{regX:208.8,rotation:11.2954,x:770.6,y:432.1,regY:42.6}},{t:this.ikNode_10,p:{regX:207.8,regY:52.6,rotation:-15.676,x:809.4,y:436.5}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:26.9746,x:745.35,y:249.2,regX:155.7,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:22.3985,x:859.6,y:339.15,regY:393.9,regX:27.8}},{t:this.ikNode_2_1,p:{x:777.35,y:359.95}},{t:this.ikNode_2,p:{x:755.5,y:340.5,rotation:9.2781}},{t:this.ikNode_4,p:{x:739.3,y:253.3,regX:143.7,regY:38.9,rotation:0}},{t:this.ikNode_8,p:{regX:208.8,rotation:13.7362,x:765.55,y:431.8,regY:42.5}},{t:this.ikNode_10,p:{regX:208,regY:52.7,rotation:-17.1099,x:804.3,y:436.25}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:29.9871,x:740.5,y:248.7,regX:155.3,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:24.4544,x:855.6,y:338.35,regY:393.9,regX:27.7}},{t:this.ikNode_2_1,p:{x:772.75,y:360.15}},{t:this.ikNode_2,p:{x:750.45,y:340.25,rotation:11.3072}},{t:this.ikNode_4,p:{x:734.5,y:253.35,regX:143.7,regY:38.9,rotation:0}},{t:this.ikNode_8,p:{regX:208.7,rotation:16.1743,x:760.35,y:431.45,regY:42.6}},{t:this.ikNode_10,p:{regX:208.1,regY:52.8,rotation:-18.5444,x:799.25,y:435.95}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.8,rotation:27.9065,x:738.65,y:248.4,regX:155.3,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:23.0807,x:853.65,y:338.15,regY:394,regX:27.7}},{t:this.ikNode_2_1,p:{x:771.1,y:360.35}},{t:this.ikNode_2,p:{x:749.55,y:340.05,rotation:11.2878}},{t:this.ikNode_4,p:{x:733,y:253.5,regX:143.7,regY:38.9,rotation:0}},{t:this.ikNode_8,p:{regX:209,rotation:14.7931,x:758.55,y:431.45,regY:42.6}},{t:this.ikNode_10,p:{regX:208,regY:52.9,rotation:-17.1624,x:797.25,y:435.95}}]},1).to({state:[{t:this.ikNode_6,p:{regY:366.1,rotation:25.8317,x:736.7,y:248.25,regX:155.6,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:21.7099,x:851.75,y:337.9,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:769.45,y:360.5}},{t:this.ikNode_2,p:{x:748.8,y:339.95,rotation:11.2693}},{t:this.ikNode_4,p:{x:731.55,y:253.65,regX:143.7,regY:38.9,rotation:0}},{t:this.ikNode_8,p:{regX:208.8,rotation:13.4092,x:756.6,y:431.25,regY:42.5}},{t:this.ikNode_10,p:{regX:207.8,regY:52.7,rotation:-15.7812,x:795.3,y:435.75}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:23.7519,x:734.8,y:247.95,regX:155.5,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:20.3384,x:849.85,y:337.7,regY:393.9,regX:27.7}},{t:this.ikNode_2_1,p:{x:767.75,y:360.65}},{t:this.ikNode_2,p:{x:748,y:339.8,rotation:11.2499}},{t:this.ikNode_4,p:{x:730.05,y:253.85,regX:143.7,regY:38.9,rotation:0}},{t:this.ikNode_8,p:{regX:208.8,rotation:12.0261,x:754.65,y:431.15,regY:42.5}},{t:this.ikNode_10,p:{regX:208,regY:52.9,rotation:-14.4,x:793.4,y:435.65}}]},1).to({state:[{t:this.ikNode_6,p:{regY:366,rotation:21.6704,x:732.85,y:247.8,regX:155.5,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:18.9671,x:848,y:337.5,regY:394,regX:27.7}},{t:this.ikNode_2_1,p:{x:766.05,y:360.8}},{t:this.ikNode_2,p:{x:747.15,y:339.65,rotation:11.2305}},{t:this.ikNode_4,p:{x:728.6,y:254,regX:143.7,regY:38.9,rotation:0}},{t:this.ikNode_8,p:{regX:208.7,rotation:10.6472,x:752.75,y:430.95,regY:42.5}},{t:this.ikNode_10,p:{regX:208,regY:52.7,rotation:-13.0223,x:791.45,y:435.55}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.8,rotation:19.5947,x:730.9,y:247.55,regX:155.5,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:17.5952,x:846.1,y:337.2,regY:393.8,regX:27.6}},{t:this.ikNode_2_1,p:{x:764.35,y:360.9}},{t:this.ikNode_2,p:{x:746.35,y:339.5,rotation:11.2111}},{t:this.ikNode_4,p:{x:727.1,y:254.2,regX:143.7,regY:38.9,rotation:0}},{t:this.ikNode_8,p:{regX:208.9,rotation:9.2642,x:750.9,y:430.85,regY:42.5}},{t:this.ikNode_10,p:{regX:207.9,regY:52.8,rotation:-11.6394,x:789.5,y:435.45}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:17.5145,x:729,y:247.35,regX:155.5,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:16.2255,x:844.2,y:337,regY:393.8,regX:27.7}},{t:this.ikNode_2_1,p:{x:762.6,y:361}},{t:this.ikNode_2,p:{x:745.55,y:339.4,rotation:11.1917}},{t:this.ikNode_4,p:{x:725.65,y:254.4,regX:143.7,regY:38.9,rotation:0}},{t:this.ikNode_8,p:{regX:208.7,rotation:7.882,x:748.95,y:430.6,regY:42.2}},{t:this.ikNode_10,p:{regX:207.9,regY:52.9,rotation:-10.2611,x:787.6,y:435.4}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:15.4391,x:727.05,y:247.2,regX:155.4,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:14.8544,x:842.25,y:336.8,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:760.85,y:361.1}},{t:this.ikNode_2,p:{x:744.7,y:339.25,rotation:11.1733}},{t:this.ikNode_4,p:{x:724.15,y:254.6,regX:143.7,regY:38.9,rotation:0}},{t:this.ikNode_8,p:{regX:209,rotation:6.5003,x:747.1,y:430.55,regY:42.6}},{t:this.ikNode_10,p:{regX:207.9,regY:52.5,rotation:-8.8812,x:785.65,y:435.2}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:13.3598,x:725.2,y:247,regX:155.6,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:13.4812,x:840.4,y:336.55,regY:393.9,regX:27.7}},{t:this.ikNode_2_1,p:{x:759.1,y:361.15}},{t:this.ikNode_2,p:{x:743.9,y:339.05,rotation:11.1539}},{t:this.ikNode_4,p:{x:722.7,y:254.8,regX:143.7,regY:38.9,rotation:0}},{t:this.ikNode_8,p:{regX:209,rotation:5.1171,x:745.2,y:430.3,regY:42.5}},{t:this.ikNode_10,p:{regX:207.8,regY:52.6,rotation:-7.4965,x:783.75,y:435.05}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:11.2797,x:723.2,y:246.8,regX:155.6,scaleX:0.1872,scaleY:0.1872}},{t:this.ikNode_12,p:{rotation:12.1097,x:838.45,y:336.35,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:757.3,y:361.2}},{t:this.ikNode_2,p:{x:743.05,y:338.95,rotation:11.1345}},{t:this.ikNode_4,p:{x:721.2,y:255,regX:143.7,regY:38.9,rotation:0}},{t:this.ikNode_8,p:{regX:208.9,rotation:3.7327,x:743.25,y:430.1,regY:42.5}},{t:this.ikNode_10,p:{regX:207.8,regY:52.8,rotation:-6.1165,x:781.75,y:434.9}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:9.2004,x:721.3,y:246.7,regX:155.6,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:10.7372,x:836.55,y:336.25,regY:394.1,regX:27.6}},{t:this.ikNode_2_1,p:{x:755.5,y:361.2}},{t:this.ikNode_2,p:{x:742.25,y:338.8,rotation:11.1151}},{t:this.ikNode_4,p:{x:719.75,y:255.2,regX:143.7,regY:38.9,rotation:0}},{t:this.ikNode_8,p:{regX:208.7,rotation:2.3504,x:741.3,y:429.8,regY:42.5}},{t:this.ikNode_10,p:{regX:208,regY:52.7,rotation:-4.7349,x:779.75,y:434.75}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:7.1239,x:719.35,y:246.55,regX:155.6,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:9.3685,x:834.7,y:335.9,regY:393.8,regX:27.7}},{t:this.ikNode_2_1,p:{x:753.75,y:361.15}},{t:this.ikNode_2,p:{x:741.4,y:338.7,rotation:11.0966}},{t:this.ikNode_4,p:{x:718.3,y:255.45,regX:143.7,regY:38.9,rotation:0}},{t:this.ikNode_8,p:{regX:208.8,rotation:0.9648,x:739.5,y:429.6,regY:42.5}},{t:this.ikNode_10,p:{regX:207.8,regY:52.9,rotation:-3.3564,x:777.9,y:434.6}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:13.1242,x:719.3,y:246.45,regX:155.6,scaleX:0.1872,scaleY:0.1872}},{t:this.ikNode_12,p:{rotation:9.3632,x:834.85,y:337.9,regY:393.8,regX:27.7}},{t:this.ikNode_2_1,p:{x:753.8,y:361.4}},{t:this.ikNode_2,p:{x:742.55,y:338.65,rotation:12.5926}},{t:this.ikNode_4,p:{x:718.4,y:255.35,regX:143.5,regY:38.8,rotation:2.9865}},{t:this.ikNode_8,p:{regX:208.8,rotation:0.9556,x:739.5,y:429.7,regY:42.5}},{t:this.ikNode_10,p:{regX:207.8,regY:52.9,rotation:-3.3472,x:777.75,y:434.65}}]},1).to({state:[{t:this.ikNode_6,p:{regY:366,rotation:19.1234,x:719.25,y:246.5,regX:155.5,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:9.3579,x:834.95,y:339.8,regY:393.8,regX:27.6}},{t:this.ikNode_2_1,p:{x:753.8,y:361.6}},{t:this.ikNode_2,p:{x:743.6,y:338.65,rotation:14.0876}},{t:this.ikNode_4,p:{x:718.6,y:255.35,regX:143.8,regY:38.8,rotation:5.9857}},{t:this.ikNode_8,p:{regX:208.8,rotation:0.9464,x:739.45,y:429.7,regY:42.5}},{t:this.ikNode_10,p:{regX:207.8,regY:52.9,rotation:-3.338,x:777.7,y:434.7}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:25.1233,x:719.2,y:246.45,regX:155.4,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:9.3548,x:835.05,y:341.7,regY:393.8,regX:27.6}},{t:this.ikNode_2_1,p:{x:753.85,y:361.75}},{t:this.ikNode_2,p:{x:744.7,y:338.6,rotation:15.578}},{t:this.ikNode_4,p:{x:718.65,y:255.35,regX:143.6,regY:38.8,rotation:8.9829}},{t:this.ikNode_8,p:{regX:208.8,rotation:0.9371,x:739.45,y:429.75,regY:42.6}},{t:this.ikNode_10,p:{regX:207.8,regY:52.8,rotation:-3.3288,x:777.7,y:434.75}}]},1).to({state:[{t:this.ikNode_6,p:{regY:366.2,rotation:31.1224,x:719.1,y:246.45,regX:155.5,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:9.3496,x:835.1,y:343.5,regY:393.8,regX:27.6}},{t:this.ikNode_2_1,p:{x:753.9,y:361.85}},{t:this.ikNode_2,p:{x:745.8,y:338.55,rotation:17.0754}},{t:this.ikNode_4,p:{x:718.8,y:255.4,regX:143.6,regY:39.1,rotation:11.9819}},{t:this.ikNode_8,p:{regX:208.8,rotation:0.9233,x:739.45,y:429.75,regY:42.6}},{t:this.ikNode_10,p:{regX:207.9,regY:52.8,rotation:-3.3242,x:777.7,y:434.8}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:37.1231,x:719.05,y:246.4,regX:155.3,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:9.3469,x:835.1,y:345.2,regY:393.8,regX:27.7}},{t:this.ikNode_2_1,p:{x:753.9,y:361.9}},{t:this.ikNode_2,p:{x:746.9,y:338.6,rotation:18.569}},{t:this.ikNode_4,p:{x:719,y:255.3,regX:143.6,regY:38.8,rotation:14.9764}},{t:this.ikNode_8,p:{regX:208.8,rotation:0.9141,x:739.45,y:429.7,regY:42.6}},{t:this.ikNode_10,p:{regX:207.9,regY:52.8,rotation:-3.315,x:777.65,y:434.85}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:43.12,x:719,y:246.4,regX:155.7,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:9.3416,x:835.05,y:347,regY:393.8,regX:27.7}},{t:this.ikNode_2_1,p:{x:753.95,y:361.9}},{t:this.ikNode_2,p:{x:748,y:338.6,rotation:20.0656}},{t:this.ikNode_4,p:{x:719.15,y:255.4,regX:143.6,regY:39,rotation:17.9789}},{t:this.ikNode_8,p:{regX:208.8,rotation:0.9048,x:739.4,y:429.75,regY:42.4}},{t:this.ikNode_10,p:{regX:208.2,regY:53,rotation:-3.3055,x:777.7,y:434.85}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:49.123,x:718.95,y:246.25,regX:155.3,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:9.3359,x:835,y:348.7,regY:393.9,regX:27.7}},{t:this.ikNode_2_1,p:{x:754,y:361.85}},{t:this.ikNode_2,p:{x:749.1,y:338.5,rotation:21.5618}},{t:this.ikNode_4,p:{x:719.4,y:255.4,regX:143.8,regY:38.9,rotation:20.9759}},{t:this.ikNode_8,p:{regX:208.8,rotation:0.891,x:739.4,y:429.7,regY:42.5}},{t:this.ikNode_10,p:{regX:207.9,regY:53,rotation:-3.2963,x:777.7,y:434.85}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:55.1217,x:718.95,y:246.35,regX:155.3,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:9.3333,x:834.9,y:350.3,regY:393.9,regX:27.7}},{t:this.ikNode_2_1,p:{x:754,y:361.8}},{t:this.ikNode_2,p:{x:750.15,y:338.55,rotation:23.0527}},{t:this.ikNode_4,p:{x:719.6,y:255.4,regX:143.7,regY:38.7,rotation:23.9741}},{t:this.ikNode_8,p:{regX:209,rotation:0.8818,x:739.45,y:429.65,regY:42.5}},{t:this.ikNode_10,p:{regX:207.9,regY:52.9,rotation:-3.2871,x:777.7,y:434.75}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:61.1215,x:719.1,y:246.35,regX:155.5,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:9.328,x:834.8,y:351.8,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:754.05,y:361.65}},{t:this.ikNode_2,p:{x:751.3,y:338.55,rotation:24.5496}},{t:this.ikNode_4,p:{x:719.85,y:255.4,regX:143.6,regY:38.9,rotation:26.9717}},{t:this.ikNode_8,p:{regX:209,rotation:0.8725,x:739.4,y:429.6,regY:42.5}},{t:this.ikNode_10,p:{regX:207.9,regY:52.9,rotation:-3.2779,x:777.75,y:434.7}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:67.1228,x:719.2,y:246.3,regX:155.3,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:9.3253,x:834.65,y:353.3,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:754.15,y:361.5}},{t:this.ikNode_2,p:{x:752.4,y:338.55,rotation:26.0449}},{t:this.ikNode_4,p:{x:720.2,y:255.35,regX:143.7,regY:38.8,rotation:29.9705}},{t:this.ikNode_8,p:{regX:209,rotation:0.8587,x:739.4,y:429.55,regY:42.6}},{t:this.ikNode_10,p:{regX:207.9,regY:52.9,rotation:-3.2733,x:777.8,y:434.65}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:65.6125,x:719.25,y:246.95,regX:155.6,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:8.7174,x:834.5,y:353.75,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:754.25,y:362.15}},{t:this.ikNode_2,p:{x:750.65,y:338.95,rotation:23.8286}},{t:this.ikNode_4,p:{x:719.9,y:255.25,regX:143.7,regY:38.8,rotation:29.9642}},{t:this.ikNode_8,p:{regX:209,rotation:0.8402,x:739.55,y:429.65,regY:42.6}},{t:this.ikNode_10,p:{regX:208,regY:52.8,rotation:-3.2548,x:777.7,y:434.75}}]},1).to({state:[{t:this.ikNode_6,p:{regY:366,rotation:64.1056,x:719.45,y:247.65,regX:155.6,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:8.1081,x:834.4,y:354.1,regY:393.9,regX:27.5}},{t:this.ikNode_2_1,p:{x:754.4,y:362.7}},{t:this.ikNode_2,p:{x:748.95,y:339.5,rotation:21.6125}},{t:this.ikNode_4,p:{x:719.7,y:255.15,regX:143.6,regY:38.8,rotation:29.9539}},{t:this.ikNode_8,p:{regX:209,rotation:0.8171,x:739.75,y:429.7,regY:42.5}},{t:this.ikNode_10,p:{regX:208,regY:53,rotation:-3.2364,x:777.7,y:434.9}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:62.5992,x:719.9,y:248.25,regX:155.5,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:7.5022,x:834.4,y:354.45,regY:394.1,regX:27.7}},{t:this.ikNode_2_1,p:{x:754.55,y:363.05}},{t:this.ikNode_2,p:{x:747.2,y:339.95,rotation:19.3998}},{t:this.ikNode_4,p:{x:719.8,y:255,regX:143.6,regY:38.9,rotation:29.9437}},{t:this.ikNode_8,p:{regX:208.9,rotation:0.7941,x:739.75,y:429.75,regY:42.5}},{t:this.ikNode_10,p:{regX:208,regY:53,rotation:-3.2223,x:777.65,y:435}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:61.0901,x:720.4,y:248.8,regX:155.3,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:6.8947,x:834.3,y:354.5,regY:394,regX:27.6}},{t:this.ikNode_2_1,p:{x:754.65,y:363.3}},{t:this.ikNode_2,p:{x:745.5,y:340.45,rotation:17.1841}},{t:this.ikNode_4,p:{x:719.8,y:254.9,regX:143.6,regY:38.9,rotation:29.9374}},{t:this.ikNode_8,p:{regX:208.9,rotation:0.771,x:739.85,y:429.75,regY:42.6}},{t:this.ikNode_10,p:{regX:208,regY:52.9,rotation:-3.2039,x:777.65,y:434.95}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.8,rotation:59.5835,x:721.1,y:249.45,regX:155.5,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:6.2875,x:834.25,y:354.5,regY:393.9,regX:27.5}},{t:this.ikNode_2_1,p:{x:754.8,y:363.45}},{t:this.ikNode_2,p:{x:743.8,y:340.9,rotation:14.9681}},{t:this.ikNode_4,p:{x:719.9,y:254.8,regX:143.6,regY:38.9,rotation:29.9272}},{t:this.ikNode_8,p:{regX:208.9,rotation:0.7479,x:739.75,y:429.7,regY:42.4}},{t:this.ikNode_10,p:{regX:208,regY:52.8,rotation:-3.1901,x:777.6,y:434.95}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.8,rotation:58.0724,x:721.9,y:250.1,regX:155.6,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:5.6789,x:834.2,y:354.35,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:754.9,y:363.4}},{t:this.ikNode_2,p:{x:742,y:341.4,rotation:12.7515}},{t:this.ikNode_4,p:{x:720,y:254.75,regX:143.6,regY:38.9,rotation:29.9209}},{t:this.ikNode_8,p:{regX:208.8,rotation:0.7294,x:739.75,y:429.65,regY:42.5}},{t:this.ikNode_10,p:{regX:208,regY:52.8,rotation:-3.1716,x:777.5,y:434.95}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:56.5678,x:722.7,y:250.9,regX:155.7,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:5.0707,x:834.2,y:354.05,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:754.95,y:363.25}},{t:this.ikNode_2,p:{x:740.35,y:341.9,rotation:10.5398}},{t:this.ikNode_4,p:{x:720.1,y:254.75,regX:143.6,regY:38.9,rotation:29.9106}},{t:this.ikNode_8,p:{regX:208.8,rotation:0.7064,x:739.6,y:429.55,regY:42.6}},{t:this.ikNode_10,p:{regX:208,regY:53,rotation:-3.1532,x:777.5,y:434.95}}]},1).to({state:[{t:this.ikNode_6,p:{regY:366,rotation:55.0608,x:723.45,y:251.55,regX:155.3,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:4.463,x:834.25,y:353.75,regY:393.9,regX:27.7}},{t:this.ikNode_2_1,p:{x:754.9,y:362.95}},{t:this.ikNode_2,p:{x:738.55,y:342.35,rotation:8.3252}},{t:this.ikNode_4,p:{x:720.1,y:254.85,regX:143.6,regY:39,rotation:29.9004}},{t:this.ikNode_8,p:{regX:208.8,rotation:0.6832,x:739.5,y:429.35,regY:42.4}},{t:this.ikNode_10,p:{regX:208,regY:52.9,rotation:-3.1391,x:777.45,y:434.8}}]},1).to({state:[{t:this.ikNode_6,p:{regY:366,rotation:53.5515,x:724.2,y:252.5,regX:155.6,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:3.8558,x:834.2,y:353.2,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:754.85,y:362.6}},{t:this.ikNode_2,p:{x:736.9,y:342.85,rotation:6.1088}},{t:this.ikNode_4,p:{x:720,y:254.9,regX:143.6,regY:39,rotation:29.8941}},{t:this.ikNode_8,p:{regX:208.8,rotation:0.6601,x:739.25,y:429.25,regY:42.5}},{t:this.ikNode_10,p:{regX:208,regY:52.9,rotation:-3.1207,x:777.35,y:434.7}}]},1).to({state:[{t:this.ikNode_6,p:{regY:366.1,rotation:52.0406,x:724.75,y:253.45,regX:155.6,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:3.2464,x:834.25,y:352.5,regY:393.8,regX:27.6}},{t:this.ikNode_2_1,p:{x:754.75,y:362.1}},{t:this.ikNode_2,p:{x:735.15,y:343.35,rotation:3.8968}},{t:this.ikNode_4,p:{x:719.8,y:255.1,regX:143.6,regY:39,rotation:29.8862}},{t:this.ikNode_8,p:{regX:208.8,rotation:0.6371,x:739.1,y:429.05,regY:42.6}},{t:this.ikNode_10,p:{regX:208.1,regY:52.8,rotation:-3.1069,x:777.35,y:434.55}}]},1).to({state:[{t:this.ikNode_6,p:{regY:366.1,rotation:53.7085,x:724.75,y:253.45,regX:155.5,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:6.5816,x:834.15,y:352.55,regY:394,regX:27.6}},{t:this.ikNode_2_1,p:{x:754.75,y:362.1}},{t:this.ikNode_2,p:{x:735.1,y:343.35,rotation:5.5597}},{t:this.ikNode_4,p:{x:719.8,y:255,regX:143.6,regY:39,rotation:29.8839}},{t:this.ikNode_8,p:{regX:208.8,rotation:0.6324,x:739.05,y:429,regY:42.6}},{t:this.ikNode_10,p:{regX:208.1,regY:52.8,rotation:-3.0977,x:777.25,y:434.55}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:55.3758,x:724.75,y:253.4,regX:155.5,scaleX:0.1872,scaleY:0.1872}},{t:this.ikNode_12,p:{rotation:9.9147,x:834.1,y:352.55,regY:393.9,regX:27.4}},{t:this.ikNode_2_1,p:{x:754.75,y:362.1}},{t:this.ikNode_2,p:{x:735.15,y:343.35,rotation:7.2179}},{t:this.ikNode_4,p:{x:719.75,y:255,regX:143.5,regY:38.8,rotation:29.8799}},{t:this.ikNode_8,p:{regX:208.8,rotation:0.6232,x:739,y:429,regY:42.6}},{t:this.ikNode_10,p:{regX:208.1,regY:52.8,rotation:-3.0931,x:777.25,y:434.55}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.8,rotation:57.0408,x:724.8,y:253.4,regX:155.5,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:13.2467,x:834.1,y:352.5,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:754.8,y:362.15}},{t:this.ikNode_2,p:{x:735.15,y:343.35,rotation:8.8825}},{t:this.ikNode_4,p:{x:719.75,y:255,regX:143.5,regY:38.8,rotation:29.8799}},{t:this.ikNode_8,p:{regX:208.8,rotation:0.6186,x:739,y:429.05,regY:42.6}},{t:this.ikNode_10,p:{regX:208.1,regY:53,rotation:-3.0885,x:777.2,y:434.6}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:58.7062,x:724.8,y:253.45,regX:155.6,scaleX:0.1872,scaleY:0.1872}},{t:this.ikNode_12,p:{rotation:16.5799,x:834.15,y:352.5,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:754.8,y:362.15}},{t:this.ikNode_2,p:{x:735.15,y:343.35,rotation:10.5445}},{t:this.ikNode_4,p:{x:719.7,y:255,regX:143.5,regY:38.8,rotation:29.8736}},{t:this.ikNode_8,p:{regX:208.8,rotation:0.6094,x:739,y:428.95,regY:42.4}},{t:this.ikNode_10,p:{regX:208.1,regY:53,rotation:-3.0838,x:777.25,y:434.55}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:60.3727,x:724.8,y:253.4,regX:155.5,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:19.9128,x:834.1,y:352.45,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:754.85,y:362.2}},{t:this.ikNode_2,p:{x:735.1,y:343.35,rotation:12.2066}},{t:this.ikNode_4,p:{x:719.7,y:255.1,regX:143.5,regY:38.8,rotation:29.8696}},{t:this.ikNode_8,p:{regX:208.8,rotation:0.6001,x:739,y:428.95,regY:42.5}},{t:this.ikNode_10,p:{regX:208.1,regY:53,rotation:-3.0746,x:777.3,y:434.6}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:62.0372,x:724.7,y:253.4,regX:155.4,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:23.2475,x:834,y:352.4,regY:394,regX:27.5}},{t:this.ikNode_2_1,p:{x:754.85,y:362.2}},{t:this.ikNode_2,p:{x:735.05,y:343.3,rotation:13.8695}},{t:this.ikNode_4,p:{x:719.65,y:255.1,regX:143.5,regY:38.8,rotation:29.8696}},{t:this.ikNode_8,p:{regX:208.8,rotation:0.5909,x:739.05,y:428.95,regY:42.5}},{t:this.ikNode_10,p:{regX:208.1,regY:52.9,rotation:-3.07,x:777.3,y:434.55}}]},1).to({state:[{t:this.ikNode_6,p:{regY:366,rotation:63.7045,x:724.7,y:253.35,regX:155.7,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:26.5806,x:834.1,y:352.4,regY:394,regX:27.7}},{t:this.ikNode_2_1,p:{x:754.85,y:362.25}},{t:this.ikNode_2,p:{x:735.1,y:343.35,rotation:15.5347}},{t:this.ikNode_4,p:{x:719.65,y:255.05,regX:143.5,regY:38.8,rotation:29.8634}},{t:this.ikNode_8,p:{regX:208.8,rotation:0.5863,x:739.1,y:428.9,regY:42.5}},{t:this.ikNode_10,p:{regX:208.1,regY:52.9,rotation:-3.0654,x:777.25,y:434.5}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:65.372,x:724.7,y:253.4,regX:155.6,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:29.9137,x:834,y:352.35,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:754.85,y:362.3}},{t:this.ikNode_2,p:{x:735.1,y:343.35,rotation:17.1976}},{t:this.ikNode_4,p:{x:719.6,y:255.05,regX:143.5,regY:38.8,rotation:29.8634}},{t:this.ikNode_8,p:{regX:208.8,rotation:0.577,x:739.05,y:428.9,regY:42.5}},{t:this.ikNode_10,p:{regX:208.1,regY:52.9,rotation:-3.0608,x:777.25,y:434.5}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:67.037,x:724.7,y:253.35,regX:155.5,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:33.2464,x:834,y:352.4,regY:393.9,regX:27.7}},{t:this.ikNode_2_1,p:{x:754.9,y:362.35}},{t:this.ikNode_2,p:{x:735.1,y:343.35,rotation:18.8578}},{t:this.ikNode_4,p:{x:719.65,y:255.05,regX:143.5,regY:38.8,rotation:29.8594}},{t:this.ikNode_8,p:{regX:208.8,rotation:0.5678,x:739.05,y:428.85,regY:42.6}},{t:this.ikNode_10,p:{regX:208.1,regY:52.9,rotation:-3.056,x:777.2,y:434.5}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:64.0325,x:724.8,y:253.45,regX:155.6,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:31.7464,x:834.05,y:352.35,regY:393.9,regX:27.7}},{t:this.ikNode_2_1,p:{x:754.9,y:362.35}},{t:this.ikNode_2,p:{x:735.1,y:343.3,rotation:17.3554}},{t:this.ikNode_4,p:{x:719.6,y:255,regX:143.4,regY:38.8,rotation:29.8571}},{t:this.ikNode_8,p:{regX:208.8,rotation:0.5632,x:739.05,y:428.85,regY:42.6}},{t:this.ikNode_10,p:{regX:208.1,regY:52.9,rotation:-3.0513,x:777.2,y:434.5}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.8,rotation:61.0316,x:724.65,y:253.35,regX:155.4,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:30.2451,x:834,y:352.25,regY:393.9,regX:27.7}},{t:this.ikNode_2_1,p:{x:754.9,y:362.35}},{t:this.ikNode_2,p:{x:735.1,y:343.3,rotation:15.8523}},{t:this.ikNode_4,p:{x:719.55,y:255,regX:143.4,regY:38.8,rotation:29.8531}},{t:this.ikNode_8,p:{regX:208.8,rotation:0.5586,x:739,y:428.85,regY:42.6}},{t:this.ikNode_10,p:{regX:208.1,regY:52.9,rotation:-3.0467,x:777.2,y:434.5}}]},1).to({state:[{t:this.ikNode_6,p:{regY:366,rotation:58.0283,x:724.7,y:253.35,regX:155.5,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:28.7428,x:833.95,y:352.3,regY:393.9,regX:27.7}},{t:this.ikNode_2_1,p:{x:754.95,y:362.35}},{t:this.ikNode_2,p:{x:735.1,y:343.3,rotation:14.3457}},{t:this.ikNode_4,p:{x:719.55,y:255,regX:143.4,regY:38.8,rotation:29.8531}},{t:this.ikNode_8,p:{regX:208.8,rotation:0.554,x:739,y:428.85,regY:42.6}},{t:this.ikNode_10,p:{regX:208.1,regY:52.8,rotation:-3.0421,x:777.2,y:434.55}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.8,rotation:55.0244,x:724.7,y:253.35,regX:155.6,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:27.2409,x:834,y:352.25,regY:393.8,regX:27.4}},{t:this.ikNode_2_1,p:{x:754.95,y:362.35}},{t:this.ikNode_2,p:{x:735.05,y:343.2,rotation:12.8429}},{t:this.ikNode_4,p:{x:719.55,y:254.95,regX:143.4,regY:38.8,rotation:29.8531}},{t:this.ikNode_8,p:{regX:208.7,rotation:0.5494,x:738.95,y:428.85,regY:42.6}},{t:this.ikNode_10,p:{regX:208.1,regY:52.8,rotation:-3.0375,x:777.2,y:434.55}}]},1).to({state:[{t:this.ikNode_6,p:{regY:366.2,rotation:52.0209,x:724.75,y:253.35,regX:155.5,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:25.7418,x:834,y:352.25,regY:393.8,regX:27.6}},{t:this.ikNode_2_1,p:{x:754.95,y:362.4}},{t:this.ikNode_2,p:{x:735.15,y:343.25,rotation:11.3358}},{t:this.ikNode_4,p:{x:719.55,y:254.95,regX:143.4,regY:38.9,rotation:29.8491}},{t:this.ikNode_8,p:{regX:208.7,rotation:0.5401,x:738.95,y:428.8,regY:42.4}},{t:this.ikNode_10,p:{regX:208.1,regY:52.8,rotation:-3.0329,x:777.2,y:434.55}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.8,rotation:49.0202,x:724.8,y:253.3,regX:155.5,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:24.2397,x:834.05,y:352.25,regY:393.9,regX:27.7}},{t:this.ikNode_2_1,p:{x:755,y:362.4}},{t:this.ikNode_2,p:{x:735.15,y:343.25,rotation:9.8323}},{t:this.ikNode_4,p:{x:719.5,y:254.95,regX:143.4,regY:38.9,rotation:29.8468}},{t:this.ikNode_8,p:{regX:208.7,rotation:0.5355,x:738.85,y:428.75,regY:42.4}},{t:this.ikNode_10,p:{regX:208.1,regY:52.8,rotation:-3.0283,x:777.15,y:434.55}}]},1).to({state:[{t:this.ikNode_6,p:{regY:366.1,rotation:46.0175,x:724.75,y:253.3,regX:155.4,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:22.7384,x:834,y:352.35,regY:394.1,regX:27.6}},{t:this.ikNode_2_1,p:{x:755,y:362.4}},{t:this.ikNode_2,p:{x:735.1,y:343.2,rotation:8.3252}},{t:this.ikNode_4,p:{x:719.5,y:254.85,regX:143.4,regY:38.9,rotation:29.8429}},{t:this.ikNode_8,p:{regX:209,rotation:0.5309,x:739,y:428.75,regY:42.4}},{t:this.ikNode_10,p:{regX:208.1,regY:52.8,rotation:-3.0237,x:777.15,y:434.6}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:43.0144,x:724.85,y:253.3,regX:155.8,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:21.2382,x:834,y:352.25,regY:393.9,regX:27.7}},{t:this.ikNode_2_1,p:{x:755,y:362.4}},{t:this.ikNode_2,p:{x:735.15,y:343.2,rotation:6.8243}},{t:this.ikNode_4,p:{x:719.5,y:254.85,regX:143.4,regY:38.9,rotation:29.8429}},{t:this.ikNode_8,p:{regX:209,rotation:0.5263,x:739,y:428.75,regY:42.5}},{t:this.ikNode_10,p:{regX:208.1,regY:53,rotation:-3.0191,x:777.15,y:434.65}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:40.0119,x:724.85,y:253.25,regX:155.5,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:19.7366,x:834,y:352.25,regY:393.9,regX:27.7}},{t:this.ikNode_2_1,p:{x:755.05,y:362.4}},{t:this.ikNode_2,p:{x:735.15,y:343.2,rotation:5.3185}},{t:this.ikNode_4,p:{x:719.45,y:254.85,regX:143.4,regY:38.9,rotation:29.8429}},{t:this.ikNode_8,p:{regX:209,rotation:0.5217,x:738.95,y:428.7,regY:42.5}},{t:this.ikNode_10,p:{regX:208.1,regY:53,rotation:-3.0145,x:777.1,y:434.7}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:37.01,x:724.8,y:253.25,regX:155.4,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:18.2341,x:834,y:352.2,regY:393.8,regX:27.6}},{t:this.ikNode_2_1,p:{x:755.1,y:362.45}},{t:this.ikNode_2,p:{x:735.2,y:343.2,rotation:3.8166}},{t:this.ikNode_4,p:{x:719.45,y:254.9,regX:143.4,regY:38.9,rotation:29.8366}},{t:this.ikNode_8,p:{regX:209,rotation:0.5124,x:739,y:428.7,regY:42.5}},{t:this.ikNode_10,p:{regX:207.8,regY:53,rotation:-3.0099,x:777.1,y:434.7}}]},1).to({state:[{t:this.ikNode_6,p:{regY:366,rotation:38.6744,x:724.7,y:253.2,regX:155.4,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:18.2341,x:834,y:352.1,regY:393.8,regX:27.6}},{t:this.ikNode_2_1,p:{x:755.1,y:362.45}},{t:this.ikNode_2,p:{x:735.2,y:343.15,rotation:2.1474}},{t:this.ikNode_4,p:{x:719.4,y:254.9,regX:143.4,regY:38.9,rotation:29.8366}},{t:this.ikNode_8,p:{regX:209,rotation:0.5078,x:739,y:428.7,regY:42.5}},{t:this.ikNode_10,p:{regX:207.8,regY:53,rotation:-3.0099,x:777.1,y:434.65}}]},1).to({state:[{t:this.ikNode_6,p:{regY:366,rotation:40.3373,x:724.7,y:253.25,regX:155.6,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:18.2316,x:833.95,y:352.1,regY:393.8,regX:27.6}},{t:this.ikNode_2_1,p:{x:755.1,y:362.45}},{t:this.ikNode_2,p:{x:735.2,y:343.2,rotation:0.4802}},{t:this.ikNode_4,p:{x:719.35,y:254.9,regX:143.4,regY:38.9,rotation:29.8326}},{t:this.ikNode_8,p:{regX:209,rotation:0.5032,x:739,y:428.7,regY:42.5}},{t:this.ikNode_10,p:{regX:207.8,regY:53,rotation:-3.0053,x:777.05,y:434.65}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:42.0025,x:724.7,y:253.2,regX:155.5,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:18.2282,x:834,y:352.05,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:755.1,y:362.5}},{t:this.ikNode_2,p:{x:735.15,y:343.25,rotation:-1.163}},{t:this.ikNode_4,p:{x:719.35,y:254.9,regX:143.4,regY:38.9,rotation:29.8326}},{t:this.ikNode_8,p:{regX:209,rotation:0.4986,x:739,y:428.7,regY:42.6}},{t:this.ikNode_10,p:{regX:207.8,regY:52.9,rotation:-3.0007,x:777.05,y:434.6}}]},1).to({state:[{t:this.ikNode_6,p:{regY:366.1,rotation:43.6687,x:724.65,y:253.2,regX:155.5,scaleX:0.1872,scaleY:0.1872}},{t:this.ikNode_12,p:{rotation:18.2257,x:833.95,y:352,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:755.15,y:362.5}},{t:this.ikNode_2,p:{x:735.2,y:343.25,rotation:-2.8309}},{t:this.ikNode_4,p:{x:719.35,y:254.9,regX:143.4,regY:38.9,rotation:29.8303}},{t:this.ikNode_8,p:{regX:209,rotation:0.494,x:739,y:428.7,regY:42.6}},{t:this.ikNode_10,p:{regX:207.8,regY:52.9,rotation:-2.9914,x:777,y:434.65}}]},1).to({state:[{t:this.ikNode_6,p:{regY:366,rotation:45.3303,x:724.65,y:253.2,regX:155.5,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:18.2231,x:834,y:352,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:755.15,y:362.5}},{t:this.ikNode_2,p:{x:735.2,y:343.2,rotation:-4.5009}},{t:this.ikNode_4,p:{x:719.3,y:254.9,regX:143.4,regY:38.9,rotation:29.8263}},{t:this.ikNode_8,p:{regX:209,rotation:0.4847,x:739,y:428.7,regY:42.6}},{t:this.ikNode_10,p:{regX:207.8,regY:52.9,rotation:-2.9914,x:777,y:434.7}}]},1).to({state:[{t:this.ikNode_6,p:{regY:366.1,rotation:46.9957,x:724.6,y:253.2,regX:155.5,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:18.2231,x:834,y:352,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:755.15,y:362.55}},{t:this.ikNode_2,p:{x:735.15,y:343.2,rotation:-6.1702}},{t:this.ikNode_4,p:{x:719.3,y:254.9,regX:143.4,regY:38.9,rotation:29.8263}},{t:this.ikNode_8,p:{regX:209,rotation:0.4801,x:738.95,y:428.7,regY:42.6}},{t:this.ikNode_10,p:{regX:207.8,regY:52.9,rotation:-2.9868,x:776.95,y:434.65}}]},1).to({state:[{t:this.ikNode_6,p:{regY:366.1,rotation:48.6594,x:724.6,y:253.15,regX:155.6,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:18.2206,x:834,y:351.9,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:755.2,y:362.55}},{t:this.ikNode_2,p:{x:735.2,y:343.2,rotation:-7.8358}},{t:this.ikNode_4,p:{x:719.35,y:254.9,regX:143.4,regY:38.9,rotation:29.8224}},{t:this.ikNode_8,p:{regX:209,rotation:0.4755,x:738.95,y:428.7,regY:42.6}},{t:this.ikNode_10,p:{regX:207.8,regY:52.9,rotation:-2.9822,x:776.9,y:434.65}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.8,rotation:50.323,x:724.6,y:253.1,regX:155.5,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:18.2172,x:834.05,y:352,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:755.2,y:362.55}},{t:this.ikNode_2,p:{x:735.15,y:343.2,rotation:-9.5072}},{t:this.ikNode_4,p:{x:719.35,y:254.85,regX:143.6,regY:38.8,rotation:29.8201}},{t:this.ikNode_8,p:{regX:209,rotation:0.4709,x:738.95,y:428.65,regY:42.4}},{t:this.ikNode_10,p:{regX:207.8,regY:52.9,rotation:-2.9776,x:776.85,y:434.65}}]},1).to({state:[{t:this.ikNode_6,p:{regY:366.2,rotation:51.9873,x:724.45,y:253.15,regX:155.7,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:18.2172,x:834.05,y:351.9,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:755.25,y:362.6}},{t:this.ikNode_2,p:{x:735.2,y:343.25,rotation:-11.1733}},{t:this.ikNode_4,p:{x:719.3,y:254.9,regX:143.6,regY:38.8,rotation:29.8161}},{t:this.ikNode_8,p:{regX:208.9,rotation:0.4616,x:738.95,y:428.65,regY:42.4}},{t:this.ikNode_10,p:{regX:207.8,regY:52.8,rotation:-2.9728,x:776.85,y:434.6}}]},1).to({state:[{t:this.ikNode_6,p:{regY:366,rotation:53.8552,x:724.65,y:253.1,regX:155.5,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:20.0891,x:834,y:352.1,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:755.25,y:362.6}},{t:this.ikNode_2,p:{x:735.1,y:343.25,rotation:-7.4223}},{t:this.ikNode_4,p:{x:719.5,y:254.9,regX:143.6,regY:38.8,rotation:29.8161}},{t:this.ikNode_8,p:{regX:208.9,rotation:0.457,x:738.75,y:428.55,regY:42.5}},{t:this.ikNode_10,p:{regX:207.8,regY:52.8,rotation:-2.9636,x:776.65,y:434.75}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:55.7294,x:724.7,y:253.05,regX:155.5,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:21.9611,x:833.95,y:352.1,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:755.25,y:362.6}},{t:this.ikNode_2,p:{x:735.1,y:343.25,rotation:-3.6703}},{t:this.ikNode_4,p:{x:719.55,y:254.85,regX:143.7,regY:38.8,rotation:29.8121}},{t:this.ikNode_8,p:{regX:208.9,rotation:0.4478,x:738.75,y:428.6,regY:42.5}},{t:this.ikNode_10,p:{regX:207.8,regY:52.8,rotation:-2.9589,x:776.6,y:434.75}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.8,rotation:57.598,x:724.55,y:253.05,regX:155.5,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:23.8344,x:834,y:352,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:755.3,y:362.6}},{t:this.ikNode_2,p:{x:735.15,y:343.25,rotation:0.0612}},{t:this.ikNode_4,p:{x:719.4,y:254.85,regX:143.6,regY:38.8,rotation:29.8058}},{t:this.ikNode_8,p:{regX:208.9,rotation:0.4386,x:738.75,y:428.6,regY:42.5}},{t:this.ikNode_10,p:{regX:207.9,regY:52.8,rotation:-2.9497,x:776.75,y:434.7}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:59.4705,x:724.45,y:253.05,regX:155.5,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:25.7083,x:834,y:351.8,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:755.4,y:362.6}},{t:this.ikNode_2,p:{x:735.15,y:343.25,rotation:3.8119}},{t:this.ikNode_4,p:{x:719.25,y:254.9,regX:143.6,regY:38.8,rotation:29.8058}},{t:this.ikNode_8,p:{regX:208.9,rotation:0.4293,x:738.85,y:428.6,regY:42.6}},{t:this.ikNode_10,p:{regX:207.9,regY:53,rotation:-2.9405,x:776.9,y:434.75}}]},1).to({state:[{t:this.ikNode_6,p:{regY:366.1,rotation:61.3411,x:724.3,y:253.05,regX:155.6,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:27.5825,x:834.05,y:351.55,regY:393.8,regX:27.6}},{t:this.ikNode_2_1,p:{x:755.45,y:362.6}},{t:this.ikNode_2,p:{x:735.05,y:343.25,rotation:7.5648}},{t:this.ikNode_4,p:{x:719.05,y:254.95,regX:143.6,regY:38.9,rotation:29.7996}},{t:this.ikNode_8,p:{regX:208.9,rotation:0.4247,x:738.95,y:428.55,regY:42.6}},{t:this.ikNode_10,p:{regX:207.9,regY:53,rotation:-2.9359,x:776.95,y:434.7}}]},1).to({state:[{t:this.ikNode_6,p:{regY:366.1,rotation:63.2156,x:724.15,y:253.1,regX:155.5,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:29.4554,x:834,y:351.55,regY:393.9,regX:27.7}},{t:this.ikNode_2_1,p:{x:755.5,y:362.6}},{t:this.ikNode_2,p:{x:735.1,y:343.2,rotation:11.3118}},{t:this.ikNode_4,p:{x:719.1,y:254.9,regX:143.8,regY:38.7,rotation:29.7956}},{t:this.ikNode_8,p:{regX:208.9,rotation:0.4155,x:739.05,y:428.55,regY:42.6}},{t:this.ikNode_10,p:{regX:207.9,regY:52.9,rotation:-2.9313,x:777,y:434.65}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:65.0836,x:724.25,y:253,regX:155.6,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:31.3277,x:834.15,y:351.6,regY:393.9,regX:27.8}},{t:this.ikNode_2_1,p:{x:755.5,y:362.6}},{t:this.ikNode_2,p:{x:735.1,y:343.25,rotation:15.0664}},{t:this.ikNode_4,p:{x:719.1,y:254.85,regX:143.8,regY:38.7,rotation:29.7956}},{t:this.ikNode_8,p:{regX:208.9,rotation:0.4062,x:739.05,y:428.5,regY:42.6}},{t:this.ikNode_10,p:{regX:207.9,regY:52.9,rotation:-2.9221,x:776.95,y:434.65}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:66.9554,x:724.5,y:253,regX:155.6,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:33.2018,x:834.05,y:351.8,regY:394,regX:27.7}},{t:this.ikNode_2_1,p:{x:755.5,y:362.7}},{t:this.ikNode_2,p:{x:735.1,y:343.25,rotation:18.8176}},{t:this.ikNode_4,p:{x:719.3,y:254.85,regX:143.8,regY:38.7,rotation:29.7893}},{t:this.ikNode_8,p:{regX:208.8,rotation:0.397,x:738.85,y:428.5,regY:42.4}},{t:this.ikNode_10,p:{regX:207.9,regY:52.9,rotation:-2.9175,x:776.8,y:434.75}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:65.4536,x:724.35,y:252.9,regX:155.4,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:31.6995,x:834,y:351.75,regY:394,regX:27.6}},{t:this.ikNode_2_1,p:{x:755.5,y:362.7}},{t:this.ikNode_2,p:{x:735.05,y:343.2,rotation:17.3167}},{t:this.ikNode_4,p:{x:719.2,y:254.85,regX:143.6,regY:39,rotation:26.791}},{t:this.ikNode_8,p:{regX:208.8,rotation:0.3924,x:738.85,y:428.45,regY:42.4}},{t:this.ikNode_10,p:{regX:207.9,regY:52.9,rotation:-2.9083,x:776.8,y:434.7}}]},1).to({state:[{t:this.ikNode_6,p:{regY:366,rotation:63.951,x:724.3,y:253,regX:155.7,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:30.1995,x:834.05,y:351.7,regY:394,regX:27.7}},{t:this.ikNode_2_1,p:{x:755.5,y:362.75}},{t:this.ikNode_2,p:{x:735.05,y:343.2,rotation:15.8076}},{t:this.ikNode_4,p:{x:719.15,y:254.75,regX:143.5,regY:39,rotation:23.7872}},{t:this.ikNode_8,p:{regX:208.8,rotation:0.3832,x:738.85,y:428.45,regY:42.5}},{t:this.ikNode_10,p:{regX:207.9,regY:52.8,rotation:-2.9037,x:776.8,y:434.7}}]},1).to({state:[{t:this.ikNode_6,p:{regY:366,rotation:62.4466,x:724.3,y:252.95,regX:155.6,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:28.6949,x:834.05,y:351.6,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:755.5,y:362.75}},{t:this.ikNode_2,p:{x:735.05,y:343.2,rotation:14.3057}},{t:this.ikNode_4,p:{x:719.2,y:254.7,regX:143.7,regY:38.8,rotation:20.7899}},{t:this.ikNode_8,p:{regX:208.8,rotation:0.3786,x:738.85,y:428.45,regY:42.5}},{t:this.ikNode_10,p:{regX:207.9,regY:52.8,rotation:-2.899,x:776.75,y:434.7}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.8,rotation:60.9418,x:724.4,y:252.9,regX:155.6,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:27.193,x:834,y:351.6,regY:393.9,regX:27.5}},{t:this.ikNode_2_1,p:{x:755.5,y:362.8}},{t:this.ikNode_2,p:{x:735.05,y:343.15,rotation:12.7995}},{t:this.ikNode_4,p:{x:719.2,y:254.75,regX:143.8,regY:38.9,rotation:17.7872}},{t:this.ikNode_8,p:{regX:208.8,rotation:0.3693,x:738.85,y:428.45,regY:42.5}},{t:this.ikNode_10,p:{regX:208,regY:52.8,rotation:-2.8944,x:776.7,y:434.7}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.8,rotation:59.4392,x:724.35,y:252.85,regX:155.5,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:25.6914,x:834,y:351.55,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:755.55,y:362.8}},{t:this.ikNode_2,p:{x:735,y:343.15,rotation:11.2979}},{t:this.ikNode_4,p:{x:719.2,y:254.8,regX:143.7,regY:39,rotation:14.7859}},{t:this.ikNode_8,p:{regX:208.8,rotation:0.3647,x:738.85,y:428.5,regY:42.5}},{t:this.ikNode_10,p:{regX:207.9,regY:52.8,rotation:-2.8896,x:776.7,y:434.7}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:57.9362,x:724.25,y:252.85,regX:155.4,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:24.1894,x:834.05,y:351.6,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:755.55,y:362.85}},{t:this.ikNode_2,p:{x:735.05,y:343.1,rotation:9.789}},{t:this.ikNode_4,p:{x:719.25,y:254.7,regX:143.7,regY:39,rotation:11.7846}},{t:this.ikNode_8,p:{regX:208.8,rotation:0.3555,x:738.9,y:428.45,regY:42.6}},{t:this.ikNode_10,p:{regX:207.9,regY:52.8,rotation:-2.885,x:776.7,y:434.7}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.8,rotation:56.433,x:724.3,y:252.8,regX:155.5,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:22.6881,x:834.05,y:351.6,regY:393.9,regX:27.7}},{t:this.ikNode_2_1,p:{x:755.55,y:362.85}},{t:this.ikNode_2,p:{x:735.05,y:343.15,rotation:8.2872}},{t:this.ikNode_4,p:{x:719.2,y:254.7,regX:143.7,regY:39,rotation:8.7828}},{t:this.ikNode_8,p:{regX:208.8,rotation:0.3509,x:738.85,y:428.45,regY:42.6}},{t:this.ikNode_10,p:{regX:208,regY:52.8,rotation:-2.8804,x:776.65,y:434.7}}]},1).to({state:[{t:this.ikNode_6,p:{regY:366,rotation:54.9299,x:724.2,y:252.8,regX:155.3,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:21.1864,x:834.05,y:351.5,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:755.6,y:362.9}},{t:this.ikNode_2,p:{x:735.05,y:343.05,rotation:6.7816}},{t:this.ikNode_4,p:{x:719.2,y:254.7,regX:143.6,regY:38.8,rotation:5.7823}},{t:this.ikNode_8,p:{regX:208.8,rotation:0.3416,x:738.9,y:428.5,regY:42.6}},{t:this.ikNode_10,p:{regX:208,regY:52.7,rotation:-2.8758,x:776.6,y:434.65}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:53.4244,x:724.25,y:252.7,regX:155.4,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:19.6848,x:834.05,y:351.5,regY:393.9,regX:27.7}},{t:this.ikNode_2_1,p:{x:755.6,y:362.9}},{t:this.ikNode_2,p:{x:735,y:343.1,rotation:5.2758}},{t:this.ikNode_4,p:{x:719.1,y:254.75,regX:143.6,regY:39.1,rotation:2.784}},{t:this.ikNode_8,p:{regX:208.8,rotation:0.337,x:738.9,y:428.5,regY:42.6}},{t:this.ikNode_10,p:{regX:207.9,regY:53,rotation:-2.8712,x:776.65,y:434.85}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:51.921,x:724.2,y:252.8,regX:155.6,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:18.1808,x:834.05,y:351.4,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:755.65,y:362.95}},{t:this.ikNode_2,p:{x:735.05,y:343.1,rotation:3.774}},{t:this.ikNode_4,p:{x:719.15,y:254.7,regX:143.6,regY:38.9,rotation:-0.1929}},{t:this.ikNode_8,p:{regX:208.8,rotation:0.3278,x:738.9,y:428.4,regY:42.6}},{t:this.ikNode_10,p:{regX:208,regY:53,rotation:-2.8666,x:776.7,y:434.8}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:51.921,x:724.2,y:252.75,regX:155.6,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:16.5129,x:834,y:351.35,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:755.65,y:362.95}},{t:this.ikNode_2,p:{x:735.1,y:343.05,rotation:3.7693}},{t:this.ikNode_4,p:{x:719.15,y:254.7,regX:143.8,regY:38.9,rotation:-0.1975}},{t:this.ikNode_8,p:{regX:208.8,rotation:0.3232,x:738.9,y:428.4,regY:42.4}},{t:this.ikNode_10,p:{regX:208,regY:52.9,rotation:-2.8573,x:776.65,y:434.7}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:51.921,x:724.2,y:252.75,regX:155.6,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:14.8434,x:833.95,y:351.4,regY:393.9,regX:27.5}},{t:this.ikNode_2_1,p:{x:755.65,y:362.95}},{t:this.ikNode_2,p:{x:735.1,y:343.05,rotation:3.7646}},{t:this.ikNode_4,p:{x:719.15,y:254.7,regX:143.8,regY:38.9,rotation:-0.2021}},{t:this.ikNode_8,p:{regX:208.8,rotation:0.3185,x:738.85,y:428.35,regY:42.4}},{t:this.ikNode_10,p:{regX:208,regY:52.9,rotation:-2.8573,x:776.65,y:434.7}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:51.9173,x:724.15,y:252.7,regX:155.6,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:13.1726,x:833.95,y:351.4,regY:393.9,regX:27.5}},{t:this.ikNode_2_1,p:{x:755.7,y:363}},{t:this.ikNode_2,p:{x:735.15,y:343.05,rotation:3.7599}},{t:this.ikNode_4,p:{x:719.15,y:254.7,regX:143.8,regY:38.9,rotation:-0.2021}},{t:this.ikNode_8,p:{regX:208.8,rotation:0.3139,x:738.85,y:428.35,regY:42.4}},{t:this.ikNode_10,p:{regX:208,regY:52.9,rotation:-2.8527,x:776.65,y:434.7}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:51.9144,x:724.15,y:252.65,regX:155.5,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:11.5049,x:833.95,y:351.35,regY:393.9,regX:27.5}},{t:this.ikNode_2_1,p:{x:755.7,y:363}},{t:this.ikNode_2,p:{x:735.15,y:343.05,rotation:3.7552}},{t:this.ikNode_4,p:{x:719.15,y:254.7,regX:143.8,regY:38.9,rotation:-0.2067}},{t:this.ikNode_8,p:{regX:208.8,rotation:0.3047,x:738.8,y:428.25,regY:42.5}},{t:this.ikNode_10,p:{regX:208,regY:52.9,rotation:-2.8435,x:776.55,y:434.7}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:51.9144,x:724.15,y:252.65,regX:155.5,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:9.8359,x:833.95,y:351.3,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:755.75,y:363}},{t:this.ikNode_2,p:{x:735.15,y:343,rotation:3.7505}},{t:this.ikNode_4,p:{x:719.15,y:254.7,regX:143.8,regY:38.9,rotation:-0.2067}},{t:this.ikNode_8,p:{regX:208.8,rotation:0.3001,x:738.8,y:428.25,regY:42.5}},{t:this.ikNode_10,p:{regX:208,regY:52.9,rotation:-2.8435,x:776.55,y:434.7}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:51.9144,x:724.15,y:252.6,regX:155.5,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:8.165,x:833.9,y:351.3,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:755.75,y:363.05}},{t:this.ikNode_2,p:{x:735.2,y:343,rotation:3.7458}},{t:this.ikNode_4,p:{x:719.15,y:254.7,regX:143.8,regY:38.9,rotation:-0.2113}},{t:this.ikNode_8,p:{regX:208.8,rotation:0.2955,x:738.75,y:428.25,regY:42.5}},{t:this.ikNode_10,p:{regX:208,regY:52.9,rotation:-2.8389,x:776.55,y:434.7}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:51.9107,x:724.2,y:252.65,regX:155.5,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:6.4952,x:833.9,y:351.25,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:755.8,y:363.05}},{t:this.ikNode_2,p:{x:735.15,y:343,rotation:3.7411}},{t:this.ikNode_4,p:{x:719.15,y:254.7,regX:143.8,regY:38.9,rotation:-0.2113}},{t:this.ikNode_8,p:{regX:208.8,rotation:0.2908,x:738.75,y:428.15,regY:42.5}},{t:this.ikNode_10,p:{regX:208,regY:52.9,rotation:-2.8343,x:776.55,y:434.6}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:51.9107,x:724.15,y:252.65,regX:155.5,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:4.8259,x:833.9,y:351.2,regY:393.8,regX:27.6}},{t:this.ikNode_2_1,p:{x:755.8,y:363.05}},{t:this.ikNode_2,p:{x:735.15,y:343,rotation:3.7411}},{t:this.ikNode_4,p:{x:719.15,y:254.7,regX:143.8,regY:38.9,rotation:-0.2158}},{t:this.ikNode_8,p:{regX:208.8,rotation:0.2862,x:738.7,y:428.15,regY:42.5}},{t:this.ikNode_10,p:{regX:208,regY:52.8,rotation:-2.8251,x:776.55,y:434.6}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:51.9078,x:724.1,y:252.6,regX:155.5,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:3.1578,x:834,y:351.25,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:755.85,y:363.1}},{t:this.ikNode_2,p:{x:735.15,y:343,rotation:3.7364}},{t:this.ikNode_4,p:{x:719.15,y:254.75,regX:143.8,regY:38.9,rotation:-0.2158}},{t:this.ikNode_8,p:{regX:208.8,rotation:0.277,x:738.65,y:428.1,regY:42.6}},{t:this.ikNode_10,p:{regX:208,regY:52.8,rotation:-2.8251,x:776.5,y:434.55}}]},1).to({state:[{t:this.ikNode_6,p:{regY:366,rotation:50.0275,x:724.1,y:252.6,regX:155.5,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:2.1895,x:834,y:351.2,regY:393.9,regX:27.7}},{t:this.ikNode_2_1,p:{x:755.85,y:363.1}},{t:this.ikNode_2,p:{x:735.15,y:342.9,rotation:3.727}},{t:this.ikNode_4,p:{x:719.05,y:254.75,regX:143.8,regY:38.9,rotation:-0.225}},{t:this.ikNode_8,p:{regX:208.8,rotation:0.2678,x:738.65,y:428.1,regY:42.6}},{t:this.ikNode_10,p:{regX:208,regY:52.8,rotation:-2.8159,x:776.55,y:434.6}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:48.1465,x:724.1,y:252.6,regX:155.4,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:1.2219,x:833.9,y:351.2,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:755.85,y:363.1}},{t:this.ikNode_2,p:{x:735.15,y:342.95,rotation:3.7173}},{t:this.ikNode_4,p:{x:719.1,y:254.75,regX:143.8,regY:38.9,rotation:-0.2296}},{t:this.ikNode_8,p:{regX:208.8,rotation:0.2585,x:738.65,y:428.1,regY:42.6}},{t:this.ikNode_10,p:{regX:208,regY:52.8,rotation:-2.8066,x:776.55,y:434.65}}]},1).to({state:[{t:this.ikNode_6,p:{regY:366.2,rotation:46.2686,x:724.05,y:252.65,regX:155.5,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:0.2545,x:833.95,y:351.2,regY:394,regX:27.7}},{t:this.ikNode_2_1,p:{x:755.9,y:363.1}},{t:this.ikNode_2,p:{x:735.15,y:342.95,rotation:3.7126}},{t:this.ikNode_4,p:{x:719.05,y:254.7,regX:143.8,regY:39,rotation:-0.2342}},{t:this.ikNode_8,p:{regX:208.8,rotation:0.2493,x:738.65,y:428.05,regY:42.4}},{t:this.ikNode_10,p:{regX:208,regY:52.7,rotation:-2.8018,x:776.5,y:434.6}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:44.3888,x:724.05,y:252.6,regX:155.6,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:-0.6993,x:833.8,y:351.2,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:755.9,y:363.1}},{t:this.ikNode_2,p:{x:735.15,y:342.9,rotation:3.7032}},{t:this.ikNode_4,p:{x:719.05,y:254.7,regX:143.8,regY:39,rotation:-0.2388}},{t:this.ikNode_8,p:{regX:208.8,rotation:0.2354,x:738.6,y:427.95,regY:42.5}},{t:this.ikNode_10,p:{regX:208,regY:53,rotation:-2.7926,x:776.5,y:434.7}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:42.5084,x:724.05,y:252.55,regX:155.6,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:-1.6641,x:833.85,y:351.15,regY:393.9,regX:27.7}},{t:this.ikNode_2_1,p:{x:755.95,y:363.1}},{t:this.ikNode_2,p:{x:735.1,y:342.9,rotation:3.6938}},{t:this.ikNode_4,p:{x:719,y:254.65,regX:143.8,regY:39,rotation:-0.2434}},{t:this.ikNode_8,p:{regX:208.8,rotation:0.2262,x:738.6,y:428,regY:42.5}},{t:this.ikNode_10,p:{regX:208,regY:52.9,rotation:-2.7834,x:776.55,y:434.65}}]},1).to({state:[{t:this.ikNode_6,p:{regY:366.1,rotation:40.6256,x:724.05,y:252.55,regX:155.6,scaleX:0.1872,scaleY:0.1872}},{t:this.ikNode_12,p:{rotation:-2.632,x:833.8,y:351.15,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:755.95,y:363.1}},{t:this.ikNode_2,p:{x:735.1,y:342.9,rotation:3.6891}},{t:this.ikNode_4,p:{x:718.95,y:254.65,regX:143.8,regY:39,rotation:-0.248}},{t:this.ikNode_8,p:{regX:208.8,rotation:0.217,x:738.6,y:428,regY:42.5}},{t:this.ikNode_10,p:{regX:208,regY:52.9,rotation:-2.7788,x:776.55,y:434.7}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.8,rotation:38.7474,x:724.05,y:252.55,regX:155.5,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:-3.6007,x:833.75,y:351.05,regY:393.9,regX:27.6}},{t:this.ikNode_2_1,p:{x:756,y:363.1}},{t:this.ikNode_2,p:{x:735.1,y:342.85,rotation:3.6797}},{t:this.ikNode_4,p:{x:718.9,y:254.65,regX:143.8,regY:39,rotation:-0.2526}},{t:this.ikNode_8,p:{regX:208.8,rotation:0.2077,x:738.6,y:428,regY:42.6}},{t:this.ikNode_10,p:{regX:208,regY:52.9,rotation:-2.7695,x:776.55,y:434.65}}]},1).to({state:[{t:this.ikNode_6,p:{regY:365.9,rotation:36.8662,x:724.05,y:252.6,regX:155.6,scaleX:0.1871,scaleY:0.1871}},{t:this.ikNode_12,p:{rotation:-4.5678,x:833.75,y:351.05,regY:393.9,regX:27.7}},{t:this.ikNode_2_1,p:{x:756.05,y:363.15}},{t:this.ikNode_2,p:{x:735.1,y:342.9,rotation:3.675}},{t:this.ikNode_4,p:{x:718.95,y:254.65,regX:143.8,regY:39,rotation:-0.2572}},{t:this.ikNode_8,p:{regX:208.7,rotation:0.1939,x:738.5,y:427.95,regY:42.6}},{t:this.ikNode_10,p:{regX:208,regY:52.9,rotation:-2.7603,x:776.55,y:434.7}}]},1).wait(1));

	// Фон
	this.instance = new lib.Символ1();
	this.instance.setTransform(640.7,519.9,1,1,0,0,0,639.7,202.9);
	var instanceFilter_1 = new cjs.ColorFilter(0.15,0.15,0.15,1,0,0,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-2,-2,1283,410);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(248));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(1).to(new cjs.ColorFilter(1,1,1,1,-215.50419847,-215.50419847,-215.50419847,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-214.25839695,-214.25839695,-214.25839695,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-213.01259542,-213.01259542,-213.01259542,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-211.76679389,-211.76679389,-211.76679389,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-210.52099237,-210.52099237,-210.52099237,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-209.27519084,-209.27519084,-209.27519084,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-208.02938931,-208.02938931,-208.02938931,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-206.78358779,-206.78358779,-206.78358779,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-205.53778626,-205.53778626,-205.53778626,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-204.29198473,-204.29198473,-204.29198473,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-203.04618321,-203.04618321,-203.04618321,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-201.80038168,-201.80038168,-201.80038168,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-200.55458015,-200.55458015,-200.55458015,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-199.30877863,-199.30877863,-199.30877863,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-198.0629771,-198.0629771,-198.0629771,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-196.81717557,-196.81717557,-196.81717557,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-195.57137405,-195.57137405,-195.57137405,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-194.32557252,-194.32557252,-194.32557252,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-193.07977099,-193.07977099,-193.07977099,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-191.83396947,-191.83396947,-191.83396947,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-190.58816794,-190.58816794,-190.58816794,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-189.34236641,-189.34236641,-189.34236641,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-188.09656489,-188.09656489,-188.09656489,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-186.85076336,-186.85076336,-186.85076336,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-185.60496183,-185.60496183,-185.60496183,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-184.35916031,-184.35916031,-184.35916031,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-183.11335878,-183.11335878,-183.11335878,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-181.86755725,-181.86755725,-181.86755725,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-180.62175573,-180.62175573,-180.62175573,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-179.3759542,-179.3759542,-179.3759542,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-178.13015267,-178.13015267,-178.13015267,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-176.88435115,-176.88435115,-176.88435115,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-175.63854962,-175.63854962,-175.63854962,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-174.39274809,-174.39274809,-174.39274809,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-173.14694656,-173.14694656,-173.14694656,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-171.90114504,-171.90114504,-171.90114504,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-170.65534351,-170.65534351,-170.65534351,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-169.40954198,-169.40954198,-169.40954198,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-168.16374046,-168.16374046,-168.16374046,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-166.91793893,-166.91793893,-166.91793893,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-165.6721374,-165.6721374,-165.6721374,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-164.42633588,-164.42633588,-164.42633588,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-163.18053435,-163.18053435,-163.18053435,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-161.93473282,-161.93473282,-161.93473282,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-160.6889313,-160.6889313,-160.6889313,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-159.44312977,-159.44312977,-159.44312977,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-158.19732824,-158.19732824,-158.19732824,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-156.95152672,-156.95152672,-156.95152672,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-155.70572519,-155.70572519,-155.70572519,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-154.45992366,-154.45992366,-154.45992366,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-153.21412214,-153.21412214,-153.21412214,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-151.96832061,-151.96832061,-151.96832061,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-150.72251908,-150.72251908,-150.72251908,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-149.47671756,-149.47671756,-149.47671756,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-148.23091603,-148.23091603,-148.23091603,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-146.9851145,-146.9851145,-146.9851145,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-145.73931298,-145.73931298,-145.73931298,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-144.49351145,-144.49351145,-144.49351145,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-143.24770992,-143.24770992,-143.24770992,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-142.0019084,-142.0019084,-142.0019084,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-140.75610687,-140.75610687,-140.75610687,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-139.51030534,-139.51030534,-139.51030534,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-138.26450382,-138.26450382,-138.26450382,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-137.01870229,-137.01870229,-137.01870229,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-135.77290076,-135.77290076,-135.77290076,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-134.52709924,-134.52709924,-134.52709924,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-133.28129771,-133.28129771,-133.28129771,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-132.03549618,-132.03549618,-132.03549618,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-130.78969466,-130.78969466,-130.78969466,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-129.54389313,-129.54389313,-129.54389313,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-128.2980916,-128.2980916,-128.2980916,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-127.05229008,-127.05229008,-127.05229008,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-125.80648855,-125.80648855,-125.80648855,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-124.56068702,-124.56068702,-124.56068702,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-123.3148855,-123.3148855,-123.3148855,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-122.06908397,-122.06908397,-122.06908397,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-120.82328244,-120.82328244,-120.82328244,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-119.57748092,-119.57748092,-119.57748092,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-118.33167939,-118.33167939,-118.33167939,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-117.08587786,-117.08587786,-117.08587786,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-115.84007634,-115.84007634,-115.84007634,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-114.59427481,-114.59427481,-114.59427481,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-113.34847328,-113.34847328,-113.34847328,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-112.10267176,-112.10267176,-112.10267176,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-110.85687023,-110.85687023,-110.85687023,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-109.6110687,-109.6110687,-109.6110687,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-108.36526718,-108.36526718,-108.36526718,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-107.11946565,-107.11946565,-107.11946565,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-105.87366412,-105.87366412,-105.87366412,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-104.6278626,-104.6278626,-104.6278626,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-103.38206107,-103.38206107,-103.38206107,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-102.13625954,-102.13625954,-102.13625954,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-100.89045802,-100.89045802,-100.89045802,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-99.64465649,-99.64465649,-99.64465649,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-98.39885496,-98.39885496,-98.39885496,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-97.15305344,-97.15305344,-97.15305344,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-95.90725191,-95.90725191,-95.90725191,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-94.66145038,-94.66145038,-94.66145038,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-93.41564885,-93.41564885,-93.41564885,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-92.16984733,-92.16984733,-92.16984733,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-90.9240458,-90.9240458,-90.9240458,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-89.67824427,-89.67824427,-89.67824427,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-88.43244275,-88.43244275,-88.43244275,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-87.18664122,-87.18664122,-87.18664122,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-85.94083969,-85.94083969,-85.94083969,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-84.69503817,-84.69503817,-84.69503817,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-83.44923664,-83.44923664,-83.44923664,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-82.20343511,-82.20343511,-82.20343511,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-80.95763359,-80.95763359,-80.95763359,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-79.71183206,-79.71183206,-79.71183206,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-78.46603053,-78.46603053,-78.46603053,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-77.22022901,-77.22022901,-77.22022901,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-75.97442748,-75.97442748,-75.97442748,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-74.72862595,-74.72862595,-74.72862595,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-73.48282443,-73.48282443,-73.48282443,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-72.2370229,-72.2370229,-72.2370229,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-70.99122137,-70.99122137,-70.99122137,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-69.74541985,-69.74541985,-69.74541985,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-68.49961832,-68.49961832,-68.49961832,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-67.25381679,-67.25381679,-67.25381679,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-66.00801527,-66.00801527,-66.00801527,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-64.76221374,-64.76221374,-64.76221374,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-63.51641221,-63.51641221,-63.51641221,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-62.27061069,-62.27061069,-62.27061069,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-61.02480916,-61.02480916,-61.02480916,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-59.77900763,-59.77900763,-59.77900763,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-58.53320611,-58.53320611,-58.53320611,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-57.28740458,-57.28740458,-57.28740458,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-56.04160305,-56.04160305,-56.04160305,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-54.79580153,-54.79580153,-54.79580153,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-53.55,-53.55,-53.55,0), 0).wait(117));

	// Солнце
	this.movieClip_1 = new lib.Символ3();
	this.movieClip_1.name = "movieClip_1";
	this.movieClip_1.setTransform(410.65,573.65,1,1,0,0,0,127.6,130.9);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_1).wait(1).to({rotation:-1.145,x:410.6,y:570.65},0).wait(1).to({rotation:-2.2901,x:410.65,y:567.75},0).wait(1).to({rotation:-3.4351,x:410.6,y:564.8},0).wait(1).to({rotation:-4.5801,x:410.65,y:561.9},0).wait(1).to({rotation:-5.7252,x:410.6,y:558.95},0).wait(1).to({rotation:-6.8702,x:410.65,y:556},0).wait(1).to({rotation:-8.0152,x:410.6,y:553.05},0).wait(1).to({rotation:-9.1602,y:550.15},0).wait(1).to({rotation:-10.3053,y:547.25},0).wait(1).to({rotation:-11.4503,x:410.65,y:544.25},0).wait(1).to({rotation:-12.5953,y:541.35},0).wait(1).to({rotation:-13.7404,y:538.4},0).wait(1).to({rotation:-14.8854,y:535.45},0).wait(1).to({rotation:-16.0304,y:532.5},0).wait(1).to({rotation:-17.1755,x:410.6,y:529.55},0).wait(1).to({rotation:-18.3205,x:410.65,y:526.65},0).wait(1).to({rotation:-19.4655,x:410.6,y:523.7},0).wait(1).to({rotation:-20.6105,x:410.65,y:520.75},0).wait(1).to({rotation:-21.7556,x:410.6,y:517.85},0).wait(1).to({rotation:-22.9006,x:410.65,y:514.9},0).wait(1).to({rotation:-24.0456,y:511.95},0).wait(1).to({rotation:-25.1907,x:410.6,y:509.05},0).wait(1).to({rotation:-26.3357,y:506.1},0).wait(1).to({rotation:-27.4807,y:503.15},0).wait(1).to({rotation:-28.6258,y:500.2},0).wait(1).to({rotation:-29.7708,y:497.25},0).wait(1).to({rotation:-30.9158,y:494.35},0).wait(1).to({rotation:-32.0609,x:410.65,y:491.4},0).wait(1).to({rotation:-33.2059,x:410.6,y:488.45},0).wait(1).to({rotation:-34.3509,y:485.5},0).wait(1).to({rotation:-35.4959,x:410.65,y:482.55},0).wait(1).to({rotation:-36.641,x:410.6,y:479.7},0).wait(1).to({rotation:-37.786,x:410.65,y:476.7},0).wait(1).to({rotation:-38.931,x:410.6,y:473.8},0).wait(1).to({rotation:-40.0761,y:470.85},0).wait(1).to({rotation:-41.2211,x:410.65,y:467.9},0).wait(1).to({rotation:-42.3661,y:464.95},0).wait(1).to({rotation:-43.5112,x:410.6,y:462.05},0).wait(1).to({rotation:-44.6562,y:459.1},0).wait(1).to({rotation:-45.8012,y:456.15},0).wait(1).to({rotation:-46.9463,y:453.2},0).wait(1).to({rotation:-48.0913,x:410.65,y:450.35},0).wait(1).to({rotation:-49.2363,x:410.6,y:447.35},0).wait(1).to({rotation:-50.3813,y:444.4},0).wait(1).to({rotation:-51.5264,x:410.65,y:441.5},0).wait(1).to({rotation:-52.6714,x:410.6,y:438.6},0).wait(1).to({rotation:-53.8164,x:410.65,y:435.65},0).wait(1).to({rotation:-54.9615,y:432.7},0).wait(1).to({rotation:-56.1065,x:410.6,y:429.75},0).wait(1).to({rotation:-57.2515,y:426.8},0).wait(1).to({rotation:-58.3966,y:423.9},0).wait(1).to({rotation:-59.5416,x:410.65,y:420.95},0).wait(1).to({rotation:-60.6866,x:410.6,y:418.05},0).wait(1).to({rotation:-61.8316,x:410.65,y:415.05},0).wait(1).to({rotation:-62.9767,x:410.6,y:412.1},0).wait(1).to({rotation:-64.1217,y:409.2},0).wait(1).to({rotation:-65.2667,x:410.65,y:406.25},0).wait(1).to({rotation:-66.4118,x:410.6,y:403.35},0).wait(1).to({rotation:-67.5568,x:410.65,y:400.35},0).wait(1).to({rotation:-68.7018,x:410.6,y:397.45},0).wait(1).to({rotation:-69.8469,x:410.65,y:394.5},0).wait(1).to({rotation:-70.9919,x:410.6,y:391.6},0).wait(1).to({rotation:-72.1369,x:410.65,y:388.65},0).wait(1).to({rotation:-73.282,x:410.6,y:385.7},0).wait(1).to({rotation:-74.427,y:382.8},0).wait(1).to({rotation:-75.572,y:379.8},0).wait(1).to({rotation:-76.717,y:376.85},0).wait(1).to({rotation:-77.8621,y:373.95},0).wait(1).to({rotation:-79.0071,x:410.65,y:371},0).wait(1).to({rotation:-80.1521,x:410.6,y:368.1},0).wait(1).to({rotation:-81.2972,x:410.65,y:365.15},0).wait(1).to({rotation:-82.4422,y:362.2},0).wait(1).to({rotation:-83.5872,y:359.25},0).wait(1).to({rotation:-84.7323,x:410.6,y:356.35},0).wait(1).to({rotation:-85.8773,y:353.4},0).wait(1).to({rotation:-87.0223,y:350.45},0).wait(1).to({rotation:-88.1674,x:410.65,y:347.55},0).wait(1).to({rotation:-89.3124,y:344.55},0).wait(1).to({rotation:-90.4574,y:341.65},0).wait(1).to({rotation:-91.6024,y:338.75},0).wait(1).to({rotation:-92.7475,y:335.8},0).wait(1).to({rotation:-93.8925,y:332.85},0).wait(1).to({rotation:-95.0375,y:329.9},0).wait(1).to({rotation:-96.1826,y:327},0).wait(1).to({rotation:-97.3276,y:324.05},0).wait(1).to({rotation:-98.4726,x:410.6,y:321.1},0).wait(1).to({rotation:-99.6177,x:410.65,y:318.2},0).wait(1).to({rotation:-100.7627,x:410.6,y:315.25},0).wait(1).to({rotation:-101.9077,y:312.3},0).wait(1).to({rotation:-103.0527,x:410.65,y:309.4},0).wait(1).to({rotation:-104.1978,x:410.6,y:306.45},0).wait(1).to({rotation:-105.3428,x:410.65,y:303.5},0).wait(1).to({rotation:-106.4878,x:410.6,y:300.55},0).wait(1).to({rotation:-107.6329,x:410.65,y:297.6},0).wait(1).to({rotation:-108.7779,y:294.7},0).wait(1).to({rotation:-109.9229,x:410.6,y:291.75},0).wait(1).to({rotation:-111.068,x:410.65,y:288.85},0).wait(1).to({rotation:-112.213,y:285.85},0).wait(1).to({rotation:-113.358,x:410.6,y:282.95},0).wait(1).to({rotation:-114.5031,x:410.65,y:280},0).wait(1).to({rotation:-115.6481,x:410.6,y:277.05},0).wait(1).to({rotation:-116.7931,x:410.65,y:274.15},0).wait(1).to({rotation:-117.9381,x:410.6,y:271.15},0).wait(1).to({rotation:-119.0832,x:410.65,y:268.25},0).wait(1).to({rotation:-120.2282,x:410.6,y:265.3},0).wait(1).to({rotation:-121.3732,y:262.35},0).wait(1).to({rotation:-122.5183,x:410.65,y:259.45},0).wait(1).to({rotation:-123.6633,x:410.6,y:256.5},0).wait(1).to({rotation:-124.8083,x:410.65,y:253.6},0).wait(1).to({rotation:-125.9534,y:250.65},0).wait(1).to({rotation:-127.0984,y:247.75},0).wait(1).to({rotation:-128.2434,x:410.6,y:244.75},0).wait(1).to({rotation:-129.3885,x:410.65,y:241.85},0).wait(1).to({rotation:-130.5335,x:410.6,y:238.9},0).wait(1).to({rotation:-131.6785,y:235.95},0).wait(1).to({rotation:-132.8235,y:233},0).wait(1).to({rotation:-133.9686,y:230.05},0).wait(1).to({rotation:-135.1136,y:227.15},0).wait(1).to({rotation:-136.2586,y:224.25},0).wait(1).to({rotation:-137.4037,y:221.3},0).wait(1).to({rotation:-138.5487,y:218.35},0).wait(1).to({rotation:-139.6937,y:215.4},0).wait(1).to({rotation:-140.8388,y:212.45},0).wait(1).to({rotation:-141.9838,y:209.5},0).wait(1).to({rotation:-143.1288,y:206.6},0).wait(1).to({rotation:-144.2738,x:410.65,y:203.7},0).wait(1).to({rotation:-145.4189,y:200.75},0).wait(1).to({rotation:-146.5639,y:197.8},0).wait(1).to({rotation:-147.7089,y:194.85},0).wait(1).to({rotation:-148.854,y:191.9},0).wait(1).to({rotation:-149.999,y:189},0).wait(1).to({rotation:-147.8007},0).wait(1).to({rotation:-145.6025,x:410.6,y:188.95},0).wait(1).to({rotation:-143.4042,x:410.65,y:189},0).wait(1).to({rotation:-141.2059,x:410.6},0).wait(1).to({rotation:-139.0077},0).wait(1).to({rotation:-136.8094,y:188.95},0).wait(1).to({rotation:-134.6111,x:410.65},0).wait(1).to({rotation:-132.4129},0).wait(1).to({rotation:-130.2146,x:410.6,y:189},0).wait(1).to({rotation:-128.0163,x:410.65,y:188.95},0).wait(1).to({rotation:-125.8181,y:189},0).wait(1).to({rotation:-123.6198,x:410.6},0).wait(1).to({rotation:-121.4215,x:410.65,y:188.95},0).wait(1).to({rotation:-119.2233,y:189},0).wait(1).to({rotation:-117.025,x:410.6,y:188.95},0).wait(1).to({rotation:-114.8267,x:410.65,y:189},0).wait(1).to({rotation:-112.6285,x:410.6,y:188.95},0).wait(1).to({rotation:-110.4302,y:189},0).wait(1).to({rotation:-108.2319,x:410.65,y:188.95},0).wait(1).to({rotation:-106.0337,x:410.6},0).wait(1).to({rotation:-103.8354,x:410.65,y:189},0).wait(1).to({rotation:-101.6371,x:410.6,y:188.95},0).wait(1).to({rotation:-99.4389,x:410.65,y:189},0).wait(1).to({rotation:-97.2406,x:410.6,y:188.95},0).wait(1).to({rotation:-95.0423,x:410.65,y:189},0).wait(1).to({rotation:-92.8441,x:410.6,y:188.95},0).wait(1).to({rotation:-90.6458,y:189},0).wait(1).to({rotation:-88.4475},0).wait(1).to({rotation:-86.2492,y:188.95},0).wait(1).to({rotation:-84.051},0).wait(1).to({rotation:-81.8527,x:410.65,y:189},0).wait(1).to({rotation:-79.6544,x:410.6},0).wait(1).to({rotation:-77.4562},0).wait(1).to({rotation:-75.2579,y:188.95},0).wait(1).to({rotation:-73.0596,x:410.65,y:189},0).wait(1).to({rotation:-70.8614,y:188.95},0).wait(1).to({rotation:-68.6631,y:189},0).wait(1).to({rotation:-66.4648,x:410.6,y:188.95},0).wait(1).to({rotation:-64.2666,y:189},0).wait(1).to({rotation:-62.0683,y:188.95},0).wait(1).to({rotation:-59.87,y:189},0).wait(1).to({rotation:-57.6718,x:410.65},0).wait(1).to({rotation:-55.4735,x:410.6},0).wait(1).to({rotation:-53.2752,y:188.95},0).wait(1).to({rotation:-51.077,y:189},0).wait(1).to({rotation:-48.8787},0).wait(1).to({rotation:-46.6804,x:410.65,y:188.95},0).wait(1).to({rotation:-44.4822,x:410.6,y:189},0).wait(1).to({rotation:-42.2839},0).wait(1).to({rotation:-40.0856},0).wait(1).to({rotation:-37.8874,x:410.65},0).wait(1).to({rotation:-35.6891,x:410.6,y:188.95},0).wait(1).to({rotation:-33.4908,x:410.65},0).wait(1).to({rotation:-31.2926,y:189},0).wait(1).to({rotation:-29.0943},0).wait(1).to({rotation:-26.896,x:410.6},0).wait(1).to({rotation:-24.6978,x:410.65},0).wait(1).to({rotation:-22.4995,y:188.95},0).wait(1).to({rotation:-20.3012,x:410.6,y:189},0).wait(1).to({rotation:-18.103,y:188.95},0).wait(1).to({rotation:-15.9047,y:189},0).wait(1).to({rotation:-13.7064,y:188.95},0).wait(1).to({rotation:-11.5082},0).wait(1).to({rotation:-9.3099,x:410.65},0).wait(1).to({rotation:-7.1116,x:410.6,y:189},0).wait(1).to({rotation:-4.9134,x:410.65,y:188.95},0).wait(1).to({rotation:-2.7151,x:410.6},0).wait(1).to({rotation:-0.5168,x:410.65,y:189},0).wait(1).to({rotation:1.6814,x:410.6},0).wait(1).to({rotation:3.8797},0).wait(1).to({rotation:6.078,x:410.65,y:188.95},0).wait(1).to({rotation:8.2762,x:410.6},0).wait(1).to({rotation:10.4745},0).wait(1).to({rotation:12.6728,x:410.65},0).wait(1).to({rotation:14.871,x:410.6},0).wait(1).to({rotation:17.0693,x:410.65,y:189},0).wait(1).to({rotation:19.2676,x:410.6,y:188.95},0).wait(1).to({rotation:21.4658,x:410.65},0).wait(1).to({rotation:23.6641,x:410.6},0).wait(1).to({rotation:25.8624},0).wait(1).to({rotation:28.0606},0).wait(1).to({rotation:30.2589},0).wait(1).to({rotation:32.4572,y:189},0).wait(1).to({rotation:34.6554},0).wait(1).to({rotation:36.8537,x:410.65},0).wait(1).to({rotation:39.052},0).wait(1).to({rotation:41.2503},0).wait(1).to({rotation:43.4485},0).wait(1).to({rotation:45.6468,x:410.6},0).wait(1).to({rotation:47.8451,x:410.65},0).wait(1).to({rotation:50.0433,x:410.6,y:188.95},0).wait(1).to({rotation:52.2416,x:410.65,y:189},0).wait(1).to({rotation:54.4399,x:410.6,y:188.95},0).wait(1).to({rotation:56.6381},0).wait(1).to({rotation:58.8364,x:410.65,y:189},0).wait(1).to({rotation:61.0347,x:410.6},0).wait(1).to({rotation:63.2329,x:410.65},0).wait(1).to({rotation:65.4312,x:410.6,y:188.95},0).wait(1).to({rotation:67.6295},0).wait(1).to({rotation:69.8277,x:410.65},0).wait(1).to({rotation:72.026,x:410.6},0).wait(1).to({rotation:74.2243,x:410.65,y:189},0).wait(1).to({rotation:76.4225,x:410.6},0).wait(1).to({rotation:78.6208},0).wait(1).to({rotation:80.8191,x:410.65,y:188.95},0).wait(1).to({rotation:83.0173,x:410.6},0).wait(1).to({rotation:85.2156,x:410.65},0).wait(1).to({rotation:87.4139},0).wait(1).to({rotation:89.6121,x:410.6,y:189},0).wait(1).to({rotation:91.8104,y:188.95},0).wait(1).to({rotation:94.0087,y:189},0).wait(1).to({rotation:96.2069},0).wait(1).to({rotation:98.4052},0).wait(1).to({rotation:100.6035,y:188.95},0).wait(1).to({rotation:102.8017,x:410.65,y:189},0).wait(1).to({rotation:105,y:188.95},0).wait(1));

	// Небо
	this.instance_1 = new lib.Символ2();
	this.instance_1.setTransform(639.45,361.4,1,1,0,0,0,641,361.4);
	var instance_1Filter_2 = new cjs.ColorFilter(0.26,0.26,0.26,1,0,0,0,0);
	this.instance_1.filters = [instance_1Filter_2];
	this.instance_1.cache(-3,-3,1288,729);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(248));
	this.timeline.addTween(cjs.Tween.get(instance_1Filter_2).wait(1).to(new cjs.ColorFilter(1,1,1,1,-186.30572519,-186.30572519,-186.30572519,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-183.91145038,-183.91145038,-183.91145038,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-181.51717557,-181.51717557,-181.51717557,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-179.12290076,-179.12290076,-179.12290076,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-176.72862595,-176.72862595,-176.72862595,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-174.33435115,-174.33435115,-174.33435115,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-171.94007634,-171.94007634,-171.94007634,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-169.54580153,-169.54580153,-169.54580153,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-167.15152672,-167.15152672,-167.15152672,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-164.75725191,-164.75725191,-164.75725191,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-162.3629771,-162.3629771,-162.3629771,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-159.96870229,-159.96870229,-159.96870229,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-157.57442748,-157.57442748,-157.57442748,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-155.18015267,-155.18015267,-155.18015267,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-152.78587786,-152.78587786,-152.78587786,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-150.39160305,-150.39160305,-150.39160305,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-147.99732824,-147.99732824,-147.99732824,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-145.60305344,-145.60305344,-145.60305344,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-143.20877863,-143.20877863,-143.20877863,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-140.81450382,-140.81450382,-140.81450382,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-138.42022901,-138.42022901,-138.42022901,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-136.0259542,-136.0259542,-136.0259542,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-133.63167939,-133.63167939,-133.63167939,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-131.23740458,-131.23740458,-131.23740458,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-128.84312977,-128.84312977,-128.84312977,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-126.44885496,-126.44885496,-126.44885496,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-124.05458015,-124.05458015,-124.05458015,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-121.66030534,-121.66030534,-121.66030534,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-119.26603053,-119.26603053,-119.26603053,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-116.87175573,-116.87175573,-116.87175573,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-114.47748092,-114.47748092,-114.47748092,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-112.08320611,-112.08320611,-112.08320611,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-109.6889313,-109.6889313,-109.6889313,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-107.29465649,-107.29465649,-107.29465649,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-104.90038168,-104.90038168,-104.90038168,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-102.50610687,-102.50610687,-102.50610687,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-100.11183206,-100.11183206,-100.11183206,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-97.71755725,-97.71755725,-97.71755725,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-95.32328244,-95.32328244,-95.32328244,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-92.92900763,-92.92900763,-92.92900763,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-90.53473282,-90.53473282,-90.53473282,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-88.14045802,-88.14045802,-88.14045802,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-85.74618321,-85.74618321,-85.74618321,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-83.3519084,-83.3519084,-83.3519084,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-80.95763359,-80.95763359,-80.95763359,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-78.56335878,-78.56335878,-78.56335878,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-76.16908397,-76.16908397,-76.16908397,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-73.77480916,-73.77480916,-73.77480916,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-71.38053435,-71.38053435,-71.38053435,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-68.98625954,-68.98625954,-68.98625954,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-66.59198473,-66.59198473,-66.59198473,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-64.19770992,-64.19770992,-64.19770992,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-61.80343511,-61.80343511,-61.80343511,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-59.40916031,-59.40916031,-59.40916031,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-57.0148855,-57.0148855,-57.0148855,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-54.62061069,-54.62061069,-54.62061069,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-52.22633588,-52.22633588,-52.22633588,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-49.83206107,-49.83206107,-49.83206107,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-47.43778626,-47.43778626,-47.43778626,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-45.04351145,-45.04351145,-45.04351145,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-42.64923664,-42.64923664,-42.64923664,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-40.25496183,-40.25496183,-40.25496183,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-37.86068702,-37.86068702,-37.86068702,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-35.46641221,-35.46641221,-35.46641221,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-33.0721374,-33.0721374,-33.0721374,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-30.6778626,-30.6778626,-30.6778626,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-28.28358779,-28.28358779,-28.28358779,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-25.88931298,-25.88931298,-25.88931298,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-23.49503817,-23.49503817,-23.49503817,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-21.10076336,-21.10076336,-21.10076336,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-18.70648855,-18.70648855,-18.70648855,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-16.31221374,-16.31221374,-16.31221374,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-13.91793893,-13.91793893,-13.91793893,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-11.52366412,-11.52366412,-11.52366412,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-9.12938931,-9.12938931,-9.12938931,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-6.7351145,-6.7351145,-6.7351145,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-4.34083969,-4.34083969,-4.34083969,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-1.94656489,-1.94656489,-1.94656489,0), 0).wait(1).to(new cjs.ColorFilter(0.99824427,0.99824427,0.99824427,1,0.44770992,0.44770992,0.44770992,0), 0).wait(1).to(new cjs.ColorFilter(0.98885496,0.98885496,0.98885496,1,2.84198473,2.84198473,2.84198473,0), 0).wait(1).to(new cjs.ColorFilter(0.97946565,0.97946565,0.97946565,1,5.23625954,5.23625954,5.23625954,0), 0).wait(1).to(new cjs.ColorFilter(0.97007634,0.97007634,0.97007634,1,7.63053435,7.63053435,7.63053435,0), 0).wait(1).to(new cjs.ColorFilter(0.96068702,0.96068702,0.96068702,1,10.02480916,10.02480916,10.02480916,0), 0).wait(1).to(new cjs.ColorFilter(0.95129771,0.95129771,0.95129771,1,12.41908397,12.41908397,12.41908397,0), 0).wait(1).to(new cjs.ColorFilter(0.9419084,0.9419084,0.9419084,1,14.81335878,14.81335878,14.81335878,0), 0).wait(1).to(new cjs.ColorFilter(0.93251908,0.93251908,0.93251908,1,17.20763359,17.20763359,17.20763359,0), 0).wait(1).to(new cjs.ColorFilter(0.92312977,0.92312977,0.92312977,1,19.6019084,19.6019084,19.6019084,0), 0).wait(1).to(new cjs.ColorFilter(0.91374046,0.91374046,0.91374046,1,21.99618321,21.99618321,21.99618321,0), 0).wait(1).to(new cjs.ColorFilter(0.90435115,0.90435115,0.90435115,1,24.39045802,24.39045802,24.39045802,0), 0).wait(1).to(new cjs.ColorFilter(0.89496183,0.89496183,0.89496183,1,26.78473282,26.78473282,26.78473282,0), 0).wait(1).to(new cjs.ColorFilter(0.88557252,0.88557252,0.88557252,1,29.17900763,29.17900763,29.17900763,0), 0).wait(1).to(new cjs.ColorFilter(0.87618321,0.87618321,0.87618321,1,31.57328244,31.57328244,31.57328244,0), 0).wait(1).to(new cjs.ColorFilter(0.86679389,0.86679389,0.86679389,1,33.96755725,33.96755725,33.96755725,0), 0).wait(1).to(new cjs.ColorFilter(0.85740458,0.85740458,0.85740458,1,36.36183206,36.36183206,36.36183206,0), 0).wait(1).to(new cjs.ColorFilter(0.84801527,0.84801527,0.84801527,1,38.75610687,38.75610687,38.75610687,0), 0).wait(1).to(new cjs.ColorFilter(0.83862595,0.83862595,0.83862595,1,41.15038168,41.15038168,41.15038168,0), 0).wait(1).to(new cjs.ColorFilter(0.82923664,0.82923664,0.82923664,1,43.54465649,43.54465649,43.54465649,0), 0).wait(1).to(new cjs.ColorFilter(0.81984733,0.81984733,0.81984733,1,45.9389313,45.9389313,45.9389313,0), 0).wait(1).to(new cjs.ColorFilter(0.81045802,0.81045802,0.81045802,1,48.33320611,48.33320611,48.33320611,0), 0).wait(1).to(new cjs.ColorFilter(0.8010687,0.8010687,0.8010687,1,50.72748092,50.72748092,50.72748092,0), 0).wait(1).to(new cjs.ColorFilter(0.79167939,0.79167939,0.79167939,1,53.12175573,53.12175573,53.12175573,0), 0).wait(1).to(new cjs.ColorFilter(0.78229008,0.78229008,0.78229008,1,55.51603053,55.51603053,55.51603053,0), 0).wait(1).to(new cjs.ColorFilter(0.77290076,0.77290076,0.77290076,1,57.91030534,57.91030534,57.91030534,0), 0).wait(1).to(new cjs.ColorFilter(0.76351145,0.76351145,0.76351145,1,60.30458015,60.30458015,60.30458015,0), 0).wait(1).to(new cjs.ColorFilter(0.75412214,0.75412214,0.75412214,1,62.69885496,62.69885496,62.69885496,0), 0).wait(1).to(new cjs.ColorFilter(0.74473282,0.74473282,0.74473282,1,65.09312977,65.09312977,65.09312977,0), 0).wait(1).to(new cjs.ColorFilter(0.73534351,0.73534351,0.73534351,1,67.48740458,67.48740458,67.48740458,0), 0).wait(1).to(new cjs.ColorFilter(0.7259542,0.7259542,0.7259542,1,69.88167939,69.88167939,69.88167939,0), 0).wait(1).to(new cjs.ColorFilter(0.71656489,0.71656489,0.71656489,1,72.2759542,72.2759542,72.2759542,0), 0).wait(1).to(new cjs.ColorFilter(0.70717557,0.70717557,0.70717557,1,74.67022901,74.67022901,74.67022901,0), 0).wait(1).to(new cjs.ColorFilter(0.69778626,0.69778626,0.69778626,1,77.06450382,77.06450382,77.06450382,0), 0).wait(1).to(new cjs.ColorFilter(0.68839695,0.68839695,0.68839695,1,79.45877863,79.45877863,79.45877863,0), 0).wait(1).to(new cjs.ColorFilter(0.67900763,0.67900763,0.67900763,1,81.85305344,81.85305344,81.85305344,0), 0).wait(1).to(new cjs.ColorFilter(0.66961832,0.66961832,0.66961832,1,84.24732824,84.24732824,84.24732824,0), 0).wait(1).to(new cjs.ColorFilter(0.66022901,0.66022901,0.66022901,1,86.64160305,86.64160305,86.64160305,0), 0).wait(1).to(new cjs.ColorFilter(0.65083969,0.65083969,0.65083969,1,89.03587786,89.03587786,89.03587786,0), 0).wait(1).to(new cjs.ColorFilter(0.64145038,0.64145038,0.64145038,1,91.43015267,91.43015267,91.43015267,0), 0).wait(1).to(new cjs.ColorFilter(0.63206107,0.63206107,0.63206107,1,93.82442748,93.82442748,93.82442748,0), 0).wait(1).to(new cjs.ColorFilter(0.62267176,0.62267176,0.62267176,1,96.21870229,96.21870229,96.21870229,0), 0).wait(1).to(new cjs.ColorFilter(0.61328244,0.61328244,0.61328244,1,98.6129771,98.6129771,98.6129771,0), 0).wait(1).to(new cjs.ColorFilter(0.60389313,0.60389313,0.60389313,1,101.00725191,101.00725191,101.00725191,0), 0).wait(1).to(new cjs.ColorFilter(0.59450382,0.59450382,0.59450382,1,103.40152672,103.40152672,103.40152672,0), 0).wait(1).to(new cjs.ColorFilter(0.5851145,0.5851145,0.5851145,1,105.79580153,105.79580153,105.79580153,0), 0).wait(1).to(new cjs.ColorFilter(0.57572519,0.57572519,0.57572519,1,108.19007634,108.19007634,108.19007634,0), 0).wait(1).to(new cjs.ColorFilter(0.56633588,0.56633588,0.56633588,1,110.58435115,110.58435115,110.58435115,0), 0).wait(1).to(new cjs.ColorFilter(0.55694656,0.55694656,0.55694656,1,112.97862595,112.97862595,112.97862595,0), 0).wait(1).to(new cjs.ColorFilter(0.54755725,0.54755725,0.54755725,1,115.37290076,115.37290076,115.37290076,0), 0).wait(1).to(new cjs.ColorFilter(0.53816794,0.53816794,0.53816794,1,117.76717557,117.76717557,117.76717557,0), 0).wait(1).to(new cjs.ColorFilter(0.52877863,0.52877863,0.52877863,1,120.16145038,120.16145038,120.16145038,0), 0).wait(1).to(new cjs.ColorFilter(0.51938931,0.51938931,0.51938931,1,122.55572519,122.55572519,122.55572519,0), 0).wait(1).to(new cjs.ColorFilter(0.51,0.51,0.51,1,124.95,124.95,124.95,0), 0).wait(117));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:1, endFrame:1, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:0, endFrame:0, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:2, endFrame:2, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:3, endFrame:3, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:4, endFrame:4, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:5, endFrame:5, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:6, endFrame:6, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:7, endFrame:7, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:8, endFrame:8, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:9, endFrame:9, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:10, endFrame:10, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:11, endFrame:11, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:12, endFrame:12, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:13, endFrame:13, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:14, endFrame:14, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:15, endFrame:15, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:16, endFrame:16, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:17, endFrame:17, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:18, endFrame:18, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:19, endFrame:19, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:20, endFrame:20, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:21, endFrame:21, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:22, endFrame:22, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:23, endFrame:23, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:24, endFrame:24, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:25, endFrame:25, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:26, endFrame:26, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:27, endFrame:27, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:28, endFrame:28, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:29, endFrame:29, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:30, endFrame:30, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:31, endFrame:31, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:32, endFrame:32, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:33, endFrame:33, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:34, endFrame:34, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:35, endFrame:35, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:36, endFrame:36, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:37, endFrame:37, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:38, endFrame:38, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:39, endFrame:39, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:40, endFrame:40, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:41, endFrame:41, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:42, endFrame:42, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:43, endFrame:43, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:44, endFrame:44, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:45, endFrame:45, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:46, endFrame:46, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:47, endFrame:47, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:48, endFrame:48, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:49, endFrame:49, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:50, endFrame:50, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:51, endFrame:51, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:52, endFrame:52, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:53, endFrame:53, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:54, endFrame:54, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:55, endFrame:55, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:56, endFrame:56, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:57, endFrame:57, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:58, endFrame:58, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:59, endFrame:59, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:60, endFrame:60, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:61, endFrame:61, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:62, endFrame:62, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:63, endFrame:63, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:64, endFrame:64, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:65, endFrame:65, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:66, endFrame:66, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:67, endFrame:67, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:68, endFrame:68, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:69, endFrame:69, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:70, endFrame:70, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:71, endFrame:71, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:72, endFrame:72, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:73, endFrame:73, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:74, endFrame:74, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:75, endFrame:75, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:76, endFrame:76, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:77, endFrame:77, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:78, endFrame:78, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:79, endFrame:79, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:80, endFrame:80, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:81, endFrame:81, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:82, endFrame:82, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:83, endFrame:83, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:84, endFrame:84, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:85, endFrame:85, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:86, endFrame:86, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:87, endFrame:87, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:88, endFrame:88, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:89, endFrame:89, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:90, endFrame:90, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:91, endFrame:91, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:92, endFrame:92, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:93, endFrame:93, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:94, endFrame:94, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:95, endFrame:95, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:96, endFrame:96, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:97, endFrame:97, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:98, endFrame:98, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:99, endFrame:99, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:100, endFrame:100, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:101, endFrame:101, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:102, endFrame:102, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:103, endFrame:103, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:104, endFrame:104, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:105, endFrame:105, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:106, endFrame:106, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:107, endFrame:107, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:108, endFrame:108, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:109, endFrame:109, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:110, endFrame:110, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:111, endFrame:111, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:112, endFrame:112, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:113, endFrame:113, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:114, endFrame:114, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:115, endFrame:115, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:116, endFrame:116, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:117, endFrame:117, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:118, endFrame:118, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:119, endFrame:119, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:120, endFrame:120, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:121, endFrame:121, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:122, endFrame:122, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:123, endFrame:123, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:124, endFrame:124, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:125, endFrame:125, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:126, endFrame:126, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:127, endFrame:127, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:128, endFrame:128, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:129, endFrame:129, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:130, endFrame:130, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance, startFrame:131, endFrame:131, x:-2, y:-2, w:1283, h:410});
	this.filterCacheList.push({instance: this.instance_1, startFrame:1, endFrame:1, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:0, endFrame:0, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:2, endFrame:2, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:3, endFrame:3, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:4, endFrame:4, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:5, endFrame:5, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:6, endFrame:6, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:7, endFrame:7, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:8, endFrame:8, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:9, endFrame:9, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:10, endFrame:10, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:11, endFrame:11, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:12, endFrame:12, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:13, endFrame:13, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:14, endFrame:14, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:15, endFrame:15, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:16, endFrame:16, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:17, endFrame:17, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:18, endFrame:18, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:19, endFrame:19, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:20, endFrame:20, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:21, endFrame:21, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:22, endFrame:22, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:23, endFrame:23, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:24, endFrame:24, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:25, endFrame:25, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:26, endFrame:26, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:27, endFrame:27, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:28, endFrame:28, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:29, endFrame:29, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:30, endFrame:30, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:31, endFrame:31, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:32, endFrame:32, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:33, endFrame:33, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:34, endFrame:34, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:35, endFrame:35, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:36, endFrame:36, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:37, endFrame:37, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:38, endFrame:38, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:39, endFrame:39, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:40, endFrame:40, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:41, endFrame:41, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:42, endFrame:42, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:43, endFrame:43, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:44, endFrame:44, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:45, endFrame:45, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:46, endFrame:46, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:47, endFrame:47, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:48, endFrame:48, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:49, endFrame:49, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:50, endFrame:50, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:51, endFrame:51, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:52, endFrame:52, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:53, endFrame:53, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:54, endFrame:54, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:55, endFrame:55, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:56, endFrame:56, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:57, endFrame:57, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:58, endFrame:58, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:59, endFrame:59, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:60, endFrame:60, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:61, endFrame:61, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:62, endFrame:62, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:63, endFrame:63, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:64, endFrame:64, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:65, endFrame:65, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:66, endFrame:66, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:67, endFrame:67, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:68, endFrame:68, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:69, endFrame:69, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:70, endFrame:70, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:71, endFrame:71, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:72, endFrame:72, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:73, endFrame:73, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:74, endFrame:74, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:75, endFrame:75, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:76, endFrame:76, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:77, endFrame:77, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:78, endFrame:78, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:79, endFrame:79, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:80, endFrame:80, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:81, endFrame:81, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:82, endFrame:82, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:83, endFrame:83, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:84, endFrame:84, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:85, endFrame:85, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:86, endFrame:86, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:87, endFrame:87, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:88, endFrame:88, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:89, endFrame:89, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:90, endFrame:90, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:91, endFrame:91, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:92, endFrame:92, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:93, endFrame:93, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:94, endFrame:94, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:95, endFrame:95, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:96, endFrame:96, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:97, endFrame:97, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:98, endFrame:98, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:99, endFrame:99, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:100, endFrame:100, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:101, endFrame:101, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:102, endFrame:102, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:103, endFrame:103, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:104, endFrame:104, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:105, endFrame:105, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:106, endFrame:106, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:107, endFrame:107, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:108, endFrame:108, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:109, endFrame:109, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:110, endFrame:110, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:111, endFrame:111, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:112, endFrame:112, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:113, endFrame:113, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:114, endFrame:114, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:115, endFrame:115, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:116, endFrame:116, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:117, endFrame:117, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:118, endFrame:118, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:119, endFrame:119, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:120, endFrame:120, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:121, endFrame:121, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:122, endFrame:122, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:123, endFrame:123, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:124, endFrame:124, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:125, endFrame:125, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:126, endFrame:126, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:127, endFrame:127, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:128, endFrame:128, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:129, endFrame:129, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:130, endFrame:130, x:-3, y:-3, w:1288, h:729});
	this.filterCacheList.push({instance: this.instance_1, startFrame:131, endFrame:131, x:-3, y:-3, w:1288, h:729});
	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(637.5,359,924.5999999999999,439.6);
// library properties:
lib.properties = {
	id: '3E8A566C534545439E4A870667F70D48',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Звук Петух_atlas_1.png?1712579056858", id:"Звук Петух_atlas_1"},
		{src:"images/Звук Петух_atlas_2.png?1712579056858", id:"Звук Петух_atlas_2"},
		{src:"sounds/КрикПетуха_.mp3?1712579057182", id:"КрикПетуха"},
		{src:"sounds/Рассвет_.mp3?1712579057182", id:"Рассвет"}
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
an.compositions['3E8A566C534545439E4A870667F70D48'] = {
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