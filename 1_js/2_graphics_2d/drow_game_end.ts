/** 
 * 2_graphics_2d
 * @author AnBr75
 * @copyright Copyright (c) 2024, AnBr75 and/or its affiliates. All rights reserved.
 * @version Last_modified -17.08m.2024-
 */
let Copyright_AnBr75 = 2024;

/**
* НАЗНАЧЕНИЕ
*/

import { global_R } from '../1_index/global.js';

if (global_R.print_module_start_finish) console.log('drow_game_pause.js -> module start');

import { html5Canvas_R, Html5Canvas_C } from './html5_canvas/html5_canvas.js';
import { drawTimerNumber_R } from './drow_timer_number.js';

class DrawGameEnd_C {

    public static NAME: string = "DrawGameEnd_C";
    public isOk: string = "";

    private widthCanvas: number = 0;
    private heightCanvas: number = 0;

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
        this.widthCanvas = html5Canvas_R.widthCanvas;
        this.heightCanvas = html5Canvas_R.heightCanvas;        
    }
    //=============================================================================
    //=============================================================================
    tick(): void {
        // console.log('Game.drawNuberTick');
        let left = 0;
        let top = 0;
        let width = 500;
        let height = 35;
        let left0 = 100;
        let top0 = 100;
        let left1 = 100;
        let top1 = 200;

        html5Canvas_R.clearRect(left, top, this.widthCanvas, this.heightCanvas);
        html5Canvas_R.drawRect(left, top, this.widthCanvas, this.heightCanvas,
            Html5Canvas_C.LINE_WIDTH_1, Html5Canvas_C.BLUE, 0);

        html5Canvas_R.drawRect(left0, top0, width, height, Html5Canvas_C.LINE_WIDTH_1,
            Html5Canvas_C.GREEN, 0);
        html5Canvas_R.drawText("Game End ", left0, top0, Html5Canvas_C.ITALIC_30PT_ARIAL,
            Html5Canvas_C.GREEN, 1);
    }
    //=============================================================================

} //

let drawGameEnd_R = new DrawGameEnd_C();

drawGameEnd_R.iniM();

export { drawGameEnd_R, DrawGameEnd_C };

if (global_R.print_module_start_finish) console.log('drow_game_pause.js -> module finish');

drawGameEnd_R.isOk = "OK"; //