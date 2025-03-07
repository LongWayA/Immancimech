/** 
 * @author AnBr75
 * @copyright Copyright (c) 2024, AnBr75 and/or its affiliates. All rights reserved.
 * @version created 24.02m.2024
 */
let Copyright_AnBr75 = 2024;

/**
* НАЗНАЧЕНИЕ
*/

import { global_R } from './global.js';
if (global_R.print_module_start_finish) console.log('buttons.js ->module start');

//
class Buttons_C {

    public static NAME: string = "Buttons_C";

    public startButtonName = "";

    public START = "Start Game";
    public CONTINUE = "Continue Game";   

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

        this.startButtonName = this.START;
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
        this.startButtonName = this.CONTINUE;  
        this.elementbuttonStart.disabled = false;
        this.elementbuttonStart.setAttribute("class", "styled");
        this.elementbuttonStart.value = this.CONTINUE;
        this.elementbuttonPause.disabled = true;
        this.elementbuttonPause.setAttribute("class", "");
        this.elementbuttonEnd.disabled = false;
        this.elementbuttonEnd.setAttribute("class", "styled");
    }
    //=============================================================================    

    //=============================================================================
    endButtonAttribute(): void {
        console.log('Buttons_C->endButtonAttribute');
        this.startButtonName = this.START;              
        this.elementbuttonStart.value = this.START;
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

export { Buttons_C };
if (global_R.print_module_start_finish) console.log('buttons.js ->module finish');
