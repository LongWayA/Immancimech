import { global_R } from '../1_index/global.js';
if (global_R.print_module_start_finish)
    console.log('game_end.js -> module start');
import { requestAnimationFrame_R } from '../2_graphics_2d/request_animation_o.js';
class GameEnd_C {
    NAME = "GameEnd_C";
    isOk = "";
    constructor() {
    }
    iniM() {
    }
    startM() {
    }
    tick() {
        requestAnimationFrame(requestAnimationFrame_R.drawGameEnd);
    }
}
let gameEnd_R = new GameEnd_C();
gameEnd_R.iniM();
export { gameEnd_R, GameEnd_C };
if (global_R.print_module_start_finish)
    console.log('game_end.js -> module finish');
gameEnd_R.isOk = "OK";
