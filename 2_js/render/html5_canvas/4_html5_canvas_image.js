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
if (global_R.print_module_start_finish)
    console.log('4_html5_canvas_image.js -> module start');
import { html5CanvasContext_R } from '../html5_canvas/1_html5_canvas_context.js';
// 
class Html5CanvasImage_C {
    NAME = "Html5CanvasImage_C";
    isOk = "";
    DRAW_MIRROR = true;
    //=============================================================================
    constructor() {
    }
    //=============================================================================
    //=============================================================================
    iniM() {
    }
    ;
    //=============================================================================
    //=============================================================================
    startM() {
    }
    ;
    //=============================================================================
    //============================================================================
    drawImage(image, left, top, width, height, mirror) {
        //console.log('NOT M DD_HTML5_Canvas.js: _left = ' + _left + ' _top = ' +_top);
        if (width === void 0) {
            width = 0;
        }
        if (height === void 0) {
            height = 0;
        }
        if (mirror === void 0) {
            mirror = !this.DRAW_MIRROR;
        }
        if ((width == 0) || (height == 0)) {
            html5CanvasContext_R.drawImage(image, left, top);
            //console.log('drawImage(_image, _left, _top);');
        }
        else {
            if (mirror == this.DRAW_MIRROR) {
                left = left + width;
                left = -left;
                html5CanvasContext_R.scale();
            }
            html5CanvasContext_R.drawImage_w_h(image, left, top, width, height);
            //console.log('DRAW_MIRROR DD_HTML5_Canvas.js: _left = ' + _left + ' _top = ' +_top);
            if (mirror == this.DRAW_MIRROR) {
                html5CanvasContext_R.scale();
            }
        }
    }
    ;
}
; //HTML5_Canvas_image
let html5CanvasImage_R = new Html5CanvasImage_C();
html5CanvasImage_R.iniM();
//
//Global.testLoading('4_html5CanvasImage_R.js');
export { html5CanvasImage_R, Html5CanvasImage_C };
if (global_R.print_module_start_finish)
    console.log('4_html5_canvas_image.js -> module finish');
html5CanvasImage_R.isOk = "OK"; //
