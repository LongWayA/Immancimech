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
if (global_R.print_module_start_finish) console.log('3_html5_canvas_primitive.js -> module start');


// 
class Html5CanvasPrimitive_C {

    public static NAME: string = "html5CanvasPrimitive_R";
    public isOk: string = "";

// "2d" создаем объекта CanvasRenderingContext2D,
    //  представляющий двумерный контекст.
    public idCanvas : HTMLCanvasElement | null = null;
    public contextCanvas : CanvasRenderingContext2D | null =  null;
    // Цвет
    public static WHITE: string = 'white';
    public static BLACK: string = 'black';
    public static RED: string = 'red';
    public static GREEN: string = 'green';
    public static BLUE: string = 'blue';
    //Толщина линии
    public static LINE_WIDTH_1: number = 1;
    public static LINE_WIDTH_2: number = 2;
    public static LINE_WIDTH_3: number = 3;
    public static LINE_WIDTH_4: number = 4;


    //=============================================================================
    constructor() {
    }
    //=============================================================================

    //=============================================================================
    iniM(): void {
    }
    //============================================================================
    startM(idCanvas : HTMLCanvasElement, contextCanvas : CanvasRenderingContext2D | null): void {

        this.idCanvas = idCanvas;
        this.contextCanvas = contextCanvas;
    }
    //=============================================================================

    set_fillStyle(color: string): void {
        (<CanvasRenderingContext2D>this.contextCanvas).fillStyle = color;
    }

    get_fillStyle(): string {
        
        return <string>(<CanvasRenderingContext2D>this.contextCanvas).fillStyle;
    }

    set_strokeStyle(_color: string): void {
        (<CanvasRenderingContext2D>this.contextCanvas).strokeStyle = _color;
    }

    set_lineWidth(_lineWidth: number): void {
        (<CanvasRenderingContext2D>this.contextCanvas).lineWidth = _lineWidth;
    }

    get_lineWidth(): number {
        return (<CanvasRenderingContext2D>this.contextCanvas).lineWidth;
    }

    clearRect_(left: number, top: number, width: number, height: number): void {
        (<CanvasRenderingContext2D>this.contextCanvas).clearRect(left, top, width, height);
    }

    fillRect(left: number, top: number, width: number, height: number): void {
        (<CanvasRenderingContext2D>this.contextCanvas).fillRect(left, top, width, height);
    }

    strokeRect(left: number, top: number, width: number, height: number): void {
        //console.log("strokeRect " + " _left = " + _left + " _top = " + _top + " _width = " + _width + " _height = " + _height);
        (<CanvasRenderingContext2D>this.contextCanvas).strokeRect(left, top, width, height);
    }

    circle(centerX: number, centerY: number, radius: number, startAngle: number
        , endAngle: number, clockwise: boolean): void {
        (<CanvasRenderingContext2D>this.contextCanvas).beginPath();
        (<CanvasRenderingContext2D>this.contextCanvas).arc(centerX, centerY, radius, startAngle, endAngle, clockwise);
        (<CanvasRenderingContext2D>this.contextCanvas).closePath();
        (<CanvasRenderingContext2D>this.contextCanvas).stroke();
    }

    drawCreaturesCircle_(centerX: number, centerY: number, radius: number, angle: number): void{
        let p = 2;
        let x = radius * Math.cos(angle) - 0 * Math.sin(angle);
        let y = radius * Math.sin(angle) + 0 * Math.cos(angle);
        x = x + centerX;
        y = y + centerY;
        //console.log("HTML5_Canvas_API_1.circle -> _centerX = " + _centerX + " _centerY = " + _centerY +
        //" _radius = " + _radius + " _angle = " + _angle + " x = " + x + " y = " + y);
        (<CanvasRenderingContext2D>this.contextCanvas).strokeRect(centerX, centerY, p, p);
        (<CanvasRenderingContext2D>this.contextCanvas).strokeRect(x, y, p, p);
        (<CanvasRenderingContext2D>this.contextCanvas).beginPath();
        (<CanvasRenderingContext2D>this.contextCanvas).moveTo(x, y);
        (<CanvasRenderingContext2D>this.contextCanvas).lineTo(centerX, centerY);
        (<CanvasRenderingContext2D>this.contextCanvas).closePath();
        (<CanvasRenderingContext2D>this.contextCanvas).stroke();
        (<CanvasRenderingContext2D>this.contextCanvas).beginPath();
        (<CanvasRenderingContext2D>this.contextCanvas).arc(centerX, centerY, radius, 0, 2 * Math.PI, true);
        (<CanvasRenderingContext2D>this.contextCanvas).closePath();
        (<CanvasRenderingContext2D>this.contextCanvas).stroke();
    }

