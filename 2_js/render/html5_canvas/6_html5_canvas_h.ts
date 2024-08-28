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

if (global_R.print_module_start_finish) console.log('6_html5_canvas_h.js -> module start');

import { html5CanvasText_R } from '../html5_canvas/2_html5_canvas_text.js';
import { html5CanvasPrimitive_R } from '../html5_canvas/3_html5_canvas_primitive.js';
import { html5CanvasImage_R } from '../html5_canvas/4_html5_canvas_image.js';
import { html5CanvasMouseEvent_R } from '../html5_canvas/5_html5_canvas_mouse_event.js';
// 
/**
 * Description placeholder
 *
 * @class Html5Canvas_C
 * @typedef {Html5Canvas_C}
 */
class Html5Canvas_C {

    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    public NAME: string = "html5Canvas_R";
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
     * @type {number}
     */
    public width_OUT: number = 0;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    public height_OUT: number = 0;
    // Color
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
    // 
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    public ITALIC_20PX_SANS_SERIF: string = html5CanvasText_R.ITALIC_20PX_SANS_SERIF;
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    public ITALIC_15PT_ARIAL: string = html5CanvasText_R.ITALIC_15PT_ARIAL;
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    public ITALIC_30PT_ARIAL: string = html5CanvasText_R.ITALIC_30PT_ARIAL;
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    public BOLD_30PX_SANS_SERIF: string = html5CanvasText_R.BOLD_30PX_SANS_SERIF;
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

    //=============================================================================
    /**
     * Creates an instance of Html5Canvas_C.
     *
     * @constructor
     */
    constructor() {
    }
    //=============================================================================

