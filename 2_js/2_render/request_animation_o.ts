// @ts-check
/** 
 * @module request_animation_o
 * @author ABr75
 * @copyright Copyright (c) 2024, ABr75 and/or its affiliates. All rights reserved.
 * @version Last_modified -4.09.2023-24.02m.2024-27.07m.2024-
 */

/**
* НАЗНАЧЕНИЕ
*/

import { global_R } from '../1_loop/global.js';
import { render_R } from './render.js';


if (global_R.print_module_start_finish) console.log('request_animation.js -> module start');


interface RequestAnimationFrame_I {

    NAME: string;
    isOk: string;

    iniM(): void;
 
    startM(): void;

    drawGameStart(): void; 
 
    drowGoGame(): void;

    drawGamePaused(): void;
 
    drawGameEnd(): void; 

}

/**
* this теряет ссылку на контекст при использовании метода в качестве функции обратного вызова.(callback)
* поэтому оставил объект без класса, но с интерфейсом
* это прослойка для вызова с помощью requestAnimationFrame(requestAnimationFrame_R.drawGameEnd)
*/
let requestAnimationFrame_R : RequestAnimationFrame_I = {
    NAME: "requestAnimationFrame_R",
    isOk: "",

    //=============================================================================
    iniM(): void {
    },
    //=============================================================================
    //=============================================================================
    startM(): void {
    },
    //=============================================================================

    //=============================================================================
    drawGameStart(): void {
        render_R.drawGameStart();
    },
    //============================================================================= 

    //=============================================================================
    drowGoGame(): void {
        render_R.drowGameGo();
    },
    //============================================================================= 

    //=============================================================================
    drawGamePaused(): void {
        render_R.drawGamePaused();
    },
    //============================================================================= 

    //=============================================================================
    drawGameEnd(): void {
        render_R.drawGameEnd();
    },
    //============================================================================= 

} //


requestAnimationFrame_R.iniM();

export { requestAnimationFrame_R };

if (global_R.print_module_start_finish) console.log('request_animation.js -> module finish');

requestAnimationFrame_R.isOk = "OK"; //