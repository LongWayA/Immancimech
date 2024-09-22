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

if (global_R.print_module_start_finish) console.log('5_html5_canvas_mouse_event.js -> module start');

class Html5CanvasMouseEvent_C {
 
    public NAME: string = "html5CanvasMouse_R";
    public isOk: string = "";

    // "2d" создаем объекта CanvasRenderingContext2D,
    //  представляющий двумерный контекст.
    // @ts-ignore
    public idCanvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('game-canvas');//private 

    // @ts-ignore
    private contextCanvas: CanvasRenderingContext2D = <CanvasRenderingContext2D>this.idCanvas.getContext('2d');   

    public mouseMoveIsChange: number = 0;
 
    public mouseMoveX: number = 0;

    public mouseMoveY: number = 0;

    public mouseDownIsChange: number = 0;
 
    public mouseDownX: number = 0;
 
    public mouseDownY: number = 0;

    public mouseUpIsChange: number = 0;
 
    public mouseUpX: number = 0;
 
    public mouseUpY: number = 0;

    public event: any = null;

    //=============================================================================
    constructor() {
    }
    //=============================================================================

    //=============================================================================
    iniM(): void {
// @ts-ignore
        this.idCanvas.addEventListener('mousemove', (event: any) => {
// @ts-ignore
            this.event = event;
            this.mouseMoveIsChange = 1;
            this.mouseMoveX = event.offsetX;
            this.mouseMoveY = event.offsetY;

        });
// @ts-ignore
        this.idCanvas.addEventListener('mousedown', (event: any) => {
// @ts-ignore
            this.event = event;
            this.mouseDownIsChange = 1;
            this.mouseDownX = event.offsetX;
            this.mouseDownY = event.offsetY;

        });
// @ts-ignore
        this.idCanvas.addEventListener('mouseup', (event: any) => {
// @ts-ignore
            this.event = event;
            this.mouseUpIsChange = 1;
            this.mouseUpX = event.offsetX;
            this.mouseUpY = event.offsetY;
        });
    }
    //=============================================================================

    //=============================================================================
    startM(): void  {
    }
    //=============================================================================


} //UserInputMouse

let html5CanvasMouseEvent_R = new Html5CanvasMouseEvent_C();

html5CanvasMouseEvent_R.iniM();

export { html5CanvasMouseEvent_R, Html5CanvasMouseEvent_C };

if (global_R.print_module_start_finish) console.log('5_html5_canvas_mouse_event.js -> module finish');

html5CanvasMouseEvent_R.isOk = "OK"; //