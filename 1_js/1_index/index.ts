/** 
 * @author AnBr75
 * @copyright Copyright (c) 2025, AnBr75 and/or its affiliates. All rights reserved.
 * @version created 01.01m.2025
 */

let Copyright_AnBr75 = 2025;

/**
* НАЗНАЧЕНИЕ
*  инициируем модули
*  запускаем цикл игры
*  обрабатываем нажатия кнопок
*/

import { global_R } from './global.js';
if (global_R.print_module_start_finish) console.log('index.js -> module start');

import { Buttons_C } from './buttons.js';
import { GameState_C } from '../3_game_state/game_state.js';
import { Timer_C } from './timer.js';

type Index_I = {

    idCanvas: HTMLCanvasElement;
    contextCanvas: CanvasRenderingContext2D | null;

    buttons_R: Buttons_C;
    gameState_R: GameState_C,
    timer_R: Timer_C,

    NAME: string;

    setTimeoutCount: number;
    setTimeoutCountStop: number;
    delaySleepGameMs: number;
    isLoop: boolean;
    STOP_LOOP: number;
    iniM(): void;
    startGameButton(): void;
    pauseGameButton(): void;
    endGameButton(): void;
    testButton(): void;
    startMenu(): void;
    loop(): void;
}

       


let Index_R: Index_I = {

    // "2d" создаем объект CanvasRenderingContext2D, представляющий двумерный контекст.
    idCanvas: document.getElementById('game-canvas') as HTMLCanvasElement,//HTMLCanvasElement
    contextCanvas: null,//CanvasRenderingContext2D

    buttons_R: new Buttons_C(),// неоходим для обработки кнопок
    gameState_R: new GameState_C(),// это сама игра
    timer_R: new Timer_C(),// необходим для организации цикла игры

    NAME: "Index_R",
    setTimeoutCount: -1,
    setTimeoutCountStop: 0,
    delaySleepGameMs: 0,
    isLoop: false,
    STOP_LOOP: 30000,
    //=============================================================================
    iniM() {

        Index_R.contextCanvas = Index_R.idCanvas.getContext('2d'),//CanvasRenderingContext2D

        Index_R.buttons_R.iniM();
        Index_R.timer_R.iniM();
        Index_R.gameState_R.iniM(Index_R.timer_R, Index_R.idCanvas as HTMLCanvasElement, Index_R.contextCanvas);
     
        Index_R.buttons_R.elementbuttonTest.addEventListener("click", this.buttons_R.click, false); //click  input
        //console.log('Index_R -> iniM(): currentTimeMs = ' + Index_R.timer_R.getCurrentTimeMs());
    },
    //=============================================================================

    // Кнопки----------------------------------------------------------------------
    //=============================================================================
    startGameButton() {
        Index_R.buttons_R.startButtonAttribute();
        if (Index_R.buttons_R.startButtonName == Index_R.buttons_R.START) {
            Index_R.gameState_R.setStartGame();
            if (!Index_R.isLoop) {
                console.log('Index_R->startGameButton->call Index_R.loop()');
                Index_R.loop();
            }
        } else {
            Index_R.gameState_R.setContinueGame();
        }
    },
    //=============================================================================
    //=============================================================================
    pauseGameButton() {
        Index_R.buttons_R.pauseButtonAttribute();
        Index_R.gameState_R.setPauseGame();
    },
    //=============================================================================
    //=============================================================================
    endGameButton() {
        Index_R.buttons_R.endButtonAttribute();
        Index_R.gameState_R.setEndGame();
    },
    //=============================================================================
    //=============================================================================
    testButton() {
        console.log('Index_R->testButton');
    },
    //=============================================================================
    //Запуск игры------------------------------------------------------------------
    //=============================================================================
    startMenu() {
        Index_R.gameState_R.setMenuGame();
        if (!Index_R.isLoop) {
            console.log('Index_R->startMenu->call Index_R.loop()');
            Index_R.loop();
        }
    },
    //=============================================================================
    //=============================================================================
    // setTimeout позволяет вызвать функцию один раз через определённый интервал времени
    loop() {
        Index_R.isLoop = true;
        Index_R.setTimeoutCount = -1;

        //Задержка перед запуском в миллисекундах (1000 мс = 1 с). Значение по умолчанию – 0.
        Index_R.delaySleepGameMs = Index_R.timer_R.getTickTimeThreadSleepGameMs();

        Index_R.setTimeoutCount = setTimeout(function tick() {

            Index_R.timer_R.updateTimeBeforeTick(); //
            Index_R.gameState_R.tick();
            Index_R.timer_R.updateTimeAfterTick();
            Index_R.delaySleepGameMs = Index_R.timer_R.getTickTimeThreadSleepGameMs();

            if (Index_R.gameState_R.isEndGame()) Index_R.isLoop = false;
            if (Index_R.isLoop) Index_R.setTimeoutCount = setTimeout(tick, Index_R.delaySleepGameMs);

            if ((Index_R.setTimeoutCount - Index_R.setTimeoutCountStop) > Index_R.STOP_LOOP) {
                Index_R.gameState_R.setEndGame();
                Index_R.buttons_R.endButtonAttribute();
            }

        }, Index_R.delaySleepGameMs);
        //console.log("Index_R->loop() setTimeoutCount = " + Index_R.setTimeoutCount);
    },
    //=============================================================================
}

export { Index_R };
if (global_R.print_module_start_finish) console.log('index.js -> module finish');

/*
    <form>
        <label for="name">Имя:</label>
        <input type="text" id="name" name="name" /><br />

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" /><br />

        <label for="message">Сообщение:</label><br />
        <textarea id="message" name="message"></textarea><br />

        <button type="submit" onclick="submitForm()">Отправить</button>
    </form>

   //   showPrompt("Введите что-нибудь<br>...умное :)", function(value) {
    //   alert(value);
    //   });

        function submitForm() {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Делаем что-то с данными формы, например отправляем на сервер
        }
*/