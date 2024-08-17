// Copyright (c) 2024, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -09.07.2023-
// -24.02m.2024-17.08m.2024-
/*
 НАЗНАЧЕНИЕ
 Определяем рамки областей вывода на экран

*/
import { global_R } from '../global/global.js';
if (global_R.print_module_start_finish)
    console.log('render.js -> module start');
import { html5Canvas_R } from '../render/html5_canvas/6_html5_canvas_h.js';
import { drawGameStart_R } from '../render/drow_game_start.js';
import { drawGameGo_R } from '../render/drow_game_go.js';
import { drawGamePause_R } from '../render/drow_game_pause.js';
import { drawGameEnd_R } from '../render/drow_game_end.js';
// здесь из за итераций внутри класса ссылаемся на созданный объект
// изменение названия объекта все сломает
// this теряет ссылку на контекст при использовании метода в качестве функции обратного вызова.
class Render_C {
    NAME = "render_R";
    isOk = "";
    // Внешние ссылки
    out_Game = null;
    widthCanvas = 0;
    heightCanvas = 0;
    //=============================================================================
    constructor() {
    }
    ;
    //=============================================================================
    //=============================================================================
    iniM() {
        this.widthCanvas = html5Canvas_R.width_OUT;
        this.heightCanvas = html5Canvas_R.height_OUT;
    }
    ;
    //=============================================================================
    //=============================================================================
    //start (_HTML5_Canvas, _Sprites, _Frames, _AllMapObj, _Game) {
    startM(Game) {
        this.out_Game = Game;
    }
    ;
    //=============================================================================
    //=============================================================================
    drawGameStart() {
        drawGameStart_R.tick(this.out_Game, this.widthCanvas, this.heightCanvas);
    }
    ;
    //=============================================================================
    //=============================================================================
    // 
    drowGameGo() {
        drawGameGo_R.tick(this.out_Game);
    }
    ;
    //=============================================================================
    //=============================================================================
    drawGamePaused() {
        drawGamePause_R.tick(this.out_Game, this.widthCanvas, this.heightCanvas);
    }
    ;
    //=============================================================================
    //=============================================================================
    drawGameEnd() {
        drawGameEnd_R.tick(this.out_Game, this.widthCanvas, this.heightCanvas);
    }
    ;
}
; //
// здесь из за итераций внутри класса ссылаемся на созданный объект
// изменение названия объекта все сломает
// this теряет ссылку на контекст при использовании метода в качестве функции обратного вызова.
let render_R = new Render_C();
render_R.iniM();
export { render_R };
if (global_R.print_module_start_finish)
    console.log('render.js -> module finish');
render_R.isOk = "OK"; //
