import { global_R } from '../global.js';
if (global_R.print_module_start_finish)
    console.log('game_start.js -> module start');
import { requestAnimationFrame_R } from '../2_render/request_animation_o.js';
class GameStart_C {
    NAME = "GameStart_C";
    isOk = "";
    constructor() {
    }
    iniM() {
    }
    startM() {
    }
    tick() {
        requestAnimationFrame(requestAnimationFrame_R.drawGameStart);
    }
}
let gameStart_R = new GameStart_C();
gameStart_R.iniM();
export { gameStart_R, GameStart_C };
if (global_R.print_module_start_finish)
    console.log('game_start.js -> module finish');
gameStart_R.isOk = "OK";
