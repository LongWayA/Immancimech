let Copyright_AnBr75 = 2023;
import { global_R } from '../../1_index/global.js';
if (global_R.print_module_start_finish)
    console.log('mouse.js -> module start');
import { Html5CanvasMouseEvent_C } from './html5_canvas_mouse_event.js';
class Mouse_C {
    html5Canvas_R = null;
    html5CanvasMouseEvent_R = new Html5CanvasMouseEvent_C();
    static NAME = "Mouse_C";
    constructor() {
    }
    iniM(html5Canvas_R) {
        this.html5Canvas_R = html5Canvas_R;
        this.html5CanvasMouseEvent_R.iniM();
    }
    tick() {
        if (this.html5CanvasMouseEvent_R.mouseMoveIsChange == 1) {
            this.html5CanvasMouseEvent_R.mouseMoveIsChange = 0;
        }
        if (this.html5CanvasMouseEvent_R.mouseDownIsChange == 1) {
            this.html5CanvasMouseEvent_R.mouseDownIsChange = 0;
        }
        if (this.html5CanvasMouseEvent_R.mouseUpIsChange == 1) {
            this.html5CanvasMouseEvent_R.mouseDownIsChange = 0;
        }
    }
    drow() {
        let X0 = 550;
        let Y0 = +510;
        let left = X0;
        let top = Y0 - 2;
        let width = 350;
        let height = 22;
        this.printText('mousemove', this.html5CanvasMouseEvent_R.mouseMoveX, this.html5CanvasMouseEvent_R.mouseMoveY, left, top, width, height, X0, Y0);
        let X0_2 = X0;
        let Y0_2 = Y0 + 25;
        let left_2 = X0_2;
        let top_2 = Y0_2 - 2;
        let width_2 = 350;
        let height_2 = 22;
        this.printText('mousedown', this.html5CanvasMouseEvent_R.mouseDownX, this.html5CanvasMouseEvent_R.mouseDownY, left_2, top_2, width_2, height_2, X0_2, Y0_2);
        let X0_3 = X0;
        let Y0_3 = Y0_2 + 25;
        let left_3 = X0_3;
        let top_3 = Y0_3 - 2;
        let width_3 = 350;
        let height_3 = 22;
        this.printText('mouseup', this.html5CanvasMouseEvent_R.mouseUpX, this.html5CanvasMouseEvent_R.mouseUpY, left_3, top_3, width_3, height_3, X0_3, Y0_3);
    }
    printText(textEvent, offsetX, offsetY, left, top, width, height, X0, Y0) {
        this.html5Canvas_R.clearRect(left, top, width, height);
        this.html5Canvas_R.drawRect(left, top, width, height, 1, 'red', 0);
        this.html5Canvas_R.drawText(textEvent + ": x = "
            + offsetX + " y = " + offsetY, X0, Y0, 'italic 20px sans-serif', 'red', 1);
    }
}
export { Mouse_C };
if (global_R.print_module_start_finish)
    console.log('mouse.js -> module finish');
