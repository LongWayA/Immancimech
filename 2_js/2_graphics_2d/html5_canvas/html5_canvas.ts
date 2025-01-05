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
*   Работаем с HTML5 Canvas
*  Canvas (англ. canvas — «холст», рус. канва́с) — элемент HTML5,
*  предназначенный для создания растрового двухмерного изображения при помощи скриптов,
*  обычно на языке JavaScript[1].
*  Из Википедии https://ru.wikipedia.org/wiki/Canvas_(HTML)
*/


import { global_R } from '../../1_index/global.js';
if (global_R.print_module_start_finish) console.log('6_html5_canvas.js -> module start');

import { html5CanvasText_R, Html5CanvasText_C } from './html5_canvas_text.js';
import { html5CanvasPrimitive_R } from './html5_canvas_primitive.js';
import { html5CanvasImage_R } from './html5_canvas_image.js';
// 
/**
 * Description placeholder
 *
 * @class Html5Canvas_C
 */
class Html5Canvas_C {

    public static NAME: string = "html5Canvas_R";
    public isOk: string = "";

    // "2d" создаем объекта CanvasRenderingContext2D,
    //  представляющий двумерный контекст.
    public idCanvas : HTMLCanvasElement | null = null;
    public contextCanvas : CanvasRenderingContext2D | null =  null;
    public widthCanvas: number = 0;
    public heightCanvas: number = 0;
    // Цвет(Color)
    public static WHITE: string = 'white';
    public static BLACK: string = 'black';
    public static RED: string = 'red';
    public static GREEN: string = 'green';
    public static BLUE: string = 'blue';
    // Шрифт
    public static ITALIC_20PX_SANS_SERIF: string = Html5CanvasText_C.ITALIC_20PX_SANS_SERIF;
    public static ITALIC_15PT_ARIAL: string = Html5CanvasText_C.ITALIC_15PT_ARIAL;
    public static ITALIC_30PT_ARIAL: string = Html5CanvasText_C.ITALIC_30PT_ARIAL;
    public static BOLD_30PX_SANS_SERIF: string = Html5CanvasText_C.BOLD_30PX_SANS_SERIF;
    // Толщина линии
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
    //=============================================================================
    //=============================================================================
    startM(idCanvas : HTMLCanvasElement, contextCanvas : CanvasRenderingContext2D | null): void {
        this.idCanvas = idCanvas;
        this.contextCanvas = contextCanvas;
        this.widthCanvas = this.get_widthCanvas();
        this.heightCanvas = this.get_heightCanvas();
        html5CanvasText_R.startM(idCanvas, contextCanvas);
        html5CanvasPrimitive_R.startM(idCanvas, contextCanvas);
        html5CanvasImage_R.startM(idCanvas, contextCanvas);
    }
    //=============================================================================
    get_widthCanvas(): number {
        //console.log("this.contextCanvas.width = " + idCanvas.width);
        return (<HTMLCanvasElement>this.idCanvas).width;
    }

    get_heightCanvas(): number {
        //console.log("this.contextCanvas.height = " + idCanvas.height);
        return (<HTMLCanvasElement>this.idCanvas).height;
    }

    // TEXT
    //=============================================================================
    // Устанавливаем два параметра fillStyle, strokeStyle
    // fillStyle – для задания цвета заливки и strokeStyle – для задания цвета обводки.
    // Задаваемые цвета WHITE: 'white', BLACK: 'black', RED: 'red', GREEN: 'green', BLUE: 'blue',
    // Пример задаем черный цвет
    // this.setColor(this.BLACK);
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
    drawText(text: string, left: number, top: number, font: string, color: string, fillYes: number): void {
        html5CanvasText_R.drawText(text, left, top, font, color, fillYes);
    }
    //============================================================================
    //=============================================================================  
    //PRIMITIVE
    // Очищаем заданную область экрана в виде прямоугольника
    // _left, _top - координаты левого верхнего угла прямоугольника
    // _width, _height - ширина и высота очищаемого прямоугольника
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
    drawCircle(centerX: number, centerY: number, radius: number, sAngle: number,
        eAngle: number, clockwise: boolean, lineWidth: number, color: string): void {
        //console.log("this.drawCircle -> _centerX = " + _centerX);
        html5CanvasPrimitive_R.drawCircle(centerX, centerY, radius, sAngle, eAngle, clockwise, lineWidth, color);
    }
    //============================================================================   
    //============================================================================
    drawCreaturesCircle(centerX: number, centerY: number, radius: number,
        angle: number, lineWidth: number, color: string): void {
        html5CanvasPrimitive_R.drawCreaturesCircle(centerX, centerY, radius, angle, lineWidth, color);
    }
    //============================================================================
    //============================================================================
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
    drawImage(image: HTMLImageElement | HTMLCanvasElement, left: number, top: number,
        width: number, height: number, mirror: boolean): void {
        html5CanvasImage_R.drawImage(image, left, top, width, height, mirror);
    }
    //============================================================================   
} //HTML5_Canvas

let html5Canvas_R = new Html5Canvas_C();

html5Canvas_R.iniM();

export { html5Canvas_R, Html5Canvas_C };

if (global_R.print_module_start_finish) console.log('6_html5_canvas.js -> module finish');

html5Canvas_R.isOk = "OK"; //