let Copyright_AnBr75 = 2024;
import { global_R } from '../1_index/global.js';
if (global_R.print_module_start_finish)
    console.log('buttons.js ->module start');
class Buttons_C {
    static NAME = "buttons_C";
    isOk = "";
    elementbuttonStart = document.getElementById("buttonStart");
    elementbuttonPause = document.getElementById("buttonPause");
    elementbuttonEnd = document.getElementById("buttonEnd");
    elementbuttonTest = document.getElementById("buttonTest");
    constructor() {
    }
    iniM() {
        this.elementbuttonStart.disabled = false;
        this.elementbuttonStart.setAttribute("class", "styled");
        this.elementbuttonPause.disabled = true;
        this.elementbuttonPause.setAttribute("class", "");
        this.elementbuttonEnd.disabled = true;
        this.elementbuttonEnd.setAttribute("class", "");
        this.elementbuttonTest.setAttribute("class", "styled");
        this.elementbuttonTest.setAttribute("value", "PROBE");
    }
    startM() {
    }
    startButtonAttribute() {
        console.log('Buttons_C->startButtonAttribute');
        this.elementbuttonStart.disabled = true;
        this.elementbuttonStart.setAttribute("class", "");
        this.elementbuttonPause.disabled = false;
        this.elementbuttonPause.setAttribute("class", "styled");
        this.elementbuttonEnd.disabled = false;
        this.elementbuttonEnd.setAttribute("class", "styled");
    }
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
    click() {
        console.log('Buttons_C->click  Event');
    }
}
let buttons_R = new Buttons_C();
buttons_R.iniM();
buttons_R.elementbuttonTest.addEventListener("click", buttons_R.click, false);
export { buttons_R, Buttons_C };
if (global_R.print_module_start_finish)
    console.log('buttons.js ->module finish');
buttons_R.isOk = "OK";
