// @ts-check
/**
 * @module mouse
 * @author ABr75
 * @copyright Copyright (c) 2024, ABr75 and/or its affiliates. All rights reserved.
 * @version Last_modified -10.09.2023-25.11.2023
 * @version Last_modified -24.02m.2024-
 */
/**
* НАЗНАЧЕНИЕ
* Событие keydown происходит при нажатии клавиши, а keyup – при отпускании.
*Свойство key объекта события позволяет получить символ, а свойство code – «физический код клавиши».
*Если пользователь работает с разными языками, то при переключении на другой язык символ изменится с "Z" на совершенно другой.
*Получившееся станет новым значением event.key, тогда как event.code останется тем же: "KeyZ".
*https://learn.javascript.ru/keyboard-events
*/
import { global_R } from '../1_loop/global.js';
if (global_R.print_module_start_finish)
    console.log('mouse.js -> module start');
import { html5CanvasText_R } from '../2_render/html5_canvas/html5_canvas_text.js';
import { html5CanvasPrimitive_R } from '../2_render/html5_canvas/html5_canvas_primitive.js';
import { html5CanvasMouseEvent_R } from '../3_user_control/html5_canvas_mouse_event.js';
class Mouse_C {
    NAME = "Mouse_C";
    isOk = "";
    //=============================================================================
    constructor() {
    }
    //=============================================================================
    //=============================================================================
    iniM() {
    }
    //=============================================================================
    //=============================================================================
    startM() {
        html5CanvasMouseEvent_R.startM();
    }
    //=============================================================================
    //=============================================================================
    tick() {
        if (html5CanvasMouseEvent_R.mouseMoveIsChange == 1) {
            html5CanvasMouseEvent_R.mouseMoveIsChange = 0;
            // console.log("this.ini-> tick mousemove");
            // console.log("this.ini-> mouseMoveX = " + html5CanvasMouseEvent_R.mouseMoveX);
            // console.log("this.ini-> mouseMoveY = " + this.mouseMoveY);
        }
        if (html5CanvasMouseEvent_R.mouseDownIsChange == 1) {
            html5CanvasMouseEvent_R.mouseDownIsChange = 0;
            //console.log("this.ini-> mousemove");
        }
        if (html5CanvasMouseEvent_R.mouseUpIsChange == 1) {
            html5CanvasMouseEvent_R.mouseDownIsChange = 0;
            //console.log("this.ini-> mousemove");
        }
        //console.log("this.ini-> mousemove");
    }
    //=============================================================================
    //=============================================================================
    drow() {
        let X0 = 550;
        let Y0 = +510;
        let left = X0;
        let top = Y0 - 2;
        let width = 350;
        let height = 22;
        this.printText('mousemove', html5CanvasMouseEvent_R.mouseMoveX, html5CanvasMouseEvent_R.mouseMoveY, left, top, width, height, X0, Y0);
        let X0_2 = X0;
        let Y0_2 = Y0 + 25;
        let left_2 = X0_2;
        let top_2 = Y0_2 - 2;
        let width_2 = 350;
        let height_2 = 22;
        this.printText('mousedown', html5CanvasMouseEvent_R.mouseDownX, html5CanvasMouseEvent_R.mouseDownY, left_2, top_2, width_2, height_2, X0_2, Y0_2);
        let X0_3 = X0;
        let Y0_3 = Y0_2 + 25;
        let left_3 = X0_3;
        let top_3 = Y0_3 - 2;
        let width_3 = 350;
        let height_3 = 22;
        this.printText('mouseup', html5CanvasMouseEvent_R.mouseUpX, html5CanvasMouseEvent_R.mouseUpY, left_3, top_3, width_3, height_3, X0_3, Y0_3);
        //console.log("this.ini-> mousemove");
    }
    //=============================================================================
    //=============================================================================
    printText(textEvent, offsetX, offsetY, left, top, width, height, X0, Y0) {
        //  clearRect(_left, _top, _width, _height);
        html5CanvasPrimitive_R.strokeRect(left, top, width, height);
        html5CanvasText_R.strokeText(textEvent + ": X = "
            + offsetX + " Y = " + offsetY, X0, Y0);
    }
}
let mouse_R = new Mouse_C();
mouse_R.iniM();
export { mouse_R, Mouse_C };
if (global_R.print_module_start_finish)
    console.log('mouse.js -> module finish');
mouse_R.isOk = "OK"; //
