/** 
 * 2_render
 * @author AnBr75
 * @copyright Copyright (c) 2024, AnBr75 and/or its affiliates. All rights reserved.
 * @version Last_modified -09.07.2023-24.02m.2024-17.08m.2024-
 */

/**
* НАЗНАЧЕНИЕ
*/

import { global_R } from '../1_index/global.js';

if (global_R.print_module_start_finish) console.log('render.js -> module start');

import { html5Canvas_R } from './html5_canvas/html5_canvas.js';
import { drawGameStart_R } from './drow_game_start.js';
import { drawGameContinue_R } from './drow_game_continue.js';
import { drawGamePause_R } from './drow_game_pause.js';
import { drawGameEnd_R } from './drow_game_end.js';

class DrowGame_C {
 
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
        this.widthCanvas = html5Canvas_R.widthCanvas;
        this.heightCanvas = html5Canvas_R.heightCanvas;
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

let drowGame_R = new DrowGame_C();

drowGame_R.iniM();

export {drowGame_R};

if (global_R.print_module_start_finish) console.log('render.js -> module finish');

drowGame_R.isOk = "OK"; //