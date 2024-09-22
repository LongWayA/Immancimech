// @ts-check
/**
 * @module game_start
 * @author ABr75
 * @copyright Copyright (c) 2024, ABr75 and/or its affiliates. All rights reserved.
 * @version Last_modified -15.08m.2024-

/**
* НАЗНАЧЕНИЕ
*/
import { global_R } from '../1_loop/global.js';
if (global_R.print_module_start_finish)
    console.log('game_start.js -> module start');
import { requestAnimationFrame_R } from '../2_render/request_animation_o.js';
class GameStart_C {
    NAME = "GameStart_C";
    isOk = "";
    //=============================================================================
    constructor() {
    }
    //============================================================================= 
    //=============================================================================
    iniM() {
        //console.log('this.ini->');
    }
    //=============================================================================
    //=============================================================================
    startM() {
        //alert("!");
        //console.log('this.start->');
    }
    //============================================================================= 
    //=============================================================================
    tick() {
        requestAnimationFrame(requestAnimationFrame_R.drawGameStart);
        //render_R.drawGameStart();
    }
}
let gameStart_R = new GameStart_C();
gameStart_R.iniM();
export { gameStart_R, GameStart_C };
if (global_R.print_module_start_finish)
    console.log('game_start.js -> module finish');
gameStart_R.isOk = "OK"; //
