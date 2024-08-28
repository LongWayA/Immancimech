// Copyright (c) 2024, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -15.08m.2024-
/*
 НАЗНАЧЕНИЕ
 
*/
import { global_R } from '../global/global.js';
if (global_R.print_module_start_finish)
    console.log('game_start.js -> module start');
import { requestAnimationFrame_R } from '../render/request_animation_o.js';
/**
 * Description placeholder
 *
 * @class GameStart_C
 * @typedef {GameStart_C}
 */
class GameStart_C {
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    NAME = "GameStart_C";
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    isOk = "";
    //=============================================================================
    /**
     * Creates an instance of GameStart_C.
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
        requestAnimationFrame(requestAnimationFrame_R.drawGameStart);
        //render_R.drawGameStart();
    }
}
/**
 * Description placeholder
 *
 * @type {GameStart_C}
 */
let gameStart_R = new GameStart_C();
gameStart_R.iniM();
export { gameStart_R, GameStart_C };
if (global_R.print_module_start_finish)
    console.log('game_start.js -> module finish');
gameStart_R.isOk = "OK"; //
