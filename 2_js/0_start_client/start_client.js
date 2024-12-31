import { global_R } from '../global.js';
if (global_R.print_module_start_finish)
    console.log('start_client.js -> module start');
import { gameState_R } from '../4_game_state/game_state.js';
import { loop_R } from '../1_loop/loop_o.js';
import { background_R } from '../local/background/background.js';
import { frames_R } from '../2_render/frames/frames.js';
import { html5SpritesImmortal_R } from '../2_render/html5_sprites/html5_sprites_immortal.js';
import { render_R } from '../2_render/render.js';
import { test_R } from '../test/test.js';
import { immortals_R } from '../user_avatars/immortals.js';
class StartClient_C {
    NAME = "StartClient_C";
    isOk = "";
    constructor() {
    }
    iniM() {
    }
    startGame() {
        gameState_R.startM();
        loop_R.startM();
        test_R.test();
        this.startModules();
        gameState_R.setStartGame();
        if (!loop_R.isLoop) {
            console.log('StartClient_C->startGame->loop_R.loop()');
            loop_R.loop();
        }
    }
    startModules() {
        background_R.startM();
        frames_R.startM();
        html5SpritesImmortal_R.startM();
        render_R.startM(gameState_R);
        immortals_R.startM();
    }
}
let startClient_R = new StartClient_C();
startClient_R.iniM();
export { startClient_R, StartClient_C };
if (global_R.print_module_start_finish)
    console.log('start_client.js -> module finish');
startClient_R.isOk = "OK";
