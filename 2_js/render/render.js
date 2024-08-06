// Copyright (c) 2024, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -09.07.2023-
// -24.02m.2024-
/*
 НАЗНАЧЕНИЕ
 Определяем рамки областей вывода на экран

*/
import { global_R } from '../global/global.js';
if (global_R.print_module_start_finish)
    console.log('render.js -> module start');
import { timer_R } from '../loop/timer.js';
import { html5Canvas_R } from '../html5_canvas/6_html5_canvas_h.js';
import { mouse_R } from '../user_control/mouse.js';
import { userInputKeyboard_R } from '../user_control/keyboard.js';
import { frames_R } from '../frames/frames.js';
import { background_R } from '../background/background.js';
import { immortals_R } from '../user_avatars/immortals.js';
import { html5SpritesImmortal_R } from '../html5_sprites/html5_sprites_immortal.js';
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
        // console.log('Render_C->iniM()-> this.widthCanvas =' + this);
        //console.log('Render_C->iniM()-> this.heightCanvas =' + this.heightCanvas);
    }
    ;
    //=============================================================================
    //=============================================================================
    //start (_HTML5_Canvas, _Sprites, _Frames, _AllMapObj, _Game) {
    startM(Game) {
        //   HTML5_Canvas = _HTML5_Canvas;
        //   Sprites = _Sprites;
        //   Frames = _Frames;
        //   AllMapObj = _AllMapObj;
        this.out_Game = Game;
    }
    ;
    //=============================================================================
    //=============================================================================
    drawGameStart() {
        // console.log('Game.drawNuberTick');
        let left = 0;
        let top = 0;
        let width = 500;
        let height = 35;
        let left0 = 10;
        let top0 = 10;
        let width0 = 352;
        let height0 = 92;
        // console.log('Render_C->drawGameStart()-> this.widthCanvas =' + this);
        //console.log('Render_C->drawGameStart()-> this.heightCanvas =' + this.heightCanvas);
        html5Canvas_R.clearRect(left, top, this.widthCanvas, this.heightCanvas);
        background_R.drow();
        html5Canvas_R.drawRect(left, top, this.widthCanvas, this.heightCanvas, html5Canvas_R.LINE_WIDTH_1, html5Canvas_R.BLACK, 0);
        html5Canvas_R.drawRect(left0, top0, this.widthCanvas - 20, this.heightCanvas - 20, html5Canvas_R.LINE_WIDTH_1, html5Canvas_R.GREEN, 0);
        this.drawNuberTick(left0, top0);
        html5Canvas_R.drawRect(100, 100, width, height, html5Canvas_R.LINE_WIDTH_1, html5Canvas_R.RED, 0);
        html5Canvas_R.drawText("Game Start ", 100, 100, html5Canvas_R.ITALIC_30PT_ARIAL, html5Canvas_R.GREEN, 1);
        const probaSaveLokal = localStorage.getItem("probaSaveLokal");
        const GROUND = localStorage.getItem("GROUND");
        html5Canvas_R.drawText(probaSaveLokal, 100, 200, html5Canvas_R.ITALIC_30PT_ARIAL, html5Canvas_R.GREEN, 1);
        html5Canvas_R.drawText(GROUND, 100, 300, html5Canvas_R.ITALIC_30PT_ARIAL, html5Canvas_R.GREEN, 1);
        this.drawTimerTick(10, 510);
        html5SpritesImmortal_R.drowSprite(1, 400, 500);
        // Ground.print();
    }
    ;
    //=============================================================================
    //=============================================================================
    drawGamePaused() {
        // console.log('Game.drawNuberTick');
        let left = 0;
        let top = 0;
        let width = 500;
        let height = 35;
        let left0 = 100;
        let top0 = 100;
        let left1 = 100;
        let top1 = 200;
        let width0 = 352;
        let height0 = 92;
        //html5Canvas_R.clearRect(left0, top0, width0, height0);
        html5Canvas_R.clearRect(left, top, this.widthCanvas, this.heightCanvas);
        this.drawNuberTick(left1, top1);
        html5Canvas_R.drawRect(left0, top0, width, height, html5Canvas_R.LINE_WIDTH_1, html5Canvas_R.GREEN, 0);
        html5Canvas_R.drawText("Game Paused ", left0, top0, html5Canvas_R.ITALIC_30PT_ARIAL, html5Canvas_R.GREEN, 1);
        this.drawTimerTick(10, 510);
    }
    ;
    //=============================================================================
    //=============================================================================
    // 
    drowGoGame() {
        let left0 = 10;
        let top0 = 10;
        let left1 = 10;
        let top1 = 70;
        let width = 500;
        let height = 40;
        //console.log('this.drow-> ');
        html5Canvas_R.clearRect(0, 0, frames_R.editorFrame.width, frames_R.editorFrame.height);
        background_R.drow();
        // html5Canvas_R.drawRect(left0, top0, width, height, html5Canvas_R.LINE_WIDTH_1,
        //     html5Canvas_R.GREEN, 0);
        // html5Canvas_R.drawText("Game running", left0, top0, html5Canvas_R.ITALIC_30PT_ARIAL,
        //     html5Canvas_R.GREEN, 1);
        //       this.drawNuberTick(left1, top1);
        frames_R.drowEditorFrame();
        frames_R.drowMapFrame();
        frames_R.drowTilesPanelFrame();
        frames_R.drowPrintFrameFrame();
        this.drawTimerTick(10, 510);
        mouse_R.drow();
        userInputKeyboard_R.drow();
        immortals_R.drow();
    }
    ;
    //=============================================================================
    //=============================================================================
    drawGameEnd() {
        // console.log('Game.drawNuberTick');
        let left = 0;
        let top = 0;
        let width = 500;
        let height = 35;
        let left0 = 100;
        let top0 = 100;
        let left1 = 100;
        let top1 = 200;
        let width0 = 352;
        let height0 = 92;
        //html5Canvas_R.clearRect(left0, top0, width0, height0);
        html5Canvas_R.clearRect(left, top, this.widthCanvas, this.heightCanvas);
        background_R.drow();
        this.drawNuberTick(left1, top1);
        html5Canvas_R.drawRect(left0, top0, width, height, html5Canvas_R.LINE_WIDTH_1, html5Canvas_R.GREEN, 0);
        html5Canvas_R.drawText("Game End ", left0, top0, html5Canvas_R.ITALIC_30PT_ARIAL, html5Canvas_R.GREEN, 1);
        this.drawTimerTick(10, 510);
    }
    ;
    //=============================================================================
    //=============================================================================
    drawNuberTick(left, top) {
        // console.log('Game.drawNuberTick');
        let width = 500;
        let height = 35;
        html5Canvas_R.drawRect(left, top, width, height, html5Canvas_R.LINE_WIDTH_1, html5Canvas_R.GREEN, 0);
        //@ts-ignore
        html5Canvas_R.drawText("Game.tick = " + this.out_Game.sprite, left, top, html5Canvas_R.ITALIC_30PT_ARIAL, html5Canvas_R.GREEN, 1);
    }
    ;
    //=============================================================================
    //=============================================================================
    drawTimerTick(left, top) {
        // console.log('Game.drawTimerTick');
        let top1 = top + 25;
        let top2 = top1 + 25;
        let top3 = top2 + 25;
        let top4 = top3 + 25;
        let top5 = top4 + 25;
        let top6 = top5 + 25;
        html5Canvas_R.drawText("tick_timeOnAllMs = " + timer_R.getTickTimeOnAllMs(), left, top, html5Canvas_R.ITALIC_15PT_ARIAL, html5Canvas_R.GREEN, 1);
        html5Canvas_R.drawText("tick_timeStartMs = " + timer_R.getTickTimeStartMs(), left, top1, html5Canvas_R.ITALIC_15PT_ARIAL, html5Canvas_R.GREEN, 1);
        html5Canvas_R.drawText("tick_timeEndMs = " + timer_R.getTickTimeEndMs(), left, top2, html5Canvas_R.ITALIC_15PT_ARIAL, html5Canvas_R.GREEN, 1);
        html5Canvas_R.drawText("tick_timeEndMinusStartTickMs = " + timer_R.getTickTimeEndMinusStartTickMs(), left, top3, html5Canvas_R.ITALIC_15PT_ARIAL, html5Canvas_R.GREEN, 1);
        html5Canvas_R.drawText("tick_timeThreadSleepGameMs = " + timer_R.getTickTimeThreadSleepGameMs(), left, top4, html5Canvas_R.ITALIC_15PT_ARIAL, html5Canvas_R.GREEN, 1);
        html5Canvas_R.drawText("tickOld_timeStartMs = " + timer_R.getTickOldTimeStartMs(), left, top5, html5Canvas_R.ITALIC_15PT_ARIAL, html5Canvas_R.GREEN, 1);
        html5Canvas_R.drawText("tick_tickOld_timeStart_Minus_tick_timeStartMs = "
            + timer_R.getTickTickOldTimeStartMinusTickTimeStartMs(), left, top6, html5Canvas_R.ITALIC_15PT_ARIAL, html5Canvas_R.GREEN, 1);
    }
    ;
}
; //Frames
// здесь из за итераций внутри класса ссылаемся на созданный объект
// изменение названия объекта все сломает
// this теряет ссылку на контекст при использовании метода в качестве функции обратного вызова.
let render_R = new Render_C();
render_R.iniM();
//Global.testLoading('render_R.js');
export { render_R };
if (global_R.print_module_start_finish)
    console.log('render.js -> module finish');
render_R.isOk = "OK"; //
