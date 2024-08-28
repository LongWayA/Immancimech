// Copyright (c) 2024, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -4.09.2023-
// -24.02m.2024-27.07m.2024-
/*
 НАЗНАЧЕНИЕ

*/

import { global_R } from '../global/global.js';
import { render_R } from './render.js';


if (global_R.print_module_start_finish) console.log('request_animation.js -> module start');

/**
 * Description placeholder
 *
 * @interface RequestAnimationFrame_I
 * @typedef {RequestAnimationFrame_I}
 */
interface RequestAnimationFrame_I {

    /**
     * Description placeholder
     *
     * @type {string}
     */
    NAME: string;
    /**
     * Description placeholder
     *
     * @type {string}
     */
    isOk: string;

    /** Description placeholder */
    iniM(): void;
  
    /** Description placeholder */
    startM(): void;

    /** Description placeholder */
    drawGameStart(): void; 
 
    /** Description placeholder */
    drowGoGame(): void;

    /** Description placeholder */
    drawGamePaused(): void;
 
    /** Description placeholder */
    drawGameEnd(): void; 

}

// здесь из за итераций внутри класса ссылаемся на созданный объект
// изменение названия объекта все сломает
// this теряет ссылку на контекст при использовании метода в качестве функции обратного вызова.(callback)
// поэтому оставил объект без класса, но с интерфейсом

// это прослойка для вызова с помощью requestAnimationFrame(requestAnimationFrame_R.drawGameEnd);
/**
 * Description placeholder
 *
 * @type {RequestAnimationFrame_I}
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