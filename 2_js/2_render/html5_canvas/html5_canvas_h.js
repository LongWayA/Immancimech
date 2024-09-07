// @ts-check
/**
 * @module html5_canvas_h
 * @author ABr75
 * @copyright Copyright (c) 2025, ABr75 and/or its affiliates. All rights reserved.
 * @version Last_modified -21.08.2021-31.07.2022-18.02.2023-08.03.2023-18.03.2023-26.03.2023-25.11.2023
 * @version Last_modified -24.02m.2024-
 */
/**
* НАЗНАЧЕНИЕ
*   Работаем с HTML5 Canvas
*  Canvas (англ. canvas — «холст», рус. канва́с) — элемент HTML5,
*  предназначенный для создания растрового двухмерного изображения при помощи скриптов,
*  обычно на языке JavaScript[1].
*  Из Википедии https://ru.wikipedia.org/wiki/Canvas_(HTML)
*/
import { global_R } from '../../global/global.js';
if (global_R.print_module_start_finish)
    console.log('6_html5_canvas_h.js -> module start');
import { html5CanvasText_R } from './html5_canvas_text.js';
import { html5CanvasPrimitive_R } from './html5_canvas_primitive.js';
import { html5CanvasImage_R } from './html5_canvas_image.js';
// 
/**
 * Description placeholder
 *
 * @class Html5Canvas_C
 */
class Html5Canvas_C {
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    NAME = "html5Canvas_R";
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
     * @type {number}
     */
    width_OUT = 0;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    height_OUT = 0;
    // Color
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
    // 
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    ITALIC_20PX_SANS_SERIF = html5CanvasText_R.ITALIC_20PX_SANS_SERIF;
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    ITALIC_15PT_ARIAL = html5CanvasText_R.ITALIC_15PT_ARIAL;
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    ITALIC_30PT_ARIAL = html5CanvasText_R.ITALIC_30PT_ARIAL;
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    BOLD_30PX_SANS_SERIF = html5CanvasText_R.BOLD_30PX_SANS_SERIF;
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
    iniM() {
        this.width_OUT = this.get_widthCanvas();
        this.height_OUT = this.get_heightCanvas();
        html5CanvasText_R.startM();
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
     * @returns {number}
     */
    get_widthCanvas() {
        //console.log("this.contextCanvas.width = " + idCanvas.width);
        return this.idCanvas.width;
    }
    /**
     * Description placeholder
     *
     * @returns {number}
     */
    get_heightCanvas() {
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
    setColor(color) {
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
    setFont(font) {
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
    drawText(text, left, top, font, color, fillYes) {
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
    clearRect(left, top, width, height) {
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
    drawRect(left, top, width, height, lineWidth, color, fillYes) {
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
    drawCircle(centerX, centerY, radius, sAngle, eAngle, clockwise, lineWidth, color) {
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
    drawCreaturesCircle(centerX, centerY, radius, angle, lineWidth, color) {
        html5CanvasPrimitive_R.drawCreaturesCircle(centerX, centerY, radius, angle, lineWidth, color);
    }
    //============================================================================
    //============================================================================
    /** Description placeholder */
    drawSmile() {
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
    drawImage(image, left, top, width, height, mirror) {
        html5CanvasImage_R.drawImage(image, left, top, width, height, mirror);
    }
} //HTML5_Canvas
/**
 * Description placeholder
 *
 * @type {Html5Canvas_C}
 */
let html5Canvas_R = new Html5Canvas_C();
html5Canvas_R.iniM();
export { html5Canvas_R, Html5Canvas_C };
if (global_R.print_module_start_finish)
    console.log('6_html5_canvas_h.js -> module finish');
html5Canvas_R.isOk = "OK"; //
