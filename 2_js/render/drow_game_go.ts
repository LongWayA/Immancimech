// Copyright (c) 2024, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -17.08m.2024-
// 

/*
 НАЗНАЧЕНИЕ
 

*/


import { global_R } from '../global/global.js';

if (global_R.print_module_start_finish) console.log('drow_game_go.js -> module start');

import { timer_R } from '../loop/timer.js';
import { html5Canvas_R } from '../render/html5_canvas/6_html5_canvas_h.js';
import { mouse_R } from '../user_control/mouse.js';
import { userInputKeyboard_R } from '../user_control/keyboard.js';
import { frames_R } from '../render/frames/frames.js';
import { background_R } from '../local/background/background.js';
import { immortals_R } from '../user_avatars/immortals.js';
import { drawTimerNumber_R } from '../render/drow_timer_number.js';

// здесь из за итераций внутри класса ссылаемся на созданный объект
// изменение названия объекта все сломает
// this теряет ссылку на контекст при использовании метода в качестве функции обратного вызова.
/**
 * Description placeholder
 *
 * @class DrawGameGo_C
 * @typedef {DrawGameGo_C}
 */
class DrawGameGo_C {
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    public NAME: string = "DrawGameGo_C";
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    public isOk: string = "";


    //=============================================================================
    /**
     * Creates an instance of DrawGameGo_C.
     *
     * @constructor
     */
    constructor() {
    }
    //=============================================================================

    //=============================================================================
    /** Description placeholder */
    iniM(): void {

        // console.log('Render_C->iniM()-> this.widthCanvas =' + this);
        //console.log('Render_C->iniM()-> this.heightCanvas =' + this.heightCanvas);
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
     * @param {*} out_Game
     */
    tick(out_Game: any): void {
        // console.log('Game.drawNuberTick');

        let left0 = 10;
        let top0 = 455;


        //console.log('this.drow-> ');
        html5Canvas_R.clearRect(0, 0, frames_R.editorFrame.width, frames_R.editorFrame.height);

        background_R.drow();

        // html5Canvas_R.drawRect(left0, top0, width, height, html5Canvas_R.LINE_WIDTH_1,
        //     html5Canvas_R.GREEN, 0);
        // html5Canvas_R.drawText("Game running", left0, top0, html5Canvas_R.ITALIC_30PT_ARIAL,
        //     html5Canvas_R.GREEN, 1);

        //       this.drawNuberTick(left1, top1);
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

// здесь из за итераций внутри класса ссылаемся на созданный объект
// изменение названия объекта все сломает
// this теряет ссылку на контекст при использовании метода в качестве функции обратного вызова.
/**
 * Description placeholder
 *
 * @type {DrawGameGo_C}
 */
let drawGameGo_R = new DrawGameGo_C();

drawGameGo_R.iniM();

export { drawGameGo_R, DrawGameGo_C };

if (global_R.print_module_start_finish) console.log('drow_game_go.js -> module finish');

drawGameGo_R.isOk = "OK"; //