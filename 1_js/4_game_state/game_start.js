let Copyright_AnBr75 = 2024;
import { global_R } from '../1_index/global.js';
if (global_R.print_module_start_finish)
    console.log('game_start.js -> module start');
import { DrawGameStart_C } from '../2_graphics_2d/drow_game_start.js';
class GameStart_C {
    drawGameStart_R = new DrawGameStart_C();
    static NAME = "GameStart_C";
    isOk = "";
    constructor() {
    }
    iniM() {
    }
    startM(html5Canvas_R, html5Sprites_R, timer_R) {
        this.drawGameStart_R.startM(html5Canvas_R, html5Sprites_R, timer_R);
        this.drawGameStart_R.isOk = "OK";
    }
    tick(countTick) {
        this.drawGameStart_R.tick(countTick);
    }
}
export { GameStart_C };
if (global_R.print_module_start_finish)
    console.log('game_start.js -> module finish');
