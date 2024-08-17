// Copyright (c) 2024, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -21.08.2021-31.07.2022-18.02.2023-08.03.2023-18.03.2023-26.03.2023-25.11.2023
// -24.02m.2024-
/*
 НАЗНАЧЕНИЕ
  Работаем с HTML5 Canvas
  Canvas (англ. canvas — «холст», рус. канва́с) — элемент HTML5,
  предназначенный для создания растрового двухмерного изображения при помощи скриптов,
  обычно на языке JavaScript[1].
  Из Википедии https://ru.wikipedia.org/wiki/Canvas_(HTML)

  Подробное описание см. в конце файла
 
*/

import { global_R } from '../../global/global.js';

if (global_R.print_module_start_finish) console.log('3_html5_canvas_primitive.js -> module start');

import { html5CanvasContext_R } from '../html5_canvas/1_html5_canvas_context.js';

// 
class Html5CanvasPrimitive_C {
    public NAME: string = "html5CanvasPrimitive_R";
    public isOk: string = "";
    public WHITE: string = 'white';
    public BLACK: string = 'black';
    public RED: string = 'red';
    public GREEN: string = 'green';
    public BLUE: string = 'blue';

    //=============================================================================
    constructor() {
    }
    //=============================================================================

    //=============================================================================
    iniM(): void {
    }
    //============================================================================
    //=============================================================================
    startM(): void {
    }
    //=============================================================================
    //=============================================================================
    setColor(color: string): void {
        let style = '#ffffff';
        switch (color) {
            case this.WHITE:
                style = '#ffffff';
                break;
            case this.BLACK:
                style = '#000000';
                break;
            case this.RED:
                style = '#ff0000';
                break;
            case this.GREEN:
                style = '#008000';
                break;
            case this.BLUE:
                style = '#0000ff';
                break;
        };
        html5CanvasContext_R.set_fillStyle(style);
        html5CanvasContext_R.set_strokeStyle(style);
    };
    //============================================================================
    //------------------------------------------------------------------------------------------------------------------
    // geometric primitive (or prim)
    //============================================================================
    clearRect(left: number, top: number, width: number, height: number): void {
        html5CanvasContext_R.clearRect(left, top, width, height);
    };
    //============================================================================
    //============================================================================
    drawRect(left: number, top: number, width: number, height: number,
        lineWidth: number, color: string, fillYes: number): void {
        let style_r = html5CanvasContext_R.get_fillStyle();
        let lineWidth_r = html5CanvasContext_R.get_lineWidth();
        html5CanvasContext_R.set_lineWidth(lineWidth);
        this.setColor(color);
        if (fillYes == 1) {
            html5CanvasContext_R.fillRect(left, top, width, height);
        }
        else {
            html5CanvasContext_R.strokeRect(left, top, width, height);
        }
        ;
        // restore
        html5CanvasContext_R.set_fillStyle(style_r);
        html5CanvasContext_R.set_strokeStyle(style_r);
        html5CanvasContext_R.set_lineWidth(lineWidth_r);
    };
    //============================================================================
    //============================================================================
    drawCircle(centerX: number, centerY: number, radius: number, sAngle: number,
        eAngle: number, clockwise: boolean, lineWidth: number, color: string): void {
        let style_r = html5CanvasContext_R.get_fillStyle();
        let lineWidth_r = html5CanvasContext_R.get_lineWidth();
        html5CanvasContext_R.set_lineWidth(lineWidth);
        this.setColor(color);
        html5CanvasContext_R.circle(centerX, centerY, radius, sAngle, eAngle, clockwise);
        // restore
        html5CanvasContext_R.set_fillStyle(style_r);
        html5CanvasContext_R.set_strokeStyle(style_r);
        html5CanvasContext_R.set_lineWidth(lineWidth_r);
    };
    //============================================================================
    //============================================================================
    drawCreaturesCircle(centerX: number, centerY: number, radius: number
        , angle: number, lineWidth: number, color: string): void {

        let style_r = html5CanvasContext_R.get_fillStyle();
        let lineWidth_r = html5CanvasContext_R.get_lineWidth();
        html5CanvasContext_R.set_lineWidth(lineWidth);
        this.setColor(color);
        html5CanvasContext_R.drawCreaturesCircle(centerX, centerY, radius, angle);
        // restore
        html5CanvasContext_R.set_fillStyle(style_r);
        html5CanvasContext_R.set_strokeStyle(style_r);
        html5CanvasContext_R.set_lineWidth(lineWidth_r);
    };
    //============================================================================
}; //HTML5_Canvas_primitive

let html5CanvasPrimitive_R = new Html5CanvasPrimitive_C()

html5CanvasPrimitive_R.iniM();

export { html5CanvasPrimitive_R, Html5CanvasPrimitive_C};

if (global_R.print_module_start_finish) console.log('3_html5_canvas_primitive.js -> module finish');

html5CanvasPrimitive_R.isOk = "OK"; //