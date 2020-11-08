// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"Community_Basic","status":false,"description":"Plugin used to set basic parameters.","parameters":{"cacheLimit":"20","screenWidth":"609","screenHeight":"281","changeWindowWidthTo":"","changeWindowHeightTo":"","renderingMode":"auto","alwaysDash":"off"}},
{"name":"Fullscreen","status":true,"description":"Starts the game in fullscreen","parameters":{}},
{"name":"BBS_VersionDisplay","status":true,"description":"v1.02 Adds display of the game version to the title screen.\nSpecial Thanks to Tsukihime for all the help.\nSpecial Thanks to 'Ramza' Michael Sweeney for all the support.\n\n============================================================================\nParameters\n============================================================================","parameters":{"Game Version Number":"0.4.8","Game Version Font":"","Version Font Size":"20","Show Version Number?":"true","Version Text Color":"white","Version Outline Color":"black","Version Outline Width":"8","Title Italic":"false","Version Text Max Width":"Graphics.width / 3"}},
{"name":"Galv_ScreenButtons","status":true,"description":"(v.1.3) Show buttons on screen that can be touched or clicked.","parameters":{"Precache Buttons":"BtnUp,BtnDown,BtnRight,BtnLeft,BtnOk,BtnCancel","Disable Mouse Move":"true","Button Fade":"30"}},
{"name":"EventAfterLoad","status":true,"description":"Execute The Event After Successful Load","parameters":{"Common Event":"1"}},
{"name":"SixLoves_Responsive","status":true,"description":"Makes your game responsive. v0.1.0","parameters":{"ArtScale":"2.0","MinWidth":"544","MinHeight":"416","MaxWidth":"2436","MaxHeight":"660"}},
{"name":"YEP_CoreEngine","status":true,"description":"v1.32 Needed for the majority of Yanfly Engine Scripts. Also\r\ncontains bug fixes found inherently in RPG Maker.","parameters":{"---Screen---":"","Screen Width":"816","Screen Height":"624","Scale Battlebacks":"true","Scale Title":"true","Scale Game Over":"true","Open Console":"false","Reposition Battlers":"true","GameFont Load Timer":"0","Update Real Scale":"false","Collection Clear":"true","---Gold---":"","Gold Max":"99999999","Gold Font Size":"20","Gold Icon":"313","Gold Overlap":"A lotta","---Items---":"","Default Max":"99","Quantity Text Size":"20","---Parameters---":"","Max Level":"99","Actor MaxHP":"9999","Actor MaxMP":"9999","Actor Parameter":"999","Enemy MaxHP":"999999","Enemy MaxMP":"9999","Enemy Parameter":"999","---Battle---":"","Animation Rate":"4","Flash Target":"false","Show Events Transition":"true","Show Events Snapshot":"true","---Map Optimization---":"","Refresh Update HP":"true","Refresh Update MP":"true","Refresh Update TP":"false","---Font---":"","Chinese Font":"SimHei, Heiti TC, sans-serif","Korean Font":"Dotum, AppleGothic, sans-serif","Default Font":"GameFont, Verdana, Arial, Courier New","Font Size":"28","Text Align":"left","---Windows---":"","Digit Grouping":"true","Line Height":"36","Icon Width":"32","Icon Height":"32","Face Width":"144","Face Height":"144","Window Padding":"18","Text Padding":"6","Window Opacity":"192","Gauge Outline":"true","Gauge Height":"18","Menu TP Bar":"true","---Window Colors---":"","Color: Normal":"0","Color: System":"16","Color: Crisis":"17","Color: Death":"18","Color: Gauge Back":"19","Color: HP Gauge 1":"20","Color: HP Gauge 2":"21","Color: MP Gauge 1":"22","Color: MP Gauge 2":"23","Color: MP Cost":"23","Color: Power Up":"24","Color: Power Down":"25","Color: TP Gauge 1":"28","Color: TP Gauge 2":"29","Color: TP Cost Color":"29"}},
{"name":"YEP_MessageCore","status":true,"description":"v1.19 Adds more features to the Message Window to customized\nthe way your messages appear and functions.","parameters":{"---General---":"","Default Rows":"4","Default Width":"Graphics.boxWidth","Face Indent":"Window_Base._faceWidth + 24","Fast Forward Key":"pagedown","Enable Fast Forward":"true","Word Wrapping":"false","Description Wrap":"false","Word Wrap Space":"false","Tight Wrap":"false","---Font---":"","Font Name":"GameFont","Font Name CH":"SimHei, Heiti TC, sans-serif","Font Name KR":"Dotum, AppleGothic, sans-serif","Font Size":"28","Font Size Change":"12","Font Changed Max":"96","Font Changed Min":"12","Font Outline":"4","Maintain Font":"false","---Name Box---":"","Name Box Buffer X":"-28","Name Box Buffer Y":"0","Name Box Padding":"this.standardPadding() * 4","Name Box Color":"0","Name Box Clear":"false","Name Box Added Text":"\\c[6]","Name Box Auto Close":"false"}},
{"name":"YEP_QuestJournal","status":true,"description":"v1.02 Insert a quest journal system into your game!","parameters":{"---Main Menu---":"","Quest Command":"Quest","Show Command":"true","Enable Command":"true","Auto Place Command":"true","---Quest Menu---":"","Quest Category Window":"{\"---Categories---\":\"\",\"Category Order\":\"[\\\"available\\\",\\\"completed\\\",\\\"failed\\\",\\\"all\\\"]\",\"Available Text\":\"\\\\i[192]Available (%1)\",\"Completed Text\":\"\\\\i[191]Completed (%1)\",\"Failed Text\":\"\\\\i[194]Failed (%1)\",\"All Text\":\"\\\\i[189]All Quests (%1)\",\"Cancel Text\":\"\\\\i[161]Close\",\"---Window Settings---\":\"\",\"X\":\"0\",\"Y\":\"0\",\"Width\":\"Graphics.boxWidth / 3\",\"Height\":\"this.fittingHeight(this.numVisibleRows())\",\"Rows\":\"4\",\"Columns\":\"1\",\"Line Height\":\"36\",\"Font Face\":\"GameFont\",\"Font Size\":\"28\",\"Standard Padding\":\"18\",\"Text Padding\":\"6\",\"Text Alignment\":\"left\",\"Standard Opacity\":\"255\",\"Back Opacity\":\"192\",\"Window Skin\":\"Window\"}","Quest List Window":"{\"---Types---\":\"\",\"Show Types\":\"true\",\"Type Order\":\"[\\\"\\\\\\\\c[6]Main Quests\\\",\\\"\\\\\\\\c[4]Side Quests\\\",\\\"\\\\\\\\c[3]Character Quests\\\",\\\"\\\\\\\\c[5]Tutorial Quests\\\"]\",\"List Open Symbol\":\"-\",\"List Closed Symbol\":\"+\",\"Type Text Format\":\"%1%2 (%3)\",\"Quest Indent\":\"0\",\"Show Empty\":\"false\",\"Read Quest\":\"\\\\i[121]Read Quest\",\"Cancel\":\"\\\\i[16]Cancel\",\"---Window Settings---\":\"\",\"X\":\"0\",\"Y\":\"Graphics.boxHeight - height\",\"Width\":\"Graphics.boxWidth / 3\",\"Height\":\"Graphics.boxHeight - this.fittingHeight(4)\",\"Line Height\":\"36\",\"Font Face\":\"GameFont\",\"Font Size\":\"28\",\"Standard Padding\":\"18\",\"Text Padding\":\"6\",\"Standard Opacity\":\"255\",\"Back Opacity\":\"192\",\"Type Alignment\":\"left\",\"Quest Alignment\":\"left\",\"Window Skin\":\"Window\"}","Quest Title Window":"{\"---Window Settings---\":\"\",\"No Quest Title\":\"\\\\c[4]Quest Journal\",\"X\":\"Graphics.boxWidth - width\",\"Y\":\"0\",\"Width\":\"Graphics.boxWidth * 2 / 3\",\"Height\":\"this.fittingHeight(1)\",\"Line Height\":\"36\",\"Font Face\":\"GameFont\",\"Font Size\":\"28\",\"Standard Padding\":\"18\",\"Text Padding\":\"6\",\"Text Alignment\":\"center\",\"Standard Opacity\":\"255\",\"Back Opacity\":\"192\",\"Window Skin\":\"Window\"}","Quest Data Window":"{\"---Data Settings---\":\"\",\"No Data Text\":\"\\\"Welcome to the \\\\\\\\c[4]Quest Journal\\\\\\\\c[0].\\\\n\\\\nHere, you can review over the various\\\\nquests given to you by people from all\\\\nover the world.\\\"\",\"Quest Data Format\":\"\\\"<WordWrap>\\\\\\\\{%1\\\\\\\\}\\\\n<br>\\\\\\\\c[4]Level:\\\\\\\\c[0] %2\\\\n<br>\\\\\\\\c[4]From:\\\\\\\\c[0] %3\\\\n<br>\\\\\\\\c[4]Location:\\\\\\\\c[0] %4\\\\n<br>\\\\n<br>\\\\\\\\c[4]Description:\\\\\\\\c[0]\\\\n<br>%5\\\\n<br>\\\\n<br>\\\\\\\\c[4]Objectives:\\\\\\\\c[0]\\\\n<br>%6\\\\n<br>\\\\n<br>\\\\\\\\c[4]Rewards:\\\\\\\\c[0]\\\\n<br>%7\\\\n<br>\\\\n<br>%8\\\"\",\"Uncleared Objective\":\"\\\\i[160]%1\",\"Completed Objective\":\"\\\\i[165]%1\",\"Failed Objective\":\"\\\\i[162]%1\",\"Unclaimed Reward\":\"\\\\i[160]%1\",\"Claimed Reward\":\"\\\\i[163]%1\",\"Denied Reward\":\"\\\\i[161]%1\",\"Load Delay\":\"30\",\"---Window Settings---\":\"\",\"X\":\"Graphics.boxWidth - width\",\"Y\":\"Graphics.boxHeight - height\",\"Width\":\"Graphics.boxWidth * 2 / 3\",\"Height\":\"Graphics.boxHeight - this.fittingHeight(1)\",\"Line Height\":\"36\",\"Font Face\":\"GameFont\",\"Font Size\":\"28\",\"Standard Padding\":\"18\",\"Text Padding\":\"6\",\"Standard Opacity\":\"255\",\"Back Opacity\":\"192\",\"Window Skin\":\"Window\",\"Scroll Speed\":\"4\"}","Lunatic Mode":"{\"---Quest Menu---\":\"\",\"Before Create Windows\":\"\\\"// Variables\\\\n//   background - background image used for the menu\\\\n//   windowLayer - sprite layer that contains all windows\\\\n//\\\\n// background.bitmap = ImageManager.loadTitle1(\\\\\\\"Book\\\\\\\");\\\\n// this.fitScreen(background);\\\"\",\"After Create Windows\":\"\\\"// Variables\\\\n//   background - background image used for the menu\\\\n//   windowLayer - sprite layer that contains all windows\\\"\",\"Close Quest Menu\":\"\\\"// Variables\\\\n//   background - background image used for the menu\\\\n//   windowLayer - sprite layer that contains all windows\\\"\",\"---Quest Status---\":\"\",\"Quest Add\":\"\\\"// Variables:\\\\n//   questId - ID of the quest being added\\\\n//\\\\n// console.log('Quest ' + questId + ' successfully added!')\\\"\",\"Quest Remove\":\"\\\"// Variables:\\\\n//   questId - ID of the quest being removed\\\\n//\\\\n// console.log('Quest ' + questId + ' successfully removed!')\\\"\",\"Quest Complete\":\"\\\"// Variables:\\\\n//   questId - ID of the quest set to completed\\\\n//\\\\n// console.log('Quest ' + questId + ' status changed to Completed!')\\\"\",\"Quest Fail\":\"\\\"// Variables:\\\\n//   questId - ID of the quest set to failed\\\\n//\\\\n// console.log('Quest ' + questId + ' status changed to Failed!')\\\"\",\"Quest Available\":\"\\\"// Variables:\\\\n//   questId - ID of the quest set to available\\\\n//\\\\n// console.log('Quest ' + questId + ' status changed to Available!')\\\"\",\"---Description---\":\"\",\"Change Description\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose description is changed\\\\n//   index - Description index being changed to\\\\n//\\\\n// console.log('Quest ' + questId + ' description index changed to ' + index)\\\"\",\"---Objectives---\":\"\",\"Show Objective\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose objectives are altered\\\\n//   objectiveId - ID of the objective being shown\\\\n//\\\\n// console.log('Quest ' + questId + ' objective ' + objectiveId + ' changed to shown!')\\\"\",\"Hide Objective\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose objectives are altered\\\\n//   objectiveId - ID of the objective being hidden\\\\n//\\\\n// console.log('Quest ' + questId + ' objective ' + objectiveId + ' changed to hidden!')\\\"\",\"Complete Objective\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose objectives are altered\\\\n//   objectiveId - ID of the objective being completed\\\\n//\\\\n// console.log('Quest ' + questId + ' objective ' + objectiveId + ' changed to completed!')\\\"\",\"Fail Objective\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose objectives are altered\\\\n//   objectiveId - ID of the objective having failed\\\\n//\\\\n// console.log('Quest ' + questId + ' objective ' + objectiveId + ' changed to failed!')\\\"\",\"Normalize Objective\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose objectives are altered\\\\n//   objectiveId - ID of the objective normalized\\\\n//\\\\n// console.log('Quest ' + questId + ' objective ' + objectiveId + ' changed to normal!')\\\"\",\"---Rewards---\":\"\",\"Show Reward\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose rewards are altered\\\\n//   rewardId - ID of the reward being shown\\\\n//\\\\n// console.log('Quest ' + questId + ' reward ' + rewardId + ' becomes shown!')\\\"\",\"Hide Reward\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose rewards are altered\\\\n//   rewardId - ID of the reward being hidden\\\\n//\\\\n// console.log('Quest ' + questId + ' reward ' + rewardId + ' becomes hidden!')\\\"\",\"Claim Reward\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose rewards are altered\\\\n//   rewardId - ID of the reward becoming claimed\\\\n//\\\\n// console.log('Quest ' + questId + ' reward ' + rewardId + ' is now claimed!')\\\"\",\"Deny Reward\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose rewards are altered\\\\n//   rewardId - ID of the reward becoming denied\\\\n//\\\\n// console.log('Quest ' + questId + ' reward ' + rewardId + ' is now denied!')\\\"\",\"Normalize Reward\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose rewards are altered\\\\n//   rewardId - ID of the reward normalized\\\\n//\\\\n// console.log('Quest ' + questId + ' reward ' + rewardId + ' is normalized!')\\\"\",\"---Subtext---\":\"\",\"Change Subtext\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose subtext is changed\\\\n//   index - Subtext index being changed to\\\\n//\\\\n// console.log('Quest ' + questId + ' subtext index changed to ' + index)\\\"\"}","---Quest List---":"","Quest 1":"{\"Title\":\"\\\\i[87]Talk to Mother\",\"Type\":\"Main Quests\",\"Difficulty\":\"Easy\",\"From\":\"Thomas\",\"Location\":\"Home\",\"Description\":\"[\\\"\\\\\\\"My little brother Thomas said that Mother wanted to speak\\\\\\\\nwith me.\\\\\\\"\\\",\\\"\\\\\\\"I'd best go find her and see what she wants.\\\\\\\"\\\"]\",\"Objectives List\":\"[\\\"\\\\\\\"Talk to Mother.\\\\\\\"\\\"]\",\"Visible Objectives\":\"[\\\"1\\\"]\",\"Rewards List\":\"[\\\"\\\\\\\"\\\\\\\\\\\\\\\\i[176]Magic Water\\\\\\\"\\\"]\",\"Visible Rewards\":\"[\\\"1\\\"]\",\"Subtext\":\"[\\\"\\\\\\\"\\\\\\\"\\\"]\"}","Quest 2":"","Quest 3":"","Quest 4":"","Quest 5":"","Quest 6":"","Quest 7":"","Quest 8":"","Quest 9":"","Quest 10":"","Quest 11":"","Quest 12":"","Quest 13":"","Quest 14":"","Quest 15":"","Quest 16":"","Quest 17":"","Quest 18":"","Quest 19":"","Quest 20":"","Quest 21":"","Quest 22":"","Quest 23":"","Quest 24":"","Quest 25":"","Quest 26":"","Quest 27":"","Quest 28":"","Quest 29":"","Quest 30":"","Quest 31":"","Quest 32":"","Quest 33":"","Quest 34":"","Quest 35":"","Quest 36":"","Quest 37":"","Quest 38":"","Quest 39":"","Quest 40":"","Quest 41":"","Quest 42":"","Quest 43":"","Quest 44":"","Quest 45":"","Quest 46":"","Quest 47":"","Quest 48":"","Quest 49":"","Quest 50":"","Quest 51":"","Quest 52":"","Quest 53":"","Quest 54":"","Quest 55":"","Quest 56":"","Quest 57":"","Quest 58":"","Quest 59":"","Quest 60":"","Quest 61":"","Quest 62":"","Quest 63":"","Quest 64":"","Quest 65":"","Quest 66":"","Quest 67":"","Quest 68":"","Quest 69":"","Quest 70":"","Quest 71":"","Quest 72":"","Quest 73":"","Quest 74":"","Quest 75":"","Quest 76":"","Quest 77":"","Quest 78":"","Quest 79":"","Quest 80":"","Quest 81":"","Quest 82":"","Quest 83":"","Quest 84":"","Quest 85":"","Quest 86":"","Quest 87":"","Quest 88":"","Quest 89":"","Quest 90":"","Quest 91":"","Quest 92":"","Quest 93":"","Quest 94":"","Quest 95":"","Quest 96":"","Quest 97":"","Quest 98":"","Quest 99":"","Quest 100":""}},
{"name":"YEP_ButtonCommonEvents","status":false,"description":"v1.02 On the field map, call common events when certain\nbuttons are pressed on the keyboard.","parameters":{"---Top Row---":"","Key ~":"0","Key 1":"0","Key 2":"0","Key 3":"0","Key 4":"0","Key 5":"0","Key 6":"0","Key 7":"0","Key 8":"0","Key 9":"0","Key 0":"0","Key -":"0","Key =":"0","---2nd Row---":"","Key Q (PageUp)":"0","Key W (PageDown)":"0","Key E":"0","Key R":"0","Key T":"0","Key Y":"0","Key U":"0","Key I":"0","Key O":"0","Key P":"0","Key [":"0","Key ]":"0","Key \\":"0","---3rd Row---":"","Key A":"0","Key S":"0","Key D":"0","Key F":"0","Key G":"0","Key H":"0","Key J":"0","Key K":"0","Key L":"0","Key ;":"0","Key \"":"0","Key Enter (OK)":"0","---4th Row---":"","Key Shift (Dash)":"0","Key Z (OK)":"0","Key X (Cancel)":"0","Key C":"0","Key V":"0","Key B":"0","Key N":"0","Key M":"0","Key ,":"0","Key .":"0","Key /":"0","---Misc---":"","Key Space (OK)":"0","Key Left (Left)":"0","Key Up (Up)":"0","Key Right (Right)":"0","Key Down (Down)":"0","Key Insert (Cancel)":"0","Key Delete":"0","Key Home":"0","Key End":"0","Key Page Up (PageUp)":"0","Key Page Down (PageDown)":"0","---NumPad---":"","Key NumPad 0 (Cancel)":"0","Key NumPad 1":"0","Key NumPad 2 (Down)":"0","Key NumPad 3":"0","Key NumPad 4 (Left)":"0","Key NumPad 5":"0","Key NumPad 6 (Right)":"0","Key NumPad 7":"0","Key NumPad 8 (Up)":"0","Key NumPad 9":"0","Key NumPad .":"0","Key NumPad +":"0","Key NumPad -":"0","Key NumPad *":"0","Key NumPad /":"0"}},
{"name":"YEP_PictureCommonEvents","status":false,"description":"v1.06 Causes common events to run when certain pictures\nare clicked while on the map.","parameters":{"---General---":"","Enable Touch Move":"true","Hide Message":"true","---Picture 1---":"","Picture 1 Click":"0","Picture 1 Repeat":"0","Picture 1 Hold":"0","Picture 1 Release":"0","---Picture 2---":"","Picture 2 Click":"0","Picture 2 Repeat":"0","Picture 2 Hold":"0","Picture 2 Release":"0","---Picture 3---":"","Picture 3 Click":"0","Picture 3 Repeat":"0","Picture 3 Hold":"0","Picture 3 Release":"0","---Picture 4---":"","Picture 4 Click":"0","Picture 4 Repeat":"0","Picture 4 Hold":"0","Picture 4 Release":"0","---Picture 5---":"","Picture 5 Click":"0","Picture 5 Repeat":"0","Picture 5 Hold":"0","Picture 5 Release":"0","---Picture 6---":"","Picture 6 Click":"0","Picture 6 Repeat":"0","Picture 6 Hold":"0","Picture 6 Release":"0","---Picture 7---":"","Picture 7 Click":"0","Picture 7 Repeat":"0","Picture 7 Hold":"0","Picture 7 Release":"0","---Picture 8---":"","Picture 8 Click":"0","Picture 8 Repeat":"0","Picture 8 Hold":"0","Picture 8 Release":"0","---Picture 9---":"","Picture 9 Click":"0","Picture 9 Repeat":"0","Picture 9 Hold":"0","Picture 9 Release":"0","---Picture 10---":"","Picture 10 Click":"0","Picture 10 Repeat":"0","Picture 10 Hold":"0","Picture 10 Release":"0","---Picture 11---":"","Picture 11 Click":"0","Picture 11 Repeat":"0","Picture 11 Hold":"0","Picture 11 Release":"0","---Picture 12---":"","Picture 12 Click":"0","Picture 12 Repeat":"0","Picture 12 Hold":"0","Picture 12 Release":"0","---Picture 13---":"","Picture 13 Click":"0","Picture 13 Repeat":"0","Picture 13 Hold":"0","Picture 13 Release":"0","---Picture 14---":"","Picture 14 Click":"0","Picture 14 Repeat":"0","Picture 14 Hold":"0","Picture 14 Release":"0","---Picture 15---":"","Picture 15 Click":"0","Picture 15 Repeat":"0","Picture 15 Hold":"0","Picture 15 Release":"0","---Picture 16---":"","Picture 16 Click":"0","Picture 16 Repeat":"0","Picture 16 Hold":"0","Picture 16 Release":"0","---Picture 17---":"","Picture 17 Click":"0","Picture 17 Repeat":"0","Picture 17 Hold":"0","Picture 17 Release":"0","---Picture 18---":"","Picture 18 Click":"0","Picture 18 Repeat":"0","Picture 18 Hold":"0","Picture 18 Release":"0","---Picture 19---":"","Picture 19 Click":"0","Picture 19 Repeat":"0","Picture 19 Hold":"0","Picture 19 Release":"0","---Picture 20---":"","Picture 20 Click":"0","Picture 20 Repeat":"0","Picture 20 Hold":"0","Picture 20 Release":"0","---Picture 21---":"","Picture 21 Click":"0","Picture 21 Repeat":"0","Picture 21 Hold":"0","Picture 21 Release":"0","---Picture 22---":"","Picture 22 Click":"0","Picture 22 Repeat":"0","Picture 22 Hold":"0","Picture 22 Release":"0","---Picture 23---":"","Picture 23 Click":"0","Picture 23 Repeat":"0","Picture 23 Hold":"0","Picture 23 Release":"0","---Picture 24---":"","Picture 24 Click":"0","Picture 24 Repeat":"0","Picture 24 Hold":"0","Picture 24 Release":"0","---Picture 25---":"","Picture 25 Click":"0","Picture 25 Repeat":"0","Picture 25 Hold":"0","Picture 25 Release":"0","---Picture 26---":"","Picture 26 Click":"0","Picture 26 Repeat":"0","Picture 26 Hold":"0","Picture 26 Release":"0","---Picture 27---":"","Picture 27 Click":"0","Picture 27 Repeat":"0","Picture 27 Hold":"0","Picture 27 Release":"0","---Picture 28---":"","Picture 28 Click":"0","Picture 28 Repeat":"0","Picture 28 Hold":"0","Picture 28 Release":"0","---Picture 29---":"","Picture 29 Click":"0","Picture 29 Repeat":"0","Picture 29 Hold":"0","Picture 29 Release":"0","---Picture 30---":"","Picture 30 Click":"0","Picture 30 Repeat":"0","Picture 30 Hold":"0","Picture 30 Release":"0","---Picture 31---":"","Picture 31 Click":"0","Picture 31 Repeat":"0","Picture 31 Hold":"0","Picture 31 Release":"0","---Picture 32---":"","Picture 32 Click":"0","Picture 32 Repeat":"0","Picture 32 Hold":"0","Picture 32 Release":"0","---Picture 33---":"","Picture 33 Click":"0","Picture 33 Repeat":"0","Picture 33 Hold":"0","Picture 33 Release":"0","---Picture 34---":"","Picture 34 Click":"0","Picture 34 Repeat":"0","Picture 34 Hold":"0","Picture 34 Release":"0","---Picture 35---":"","Picture 35 Click":"0","Picture 35 Repeat":"0","Picture 35 Hold":"0","Picture 35 Release":"0","---Picture 36---":"","Picture 36 Click":"0","Picture 36 Repeat":"0","Picture 36 Hold":"0","Picture 36 Release":"0","---Picture 37---":"","Picture 37 Click":"0","Picture 37 Repeat":"0","Picture 37 Hold":"0","Picture 37 Release":"0","---Picture 38---":"","Picture 38 Click":"0","Picture 38 Repeat":"0","Picture 38 Hold":"0","Picture 38 Release":"0","---Picture 39---":"","Picture 39 Click":"0","Picture 39 Repeat":"0","Picture 39 Hold":"0","Picture 39 Release":"0","---Picture 40---":"","Picture 40 Click":"0","Picture 40 Repeat":"0","Picture 40 Hold":"0","Picture 40 Release":"0","---Picture 41---":"","Picture 41 Click":"0","Picture 41 Repeat":"0","Picture 41 Hold":"0","Picture 41 Release":"0","---Picture 42---":"","Picture 42 Click":"0","Picture 42 Repeat":"0","Picture 42 Hold":"0","Picture 42 Release":"0","---Picture 43---":"","Picture 43 Click":"0","Picture 43 Repeat":"0","Picture 43 Hold":"0","Picture 43 Release":"0","---Picture 44---":"","Picture 44 Click":"0","Picture 44 Repeat":"0","Picture 44 Hold":"0","Picture 44 Release":"0","---Picture 45---":"","Picture 45 Click":"0","Picture 45 Repeat":"0","Picture 45 Hold":"0","Picture 45 Release":"0","---Picture 46---":"","Picture 46 Click":"0","Picture 46 Repeat":"0","Picture 46 Hold":"0","Picture 46 Release":"0","---Picture 47---":"","Picture 47 Click":"0","Picture 47 Repeat":"0","Picture 47 Hold":"0","Picture 47 Release":"0","---Picture 48---":"","Picture 48 Click":"0","Picture 48 Repeat":"0","Picture 48 Hold":"0","Picture 48 Release":"0","---Picture 49---":"","Picture 49 Click":"0","Picture 49 Repeat":"0","Picture 49 Hold":"0","Picture 49 Release":"0","---Picture 50---":"","Picture 50 Click":"0","Picture 50 Repeat":"0","Picture 50 Hold":"0","Picture 50 Release":"0","---Picture 51---":"","Picture 51 Click":"0","Picture 51 Repeat":"0","Picture 51 Hold":"0","Picture 51 Release":"0","---Picture 52---":"","Picture 52 Click":"0","Picture 52 Repeat":"0","Picture 52 Hold":"0","Picture 52 Release":"0","---Picture 53---":"","Picture 53 Click":"0","Picture 53 Repeat":"0","Picture 53 Hold":"0","Picture 53 Release":"0","---Picture 54---":"","Picture 54 Click":"0","Picture 54 Repeat":"0","Picture 54 Hold":"0","Picture 54 Release":"0","---Picture 55---":"","Picture 55 Click":"0","Picture 55 Repeat":"0","Picture 55 Hold":"0","Picture 55 Release":"0","---Picture 56---":"","Picture 56 Click":"0","Picture 56 Repeat":"0","Picture 56 Hold":"0","Picture 56 Release":"0","---Picture 57---":"","Picture 57 Click":"0","Picture 57 Repeat":"0","Picture 57 Hold":"0","Picture 57 Release":"0","---Picture 58---":"","Picture 58 Click":"0","Picture 58 Repeat":"0","Picture 58 Hold":"0","Picture 58 Release":"0","---Picture 59---":"","Picture 59 Click":"0","Picture 59 Repeat":"0","Picture 59 Hold":"0","Picture 59 Release":"0","---Picture 60---":"","Picture 60 Click":"0","Picture 60 Repeat":"0","Picture 60 Hold":"0","Picture 60 Release":"0","---Picture 61---":"","Picture 61 Click":"0","Picture 61 Repeat":"0","Picture 61 Hold":"0","Picture 61 Release":"0","---Picture 62---":"","Picture 62 Click":"0","Picture 62 Repeat":"0","Picture 62 Hold":"0","Picture 62 Release":"0","---Picture 63---":"","Picture 63 Click":"0","Picture 63 Repeat":"0","Picture 63 Hold":"0","Picture 63 Release":"0","---Picture 64---":"","Picture 64 Click":"0","Picture 64 Repeat":"0","Picture 64 Hold":"0","Picture 64 Release":"0","---Picture 65---":"","Picture 65 Click":"0","Picture 65 Repeat":"0","Picture 65 Hold":"0","Picture 65 Release":"0","---Picture 66---":"","Picture 66 Click":"0","Picture 66 Repeat":"0","Picture 66 Hold":"0","Picture 66 Release":"0","---Picture 67---":"","Picture 67 Click":"0","Picture 67 Repeat":"0","Picture 67 Hold":"0","Picture 67 Release":"0","---Picture 68---":"","Picture 68 Click":"0","Picture 68 Repeat":"0","Picture 68 Hold":"0","Picture 68 Release":"0","---Picture 69---":"","Picture 69 Click":"0","Picture 69 Repeat":"0","Picture 69 Hold":"0","Picture 69 Release":"0","---Picture 70---":"","Picture 70 Click":"0","Picture 70 Repeat":"0","Picture 70 Hold":"0","Picture 70 Release":"0","---Picture 71---":"","Picture 71 Click":"0","Picture 71 Repeat":"0","Picture 71 Hold":"0","Picture 71 Release":"0","---Picture 72---":"","Picture 72 Click":"0","Picture 72 Repeat":"0","Picture 72 Hold":"0","Picture 72 Release":"0","---Picture 73---":"","Picture 73 Click":"0","Picture 73 Repeat":"0","Picture 73 Hold":"0","Picture 73 Release":"0","---Picture 74---":"","Picture 74 Click":"0","Picture 74 Repeat":"0","Picture 74 Hold":"0","Picture 74 Release":"0","---Picture 75---":"","Picture 75 Click":"0","Picture 75 Repeat":"0","Picture 75 Hold":"0","Picture 75 Release":"0","---Picture 76---":"","Picture 76 Click":"0","Picture 76 Repeat":"0","Picture 76 Hold":"0","Picture 76 Release":"0","---Picture 77---":"","Picture 77 Click":"0","Picture 77 Repeat":"0","Picture 77 Hold":"0","Picture 77 Release":"0","---Picture 78---":"","Picture 78 Click":"0","Picture 78 Repeat":"0","Picture 78 Hold":"0","Picture 78 Release":"0","---Picture 79---":"","Picture 79 Click":"0","Picture 79 Repeat":"0","Picture 79 Hold":"0","Picture 79 Release":"0","---Picture 80---":"","Picture 80 Click":"0","Picture 80 Repeat":"0","Picture 80 Hold":"0","Picture 80 Release":"0","---Picture 81---":"","Picture 81 Click":"0","Picture 81 Repeat":"0","Picture 81 Hold":"0","Picture 81 Release":"0","---Picture 82---":"","Picture 82 Click":"0","Picture 82 Repeat":"0","Picture 82 Hold":"0","Picture 82 Release":"0","---Picture 83---":"","Picture 83 Click":"0","Picture 83 Repeat":"0","Picture 83 Hold":"0","Picture 83 Release":"0","---Picture 84---":"","Picture 84 Click":"0","Picture 84 Repeat":"0","Picture 84 Hold":"0","Picture 84 Release":"0","---Picture 85---":"","Picture 85 Click":"0","Picture 85 Repeat":"0","Picture 85 Hold":"0","Picture 85 Release":"0","---Picture 86---":"","Picture 86 Click":"0","Picture 86 Repeat":"0","Picture 86 Hold":"0","Picture 86 Release":"0","---Picture 87---":"","Picture 87 Click":"0","Picture 87 Repeat":"0","Picture 87 Hold":"0","Picture 87 Release":"0","---Picture 88---":"","Picture 88 Click":"0","Picture 88 Repeat":"0","Picture 88 Hold":"0","Picture 88 Release":"0","---Picture 89---":"","Picture 89 Click":"0","Picture 89 Repeat":"0","Picture 89 Hold":"0","Picture 89 Release":"0","---Picture 90---":"","Picture 90 Click":"0","Picture 90 Repeat":"0","Picture 90 Hold":"0","Picture 90 Release":"0","---Picture 91---":"","Picture 91 Click":"0","Picture 91 Repeat":"0","Picture 91 Hold":"0","Picture 91 Release":"0","---Picture 92---":"","Picture 92 Click":"0","Picture 92 Repeat":"0","Picture 92 Hold":"0","Picture 92 Release":"0","---Picture 93---":"","Picture 93 Click":"0","Picture 93 Repeat":"0","Picture 93 Hold":"0","Picture 93 Release":"0","---Picture 94---":"","Picture 94 Click":"0","Picture 94 Repeat":"0","Picture 94 Hold":"0","Picture 94 Release":"0","---Picture 95---":"","Picture 95 Click":"0","Picture 95 Repeat":"0","Picture 95 Hold":"0","Picture 95 Release":"0","---Picture 96---":"","Picture 96 Click":"0","Picture 96 Repeat":"0","Picture 96 Hold":"0","Picture 96 Release":"0","---Picture 97---":"","Picture 97 Click":"0","Picture 97 Repeat":"0","Picture 97 Hold":"0","Picture 97 Release":"0","---Picture 98---":"","Picture 98 Click":"0","Picture 98 Repeat":"0","Picture 98 Hold":"0","Picture 98 Release":"0","---Picture 99---":"","Picture 99 Click":"0","Picture 99 Repeat":"0","Picture 99 Hold":"0","Picture 99 Release":"0","---Picture 100---":"","Picture 100 Click":"0","Picture 100 Repeat":"0","Picture 100 Hold":"0","Picture 100 Release":"0"}},
{"name":"YEP_BattleEngineCore","status":true,"description":"v1.51 Have more control over the flow of the battle system\nwith this plugin and alter various aspects to your liking.","parameters":{"---General---":"","Action Speed":"agi","Default System":"dtb","---Escape---":"","Escape Ratio":"0.5 * $gameParty.agility() / $gameTroop.agility()","Fail Escape Boost":"0.10","---Animation---":"","Animation Base Delay":"0","Animation Next Delay":"0","Certain Hit Animation":"0","Physical Animation":"0","Magical Animation":"0","Enemy Attack Animation":"0","Reflect Animation":"0","Motion Waiting":"false","---Frontview---":"","Front Position X":"Graphics.boxWidth / 8 + Graphics.boxWidth / 4 * index","Front Position Y":"Graphics.boxHeight - 180","Front Actor Sprite":"false","Front Sprite Priority":"1","---Sideview---":"","Home Position X":"screenWidth - 16 - (maxSize + 2) * 32 + index * 32","Home Position Y":"screenHeight - statusHeight - maxSize * 48 + (index+1) * 48 - 32","Side Sprite Priority":"1","---Sprites---":"","Default X Anchor":"0.50","Default Y Anchor":"1.00","Step Distance":"48","Flinch Distance":"12","Show Shadows":"true","---Damage Popups---":"","Popup Duration":"128","Newest Popup Bottom":"true","Popup Overlap Rate":"0.9","Critical Popup":"255, 0, 0, 160","Critical Duration":"60","---Tick-Settings---":"","Timed States":"false","Timed Buffs":"false","Turn Time":"100","AI Self Turns":"true","---Window Settings---":"","Lower Windows":"true","Window Rows":"4","Command Window Rows":"4","Command Alignment":"center","Start Actor Command":"true","Current Max":"false","---Selection Help---":"","Mouse Over":"true","Select Help Window":"true","User Help Text":"User","Ally Help Text":"Ally","Allies Help Text":"Allies","Enemy Help Text":"Enemy","Enemies Help Text":"Enemies","All Help Text":"All %1","Random Help Text":"%2 Random %1","---Enemy Select---":"","Visual Enemy Select":"false","Show Enemy Name":"true","Show Select Box":"true","Enemy Font Size":"20","Enemy Auto Select":"this.furthestRight()","---Actor Select---":"","Visual Actor Select":"true","---Battle Log---":"","Show Emerge Text":"true","Show Pre-Emptive Text":"true","Show Surprise Text":"true","Optimize Speed":"true","Show Action Text":"true","Show State Text":"true","Show Buff Text":"true","Show Counter Text":"true","Show Reflect Text":"true","Show Substitute Text":"true","Show Fail Text":"true","Show Critical Text":"true","Show Miss Text":"true","Show Evasion Text":"true","Show HP Text":"false","Show MP Text":"false","Show TP Text":"false"}},
{"name":"YEP_X_VisualHpGauge","status":true,"description":"v1.07 (Requires YEP_BattleEngineCore.js) Reveal HP Gauges\nwhen a battler is selected or takes damage in battle.","parameters":{"---General---":"","Display Actor":"false","Defeat First":"false","Always Visible":"true","---Appearance---":"","Minimum Gauge Width":"144","Gauge Height":"18","Back Color":"19","HP Color 1":"20","HP Color 2":"21","Gauge Duration":"30","Gauge Position":"false","Y Buffer":"-16","Use Thick Gauges":"true","---Text Display---":"","Show HP":"false","Show Value":"false","Show Max":"false"}}
];
