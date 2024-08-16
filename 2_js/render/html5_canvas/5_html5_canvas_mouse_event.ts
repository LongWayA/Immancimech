// Copyright (c) 2024, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -10.09.2023-25.11.2023
// -24.02m.2024-
/*
 НАЗНАЧЕНИЕ
     

*/

import { global_R } from '../../global/global.js';

if (global_R.print_module_start_finish) console.log('5_html5_canvas_mouse_event.js -> module start');

import { html5CanvasContext_R } from './1_html5_canvas_context.js';

class Html5CanvasMouseEvent_C {
    NAME: string = "html5CanvasMouse_R";
    isOk: string = "";

    mouseMoveIsChange: number = 0;
    mouseMoveX: number = 0;
    mouseMoveY: number = 0;

    mouseDownIsChange: number = 0;
    mouseDownX: number = 0;
    mouseDownY: number = 0;

    mouseUpIsChange: number = 0;
    mouseUpX: number = 0;
    mouseUpY: number = 0;

    event: any = null;

    //=============================================================================
    constructor() {

    }
    //=============================================================================

    //=============================================================================
    iniM(): void {


        html5CanvasContext_R.idCanvas.addEventListener('mousemove', (event: any) => {

            this.event = event;
            this.mouseMoveIsChange = 1;
            this.mouseMoveX = event.offsetX;
            this.mouseMoveY = event.offsetY;

        });


        html5CanvasContext_R.idCanvas.addEventListener('mousedown', (event: any) => {

            this.event = event;
            this.mouseDownIsChange = 1;
            this.mouseDownX = event.offsetX;
            this.mouseDownY = event.offsetY;

        });



        html5CanvasContext_R.idCanvas.addEventListener('mouseup', (event: any) => {

            this.event = event;
            this.mouseUpIsChange = 1;
            this.mouseUpX = event.offsetX;
            this.mouseUpY = event.offsetY;
        });
    };
    //=============================================================================
    //=============================================================================
    startM(): void  {
    };
    //=============================================================================


}; //UserInputMouse

let html5CanvasMouseEvent_R = new Html5CanvasMouseEvent_C();

html5CanvasMouseEvent_R.iniM();

export { html5CanvasMouseEvent_R, Html5CanvasMouseEvent_C };

if (global_R.print_module_start_finish) console.log('5_html5_canvas_mouse_event.js -> module finish');

html5CanvasMouseEvent_R.isOk = "OK"; //