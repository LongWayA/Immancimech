// @ts-check
/**
 * @module html5_canvas_text
 * @author ABr75
 * @copyright Copyright (c) 2025, ABr75 and/or its affiliates. All rights reserved.
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
import { global_R } from '../../global/global.js';
if (global_R.print_module_start_finish)
    console.log('2_html5_canvas_text.js -> module start');
// 
/**
 * Description placeholder
 *
 * @class Html5CanvasText_C
 */
class Html5CanvasText_C {
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    NAME = "html5CanvasText_R";
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
    // @ts-ignore
    idCanvas = document.getElementById('game-canvas'); //private 
    /**
     * Description placeholder
     *
     * @private
     * @type {CanvasRenderingContext2D}
     */
    // @ts-ignore
    contextCanvas = this.idCanvas.getContext('2d');
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    ITALIC_20PX_SANS_SERIF = 'italic 20px sans-serif';
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    ITALIC_15PT_ARIAL = 'italic 15pt Arial';
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    ITALIC_30PT_ARIAL = 'italic 30pt Arial';
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    BOLD_30PX_SANS_SERIF = 'bold 30px sans-serif';
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
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    LINE_WIDTH_1 = 1;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    LINE_WIDTH_2 = 2;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    LINE_WIDTH_3 = 3;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    LINE_WIDTH_4 = 4;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    load = 0;
    //=============================================================================
    /**
     * Creates an instance of Html5CanvasText_C.
     *
     * @constructor
     */
    constructor() {
    }
    //=============================================================================
    //=============================================================================
    /** Description placeholder */
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
        // @ts-ignore
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
     * @param {string} _font
     */
    set_font(_font) {
        this.contextCanvas.font = _font;
    }
    /**
     * Description placeholder
     *
     * @returns {string}
     */
    get_font() {
        return this.contextCanvas.font;
    }
    /**
     * Description placeholder
     *
     * @param {CanvasTextBaseline} _textBaseline
     */
    set_textBaseline(_textBaseline) {
        this.contextCanvas.textBaseline = _textBaseline;
    }
    /**
     * Description placeholder
     *
     * @param {string} _text
     * @param {number} _left
     * @param {number} _top
     */
    fillText(_text, _left, _top) {
        this.contextCanvas.fillText(_text, _left, _top);
    }
    /**
     * Description placeholder
     *
     * @param {string} _text
     * @param {number} _left
     * @param {number} _top
     */
    strokeText(_text, _left, _top) {
        this.contextCanvas.strokeText(_text, _left, _top);
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
    //============================================================================
    /**
     * Description placeholder
     *
     * @param {string} font
     */
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
    /**
     * Description placeholder
     *
     * @param {string} text
     * @param {number} left
     * @param {number} top
     * @param {string} font
     * @param {string} color
     * @param {number} fillYes
     */
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
/**
 * Description placeholder
 *
 * @type {Html5CanvasText_C}
 */
let html5CanvasText_R = new Html5CanvasText_C();
html5CanvasText_R.iniM();
export { html5CanvasText_R, Html5CanvasText_C };
if (global_R.print_module_start_finish)
    console.log('2_html5_canvas_text.js -> module finish');
html5CanvasText_R.isOk = "OK"; //
