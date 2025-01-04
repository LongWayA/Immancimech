/** 
 * 
 * @author AnBr75
 * @copyright Copyright (c) 2024, AnBr75 and/or its affiliates. All rights reserved.
 * @version Last_modified -01.01.2025- 
 */

/**
* НАЗНАЧЕНИЕ
*/

import { global_R } from './global.js';
if (global_R.print_module_start_finish) console.log('start_client.js -> module start');

import { html5Canvas_R } from '../2_graphics_2d/html5_canvas/html5_canvas.js';

import { buttons_R } from './buttons.js';

import { gameState_R } from '../4_game_state/game_state.js';
import { loop_R } from '../3_loop/loop_o.js';
import { test_R } from '../test/test.js';
import { drowGame_R } from '../2_graphics_2d/drow_game.js';

class Index_C {
 
    public static NAME: string = "Index_C";
    public isOk: string = "";
    public idCanvas : HTMLCanvasElement | null = null;
    public contextCanvas : CanvasRenderingContext2D | null =  null;

    //=============================================================================
    constructor() {
    }
    //=============================================================================

    //=============================================================================
    iniM(): void {
    }
    //=============================================================================

    // HTML5 графика---------------------------------------------------------------


    // Кнопки----------------------------------------------------------------------
    //=============================================================================
    startButton() {
        buttons_R.startButtonAttribute();
        gameState_R.setGoGame();
        if (!loop_R.isLoop){ 
            console.log('Index_C->startButton->call loop_R.loop()');
            loop_R.loop();
        }
    }
    //=============================================================================

    //=============================================================================
    pauseButton(): void {
        buttons_R.pauseButtonAttribute();
        gameState_R.setPauseGame();
    }
    //=============================================================================

    //=============================================================================
    endButton(): void {
        buttons_R.endButtonAttribute();
        gameState_R.setEndGame();
    }
    //=============================================================================

    //=============================================================================
    testButton(): void {
        console.log('Index_C->testButton');
    }
    //=============================================================================
    //Запуск игры------------------------------------------------------------------

    //=============================================================================
    startGame(idCanvas : HTMLCanvasElement, contextCanvas : CanvasRenderingContext2D | null): void {

        this.idCanvas = idCanvas;
        this.contextCanvas = contextCanvas;
        html5Canvas_R.startM(idCanvas, contextCanvas);
        drowGame_R.startM(gameState_R);
        gameState_R.startM();
        loop_R.startM();

        test_R.test();
        gameState_R.setStartGame();

        if (!loop_R.isLoop) {
            console.log('Index_C->startGame->call loop_R.loop()');
            loop_R.loop();
        }
    }
    //=============================================================================
}

let Index_R = new Index_C();

Index_R.iniM();

export { Index_R, Index_C };

if (global_R.print_module_start_finish) console.log('index.js -> module finish');

Index_R.isOk = "OK"; //