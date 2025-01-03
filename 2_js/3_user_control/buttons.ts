/** 
 * 3_user_control
 * @author AnBr75
 * @copyright Copyright (c) 2024, AnBr75 and/or its affiliates. All rights reserved.
 * @version Last_modified -24.02m.2024 -15.08m.2024-
 */

/**
* НАЗНАЧЕНИЕ
*/

import { global_R } from '../global.js';

if (global_R.print_module_start_finish) console.log('buttons.js ->module start');

import { gameState_R } from '../4_game_state/game_state.js';
import { loop_R } from '../1_loop/loop_o.js';

//
class Buttons_C {
 
    public NAME: string = "buttons_R";
 
    public isOk: string = "";

    private elementbuttonStart: any = document.getElementById("buttonStart");
  
    private elementbuttonPause: any = document.getElementById("buttonPause");

    private elementbuttonEnd: any = document.getElementById("buttonEnd");
 
    public elementbuttonTest: any = document.getElementById("buttonTest");

    //=============================================================================
 
    constructor() {
    }
    //=============================================================================

    //=============================================================================
    iniM(): void {

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
    //=============================================================================

    //=============================================================================
    startM(): void {
    }
    //=============================================================================

    //-----------------------------------------------------------------------------
    // методы установки состояния кнопок

    //=============================================================================
    startButtonAttribute(): void {
        console.log('Buttons_C->startButtonAttribute');
        this.elementbuttonStart.disabled = true;
        this.elementbuttonStart.setAttribute("class", "");
        this.elementbuttonPause.disabled = false;
        this.elementbuttonPause.setAttribute("class", "styled");
        this.elementbuttonEnd.disabled = false;
        this.elementbuttonEnd.setAttribute("class", "styled");
    }
    //=============================================================================

    //=============================================================================
    pauseButtonAttribute(): void {
        console.log('Buttons_C->pauseButtonAttribute');
        this.elementbuttonStart.disabled = false;
        this.elementbuttonStart.setAttribute("class", "styled");
        this.elementbuttonStart.value = "Continue Game";
        this.elementbuttonPause.disabled = true;
        this.elementbuttonPause.setAttribute("class", "");
        this.elementbuttonEnd.disabled = false;
        this.elementbuttonEnd.setAttribute("class", "styled");
    }
    //=============================================================================    

    //=============================================================================
    endButtonAttribute(): void {
        console.log('Buttons_C->endButtonAttribute');
        this.elementbuttonStart.value = "Start Game!";
        this.elementbuttonStart.disabled = false;
        this.elementbuttonStart.setAttribute("class", "styled");
        this.elementbuttonPause.disabled = true;
        this.elementbuttonPause.setAttribute("class", "");
        this.elementbuttonEnd.disabled = true;
        this.elementbuttonEnd.setAttribute("class", "");
    }
    //=============================================================================


    //=============================================================================
    startButton(): void {
        buttons_R.startButtonAttribute();
        gameState_R.setGoGame();
        if (!loop_R.isLoop){ 
            console.log('Buttons_C->startButton->loop_R.loop()');
            loop_R.loop();
        }
    }
    //=============================================================================

    //=============================================================================
    pauseButton(): void {
        buttons_R.pauseButtonAttribute();
        gameState_R.setPauseGame();
    }
    //=============================================================================  

    //=============================================================================
    endButton(): void {
        buttons_R.endButtonAttribute();
        gameState_R.setEndGame();
    }
    //=============================================================================

    //=============================================================================
    testButton(): void {
        console.log('Buttons_C->testButton');
    }
    //=============================================================================

    //-----------------------------------------------------------------------------
    // метод вызывается по событию. для эксперимента
    //=============================================================================
    click(): void {
        console.log('Buttons_C->click  Event');
    }
    //=============================================================================

}

let buttons_R = new Buttons_C();

buttons_R.iniM();
buttons_R.elementbuttonTest.addEventListener("click", buttons_R.click, false); //click  input

export { buttons_R, Buttons_C };

if (global_R.print_module_start_finish) console.log('buttons.js ->module finish');

buttons_R.isOk = "OK"; //
