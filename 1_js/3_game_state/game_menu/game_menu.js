let Copyright_AnBr75 = 2025;
import { global_R } from '../../1_index/global.js';
if (global_R.print_module_start_finish)
    console.log('game_start.js -> module start');
import { DrawGameMenu_C } from './drow_game_menu.js';
class GameMenu_C {
    drawGameMenu_R = new DrawGameMenu_C();
    local_R = null;
    static NAME = "GameMenu_C";
    constructor() {
    }
    iniM(html5Canvas_R, html5Sprites_R, timer_R, local_R) {
        this.local_R = local_R;
        this.drawGameMenu_R.iniM(html5Canvas_R, html5Sprites_R, timer_R);
    }
    tick(countTick) {
        this.drawGameMenu_R.tick(countTick);
    }
}
export { GameMenu_C };
if (global_R.print_module_start_finish)
    console.log('game_start.js -> module finish');
