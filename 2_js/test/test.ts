// @ts-check
/** 
 * @module test
 * @author ABr75
 * @copyright Copyright (c) 2024, ABr75 and/or its affiliates. All rights reserved.
 * @version Last_modified -12.11.2023-02.03m.2024-
/**
* НАЗНАЧЕНИЕ
*/

import { global_R } from '../1_loop/global.js';

if (global_R.print_module_start_finish) console.log('test.js -> module start');

//ai
import { ai_R } from '../5_ai_control/ai.js';

//background
import { background_R } from '../local/background/background.js';
import { TileForBackground_C, TileForBackground_isOk } from '../local/background/tile_for_background_c.js';

//creatures
import { imps_R } from '../local/creatures/creatures.js';

//fight
import { fight_R } from '../fight/fight.js';

//frames
import { frames_R } from '../2_render/frames/frames.js';

//game
import { gameState_R } from '../4_game_state/game_state.js';

//global 
// global_R перенес наверх ибо флаг использую


//html5_canvas
import { html5CanvasText_R } from '../2_render/html5_canvas/html5_canvas_text.js';
import { html5CanvasPrimitive_R } from '../2_render/html5_canvas/html5_canvas_primitive.js';
import { html5CanvasImage_R } from '../2_render/html5_canvas/html5_canvas_image.js';
import { html5CanvasMouseEvent_R } from '../3_user_control/html5_canvas_mouse_event.js';
import { html5Canvas_R } from '../2_render/html5_canvas/html5_canvas_h.js';

//html5_sprites
import { html5SpritesCollection_R } from '../2_render/html5_sprites/html5_sprites_collection.js';
import { html5SpritesImmortal_R } from '../2_render/html5_sprites/html5_sprites_immortal.js';
import { html5Sprites_R } from '../2_render/html5_sprites/html5_sprites.js';
import { Sprite_С, Sprite_С_isOk } from '../2_render/html5_sprites/sprite_c.js';
import { Sprite_Imm_C, Sprite_I_C_isOk } from '../2_render/html5_sprites/sprite_i_c.js';

//items
//-

//local
import { local_R } from '../local/local.js';

//loop
import { buttons_R } from '../3_user_control/buttons.js';
import { loop_R } from '../1_loop/loop_o.js';
import { requestAnimationFrame_R } from '../2_render/request_animation_o.js';
import { timer_R } from '../1_loop/timer.js';
import { startClient_R } from '../1_loop/start_client.js';

//moove
import { run_R } from '../moove/run.js';

//render
import { render_R } from '../2_render/render.js';

//test 
//import { test_R } from '../test/test.js';

//user_avatars
import { Immortal_C, Immortal_C_isOk } from '../user_avatars/immortal_c.js';
import { immortals_R } from '../user_avatars/immortals.js';

//user_control
import { userInputKeyboardEvent_R } from '../3_user_control/keyboard_event_o.js';
import { userInputKeyboard_R } from '../3_user_control/keyboard.js';
import { mouse_R } from '../3_user_control/mouse.js';

class Test_C {

    public NAME: string = "test_R";
    public isOk: string = "";

    //=============================================================================
    constructor() {
    }
    //=============================================================================

    //=============================================================================
    iniM(): void {
    }
    //=============================================================================

    //=============================================================================
    startM(): void {
    }
    //=============================================================================

    //=============================================================================
    // 
    test(): void {

        //ai
        if (ai_R.isOk != "OK") {
            console.log("test.js -> ai.js NOT OK!");
        }

        //background
        if (background_R.isOk != "OK") {
            console.log("test.js -> background.js NOT OK!");
        }

        // tile_for_background_c TODO 
        if (TileForBackground_isOk != "OK") {
            console.log("test.js -> tile_for_background_c.js NOT OK!");
        }

        //creatures
        if (imps_R.isOk != "OK") {
            console.log("test.js -> creatures.js NOT OK!");
        }

        //fight
        if (fight_R.isOk != "OK") {
            console.log("test.js -> fight.js NOT OK!");
        }

        //frames
        if (frames_R.isOk != "OK") {
            console.log("test.js -> frames.js NOT OK!");
        }

        //game
        if (gameState_R.isOk != "OK") {
            console.log("test.js -> game_state.js NOT OK!");
        }

        //global 
        if (global_R.isOk != "OK") {
            console.log("test.js -> global.js NOT OK!");
        }

        //html5_canvas
        if (html5CanvasText_R.isOk != "OK") {
            console.log("test.js -> 2_html5_canvas_text.js NOT OK!");
        }

        if (html5CanvasPrimitive_R.isOk != "OK") {
            console.log("test.js -> 3_html5_canvas_primitive.js NOT OK!");
        }

        if (html5CanvasImage_R.isOk != "OK") {
            console.log("test.js -> 4_html5_canvas_image.js NOT OK!");
        }

        if (html5CanvasMouseEvent_R.isOk != "OK") {
            console.log("test.js -> 5_html5_canvas_mouse_event.js NOT OK!");
        }

        if (html5Canvas_R.isOk != "OK") {
            console.log("test.js -> 6_html5_canvas_h.js NOT OK!");
        }

        //html5_sprites
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


        //local
        if (local_R.isOk != "OK") {
            console.log("test.js ->local.js NOT OK!");
        }

        //loop
        if (buttons_R.isOk != "OK") {
            console.log("test.js ->buttons.js NOT OK!");
        }

        if (loop_R.isOk != "OK") {
            console.log("test.js ->loop.js NOT OK!");
        }

        if (timer_R.isOk != "OK") {
            console.log("test.js -> timer.js NOT OK!");
        }

        if (requestAnimationFrame_R.isOk != "OK") {
            console.log("test.js -> request_animation.js NOT OK!");
        }

        if (startClient_R.isOk != "OK") {
            console.log("test.js -> start_client.js NOT OK!");
        }

        //moove
        if (run_R.isOk != "OK") {
            console.log("test.js -> run.js NOT OK!");
        }

        //render
        if (render_R.isOk != "OK") {
            console.log("test.js -> render.js NOT OK!");
        }

        //test 
        //import { test_R } from '../test/test.js';

        //user_avatars
        if (immortals_R.isOk != "OK") {
            console.log("test.js -> immortals.js NOT OK!");
        }

        if (Immortal_C_isOk != "OK") {
            console.log("test.js -> immortal_c.js NOT OK!");
        }

        //user_control
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
    //=============================================================================

}

let test_R = new Test_C();

test_R.iniM();

export { test_R, Test_C };

if (global_R.print_module_start_finish) console.log('test.js -> module finish');