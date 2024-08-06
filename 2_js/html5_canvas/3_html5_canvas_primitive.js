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
import { global_R } from '../global/global.js';
if (global_R.print_module_start_finish)
    console.log('3_html5_canvas_primitive.js -> module start');
// Внешние ссылки
import { html5CanvasContext_R } from '../html5_canvas/1_html5_canvas_context.js';
// 
class Html5CanvasPrimitive_C {
    NAME = "html5CanvasPrimitive_R";
    isOk = "";
    WHITE = 'white';
    BLACK = 'black';
    RED = 'red';
    GREEN = 'green';
    BLUE = 'blue';
    //=============================================================================
    constructor() {
    }
    //=============================================================================
    //=============================================================================
    iniM() {
    }
    //============================================================================
    //=============================================================================
    startM() {
    }
    //=============================================================================
    //=============================================================================
    setColor(color) {
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
        }
        ;
        html5CanvasContext_R.set_fillStyle(style);
        html5CanvasContext_R.set_strokeStyle(style);
    }
    ;
    //============================================================================
    //------------------------------------------------------------------------------------------------------------------
    // geometric primitive (or prim)
    //============================================================================
    clearRect(left, top, width, height) {
        html5CanvasContext_R.clearRect(left, top, width, height);
    }
    ;
    //============================================================================
    //============================================================================
    drawRect(left, top, width, height, lineWidth, color, fillYes) {
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
    }
    ;
    //============================================================================
    //============================================================================
    drawCircle(centerX, centerY, radius, sAngle, eAngle, clockwise, lineWidth, color) {
        let style_r = html5CanvasContext_R.get_fillStyle();
        let lineWidth_r = html5CanvasContext_R.get_lineWidth();
        html5CanvasContext_R.set_lineWidth(lineWidth);
        this.setColor(color);
        html5CanvasContext_R.circle(centerX, centerY, radius, sAngle, eAngle, clockwise);
        // restore
        html5CanvasContext_R.set_fillStyle(style_r);
        html5CanvasContext_R.set_strokeStyle(style_r);
        html5CanvasContext_R.set_lineWidth(lineWidth_r);
    }
    ;
    //============================================================================
    //============================================================================
    drawCreaturesCircle(centerX, centerY, radius, angle, lineWidth, color) {
        let style_r = html5CanvasContext_R.get_fillStyle();
        let lineWidth_r = html5CanvasContext_R.get_lineWidth();
        html5CanvasContext_R.set_lineWidth(lineWidth);
        this.setColor(color);
        html5CanvasContext_R.drawCreaturesCircle(centerX, centerY, radius, angle);
        // restore
        html5CanvasContext_R.set_fillStyle(style_r);
        html5CanvasContext_R.set_strokeStyle(style_r);
        html5CanvasContext_R.set_lineWidth(lineWidth_r);
    }
    ;
}
; //HTML5_Canvas_primitive
let html5CanvasPrimitive_R = new Html5CanvasPrimitive_C();
html5CanvasPrimitive_R.iniM();
//Global.testLoading('3_html5CanvasPrimitive_R.js');
export { html5CanvasPrimitive_R, Html5CanvasPrimitive_C };
if (global_R.print_module_start_finish)
    console.log('3_html5_canvas_primitive.js -> module finish');
html5CanvasPrimitive_R.isOk = "OK"; //
