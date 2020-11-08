//=============================================================================
// Bluebooth Plugins - MultiTouch
// BBS_MultiTouch.js
//=============================================================================

//=============================================================================
 /*:
 * @title MultiTouch Plugin
 * @author Michael Morris (https://www.patreon.com/bluebooth)
 * @date March 4, 2016
 * @filename BBS_MultiTouch.js
 * If you enjoy my work, consider supporting me on Patreon!
 *
 * https://www.patreon.com/bluebooth
 *
 * @plugindesc v1.02 Overrides TouchInput core scripts to provide true multi-touch
 * and gesture support for RPGMaker MV.  Originally developed in conjunction with
 * BBS_MapControls.
 * 
 * Special Thanks to Tsukihime for all the help.
 * Special Thanks to 'Ramza' Michael Sweeney and Lakaroth for helping so much with testing.
 * Special Thanks to Jairaks89 for https://github.com/jairajs89/Touchy.js/blob/master/touchy.js
 *  on which the multi-touch structure was loosely based.
 * 
 * ============================================================================
 * Terms of Use
 * ============================================================================
 *  - Free for use in non-commercial projects with credits
 *  - Contact me for commercial use
 * 
 * ============================================================================
 * Parameters
 * ============================================================================
 * @param Debug Mode
 * @desc Enable to activate console variable logging.  Use for debugging odd behaviour.
 * true to enable console variable logging.
 * @default false
 * 
 * @param -----Input History Tracking-----
 * @param Button History Max. Size
 * @desc How many buttons to track at once.  Keep small.  Use value of 1 for single touch, 2+ for multi-touch.
 * @default 2
 * 
 * @param -----Gesture Handling-----
 * @param Gesture Distance Threshold
 * @desc Minimum distance touch travels (in pixels) to be considered a swipe gesture.
 * @default 150
 * 
 * @param Gesture Distance Restraint
 * @desc Maximum distance touch can travel (in pixels) in perpendicular direction to swipe to be considered a swipe.
 * @default 100
 * 
 * @param Gesture Maximum Time
 * @desc Maximum time before a touch times out, and ceases to be considered a gesture (in milliseconds).
 * @default 300
  * 
 * @help
 * ============================================================================
 * Description
 * ============================================================================
 *
 * Provides full multi-touch and gesture support to RPGMaker MV, adds input history
 * tracking of MRU input (from keyboard, gamepad, mouse, touch), to allow for custom
 * input handling.
 *
 * ============================================================================
 * Script Commands
 * ============================================================================
 * Script Commands:
 * 
 *	 TouchInput.wasGestured('swipe left');			# Returns true if swipe left was gestured most recently.
 * 
 * ============================================================================
 * Change Log
 * ============================================================================
 * 1.02 - fixed issue where multi-touch being enabled on its own would fail to accept map touch input.
 * 1.01 - multi-touch fixed to still work with mouse.  Click and touch event handling separated.
 * 1.00 - multi-touch seperated into own script to facilitate further growth.
 */
//=============================================================================

//=============================================================================
var Imported = Imported || {} ;
var BBS = BBS || {};
Imported.MultiTouch = 1;
BBS.MultiTouch = BBS.MultiTouch || {};

