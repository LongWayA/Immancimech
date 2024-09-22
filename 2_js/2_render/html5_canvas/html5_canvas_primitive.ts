// @ts-check
/** 
 * @module html5_canvas_primitive
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

if (global_R.print_module_start_finish) console.log('3_html5_canvas_primitive.js -> module start');


// 
class Html5CanvasPrimitive_C {

    public NAME: string = "html5CanvasPrimitive_R";
    public isOk: string = "";

// "2d" создаем объекта CanvasRenderingContext2D,
    //  представляющий двумерный контекст.
    //const idCanvas : HTMLElement = <HTMLElement>document.getElementById('game-canvas');
    // @ts-ignore
    public idCanvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('game-canvas');//private 

    // @ts-ignore
    private contextCanvas: CanvasRenderingContext2D = <CanvasRenderingContext2D>this.idCanvas.getContext('2d');

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

    set_fillStyle(color: string): void {
        this.contextCanvas.fillStyle = color;
    }

    get_fillStyle(): string {
        // @ts-ignore
        return <string>this.contextCanvas.fillStyle;
    }

    set_strokeStyle(_color: string): void {
        this.contextCanvas.strokeStyle = _color;
    }

    set_lineWidth(_lineWidth: number): void {
        this.contextCanvas.lineWidth = _lineWidth;
    }

    get_lineWidth(): number {
        return this.contextCanvas.lineWidth;
    }

    clearRect_(left: number, top: number, width: number, height: number): void {
        this.contextCanvas.clearRect(left, top, width, height);
    }

    fillRect(left: number, top: number, width: number, height: number): void {
        this.contextCanvas.fillRect(left, top, width, height);
    }

    strokeRect(left: number, top: number, width: number, height: number): void {
        //console.log("strokeRect " + " _left = " + _left + " _top = " + _top + " _width = " + _width + " _height = " + _height);
        this.contextCanvas.strokeRect(left, top, width, height);
    }

    circle(centerX: number, centerY: number, radius: number, startAngle: number
        , endAngle: number, clockwise: boolean): void {
        this.contextCanvas.beginPath();
        this.contextCanvas.arc(centerX, centerY, radius, startAngle, endAngle, clockwise);
        this.contextCanvas.closePath();
        this.contextCanvas.stroke();
    }

    drawCreaturesCircle_(centerX: number, centerY: number, radius: number, angle: number): void{
        let p = 2;
        let x = radius * Math.cos(angle) - 0 * Math.sin(angle);
        let y = radius * Math.sin(angle) + 0 * Math.cos(angle);
        x = x + centerX;
        y = y + centerY;
        //console.log("HTML5_Canvas_API_1.circle -> _centerX = " + _centerX + " _centerY = " + _centerY +
        //" _radius = " + _radius + " _angle = " + _angle + " x = " + x + " y = " + y);
        this.contextCanvas.strokeRect(centerX, centerY, p, p);
        this.contextCanvas.strokeRect(x, y, p, p);
        this.contextCanvas.beginPath();
        this.contextCanvas.moveTo(x, y);
        this.contextCanvas.lineTo(centerX, centerY);
        this.contextCanvas.closePath();
        this.contextCanvas.stroke();
        this.contextCanvas.beginPath();
        this.contextCanvas.arc(centerX, centerY, radius, 0, 2 * Math.PI, true);
        this.contextCanvas.closePath();
        this.contextCanvas.stroke();
    }

    /** Description placeholder */
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
    }

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
        }
        this.set_fillStyle(style);
        this.set_strokeStyle(style);
    }
    //============================================================================
    
    //------------------------------------------------------------------------------------------------------------------
    // geometric primitive (or prim)
    //============================================================================
    clearRect(left: number, top: number, width: number, height: number): void {
        this.clearRect_(left, top, width, height);
    }
    //============================================================================
    //============================================================================
    drawRect(left: number, top: number, width: number, height: number,
        lineWidth: number, color: string, fillYes: number): void {
        let style_r = this.get_fillStyle();
        let lineWidth_r = this.get_lineWidth();
        this.set_lineWidth(lineWidth);
        this.setColor(color);
        if (fillYes == 1) {
            this.fillRect(left, top, width, height);
        } else {
            this.strokeRect(left, top, width, height);
        }
        // restore
        this.set_fillStyle(style_r);
        this.set_strokeStyle(style_r);
        this.set_lineWidth(lineWidth_r);
    }
    //============================================================================
    //============================================================================
    drawCircle(centerX: number, centerY: number, radius: number, sAngle: number,
        eAngle: number, clockwise: boolean, lineWidth: number, color: string): void {
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
    drawCreaturesCircle(centerX: number, centerY: number, radius: number
        , angle: number, lineWidth: number, color: string): void {

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
    //============================================================================
} //HTML5_Canvas_primitive

let html5CanvasPrimitive_R = new Html5CanvasPrimitive_C()

html5CanvasPrimitive_R.iniM();

export { html5CanvasPrimitive_R, Html5CanvasPrimitive_C};

if (global_R.print_module_start_finish) console.log('3_html5_canvas_primitive.js -> module finish');

html5CanvasPrimitive_R.isOk = "OK"; //