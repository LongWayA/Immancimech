let Copyright_AnBr75 = 2024;
import { global_R } from '../../1_index/global.js';
if (global_R.print_module_start_finish)
    console.log('game_start.js -> module start');
import { DrawGameStart_C } from './drow_game_start.js';
class GameStart_C {
    drawGameStart_R = new DrawGameStart_C();
    local_R = null;
    GameState_R = null;
    static NAME = "GameStart_C";
    constructor() {
    }
    iniM(GameState_R, html5Canvas_R, html5Sprites_R, timer_R, local_R) {
        this.local_R = local_R;
        this.GameState_R = GameState_R;
        this.drawGameStart_R.iniM(html5Canvas_R, html5Sprites_R, timer_R);
    }
    tick(countTick) {
        this.drawGameStart_R.tick(countTick);
        console.log('GameStart_R -> tick');
        if (this.GameState_R.count > 5) {
            this.GameState_R.setContinueGame();
        }
    }
}
export { GameStart_C };
if (global_R.print_module_start_finish)
    console.log('game_start.js -> module finish');
