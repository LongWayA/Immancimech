// Copyright (c) 2024, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -17.08m.2024-
// 

/*
 НАЗНАЧЕНИЕ
 

*/


import { global_R } from '../global/global.js';

if (global_R.print_module_start_finish) console.log('drow_game_pause.js -> module start');

import { html5Canvas_R } from '../render/html5_canvas/6_html5_canvas_h.js';
import { drawTimerNumber_R } from '../render/drow_timer_number.js';

// здесь из за итераций внутри класса ссылаемся на созданный объект
// изменение названия объекта все сломает
// this теряет ссылку на контекст при использовании метода в качестве функции обратного вызова.
/**
 * Description placeholder
 *
 * @class DrawGamePause_C
 * @typedef {DrawGamePause_C}
 */
class DrawGamePause_C {
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    public NAME: string = "DrawGamePause_C";
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    public isOk: string = "";


    //=============================================================================
    /**
     * Creates an instance of DrawGamePause_C.
     *
     * @constructor
     */
    constructor() {
    }
    //=============================================================================

    //=============================================================================
    /** Description placeholder */
    iniM(): void {

        // console.log('Render_C->iniM()-> this.widthCanvas =' + this);
        //console.log('Render_C->iniM()-> this.heightCanvas =' + this.heightCanvas);
    }
    //=============================================================================
    //=============================================================================
    //
    /** Description placeholder */
    startM(): void {

    }
    //=============================================================================
    //=============================================================================
    /**
     * Description placeholder
     *
     * @param {*} out_Game
     * @param {number} widthCanvas
     * @param {number} heightCanvas
     */
    tick(out_Game: any, widthCanvas: number, heightCanvas: number): void {
        // console.log('Game.drawNuberTick');

        let left = 0;
        let top = 0;
        let width = 500;
        let height = 35;
        let left0 = 100;
        let top0 = 100;
        let left1 = 100;
        let top1 = 200;

        html5Canvas_R.clearRect(left, top, widthCanvas, heightCanvas);
        drawTimerNumber_R.drawNumberTick(left1, top1);
        html5Canvas_R.drawRect(left0, top0, width, height, html5Canvas_R.LINE_WIDTH_1,
            html5Canvas_R.GREEN, 0);
        html5Canvas_R.drawText("Game Paused ", left0, top0, html5Canvas_R.ITALIC_30PT_ARIAL,
            html5Canvas_R.GREEN, 1);

        drawTimerNumber_R.drawTimerTick(10, 510);

    }
    //=============================================================================


} //

// здесь из за итераций внутри класса ссылаемся на созданный объект
// изменение названия объекта все сломает
// this теряет ссылку на контекст при использовании метода в качестве функции обратного вызова.
/**
 * Description placeholder
 *
 * @type {DrawGamePause_C}
 */
let drawGamePause_R = new DrawGamePause_C();

drawGamePause_R.iniM();

export { drawGamePause_R, DrawGamePause_C };

if (global_R.print_module_start_finish) console.log('drow_game_pause.js -> module finish');

drawGamePause_R.isOk = "OK"; //