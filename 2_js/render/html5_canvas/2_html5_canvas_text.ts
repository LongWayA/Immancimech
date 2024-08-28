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

if (global_R.print_module_start_finish) console.log('2_html5_canvas_text.js -> module start');


// 
/**
 * Description placeholder
 *
 * @class Html5CanvasText_C
 * @typedef {Html5CanvasText_C}
 */
class Html5CanvasText_C {

    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    public NAME: string = "html5CanvasText_R";
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    public isOk: string = "";

    // "2d" создаем объекта CanvasRenderingContext2D,
    //  представляющий двумерный контекст.
    //const idCanvas : HTMLElement = <HTMLElement>document.getElementById('game-canvas');
    /**
     * Description placeholder
     *
     * @public
     * @type {HTMLCanvasElement}
     */
    public idCanvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('game-canvas');//private 

    /**
     * Description placeholder
     *
     * @private
     * @type {CanvasRenderingContext2D}
     */
    private contextCanvas: CanvasRenderingContext2D = <CanvasRenderingContext2D>this.idCanvas.getContext('2d');

    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    public ITALIC_20PX_SANS_SERIF: string = 'italic 20px sans-serif';
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    public ITALIC_15PT_ARIAL: string = 'italic 15pt Arial';
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    public ITALIC_30PT_ARIAL: string = 'italic 30pt Arial';
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    public BOLD_30PX_SANS_SERIF: string = 'bold 30px sans-serif';
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    public WHITE: string = 'white';
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    public BLACK: string = 'black';
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    public RED: string = 'red';
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    public GREEN: string = 'green';
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    public BLUE: string = 'blue';
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    public LINE_WIDTH_1: number = 1;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    public LINE_WIDTH_2: number = 2;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    public LINE_WIDTH_3: number = 3;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    public LINE_WIDTH_4: number = 4;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    public load: number = 0;

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
    iniM(): void {
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
    startM(): void {
    }
    //=============================================================================

    /**
     * Description placeholder
     *
     * @param {string} _color
     */
    set_fillStyle(_color: string): void {
        this.contextCanvas.fillStyle = _color;
    }

    /**
     * Description placeholder
     *
     * @returns {string}
     */
    get_fillStyle(): string {
        return <string>this.contextCanvas.fillStyle;
    }

    /**
     * Description placeholder
     *
     * @param {string} _color
     */
    set_strokeStyle(_color: string): void {
        this.contextCanvas.strokeStyle = _color;
    }

    /**
     * Description placeholder
     *
     * @param {number} _lineWidth
     */
    set_lineWidth(_lineWidth: number): void {
        this.contextCanvas.lineWidth = _lineWidth;
    }

    /**
     * Description placeholder
     *
     * @param {string} _font
     */
    set_font(_font: string): void {
        this.contextCanvas.font = _font;
    }

    /**
     * Description placeholder
     *
     * @returns {string}
     */
    get_font(): string {
        return this.contextCanvas.font;
    }

    /**
     * Description placeholder
     *
     * @param {CanvasTextBaseline} _textBaseline
     */
    set_textBaseline(_textBaseline: CanvasTextBaseline): void {
        this.contextCanvas.textBaseline = _textBaseline;
    }

    /**
     * Description placeholder
     *
     * @param {string} _text
     * @param {number} _left
     * @param {number} _top
     */
    fillText(_text: string, _left: number, _top: number): void {
        this.contextCanvas.fillText(_text, _left, _top);
    }

    /**
     * Description placeholder
     *
     * @param {string} _text
     * @param {number} _left
     * @param {number} _top
     */
    strokeText(_text: string, _left: number, _top: number): void {
        this.contextCanvas.strokeText(_text, _left, _top);
    }

    //=============================================================================
    /**
     * Description placeholder
     *
     * @param {string} color
     */
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
    //============================================================================
    /**
     * Description placeholder
     *
     * @param {string} font
     */
    setFont(font: string): void {
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

/**
 * Description placeholder
 *
 * @type {Html5CanvasText_C}
 */
let html5CanvasText_R = new Html5CanvasText_C();

html5CanvasText_R.iniM();

export { html5CanvasText_R, Html5CanvasText_C };

if (global_R.print_module_start_finish) console.log('2_html5_canvas_text.js -> module finish');

html5CanvasText_R.isOk = "OK"; //