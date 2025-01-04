import { global_R } from './global.js';
if (global_R.print_module_start_finish)
    console.log('start_client.js -> module start');
import { html5Canvas_R } from '../2_graphics_2d/html5_canvas/html5_canvas.js';
import { buttons_R } from './buttons.js';
import { gameState_R } from '../4_game_state/game_state.js';
import { loop_R } from '../3_loop/loop_o.js';
import { test_R } from '../test/test.js';
import { drowGame_R } from '../2_graphics_2d/drow_game.js';
class Index_C {
    static NAME = "Index_C";
    isOk = "";
    idCanvas = null;
    contextCanvas = null;
    constructor() {
    }
    iniM() {
    }
    startButton() {
        buttons_R.startButtonAttribute();
        gameState_R.setGoGame();
        if (!loop_R.isLoop) {
            console.log('Index_C->startButton->call loop_R.loop()');
            loop_R.loop();
        }
    }
    pauseButton() {
        buttons_R.pauseButtonAttribute();
        gameState_R.setPauseGame();
    }
    endButton() {
        buttons_R.endButtonAttribute();
        gameState_R.setEndGame();
    }
    testButton() {
        console.log('Index_C->testButton');
    }
    startGame(idCanvas, contextCanvas) {
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
}
let Index_R = new Index_C();
Index_R.iniM();
export { Index_R, Index_C };
if (global_R.print_module_start_finish)
    console.log('index.js -> module finish');
Index_R.isOk = "OK";
