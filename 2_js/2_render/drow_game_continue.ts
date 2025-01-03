/** 
 * 2_render
 * @author AnBr75
 * @copyright Copyright (c) 2024, AnBr75 and/or its affiliates. All rights reserved.
 * @version Last_modified -17.08m.2024-
 */

/**
* НАЗНАЧЕНИЕ
*/

import { global_R } from '../global.js';

if (global_R.print_module_start_finish) console.log('drow_game_go.js -> module start');

import { timer_R } from '../1_loop/timer.js';
import { html5Canvas_R } from './html5_canvas/html5_canvas.js';
import { mouse_R } from '../3_user_control/mouse.js';
import { userInputKeyboard_R } from '../3_user_control/keyboard.js';
import { frames_R } from './frames/frames.js';
import { background_R } from '../local/background/background.js';
import { immortals_R } from '../user_avatars/immortals.js';
import { drawTimerNumber_R } from './drow_timer_number.js';

class DrawGameContinue_C {

    public NAME: string = "DrawGameContinue_C";
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

    tick(out_Game: any): void {
        // console.log('Game.drawNuberTick');

        let left0 = 10;
        let top0 = 455;

        //console.log('this.drow-> ');
        html5Canvas_R.clearRect(0, 0, frames_R.editorFrame.width, frames_R.editorFrame.height);

        background_R.drow();

        // html5Canvas_R.drawText("Game running", left0, top0, html5Canvas_R.ITALIC_30PT_ARIAL,
        //     html5Canvas_R.GREEN, 1);

        frames_R.drowEditorFrame();
        frames_R.drowMapFrame();
        frames_R.drowTilesPanelFrame();
        frames_R.drowPrintFrameFrame();

        drawTimerNumber_R.drawTimerTick(10, 510);

        mouse_R.drow();
        userInputKeyboard_R.drow();
        immortals_R.drow();
        drawTimerNumber_R.drawNumberTick(left0, top0);
    }
    //=============================================================================

} //

let drawGameContinue_R = new DrawGameContinue_C();

drawGameContinue_R.iniM();

export { drawGameContinue_R, DrawGameContinue_C };

if (global_R.print_module_start_finish) console.log('drow_game_go.js -> module finish');

drawGameContinue_R.isOk = "OK"; //