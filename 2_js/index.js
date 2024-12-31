import { global_R } from './global.js';
if (global_R.print_module_start_finish)
    console.log('start_client.js -> module start');
import { html5Canvas_R } from './2_render/html5_canvas/html5_canvas.js';
import { buttons_R } from '../2_js/3_user_control/buttons.js';
import { startClient_R } from './0_start_client/start_client.js';
class Index_C {
    NAME = "Index_C";
    isOk = "";
    idCanvas = null;
    contextCanvas = null;
    constructor() {
    }
    iniM() {
    }
    startButton() {
        buttons_R.startButton();
    }
    ;
    pauseButton() {
        buttons_R.pauseButton();
    }
    ;
    endButton() {
        buttons_R.endButton();
    }
    ;
    testButton() {
        buttons_R.testButton();
    }
    ;
    startGame(idCanvas, contextCanvas) {
        this.idCanvas = idCanvas;
        this.contextCanvas = contextCanvas;
        html5Canvas_R.startM(idCanvas, contextCanvas);
        buttons_R.startM();
        startClient_R.startGame();
    }
}
let Index_R = new Index_C();
startClient_R.iniM();
export { Index_R, Index_C };
if (global_R.print_module_start_finish)
    console.log('index.js -> module finish');
startClient_R.isOk = "OK";
