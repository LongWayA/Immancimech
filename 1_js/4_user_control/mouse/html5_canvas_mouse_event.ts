/** 
 * @author AnBr75
 * @copyright Copyright (c) 2023, AnBr75 and/or its affiliates. All rights reserved.
 * @version created 10.09.2023
 */

let Copyright_AnBr75 = 2023;

/**
* НАЗНАЧЕНИЕ
*   Работаем с HTML5 Canvas
*  Canvas (англ. canvas — «холст», рус. канва́с) — элемент HTML5,
*  предназначенный для создания растрового двухмерного изображения при помощи скриптов,
*  обычно на языке JavaScript[1].
*  Из Википедии https://ru.wikipedia.org/wiki/Canvas_(HTML)
*/


import { global_R } from '../../1_index/global.js';
if (global_R.print_module_start_finish) console.log('html5_canvas_mouse_event.js -> module start');

class Html5CanvasMouseEvent_C {
 
    public static NAME: string = "Html5CanvasMouseEvent_C";

    public idCanvas: HTMLCanvasElement = document.getElementById('game-canvas') as HTMLCanvasElement;//private 
    //private contextCanvas: CanvasRenderingContext2D = this.idCanvas.getContext('2d') as CanvasRenderingContext2D;   

    public mouseMoveIsChange: number = 0;
    public mouseMoveX: number = 0;
    public mouseMoveY: number = 0;
    public mouseDownIsChange: number = 0;
    public mouseDownX: number = 0;
    public mouseDownY: number = 0;
    public mouseUpIsChange: number = 0;
    public mouseUpX: number = 0;
    public mouseUpY: number = 0;

    //=============================================================================
    constructor() {
    }
    //=============================================================================

    //=============================================================================
    iniM(): void {

        this.idCanvas.addEventListener('mousemove', (event: MouseEvent) => {
            this.mouseMoveIsChange = 1;
            this.mouseMoveX = event.offsetX;
            this.mouseMoveY = event.offsetY;
        });

        this.idCanvas.addEventListener('mousedown', (event: MouseEvent) => {
            this.mouseDownIsChange = 1;
            this.mouseDownX = event.offsetX;
            this.mouseDownY = event.offsetY;
        });

        this.idCanvas.addEventListener('mouseup', (event: MouseEvent) => {
            this.mouseUpIsChange = 1;
            this.mouseUpX = event.offsetX;
            this.mouseUpY = event.offsetY;
        });
    }
    //=============================================================================
    
} //UserInputMouse

export { Html5CanvasMouseEvent_C };

if (global_R.print_module_start_finish) console.log('html5_canvas_mouse_event.js -> module finish');