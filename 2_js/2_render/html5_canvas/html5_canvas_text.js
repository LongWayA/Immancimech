// @ts-check
/**
 * @module html5_canvas_text
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
if (global_R.print_module_start_finish)
    console.log('2_html5_canvas_text.js -> module start');
// 
class Html5CanvasText_C {
    NAME = "html5CanvasText_R";
    isOk = "";
    // "2d" создаем объекта CanvasRenderingContext2D,
    //  представляющий двумерный контекст.
    //const idCanvas : HTMLElement = <HTMLElement>document.getElementById('game-canvas');
    // @ts-ignore
    idCanvas = document.getElementById('game-canvas'); //private 
    // @ts-ignore
    contextCanvas = this.idCanvas.getContext('2d');
    ITALIC_20PX_SANS_SERIF = 'italic 20px sans-serif';
    ITALIC_15PT_ARIAL = 'italic 15pt Arial';
    ITALIC_30PT_ARIAL = 'italic 30pt Arial';
    BOLD_30PX_SANS_SERIF = 'bold 30px sans-serif';
    WHITE = 'white';
    BLACK = 'black';
    RED = 'red';
    GREEN = 'green';
    BLUE = 'blue';
    LINE_WIDTH_1 = 1;
    LINE_WIDTH_2 = 2;
    LINE_WIDTH_3 = 3;
    LINE_WIDTH_4 = 4;
    load = 0;
    //=============================================================================
    constructor() {
    }
    //=============================================================================
    //=============================================================================
    iniM() {
        // определяем текст для тестового выода информации на экран, а также
        // когда надо напечатать до того как мы инициализровали текстовый объект
        this.set_fillStyle('#0000ff');
        this.set_strokeStyle('#0000ff');
        //set_font(this.ITALIC_30PT_ARIAL);
        this.set_lineWidth(this.LINE_WIDTH_1);
        // шрифт для тестовой печати на экране
        this.set_font(this.ITALIC_15PT_ARIAL);
        //fillText ('LOAD REC', 10, 10);
    }
    //=============================================================================
    //=============================================================================
    startM() {
    }
    //=============================================================================
    set_fillStyle(_color) {
        this.contextCanvas.fillStyle = _color;
    }
    get_fillStyle() {
        // @ts-ignore
        return this.contextCanvas.fillStyle;
    }
    set_strokeStyle(_color) {
        this.contextCanvas.strokeStyle = _color;
    }
    set_lineWidth(_lineWidth) {
        this.contextCanvas.lineWidth = _lineWidth;
    }
    set_font(_font) {
        this.contextCanvas.font = _font;
    }
    get_font() {
        return this.contextCanvas.font;
    }
    set_textBaseline(_textBaseline) {
        this.contextCanvas.textBaseline = _textBaseline;
    }
    fillText(_text, _left, _top) {
        this.contextCanvas.fillText(_text, _left, _top);
    }
    strokeText(_text, _left, _top) {
        this.contextCanvas.strokeText(_text, _left, _top);
    }
    //=============================================================================
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
    //============================================================================
    setFont(font) {
        this.set_textBaseline('top');
        switch (font) {
            case this.ITALIC_20PX_SANS_SERIF:
                this.set_font(font);
                break;
            case this.ITALIC_30PT_ARIAL:
                this.set_font(font);
                break;
            case this.BOLD_30PX_SANS_SERIF:
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
    drawText(text, left, top, font, color, fillYes) {
        let style_r = this.get_fillStyle();
        let font_r = this.get_font();
        this.setColor(color);
        this.setFont(font);
        if (fillYes == 1) {
            this.fillText(text, left, top);
        }
        else {
            this.strokeText(text, left, top);
        }
        // restore
        this.set_fillStyle(style_r);
        this.set_strokeStyle(style_r);
        this.set_font(font_r);
    }
} //HTML5_Canvas
let html5CanvasText_R = new Html5CanvasText_C();
html5CanvasText_R.iniM();
export { html5CanvasText_R, Html5CanvasText_C };
if (global_R.print_module_start_finish)
    console.log('2_html5_canvas_text.js -> module finish');
html5CanvasText_R.isOk = "OK"; //
