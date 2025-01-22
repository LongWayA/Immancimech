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

if (global_R.print_module_start_finish) console.log('drow_game_go.js -> module start');

import { timer_R } from '../1_index/timer.js';
import { html5Canvas_R, Html5Canvas_C } from './html5_canvas/html5_canvas.js';
import { mouse_R } from '../5_user_control/mouse/mouse.js';
import { userInputKeyboard_R } from '../5_user_control/keyboard/keyboard.js';
import { frames_R } from './frames/frames.js';
import { background_R } from '../7_local/background/background.js';
import { immortals_R } from '../user_avatars/immortals.js';
import { drawTimerNumber_R } from './drow_timer_number.js';

class DrawGameContinue_C {

    public static NAME: string = "DrawGameContinue_C";
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

        html5Canvas_R.clearRect(left, top, this.widthCanvas, this.heightCanvas);
        html5Canvas_R.drawRect(left, top, this.widthCanvas, this.heightCanvas,
            Html5Canvas_C.LINE_WIDTH_1, Html5Canvas_C.BLUE, 0);

        background_R.drow();

        frames_R.drowEditorFrame();
        frames_R.drowMapFrame();
        frames_R.drowTilesPanelFrame();
        frames_R.drowPrintFrameFrame();

        drawTimerNumber_R.drawTimerTick(10, 510);

        mouse_R.drow();
        userInputKeyboard_R.drow();
        immortals_R.drow();

        let left0 = 10;
        let top0 = 455;
        drawTimerNumber_R.drawNumberTick(left0, top0);

        // html5Canvas_R.drawText("Game running", left0, top0, html5Canvas_R.ITALIC_30PT_ARIAL,
        //     html5Canvas_R.GREEN, 1);
    }
    //=============================================================================

} //

let drawGameContinue_R = new DrawGameContinue_C();

drawGameContinue_R.iniM();

export { drawGameContinue_R, DrawGameContinue_C };

if (global_R.print_module_start_finish) console.log('drow_game_go.js -> module finish');

drawGameContinue_R.isOk = "OK"; //