let Copyright_AnBr75 = 2025;
import { global_R } from './global.js';
if (global_R.print_module_start_finish)
    console.log('index.js -> module start');
import { Buttons_C } from './buttons.js';
import { GameState_C } from '../3_game_state/game_state.js';
import { Timer_C } from './timer.js';
let Index_R = {
    idCanvas: document.getElementById('game-canvas'),
    contextCanvas: null,
    buttons_R: new Buttons_C(),
    gameState_R: new GameState_C(),
    timer_R: new Timer_C(),
    NAME: "Index_R",
    setTimeoutCount: -1,
    setTimeoutCountStop: 0,
    delaySleepGameMs: 0,
    isLoop: false,
    STOP_LOOP: 30000,
    iniM() {
        Index_R.contextCanvas = Index_R.idCanvas.getContext('2d'),
            Index_R.buttons_R.iniM();
        Index_R.timer_R.iniM();
        Index_R.gameState_R.iniM(Index_R.timer_R, Index_R.idCanvas, Index_R.contextCanvas);
        Index_R.buttons_R.elementbuttonTest.addEventListener("click", this.buttons_R.click, false);
    },
    startGameButton() {
        Index_R.buttons_R.startButtonAttribute();
        if (Index_R.buttons_R.startButtonName == Index_R.buttons_R.START) {
            Index_R.gameState_R.setStartGame();
            if (!Index_R.isLoop) {
                console.log('Index_R->startGameButton->call Index_R.loop()');
                Index_R.loop();
            }
        }
        else {
            Index_R.gameState_R.setContinueGame();
        }
    },
    pauseGameButton() {
        Index_R.buttons_R.pauseButtonAttribute();
        Index_R.gameState_R.setPauseGame();
    },
    endGameButton() {
        Index_R.buttons_R.endButtonAttribute();
        Index_R.gameState_R.setEndGame();
    },
    testButton() {
        console.log('Index_R->testButton');
    },
    startMenu() {
        Index_R.gameState_R.setMenuGame();
        if (!Index_R.isLoop) {
            console.log('Index_R->startMenu->call Index_R.loop()');
            Index_R.loop();
        }
    },
    loop() {
        Index_R.isLoop = true;
        Index_R.setTimeoutCount = -1;
        Index_R.delaySleepGameMs = Index_R.timer_R.getTickTimeThreadSleepGameMs();
        Index_R.setTimeoutCount = setTimeout(function tick() {
            Index_R.timer_R.updateTimeBeforeTick();
            Index_R.gameState_R.tick();
            Index_R.timer_R.updateTimeAfterTick();
            Index_R.delaySleepGameMs = Index_R.timer_R.getTickTimeThreadSleepGameMs();
            if (Index_R.gameState_R.isEndGame())
                Index_R.isLoop = false;
            if (Index_R.isLoop)
                Index_R.setTimeoutCount = setTimeout(tick, Index_R.delaySleepGameMs);
            if ((Index_R.setTimeoutCount - Index_R.setTimeoutCountStop) > Index_R.STOP_LOOP) {
                Index_R.gameState_R.setEndGame();
                Index_R.buttons_R.endButtonAttribute();
            }
        }, Index_R.delaySleepGameMs);
    },
};
export { Index_R };
if (global_R.print_module_start_finish)
    console.log('index.js -> module finish');
