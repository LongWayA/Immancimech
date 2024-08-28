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
// 
/**
 * Description placeholder
 *
 * @class Html5CanvasImage_C
 * @typedef {Html5CanvasImage_C}
 */
class Html5CanvasImage_C {
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    NAME = "Html5CanvasImage_C";
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
    idCanvas = document.getElementById('game-canvas'); //private 
    /**
     * Description placeholder
     *
     * @private
     * @type {CanvasRenderingContext2D}
     */
    contextCanvas = this.idCanvas.getContext('2d');
    /**
     * Description placeholder
     *
     * @public
     * @type {boolean}
     */
    DRAW_MIRROR = true;
    //=============================================================================
    /**
     * Creates an instance of Html5CanvasImage_C.
     *
     * @constructor
     */
    constructor() {
    }
    //=============================================================================
    //=============================================================================
    /** Description placeholder */
    iniM() {
    }
    //=============================================================================
    //=============================================================================
    /** Description placeholder */
    startM() {
    }
    //=============================================================================
    /**
     * Description placeholder
     *
     * @param {(HTMLImageElement | HTMLCanvasElement)} _image
     * @param {number} _left
     * @param {number} _top
     */
    drawImage_(_image, _left, _top) {
        this.contextCanvas.drawImage(_image, _left, _top);
    }
    /**
     * Description placeholder
     *
     * @param {(HTMLImageElement | HTMLCanvasElement)} _image
     * @param {number} _left
     * @param {number} _top
     * @param {number} _width
     * @param {number} _height
     */
    drawImage_w_h(_image, _left, _top, _width, _height) {
        this.contextCanvas.drawImage(_image, _left, _top, _width, _height);
    }
    /** Description placeholder */
    scale() {
        this.contextCanvas.scale(-1, 1);
    }
    //============================================================================
    /**
     * Description placeholder
     *
     * @param {(HTMLImageElement | HTMLCanvasElement)} image
     * @param {number} left
     * @param {number} top
     * @param {number} width
     * @param {number} height
     * @param {boolean} mirror
     */
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
            this.drawImage_(image, left, top);
            //console.log('drawImage(_image, _left, _top);');
        }
        else {
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
/**
 * Description placeholder
 *
 * @type {Html5CanvasImage_C}
 */
let html5CanvasImage_R = new Html5CanvasImage_C();
html5CanvasImage_R.iniM();
export { html5CanvasImage_R, Html5CanvasImage_C };
if (global_R.print_module_start_finish)
    console.log('4_html5_canvas_image.js -> module finish');
html5CanvasImage_R.isOk = "OK"; //
