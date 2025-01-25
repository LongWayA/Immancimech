/** 
 * 2_graphics_2d
 * @author AnBr75
 * @copyright Copyright (c) 2024, AnBr75 and/or its affiliates. All rights reserved.
 * @version created 17.08m.2024
 */

let Copyright_AnBr75 = 2024;

/**
* НАЗНАЧЕНИЕ
*/

import { global_R } from '../1_index/global.js';
if (global_R.print_module_start_finish) console.log('drow_game_start.js -> module start');

import { Html5Canvas_C } from './html5_canvas/html5_canvas.js';
import { Html5Sprites_C } from './html5_sprites/html5_sprites.js';

import { drawTimerNumber_R } from './drow_timer_number.js';
import { Timer_C } from '../1_index/timer.js';

class DrawGameStart_C {
 
    html5Canvas_R:  Html5Canvas_C | null = null;
    html5Sprites_R: Html5Sprites_C | null = null;   

    public static NAME: string = "DrawGameStart_C";
 
    public isOk: string = "";

    private widthCanvas: number = 0;
    private heightCanvas: number = 0;


    //=============================================================================
    constructor() {
    }
    //=============================================================================
    //=============================================================================
    iniM(): void {

        // console.log('Render_C->iniM()-> this.widthCanvas =' + this);
        //console.log('Render_C->iniM()-> this.heightCanvas =' + this.heightCanvas);
    }
    //=============================================================================
    //=============================================================================
    //
    startM(html5Canvas_R: Html5Canvas_C, html5Sprites_R: Html5Sprites_C, timer_R: Timer_C): void {
        this.html5Canvas_R = html5Canvas_R;// 
        this.widthCanvas = html5Canvas_R.widthCanvas;
        this.heightCanvas = html5Canvas_R.heightCanvas;

        this.html5Sprites_R = html5Sprites_R;

        drawTimerNumber_R.startM(timer_R, this.html5Canvas_R, this.html5Sprites_R);

    }
    //=============================================================================
    //=============================================================================
    tick(countTick: number): void {
        // console.log('Game.drawNuberTick');

        let left = 0;
        let top = 0;
        let width = 500;
        let height = 35;
        let left0 = 10;
        let top0 = 450;
        let left1 = 10;
        let top1 = 10;
        let left2 = 10;
        let top2 = 510;

        (this.html5Canvas_R as Html5Canvas_C).clearRect(left, top, this.widthCanvas, this.heightCanvas);
        (this.html5Canvas_R as Html5Canvas_C).drawRect(left, top, this.widthCanvas, this.heightCanvas,
            Html5Canvas_C.LINE_WIDTH_1, Html5Canvas_C.BLUE, 0);

        (this.html5Canvas_R as Html5Canvas_C).drawRect(left1, top1, width, height, Html5Canvas_C.LINE_WIDTH_1, Html5Canvas_C.RED, 0);
        (this.html5Canvas_R as Html5Canvas_C).drawText("Game Start ", left1, top1, Html5Canvas_C.ITALIC_30PT_ARIAL, Html5Canvas_C.GREEN, 1);

        drawTimerNumber_R.drawNumberTick(left0, top0, countTick);

        drawTimerNumber_R.drawTimerTick(left2, top2);

        let y = 200;
        for( let i = 1; i < 20; i++) {
            let x = 100 + i * 50;
            (this.html5Sprites_R as Html5Sprites_C).drowSprite(3, i, x, y);
        }

        y = 300;
        for( let i = 1; i < 15; i++) {
            let x = 100 + i * 50;
            (this.html5Sprites_R as Html5Sprites_C).drowSprite(4, i, x, y);//html5SpritesImmortal_R.drowSprite(i, x, y)
        }       
        


    }
    //=============================================================================

} //

export { DrawGameStart_C };
if (global_R.print_module_start_finish) console.log('drow_game_start.js -> module finish');