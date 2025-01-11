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
        (this.contextCanvas as CanvasRenderingContext2D).fillStyle = color;
    }

    get_fillStyle(): string {
        
        return <string>(this.contextCanvas as CanvasRenderingContext2D).fillStyle;
    }

    set_strokeStyle(_color: string): void {
        (this.contextCanvas as CanvasRenderingContext2D).strokeStyle = _color;
    }

    set_lineWidth(_lineWidth: number): void {
        (this.contextCanvas as CanvasRenderingContext2D).lineWidth = _lineWidth;
    }

    get_lineWidth(): number {
        return (this.contextCanvas as CanvasRenderingContext2D).lineWidth;
    }

    clearRect_(left: number, top: number, width: number, height: number): void {
        (this.contextCanvas as CanvasRenderingContext2D).clearRect(left, top, width, height);
    }

    fillRect(left: number, top: number, width: number, height: number): void {
        (this.contextCanvas as CanvasRenderingContext2D).fillRect(left, top, width, height);
    }

    strokeRect(left: number, top: number, width: number, height: number): void {
        //console.log("strokeRect " + " _left = " + _left + " _top = " + _top + " _width = " + _width + " _height = " + _height);
        (this.contextCanvas as CanvasRenderingContext2D).strokeRect(left, top, width, height);
    }

    circle(centerX: number, centerY: number, radius: number, startAngle: number
        , endAngle: number, clockwise: boolean): void {
        (this.contextCanvas as CanvasRenderingContext2D).beginPath();
        (this.contextCanvas as CanvasRenderingContext2D).arc(centerX, centerY, radius, startAngle, endAngle, clockwise);
        (this.contextCanvas as CanvasRenderingContext2D).closePath();
        (this.contextCanvas as CanvasRenderingContext2D).stroke();
    }

    drawCreaturesCircle_(centerX: number, centerY: number, radius: number, angle: number): void{
        let p = 2;
        let x = radius * Math.cos(angle) - 0 * Math.sin(angle);
        let y = radius * Math.sin(angle) + 0 * Math.cos(angle);
        x = x + centerX;
        y = y + centerY;
        //console.log("HTML5_Canvas_API_1.circle -> _centerX = " + _centerX + " _centerY = " + _centerY +
        //" _radius = " + _radius + " _angle = " + _angle + " x = " + x + " y = " + y);
        (this.contextCanvas as CanvasRenderingContext2D).strokeRect(centerX, centerY, p, p);
        (this.contextCanvas as CanvasRenderingContext2D).strokeRect(x, y, p, p);
        (this.contextCanvas as CanvasRenderingContext2D).beginPath();
        (this.contextCanvas as CanvasRenderingContext2D).moveTo(x, y);
        (this.contextCanvas as CanvasRenderingContext2D).lineTo(centerX, centerY);
        (this.contextCanvas as CanvasRenderingContext2D).closePath();
        (this.contextCanvas as CanvasRenderingContext2D).stroke();
        (this.contextCanvas as CanvasRenderingContext2D).beginPath();
        (this.contextCanvas as CanvasRenderingContext2D).arc(centerX, centerY, radius, 0, 2 * Math.PI, true);
        (this.contextCanvas as CanvasRenderingContext2D).closePath();
        (this.contextCanvas as CanvasRenderingContext2D).stroke();
    }

    /** Description placeholder */
    drawSmile(): void {
        //-------------------------
        (this.contextCanvas as CanvasRenderingContext2D).beginPath();
        (this.contextCanvas as CanvasRenderingContext2D).fill();
        (this.contextCanvas as CanvasRenderingContext2D).fillStyle = "yellow";
        (this.contextCanvas as CanvasRenderingContext2D).beginPath();
        (this.contextCanvas as CanvasRenderingContext2D).arc(160, 130, 100, 0, 2 * Math.PI);
        (this.contextCanvas as CanvasRenderingContext2D).fill();
        // рот
        (this.contextCanvas as CanvasRenderingContext2D).beginPath();
        (this.contextCanvas as CanvasRenderingContext2D).moveTo(100, 160);
        (this.contextCanvas as CanvasRenderingContext2D).quadraticCurveTo(160, 250, 220, 160);
        (this.contextCanvas as CanvasRenderingContext2D).closePath();
        (this.contextCanvas as CanvasRenderingContext2D).fillStyle = "red";
        (this.contextCanvas as CanvasRenderingContext2D).fill();
        (this.contextCanvas as CanvasRenderingContext2D).lineWidth = 2;
        (this.contextCanvas as CanvasRenderingContext2D).strokeStyle = "black";
        (this.contextCanvas as CanvasRenderingContext2D).stroke();
        // зубы
        (this.contextCanvas as CanvasRenderingContext2D).fillStyle = "#FFFFFF";
        (this.contextCanvas as CanvasRenderingContext2D).fillRect(140, 160, 15, 15);
        (this.contextCanvas as CanvasRenderingContext2D).fillRect(170, 160, 15, 15);
        //глаза
        (this.contextCanvas as CanvasRenderingContext2D).beginPath();
        (this.contextCanvas as CanvasRenderingContext2D).arc(130, 90, 20, 0, 2 * Math.PI);
        (this.contextCanvas as CanvasRenderingContext2D).fillStyle = "#333333";
        (this.contextCanvas as CanvasRenderingContext2D).fill();
        (this.contextCanvas as CanvasRenderingContext2D).closePath();
        (this.contextCanvas as CanvasRenderingContext2D).beginPath();
        (this.contextCanvas as CanvasRenderingContext2D).arc(190, 90, 20, 0, 2 * Math.PI);
        (this.contextCanvas as CanvasRenderingContext2D).fillStyle = "#333333";
        (this.contextCanvas as CanvasRenderingContext2D).fill();
        (this.contextCanvas as CanvasRenderingContext2D).closePath();
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

export { Html5CanvasPrimitive_C};

if (global_R.print_module_start_finish) console.log('3_html5_canvas_primitive.js -> module finish');