// @ts-check
/** 
 * @module render
 * @author ABr75
 * @copyright Copyright (c) 2024, ABr75 and/or its affiliates. All rights reserved.
 * @version Last_modified -09.07.2023-24.02m.2024-17.08m.2024-
 */

/**
* НАЗНАЧЕНИЕ
*/

import { global_R } from '../1_loop/global.js';

if (global_R.print_module_start_finish) console.log('render.js -> module start');

import { html5Canvas_R } from './html5_canvas/html5_canvas_h.js';
import { drawGameStart_R } from '../2_render/drow_game_start.js';
import { drawGameContinue_R } from './drow_game_continue.js';
import { drawGamePause_R } from '../2_render/drow_game_pause.js';
import { drawGameEnd_R } from '../2_render/drow_game_end.js';

class Render_C {
 
    public NAME: string = "render_R";

    public isOk: string = "";

    private out_Game: any = null;

    private widthCanvas: number = 0;
 
    private heightCanvas: number = 0;

    //=============================================================================
    constructor() {
    }
    //=============================================================================

    //=============================================================================
    iniM(): void {
        this.widthCanvas = html5Canvas_R.width_OUT;
        this.heightCanvas = html5Canvas_R.height_OUT;
    }
    //=============================================================================
    //=============================================================================
    //
    startM(Game: any): void {
        this.out_Game = Game;
    }
    //=============================================================================
    //=============================================================================
    drawGameStart(): void {
        drawGameStart_R.tick(this.out_Game, this.widthCanvas, this.heightCanvas);
    }
    //=============================================================================
    //=============================================================================
    // 
    drowGameGo(): void {
        drawGameContinue_R.tick(this.out_Game);
    }
    //=============================================================================

    //=============================================================================
    drawGamePaused(): void {
        drawGamePause_R.tick(this.out_Game, this.widthCanvas, this.heightCanvas);
    }
    //=============================================================================

    //=============================================================================
    drawGameEnd(): void {
        drawGameEnd_R.tick(this.out_Game, this.widthCanvas, this.heightCanvas);
    }
    //=============================================================================

} //

let render_R = new Render_C();

render_R.iniM();

export { render_R };

if (global_R.print_module_start_finish) console.log('render.js -> module finish');

render_R.isOk = "OK"; //