/** 
 * test
 * @author AnBr75
 * @copyright Copyright (c) 2024, AnBr75 and/or its affiliates. All rights reserved.
 * @version Last_modified -12.11.2023-02.03m.2024-
 */
let Copyright_AnBr75 = 2024;
 
/**
* НАЗНАЧЕНИЕ
*/

import { global_R } from '../1_index/global.js';

if (global_R.print_module_start_finish) console.log('test.js -> module start');

//ai
import { ai_R } from '../6_ai_control/ai.js';

//background
import { TileForBackground_isOk } from '../7_local/background/tile_for_background_c.js';

//creatures
import { imps_R } from '../7_local/creatures/creatures.js';

//fight
import { fight_R } from '../fight/fight.js';


//global 
// global_R перенес наверх ибо флаг использую


//html5_canvas
import { html5CanvasMouseEvent_R } from '../5_user_control/mouse/html5_canvas_mouse_event.js';

//html5_sprites


import { Sprite_С_isOk } from '../2_graphics_2d/html5_sprites/sprite_c.js';
import { Sprite_I_C_isOk } from '../2_graphics_2d/html5_sprites/sprite_i_c.js';

//items
//-

//local
import { local_R } from '../7_local/local.js';

//test 
//import { test_R } from '../test/test.js';

//user_avatars
import { Immortal_C_isOk } from '../user_avatars/immortal_c.js';

//user_control
import { userInputKeyboardEvent_R } from '../5_user_control/keyboard/keyboard_event_o.js';

class Test_C {

    public static NAME: string = "test_R";
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

        //global 
        if (global_R.isOk != "OK") {
            console.log("test.js -> global.js NOT OK!");
        }

        //html5_canvas
        if (html5CanvasMouseEvent_R.isOk != "OK") {
            console.log("test.js -> 5_html5_canvas_mouse_event.js NOT OK!");
        }

        //html5_sprites

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

        //user_avatars

        if (Immortal_C_isOk != "OK") {
            console.log("test.js -> immortal_c.js NOT OK!");
        }

        //user_control
        
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