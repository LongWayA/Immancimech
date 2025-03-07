/** 
 * 5_user_control
 * @author AnBr75
 * @copyright Copyright (c) 2023, AnBr75 and/or its affiliates. All rights reserved.
 * @version created 10.09.2023
 */

let Copyright_AnBr75 = 2023;

/**
* НАЗНАЧЕНИЕ
* Событие keydown происходит при нажатии клавиши, а keyup – при отпускании.
*Свойство key объекта события позволяет получить символ, а свойство code – «физический код клавиши».
*Если пользователь работает с разными языками, то при переключении на другой язык символ изменится с "Z" на совершенно другой. 
*Получившееся станет новым значением event.key, тогда как event.code останется тем же: "KeyZ".
*https://learn.javascript.ru/keyboard-events
*/

import { global_R } from '../../1_index/global.js';
if (global_R.print_module_start_finish) console.log('mouse.js -> module start');

import { Html5Canvas_C } from '../../2_graphics_2d/html5_canvas/html5_canvas.js';
import { Html5CanvasMouseEvent_C } from './html5_canvas_mouse_event.js';

class Mouse_C {

    html5Canvas_R:  Html5Canvas_C | null = null;
    html5CanvasMouseEvent_R: Html5CanvasMouseEvent_C = new Html5CanvasMouseEvent_C();

    public static NAME: string = "Mouse_C";

    //=============================================================================
    constructor() {
    }
    //=============================================================================

    //=============================================================================
    iniM(html5Canvas_R: Html5Canvas_C): void {
        this.html5Canvas_R = html5Canvas_R;//
        this.html5CanvasMouseEvent_R.iniM();
    }
    //=============================================================================
    //=============================================================================
    tick(): void  {

        if (this.html5CanvasMouseEvent_R.mouseMoveIsChange == 1) {
            this.html5CanvasMouseEvent_R.mouseMoveIsChange = 0;

            // console.log("this.ini-> tick mousemove");
            // console.log("this.ini-> mouseMoveX = " + this.html5CanvasMouseEvent_R.mouseMoveX);
            // console.log("this.ini-> mouseMoveY = " + this.mouseMoveY);
        }

        if (this.html5CanvasMouseEvent_R.mouseDownIsChange == 1) {
            this.html5CanvasMouseEvent_R.mouseDownIsChange = 0;
            //console.log("this.ini-> mousemove");
        }


        if (this.html5CanvasMouseEvent_R.mouseUpIsChange == 1) {
            this.html5CanvasMouseEvent_R.mouseDownIsChange = 0;
            //console.log("this.ini-> mousemove");
        }

        //console.log("this.ini-> mousemove");
    }
    //=============================================================================

    //=============================================================================
    drow(): void  {

        let X0 = 550;
        let Y0 = +510;
        let left = X0;
        let top = Y0 - 2;
        let width = 350;
        let height = 22;


        this.printText('mousemove', this.html5CanvasMouseEvent_R.mouseMoveX,
            this.html5CanvasMouseEvent_R.mouseMoveY, left, top, width, height, X0, Y0);

        let X0_2 = X0;
        let Y0_2 = Y0 + 25;
        let left_2 = X0_2;
        let top_2 = Y0_2 - 2;
        let width_2 = 350;
        let height_2 = 22;

        this.printText('mousedown', this.html5CanvasMouseEvent_R.mouseDownX,
            this.html5CanvasMouseEvent_R.mouseDownY, left_2, top_2, width_2, height_2, X0_2, Y0_2);

        let X0_3 = X0;
        let Y0_3 = Y0_2 + 25;
        let left_3 = X0_3;
        let top_3 = Y0_3 - 2;
        let width_3 = 350;
        let height_3 = 22;

        this.printText('mouseup', this.html5CanvasMouseEvent_R.mouseUpX,
            this.html5CanvasMouseEvent_R.mouseUpY, left_3, top_3, width_3, height_3, X0_3, Y0_3);

        //console.log("this.ini-> mousemove");
    }
    //=============================================================================

    //=============================================================================
    printText(textEvent: string, offsetX: number, offsetY: number,
        left: number, top: number, width: number, height: number, X0: number, Y0: number): void  {

        (this.html5Canvas_R as Html5Canvas_C).clearRect(left, top, width, height);

        (this.html5Canvas_R as Html5Canvas_C).drawRect(left, top, width, height, 1, 'red', 0);//'blue' 'red'

        (this.html5Canvas_R as Html5Canvas_C).drawText(textEvent + ": x = "
            + offsetX + " y = " + offsetY, X0, Y0, 'italic 20px sans-serif', 'red', 1);//

    }
    //=============================================================================
}
 
export { Mouse_C };
if (global_R.print_module_start_finish) console.log('mouse.js -> module finish');
