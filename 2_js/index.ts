/** 
 * 
 * @author AnBr75
 * @copyright Copyright (c) 2024, AnBr75 and/or its affiliates. All rights reserved.
 * @version Last_modified -04.07.2024- 
 */

/**
* НАЗНАЧЕНИЕ
*/

import { global_R } from './global.js';
if (global_R.print_module_start_finish) console.log('start_client.js -> module start');

import { html5Canvas_R } from './2_render/html5_canvas/html5_canvas.js';

// обработка нажатий кнопок старт, пауза, конец игры.
import { buttons_R } from '../2_js/3_user_control/buttons.js';

import { startClient_R } from './0_start_client/start_client.js';

class Index_C {
 
    public NAME: string = "Index_C";
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
        buttons_R.startButton();
    };
    //=============================================================================

    //=============================================================================
    pauseButton(): void {
        buttons_R.pauseButton();
    };
    //=============================================================================

    //=============================================================================
    endButton(): void {
        buttons_R.endButton();
    };
    //=============================================================================

    //=============================================================================
    testButton(): void {
        buttons_R.testButton();
    };
    //=============================================================================
    //Запуск игры------------------------------------------------------------------

    //=============================================================================
    startGame(idCanvas : HTMLCanvasElement, contextCanvas : CanvasRenderingContext2D | null): void {

        this.idCanvas = idCanvas;
        this.contextCanvas = contextCanvas;
        html5Canvas_R.startM(idCanvas, contextCanvas);
        buttons_R.startM();
        startClient_R.startGame();
    }
    //=============================================================================


}

let Index_R = new Index_C();

startClient_R.iniM();

export { Index_R, Index_C };

if (global_R.print_module_start_finish) console.log('index.js -> module finish');

startClient_R.isOk = "OK"; //