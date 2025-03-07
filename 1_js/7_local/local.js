let Copyright_AnBr75 = 2024;
import { global_R } from '../1_index/global.js';
if (global_R.print_module_start_finish)
    console.log('local_c.js -> module start');
import { Immortals_C } from '../user_avatars/immortals.js';
import { Background_C } from '../7_local/background/background.js';
class Local_C {
    immortals_R = new Immortals_C();
    background_R = new Background_C();
    userInputKeyboard_R = null;
    mouse_R = null;
    NAME = "Local_C";
    constructor() {
    }
    iniM(html5Canvas_R, html5Sprites_R, userInputKeyboard_R, mouse_R) {
        this.userInputKeyboard_R = userInputKeyboard_R;
        this.mouse_R = mouse_R;
        this.background_R.iniM(html5Canvas_R, html5Sprites_R);
        this.immortals_R.iniM(html5Canvas_R, html5Sprites_R);
    }
    tick() {
    }
    drow() {
    }
}
export { Local_C };
if (global_R.print_module_start_finish)
    console.log('local_c.js -> module finish');
