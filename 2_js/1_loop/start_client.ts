// @ts-check
/** 
 * 1_loop
 * @module start_client
 * @author ABr75
 * @copyright Copyright (c) 2025, ABr75 and/or its affiliates. All rights reserved.
 * @version Last_modified -04.07.2024- 
 */

/**
* НАЗНАЧЕНИЕ
*/


import { global_R } from '../global/global.js';

if (global_R.print_module_start_finish) console.log('start_client.js -> module start');

// Внешние ссылки

import { gameState_R, GameState_C } from '../4_game_state/game_state.js';
import { loop_R } from '../1_loop/loop_o.js';
import { html5Canvas_R } from '../2_render/html5_canvas/html5_canvas_h.js';
//---------------------

//background+
import { background_R } from '../local/background/background.js';

//frames+
import { frames_R } from '../2_render/frames/frames.js';

//html5_sprites+
import { html5SpritesImmortal_R } from '../2_render/html5_sprites/html5_sprites_immortal.js';

//render+
import { render_R } from '../2_render/render.js';

//test+ 
import { test_R } from '../test/test.js';

//user_avatars+
import { immortals_R } from '../user_avatars/immortals.js';


/**
 * @class StartClient_C
 * 
 */

class StartClient_C {
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    public NAME: string = "StartClient_C";
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    public isOk: string = "";

    //=============================================================================
    /**
     * Creates an instance of StartClient_C.
     *
     * @constructor
     */
    constructor() {
    }
    //=============================================================================

    //=============================================================================
    /** Description placeholder */
    iniM(): void {
    }
    //=============================================================================

    //=============================================================================
    /** Description placeholder */
    startGame(): void {

        gameState_R.startM();
        loop_R.startM();

        test_R.test();
        startClient_R.startModules();
        gameState_R.setStartGame();

        if (!loop_R.isLoop) {
            console.log('StartClient_C->startGame->loop_R.loop()');
            loop_R.loop();
        }
    }
    //=============================================================================

    //=============================================================================
    /** Description placeholder */
    startModules(): void {


        //background+
        background_R.startM();

        //frames+
        frames_R.startM();

        //html5_canvas+
        html5Canvas_R.startM();

        //html5_sprites+
        html5SpritesImmortal_R.startM();

        //render+
        render_R.startM(gameState_R);

        //user_avatars+
        immortals_R.startM();

    }
    //=============================================================================


}

/**
 * Description placeholder
 *
 * @type {StartClient_C}
 */
let startClient_R = new StartClient_C();

startClient_R.iniM();

export { startClient_R, StartClient_C };

if (global_R.print_module_start_finish) console.log('start_client.js -> module finish');

startClient_R.isOk = "OK"; //