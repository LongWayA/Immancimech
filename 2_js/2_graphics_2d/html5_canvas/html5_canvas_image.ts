/** 
 * 2_graphics_2d/html5_canvas
 * @author AnBr75
 * @copyright Copyright (c) 2024, AnBr75 and/or its affiliates. All rights reserved.
 * @version Last_modified -21.08.2021-31.07.2022-18.02.2023-08.03.2023-18.03.2023-26.03.2023-25.11.2023
 * @version Last_modified -24.02m.2024-
 */
let Copyright_AnBr75 = 2024;

/**
* НАЗНАЧЕНИЕ
*  Работаем с HTML5 Canvas
*  Canvas (англ. canvas — «холст», рус. канва́с) — элемент HTML5,
*  предназначенный для создания растрового двухмерного изображения при помощи скриптов,
*  обычно на языке JavaScript[1].
*  Из Википедии https://ru.wikipedia.org/wiki/Canvas_(HTML)
*/

import { global_R } from '../../1_index/global.js';
if (global_R.print_module_start_finish) console.log('4_html5_canvas_image.js -> module start');


// 
class Html5CanvasImage_C {

    public static NAME: string = "Html5CanvasImage_C";
    public isOk: string = "";

    // "2d" создаем объекта CanvasRenderingContext2D,
    //  представляющий двумерный контекст.
    public idCanvas : HTMLCanvasElement | null = null;
    public contextCanvas : CanvasRenderingContext2D | null =  null;

    public static DRAW_MIRROR: boolean = true;

    //=============================================================================
    constructor() {
    }
    //=============================================================================

    //=============================================================================
    iniM(): void {
    }
    //=============================================================================
    //=============================================================================
    startM(idCanvas: HTMLCanvasElement, contextCanvas: CanvasRenderingContext2D | null): void {
        this.idCanvas = idCanvas;
        this.contextCanvas = contextCanvas;
    }
    //=============================================================================
    drawImage_(image: HTMLImageElement | HTMLCanvasElement, left: number, top: number): void {
        (this.contextCanvas as CanvasRenderingContext2D).drawImage(image, left, top);
    }

    drawImage_w_h(image: HTMLImageElement | HTMLCanvasElement, left: number, top: number,
        width: number, height: number): void {
            (this.contextCanvas as CanvasRenderingContext2D).drawImage(image, left, top, width, height);
    }

    scale(): void {
        (this.contextCanvas as CanvasRenderingContext2D).scale(-1, 1);
    }

    //============================================================================
    drawImage(image: HTMLImageElement | HTMLCanvasElement, left: number, top: number,
        width: number, height: number, mirror: boolean): void {
        //console.log('NOT M DD_HTML5_Canvas.js: _left = ' + _left + ' _top = ' +_top);
        if (width === void 0) {
            width = 0;
        }
        if (height === void 0) {
            height = 0;
        }
        if (mirror === void 0) {
            mirror = !Html5CanvasImage_C.DRAW_MIRROR;
        }
        if ((width == 0) || (height == 0)) {

            this.drawImage_(image, left, top);
            //console.log('drawImage(_image, _left, _top);');
        } else {
            if (mirror == Html5CanvasImage_C.DRAW_MIRROR) {
                left = left + width;
                left = -left;

                this.scale();
            }

            this.drawImage_w_h(image, left, top, width, height);
            //console.log('DRAW_MIRROR DD_HTML5_Canvas.js: _left = ' + _left + ' _top = ' +_top);
            if (mirror == Html5CanvasImage_C.DRAW_MIRROR) {

                this.scale();
            }
        }
    }
} //HTML5_Canvas_image

let html5CanvasImage_R = new Html5CanvasImage_C();

html5CanvasImage_R.iniM();

export { html5CanvasImage_R, Html5CanvasImage_C };

if (global_R.print_module_start_finish) console.log('4_html5_canvas_image.js -> module finish');

html5CanvasImage_R.isOk = "OK"; //