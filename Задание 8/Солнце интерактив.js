(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Солнце интерактив_atlas_1", frames: [[0,1004,564,553],[0,0,564,1002]]}
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



(lib.Улыбающеесясолнце = function() {
	this.initialize(ss["Солнце интерактив_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Фоноблачка = function() {
	this.initialize(ss["Солнце интерактив_atlas_1"]);
	this.gotoAndStop(1);
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
	this.instance = new lib.Фоноблачка();
	this.instance.setTransform(-635.25,-360.3,2.2526,0.7192);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(-635.2,-360.3,1270.5,720.6), null);


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
	this.instance = new lib.Улыбающеесясолнце();
	this.instance.setTransform(0,0,0.8022,0.8022);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(0,0,452.4,443.6), null);


// stage content:
(lib.Солнцеинтерактив = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		/* Нажмите для перехода к веб-странице
		При нажатии на указанный экземпляр символа производится загрузка веб-страницы в новом окне обозревателя.
		
		Инструкции:
		1. Замените http://www.adobe.com на адрес желаемой веб-страницы.
		   Не удаляйте кавычки ("").
		*/
		
		this.movieClip_1.addEventListener("click", fl_ClickToGoToWebPage_4);
		
		function fl_ClickToGoToWebPage_4() {
			window.open("https://ru.wikipedia.org/wiki/%D0%A1%D0%BE%D0%BB%D0%BD%D1%86%D0%B5", "_blank");
		}
		
		/* Нажмите для перехода к веб-странице
		При нажатии на указанный экземпляр символа производится загрузка веб-страницы в новом окне обозревателя.
		
		Инструкции:
		1. Замените http://www.adobe.com на адрес желаемой веб-страницы.
		   Не удаляйте кавычки ("").
		*/
		
		this.movieClip_1.addEventListener("click", fl_ClickToGoToWebPage_5);
		
		function fl_ClickToGoToWebPage_5() {
			window.open("https://ru.wikipedia.org/wiki/%D0%A1%D0%BE%D0%BB%D0%BD%D1%86%D0%B5", "_blank");
		}
		
		/* Нажмите для перехода к веб-странице
		При нажатии на указанный экземпляр символа производится загрузка веб-страницы в новом окне обозревателя.
		
		Инструкции:
		1. Замените http://www.adobe.com на адрес желаемой веб-страницы.
		   Не удаляйте кавычки ("").
		*/
		
		this.movieClip_2.addEventListener("click", fl_ClickToGoToWebPage_6);
		
		function fl_ClickToGoToWebPage_6() {
			window.open("https://ru.wikipedia.org/wiki/%D0%A1%D0%BE%D0%BB%D0%BD%D1%86%D0%B5", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(72));

	// Солнце
	this.movieClip_1 = new lib.Символ1();
	this.movieClip_1.name = "movieClip_1";
	this.movieClip_1.setTransform(632.25,270.8,1,1,-25.2188,0,0,226.2,221.7);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_1).wait(1).to({regY:221.8,rotation:-23.1434,y:270.9},0).wait(1).to({rotation:-21.0675,x:632.3},0).wait(1).to({rotation:-18.9915},0).wait(1).to({rotation:-16.9156,x:632.25,y:270.95},0).wait(1).to({rotation:-14.8396,y:270.9},0).wait(1).to({rotation:-12.7637,y:270.95},0).wait(1).to({rotation:-10.6877},0).wait(1).to({rotation:-8.6118,x:632.2},0).wait(1).to({rotation:-6.5358,x:632.25,y:270.9},0).wait(1).to({rotation:-4.4599,x:632.2,y:270.95},0).wait(1).to({rotation:-2.3839,x:632.25},0).wait(1).to({rotation:-0.308,x:632.2},0).wait(1).to({rotation:1.768},0).wait(1).to({rotation:3.8439},0).wait(1).to({rotation:5.9199,x:632.15},0).wait(1).to({rotation:7.9958,x:632.2},0).wait(1).to({rotation:10.0718,x:632.15},0).wait(1).to({rotation:12.1477,x:632.2},0).wait(1).to({rotation:14.2237,x:632.15},0).wait(1).to({rotation:16.2996,y:271.05},0).wait(1).to({rotation:18.3756,y:271},0).wait(1).to({rotation:20.4515},0).wait(1).to({rotation:22.5275,y:270.95},0).wait(1).to({rotation:24.6034,x:632.1},0).wait(1).to({rotation:26.6794,y:271},0).wait(1).to({rotation:28.7553},0).wait(1).to({rotation:30.8313,x:632.15},0).wait(1).to({rotation:32.9072,x:632.1},0).wait(1).to({rotation:34.9832,x:632.15,y:271.05},0).wait(1).to({rotation:37.0591,x:632.1,y:270.95},0).wait(1).to({rotation:39.1351,y:271},0).wait(1).to({rotation:41.211,x:632.05},0).wait(1).to({rotation:43.287,x:632.1},0).wait(1).to({rotation:45.3629,x:632.15},0).wait(1).to({rotation:47.4389,x:632.1,y:270.95},0).wait(1).to({rotation:49.5148,x:632.05,y:271},0).wait(1).to({rotation:47.243},0).wait(1).to({rotation:44.9711,x:632.1,y:270.95},0).wait(1).to({rotation:42.6993,y:271},0).wait(1).to({rotation:40.4275},0).wait(1).to({rotation:38.1557,x:632.05},0).wait(1).to({rotation:35.8838,x:632.1},0).wait(1).to({rotation:33.612,y:270.95},0).wait(1).to({rotation:31.3402,x:632.15,y:271},0).wait(1).to({rotation:29.0683},0).wait(1).to({rotation:26.7965,x:632.1,y:271.05},0).wait(1).to({rotation:24.5247,x:632.15,y:271},0).wait(1).to({rotation:22.2529},0).wait(1).to({rotation:19.981},0).wait(1).to({rotation:17.7092,x:632.2},0).wait(1).to({rotation:15.4374,x:632.15},0).wait(1).to({rotation:13.1655,x:632.2,y:270.9},0).wait(1).to({rotation:10.8937,x:632.15,y:270.95},0).wait(1).to({rotation:8.6219,x:632.2},0).wait(1).to({rotation:6.3501,x:632.15},0).wait(1).to({rotation:4.0782,x:632.25},0).wait(1).to({rotation:1.8064,x:632.2},0).wait(1).to({rotation:-0.4654},0).wait(1).to({rotation:-2.7373,x:632.25},0).wait(1).to({rotation:-5.0091,x:632.2},0).wait(1).to({rotation:-7.2809},0).wait(1).to({rotation:-9.5527,y:270.9},0).wait(1).to({rotation:-11.8246,x:632.25,y:270.95},0).wait(1).to({rotation:-14.0964,y:270.9},0).wait(1).to({rotation:-16.3682},0).wait(1).to({rotation:-18.6401,x:632.3},0).wait(1).to({rotation:-20.9119,x:632.25},0).wait(1).to({rotation:-23.1837},0).wait(1).to({rotation:-25.4555,x:632.3},0).wait(1).to({rotation:-27.7274,x:632.25},0).wait(1).to({rotation:-29.9992,x:632.3},0).wait(1));

	// Фон
	this.movieClip_2 = new lib.Символ2();
	this.movieClip_2.name = "movieClip_2";
	this.movieClip_2.setTransform(636.25,357.3);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_2).wait(72));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(641,314.2,630.5,403.40000000000003);
// library properties:
lib.properties = {
	id: '3A14EDB9885BEF4485B2811DB65E6323',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Солнце интерактив_atlas_1.png?1713182149230", id:"Солнце интерактив_atlas_1"}
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
an.compositions['3A14EDB9885BEF4485B2811DB65E6323'] = {
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