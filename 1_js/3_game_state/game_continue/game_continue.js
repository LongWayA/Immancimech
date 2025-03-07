let Copyright_AnBr75 = 2024;
import { global_R } from '../../1_index/global.js';
if (global_R.print_module_start_finish)
    console.log('game_continue.ts -> module start');
import { Run_C } from '../../moove/run.js';
import { DrawGameContinue_C } from './drow_game_continue.js';
class GameContinue_C {
    drawGameContinue_R = new DrawGameContinue_C();
    userInputKeyboard_R = null;
    mouse_R = null;
    run_R = new Run_C();
    local_R = null;
    static NAME = "GameContinue_C";
    constructor() {
    }
    iniM(html5Canvas_R, html5Sprites_R, userInputKeyboard_R, mouse_R, local_R) {
        this.local_R = local_R;
        this.userInputKeyboard_R = userInputKeyboard_R;
        this.mouse_R = mouse_R;
        this.drawGameContinue_R.iniM(html5Canvas_R, html5Sprites_R, local_R.immortals_R, local_R.background_R, userInputKeyboard_R, mouse_R);
        this.run_R.iniM(local_R.immortals_R, local_R.background_R);
    }
    tick(countTick) {
        this.userInputKeyboard_R.tick(this.local_R.immortals_R, this.local_R.background_R);
        this.mouse_R.tick();
        this.run_R.tick();
        this.drawGameContinue_R.tick(countTick);
    }
}
export { GameContinue_C };
if (global_R.print_module_start_finish)
    console.log('game_continue.ts -> module finish');
