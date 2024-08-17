// Copyright (c) 2024, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -17.08m.2024-
// 
/*
 НАЗНАЧЕНИЕ
 

*/
import { global_R } from '../global/global.js';
if (global_R.print_module_start_finish)
    console.log('drow_game_start.js -> module start');
import { html5Canvas_R } from '../render/html5_canvas/6_html5_canvas_h.js';
import { html5SpritesImmortal_R } from '../render/html5_sprites/html5_sprites_immortal.js';
import { drawTimerNumber_R } from '../render/drow_timer_number.js';
// здесь из за итераций внутри класса ссылаемся на созданный объект
// изменение названия объекта все сломает
// this теряет ссылку на контекст при использовании метода в качестве функции обратного вызова.
class DrawGameStart_C {
    NAME = "DrawGameStart_C";
    isOk = "";
    //=============================================================================
    constructor() {
    }
    ;
    //=============================================================================
    //=============================================================================
    iniM() {
        // console.log('Render_C->iniM()-> this.widthCanvas =' + this);
        //console.log('Render_C->iniM()-> this.heightCanvas =' + this.heightCanvas);
    }
    ;
    //=============================================================================
    //=============================================================================
    //
    startM() {
    }
    ;
    //=============================================================================
    //=============================================================================
    tick(out_Game, widthCanvas, heightCanvas) {
        // console.log('Game.drawNuberTick');
        let left = 0;
        let top = 0;
        let width = 500;
        let height = 35;
        let left0 = 10;
        let top0 = 10;
        html5Canvas_R.clearRect(left, top, widthCanvas, heightCanvas);
        html5Canvas_R.drawRect(left, top, widthCanvas, heightCanvas, html5Canvas_R.LINE_WIDTH_1, html5Canvas_R.BLACK, 0);
        html5Canvas_R.drawRect(left0, top0, widthCanvas - 20, heightCanvas - 20, html5Canvas_R.LINE_WIDTH_1, html5Canvas_R.GREEN, 0);
        drawTimerNumber_R.drawNumberTick(left0, top0, out_Game);
        html5Canvas_R.drawRect(100, 100, width, height, html5Canvas_R.LINE_WIDTH_1, html5Canvas_R.RED, 0);
        html5Canvas_R.drawText("Game Start ", 100, 100, html5Canvas_R.ITALIC_30PT_ARIAL, html5Canvas_R.GREEN, 1);
        const probaSaveLokal = localStorage.getItem("probaSaveLokal");
        const GROUND = localStorage.getItem("GROUND");
        html5Canvas_R.drawText(probaSaveLokal, 100, 200, html5Canvas_R.ITALIC_30PT_ARIAL, html5Canvas_R.GREEN, 1);
        html5Canvas_R.drawText(GROUND, 100, 300, html5Canvas_R.ITALIC_30PT_ARIAL, html5Canvas_R.GREEN, 1);
        drawTimerNumber_R.drawTimerTick(10, 510);
        html5SpritesImmortal_R.drowSprite(1, 400, 500);
    }
    ;
}
; //
// здесь из за итераций внутри класса ссылаемся на созданный объект
// изменение названия объекта все сломает
// this теряет ссылку на контекст при использовании метода в качестве функции обратного вызова.
let drawGameStart_R = new DrawGameStart_C();
drawGameStart_R.iniM();
export { drawGameStart_R, DrawGameStart_C };
if (global_R.print_module_start_finish)
    console.log('drow_game_start.js -> module finish');
drawGameStart_R.isOk = "OK"; //
