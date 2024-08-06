// Copyright (c) 2024, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -12.11.2023-
// -24.02m.2024-
/*
   НАЗНАЧЕНИЕ
       

*/
import { global_R } from '../global/global.js';
if (global_R.print_module_start_finish)
    console.log('buttons.js ->module start');
//
class Buttons_C {
    NAME = "buttons_R";
    isOk = "";
    // Внешние ссылки
    //-
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
        //console.log('TrueWayImmortals_client.ini');
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
        console.log('buttons_R-> startButtonAttribute');
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
        console.log('buttons_R-> pauseButtonAttribute');
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
        console.log('buttons_R-> endButtonAttribute');
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
    //-----------------------------------------------------------------------------
    // метод вызывается по событию. для эксперимента
    //=============================================================================
    click() {
        console.log('buttons_R-> click  Event');
        //console.log('TrueWayImmortals_client.test -> test');
    }
    ;
}
; //var Buttons = {
let buttons_R = new Buttons_C();
buttons_R.iniM();
buttons_R.elementbuttonTest.addEventListener("click", buttons_R.click, false); //click  input
//buttons_R.Out_Global.testLoading('buttons_R.js');
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
