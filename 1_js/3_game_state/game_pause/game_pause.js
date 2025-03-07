let Copyright_AnBr75 = 2024;
import { global_R } from '../../1_index/global.js';
if (global_R.print_module_start_finish)
    console.log('game_pause.js -> module start');
import { DrawGamePause_C } from './drow_game_pause.js';
class GamePause_C {
    local_R = null;
    drawGamePause_R = new DrawGamePause_C();
    static NAME = "GamePause_C";
    constructor() {
    }
    iniM(html5Canvas_R, html5Sprites_R, local_R) {
        this.local_R = local_R;
        this.drawGamePause_R.iniM(html5Canvas_R, html5Sprites_R);
    }
    tick(countTick) {
        this.drawGamePause_R.tick(countTick);
    }
}
export { GamePause_C };
if (global_R.print_module_start_finish)
    console.log('game_pause.js -> module finish');
