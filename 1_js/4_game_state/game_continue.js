let Copyright_AnBr75 = 2024;
import { global_R } from '../1_index/global.js';
if (global_R.print_module_start_finish)
    console.log('game_go.js -> module start');
import { Run_C } from '../moove/run.js';
import { fight_R } from '../fight/fight.js';
import { ai_R } from '../6_ai_control/ai.js';
import { DrawGameContinue_C } from '../2_graphics_2d/drow_game_continue.js';
import { Immortals_C } from '../user_avatars/immortals.js';
import { Background_C } from '../7_local/background/background.js';
class GameContinue_C {
    drawGameContinue_R = new DrawGameContinue_C();
    immortals_R = new Immortals_C();
    background_R = new Background_C();
    userInputKeyboard_R = null;
    mouse_R = null;
    run_R = new Run_C();
    static NAME = "GameContinue_C";
    isOk = "";
    constructor() {
    }
    iniM() {
        this.drawGameContinue_R.iniM();
        this.drawGameContinue_R.isOk = "OK";
        this.immortals_R.iniM();
        this.immortals_R.isOk = "OK";
        this.background_R.iniM();
        this.background_R.isOk = "OK";
        this.run_R.iniM();
        this.run_R.isOk = "OK";
    }
    startM(html5Canvas_R, html5Sprites_R, userInputKeyboard_R, mouse_R) {
        this.userInputKeyboard_R = userInputKeyboard_R;
        this.mouse_R = mouse_R;
        this.drawGameContinue_R.startM(html5Canvas_R, html5Sprites_R, this.immortals_R, this.background_R, userInputKeyboard_R, mouse_R);
        this.background_R.startM(html5Canvas_R, html5Sprites_R);
        this.immortals_R.startM(html5Canvas_R, html5Sprites_R);
        this.run_R.startM(this.immortals_R, this.background_R);
    }
    tick(countTick) {
        this.userInputKeyboard_R.tick(this.immortals_R, this.background_R);
        this.mouse_R.tick();
        ai_R.tick();
        this.run_R.tick();
        fight_R.tick();
        this.drawGameContinue_R.tick(countTick);
    }
}
export { GameContinue_C };
if (global_R.print_module_start_finish)
    console.log('game_go.js -> module finish');
