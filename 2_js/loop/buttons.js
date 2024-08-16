// Copyright (c) 2024, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -12.11.2023-
// -24.02m.2024 -15.08m.2024-
/*
   НАЗНАЧЕНИЕ
       

*/
import { global_R } from '../global/global.js';
if (global_R.print_module_start_finish)
    console.log('buttons.js ->module start');
import { gameState_R } from '../game/game_state.js';
import { loop_R } from '../loop/loop_o.js';
//
class Buttons_C {
    NAME = "buttons_R";
    isOk = "";
    //buttonStart
    elementbuttonStart = document.getElementById("buttonStart");
    //buttonPause  HTMLElement | null
    elementbuttonPause = document.getElementById("buttonPause");
    //buttonEnd
    elementbuttonEnd = document.getElementById("buttonEnd");
    //buttonTest
    elementbuttonTest = document.getElementById("buttonTest");
    //=============================================================================
    constructor() {
    }
    ;
    //=============================================================================
    //=============================================================================
    iniM() {
        //console.log('Buttons_C->iniM');
        this.elementbuttonStart.disabled = false;
        this.elementbuttonStart.setAttribute("class", "styled");
        //elementbuttonStart.accesskey = 's';
        this.elementbuttonPause.disabled = true;
        this.elementbuttonPause.setAttribute("class", "");
        this.elementbuttonEnd.disabled = true;
        this.elementbuttonEnd.setAttribute("class", "");
        //
        this.elementbuttonTest.setAttribute("class", "styled");
        this.elementbuttonTest.setAttribute("value", "PROBE");
    }
    ;
    //=============================================================================
    //=============================================================================
    startM() {
    }
    ;
    //=============================================================================
    //-----------------------------------------------------------------------------
    // методы установки состояния кнопок
    //=============================================================================
    startButtonAttribute() {
        console.log('Buttons_C->startButtonAttribute');
        this.elementbuttonStart.disabled = true;
        this.elementbuttonStart.setAttribute("class", "");
        this.elementbuttonPause.disabled = false;
        this.elementbuttonPause.setAttribute("class", "styled");
        this.elementbuttonEnd.disabled = false;
        this.elementbuttonEnd.setAttribute("class", "styled");
    }
    ;
    //=============================================================================
    //=============================================================================
    pauseButtonAttribute() {
        console.log('Buttons_C->pauseButtonAttribute');
        this.elementbuttonStart.disabled = false;
        this.elementbuttonStart.setAttribute("class", "styled");
        this.elementbuttonStart.value = "Continue Game";
        this.elementbuttonPause.disabled = true;
        this.elementbuttonPause.setAttribute("class", "");
        this.elementbuttonEnd.disabled = false;
        this.elementbuttonEnd.setAttribute("class", "styled");
    }
    ;
    //=============================================================================    
    //=============================================================================
    endButtonAttribute() {
        console.log('Buttons_C->endButtonAttribute');
        this.elementbuttonStart.value = "Start Game!";
        this.elementbuttonStart.disabled = false;
        this.elementbuttonStart.setAttribute("class", "styled");
        this.elementbuttonPause.disabled = true;
        this.elementbuttonPause.setAttribute("class", "");
        this.elementbuttonEnd.disabled = true;
        this.elementbuttonEnd.setAttribute("class", "");
    }
    ;
    //=============================================================================
    //=============================================================================
    startButton() {
        buttons_R.startButtonAttribute();
        gameState_R.setGoGame();
        if (!loop_R.isLoop) {
            console.log('Buttons_C->startButton->loop_R.loop()');
            loop_R.loop();
        }
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
        console.log('Buttons_C->testButton');
    }
    ;
    //=============================================================================
    //-----------------------------------------------------------------------------
    // метод вызывается по событию. для эксперимента
    //=============================================================================
    click() {
        console.log('Buttons_C->click  Event');
    }
    ;
}
; //var Buttons = {
let buttons_R = new Buttons_C();
buttons_R.iniM();
buttons_R.elementbuttonTest.addEventListener("click", buttons_R.click, false); //click  input
export { buttons_R, Buttons_C };
if (global_R.print_module_start_finish)
    console.log('buttons.js ->module finish');
buttons_R.isOk = "OK"; //
/*

<input type="text" autocomplete="on | off" />
<input type="password" autocomplete="on | off" />
<input type="email" autocomplete="on | off" />
<input type="search" autocomplete="on | off" />
<input type="url" autocomplete="on | off" />
<input type="tel" autocomplete="on | off" />

*/ 
