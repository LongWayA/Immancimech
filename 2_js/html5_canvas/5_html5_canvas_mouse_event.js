// Copyright (c) 2024, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -10.09.2023-25.11.2023
// -24.02m.2024-
/*
 НАЗНАЧЕНИЕ
     

*/
import { global_R } from '../global/global.js';
if (global_R.print_module_start_finish)
    console.log('5_html5_canvas_mouse_event.js -> module start');
import { html5CanvasContext_R } from './1_html5_canvas_context.js';
class Html5CanvasMouseEvent_C {
    NAME = "html5CanvasMouse_R";
    isOk = "";
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
        html5CanvasContext_R.idCanvas.addEventListener('mousemove', (event) => {
            this.event = event;
            this.mouseMoveIsChange = 1;
            this.mouseMoveX = event.offsetX;
            this.mouseMoveY = event.offsetY;
        });
        html5CanvasContext_R.idCanvas.addEventListener('mousedown', (event) => {
            this.event = event;
            this.mouseDownIsChange = 1;
            this.mouseDownX = event.offsetX;
            this.mouseDownY = event.offsetY;
        });
        html5CanvasContext_R.idCanvas.addEventListener('mouseup', (event) => {
            this.event = event;
            this.mouseUpIsChange = 1;
            this.mouseUpX = event.offsetX;
            this.mouseUpY = event.offsetY;
        });
    }
    ;
    //=============================================================================
    //=============================================================================
    startM() {
    }
    ;
}
; //UserInputMouse
let html5CanvasMouseEvent_R = new Html5CanvasMouseEvent_C();
html5CanvasMouseEvent_R.iniM();
export { html5CanvasMouseEvent_R, Html5CanvasMouseEvent_C };
if (global_R.print_module_start_finish)
    console.log('5_html5_canvas_mouse_event.js -> module finish');
html5CanvasMouseEvent_R.isOk = "OK"; //
