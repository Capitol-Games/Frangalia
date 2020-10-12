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
})()