let Copyright_AnBr75 = 2025;
import { global_R } from './global.js';
if (global_R.print_module_start_finish)
    console.log('start_client.js -> module start');
import { html5Canvas_R } from '../2_graphics_2d/html5_canvas/html5_canvas.js';
import { Buttons_C } from './buttons.js';
import { gameState_R } from '../4_game_state/game_state.js';
import { test_R } from '../test/test.js';
import { timer_R } from './timer.js';
let Index_R = {
    NAME: "Index_R",
    isOk: "",
    buttons_R: new Buttons_C(),
    idCanvas: null,
    contextCanvas: null,
    timerCount: -1,
    timerCountStop: 0,
    delayMs: 0,
    isLoop: false,
    STOP_LOOP: 30000,
    iniM() {
        Index_R.buttons_R.iniM();
        Index_R.buttons_R.elementbuttonTest.addEventListener("click", this.buttons_R.click, false);
        Index_R.buttons_R.isOk = "OK";
    },
    startM() {
    },
    startButton() {
        Index_R.buttons_R.startButtonAttribute();
        gameState_R.setContinueGame();
        if (!Index_R.isLoop) {
            console.log('Index_R->startButton->call Index_R.loop()');
            Index_R.loop();
        }
    },
    pauseButton() {
        Index_R.buttons_R.pauseButtonAttribute();
        gameState_R.setPauseGame();
    },
    endButton() {
        Index_R.buttons_R.endButtonAttribute();
        gameState_R.setEndGame();
    },
    testButton() {
        console.log('Index_R->testButton');
    },
    startGame(idCanvas, contextCanvas) {
        Index_R.idCanvas = idCanvas;
        Index_R.contextCanvas = contextCanvas;
        html5Canvas_R.startM(idCanvas, contextCanvas);
        gameState_R.startM();
        test_R.test();
        gameState_R.setStartGame();
        if (!Index_R.isLoop) {
            console.log('Index_R->startGame->call Index_R.loop()');
            Index_R.loop();
        }
    },
    loop() {
        Index_R.isLoop = true;
        Index_R.timerCount = -1;
        Index_R.delayMs = timer_R.getTickTimeThreadSleepGameMs();
        Index_R.timerCount = setTimeout(function tick() {
            timer_R.updateTimeBeforeTick();
            gameState_R.tick();
            timer_R.updateTimeAfterTick();
            Index_R.delayMs = timer_R.getTickTimeThreadSleepGameMs();
            if (gameState_R.isEndGame())
                Index_R.isLoop = false;
            if (Index_R.isLoop)
                Index_R.timerCount = setTimeout(tick, Index_R.delayMs);
            if ((Index_R.timerCount - Index_R.timerCountStop) > Index_R.STOP_LOOP) {
                gameState_R.setEndGame();
                Index_R.buttons_R.endButtonAttribute();
            }
        }, Index_R.delayMs);
        console.log("Index_R->loop() timerCount = " + Index_R.timerCount);
    },
};
Index_R.iniM();
export { Index_R };
if (global_R.print_module_start_finish)
    console.log('index.js -> module finish');
Index_R.isOk = "OK";
