//=============================================================================
// Fullscreen.js
//=============================================================================
 
/*:
 * @plugindesc Starts the game in fullscreen
 * @author Christian Schicho
 *
 * @help
 */
 
;(function() {
  function extend(obj, name, func) {
    var orig = obj.prototype[name]
    obj.prototype[name] = function() {
      orig.call(this)
      func.call(this)
    }
  }
 
  extend(Scene_Boot, 'start', function() {
		Graphics._switchFullScreen();
  })
  
  
 var _Scene_Base_create = Scene_Base.prototype.create;

	Scene_Base.prototype.create = function() {
		_Scene_Base_create.call(this);
		Graphics.width = 1152;
		Graphics.height = 648;	
		Graphics.boxHeight = 648;
		Graphics.boxWidth = 1152;	
	};
 
})()