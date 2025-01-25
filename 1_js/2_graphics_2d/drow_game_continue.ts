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

import { Timer_C } from '../1_index/timer.js';
import { Html5Canvas_C } from './html5_canvas/html5_canvas.js';
import { Mouse_C } from '../5_user_control/mouse/mouse.js';
import { UserInputKeyboard_C } from '../5_user_control/keyboard/keyboard.js';
import { Frames_C } from './frames/frames.js';
import { Background_C } from '../7_local/background/background.js';
import { Immortals_C } from '../user_avatars/immortals.js';
import { drawTimerNumber_R } from './drow_timer_number.js';
import { Html5Sprites_C } from './html5_sprites/html5_sprites.js';

class DrawGameContinue_C {

    html5Canvas_R:  Html5Canvas_C | null = null;
    html5Sprites_R: Html5Sprites_C | null = null;
    immortals_R: Immortals_C | null = null;
    background_R: Background_C | null = null;

    userInputKeyboard_R: UserInputKeyboard_C | null = null;
    mouse_R: Mouse_C | null = null;

    frames_R: Frames_C = new Frames_C();

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
        this.frames_R.iniM();
        this.frames_R.isOk = "OK"; //
    }
    //=============================================================================
    //=============================================================================
    //
    startM(html5Canvas_R: Html5Canvas_C, html5Sprites_R: Html5Sprites_C, immortals_R: Immortals_C, background_R: Background_C
        ,userInputKeyboard_R: UserInputKeyboard_C, mouse_R: Mouse_C
    ): void {
        this.html5Canvas_R = html5Canvas_R;// 
        this.widthCanvas = html5Canvas_R.widthCanvas;
        this.heightCanvas = html5Canvas_R.heightCanvas;

        this.html5Sprites_R = html5Sprites_R;     
        this.immortals_R = immortals_R;
        this.background_R = background_R;
        this.userInputKeyboard_R = userInputKeyboard_R;
        this.mouse_R = mouse_R;
        this.frames_R.startM(html5Canvas_R);
    }
    //=============================================================================
    //=============================================================================

    tick(countTick: number): void {
        // console.log('Game.drawNuberTick');
        let left = 0;
        let top = 0;

        (this.html5Canvas_R as Html5Canvas_C).clearRect(left, top, this.widthCanvas, this.heightCanvas);
        (this.html5Canvas_R as Html5Canvas_C).drawRect(left, top, this.widthCanvas, this.heightCanvas,
            Html5Canvas_C.LINE_WIDTH_1, Html5Canvas_C.BLUE, 0);

        (this.background_R as Background_C).drow();

        this.frames_R.drowEditorFrame();
        this.frames_R.drowMapFrame();
        this.frames_R.drowTilesPanelFrame();
        this.frames_R.drowPrintFrameFrame();

        drawTimerNumber_R.drawTimerTick(10, 510);

        (this.mouse_R as Mouse_C).drow();
        (this.userInputKeyboard_R as UserInputKeyboard_C).drow();
        (this.immortals_R as Immortals_C).drow();

        let left0 = 10;
        let top0 = 455;
        drawTimerNumber_R.drawNumberTick(left0, top0, countTick);

        // html5Canvas_R.drawText("Game running", left0, top0, html5Canvas_R.ITALIC_30PT_ARIAL,
        //     html5Canvas_R.GREEN, 1);
    }
    //=============================================================================

} //

export { DrawGameContinue_C };
if (global_R.print_module_start_finish) console.log('drow_game_go.js -> module finish');