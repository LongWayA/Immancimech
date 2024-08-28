// Copyright (c) 2024, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -24.02m.2024 -15.08m.2024-
// 
/*
   НАЗНАЧЕНИЕ
       

*/
import { global_R } from '../global/global.js';
if (global_R.print_module_start_finish)
    console.log('buttons.js ->module start');
import { gameState_R } from '../game/game_state.js';
import { loop_R } from '../loop/loop_o.js';
//
/**
 * Description placeholder
 *
 * @class Buttons_C
 * @typedef {Buttons_C}
 */
class Buttons_C {
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    NAME = "buttons_R";
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    isOk = "";
    //buttonStart
    /**
     * Description placeholder
     *
     * @private
     * @type {*}
     */
    elementbuttonStart = document.getElementById("buttonStart");
    //buttonPause  HTMLElement | null
    /**
     * Description placeholder
     *
     * @private
     * @type {*}
     */
    elementbuttonPause = document.getElementById("buttonPause");
    //buttonEnd
    /**
     * Description placeholder
     *
     * @private
     * @type {*}
     */
    elementbuttonEnd = document.getElementById("buttonEnd");
    //buttonTest
    /**
     * Description placeholder
     *
     * @public
     * @type {*}
     */
    elementbuttonTest = document.getElementById("buttonTest");
    //=============================================================================
    /**
     * Creates an instance of Buttons_C.
     *
     * @constructor
     */
    constructor() {
    } /** Description placeholder */
    ;
    //=============================================================================
    //=============================================================================
    /** Description placeholder */
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
    //=============================================================================
    //=============================================================================
    /** Description placeholder */
    startM() {
    }
    //=============================================================================
    //-----------------------------------------------------------------------------
    // методы установки состояния кнопок
    //=============================================================================
    /** Description placeholder */
    startButtonAttribute() {
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
    /** Description placeholder */
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
    //=============================================================================    
    //=============================================================================
    /** Description placeholder */
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
    //=============================================================================
    //=============================================================================
    /** Description placeholder */
    startButton() {
        buttons_R.startButtonAttribute();
        gameState_R.setGoGame();
        if (!loop_R.isLoop) {
            console.log('Buttons_C->startButton->loop_R.loop()');
            loop_R.loop();
        }
    }
    //=============================================================================
    //=============================================================================
    /** Description placeholder */
    pauseButton() {
        buttons_R.pauseButtonAttribute();
        gameState_R.setPauseGame();
    }
    //=============================================================================  
    //=============================================================================
    /** Description placeholder */
    endButton() {
        buttons_R.endButtonAttribute();
        gameState_R.setEndGame();
    }
    //=============================================================================
    //=============================================================================
    /** Description placeholder */
    testButton() {
        console.log('Buttons_C->testButton');
    }
    //=============================================================================
    //-----------------------------------------------------------------------------
    // метод вызывается по событию. для эксперимента
    //=============================================================================
    /** Description placeholder */
    click() {
        console.log('Buttons_C->click  Event');
    }
}
/**
 * Description placeholder
 *
 * @type {Buttons_C}
 */
let buttons_R = new Buttons_C();
buttons_R.iniM();
buttons_R.elementbuttonTest.addEventListener("click", buttons_R.click, false); //click  input
export { buttons_R, Buttons_C };
if (global_R.print_module_start_finish)
    console.log('buttons.js ->module finish');
buttons_R.isOk = "OK"; //
