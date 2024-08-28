// Copyright (c) 2024, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified 15.07.2018 - 18.03.2019 - 30.05.2019
//  - 18.11.2019 - 01.04.2024 -
/*
НАЗНАЧЕНИЕ

*/
/*
Событие keydown происходит при нажатии клавиши, а keyup – при отпускании.
Свойство key объекта события позволяет получить символ, а свойство code – «физический код клавиши».
Если пользователь работает с разными языками, то при переключении на другой язык символ изменится с "Z" на совершенно другой.
Получившееся станет новым значением event.key, тогда как event.code останется тем же: "KeyZ".
https://learn.javascript.ru/keyboard-events
*/
//alert("keyboard.js module start");
import { global_R } from '../global/global.js';
if (global_R.print_module_start_finish)
    console.log('keyboard.js -> module start');
//==============================================================================
import { html5CanvasText_R } from '../render/html5_canvas/2_html5_canvas_text.js';
import { html5CanvasPrimitive_R } from '../render/html5_canvas/3_html5_canvas_primitive.js';
import { userInputKeyboardEvent_R } from './keyboard_event_o.js';
// здесь из за итераций внутри класса ссылаемся на созданный объект
// изменение названия объекта все сломает
// this теряет ссылку на контекст при использовании метода в качестве функции обратного вызова.
// this теряет контекст, когда метод используется в качестве обработчика события.
/**
 * Description placeholder
 *
 * @class UserInputKeyboard_C
 * @typedef {UserInputKeyboard_C}
 */
class UserInputKeyboard_C {
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    NAME = "UserInputKeyboard_C";
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    isOk = "";
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    command = "_"; //
    //alert("!");
    //i : 0;
    //i2 : 0;
    //=============================================================================
    /**
     * Creates an instance of UserInputKeyboard_C.
     *
     * @constructor
     */
    constructor() {
    }
    //=============================================================================
    //добавляем слушателей
    //==============================================================================
    /** Description placeholder */
    iniM() {
        //console.log("V");
    }
    //==============================================================================
    //=============================================================================
    /** Description placeholder */
    startM() {
    }
    //=============================================================================
    //==============================================================================
    /**
     * Description placeholder
     *
     * @param {*} immortals
     * @param {*} ground
     */
    tick(immortals, ground) {
        //this.eventCode = 0;
        if (userInputKeyboardEvent_R.isKeyDown == 1) {
            userInputKeyboardEvent_R.isKeyDown = 0;
            this.command = "nothing";
            //     console.log("keyboard.js ->tick  userInputKeyboardEvent_R.eventCode = " + userInputKeyboardEvent_R.eventCode);
            //     console.log("keyboard.js ->tick  userInputKeyboardEvent_R.eventKey = " + userInputKeyboardEvent_R.eventKey);
            // 0-стоим, 1-вверх, 2-движение вправо, 3-вниз, 4-влево
            if (userInputKeyboardEvent_R.eventCode == userInputKeyboardEvent_R.KEY_LEFT) {
                //движение влево
                this.command = "go left";
                //  console.log("keyboard.js ->tick  KEY_LEFT ");
                // _immortals.List[1].runLeft(_ground);
                immortals.List[1].runSet(4);
            }
            else if (userInputKeyboardEvent_R.eventCode == userInputKeyboardEvent_R.KEY_RIGHT) {
                //движение вправо
                this.command = "go right";
                //  console.log("keyboard.js ->tick  KEY_RIGHT ");
                //_immortals.List[1].runRight(_ground);
                immortals.List[1].runSet(2);
            }
            else if (userInputKeyboardEvent_R.eventCode == userInputKeyboardEvent_R.KEY_UP) {
                //движение вверх
                this.command = "go up";
                //  console.log("keyboard.js ->tick  KEY_UP ");
                //_immortals.List[1].runUp(_ground);
                immortals.List[1].runSet(1);
            }
            else if (userInputKeyboardEvent_R.eventCode == userInputKeyboardEvent_R.KEY_DOWN) {
                //движение вниз
                this.command = "go down";
                //  console.log("keyboard.js ->tick  KEY_DOWN ");
                //_immortals.List[1].runDown(_ground);
                immortals.List[1].runSet(3);
            }
            else if (userInputKeyboardEvent_R.eventCode == userInputKeyboardEvent_R.KEY_RUN) {
                //бег 
                this.command = "run -";
            }
        }
    }
    //==============================================================================
    //=============================================================================
    /** Description placeholder */
    drow() {
        let X0 = 550;
        let Y0 = 600;
        let left = X0;
        let top = Y0 - 2;
        let width = 350;
        let height = 22;
        this.printText("eventCode = " + userInputKeyboardEvent_R.eventCode, left, top, width, height, X0, Y0);
        let X0_2 = X0;
        let Y0_2 = Y0 + 25;
        let left_2 = X0_2;
        let top_2 = Y0_2 - 2;
        let width_2 = 350;
        let height_2 = 22;
        this.printText("eventKey = " + userInputKeyboardEvent_R.eventKey, left_2, top_2, width_2, height_2, X0_2, Y0_2);
        let X0_3 = X0;
        let Y0_3 = Y0_2 + 25;
        let left_3 = X0_3;
        let top_3 = Y0_3 - 2;
        let width_3 = 350;
        let height_3 = 22;
        this.printText(this.command, left_3, top_3, width_3, height_3, X0_3, Y0_3);
        //console.log("UserInputKeyboard_C->drow()->this.command = " + this.command);
    }
    //=============================================================================
    //=============================================================================
    /**
     * Description placeholder
     *
     * @param {string} text
     * @param {number} left
     * @param {number} top
     * @param {number} width
     * @param {number} height
     * @param {number} x0
     * @param {number} y0
     */
    printText(text, left, top, width, height, x0, y0) {
        //  clearRect(_left, _top, _width, _height);
        html5CanvasPrimitive_R.strokeRect(left, top, width, height);
        html5CanvasText_R.strokeText(text, x0, y0);
    }
}
/**
 * Description placeholder
 *
 * @type {UserInputKeyboard_C}
 */
let userInputKeyboard_R = new UserInputKeyboard_C();
userInputKeyboard_R.iniM();
export { userInputKeyboard_R, UserInputKeyboard_C };
if (global_R.print_module_start_finish)
    console.log('keyboard.js -> module finish');
userInputKeyboard_R.isOk = "OK"; //
