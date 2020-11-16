/*:
 * @plugindesc <RealTimeSystem> for RPG Maker MV version 1.6.2.
 * @author RPG Maker Irina
 *
 * @help
 * *** Introduction ***
 *
 *      This plugin adds a real time system to your game. Assigned variables
 * will automatically update based on values detected from the game client's
 * NodeJS Date function. This effectively gives you the ability to create
 * events that trigger off real time changes as long as you set up the
 * variables and switches to do so.
 *
 *
 *
 * *** Setup Instructions ***
 *
 * 1. Open up the Plugin Parameters.
 * 2. Assign all the Switch and Variable parameters to switches and variables.
 * 3. Set up the tint values for each hour.
 * 4. For maps you want there to be tinting on, insert <Real Time Tint> in the
 *    map's notebox.
 * 5. Setup vocabulary settings to meet your game's standards.
 *
 * 
 *
 * *** Usage Instructions ***
 *
 * These plugin-assigned variables will be automatically updated each second
 * as long as the "Time Freeze Switch" is not on.
 *
 * Year variable will return the exact year number.
 *
 * Month variable will return the number represented as the current month.
 * - 1: January
 * - 2: February
 * - 3: March
 * - 4: April
 * - 5: May
 * - 6: June
 * - 7: July
 * - 8: August
 * - 9: September
 * - 10: October
 * - 11: November
 * - 12: December
 *
 * Date variable will return the exact date number.
 *
 * Week Day variable will return the day of the week starting with Monday.
 * - 1: Monday
 * - 2: Tuesday
 * - 3: Wednesday
 * - 4: Thursday
 * - 5: Friday
 * - 6: Saturday
 * - 7: Sunday
 *
 * Hours will be based on a 24 hour timer. This means:
 * - 0:00 will be 12 am.
 * - 8:00 will be 8 am.
 * - 12:00 will be 12 pm.
 * - 13:00 will be 1 pm.
 * - 18:00 will be 6 pm.
 * - 23:00 will be 11 pm.
 *
 * Minutes will be based on the 60 minute timer from 0 to 59.
 *
 * Seconds will be based on the 60 second timer from 0 to 59.
 *
 *
 *
 * *** Text Codes ***
 *
 * These text codes can be used inside messages:
 *
 * \Year
 * - Returns the current year.
 *
 * \YearA
 * - Returns the current year's last two digits.
 *
 * \Month
 * - Returns the current month's name.
 *
 * \MonthID
 * - Returns the current month's numeric value.
 *
 * \Date
 * - Returns the current date number.
 *
 * \WeekDay
 * - Returns the current week day's name.
 *
 * \Hour
 * \Hour24
 * - Returns the current hour (24 hour).
 *
 * \Hour12
 * - Returns the current hour (12 hour).
 *
 * \Minute
 * - Returns the current minute. This number will be padded if under 10.
 *
 * \Second
 * - Returns the current second. This number will be padded if under 10.
 *
 * \Meridiem
 * - Returns 'AM' or 'PM' depending on the current time.
 *
 *
 *
 * *** Plugin Parameters ***
 *
 * Switches:
 * 
 * Time Freeze Switch:
 * - If this switch is on, time is frozen and will not automatically update.
 *
 * Anti-Tint Switch: 
 * - If this switch is on, ignore any day tints even on maps with
 * <Real Time Tint> notetag.
 *
 * Variables:
 *
 * Year Variable:
 * Month Variable:
 * Date Variable:
 * Week Day Variable:
 * Hour Variable:
 * Minute Variable:
 * Second Variable:
 * - Which variable will be designated to be automatically updated with these
 * respective values? Leave as 0 to not use it.
 *
 * Tones:
 * 12 AM through 11 PM
 * - Tone used during these hours.
 * - Format: [red, green, blue, gray]
 * - Only applies to maps with <Real Time Tint> notetag.
 *
 * Vocabulary:
 *
 * Months:
 * - Set the text used for the month names.
 * - These are used for the text codes.
 * 
 * Week Days:
 * - Set the text used for the week day names.
 * - These are used for the text codes.
 *
 * Time:
 * - Set the text used for AM and PM.
 * - These are used for the text codes.
 * 
 * 
 *  
 * *** Warnings ***
 *
 *      While this plugin is based on "real time", it's actually based on
 * whatever time the computer is using upon opening the game client. Changing
 * the computer's time while the game is active will not change the time, until
 * the game client has been closed down and restarted.
 *
 * 
 *
 * *** RPG Maker Version ***
 *
 * This plugin is made for and tested on RPG Maker MV with version 1.6.2.
 * I cannot guarantee if it works on lower versions.
 *
 *
 *
 * *** Terms of Use ***
 * 
 * 1. These plugins may be used in free or commercial games.
 * 2. 'RPG Maker Irina' must be given credit in your games.
 * 3. You are allowed to edit the code.
 * 4. Do NOT change the filename, parameters, and information of the plugin.
 * 5. You are NOT allowed to redistribute these Plugins.
 * 6. You may NOT take code for your own released Plugins.
 *
 * *** Help End ***
 *
 * @param 
 *
 * @param Switches
 *
 * @param Time Freeze Switch
 * @parent Switches
 * @type switch
 * @desc If this switch is on, time is frozen and will not automatically update.
 * @default 0
 *
 * @param Anti-Tint Switch
 * @parent Switches
 * @type switch
 * @desc If this switch is on, ignore any day tints even on maps with <Real Time Tint> notetag.
 * @default 0
 *
 * @param 
 *
 * @param Variables
 *
 * @param Year Variable
 * @parent Variables
 * @type variable
 * @desc Which variable will be designated to the year?
 * @default 0
 *
 * @param Month Variable
 * @parent Variables
 * @type variable
 * @desc Which variable will be designated to the month?
 * @default 0
 *
 * @param Date Variable
 * @parent Variables
 * @type variable
 * @desc Which variable will be designated to the date?
 * @default 0
 *
 * @param Week Day Variable
 * @parent Variables
 * @type variable
 * @desc Which variable will be designated to the week day?
 * @default 0
 *
 * @param Hour Variable
 * @parent Variables
 * @type variable
 * @desc Which variable will be designated to the hour?
 * @default 0
 *
 * @param Minute Variable
 * @parent Variables
 * @type variable
 * @desc Which variable will be designated to the minute?
 * @default 0
 *
 * @param Second Variable
 * @parent Variables
 * @type variable
 * @desc Which variable will be designated to the second?
 * @default 0
 *
 * @param 
 *
 * @param Tones
 *
 * @param 0:00
 * @text 12 AM
 * @parent Tones
 * @desc Tone used during this hour.
 * [red, green, blue, gray]
 * @default [-68, -68, 0, 68]
 *
 * @param 1:00
 * @text 1 AM
 * @parent Tones
 * @desc Tone used during this hour.
 * [red, green, blue, gray]
 * @default [-68, -68, 0, 68]
 *
 * @param 2:00
 * @text 2 AM
 * @parent Tones
 * @desc Tone used during this hour.
 * [red, green, blue, gray]
 * @default [-68, -68, 0, 68]
 *
 * @param 3:00
 * @text 3 AM
 * @parent Tones
 * @desc Tone used during this hour.
 * [red, green, blue, gray]
 * @default [-68, -68, 0, 68]
 *
 * @param 4:00
 * @text 4 AM
 * @parent Tones
 * @desc Tone used during this hour.
 * [red, green, blue, gray]
 * @default [-68, -68, 0, 68]
 *
 * @param 5:00
 * @text 5 AM
 * @parent Tones
 * @desc Tone used during this hour.
 * [red, green, blue, gray]
 * @default [-51, -51, 0, 68]
 *
 * @param 6:00
 * @text 6 AM
 * @parent Tones
 * @desc Tone used during this hour.
 * [red, green, blue, gray]
 * @default [-34, -34, 0, 68]
 *
 * @param 7:00
 * @text 7 AM
 * @parent Tones
 * @desc Tone used during this hour.
 * [red, green, blue, gray]
 * @default [-17, -17, 0, 68]
 *
 * @param 8:00
 * @text 8 AM
 * @parent Tones
 * @desc Tone used during this hour.
 * [red, green, blue, gray]
 * @default [0, 0, 0, 51]
 *
 * @param 9:00
 * @text 9 AM
 * @parent Tones
 * @desc Tone used during this hour.
 * [red, green, blue, gray]
 * @default [0, 0, 0, 34]
 *
 * @param 10:00
 * @text 10 AM
 * @parent Tones
 * @desc Tone used during this hour.
 * [red, green, blue, gray]
 * @default [0, 0, 0, 17]
 *
 * @param 11:00
 * @text 11 AM
 * @parent Tones
 * @desc Tone used during this hour.
 * [red, green, blue, gray]
 * @default [0, 0, 0, 0]
 *
 * @param 12:00
 * @text 12 PM
 * @parent Tones
 * @desc Tone used during this hour.
 * [red, green, blue, gray]
 * @default [0, 0, 0, 0]
 *
 * @param 13:00
 * @text 1 PM
 * @parent Tones
 * @desc Tone used during this hour.
 * [red, green, blue, gray]
 * @default [0, 0, 0, 0]
 *
 * @param 14:00
 * @text 2 PM
 * @parent Tones
 * @desc Tone used during this hour.
 * [red, green, blue, gray]
 * @default [0, 0, 0, 0]
 *
 * @param 15:00
 * @text 3 PM
 * @parent Tones
 * @desc Tone used during this hour.
 * [red, green, blue, gray]
 * @default [0, 0, 0, 0]
 *
 * @param 16:00
 * @text 4 PM
 * @parent Tones
 * @desc Tone used during this hour.
 * [red, green, blue, gray]
 * @default [0, 0, 0, 0]
 *
 * @param 17:00
 * @text 5 PM
 * @parent Tones
 * @desc Tone used during this hour.
 * [red, green, blue, gray]
 * @default [34, -17, -17, 0]
 *
 * @param 18:00
 * @text 6 PM
 * @parent Tones
 * @desc Tone used during this hour.
 * [red, green, blue, gray]
 * @default [68, -34, -34, 0]
 *
 * @param 19:00
 * @text 7 PM
 * @parent Tones
 * @desc Tone used during this hour.
 * [red, green, blue, gray]
 * @default [0, -51, -17, 34]
 *
 * @param 20:00
 * @text 8 PM
 * @parent Tones
 * @desc Tone used during this hour.
 * [red, green, blue, gray]
 * @default [-68, -68, 0, 68]
 *
 * @param 21:00
 * @text 9 PM
 * @parent Tones
 * @desc Tone used during this hour.
 * [red, green, blue, gray]
 * @default [-68, -68, 0, 68]
 *
 * @param 22:00
 * @text 10 PM
 * @parent Tones
 * @desc Tone used during this hour.
 * [red, green, blue, gray]
 * @default [-68, -68, 0, 68]
 *
 * @param 23:00
 * @text 11 PM
 * @parent Tones
 * @desc Tone used during this hour.
 * [red, green, blue, gray]
 * @default [-68, -68, 0, 68]
 *
 * @param 
 *
 * @param Vocabulary
 *
 * @param Months
 * @parent Vocabulary
 *
 * @param Month 1
 * @parent Months
 * @desc Text used for this month.
 * @default January
 *
 * @param Month 2
 * @parent Months
 * @desc Text used for this month.
 * @default February
 *
 * @param Month 3
 * @parent Months
 * @desc Text used for this month.
 * @default March
 *
 * @param Month 4
 * @parent Months
 * @desc Text used for this month.
 * @default April
 *
 * @param Month 5
 * @parent Months
 * @desc Text used for this month.
 * @default May
 *
 * @param Month 6
 * @parent Months
 * @desc Text used for this month.
 * @default June
 *
 * @param Month 7
 * @parent Months
 * @desc Text used for this month.
 * @default July
 *
 * @param Month 8
 * @parent Months
 * @desc Text used for this month.
 * @default August
 *
 * @param Month 9
 * @parent Months
 * @desc Text used for this month.
 * @default September
 *
 * @param Month 10
 * @parent Months
 * @desc Text used for this month.
 * @default October
 *
 * @param Month 11
 * @parent Months
 * @desc Text used for this month.
 * @default November
 *
 * @param Month 12
 * @parent Months
 * @desc Text used for this month.
 * @default December
 *
 * @param Week Days
 * @parent Vocabulary
 *
 * @param Week Day 1
 * @parent Week Days
 * @desc Text used for this week day.
 * @default Monday
 *
 * @param Week Day 2
 * @parent Week Days
 * @desc Text used for this week day.
 * @default Tuesday
 *
 * @param Week Day 3
 * @parent Week Days
 * @desc Text used for this week day.
 * @default Wednesday
 *
 * @param Week Day 4
 * @parent Week Days
 * @desc Text used for this week day.
 * @default Thursday
 *
 * @param Week Day 5
 * @parent Week Days
 * @desc Text used for this week day.
 * @default Friday
 *
 * @param Week Day 6
 * @parent Week Days
 * @desc Text used for this week day.
 * @default Saturday
 *
 * @param Week Day 7
 * @parent Week Days
 * @desc Text used for this week day.
 * @default Sunday
 *
 * @param Time
 * @parent Vocabulary
 *
 * @param AM
 * @parent Time
 * @desc Text used to represent AM.
 * @default AM
 *
 * @param PM
 * @parent Time
 * @desc Text used to represent PM.
 * @default PM
 *
 * @param 
 *
 */
