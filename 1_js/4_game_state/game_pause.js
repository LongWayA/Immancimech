let Copyright_AnBr75 = 2024;
import { global_R } from '../1_index/global.js';
if (global_R.print_module_start_finish)
    console.log('game_pause.js -> module start');
import { DrawGamePause_C } from '../2_graphics_2d/drow_game_pause.js';
class GamePause_C {
    drawGamePause_R = new DrawGamePause_C();
    static NAME = "GamePause_C";
    isOk = "";
    constructor() {
    }
    iniM() {
        this.drawGamePause_R.iniM();
        this.drawGamePause_R.isOk = "OK";
    }
    startM(html5Canvas_R, html5Sprites_R) {
        this.drawGamePause_R.startM(html5Canvas_R, html5Sprites_R);
    }
    tick(countTick) {
        this.drawGamePause_R.tick(countTick);
    }
}
let gamePause_R = new GamePause_C();
gamePause_R.iniM();
export { gamePause_R, GamePause_C };
if (global_R.print_module_start_finish)
    console.log('game_pause.js -> module finish');
gamePause_R.isOk = "OK";
