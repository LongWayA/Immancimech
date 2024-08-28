// Copyright (c) 2024, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified  -15.08m.2024-
/*
 НАЗНАЧЕНИЕ

*/
import { global_R } from '../global/global.js';
if (global_R.print_module_start_finish)
    console.log('game_pause.js -> module start');
import { requestAnimationFrame_R } from '../render/request_animation_o.js';
/**
 * Description placeholder
 *
 * @class GamePause_C
 * @typedef {GamePause_C}
 */
class GamePause_C {
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    NAME = "GamePause_C";
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    isOk = "";
    //=============================================================================
    /**
     * Creates an instance of GamePause_C.
     *
     * @constructor
     */
    constructor() {
    }
    //============================================================================= 
    //=============================================================================
    /** Description placeholder */
    iniM() {
        //console.log('this.ini->');
    }
    //=============================================================================
    //=============================================================================
    /** Description placeholder */
    startM() {
        //alert("!");
        //console.log('this.start->');
    }
    //============================================================================= 
    //=============================================================================
    /** Description placeholder */
    tick() {
        requestAnimationFrame(requestAnimationFrame_R.drawGamePaused);
        //render_R.drawGamePaused();
    }
}
/**
 * Description placeholder
 *
 * @type {GamePause_C}
 */
let gamePause_R = new GamePause_C();
gamePause_R.iniM();
export { gamePause_R, GamePause_C };
if (global_R.print_module_start_finish)
    console.log('game_pause.js -> module finish');
gamePause_R.isOk = "OK"; //
