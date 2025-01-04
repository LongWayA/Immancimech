import { global_R } from '../1_index/global.js';
if (global_R.print_module_start_finish)
    console.log('game_pause.js -> module start');
import { requestAnimationFrame_R } from '../2_graphics_2d/request_animation_o.js';
class GamePause_C {
    NAME = "GamePause_C";
    isOk = "";
    constructor() {
    }
    iniM() {
    }
    startM() {
    }
    tick() {
        requestAnimationFrame(requestAnimationFrame_R.drawGamePaused);
    }
}
let gamePause_R = new GamePause_C();
gamePause_R.iniM();
export { gamePause_R, GamePause_C };
if (global_R.print_module_start_finish)
    console.log('game_pause.js -> module finish');
gamePause_R.isOk = "OK";