(function() {
	
   	//=============================================================================
	// Parameter Variables
	//=============================================================================
	var parameters = PluginManager.parameters('BBS_MultiTouch');
	var pDebugging		  = eval(String(parameters['Debug Mode'] || 'false'));	
	var pBtnHistoryMaxSize= Number(parameters['Button History Max. Size'] || '2');
	var pThreshold		  = Number(parameters['Gesture Distance Threshold'] || '150');
	var pRestraint		  = Number(parameters['Gesture Distance Restraint'] || '100');
	var pAllowedTime	  = Number(parameters['Gesture Maximum Time'] || '300');

	//=============================================================================
	// Input/Button History
	//=============================================================================
	function InputHistory() {
		this.initialize.apply(this, arguments);
	};
	
	InputHistory.prototype = Object.create(InputHistory.prototype);
	InputHistory.prototype.constructor = InputHistory;
	
	InputHistory.prototype.initialize = function() {
		this._btnHistory = Array();
		this._swipeHistory = null;
	};
	
	InputHistory.prototype.wasPressed = function(btn) {		
		if (this._btnHistory.length < 1) return false;
		
		var pressed = false;
		for (var i = 0; i < this._btnHistory.length; i++) {
			if (this._btnHistory[i] === btn) {
				pressed = true;
				break;
			}
		}
		
		return pressed;
	};
	
	InputHistory.prototype.wasGestured = function(gesture) {
		return (this._swipeHistory === gesture);
	};
	
	InputHistory.prototype.addBtn = function(btn) {		
		// If btn already stored, don't need to store it again.
		if (!this.wasPressed(btn)) {
			// Shift if history size exceeded.
			if (this._btnHistory.length >= pBtnHistoryMaxSize) {
				this._btnHistory.shift();
			}
			
			this._btnHistory.push(btn);
			
			if (pDebugging) {				
				$gameScreen.showPicture(1, this._btnHistory[0], 0, 0, 0, 100, 100, 255, 0);
				
				if (this._btnHistory.length > 1) {
				    $gameScreen.showPicture(2, this._btnHistory[1], 0, 40, 0, 100, 100, 255, 0);
				}
			}
			
		}
	};
	
	InputHistory.prototype.addGesture = function(gesture) {
		this._swipeHistory = gesture;
	};
	
	InputHistory.prototype.removeBtn = function(btn) {
		var index = this._btnHistory.indexOf(btn);
		if (index >= 0) {
			this._btnHistory.splice(index, 1);
		}
	};
	
	InputHistory.prototype.removeGesture = function(gesture) {
		this._swipeHistory = null;
	};
	
	InputHistory.prototype._clear = function() {
		if (pDebugging) {				
			$gameScreen.erasePicture(1);
				
			if (this._btnHistory.length > 1) {
			   $gameScreen.erasePicture(2);
			}
		}
		
		this._btnHistory = [];
		this._swipeHistory = null;
	};

	//=============================================================================
	// Finger - Object to manage single-finger touch interactions
	//=============================================================================	
	function Finger(id) {
		this.id = id;
		this._x = null;
		this._y = null;
		this._startX = null;
		this._startY = null;
		this._date = 0;
		
		// Release not stored, because released fingers are deleted.
	};
	
	//=============================================================================
	// Touch Input New Functions: https://github.com/jairajs89/Touchy.js/blob/master/touchy.js
	//=============================================================================		
	
	/* Create a new hand based on the current touches on the screen */
	TouchInput.fingersRestart = function(touches) {
		if (touches.length <= 0) {
			return;
		}

		this.fingers = [];
		for (var i = 0; i < event.touches.length; i++) 
		{
			var touch = event.touches[i];
			var x = Graphics.pageToCanvasX(touch.pageX);
			var y = Graphics.pageToCanvasY(touch.pageY);
						
			if (Graphics.isInsideCanvas(x, y)) {
				var finger = new Finger(touch.identifier);	
				this.fingers.push(finger);
				this._screenPressed = true;
				
				finger._x = x;
				finger._startX = x;
				finger._y = y;
				finger._startY = y;
				finger._date = Date.now();
				finger._pressedTime = 0;
				
				if (pDebugging) {
					console.log("Touch trigger activated");
					console.log(this.fingers);
				}
				
				this._onTrigger(x, y);
			}
		}
	};

	TouchInput.fingersUpdate = function() {
		if (!this.fingers) {
			return;
		}

		for (var i = 0; i < this.fingers.length; i++) {
			var finger = this.fingers[i];
			finger._pressedTime++;
		}
	};
	
	/* Check a finger just prior to release to detect whether it was a swipe. */
	TouchInput.checkForSwipe = function(finger) {
		if (!finger) {
			return;
		}
		
		var elapsedTime = new Date().getTime() - finger._date;	// get time elapsed
		if (elapsedTime > pAllowedTime) {
			return;
		}
		
		var distX = finger._x - finger._startX; 				// get horizontal dist traveled by finger while in contact with surface
		var distY = finger._y - finger._startY; 				// get vertical dist traveled by finger while in contact with surface
		
		if (pDebugging) {
			console.log(elapsedTime + " vs. " + pAllowedTime);
			console.log("X Dist: " + distX + " Y Dist: " + distY);
			console.log("Threshold: " + pThreshold + " Restraint: " + pRestraint);
		}
		
		if (Math.abs(distX) >= pThreshold && Math.abs(distY) <= pRestraint) { // 2nd condition for horizontal swipe met
			// If dist traveled is negative, it indicates left swipe
			if (distX < 0) {
				this._onSwipedLeft();
			} else {
				this._onSwipedRight();
			}
		}
		else if (Math.abs(distY) >= pThreshold && Math.abs(distX) <= pRestraint) { // 2nd condition for vertical swipe met
			// If dist traveled is negative, it indicates up swipe
			if (distY < 0) {
				this._onSwipedUp();
			} else {
				this._onSwipedDown();
			}
		}
		
		return;
	};
	
	/* Destroy the current hand regardless of fingers on the screen */
	TouchInput.fingersDestroy = function() {
		if (!this.fingers) {
			return;
		}

		for (var i = 0; i < this.fingers.length; i++) {
			var finger = this.fingers[i];
			
			// Gesture handling happens here.
			this.checkForSwipe(finger);
			this._onRelease(finger._x, finger._y);
		}

		this._screenPressed = false;
		this.fingers = null;
	};
	
	/* Get finger by id */
	TouchInput.getFinger = function(id) {
		var foundFinger = null;

		if (!this.fingers) return foundFinger;
		
		// Direct iteration significantly faster than foreach.
		for(var i = 0; i < this.fingers.length; i++) {
			if (this.fingers[i].id === id) {
				foundFinger = this.fingers[i];
				break;
			}
		}

		return foundFinger;
	};	
	
	/* last touch.x and .y will not work with multi-touch.  Need to override. */
	TouchInput.isTouchingArea = function(rect) {
		if (this.fingers === null) return false;
		
		for (var i = 0; i < this.fingers.length; i++) {
			var finger = this.fingers[i];
			if (pDebugging) {
				var strOut = "Finger at: " + finger._x + "; " + finger._y + " vs. touch area: " + rect.x + "; " + rect.y;
				console.log(strOut);
			}
			
			if (rect.contains(finger._x, finger._y)) {
				return true;
			}
		}
		
		return false;
	};
	
	/* last touch.x and .y used only for mouse click.  Required function, mouse input was non-functional.*/
	TouchInput.isClicked = function(rect) {
		if ( !this.isPressed() ) return false;
		
		if (pDebugging) {
			var strOut = "Click at: " + this._x + "; " + this._y + " vs. click area: " + rect.x + "; " + rect.y;
			console.log(strOut);
		}
		
		if (rect.contains(this._x, this._y)) {
			return true;
		}
		
		return false;
	};
	
	/* Input check for directional swipe */
	TouchInput.swipedLeft = function() {
		var swipedLeft = this._history.wasGestured('swipe left');
		return swipedLeft;
	};
	
	/* Input check for directional swipe */
	TouchInput.swipedRight = function() {
		var swipedRight = this._history.wasGestured('swipe right');
		return swipedRight;
	};
	
	/* Input check for directional swipe */
	TouchInput.swipedUp = function() {
		var swipedUp = this._history.wasGestured('swipe up');
		return swipedUp;
	};
	
	/* Input check for directional swipe */
	TouchInput.swipedDown = function() {
		var swipedDown = this._history.wasGestured('swipe down');
		return swipedDown;
	};
	
	/**
	 * @static
	 * @method _onSwipeLeft
	 * @private
	 */
	TouchInput._onSwipedLeft = function() {
		this._history.addGesture('swipe left');
		this._events.swipedLeft = true;
		if (pDebugging) {
			console.log("Left swipe detected!");
		}
	};
	
	/**
	 * @static
	 * @method _onSwipeRight
	 * @private
	 */
	TouchInput._onSwipedRight = function() {
		this._history.addGesture('swipe right');
		this._events.swipedRight = true;
		if (pDebugging) {
			console.log("Right swipe detected!");
		}
	};
	
	/**
	 * @static
	 * @method _onSwipeUp
	 * @private
	 */
	TouchInput._onSwipedUp = function() {
		this._history.addGesture('swipe up');
		this._events.swipedUp = true;
		if (pDebugging) {
			console.log("Up swipe detected!");
		}
	};
	
	/**
	 * @static
	 * @method _onSwipeDown
	 * @private
	 */
	TouchInput._onSwipedDown = function() {
		this._history.addGesture('swipe down');
		this._events.swipedDown = true;
		if (pDebugging) {
			console.log("Down swipe detected!");
		}
	};
	
	TouchInput.prototype.isGestured = function(gest) {
		var gestSafe = gest.toLowerCase();
		var pressed = this._history.wasGestured(gestSafe);
		if (pressed) {
			if (pDebugging) console.log(gestSafe);
			this._history.removeGesture(gestSafe);
		}
		
		return pressed;
	};
	
	/* Adds button to input history if not already in input history. */
	TouchInput.addLastButton = function(btn) {
		this._history.addBtn(btn);
	};
	
	/* Clears input history. */
	TouchInput._clearHistory = function() {
		this._history._clear();
	};
	
	//=============================================================================
	// Touch Input Core Overrides
	//=============================================================================	

	/**
	 * Initializes the touch system.
	 *
	 * @static
	 * @method initialize
	 */
	var BBS_MC_TouchInputInitialize = TouchInput.initialize;
    TouchInput.initialize = function() {
		BBS_MC_TouchInputInitialize.call(this, arguments);
		this._history = new InputHistory();
		this.fingers = null;
	};
	
	/**
	 * @static
	 * @method _onTouchStart
	 * @param {TouchEvent} event
	 * @private
	 */
	// Replaces core functionality.  Do not modify!
	TouchInput._onTouchStart = function(event) {
		this.fingersDestroy();
		this.fingersRestart(event.touches);
		if (window.cordova || window.navigator.standalone) {
			event.preventDefault();
		}
	};

	/**
	 * @static
	 * @method _onTouchMove
	 * @param {TouchEvent} event
	 * @private
	 */
	// Replaces core functionality.  Do not modify!
	TouchInput._onTouchMove = function(event) {
		// Each changed touch for this event represents a moved touch.
		// Direct iteration significantly faster than foreach.
		for (var i = 0; i < event.changedTouches.length; i++) {
			var touch = event.changedTouches[i];
			var finger = this.getFinger(touch.identifier);
			if( !finger ) {
				return;
			}
			
			var x = Graphics.pageToCanvasX(touch.pageX);
			var y = Graphics.pageToCanvasY(touch.pageY);
			finger._x = x;
			finger._y = y;
			
			this._onMove(x, y);
		}
	};
	
	/**
	 * @static
	 * @method _onTouchEnd
	 * @param {TouchEvent} event
	 * @private
	 */
	// Replaces core functionality.  Do not modify!
	TouchInput._onTouchEnd = function(event) {
		this.fingersDestroy();

		var remainingTouches = [];
		// Direct iteration significantly faster than foreach.
		for (var i = 0; i < event.touches.length; i++) {
			var unChanged = true;
			
			// Each changed touch for this event represents a released touch.
			for (var j = 0; j < event.changedTouches.length; j++) {
				if (event.changedTouches[j].identifier === event.touches[i].identifier) {
					unChanged = false;
					break;
				}
			}
			
			if (unChanged) {
				remainingTouches.push(event.touches[i]);
			}
		}
		
		this.fingersRestart(remainingTouches);
		event.preventDefault();
	};

	/**
	 * Clears all the touch data.
	 *
	 * @static
	 * @method clear
	 */
	var BBS_MC_TouchInputclear = TouchInput.clear;
	TouchInput.clear = function() {
		BBS_MC_TouchInputclear.call(this);
		this._events.swipedLeft = false;
		this._events.swipedRight = false;
		this._events.swipedUp = false;
		this._events.swipedDown = false;
		this._swipedLeft = false;
		this._swipedRight = false;
		this._swipedUp = false;
		this._swipedDown = false;
		this.fingersDestroy();
	};
	
	/**
	 * Updates the touch data.
	 *
	 * @static
	 * @method update
	 */
	var BBS_MC_TouchInputupdate = TouchInput.update;
	TouchInput.update = function() {
		BBS_MC_TouchInputupdate.call(this);
		this._swipedLeft = this._events.swipedLeft;
		this._swipedRight = this._events.swipedRight;
		this._swipedUp = this._events.swipedUp;
		this._swipedDown = this._events.swipedDown;
		this._events.swipedLeft = false;
		this._events.swipedRight = false;
		this._events.swipedUp = false;
		this._events.swipedDown = false;
	};
	
})(BBS.MultiTouch);
//=============================================================================
// End of File
//=============================================================================	