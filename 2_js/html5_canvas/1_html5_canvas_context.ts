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

if (global_R.print_module_start_finish) console.log('1_html5_canvas_context.js -> module start');




class Html5CanvasContext_C {

    NAME: string = "CanvasContext_C";
    isOk: string = "";

    // "2d" создаем объекта CanvasRenderingContext2D,
    //  представляющий двумерный контекст.
    //const idCanvas : HTMLElement = <HTMLElement>document.getElementById('game-canvas');
    idCanvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('game-canvas');

    contextCanvas: CanvasRenderingContext2D = <CanvasRenderingContext2D>this.idCanvas.getContext('2d');

    //=============================================================================
    constructor() {

    }
    //============================================================================= 

    //=============================================================================
    iniM(): void {
        //console.log("Global.ini -> инициализация пройдена ");
    };
    //=============================================================================
    //=============================================================================
    startM(): void {
    };
    //=============================================================================

    // ALL 
    set_fillStyle(_color: string): void {
        this.contextCanvas.fillStyle = _color;
    };

    get_fillStyle(): string {
        return <string>this.contextCanvas.fillStyle;
    };

    set_strokeStyle(_color: string): void {
        this.contextCanvas.strokeStyle = _color;
    };

    // get_strokeStyle?
    set_lineWidth(_lineWidth: number): void {
        this.contextCanvas.lineWidth = _lineWidth;
    };

    get_lineWidth(): number {
        return this.contextCanvas.lineWidth;
    };

    // ------------------------------------------------------------------------------------------------
    // TEXT 
    set_font(_font: string): void {
        this.contextCanvas.font = _font;
    };

    get_font(): string {
        return this.contextCanvas.font;
    };

    set_textBaseline(_textBaseline: CanvasTextBaseline): void {
        this.contextCanvas.textBaseline = _textBaseline;
    };

    fillText(_text: string, _left: number, _top: number): void {
        this.contextCanvas.fillText(_text, _left, _top);
    };

    strokeText(_text: string, _left: number, _top: number): void {
        this.contextCanvas.strokeText(_text, _left, _top);
    };

    // ------------------------------------------------------------------------------------------------
    // PRIMITIVE 
    clearRect(_left: number, _top: number, _width: number, _height: number): void {
        this.contextCanvas.clearRect(_left, _top, _width, _height);
    };

    fillRect(_left: number, _top: number, _width: number, _height: number): void {
        this.contextCanvas.fillRect(_left, _top, _width, _height);
    };
    strokeRect(_left: number, _top: number, _width: number, _height: number): void {
        //console.log("strokeRect " + " _left = " + _left + " _top = " + _top + " _width = " + _width + " _height = " + _height);
        this.contextCanvas.strokeRect(_left, _top, _width, _height);
    };
    circle(_centerX: number, _centerY: number, _radius: number, _startAngle: number
        , _endAngle: number, _clockwise: boolean): void {
        this.contextCanvas.beginPath();
        this.contextCanvas.arc(_centerX, _centerY, _radius, _startAngle, _endAngle, _clockwise);
        this.contextCanvas.closePath();
        this.contextCanvas.stroke();
    };
    drawCreaturesCircle(_centerX: number, _centerY: number, _radius: number, _angle: number): void{
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
    };

    drawSmile(): void {
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
    };

    // ------------------------------------------------------------------------------------------------
    // IMAGE 
    drawImage(_image: HTMLImageElement | HTMLCanvasElement, _left: number, _top: number): void {
        this.contextCanvas.drawImage(_image, _left, _top);
    };

    drawImage_w_h(_image: HTMLImageElement | HTMLCanvasElement, _left: number, _top: number,
        _width: number, _height: number): void {
        this.contextCanvas.drawImage(_image, _left, _top, _width, _height);
    };

    scale(): void {
        this.contextCanvas.scale(-1, 1);
    };

    // ------------------------------------------------------------------------------------------------
    // MOUSE

    // ------------------------------------------------------------------------------------------------
    // UTILE
    get_widthCanvas(): number {
        //console.log("this.contextCanvas.width = " + idCanvas.width);

        return this.idCanvas.width;
    };
    get_heightCanvas(): number {
        //console.log("this.contextCanvas.height = " + idCanvas.height);

        return this.idCanvas.height;
    };

};

let html5CanvasContext_R = new Html5CanvasContext_C();

html5CanvasContext_R.iniM();

//Global.testLoading('1_HTML5_Canvas_context.js');

html5CanvasContext_R.isOk = "OK"; //

export { html5CanvasContext_R, Html5CanvasContext_C };


if (global_R.print_module_start_finish) console.log('1_html5_canvas_context.js -> module  finish');