// @ts-check
/** 
 * @module drow_game_start
 * @author ABr75
 * @copyright Copyright (c) 2024, ABr75 and/or its affiliates. All rights reserved.
 * @version Last_modified -17.08m.2024-
 */

/**
* НАЗНАЧЕНИЕ
*/

import { global_R } from '../1_loop/global.js';

if (global_R.print_module_start_finish) console.log('drow_game_start.js -> module start');

import { html5Canvas_R } from './html5_canvas/html5_canvas_h.js';
import { html5SpritesImmortal_R } from '../2_render/html5_sprites/html5_sprites_immortal.js';
import { drawTimerNumber_R } from '../2_render/drow_timer_number.js';

class DrawGameStart_C {
 
    public NAME: string = "DrawGameStart_C";
 
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
        let left0 = 10;
        let top0 = 10;
        const probaSaveLokal = <string>localStorage.getItem("probaSaveLokal");
        const GROUND = <string>localStorage.getItem("GROUND");

        html5Canvas_R.clearRect(left, top, widthCanvas, heightCanvas);

        html5Canvas_R.drawRect(left, top, widthCanvas, heightCanvas,
            html5Canvas_R.LINE_WIDTH_1, html5Canvas_R.BLACK, 0);
        html5Canvas_R.drawRect(left0, top0, widthCanvas - 20, heightCanvas - 20,
            html5Canvas_R.LINE_WIDTH_1, html5Canvas_R.GREEN, 0);
        drawTimerNumber_R.drawNumberTick(left0, top0);
        html5Canvas_R.drawRect(100, 100, width, height, html5Canvas_R.LINE_WIDTH_1, html5Canvas_R.RED, 0);
        html5Canvas_R.drawText("Game Start ", 100, 100, html5Canvas_R.ITALIC_30PT_ARIAL, html5Canvas_R.GREEN, 1);
// @ts-ignore
        html5Canvas_R.drawText(probaSaveLokal, 100, 200, html5Canvas_R.ITALIC_30PT_ARIAL,
            html5Canvas_R.GREEN, 1);
// @ts-ignore
        html5Canvas_R.drawText(GROUND, 100, 300, html5Canvas_R.ITALIC_30PT_ARIAL,
            html5Canvas_R.GREEN, 1);

        drawTimerNumber_R.drawTimerTick(10, 510);

        html5SpritesImmortal_R.drowSprite(1, 400, 500);

    }
    //=============================================================================

} //

let drawGameStart_R = new DrawGameStart_C();

drawGameStart_R.iniM();

export { drawGameStart_R, DrawGameStart_C };

if (global_R.print_module_start_finish) console.log('drow_game_start.js -> module finish');

drawGameStart_R.isOk = "OK"; //