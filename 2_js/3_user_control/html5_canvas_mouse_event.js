// @ts-check
/**
 * @module html5_canvas_mouse_event
 * @author ABr75
 * @copyright Copyright (c) 2025, ABr75 and/or its affiliates. All rights reserved.
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
import { global_R } from '../global/global.js';
if (global_R.print_module_start_finish)
    console.log('5_html5_canvas_mouse_event.js -> module start');
/**
 * Description placeholder
 *
 * @class Html5CanvasMouseEvent_C
 */
class Html5CanvasMouseEvent_C {
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    NAME = "html5CanvasMouse_R";
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    isOk = "";
    // "2d" создаем объекта CanvasRenderingContext2D,
    //  представляющий двумерный контекст.
    //const idCanvas : HTMLElement = <HTMLElement>document.getElementById('game-canvas');
    /**
     * Description placeholder
     *
     * @public
     * @type {HTMLCanvasElement}
     */
    // @ts-ignore
    idCanvas = document.getElementById('game-canvas'); //private 
    /**
     * Description placeholder
     *
     * @private
     * @type {CanvasRenderingContext2D}
     */
    // @ts-ignore
    contextCanvas = this.idCanvas.getContext('2d');
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    mouseMoveIsChange = 0;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    mouseMoveX = 0;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    mouseMoveY = 0;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    mouseDownIsChange = 0;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    mouseDownX = 0;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    mouseDownY = 0;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    mouseUpIsChange = 0;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    mouseUpX = 0;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    mouseUpY = 0;
    /**
     * Description placeholder
     *
     * @public
     * @type {*}
     */
    event = null;
    //=============================================================================
    /**
     * Creates an instance of Html5CanvasMouseEvent_C.
     *
     * @constructor
     */
    constructor() {
    }
    //=============================================================================
    //=============================================================================
    /** Description placeholder */
    iniM() {
        this.idCanvas.addEventListener('mousemove', (event) => {
            this.event = event;
            this.mouseMoveIsChange = 1;
            this.mouseMoveX = event.offsetX;
            this.mouseMoveY = event.offsetY;
        });
        this.idCanvas.addEventListener('mousedown', (event) => {
            this.event = event;
            this.mouseDownIsChange = 1;
            this.mouseDownX = event.offsetX;
            this.mouseDownY = event.offsetY;
        });
        this.idCanvas.addEventListener('mouseup', (event) => {
            this.event = event;
            this.mouseUpIsChange = 1;
            this.mouseUpX = event.offsetX;
            this.mouseUpY = event.offsetY;
        });
    }
    //=============================================================================
    //=============================================================================
    /** Description placeholder */
    startM() {
    }
} //UserInputMouse
/**
 * Description placeholder
 *
 * @type {Html5CanvasMouseEvent_C}
 */
let html5CanvasMouseEvent_R = new Html5CanvasMouseEvent_C();
html5CanvasMouseEvent_R.iniM();
export { html5CanvasMouseEvent_R, Html5CanvasMouseEvent_C };
if (global_R.print_module_start_finish)
    console.log('5_html5_canvas_mouse_event.js -> module finish');
html5CanvasMouseEvent_R.isOk = "OK"; //
