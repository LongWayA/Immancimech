// Copyright (c) 2024, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -15.08m.2024-
/*
 НАЗНАЧЕНИЕ
 Корневой модуль игры
 

*/
import { global_R } from '../global/global.js';
if (global_R.print_module_start_finish)
    console.log('game_start.js -> module start');
import { requestAnimationFrame_R } from '../render/request_animation.js';
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
    ;
    //=============================================================================
    //=============================================================================
    startM() {
        //alert("!");
        //console.log('this.start->');
    }
    ;
    //============================================================================= 
    //=============================================================================
    tick() {
        requestAnimationFrame(requestAnimationFrame_R.drawGameStart);
        //render_R.drawGameStart();
    }
    ;
}
; //Game
let gameStart_R = new GameStart_C();
gameStart_R.iniM();
export { gameStart_R, GameStart_C };
if (global_R.print_module_start_finish)
    console.log('game_start.js -> module finish');
gameStart_R.isOk = "OK"; //
