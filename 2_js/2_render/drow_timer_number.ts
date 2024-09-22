// @ts-check
/** 
 * @module drow_timer_number
 * @author ABr75
 * @copyright Copyright (c) 2024, ABr75 and/or its affiliates. All rights reserved.
 * @version Last_modified -17.08m.2024-
 */

/**
* НАЗНАЧЕНИЕ
*/

import { global_R } from '../1_loop/global.js';

if (global_R.print_module_start_finish) console.log('drow_timer_number.js -> module start');

import { timer_R } from '../1_loop/timer.js';
import { html5Canvas_R } from './html5_canvas/html5_canvas_h.js';
import { gameState_R, GameState_C } from '../4_game_state/game_state.js';

class DrawTimerNumber_C {

    public NAME: string = "DrawTimerNumber_C";
 
    public isOk: string = "";


    //=============================================================================
    constructor() {
    }
    //=============================================================================

    //=============================================================================
    iniM(): void {
    }
    //=============================================================================
    //=============================================================================
    //
    startM(): void {
    }
    //=============================================================================
 
    //=============================================================================
    drawNumberTick(left: number, top: number): void {
        // console.log('Game.drawNuberTick');
        let width = 500;
        let height = 35;

        html5Canvas_R.drawRect(left, top, width, height, html5Canvas_R.LINE_WIDTH_1, html5Canvas_R.GREEN, 0);

        html5Canvas_R.drawText("Game.tick = " + gameState_R.sprite, left, top, html5Canvas_R.ITALIC_30PT_ARIAL, html5Canvas_R.GREEN, 1);
    }
    //=============================================================================

    //=============================================================================
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

let drawTimerNumber_R = new DrawTimerNumber_C();

drawTimerNumber_R.iniM();

export { drawTimerNumber_R, DrawTimerNumber_C };

if (global_R.print_module_start_finish) console.log('drow_timer_number.js -> module finish');

drawTimerNumber_R.isOk = "OK"; //