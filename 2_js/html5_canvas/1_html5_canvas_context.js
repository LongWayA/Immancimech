// Copyright (c) 2024, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -25.11.2023-24.02m.2024-
//
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
    console.log('1_html5_canvas_context.js -> module start');
class Html5CanvasContext_C {
    NAME = "CanvasContext_C";
    isOk = "";
    // "2d" создаем объекта CanvasRenderingContext2D,
    //  представляющий двумерный контекст.
    //const idCanvas : HTMLElement = <HTMLElement>document.getElementById('game-canvas');
    idCanvas = document.getElementById('game-canvas');
    contextCanvas = this.idCanvas.getContext('2d');
    //=============================================================================
    constructor() {
    }
    //============================================================================= 
    //=============================================================================
    iniM() {
        //console.log("Global.ini -> инициализация пройдена ");
    }
    ;
    //=============================================================================
    //=============================================================================
    startM() {
    }
    ;
    //=============================================================================
    // ALL 
    set_fillStyle(_color) {
        this.contextCanvas.fillStyle = _color;
    }
    ;
    get_fillStyle() {
        return this.contextCanvas.fillStyle;
    }
    ;
    set_strokeStyle(_color) {
        this.contextCanvas.strokeStyle = _color;
    }
    ;
    // get_strokeStyle?
    set_lineWidth(_lineWidth) {
        this.contextCanvas.lineWidth = _lineWidth;
    }
    ;
    get_lineWidth() {
        return this.contextCanvas.lineWidth;
    }
    ;
    // ------------------------------------------------------------------------------------------------
    // TEXT 
    set_font(_font) {
        this.contextCanvas.font = _font;
    }
    ;
    get_font() {
        return this.contextCanvas.font;
    }
    ;
    set_textBaseline(_textBaseline) {
        this.contextCanvas.textBaseline = _textBaseline;
    }
    ;
    fillText(_text, _left, _top) {
        this.contextCanvas.fillText(_text, _left, _top);
    }
    ;
    strokeText(_text, _left, _top) {
        this.contextCanvas.strokeText(_text, _left, _top);
    }
    ;
    // ------------------------------------------------------------------------------------------------
    // PRIMITIVE 
    clearRect(_left, _top, _width, _height) {
        this.contextCanvas.clearRect(_left, _top, _width, _height);
    }
    ;
    fillRect(_left, _top, _width, _height) {
        this.contextCanvas.fillRect(_left, _top, _width, _height);
    }
    ;
    strokeRect(_left, _top, _width, _height) {
        //console.log("strokeRect " + " _left = " + _left + " _top = " + _top + " _width = " + _width + " _height = " + _height);
        this.contextCanvas.strokeRect(_left, _top, _width, _height);
    }
    ;
    circle(_centerX, _centerY, _radius, _startAngle, _endAngle, _clockwise) {
        this.contextCanvas.beginPath();
        this.contextCanvas.arc(_centerX, _centerY, _radius, _startAngle, _endAngle, _clockwise);
        this.contextCanvas.closePath();
        this.contextCanvas.stroke();
    }
    ;
    drawCreaturesCircle(_centerX, _centerY, _radius, _angle) {
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
    ;
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
    ;
    // ------------------------------------------------------------------------------------------------
    // IMAGE 
    drawImage(_image, _left, _top) {
        this.contextCanvas.drawImage(_image, _left, _top);
    }
    ;
    drawImage_w_h(_image, _left, _top, _width, _height) {
        this.contextCanvas.drawImage(_image, _left, _top, _width, _height);
    }
    ;
    scale() {
        this.contextCanvas.scale(-1, 1);
    }
    ;
    // ------------------------------------------------------------------------------------------------
    // MOUSE
    // ------------------------------------------------------------------------------------------------
    // UTILE
    get_widthCanvas() {
        //console.log("this.contextCanvas.width = " + idCanvas.width);
        return this.idCanvas.width;
    }
    ;
    get_heightCanvas() {
        //console.log("this.contextCanvas.height = " + idCanvas.height);
        return this.idCanvas.height;
    }
    ;
}
;
let html5CanvasContext_R = new Html5CanvasContext_C();
html5CanvasContext_R.iniM();
//Global.testLoading('1_HTML5_Canvas_context.js');
html5CanvasContext_R.isOk = "OK"; //
export { html5CanvasContext_R, Html5CanvasContext_C };
if (global_R.print_module_start_finish)
    console.log('1_html5_canvas_context.js -> module  finish');
