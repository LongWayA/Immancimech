/** 
 * 1_index
 * @author AnBr75
 * @copyright Copyright (c) 2024, AnBr75 and/or its affiliates. All rights reserved.
 * @version Last_modified -24.02m.2024 -15.08m.2024-
 */
let Copyright_AnBr75 = 2024;

/**
* НАЗНАЧЕНИЕ
*/

import { global_R } from './global.js';
if (global_R.print_module_start_finish) console.log('buttons.js ->module start');

//
class Buttons_C {
 
    public static NAME: string = "buttons_C";
 
    public isOk: string = "";

    private elementbuttonStart: HTMLButtonElement = document.getElementById("buttonStart") as HTMLButtonElement;
  
    private elementbuttonPause: HTMLButtonElement = document.getElementById("buttonPause") as HTMLButtonElement;

    private elementbuttonEnd: HTMLButtonElement = document.getElementById("buttonEnd") as HTMLButtonElement;
 
    public elementbuttonTest: HTMLButtonElement = document.getElementById("buttonTest") as HTMLButtonElement;

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
