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
    console.log('3_html5_canvas_primitive.js -> module start');
// 
/**
 * Description placeholder
 *
 * @class Html5CanvasPrimitive_C
 * @typedef {Html5CanvasPrimitive_C}
 */
class Html5CanvasPrimitive_C {
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    NAME = "html5CanvasPrimitive_R";
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
     * @type {string}
     */
    WHITE = 'white';
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    BLACK = 'black';
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    RED = 'red';
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    GREEN = 'green';
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    BLUE = 'blue';
    //=============================================================================
    /**
     * Creates an instance of Html5CanvasPrimitive_C.
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
    //============================================================================
    //=============================================================================
    /** Description placeholder */
    startM() {
    }
    //=============================================================================
    /**
     * Description placeholder
     *
     * @param {string} _color
     */
    set_fillStyle(_color) {
        this.contextCanvas.fillStyle = _color;
    }
    /**
     * Description placeholder
     *
     * @returns {string}
     */
    get_fillStyle() {
        return this.contextCanvas.fillStyle;
    }
    /**
     * Description placeholder
     *
     * @param {string} _color
     */
    set_strokeStyle(_color) {
        this.contextCanvas.strokeStyle = _color;
    }
    /**
     * Description placeholder
     *
     * @param {number} _lineWidth
     */
    set_lineWidth(_lineWidth) {
        this.contextCanvas.lineWidth = _lineWidth;
    }
    /**
     * Description placeholder
     *
     * @returns {number}
     */
    get_lineWidth() {
        return this.contextCanvas.lineWidth;
    }
    /**
     * Description placeholder
     *
     * @param {number} _left
     * @param {number} _top
     * @param {number} _width
     * @param {number} _height
     */
    clearRect_(_left, _top, _width, _height) {
        this.contextCanvas.clearRect(_left, _top, _width, _height);
    }
    /**
     * Description placeholder
     *
     * @param {number} _left
     * @param {number} _top
     * @param {number} _width
     * @param {number} _height
     */
    fillRect(_left, _top, _width, _height) {
        this.contextCanvas.fillRect(_left, _top, _width, _height);
    }
    /**
     * Description placeholder
     *
     * @param {number} _left
     * @param {number} _top
     * @param {number} _width
     * @param {number} _height
     */
    strokeRect(_left, _top, _width, _height) {
        //console.log("strokeRect " + " _left = " + _left + " _top = " + _top + " _width = " + _width + " _height = " + _height);
        this.contextCanvas.strokeRect(_left, _top, _width, _height);
    }
    /**
     * Description placeholder
     *
     * @param {number} _centerX
     * @param {number} _centerY
     * @param {number} _radius
     * @param {number} _startAngle
     * @param {number} _endAngle
     * @param {boolean} _clockwise
     */
    circle(_centerX, _centerY, _radius, _startAngle, _endAngle, _clockwise) {
        this.contextCanvas.beginPath();
        this.contextCanvas.arc(_centerX, _centerY, _radius, _startAngle, _endAngle, _clockwise);
        this.contextCanvas.closePath();
        this.contextCanvas.stroke();
    }
    /**
     * Description placeholder
     *
     * @param {number} _centerX
     * @param {number} _centerY
     * @param {number} _radius
     * @param {number} _angle
     */
    drawCreaturesCircle_(_centerX, _centerY, _radius, _angle) {
        let p = 2;
        let x = _radius * Math.cos(_angle) - 0 * Math.sin(_angle);
        let y = _radius * Math.sin(_angle) + 0 * Math.cos(_angle);
        x = x + _centerX;
        y = y + _centerY;
        //console.log("HTML5_Canvas_API_1.circle -> _centerX = " + _centerX + " _centerY = " + _centerY +
        //" _radius = " + _radius + " _angle = " + _angle + " x = " + x + " y = " + y);
        this.contextCanvas.strokeRect(_centerX, _centerY, p, p);
        this.contextCanvas.strokeRect(x, y, p, p);
        this.contextCanvas.beginPath();
        this.contextCanvas.moveTo(x, y);
        this.contextCanvas.lineTo(_centerX, _centerY);
        this.contextCanvas.closePath();
        this.contextCanvas.stroke();
        this.contextCanvas.beginPath();
        this.contextCanvas.arc(_centerX, _centerY, _radius, 0, 2 * Math.PI, true);
        this.contextCanvas.closePath();
        this.contextCanvas.stroke();
    }
    /** Description placeholder */
    drawSmile() {
        //-------------------------
        this.contextCanvas.beginPath();
        this.contextCanvas.fill();
        this.contextCanvas.fillStyle = "yellow";
        this.contextCanvas.beginPath();
        this.contextCanvas.arc(160, 130, 100, 0, 2 * Math.PI);
        this.contextCanvas.fill();
        // рот
        this.contextCanvas.beginPath();
        this.contextCanvas.moveTo(100, 160);
        this.contextCanvas.quadraticCurveTo(160, 250, 220, 160);
        this.contextCanvas.closePath();
        this.contextCanvas.fillStyle = "red";
        this.contextCanvas.fill();
        this.contextCanvas.lineWidth = 2;
        this.contextCanvas.strokeStyle = "black";
        this.contextCanvas.stroke();
        // зубы
        this.contextCanvas.fillStyle = "#FFFFFF";
        this.contextCanvas.fillRect(140, 160, 15, 15);
        this.contextCanvas.fillRect(170, 160, 15, 15);
        //глаза
        this.contextCanvas.beginPath();
        this.contextCanvas.arc(130, 90, 20, 0, 2 * Math.PI);
        this.contextCanvas.fillStyle = "#333333";
        this.contextCanvas.fill();
        this.contextCanvas.closePath();
        this.contextCanvas.beginPath();
        this.contextCanvas.arc(190, 90, 20, 0, 2 * Math.PI);
        this.contextCanvas.fillStyle = "#333333";
        this.contextCanvas.fill();
        this.contextCanvas.closePath();
        //---------------------------------
    }
    //=============================================================================
    /**
     * Description placeholder
     *
     * @param {string} color
     */
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
        this.set_fillStyle(style);
        this.set_strokeStyle(style);
    }
    //============================================================================
    //------------------------------------------------------------------------------------------------------------------
    // geometric primitive (or prim)
    //============================================================================
    /**
     * Description placeholder
     *
     * @param {number} left
     * @param {number} top
     * @param {number} width
     * @param {number} height
     */
    clearRect(left, top, width, height) {
        this.clearRect_(left, top, width, height);
    }
    //============================================================================
    //============================================================================
    /**
     * Description placeholder
     *
     * @param {number} left
     * @param {number} top
     * @param {number} width
     * @param {number} height
     * @param {number} lineWidth
     * @param {string} color
     * @param {number} fillYes
     */
    drawRect(left, top, width, height, lineWidth, color, fillYes) {
        let style_r = this.get_fillStyle();
        let lineWidth_r = this.get_lineWidth();
        this.set_lineWidth(lineWidth);
        this.setColor(color);
        if (fillYes == 1) {
            this.fillRect(left, top, width, height);
        }
        else {
            this.strokeRect(left, top, width, height);
        }
        // restore
        this.set_fillStyle(style_r);
        this.set_strokeStyle(style_r);
        this.set_lineWidth(lineWidth_r);
    }
    //============================================================================
    //============================================================================
    /**
     * Description placeholder
     *
     * @param {number} centerX
     * @param {number} centerY
     * @param {number} radius
     * @param {number} sAngle
     * @param {number} eAngle
     * @param {boolean} clockwise
     * @param {number} lineWidth
     * @param {string} color
     */
    drawCircle(centerX, centerY, radius, sAngle, eAngle, clockwise, lineWidth, color) {
        let style_r = this.get_fillStyle();
        let lineWidth_r = this.get_lineWidth();
        this.set_lineWidth(lineWidth);
        this.setColor(color);
        this.circle(centerX, centerY, radius, sAngle, eAngle, clockwise);
        // restore
        this.set_fillStyle(style_r);
        this.set_strokeStyle(style_r);
        this.set_lineWidth(lineWidth_r);
    }
    //============================================================================
    //============================================================================
    /**
     * Description placeholder
     *
     * @param {number} centerX
     * @param {number} centerY
     * @param {number} radius
     * @param {number} angle
     * @param {number} lineWidth
     * @param {string} color
     */
    drawCreaturesCircle(centerX, centerY, radius, angle, lineWidth, color) {
        let style_r = this.get_fillStyle();
        let lineWidth_r = this.get_lineWidth();
        this.set_lineWidth(lineWidth);
        this.setColor(color);
        this.drawCreaturesCircle_(centerX, centerY, radius, angle);
        // restore
        this.set_fillStyle(style_r);
        this.set_strokeStyle(style_r);
        this.set_lineWidth(lineWidth_r);
    }
} //HTML5_Canvas_primitive
/**
 * Description placeholder
 *
 * @type {Html5CanvasPrimitive_C}
 */
let html5CanvasPrimitive_R = new Html5CanvasPrimitive_C();
html5CanvasPrimitive_R.iniM();
export { html5CanvasPrimitive_R, Html5CanvasPrimitive_C };
if (global_R.print_module_start_finish)
    console.log('3_html5_canvas_primitive.js -> module finish');
html5CanvasPrimitive_R.isOk = "OK"; //
