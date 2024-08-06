// Copyright (c) 2024, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -31.07.2022-18.03.2023-26.03.2023-09.07.2023-
// -24.02m.2024-
/*
 НАЗНАЧЕНИЕ
 Корневой модуль игры
 

*/
import { global_R } from '../global/global.js';
if (global_R.print_module_start_finish)
    console.log('game.js -> module start');
import { timer_R } from '../loop/timer.js';
import { userInputKeyboard_R } from '../user_control/keyboard.js';
import { mouse_R } from '../user_control/mouse.js';
import { immortals_R } from '../user_avatars/immortals.js';
import { run_R } from '../moove/run.js';
import { fight_R } from '../fight/fight.js';
import { ai_R } from '../ai/ai.js';
//import { render_R } from '../render/render.js';
import { background_R } from '../background/background.js';
import { requestAnimationFrame_R } from '../loop/request_animation.js';
import { buttons_R } from '../loop/buttons.js';
import { loop_R } from '../loop/loop_o.js';
class GameState_C {
    NAME = "gameState_R";
    isOk = "";
    // Внешние ссылки
    //-
    START_GAME = 1;
    GO_GAME = 2;
    PAUSE_GAME = 3;
    END_GAME = 4;
    MENU_GAME = 5;
    // состояние игры. может быть стартовое меню, конец игры, пауза, игра
    isGameState = 0;
    sprite = 0;
    //=============================================================================
    constructor() {
    }
    //============================================================================= 
    //=============================================================================
    iniM() {
        //console.log('this.ini->');
    }
    ;
    //=============================================================================
    //=============================================================================
    startM() {
        //alert("!");
        //console.log('this.start->');
    }
    ;
    //============================================================================= 
    //=============================================================================
    setStartGame() {
        this.isGameState = this.START_GAME;
        this.sprite = 0;
        timer_R.iniTicksPerSecond(timer_R.TICKS_PER_SECOND_05);
    }
    ;
    //=============================================================================
    //=============================================================================
    setGoGame() {
        this.isGameState = this.GO_GAME;
        timer_R.iniTicksPerSecond(timer_R.TICKS_PER_SECOND_30);
    }
    ;
    //=============================================================================
    //=============================================================================
    setPauseGame() {
        this.isGameState = this.PAUSE_GAME;
        timer_R.iniTicksPerSecond(timer_R.TICKS_PER_SECOND_02);
    }
    ;
    //=============================================================================
    //=============================================================================
    setEndGame() {
        this.isGameState = this.END_GAME;
    }
    ;
    //=============================================================================
    //=============================================================================
    isStartGame() {
        if (this.isGameState == this.START_GAME)
            return true;
        return false;
    }
    ;
    //=============================================================================
    //=============================================================================
    isGoGame() {
        if (this.isGameState == this.GO_GAME)
            return true;
        return false;
    }
    ;
    //=============================================================================
    //=============================================================================
    isPauseGame() {
        if (this.isGameState == this.PAUSE_GAME)
            return true;
        return false;
    }
    ;
    //=============================================================================
    //=============================================================================
    isEndGame() {
        if (this.isGameState == this.END_GAME)
            return true;
        return false;
    }
    ;
    //=============================================================================
    //=============================================================================
    tickStartGame() {
        console.log('this.tickStartGame');
        this.sprite = this.sprite + 1;
        if (this.sprite > 1000) {
            this.sprite = 1;
        }
        requestAnimationFrame(requestAnimationFrame_R.drawGameStart);
        //render_R.drawGameStart();
    }
    ; //tick () {
    //=============================================================================
    //=============================================================================
    tickGoGame() {
        // console.log('this.tickGoGame');
        this.sprite = this.sprite + 1;
        if (this.sprite > 1000) {
            this.sprite = 1;
        }
        userInputKeyboard_R.tick(immortals_R, background_R);
        mouse_R.tick();
        run_R.tick();
        fight_R.tick();
        ai_R.tick();
        requestAnimationFrame(requestAnimationFrame_R.drowGoGame);
    }
    ; //tick () {
    //=============================================================================
    //=============================================================================
    tickPauseGame() {
        //console.log('this.tickPauseGame');
        this.sprite = this.sprite + 1;
        if (this.sprite > 1000) {
            this.sprite = 1;
        }
        requestAnimationFrame(requestAnimationFrame_R.drawGamePaused);
        //render_R.drawGamePaused();
    }
    ; //tick () {
    //=============================================================================
    //=============================================================================
    tickEndGame() {
        console.log('this.tickEndGame');
        this.sprite = this.sprite + 1;
        if (this.sprite > 1000) {
            this.sprite = 1;
        }
        requestAnimationFrame(requestAnimationFrame_R.drawGameEnd);
        //render_R.drawGameEnd();
    }
    ; //tick () {
    //=============================================================================
    //=============================================================================
    startButton() {
        buttons_R.startButtonAttribute();
        gameState_R.setGoGame();
        loop_R.loop();
    }
    ;
    //=============================================================================
    //=============================================================================
    pauseButton() {
        buttons_R.pauseButtonAttribute();
        gameState_R.setPauseGame();
    }
    ;
    //=============================================================================  
    //=============================================================================
    endButton() {
        buttons_R.endButtonAttribute();
        gameState_R.setEndGame();
    }
    ;
    //=============================================================================
    //=============================================================================
    testButton() {
        console.log('StartClient_C-> testButton');
    }
    ;
}
; //Game
let gameState_R = new GameState_C();
gameState_R.iniM();
//Global.testLoading('gameState_R.js');
export { gameState_R, GameState_C };
if (global_R.print_module_start_finish)
    console.log('game.js -> module finish');
gameState_R.isOk = "OK"; //