    //=============================================================================
    /** Description placeholder */
    iniM(): void {
        this.width_OUT = this.get_widthCanvas();
        this.height_OUT = this.get_heightCanvas();
        html5CanvasText_R.startM();
        html5CanvasMouseEvent_R.startM();

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
     * @returns {number}
     */
    get_widthCanvas(): number {
        //console.log("this.contextCanvas.width = " + idCanvas.width);

        return this.idCanvas.width;
    }
    /**
     * Description placeholder
     *
     * @returns {number}
     */
    get_heightCanvas(): number {
        //console.log("this.contextCanvas.height = " + idCanvas.height);

        return this.idCanvas.height;
    }

    // TEXT
    //=============================================================================
    // Устанавливаем два параметра fillStyle, strokeStyle
    // fillStyle – для задания цвета заливки и strokeStyle – для задания цвета обводки.
    // Задаваемые цвета WHITE: 'white', BLACK: 'black', RED: 'red', GREEN: 'green', BLUE: 'blue',
    // Пример задаем черный цвет
    // this.setColor(this.BLACK);
    /**
     * Description placeholder
     *
     * @param {string} color
     */
    setColor(color: string): void {
        html5CanvasText_R.setColor(color);
    }
    //============================================================================
    //============================================================================
    // Устанавливаем текущий шрифт
    // Виды шрифтов ITALIC_20PX_SANS_SERIF: 'italic 20px sans-serif',
    // ITALIC_15PT_ARIAL: 'italic 15pt Arial', ITALIC_30PT_ARIAL: 'italic 30pt Arial',
    // BOLD_30PX_SANS_SERIF: 'bold 30px sans-serif',
    // Пример задаем italic 15pt Arial
    // this.setFont(this.ITALIC_15PT_ARIAL);
    /**
     * Description placeholder
     *
     * @param {string} font
     */
    setFont(font: string): void {
        html5CanvasText_R.setFont(font);
    }
    //============================================================================
    //============================================================================
    // Печатаем текст на экране средствами HTML5 Canvas
    // _text - любой текст в ковычках вида "Пример текста"
    // _left - задание расположения текста, отсчитывается от левого края 
    // _top  - задание расположения текста, отсчитывается от верхнего края
    //    Задание расположения имеет особенности. Точка привязки это не левый верхний край как у картинок
    //    и это следует учитывать.
    // _font - задаем тип шрифта. Виды шрифтов ITALIC_20PX_SANS_SERIF, ITALIC_15PT_ARIAL, 
    //     ITALIC_30PT_ARIAL, BOLD_30PX_SANS_SERIF
    // _color - задем цвет текста. Задаваемые цвета WHITE, BLACK, RED, GREEN, BLUE
    // _fillYes - закрашены буквы -1 или пустые - остальные цифры
    // Пример. Печатаем былым цветом и шрифтом италик предложение "Это тестовый вывод" по координатам х 100, у 200
    // this.drawText ("Это тестовый вывод", 100, 200, this.ITALIC_20PX_SANS_SERIF,
    // this.WHITE, 1);
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
        html5CanvasText_R.drawText(text, left, top, font, color, fillYes);
    }
    //============================================================================
    //=============================================================================  
    //PRIMITIVE
    // Очищаем заданную область экрана в виде прямоугольника
    // _left, _top - координаты левого верхнего угла прямоугольника
    // _width, _height - ширина и высота очищаемого прямоугольника
    /**
     * Description placeholder
     *
     * @param {number} left
     * @param {number} top
     * @param {number} width
     * @param {number} height
     */
    clearRect(left: number, top: number, width: number, height: number): void {
        html5CanvasPrimitive_R.clearRect(left, top, width, height);
    }
    //============================================================================
    //============================================================================
    // Рисуем прямоугольник
    // _left, _top - координаты левого верхнего угла прямоугольника
    // _width, _height - ширина и высота прямоугольника
    // _lineWidth - тольщина линии прямоугольника
    // _color - цвет прямоугольника. Задаваемые цвета WHITE, BLACK, RED, GREEN, BLUE
    // _fillYes - закрашиваем ли прямоугольник
    /**
     * Description placeholder
     *
     * @param {number} left
     * @param {number} top
     * @param {number} width
     * @param {number} height
     * @param {number} lineWidth
     * @param {string} color
     * @param {number} fillYes
     */
    drawRect(left: number, top: number, width: number, height: number,
        lineWidth: number, color: string, fillYes: number): void {
        html5CanvasPrimitive_R.drawRect(left, top, width, height, lineWidth, color, fillYes);
    }
    //============================================================================   
    //============================================================================
    // Рисуем прямоугольник
    // _left, _top - координаты левого верхнего угла прямоугольника
    // _width, _height - ширина и высота прямоугольника
    // _lineWidth - тольщина линии прямоугольника
    // _color - цвет прямоугольника. Задаваемые цвета WHITE, BLACK, RED, GREEN, BLUE
    // _fillYes - закрашиваем ли прямоугольник
    /**
     * Description placeholder
     *
     * @param {number} centerX
     * @param {number} centerY
     * @param {number} radius
     * @param {number} sAngle
     * @param {number} eAngle
     * @param {boolean} clockwise
     * @param {number} lineWidth
     * @param {string} color
     */
    drawCircle(centerX: number, centerY: number, radius: number, sAngle: number,
        eAngle: number, clockwise: boolean, lineWidth: number, color: string): void {
        //console.log("this.drawCircle -> _centerX = " + _centerX);
        html5CanvasPrimitive_R.drawCircle(centerX, centerY, radius, sAngle, eAngle, clockwise, lineWidth, color);
    }
    //============================================================================   
    //============================================================================
    /**
     * Description placeholder
     *
     * @param {number} centerX
     * @param {number} centerY
     * @param {number} radius
     * @param {number} angle
     * @param {number} lineWidth
     * @param {string} color
     */
    drawCreaturesCircle(centerX: number, centerY: number, radius: number,
        angle: number, lineWidth: number, color: string): void {
        html5CanvasPrimitive_R.drawCreaturesCircle(centerX, centerY, radius, angle, lineWidth, color);
    }
    //============================================================================
    //============================================================================
    /** Description placeholder */
    drawSmile(): void {
        //drawSmile();
    }
    //============================================================================ 
    // IMAGE
    // Рисуем прямоугольную картинку
    // _image - HTMLImageElement 
    // _left, _top - координаты левого верхнего угла картинки
    // _width, _height - ширина и высота картинки
    // _mirror - следует ли отзеркалить картинку
    //============================================================================
    /**
     * Description placeholder
     *
     * @param {(HTMLImageElement | HTMLCanvasElement)} image
     * @param {number} left
     * @param {number} top
     * @param {number} width
     * @param {number} height
     * @param {boolean} mirror
     */
    drawImage(image: HTMLImageElement | HTMLCanvasElement, left: number, top: number,
        width: number, height: number, mirror: boolean): void {
        html5CanvasImage_R.drawImage(image, left, top, width, height, mirror);
    }
    //============================================================================   
    //MOUSE
} //HTML5_Canvas

/**
 * Description placeholder
 *
 * @type {Html5Canvas_C}
 */
let html5Canvas_R = new Html5Canvas_C();

html5Canvas_R.iniM();

export { html5Canvas_R, Html5Canvas_C };

if (global_R.print_module_start_finish) console.log('6_html5_canvas_h.js -> module finish');

html5Canvas_R.isOk = "OK"; //