//=============================================================================

const _0x51d2=['match','_realTimeTone','getMinutes','currentYear','format','updateVariables','currentDate','updateRealTimeTone','getSeconds','updateRealTimeWebGLToneChanger','_filters','Month\x20%1','Week\x20Day\x20%1','note','clearRealTimeTone','%1:00','getHours','currentHour','Month\x20Variable','value','Second\x20Variable','_realTimeToneFilter','_baseSprite','filters','reset','createWebGLToneChanger','realTimeToneTarget','filter','timeMeridiem','isTimeFrozen','description','hourTone','currentWeekDay','currentMinute','adjustSaturation','Minute\x20Variable','updateRealTimeCanvasToneChanger','replace','realTimeTone','contains','setValue','getDay','This\x20is\x20a\x20static\x20class','Year\x20Variable','clear','call','Date\x20Variable','prototype','padZero','addChild','_date','_realTimeToneSprite','round','apply','clamp','Parameters','Time\x20Freeze\x20Switch','hasRealTimeTint','push','Hour\x20Variable','convertEscapeCharacters','Irina_RealTimeSystem','Week\x20Day\x20Variable','currentMeridiem','createCanvasToneChanger','update','start','<RealTimeSystem>','currentMonth','_hourTone','convertTimeEscapeCharacters','getDate'];(function(_0x5062b9,_0x51d2ab){const _0x58a2d0=function(_0x3f7510){while(--_0x3f7510){_0x5062b9['push'](_0x5062b9['shift']());}};_0x58a2d0(++_0x51d2ab);}(_0x51d2,0x1b5));const _0x58a2=function(_0x5062b9,_0x51d2ab){_0x5062b9=_0x5062b9-0x0;let _0x58a2d0=_0x51d2[_0x5062b9];return _0x58a2d0;};var parameters=$plugins[_0x58a2('0x16')](function(_0x51f15a){return _0x51f15a[_0x58a2('0x19')][_0x58a2('0x22')](_0x58a2('0x3e'));})[0x0]['parameters'];var Imported=Imported||{};Imported[_0x58a2('0x38')]={};Imported['Irina_RealTimeSystem'][_0x58a2('0x32')]=parameters;function TimeManager(){throw new Error(_0x58a2('0x25'));}(()=>{TimeManager[_0x58a2('0x3c')]=function(){this[_0x58a2('0x2d')]=new Date();this[_0x58a2('0x0')]();setTimeout(TimeManager[_0x58a2('0x3c')]['bind'](this),0x3e8);};TimeManager[_0x58a2('0x18')]=function(){return $gameSwitches&&$gameSwitches[_0x58a2('0xe')](Imported[_0x58a2('0x38')][_0x58a2('0x32')][_0x58a2('0x33')]||0x0);};TimeManager[_0x58a2('0x0')]=function(){if(!$gameVariables||this[_0x58a2('0x18')]())return;$gameVariables[_0x58a2('0x23')](Imported[_0x58a2('0x38')][_0x58a2('0x32')][_0x58a2('0x26')],this[_0x58a2('0x2d')]['getFullYear']());$gameVariables['setValue'](Imported['Irina_RealTimeSystem']['Parameters']['Month\x20Variable'],this[_0x58a2('0x2d')]['getMonth']()+0x1);$gameVariables[_0x58a2('0x23')](Imported[_0x58a2('0x38')][_0x58a2('0x32')][_0x58a2('0x29')],this[_0x58a2('0x2d')][_0x58a2('0x42')]());$gameVariables[_0x58a2('0x23')](Imported[_0x58a2('0x38')][_0x58a2('0x32')][_0x58a2('0x39')],this[_0x58a2('0x2d')][_0x58a2('0x24')]());$gameVariables[_0x58a2('0x23')](Imported[_0x58a2('0x38')][_0x58a2('0x32')][_0x58a2('0x36')],this[_0x58a2('0x2d')][_0x58a2('0xb')]());$gameVariables[_0x58a2('0x23')](Imported[_0x58a2('0x38')]['Parameters'][_0x58a2('0x1e')],this['_date'][_0x58a2('0x45')]());$gameVariables[_0x58a2('0x23')](Imported[_0x58a2('0x38')][_0x58a2('0x32')][_0x58a2('0xf')],this[_0x58a2('0x2d')][_0x58a2('0x3')]());};TimeManager[_0x58a2('0x1a')]=function(_0x4a3f5f){if(this['_hourTone'])return this[_0x58a2('0x40')][_0x4a3f5f];this[_0x58a2('0x40')]={};for(let _0x3111a8=0x0;_0x3111a8<0x18;_0x3111a8++){this[_0x58a2('0x40')][_0x3111a8]=JSON['parse'](Imported[_0x58a2('0x38')][_0x58a2('0x32')][_0x58a2('0xa')[_0x58a2('0x47')](_0x3111a8)]);}return this[_0x58a2('0x40')][_0x4a3f5f];};TextManager['currentYear']=function(_0x3ffd12){const _0x558db3=$gameVariables[_0x58a2('0xe')](Imported[_0x58a2('0x38')][_0x58a2('0x32')][_0x58a2('0x26')]||0x1);return _0x3ffd12?_0x558db3%0x64:_0x558db3;};TextManager[_0x58a2('0x3f')]=function(_0x4dfc40){const _0x4df629=$gameVariables[_0x58a2('0xe')](Imported[_0x58a2('0x38')][_0x58a2('0x32')][_0x58a2('0xd')]||0x1)[_0x58a2('0x31')](0x1,0xc);return _0x4dfc40?_0x4df629:Imported[_0x58a2('0x38')][_0x58a2('0x32')][_0x58a2('0x6')['format'](_0x4df629)];};TextManager[_0x58a2('0x1')]=function(_0x1e9122){return $gameVariables[_0x58a2('0xe')](Imported[_0x58a2('0x38')][_0x58a2('0x32')][_0x58a2('0x29')]||0x1);};TextManager[_0x58a2('0x1b')]=function(_0x5b22fa){const _0x2ef5b2=$gameVariables[_0x58a2('0xe')](Imported[_0x58a2('0x38')][_0x58a2('0x32')]['Month\x20Variable']||0x1)[_0x58a2('0x31')](0x1,0x7);return Imported[_0x58a2('0x38')]['Parameters'][_0x58a2('0x7')['format'](_0x2ef5b2)];};TextManager['currentHour']=function(_0x1ec63e){const _0x431677=$gameVariables[_0x58a2('0xe')](Imported[_0x58a2('0x38')][_0x58a2('0x32')][_0x58a2('0x36')]||0x0);return _0x1ec63e?_0x431677%0xc:_0x431677;};TextManager[_0x58a2('0x1c')]=function(_0x3e3e55){return $gameVariables['value'](Imported['Irina_RealTimeSystem'][_0x58a2('0x32')][_0x58a2('0x1e')]||0x0)['padZero'](0x2);};TextManager['currentSecond']=function(_0x4203e5){return $gameVariables[_0x58a2('0xe')](Imported[_0x58a2('0x38')][_0x58a2('0x32')]['Second\x20Variable']||0x0)[_0x58a2('0x2b')](0x2);};TextManager[_0x58a2('0x17')]=function(_0x5cf25f){return _0x5cf25f<0xc?Imported['Irina_RealTimeSystem'][_0x58a2('0x32')]['AM']:Imported[_0x58a2('0x38')][_0x58a2('0x32')]['PM'];};TextManager[_0x58a2('0x3a')]=function(_0x12337d){const _0x4ed04e=$gameVariables[_0x58a2('0xe')](Imported[_0x58a2('0x38')]['Parameters'][_0x58a2('0x36')]||0x0);return this[_0x58a2('0x17')](_0x4ed04e);};const _0x2e3b34=Game_Screen[_0x58a2('0x2a')][_0x58a2('0x27')];Game_Screen[_0x58a2('0x2a')][_0x58a2('0x27')]=function(){_0x2e3b34[_0x58a2('0x30')](this,arguments);this[_0x58a2('0x9')]();};Game_Screen[_0x58a2('0x2a')][_0x58a2('0x9')]=function(){this[_0x58a2('0x44')]=[0x0,0x0,0x0,0x0];};Game_Screen[_0x58a2('0x2a')][_0x58a2('0x21')]=function(){if(this[_0x58a2('0x44')]===undefined)this['clearRealTimeTone']();return this['_realTimeTone'];};const _0x15c031=Game_Screen[_0x58a2('0x2a')][_0x58a2('0x3c')];Game_Screen['prototype'][_0x58a2('0x3c')]=function(){_0x15c031[_0x58a2('0x30')](this,arguments);this[_0x58a2('0x2')]();};Game_Screen[_0x58a2('0x2a')][_0x58a2('0x2')]=function(){if($gameMap&&$gameMap[_0x58a2('0x34')]()){this['_realTimeTone']=this[_0x58a2('0x15')]();}else{this[_0x58a2('0x44')]=[0x0,0x0,0x0,0x0];}};Game_Screen[_0x58a2('0x2a')][_0x58a2('0x15')]=function(){const _0x120b0a=$gameVariables[_0x58a2('0xe')](Imported[_0x58a2('0x38')][_0x58a2('0x32')][_0x58a2('0x36')])||0x0;const _0x45b2d7=_0x120b0a>=0x17?0x0:_0x120b0a+0x1;const _0x45674e=TimeManager['hourTone'](_0x120b0a);const _0x4731ee=TimeManager[_0x58a2('0x1a')](_0x45b2d7);const _0x5eca13=($gameVariables[_0x58a2('0xe')](Imported[_0x58a2('0x38')]['Parameters'][_0x58a2('0x1e')])||0x0)/0x3c;const _0x434e37=Math[_0x58a2('0x2f')](_0x45674e[0x0]+(_0x4731ee[0x0]-_0x45674e[0x0])*_0x5eca13);const _0x5303cd=Math[_0x58a2('0x2f')](_0x45674e[0x1]+(_0x4731ee[0x1]-_0x45674e[0x1])*_0x5eca13);const _0x431dc3=Math[_0x58a2('0x2f')](_0x45674e[0x2]+(_0x4731ee[0x2]-_0x45674e[0x2])*_0x5eca13);const _0x114af5=Math[_0x58a2('0x2f')](_0x45674e[0x3]+(_0x4731ee[0x3]-_0x45674e[0x3])*_0x5eca13);return[_0x434e37,_0x5303cd,_0x431dc3,_0x114af5];};Game_Map[_0x58a2('0x2a')][_0x58a2('0x34')]=function(){if($gameSwitches&&$gameSwitches[_0x58a2('0xe')](Imported[_0x58a2('0x38')][_0x58a2('0x32')]['Anti-Tint\x20Switch']||0x0))return![];return $dataMap&&!!$dataMap[_0x58a2('0x8')][_0x58a2('0x43')](/<Real Time Tint>/i);};const _0x5bc715=Spriteset_Base['prototype'][_0x58a2('0x14')];Spriteset_Base['prototype']['createWebGLToneChanger']=function(){_0x5bc715[_0x58a2('0x28')](this);this['_realTimeToneFilter']=new ToneFilter();this[_0x58a2('0x11')][_0x58a2('0x12')][_0x58a2('0x35')](this[_0x58a2('0x10')]);this[_0x58a2('0x11')][_0x58a2('0x5')][_0x58a2('0x35')](this[_0x58a2('0x10')]);};const _0x591438=Spriteset_Base[_0x58a2('0x2a')][_0x58a2('0x3b')];Spriteset_Base[_0x58a2('0x2a')][_0x58a2('0x3b')]=function(){_0x591438['call'](this);this['_realTimeToneSprite']=new ToneSprite();this[_0x58a2('0x2c')](this[_0x58a2('0x2e')]);};const _0x2a7f90=Spriteset_Base[_0x58a2('0x2a')]['updateToneChanger'];Spriteset_Base[_0x58a2('0x2a')]['updateToneChanger']=function(){_0x2a7f90[_0x58a2('0x28')](this);if(Graphics['isWebGL']()){this[_0x58a2('0x4')]();}else{this[_0x58a2('0x1f')]();}};Spriteset_Base[_0x58a2('0x2a')][_0x58a2('0x4')]=function(){var _0x3cd6cf=$gameScreen[_0x58a2('0x21')]();this['_realTimeToneFilter'][_0x58a2('0x13')]();this['_realTimeToneFilter']['adjustTone'](_0x3cd6cf[0x0],_0x3cd6cf[0x1],_0x3cd6cf[0x2]);this['_realTimeToneFilter'][_0x58a2('0x1d')](-_0x3cd6cf[0x3]);};Spriteset_Base[_0x58a2('0x2a')]['updateRealTimeCanvasToneChanger']=function(){var _0x5a7cd6=$gameScreen[_0x58a2('0x21')]();this[_0x58a2('0x2e')]['setTone'](_0x5a7cd6[0x0],_0x5a7cd6[0x1],_0x5a7cd6[0x2],_0x5a7cd6[0x3]);};const _0x107336=Scene_Boot[_0x58a2('0x2a')][_0x58a2('0x3d')];Scene_Boot[_0x58a2('0x2a')]['start']=function(){_0x107336[_0x58a2('0x30')](this,arguments);TimeManager[_0x58a2('0x3c')]();};const _0x3ae36e=Window_Base[_0x58a2('0x2a')][_0x58a2('0x37')];Window_Base[_0x58a2('0x2a')][_0x58a2('0x37')]=function(_0x4c6a3e){_0x4c6a3e=_0x3ae36e[_0x58a2('0x28')](this,_0x4c6a3e);_0x4c6a3e=this[_0x58a2('0x41')](_0x4c6a3e);return _0x4c6a3e;};Window_Base[_0x58a2('0x2a')][_0x58a2('0x41')]=function(_0x571ca3){_0x571ca3=_0x571ca3[_0x58a2('0x20')](/\x1bYearA/gi,TextManager[_0x58a2('0x46')](!![]));_0x571ca3=_0x571ca3['replace'](/\x1bYear/gi,TextManager[_0x58a2('0x46')](![]));_0x571ca3=_0x571ca3[_0x58a2('0x20')](/\x1bMonthID/gi,TextManager['currentMonth'](!![]));_0x571ca3=_0x571ca3[_0x58a2('0x20')](/\x1bMonth/gi,TextManager[_0x58a2('0x3f')](![]));_0x571ca3=_0x571ca3['replace'](/\x1bDate/gi,TextManager[_0x58a2('0x1')](![]));_0x571ca3=_0x571ca3[_0x58a2('0x20')](/\x1bWeekDay/gi,TextManager[_0x58a2('0x1b')](![]));_0x571ca3=_0x571ca3['replace'](/\x1bHour24/gi,TextManager[_0x58a2('0xc')](![]));_0x571ca3=_0x571ca3[_0x58a2('0x20')](/\x1bHour12/gi,TextManager[_0x58a2('0xc')](!![]));_0x571ca3=_0x571ca3[_0x58a2('0x20')](/\x1bHour/gi,TextManager[_0x58a2('0xc')](![]));_0x571ca3=_0x571ca3[_0x58a2('0x20')](/\x1bMinute/gi,TextManager[_0x58a2('0x1c')](![]));_0x571ca3=_0x571ca3[_0x58a2('0x20')](/\x1bSecond/gi,TextManager['currentSecond'](![]));_0x571ca3=_0x571ca3[_0x58a2('0x20')](/\x1bMeridiem/gi,TextManager[_0x58a2('0x3a')](![]));return _0x571ca3;};})();