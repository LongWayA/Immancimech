// @ts-check
/** 
 * @module html5_canvas_image
 * @author ABr75
 * @copyright Copyright (c) 2024, ABr75 and/or its affiliates. All rights reserved.
 * @version Last_modified -21.08.2021-31.07.2022-18.02.2023-08.03.2023-18.03.2023-26.03.2023-25.11.2023
 * @version Last_modified -24.02m.2024-
 */

/**
* НАЗНАЧЕНИЕ
*  Работаем с HTML5 Canvas
*  Canvas (англ. canvas — «холст», рус. канва́с) — элемент HTML5,
*  предназначенный для создания растрового двухмерного изображения при помощи скриптов,
*  обычно на языке JavaScript[1].
*  Из Википедии https://ru.wikipedia.org/wiki/Canvas_(HTML)
*/

import { global_R } from '../../1_loop/global.js';

if (global_R.print_module_start_finish) console.log('4_html5_canvas_image.js -> module start');


// 
class Html5CanvasImage_C {

    public NAME: string = "Html5CanvasImage_C";
    public isOk: string = "";

    // "2d" создаем объекта CanvasRenderingContext2D,
    //  представляющий двумерный контекст.
    //const idCanvas : HTMLElement = <HTMLElement>document.getElementById('game-canvas');
    // @ts-ignore
    public idCanvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('game-canvas');//private 
    // @ts-ignore
    private contextCanvas: CanvasRenderingContext2D = <CanvasRenderingContext2D>this.idCanvas.getContext('2d');
    public DRAW_MIRROR: boolean = true;

    //=============================================================================
    constructor() {
    }
    //=============================================================================

    //=============================================================================
    iniM(): void {
    }
    //=============================================================================
    //=============================================================================
    startM(): void {
    }
    //=============================================================================
    drawImage_(image: HTMLImageElement | HTMLCanvasElement, left: number, top: number): void {
        this.contextCanvas.drawImage(image, left, top);
    }

    drawImage_w_h(image: HTMLImageElement | HTMLCanvasElement, left: number, top: number,
        width: number, height: number): void {
        this.contextCanvas.drawImage(image, left, top, width, height);
    }

    scale(): void {
        this.contextCanvas.scale(-1, 1);
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
            mirror = !this.DRAW_MIRROR;
        }
        if ((width == 0) || (height == 0)) {

            this.drawImage_(image, left, top);
            //console.log('drawImage(_image, _left, _top);');
        } else {
            if (mirror == this.DRAW_MIRROR) {
                left = left + width;
                left = -left;

                this.scale();
            }

            this.drawImage_w_h(image, left, top, width, height);
            //console.log('DRAW_MIRROR DD_HTML5_Canvas.js: _left = ' + _left + ' _top = ' +_top);
            if (mirror == this.DRAW_MIRROR) {

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