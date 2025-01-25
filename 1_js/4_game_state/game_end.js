let Copyright_AnBr75 = 2024;
import { global_R } from '../1_index/global.js';
if (global_R.print_module_start_finish)
    console.log('game_end.js -> module start');
import { DrawGameEnd_C } from '../2_graphics_2d/drow_game_end.js';
class GameEnd_C {
    drawGameEnd_R = new DrawGameEnd_C();
    static NAME = "GameEnd_C";
    isOk = "";
    constructor() {
    }
    iniM() {
        this.drawGameEnd_R.iniM();
        this.drawGameEnd_R.isOk = "OK";
    }
    startM(html5Canvas_R, html5Sprites_R) {
        this.drawGameEnd_R.startM(html5Canvas_R, html5Sprites_R);
    }
    tick() {
        this.drawGameEnd_R.tick();
    }
}
export { GameEnd_C };
if (global_R.print_module_start_finish)
    console.log('game_end.js -> module finish');
