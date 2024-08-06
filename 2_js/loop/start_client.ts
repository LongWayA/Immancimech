// Copyright (c) 2024, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -04.07.2024-
// 
/*
   НАЗНАЧЕНИЕ
       

*/


import { global_R } from '../global/global.js';

if (global_R.print_module_start_finish) console.log('start_client.js -> module start');

// Внешние ссылки

//ai
import { ai_R } from '../ai/ai.js';

//background
import { background_R } from '../background/background.js';
import { TileForBackground_C, TileForBackground_isOk } from '../background/tile_for_background_c.js';

//creatures
import { imps_R } from '../creatures/creatures.js';

//fight
import { fight_R } from '../fight/fight.js';

//frames
import { frames_R } from '../frames/frames.js';

//game
import { gameState_R, GameState_C } from '../game/game_state.js';

//global 
// global_R перенес наверх ибо флаг использую


//html5_canvas
import { html5CanvasContext_R } from '../html5_canvas/1_html5_canvas_context.js';
import { html5CanvasText_R } from '../html5_canvas/2_html5_canvas_text.js';
import { html5CanvasPrimitive_R } from '../html5_canvas/3_html5_canvas_primitive.js';
import { html5CanvasImage_R } from '../html5_canvas/4_html5_canvas_image.js';
import { html5CanvasMouseEvent_R } from '../html5_canvas/5_html5_canvas_mouse_event.js';
import { html5Canvas_R } from '../html5_canvas/6_html5_canvas_h.js';

//html5_sprites
import { html5SpritesCollection_R } from '../html5_sprites/html5_sprites_collection.js';
import { html5SpritesImmortal_R } from '../html5_sprites/html5_sprites_immortal.js';
import { html5Sprites_R } from '../html5_sprites/html5_sprites.js';
import { Sprite_С, Sprite_С_isOk } from '../html5_sprites/sprite_c.js';
import { Sprite_Imm_C, Sprite_I_C_isOk } from '../html5_sprites/sprite_i_c.js';

//items
//-

//local
import { local_R } from '../local/local.js';

//loop
import { buttons_R, Buttons_C } from '../loop/buttons.js';
import { loop_R } from '../loop/loop_o.js';
import { requestAnimationFrame_R } from '../loop/request_animation.js';
import { timer_R } from '../loop/timer.js';
//import { startClient_R } from '../loop/start_client.js';

//moove
import { run_R } from '../moove/run.js';

//render
import { render_R } from '../render/render.js';

//test 
import { test_R } from '../test/test.js';

//user_avatars
import { Immortal_C, Immortal_C_isOk } from '../user_avatars/immortal_c.js';
import { immortals_R } from '../user_avatars/immortals.js';

//user_control
import { userInputKeyboardEvent_R } from '../user_control/keyboard_event_o.js';
import { userInputKeyboard_R } from '../user_control/keyboard.js';
import { mouse_R } from '../user_control/mouse.js';



class StartClient_C {
    NAME: string = "StartClient_C";
    isOk: string = "";

    // Внешние ссылки

    //=============================================================================
    constructor() {
    };
    //=============================================================================

    //=============================================================================
    iniM(): void {
    };
    //=============================================================================

    //=============================================================================
    startGame(): void {
        test_R.test();
        startClient_R.startModules();
        gameState_R.setStartGame();
        loop_R.loop();
    };
    //=============================================================================

    //=============================================================================
    startModules(): void {

        //ai
        ai_R.startM();

        //background
        background_R.startM();

        //creatures
        imps_R.startM();

        //fight
        fight_R.startM();

        //frames
        frames_R.startM();

        //game
        gameState_R.startM();

        //global 
        global_R.startM();

        //html5_canvas
        html5CanvasContext_R.startM();
        html5CanvasText_R.startM();
        html5CanvasPrimitive_R.startM();
        html5CanvasImage_R.startM();
        html5CanvasMouseEvent_R.startM();
        html5Canvas_R.startM();

        //html5_sprites
        html5SpritesCollection_R.startM();
        html5SpritesImmortal_R.startM();
        html5Sprites_R.startM();

        //items
        //-

        //local
        local_R.startM();

        //loop
        buttons_R.startM();
        loop_R.startM();
        requestAnimationFrame_R.startM();
        timer_R.startM();
        //import { startClient_R } from '../loop/start_client.js';

        //moove
        run_R.startM();

        //render
        render_R.startM(gameState_R);

        //test 
        test_R.startM();

        //user_avatars
        immortals_R.startM();

        //user_control
        userInputKeyboardEvent_R.startM();
        userInputKeyboard_R.startM();
        mouse_R.startM();

    };
    //=============================================================================


}; //Frames

let startClient_R = new StartClient_C();

startClient_R.iniM();

export { startClient_R, StartClient_C };

if (global_R.print_module_start_finish) console.log('start_client.js -> module finish');

startClient_R.isOk = "OK"; //