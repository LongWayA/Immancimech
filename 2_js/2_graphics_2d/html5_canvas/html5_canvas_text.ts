/** 
 * 2_render/html5_canvas
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
if (global_R.print_module_start_finish) console.log('2_html5_canvas_text.js -> module start');


// 
class Html5CanvasText_C {

    public static NAME: string = "html5CanvasText_R";
    public isOk: string = "";

    // "2d" создаем объекта CanvasRenderingContext2D,
    //  представляющий двумерный контекст.
    public idCanvas : HTMLCanvasElement | null = null;
    public contextCanvas : CanvasRenderingContext2D | null =  null;
    //Цвет
    public static WHITE: string = 'white';
    public static BLACK: string = 'black';
    public static RED: string = 'red';
    public static GREEN: string = 'green';
    public static BLUE: string = 'blue';
    //Шрифт
    public static ITALIC_20PX_SANS_SERIF: string = 'italic 20px sans-serif';
    public static ITALIC_15PT_ARIAL: string = 'italic 15pt Arial';
    public static ITALIC_30PT_ARIAL: string = 'italic 30pt Arial';
    public static BOLD_30PX_SANS_SERIF: string = 'bold 30px sans-serif';
    //Толщина линии
    public static LINE_WIDTH_1: number = 1;
    public static LINE_WIDTH_2: number = 2;
    public static LINE_WIDTH_3: number = 3;
    public static LINE_WIDTH_4: number = 4;
    public load: number = 0;

    //=============================================================================
    constructor() {
    }
    //=============================================================================

    //=============================================================================
    iniM(): void {
    }
    //=============================================================================
    //=============================================================================
    startM(idCanvas : HTMLCanvasElement, contextCanvas : CanvasRenderingContext2D | null): void {

        this.idCanvas = idCanvas;
        this.contextCanvas = contextCanvas;

        // определяем текст для тестового выода информации на экран, а также
        // когда надо напечатать до того как мы инициализровали текстовый объект
        this.set_fillStyle('#0000ff');
        this.set_strokeStyle('#0000ff');
        //set_font(this.ITALIC_30PT_ARIAL);
        this.set_lineWidth(Html5CanvasText_C.LINE_WIDTH_1);
        // шрифт для тестовой печати на экране
        this.set_font(Html5CanvasText_C.ITALIC_15PT_ARIAL);
        //fillText ('LOAD REC', 10, 10);
    }
    //=============================================================================
    set_fillStyle(_color: string): void {
        (<CanvasRenderingContext2D>this.contextCanvas).fillStyle = _color;
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

    set_font(_font: string): void {
        (<CanvasRenderingContext2D>this.contextCanvas).font = _font;
    }

    get_font(): string {
        return (<CanvasRenderingContext2D>this.contextCanvas).font;
    }

    set_textBaseline(_textBaseline: CanvasTextBaseline): void {
        (<CanvasRenderingContext2D>this.contextCanvas).textBaseline = _textBaseline;
    }

    fillText(_text: string, _left: number, _top: number): void {
        (<CanvasRenderingContext2D>this.contextCanvas).fillText(_text, _left, _top);
    }

    strokeText(_text: string, _left: number, _top: number): void {
        (<CanvasRenderingContext2D>this.contextCanvas).strokeText(_text, _left, _top);
    }

    //=============================================================================
    setColor(color: string): void {
        let style = '#ffffff';
        switch (color) {
            case Html5CanvasText_C.WHITE:
                style = '#ffffff';
                break;
            case Html5CanvasText_C.BLACK:
                style = '#000000';
                break;
            case Html5CanvasText_C.RED:
                style = '#ff0000';
                break;
            case Html5CanvasText_C.GREEN:
                style = '#008000';
                break;
            case Html5CanvasText_C.BLUE:
                style = '#0000ff';
                break;
        }
        this.set_fillStyle(style);
        this.set_strokeStyle(style);
    }
    //============================================================================
    //============================================================================
    setFont(font: string): void {
        this.set_textBaseline('top');
        switch (font) {
            case Html5CanvasText_C.ITALIC_20PX_SANS_SERIF:
                this.set_font(font);
                break;
            case Html5CanvasText_C.ITALIC_30PT_ARIAL:
                this.set_font(font);
                break;
            case Html5CanvasText_C.BOLD_30PX_SANS_SERIF:
                this.set_font(font);
                break;
        }
    }
    //============================================================================
    //============================================================================
    // возможно установить:
    // HTML5_Canvas_text_2.ITALIC_20PX_SANS_SERIF, HTML5_Canvas_text_2.ITALIC_30PT_ARIAL, HTML5_Canvas_text_2.BOLD_30PX_SANS_SERIF
    //HTML5_Canvas_text_2.WHITE, HTML5_Canvas_text_2.BLACK, HTML5_Canvas_text_2.RED, HTML5_Canvas_text_2.GREEN, HTML5_Canvas_text_2.BLUE
    // HTML5_Canvas_text_2.Text.drawText("text", 10, 5, HTML5_Canvas_text_2.ITALIC_30PT_ARIAL, HTML5_Canvas_text_2.GREEN, 1);
    drawText(text: string, left: number, top: number, font: string, color: string, fillYes: number): void {
        let style_r = this.get_fillStyle();
        let font_r = this.get_font();
        this.setColor(color);
        this.setFont(font);
        if (fillYes == 1) {
            this.fillText(text, left, top);
        } else {
            this.strokeText(text, left, top);
        }
        // restore
        this.set_fillStyle(style_r);
        this.set_strokeStyle(style_r);
        this.set_font(font_r);
    }
    //============================================================================
} //HTML5_Canvas

let html5CanvasText_R = new Html5CanvasText_C();

html5CanvasText_R.iniM();

export { html5CanvasText_R, Html5CanvasText_C };

if (global_R.print_module_start_finish) console.log('2_html5_canvas_text.js -> module finish');

html5CanvasText_R.isOk = "OK"; //