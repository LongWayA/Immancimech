let Copyright_AnBr75 = 2024;
import { global_R } from '../1_index/global.js';
if (global_R.print_module_start_finish)
    console.log('test.js -> module start');
import { ai_R } from '../6_ai_control/ai.js';
import { background_R } from '../7_local/background/background.js';
import { TileForBackground_isOk } from '../7_local/background/tile_for_background_c.js';
import { imps_R } from '../7_local/creatures/creatures.js';
import { fight_R } from '../fight/fight.js';
import { frames_R } from '../2_graphics_2d/frames/frames.js';
import { gameState_R } from '../4_game_state/game_state.js';
import { html5CanvasMouseEvent_R } from '../5_user_control/mouse/html5_canvas_mouse_event.js';
import { html5Canvas_R } from '../2_graphics_2d/html5_canvas/html5_canvas.js';
import { html5SpritesCollection_R } from '../2_graphics_2d/html5_sprites/html5_sprites_collection.js';
import { html5SpritesImmortal_R } from '../2_graphics_2d/html5_sprites/html5_sprites_immortal.js';
import { html5Sprites_R } from '../2_graphics_2d/html5_sprites/html5_sprites.js';
import { Sprite_С_isOk } from '../2_graphics_2d/html5_sprites/sprite_c.js';
import { Sprite_I_C_isOk } from '../2_graphics_2d/html5_sprites/sprite_i_c.js';
import { local_R } from '../7_local/local.js';
import { run_R } from '../moove/run.js';
import { Immortal_C_isOk } from '../user_avatars/immortal_c.js';
import { immortals_R } from '../user_avatars/immortals.js';
import { userInputKeyboardEvent_R } from '../5_user_control/keyboard/keyboard_event_o.js';
import { userInputKeyboard_R } from '../5_user_control/keyboard/keyboard.js';
import { mouse_R } from '../5_user_control/mouse/mouse.js';
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
        if (background_R.isOk != "OK") {
            console.log("test.js -> background.js NOT OK!");
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
        if (frames_R.isOk != "OK") {
            console.log("test.js -> frames.js NOT OK!");
        }
        if (gameState_R.isOk != "OK") {
            console.log("test.js -> game_state.js NOT OK!");
        }
        if (global_R.isOk != "OK") {
            console.log("test.js -> global.js NOT OK!");
        }
        if (html5CanvasMouseEvent_R.isOk != "OK") {
            console.log("test.js -> 5_html5_canvas_mouse_event.js NOT OK!");
        }
        if (html5Canvas_R.isOk != "OK") {
            console.log("test.js -> 6_html5_canvas_h.js NOT OK!");
        }
        if (html5SpritesCollection_R.isOk != "OK") {
            console.log("test.js -> html5_sprites_collection.js NOT OK!");
        }
        if (html5SpritesImmortal_R.isOk != "OK") {
            console.log("test.js -> html5_sprites_immortal.js NOT OK!");
        }
        if (html5Sprites_R.isOk != "OK") {
            console.log("test.js -> html5_sprites.js NOT OK!");
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
        if (run_R.isOk != "OK") {
            console.log("test.js -> run.js NOT OK!");
        }
        if (immortals_R.isOk != "OK") {
            console.log("test.js -> immortals.js NOT OK!");
        }
        if (Immortal_C_isOk != "OK") {
            console.log("test.js -> immortal_c.js NOT OK!");
        }
        if (mouse_R.isOk != "OK") {
            console.log("test.js -> mouse.js NOT OK!");
        }
        if (userInputKeyboard_R.isOk != "OK") {
            console.log("test.js ->keyboard.js NOT OK!");
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
