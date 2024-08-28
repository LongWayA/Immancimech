// Copyright (c) 2024, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -10.09.2023-25.11.2023
// -24.02m.2024-
/*
 НАЗНАЧЕНИЕ
     

*/

import { global_R } from '../../global/global.js';

if (global_R.print_module_start_finish) console.log('5_html5_canvas_mouse_event.js -> module start');

/**
 * Description placeholder
 *
 * @class Html5CanvasMouseEvent_C
 * @typedef {Html5CanvasMouseEvent_C}
 */
class Html5CanvasMouseEvent_C {
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    public NAME: string = "html5CanvasMouse_R";
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
    public mouseMoveIsChange: number = 0;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    public mouseMoveX: number = 0;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    public mouseMoveY: number = 0;

    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    public mouseDownIsChange: number = 0;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    public mouseDownX: number = 0;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    public mouseDownY: number = 0;

    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    public mouseUpIsChange: number = 0;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    public mouseUpX: number = 0;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    public mouseUpY: number = 0;

    /**
     * Description placeholder
     *
     * @public
     * @type {*}
     */
    public event: any = null;

    //=============================================================================
    /**
     * Creates an instance of Html5CanvasMouseEvent_C.
     *
     * @constructor
     */
    constructor() {
    }
    //=============================================================================

    //=============================================================================
    /** Description placeholder */
    iniM(): void {

        this.idCanvas.addEventListener('mousemove', (event: any) => {

            this.event = event;
            this.mouseMoveIsChange = 1;
            this.mouseMoveX = event.offsetX;
            this.mouseMoveY = event.offsetY;

        });

        this.idCanvas.addEventListener('mousedown', (event: any) => {

            this.event = event;
            this.mouseDownIsChange = 1;
            this.mouseDownX = event.offsetX;
            this.mouseDownY = event.offsetY;

        });

        this.idCanvas.addEventListener('mouseup', (event: any) => {

            this.event = event;
            this.mouseUpIsChange = 1;
            this.mouseUpX = event.offsetX;
            this.mouseUpY = event.offsetY;
        });
    }
    //=============================================================================
    //=============================================================================
    /** Description placeholder */
    startM(): void  {
    }
    //=============================================================================


} //UserInputMouse

/**
 * Description placeholder
 *
 * @type {Html5CanvasMouseEvent_C}
 */
let html5CanvasMouseEvent_R = new Html5CanvasMouseEvent_C();

html5CanvasMouseEvent_R.iniM();

export { html5CanvasMouseEvent_R, Html5CanvasMouseEvent_C };

if (global_R.print_module_start_finish) console.log('5_html5_canvas_mouse_event.js -> module finish');

html5CanvasMouseEvent_R.isOk = "OK"; //