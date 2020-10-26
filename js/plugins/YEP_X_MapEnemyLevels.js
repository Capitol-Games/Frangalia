//=============================================================================
// Yanfly Engine Plugins - Enemy Levels Extension - Map Levels
// YEP_X_MapEnemyLevels.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_X_MapEnemyLevels = true;

var Yanfly = Yanfly || {};
Yanfly.MapEL = Yanfly.MapEL || {};
Yanfly.MapEL.version = 1.00;

//=============================================================================
 /*:
 * @plugindesc v1.00 (Req YEP_EnemyLevels) Define enemy levels based on the map
 * the player is currently in.
 * @author Yanfly Engine Plugins
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin requires YEP_EnemyLevels. Make sure this plugin is located under
 * YEP_EnemyLevels in the plugin list.
 *
 * For those using the Enemy Levels plugin, you may have noticed that it only
 * allows you to adjust levels based off the party's levels. Wouldn't it be
 * nice if you can set levels based on maps instead? This plugin allows you to
 * do just that. You can set a base level for all the enemies encountered while
 * on this map or a base level range.
 *
 * *Note: If you are running YEP_X_DifficultySlider, place this plugin above
 * YEP_X_DifficultySlider in the plugin manager list for maximum compatibility.
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * Insert the following notetags into your map's notebox to set the desired
 * enemy level settings.
 * 
 * Map Notetags:
 *
 *   <Enemy Level Base: x>
 *   - Replace 'x' with the static base level to set for the enemies encountered
 *   on the map. Positive and negative level fluctuations from YEP_EnemyLevels
 *   will be applied after.
 *
 *   <Enemy Level Base Variable: x>
 *   - Replace 'x' with the variable whose value will determine the static base
 *   level of the enemies encountered on the map. Positive and negative level
 *   fluctuations from YEP_EnemyLevels will be applied after.
 *
 *   <Enemy Level Range: x to y>
 *   - Replace 'x' with the minimum base level and 'y' with the maximum base
 *   level for the enemies encountered on the map. Positive and negative level
 *   fluctuations from YEP_EnemyLevels will be applied after.
 *
 *   <Enemy Level Range Variables: x to y>
 *   - Replace 'x' with the variable whose value will determine the minimum base
 *   level and 'y' with the variable whose value will determine the maximum base
 *   level for the enemies encountered on the map. Positive and negative level
 *   fluctuations from YEP_EnemyLevels will be applied after.
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.00:
 * - Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 */
//=============================================================================

if (Imported.YEP_EnemyLevels) {

//=============================================================================
// Game_Enemy
//=============================================================================

Yanfly.MapEL.Game_Enemy_setupMinimumLevel = Game_Enemy.prototype.setupMinimumLevel;
Game_Enemy.prototype.setupMinimumLevel = function() {
  if ($dataMap && $dataMap.note) {
    var note = $dataMap.note;
    if (note.match(/<ENEMY LEVEL BASE:[ ](\d+)>/i)) {
        return Number(RegExp.$1);
    } else if (note.match(/<ENEMY LEVEL BASE (?:VAR|VARIABLE):[ ](\d+)>/i)) {
        return $gameVariables.value(Number(RegExp.$1));
    } else if (note.match(/<ENEMY LEVEL RANGE:[ ](\d+)[ ]TO[ ](\d+)>/i)) {
        return Number(RegExp.$1);
        return Math.floor(Math.random() * (max - min + 1) + min);
    } else if (note.match(/<ENEMY LEVEL RANGE (?:VAR|VARIABLE|VARIABLES):[ ](\d+)[ ]TO[ ](\d+)>/i)) {
        return $gameVariables.value(Number(RegExp.$1));
    }
  }
  return Yanfly.MapEL.Game_Enemy_setupMinimumLevel.call(this);
};

Yanfly.MapEL.Game_Enemy_setupMaximumLevel = Game_Enemy.prototype.setupMaximumLevel;
Game_Enemy.prototype.setupMaximumLevel = function() {
  if ($dataMap && $dataMap.note) {
    var note = $dataMap.note;
    if (note.match(/<ENEMY LEVEL BASE:[ ](\d+)>/i)) {
        return Number(RegExp.$1);
    } else if (note.match(/<ENEMY LEVEL BASE (?:VAR|VARIABLE):[ ](\d+)>/i)) {
        return $gameVariables.value(Number(RegExp.$1));
    } else if (note.match(/<ENEMY LEVEL RANGE:[ ](\d+)[ ]TO[ ](\d+)>/i)) {
        return Number(RegExp.$2);
    } else if (note.match(/<ENEMY LEVEL RANGE (?:VAR|VARIABLE|VARIABLES):[ ](\d+)[ ]TO[ ](\d+)>/i)) {
        return $gameVariables.value(Number(RegExp.$2));
    }
  }
  return Yanfly.MapEL.Game_Enemy_setupMaximumLevel.call(this);
};

Yanfly.MapEL.Game_Enemy_getSetupLevel = Game_Enemy.prototype.getSetupLevel;
Game_Enemy.prototype.getSetupLevel = function() {
  if ($dataMap && $dataMap.note) {
    var note = $dataMap.note;
    if (note.match(/<ENEMY LEVEL BASE:[ ](\d+)>/i)) {
        return Number(RegExp.$1);
    } else if (note.match(/<ENEMY LEVEL BASE (?:VAR|VARIABLE):[ ](\d+)>/i)) {
        return $gameVariables.value(Number(RegExp.$1));
    } else if (note.match(/<ENEMY LEVEL RANGE:[ ](\d+)[ ]TO[ ](\d+)>/i)) {
        var min = Number(RegExp.$1);
        var max = Number(RegExp.$2);
        return Math.floor(Math.random() * (max - min + 1) + min);
    } else if (note.match(/<ENEMY LEVEL RANGE (?:VAR|VARIABLE|VARIABLES):[ ](\d+)[ ]TO[ ](\d+)>/i)) {
        var min = $gameVariables.value(Number(RegExp.$1));
        var max = $gameVariables.value(Number(RegExp.$2));
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
  }
  return Yanfly.MapEL.Game_Enemy_getSetupLevel.call(this);
};

//=============================================================================
// End of File
//=============================================================================

} else {

var text = '';
text += 'You are getting this error because you are trying to run ';
text += 'YEP_EnemyLevels without the required plugins. Please visit ';
text += 'Yanfly.moe and install the required plugins neede for this plugin ';
text += 'found in this plugin\'s help file before you can use it.';
console.log(text);
require('nw.gui').Window.get().showDevTools();

}; // Imported.YEP_ShopMenuCore