    /** Description placeholder */
    drawSmile(): void {
        //-------------------------
        (<CanvasRenderingContext2D>this.contextCanvas).beginPath();
        (<CanvasRenderingContext2D>this.contextCanvas).fill();
        (<CanvasRenderingContext2D>this.contextCanvas).fillStyle = "yellow";
        (<CanvasRenderingContext2D>this.contextCanvas).beginPath();
        (<CanvasRenderingContext2D>this.contextCanvas).arc(160, 130, 100, 0, 2 * Math.PI);
        (<CanvasRenderingContext2D>this.contextCanvas).fill();
        // рот
        (<CanvasRenderingContext2D>this.contextCanvas).beginPath();
        (<CanvasRenderingContext2D>this.contextCanvas).moveTo(100, 160);
        (<CanvasRenderingContext2D>this.contextCanvas).quadraticCurveTo(160, 250, 220, 160);
        (<CanvasRenderingContext2D>this.contextCanvas).closePath();
        (<CanvasRenderingContext2D>this.contextCanvas).fillStyle = "red";
        (<CanvasRenderingContext2D>this.contextCanvas).fill();
        (<CanvasRenderingContext2D>this.contextCanvas).lineWidth = 2;
        (<CanvasRenderingContext2D>this.contextCanvas).strokeStyle = "black";
        (<CanvasRenderingContext2D>this.contextCanvas).stroke();
        // зубы
        (<CanvasRenderingContext2D>this.contextCanvas).fillStyle = "#FFFFFF";
        (<CanvasRenderingContext2D>this.contextCanvas).fillRect(140, 160, 15, 15);
        (<CanvasRenderingContext2D>this.contextCanvas).fillRect(170, 160, 15, 15);
        //глаза
        (<CanvasRenderingContext2D>this.contextCanvas).beginPath();
        (<CanvasRenderingContext2D>this.contextCanvas).arc(130, 90, 20, 0, 2 * Math.PI);
        (<CanvasRenderingContext2D>this.contextCanvas).fillStyle = "#333333";
        (<CanvasRenderingContext2D>this.contextCanvas).fill();
        (<CanvasRenderingContext2D>this.contextCanvas).closePath();
        (<CanvasRenderingContext2D>this.contextCanvas).beginPath();
        (<CanvasRenderingContext2D>this.contextCanvas).arc(190, 90, 20, 0, 2 * Math.PI);
        (<CanvasRenderingContext2D>this.contextCanvas).fillStyle = "#333333";
        (<CanvasRenderingContext2D>this.contextCanvas).fill();
        (<CanvasRenderingContext2D>this.contextCanvas).closePath();
        //---------------------------------
    }

    //=============================================================================
    setColor(color: string): void {
        let style = '#ffffff';
        switch (color) {
            case Html5CanvasPrimitive_C.WHITE:
                style = '#ffffff';
                break;
            case Html5CanvasPrimitive_C.BLACK:
                style = '#000000';
                break;
            case Html5CanvasPrimitive_C.RED:
                style = '#ff0000';
                break;
            case Html5CanvasPrimitive_C.GREEN:
                style = '#008000';
                break;
            case Html5CanvasPrimitive_C.BLUE:
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