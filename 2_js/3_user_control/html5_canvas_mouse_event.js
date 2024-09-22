// @ts-check
/**
 * @module html5_canvas_mouse_event
 * @author ABr75
 * @copyright Copyright (c) 2024, ABr75 and/or its affiliates. All rights reserved.
 * @version Last_modified -10.09.2023-25.11.2023
 * @version Last_modified -24.02m.2024-
 */
/**
* НАЗНАЧЕНИЕ
*   Работаем с HTML5 Canvas
*  Canvas (англ. canvas — «холст», рус. канва́с) — элемент HTML5,
*  предназначенный для создания растрового двухмерного изображения при помощи скриптов,
*  обычно на языке JavaScript[1].
*  Из Википедии https://ru.wikipedia.org/wiki/Canvas_(HTML)
*/
import { global_R } from '../1_loop/global.js';
if (global_R.print_module_start_finish)
    console.log('5_html5_canvas_mouse_event.js -> module start');
class Html5CanvasMouseEvent_C {
    NAME = "html5CanvasMouse_R";
    isOk = "";
    // "2d" создаем объекта CanvasRenderingContext2D,
    //  представляющий двумерный контекст.
    // @ts-ignore
    idCanvas = document.getElementById('game-canvas'); //private 
    // @ts-ignore
    contextCanvas = this.idCanvas.getContext('2d');
    mouseMoveIsChange = 0;
    mouseMoveX = 0;
    mouseMoveY = 0;
    mouseDownIsChange = 0;
    mouseDownX = 0;
    mouseDownY = 0;
    mouseUpIsChange = 0;
    mouseUpX = 0;
    mouseUpY = 0;
    event = null;
    //=============================================================================
    constructor() {
    }
    //=============================================================================
    //=============================================================================
    iniM() {
        // @ts-ignore
        this.idCanvas.addEventListener('mousemove', (event) => {
            // @ts-ignore
            this.event = event;
            this.mouseMoveIsChange = 1;
            this.mouseMoveX = event.offsetX;
            this.mouseMoveY = event.offsetY;
        });
        // @ts-ignore
        this.idCanvas.addEventListener('mousedown', (event) => {
            // @ts-ignore
            this.event = event;
            this.mouseDownIsChange = 1;
            this.mouseDownX = event.offsetX;
            this.mouseDownY = event.offsetY;
        });
        // @ts-ignore
        this.idCanvas.addEventListener('mouseup', (event) => {
            // @ts-ignore
            this.event = event;
            this.mouseUpIsChange = 1;
            this.mouseUpX = event.offsetX;
            this.mouseUpY = event.offsetY;
        });
    }
    //=============================================================================
    //=============================================================================
    startM() {
    }
} //UserInputMouse
let html5CanvasMouseEvent_R = new Html5CanvasMouseEvent_C();
html5CanvasMouseEvent_R.iniM();
export { html5CanvasMouseEvent_R, Html5CanvasMouseEvent_C };
if (global_R.print_module_start_finish)
    console.log('5_html5_canvas_mouse_event.js -> module finish');
html5CanvasMouseEvent_R.isOk = "OK"; //
