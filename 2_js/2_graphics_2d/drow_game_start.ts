/** 
 * 2_render
 * @author AnBr75
 * @copyright Copyright (c) 2024, AnBr75 and/or its affiliates. All rights reserved.
 * @version Last_modified -17.08m.2024-
 */
let Copyright_AnBr75 = 2024;

/**
* НАЗНАЧЕНИЕ
*/

import { global_R } from '../1_index/global.js';

if (global_R.print_module_start_finish) console.log('drow_game_start.js -> module start');

import { html5Canvas_R, Html5Canvas_C } from './html5_canvas/html5_canvas.js';
import { html5SpritesImmortal_R } from './html5_sprites/html5_sprites_immortal.js';
import { drawTimerNumber_R } from './drow_timer_number.js';

class DrawGameStart_C {
 
    public static NAME: string = "DrawGameStart_C";
 
    public isOk: string = "";

    widthCanvas: number = html5Canvas_R.widthCanvas;
    heightCanvas: number = html5Canvas_R.heightCanvas;


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
    tick(): void {
        // console.log('Game.drawNuberTick');

        let left = 0;
        let top = 0;
        let width = 500;
        let height = 35;
        let left0 = 10;
        let top0 = 10;
        const probaSaveLokal = <string>localStorage.getItem("probaSaveLokal");
        const GROUND = <string>localStorage.getItem("GROUND");

        html5Canvas_R.clearRect(left, top, this.widthCanvas, this.heightCanvas);

        html5Canvas_R.drawRect(left, top, this.widthCanvas, this.heightCanvas,
            Html5Canvas_C.LINE_WIDTH_1, Html5Canvas_C.BLACK, 0);
        html5Canvas_R.drawRect(left0, top0, this.widthCanvas - 20, this.heightCanvas - 20,
            Html5Canvas_C.LINE_WIDTH_1, Html5Canvas_C.GREEN, 0);
        drawTimerNumber_R.drawNumberTick(left0, top0);
        html5Canvas_R.drawRect(100, 100, width, height, Html5Canvas_C.LINE_WIDTH_1, Html5Canvas_C.RED, 0);
        html5Canvas_R.drawText("Game Start ", 100, 100, Html5Canvas_C.ITALIC_30PT_ARIAL, Html5Canvas_C.GREEN, 1);

        html5Canvas_R.drawText(probaSaveLokal, 100, 200, Html5Canvas_C.ITALIC_30PT_ARIAL,
            Html5Canvas_C.GREEN, 1);

        html5Canvas_R.drawText(GROUND, 100, 300, Html5Canvas_C.ITALIC_30PT_ARIAL,
            Html5Canvas_C.GREEN, 1);

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