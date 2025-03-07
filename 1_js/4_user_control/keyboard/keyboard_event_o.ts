/** 
 * @author AnBr75
 * @copyright Copyright (c) 2018, AnBr75 and/or its affiliates. All rights reserved.
 * @version created 15.07.2018
 */

let Copyright_AnBr75 = 2018;

/**
* НАЗНАЧЕНИЕ
* Событие keydown происходит при нажатии клавиши, а keyup – при отпускании.
*Свойство key объекта события позволяет получить символ, а свойство code – «физический код клавиши».
*Если пользователь работает с разными языками, то при переключении на другой язык символ изменится с "Z" на совершенно другой. 
*Получившееся станет новым значением event.key, тогда как event.code останется тем же: "KeyZ".
*https://learn.javascript.ru/keyboard-events
*/

//alert("keyboard.js module start");

import { global_R } from '../../1_index/global.js';
if (global_R.print_module_start_finish) console.log('keyboard_event_o.js -> module start');

//==============================================================================


/**
 * тут объект а не клас потому что:
 * this теряет ссылку на контекст при использовании метода в качестве функции обратного вызова.
 * this теряет контекст, когда метод используется в качестве обработчика события.
 *
 */
let userInputKeyboardEvent_R = {

    NAME: "userInputKeyboardEvent_R",

    // команды бойцам
    KEY_LEFT: "KeyA",//движение влево     A
    KEY_RIGHT: "KeyD",//движение вправо    D
    KEY_UP: "KeyW",//движение вверх     W
    KEY_DOWN: "KeyS",//движение вниз      S
    KEY_RUN: "KeyQ",//бег                 J


    isKeyDown: 0, //
    eventCode: "_", // заносится скан код нажатой клавиши
    eventCodeOld: "_", //
    eventCodeOneDown: 0, //
    eventKey: "_", //

    command: "_", //
    //alert("!");
    //i : 0;
    //i2 : 0;

    //добавляем слушателей
    //==============================================================================
    iniM(): void {
        // ~ 29 per sekond
        window.addEventListener("keydown", userInputKeyboardEvent_R.keyDownE);
        window.addEventListener("keyup", userInputKeyboardEvent_R.keyUpE);

        userInputKeyboardEvent_R.eventCode = "_"; // заносится «физический код клавиши» например KeyZ
        userInputKeyboardEvent_R.eventCodeOld = "_"; //

        userInputKeyboardEvent_R.eventKey = "_"; //заносится символ клавиши например Z

        userInputKeyboardEvent_R.eventCodeOneDown = 0; //

        userInputKeyboardEvent_R.isKeyDown = 0;;//

        //console.log("V");
    },
    //==============================================================================
    //=============================================================================
    // во время нажатия клавиши вызывается эта функция
    // на нажатие реагируем один раз. один раз записываем какую кнопку нажали
    keyDownE(event: KeyboardEvent): void {

        //   console.log("keyboard.js ->keyDownU  _event.key = " + _event.key);
        //   console.log("keyboard.js ->keyDownU  _event.code = " + _event.code);

        //if ((userInputKeyboardEvent_R.isKeyDown == 0) && (userInputKeyboardEvent_R.eventCodeOneDown == 0)) {
        if (userInputKeyboardEvent_R.isKeyDown == 0) {

            //      console.log("keyboard.js ->keyDownU  ((userInputKeyboardEvent_R.isKeyDown == 0) && (userInputKeyboardEvent_R.eventCodeOneDown == 0)) ");

            userInputKeyboardEvent_R.isKeyDown = 1;

            //заносим скан код клавиши
            userInputKeyboardEvent_R.eventCodeOld = userInputKeyboardEvent_R.eventCode;
            userInputKeyboardEvent_R.eventCode = event.code;
            userInputKeyboardEvent_R.eventKey = event.key; //

            userInputKeyboardEvent_R.eventCodeOneDown = 1; //

        }
    },
    //==============================================================================

    
    //==============================================================================
    // во время отпускания клавиши вызывается эта функция
    keyUpE(event: KeyboardEvent): void {

        if (userInputKeyboardEvent_R.eventCodeOneDown == 1) {
            userInputKeyboardEvent_R.eventCodeOneDown = 0; //
        }
    },
    //==============================================================================

};//var UserInputKeyboard

export { userInputKeyboardEvent_R };

if (global_R.print_module_start_finish) console.log('keyboard_event_o.js -> module finish');