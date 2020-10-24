/*:
* @plugindesc Execute The Event After Successful Load
* @author mrcopra
* 
* @param Common Event
* @desc the ID of Common Event
* @default 1
* 
* @help 
*/
 (function() {

	 
	 var parameters = PluginManager.parameters('Event After Load');
	 var ce = Number(parameters['Common Event'] || 1);
 

Scene_Load.prototype.onLoadSuccess = function() {
    SoundManager.playLoad();
    this.fadeOutAll();
    this.reloadMapIfUpdated();
    SceneManager.goto(Scene_Map);
    this._loadSuccess = true;
	$gameTemp.reserveCommonEvent(ce);
	
	
};
})();