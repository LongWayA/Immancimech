// Copyright (c) 2024, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -17.08m.2024-
// 

/*
 НАЗНАЧЕНИЕ
 

*/


import { global_R } from '../global/global.js';

if (global_R.print_module_start_finish) console.log('drow_timer_number.js -> module start');

import { timer_R } from '../loop/timer.js';
import { html5Canvas_R } from '../render/html5_canvas/6_html5_canvas_h.js';
import { gameState_R, GameState_C } from '../game/game_state.js';

// здесь из за итераций внутри класса ссылаемся на созданный объект
// изменение названия объекта все сломает
// this теряет ссылку на контекст при использовании метода в качестве функции обратного вызова.
/**
 * Description placeholder
 *
 * @class DrawTimerNumber_C
 * @typedef {DrawTimerNumber_C}
 */
class DrawTimerNumber_C {
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    public NAME: string = "DrawTimerNumber_C";
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    public isOk: string = "";


    //=============================================================================
    /**
     * Creates an instance of DrawTimerNumber_C.
     *
     * @constructor
     */
    constructor() {
    }
    //=============================================================================

    //=============================================================================
    /** Description placeholder */
    iniM(): void {
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
     * @param {number} left
     * @param {number} top
     */
    drawNumberTick(left: number, top: number): void {
        // console.log('Game.drawNuberTick');
        let width = 500;
        let height = 35;

        html5Canvas_R.drawRect(left, top, width, height, html5Canvas_R.LINE_WIDTH_1, html5Canvas_R.GREEN, 0);

        html5Canvas_R.drawText("Game.tick = " + gameState_R.sprite, left, top, html5Canvas_R.ITALIC_30PT_ARIAL, html5Canvas_R.GREEN, 1);
    }
    //=============================================================================

    //=============================================================================
    /**
     * Description placeholder
     *
     * @param {number} left
     * @param {number} top
     */
    drawTimerTick(left: number, top: number): void {
        // console.log('Game.drawTimerTick');

        let top1 = top + 25;
        let top2 = top1 + 25;
        let top3 = top2 + 25;
        let top4 = top3 + 25;
        let top5 = top4 + 25;
        let top6 = top5 + 25;


        html5Canvas_R.drawText("tick_timeOnAllMs = " + timer_R.getTickTimeOnAllMs(),
            left, top, html5Canvas_R.ITALIC_15PT_ARIAL, html5Canvas_R.GREEN, 1);


        html5Canvas_R.drawText("tick_timeStartMs = " + timer_R.getTickTimeStartMs(),
            left, top1, html5Canvas_R.ITALIC_15PT_ARIAL, html5Canvas_R.GREEN, 1);


        html5Canvas_R.drawText("tick_timeEndMs = " + timer_R.getTickTimeEndMs(),
            left, top2, html5Canvas_R.ITALIC_15PT_ARIAL, html5Canvas_R.GREEN, 1);


        html5Canvas_R.drawText("tick_timeEndMinusStartTickMs = " + timer_R.getTickTimeEndMinusStartTickMs(),
            left, top3, html5Canvas_R.ITALIC_15PT_ARIAL, html5Canvas_R.GREEN, 1);


        html5Canvas_R.drawText("tick_timeThreadSleepGameMs = " + timer_R.getTickTimeThreadSleepGameMs(),
            left, top4, html5Canvas_R.ITALIC_15PT_ARIAL, html5Canvas_R.GREEN, 1);


        html5Canvas_R.drawText("tickOld_timeStartMs = " + timer_R.getTickOldTimeStartMs(),
            left, top5, html5Canvas_R.ITALIC_15PT_ARIAL, html5Canvas_R.GREEN, 1);


        html5Canvas_R.drawText("tick_tickOld_timeStart_Minus_tick_timeStartMs = "
            + timer_R.getTickTickOldTimeStartMinusTickTimeStartMs(),
            left, top6, html5Canvas_R.ITALIC_15PT_ARIAL, html5Canvas_R.GREEN, 1);

    }
    //=============================================================================


} //

// здесь из за итераций внутри класса ссылаемся на созданный объект
// изменение названия объекта все сломает
// this теряет ссылку на контекст при использовании метода в качестве функции обратного вызова.
/**
 * Description placeholder
 *
 * @type {DrawTimerNumber_C}
 */
let drawTimerNumber_R = new DrawTimerNumber_C();

drawTimerNumber_R.iniM();

export { drawTimerNumber_R, DrawTimerNumber_C };

if (global_R.print_module_start_finish) console.log('drow_timer_number.js -> module finish');

drawTimerNumber_R.isOk = "OK"; //