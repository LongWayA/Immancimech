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
import { global_R } from '../global/global.js';

if (global_R.print_module_start_finish) console.log('2_html5_canvas_text.js -> module start');

import { html5CanvasContext_R } from '../html5_canvas/1_html5_canvas_context.js';

// 
class Html5CanvasText_C {
    NAME: string = "html5CanvasText_R";
    isOk: string = "";
    ITALIC_20PX_SANS_SERIF: string = 'italic 20px sans-serif';
    ITALIC_15PT_ARIAL: string = 'italic 15pt Arial';
    ITALIC_30PT_ARIAL: string = 'italic 30pt Arial';
    BOLD_30PX_SANS_SERIF: string = 'bold 30px sans-serif';
    WHITE: string = 'white';
    BLACK: string = 'black';
    RED: string = 'red';
    GREEN: string = 'green';
    BLUE: string = 'blue';
    LINE_WIDTH_1: number = 1;
    LINE_WIDTH_2: number = 2;
    LINE_WIDTH_3: number = 3;
    LINE_WIDTH_4: number = 4;
    load: number = 0;

    //=============================================================================
    constructor() {

    }
    //=============================================================================

    //=============================================================================
    iniM(): void {
        // определяем текст для тестового выода информации на экран, а также
        // когда надо напечатать до того как мы инициализровали текстовый объект
        html5CanvasContext_R.set_fillStyle('#0000ff');
        html5CanvasContext_R.set_strokeStyle('#0000ff');
        //set_font(this.ITALIC_30PT_ARIAL);
        html5CanvasContext_R.set_lineWidth(this.LINE_WIDTH_1);
        // шрифт для тестовой печати на экране
        html5CanvasContext_R.set_font(this.ITALIC_15PT_ARIAL);
        //fillText ('LOAD REC', 10, 10);
    };
    //=============================================================================
    //=============================================================================
    startM(): void {
    };
    //=============================================================================
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
        };
        html5CanvasContext_R.set_fillStyle(style);
        html5CanvasContext_R.set_strokeStyle(style);
    };
    //============================================================================
    //============================================================================
    setFont(font: string): void {
        html5CanvasContext_R.set_textBaseline('top');
        switch (font) {
            case this.ITALIC_20PX_SANS_SERIF:
                html5CanvasContext_R.set_font(font);
                break;
            case this.ITALIC_30PT_ARIAL:
                html5CanvasContext_R.set_font(font);
                break;
            case this.BOLD_30PX_SANS_SERIF:
                html5CanvasContext_R.set_font(font);
                break;
        }
        ;
    };
    //============================================================================
    //============================================================================
    // возможно установить:
    // HTML5_Canvas_text_2.ITALIC_20PX_SANS_SERIF, HTML5_Canvas_text_2.ITALIC_30PT_ARIAL, HTML5_Canvas_text_2.BOLD_30PX_SANS_SERIF
    //HTML5_Canvas_text_2.WHITE, HTML5_Canvas_text_2.BLACK, HTML5_Canvas_text_2.RED, HTML5_Canvas_text_2.GREEN, HTML5_Canvas_text_2.BLUE
    // HTML5_Canvas_text_2.Text.drawText("text", 10, 5, HTML5_Canvas_text_2.ITALIC_30PT_ARIAL, HTML5_Canvas_text_2.GREEN, 1);
    drawText(text: string, left: number, top: number, font: string, color: string, fillYes: number): void {
        let style_r = html5CanvasContext_R.get_fillStyle();
        let font_r = html5CanvasContext_R.get_font();
        this.setColor(color);
        this.setFont(font);
        if (fillYes == 1) {
            html5CanvasContext_R.fillText(text, left, top);
        }
        else {
            html5CanvasContext_R.strokeText(text, left, top);
        }
        ;
        // restore
        html5CanvasContext_R.set_fillStyle(style_r);
        html5CanvasContext_R.set_strokeStyle(style_r);
        html5CanvasContext_R.set_font(font_r);
    };
    //============================================================================
}; //HTML5_Canvas

let html5CanvasText_R = new Html5CanvasText_C();

html5CanvasText_R.iniM();
//Global.testLoading('2_html5CanvasText_R.js');



export { html5CanvasText_R, Html5CanvasText_C };

if (global_R.print_module_start_finish) console.log('2_html5_canvas_text.js -> module finish');

html5CanvasText_R.isOk = "OK"; //