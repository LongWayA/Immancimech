// @ts-check
/** 
 * @module drow_game_end
 * @author ABr75
 * @copyright Copyright (c) 2024, ABr75 and/or its affiliates. All rights reserved.
 * @version Last_modified -17.08m.2024-
 */

/**
* НАЗНАЧЕНИЕ
*/

import { global_R } from '../1_loop/global.js';

if (global_R.print_module_start_finish) console.log('drow_game_pause.js -> module start');

import { html5Canvas_R } from './html5_canvas/html5_canvas_h.js';
import { drawTimerNumber_R } from '../2_render/drow_timer_number.js';

class DrawGameEnd_C {

    public NAME: string = "DrawGameEnd_C";
    public isOk: string = "";


    //=============================================================================
    constructor() {
    }
    //=============================================================================

    //=============================================================================
    iniM(): void {

        // console.log('Render_C->iniM()-> this.widthCanvas =' + this);
        //console.log('Render_C->iniM()-> this.heightCanvas =' + this.heightCanvas);
    }
    //=============================================================================
    //=============================================================================
    //
    startM(): void {
    }
    //=============================================================================
    //=============================================================================
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
        html5Canvas_R.drawText("Game End ", left0, top0, html5Canvas_R.ITALIC_30PT_ARIAL,
            html5Canvas_R.GREEN, 1);

        drawTimerNumber_R.drawTimerTick(10, 510);
    }
    //=============================================================================

} //

let drawGameEnd_R = new DrawGameEnd_C();

drawGameEnd_R.iniM();

export { drawGameEnd_R, DrawGameEnd_C };

if (global_R.print_module_start_finish) console.log('drow_game_pause.js -> module finish');

drawGameEnd_R.isOk = "OK"; //