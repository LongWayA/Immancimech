/** 
 * @author AnBr75
 * @copyright Copyright (c) 2024, AnBr75 and/or its affiliates. All rights reserved.
 * @version created 24.02m.2024
 */

let Copyright_AnBr75 = 2024;

/**
* НАЗНАЧЕНИЕ
*/

import { global_R } from '../1_index/global.js';
if (global_R.print_module_start_finish) console.log('local_c.js -> module start');

import { Html5Canvas_C } from '../2_graphics_2d/html5_canvas/html5_canvas.js';
import { Html5Sprites_C } from '../2_graphics_2d/html5_sprites/html5_sprites.js';

import { Immortals_C } from '../user_avatars/immortals.js';
import { Background_C } from '../7_local/background/background.js';

import { UserInputKeyboard_C } from '../4_user_control/keyboard/keyboard.js';
import { Mouse_C } from '../4_user_control/mouse/mouse.js';

class Local_C {

    immortals_R = new Immortals_C();
    background_R = new Background_C()

    userInputKeyboard_R: UserInputKeyboard_C | null = null;
    mouse_R: Mouse_C | null = null;

    public NAME = "Local_C";

    //=============================================================================
    constructor() {
    }
    //=============================================================================

    //=============================================================================
    iniM(html5Canvas_R: Html5Canvas_C, html5Sprites_R: Html5Sprites_C, userInputKeyboard_R: UserInputKeyboard_C
        , mouse_R: Mouse_C): void {
        this.userInputKeyboard_R = userInputKeyboard_R;
        this.mouse_R = mouse_R;

        this.background_R.iniM(html5Canvas_R, html5Sprites_R);
        this.immortals_R.iniM(html5Canvas_R, html5Sprites_R);
    }
    //=============================================================================

    //=============================================================================
    tick(): void {
    }
    //=============================================================================   

    //=============================================================================
    drow(): void {
    }
    //=============================================================================
    //=============================================================================
} // 

export { Local_C };
if (global_R.print_module_start_finish) console.log('local_c.js -> module finish');