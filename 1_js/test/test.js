let Copyright_AnBr75 = 2024;
import { global_R } from '../1_index/global.js';
if (global_R.print_module_start_finish)
    console.log('test.js -> module start');
import { ai_R } from '../6_ai_control/ai.js';
import { TileForBackground_isOk } from '../7_local/background/tile_for_background_c.js';
import { imps_R } from '../7_local/creatures/creatures.js';
import { fight_R } from '../fight/fight.js';
import { html5CanvasMouseEvent_R } from '../5_user_control/mouse/html5_canvas_mouse_event.js';
import { Sprite_С_isOk } from '../2_graphics_2d/html5_sprites/sprite_c.js';
import { Sprite_I_C_isOk } from '../2_graphics_2d/html5_sprites/sprite_i_c.js';
import { local_R } from '../7_local/local.js';
import { Immortal_C_isOk } from '../user_avatars/immortal_c.js';
import { userInputKeyboardEvent_R } from '../5_user_control/keyboard/keyboard_event_o.js';
class Test_C {
    static NAME = "test_R";
    isOk = "";
    constructor() {
    }
    iniM() {
    }
    startM() {
    }
    test() {
        if (ai_R.isOk != "OK") {
            console.log("test.js -> ai.js NOT OK!");
        }
        if (TileForBackground_isOk != "OK") {
            console.log("test.js -> tile_for_background_c.js NOT OK!");
        }
        if (imps_R.isOk != "OK") {
            console.log("test.js -> creatures.js NOT OK!");
        }
        if (fight_R.isOk != "OK") {
            console.log("test.js -> fight.js NOT OK!");
        }
        if (global_R.isOk != "OK") {
            console.log("test.js -> global.js NOT OK!");
        }
        if (html5CanvasMouseEvent_R.isOk != "OK") {
            console.log("test.js -> 5_html5_canvas_mouse_event.js NOT OK!");
        }
        if (Sprite_С_isOk != "OK") {
            console.log("test.js -> sprite_c.js NOT OK!");
        }
        if (Sprite_I_C_isOk != "OK") {
            console.log("test.js -> sprite_c.js NOT OK!");
        }
        if (local_R.isOk != "OK") {
            console.log("test.js ->local.js NOT OK!");
        }
        if (Immortal_C_isOk != "OK") {
            console.log("test.js -> immortal_c.js NOT OK!");
        }
        if (userInputKeyboardEvent_R.isOk != "OK") {
            console.log("test.js ->keyboard_event_o.js NOT OK!");
        }
    }
}
let test_R = new Test_C();
test_R.iniM();
export { test_R, Test_C };
if (global_R.print_module_start_finish)
    console.log('test.js -> module finish');
