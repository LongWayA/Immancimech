/** 
 * @author AnBr75
 * @copyright Copyright (c) 2024, AnBr75 and/or its affiliates. All rights reserved.
 * @version created 17.08m.2024
 */

let Copyright_AnBr75 = 2024;

/**
* НАЗНАЧЕНИЕ
*/

import { global_R } from '../1_index/global.js';

if (global_R.print_module_start_finish) console.log('drow_timer_number.js -> module start');

import { Timer_C } from '../1_index/timer.js';
import { Html5Canvas_C } from '../2_graphics_2d/html5_canvas/html5_canvas.js';
import { Html5Sprites_C } from '../2_graphics_2d/html5_sprites/html5_sprites.js';


class DrawTimerNumber_C {

    html5Canvas_R:  Html5Canvas_C | null = null;
    html5Sprites_R: Html5Sprites_C | null = null;
    timer_R: Timer_C | null = null;    

    public static NAME: string = "DrawTimerNumber_C";
 
    //=============================================================================
    constructor() {
    }
    //=============================================================================

    //=============================================================================
    iniM(timer_R: Timer_C, html5Canvas_R: Html5Canvas_C, html5Sprites_R: Html5Sprites_C): void {
     this.html5Canvas_R = html5Canvas_R;//
     this.timer_R = timer_R;

     this.html5Sprites_R = html5Sprites_R;
    }
    //=============================================================================
    //=============================================================================
    drawNumberTick(left: number, top: number, countTick: number): void {
        // console.log('Game.drawNuberTick');
        let width = 500;
        let height = 35;

        (this.html5Canvas_R as Html5Canvas_C).clearRect(left, top, width, height);

        (this.html5Canvas_R as Html5Canvas_C).drawRect(left, top, width, height, Html5Canvas_C.LINE_WIDTH_1, Html5Canvas_C.GREEN, 0);

        (this.html5Canvas_R as Html5Canvas_C).drawText("Game.tick = " + countTick, left, top, Html5Canvas_C.ITALIC_30PT_ARIAL, Html5Canvas_C.GREEN, 1);
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


        let width = 500;
        let height =200;

        let leftR = left;
        let topR = top - 5;

        (this.html5Canvas_R as Html5Canvas_C).clearRect(leftR, topR, width, height);
        (this.html5Canvas_R as Html5Canvas_C).drawRect(leftR, topR, width, height, Html5Canvas_C.LINE_WIDTH_1, Html5Canvas_C.GREEN, 0);


        (this.html5Canvas_R as Html5Canvas_C).drawText("tick_timeOnAllMs = " + (this.timer_R as Timer_C).getTickTimeOnAllMs(),
             left, top, Html5Canvas_C.ITALIC_15PT_ARIAL, Html5Canvas_C.GREEN, 1);


        (this.html5Canvas_R as Html5Canvas_C).drawText("tick_timeStartMs = " + (this.timer_R as Timer_C).getTickTimeStartMs(),
             left, top1, Html5Canvas_C.ITALIC_15PT_ARIAL, Html5Canvas_C.GREEN, 1);


        (this.html5Canvas_R as Html5Canvas_C).drawText("tick_timeEndMs = " + (this.timer_R as Timer_C).getTickTimeEndMs(),
             left, top2, Html5Canvas_C.ITALIC_15PT_ARIAL, Html5Canvas_C.GREEN, 1);


        (this.html5Canvas_R as Html5Canvas_C).drawText("tick_timeEndMinusStartTickMs = " + (this.timer_R as Timer_C).getTickTimeEndMsMinusTimeStartMs(),
             left, top3, Html5Canvas_C.ITALIC_15PT_ARIAL, Html5Canvas_C.GREEN, 1);


        (this.html5Canvas_R as Html5Canvas_C).drawText("tick_timeThreadSleepGameMs = " + (this.timer_R as Timer_C).getTickTimeThreadSleepGameMs(),
             left, top4, Html5Canvas_C.ITALIC_15PT_ARIAL, Html5Canvas_C.GREEN, 1);


        (this.html5Canvas_R as Html5Canvas_C).drawText("tickOld_timeStartMs = " + (this.timer_R as Timer_C).getTickOldTimeStartMs(),
             left, top5, Html5Canvas_C.ITALIC_15PT_ARIAL, Html5Canvas_C.GREEN, 1);


        (this.html5Canvas_R as Html5Canvas_C).drawText("tick_tickOld_timeStart_Minus_tick_timeStartMs = "
             + (this.timer_R as Timer_C).getTickOldTimeStartMinusTimeStartMs(),
             left, top6, Html5Canvas_C.ITALIC_15PT_ARIAL, Html5Canvas_C.GREEN, 1);

    }
    //=============================================================================


} //

let drawTimerNumber_R = new DrawTimerNumber_C();

export { drawTimerNumber_R, DrawTimerNumber_C };

if (global_R.print_module_start_finish) console.log('drow_timer_number.js -> module finish');