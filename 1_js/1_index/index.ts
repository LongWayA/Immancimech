/** 
 * 1_index
 * @author AnBr75
 * @copyright Copyright (c) 2025, AnBr75 and/or its affiliates. All rights reserved.
 * @version Last_modified -01.01m.2025-18.01m.2025- 
 */
let Copyright_AnBr75 = 2025;

/**
* НАЗНАЧЕНИЕ
*/

import { global_R } from './global.js';
if (global_R.print_module_start_finish) console.log('start_client.js -> module start');

import { Buttons_C} from './buttons.js';
import { GameState_C } from '../4_game_state/game_state.js';

import { Timer_C } from './timer.js';
import { test_R } from '../test/test.js';

type Index_I = {
    NAME: string;
    isOk: string;
    buttons_R : Buttons_C;
    gameState_R : GameState_C,
    timer_R : Timer_C,
    idCanvas : HTMLCanvasElement | null;
    contextCanvas : CanvasRenderingContext2D | null;
    timerCount: number;
    timerCountStop: number;
    delayMs: number;
    isLoop: boolean;
    STOP_LOOP: number;
    iniM(): void;
    startM(idCanvas : HTMLCanvasElement, contextCanvas : CanvasRenderingContext2D | null): void;
    startButton(): void; 
    pauseButton(): void;
    endButton(): void;
    testButton(): void;
    startGame(): void;        
    loop(): void;
}

let Index_R: Index_I = {
 
    NAME: "Index_R",
    isOk: "",
    buttons_R: new Buttons_C(),
    gameState_R: new GameState_C(),
    timer_R: new Timer_C(),
    idCanvas: null,//HTMLCanvasElement | null
    contextCanvas: null,//CanvasRenderingContext2D | null
    timerCount: -1,
    timerCountStop: 0,
    delayMs: 0,
    isLoop: false,
    STOP_LOOP: 30000,

    //=============================================================================
    iniM(){
        Index_R.buttons_R.iniM();
        Index_R.buttons_R.elementbuttonTest.addEventListener("click", this.buttons_R.click, false); //click  input
        Index_R.buttons_R.isOk = "OK"; //
        Index_R.gameState_R.iniM();
        Index_R.gameState_R.isOk = "OK";

        Index_R.timer_R.iniM();
        console.log('Index_R.timer_R -> currentTimeMs = ' + Index_R.timer_R.getCurrentTimeMs());
        Index_R.timer_R.isOk = "OK"; //
    },
    //=============================================================================

    //=============================================================================
    startM(idCanvas : HTMLCanvasElement, contextCanvas : CanvasRenderingContext2D | null){
        Index_R.idCanvas = idCanvas;
        Index_R.contextCanvas = contextCanvas;
        Index_R.gameState_R.startM(Index_R.timer_R, Index_R.idCanvas as HTMLCanvasElement, Index_R.contextCanvas);

    },
    //=============================================================================
 
    // HTML5 графика---------------------------------------------------------------

    // Кнопки----------------------------------------------------------------------
    //=============================================================================
    startButton() {
        Index_R.buttons_R.startButtonAttribute();
        Index_R.gameState_R.setContinueGame();
        if (!Index_R.isLoop){ 
            console.log('Index_R->startButton->call Index_R.loop()');
            Index_R .loop();
        }
    },
    //=============================================================================

    //=============================================================================
    pauseButton(){
        Index_R.buttons_R.pauseButtonAttribute();
        Index_R.gameState_R.setPauseGame();
    },
    //=============================================================================

    //=============================================================================
    endButton(){
        Index_R.buttons_R.endButtonAttribute();
        Index_R.gameState_R.setEndGame();
    },
    //=============================================================================

    //=============================================================================
    testButton(){
        console.log('Index_R->testButton');
    },
    //=============================================================================
    //Запуск игры------------------------------------------------------------------

    //=============================================================================
    startGame(){
        test_R.test();
        Index_R.gameState_R.setStartGame();
        if (!Index_R.isLoop) {
            console.log('Index_R->startGame->call Index_R.loop()');
            Index_R.loop();
        }
    },
    //=============================================================================

    //=============================================================================
    // setTimeout позволяет вызвать функцию один раз через определённый интервал времени
    loop(){
        Index_R.isLoop = true;
        Index_R.timerCount = -1;

        //Задержка перед запуском в миллисекундах (1000 мс = 1 с). Значение по умолчанию – 0.
        Index_R.delayMs = Index_R.timer_R.getTickTimeThreadSleepGameMs();

        Index_R.timerCount = setTimeout(function tick() {

            Index_R.timer_R.updateTimeBeforeTick(); //
            Index_R.gameState_R.tick();
            Index_R.timer_R.updateTimeAfterTick();
            Index_R.delayMs = Index_R.timer_R.getTickTimeThreadSleepGameMs();

            if (Index_R.gameState_R.isEndGame()) Index_R.isLoop = false;
            if (Index_R.isLoop) Index_R.timerCount = setTimeout(tick, Index_R.delayMs);

            if ((Index_R.timerCount - Index_R.timerCountStop) > Index_R.STOP_LOOP) {
                Index_R.gameState_R.setEndGame();
                Index_R.buttons_R.endButtonAttribute();
            }

        }, Index_R.delayMs);
        console.log("Index_R->loop() timerCount = " + Index_R.timerCount);
    },
    //=============================================================================
}

Index_R.iniM();

export { Index_R };

if (global_R.print_module_start_finish) console.log('index.js -> module finish');

Index_R.isOk = "OK";//