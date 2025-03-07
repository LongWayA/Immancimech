let Copyright_AnBr75 = 2024;
import { global_R } from '../../1_index/global.js';
if (global_R.print_module_start_finish)
    console.log('game_end.js -> module start');
import { DrawGameEnd_C } from './drow_game_end.js';
class GameEnd_C {
    drawGameEnd_R = new DrawGameEnd_C();
    local_R = null;
    static NAME = "GameEnd_C";
    constructor() {
    }
    iniM(html5Canvas_R, html5Sprites_R, local_R) {
        this.local_R = local_R;
        this.drawGameEnd_R.iniM(html5Canvas_R, html5Sprites_R);
    }
    tick() {
        this.drawGameEnd_R.tick();
    }
}
export { GameEnd_C };
if (global_R.print_module_start_finish)
    console.log('game_end.js -> module finish');
