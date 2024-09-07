// @ts-check
/**
 * @module render
 * @author ABr75
 * @copyright Copyright (c) 2025, ABr75 and/or its affiliates. All rights reserved.
 * @version Last_modified -09.07.2023-24.02m.2024-17.08m.2024-
 */
/**
* НАЗНАЧЕНИЕ
*/
import { global_R } from '../global/global.js';
if (global_R.print_module_start_finish)
    console.log('render.js -> module start');
import { html5Canvas_R } from './html5_canvas/html5_canvas_h.js';
import { drawGameStart_R } from '../2_render/drow_game_start.js';
import { drawGameContinue_R } from './drow_game_continue.js';
import { drawGamePause_R } from '../2_render/drow_game_pause.js';
import { drawGameEnd_R } from '../2_render/drow_game_end.js';
/**
 *
 *
 * @class Render_C
 */
class Render_C {
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    NAME = "render_R";
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    isOk = "";
    // Внешние ссылки
    /**
     * Description placeholder
     *
     * @private
     * @type {*}
     */
    out_Game = null;
    /**
     * Description placeholder
     *
     * @private
     * @type {number}
     */
    widthCanvas = 0;
    /**
     * Description placeholder
     *
     * @private
     * @type {number}
     */
    heightCanvas = 0;
    //=============================================================================
    /**
     * Creates an instance of Render_C.
     *
     * @constructor
     */
    constructor() {
    }
    //=============================================================================
    //=============================================================================
    /** Description placeholder */
    iniM() {
        this.widthCanvas = html5Canvas_R.width_OUT;
        this.heightCanvas = html5Canvas_R.height_OUT;
    }
    //=============================================================================
    //=============================================================================
    //start (_HTML5_Canvas, _Sprites, _Frames, _AllMapObj, _Game) {
    /**
     * Description placeholder
     *
     * @param {*} Game
     */
    startM(Game) {
        this.out_Game = Game;
    }
    //=============================================================================
    //=============================================================================
    /** Description placeholder */
    drawGameStart() {
        drawGameStart_R.tick(this.out_Game, this.widthCanvas, this.heightCanvas);
    }
    //=============================================================================
    //=============================================================================
    // 
    /** Description placeholder */
    drowGameGo() {
        drawGameContinue_R.tick(this.out_Game);
    }
    //=============================================================================
    //=============================================================================
    /** Description placeholder */
    drawGamePaused() {
        drawGamePause_R.tick(this.out_Game, this.widthCanvas, this.heightCanvas);
    }
    //=============================================================================
    //=============================================================================
    /** Description placeholder */
    drawGameEnd() {
        drawGameEnd_R.tick(this.out_Game, this.widthCanvas, this.heightCanvas);
    }
} //
/**
 *
 *
 * @type {Render_C}
 */
let render_R = new Render_C();
render_R.iniM();
export { render_R };
if (global_R.print_module_start_finish)
    console.log('render.js -> module finish');
render_R.isOk = "OK"; //
