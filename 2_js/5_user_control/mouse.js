import { global_R } from '../1_index/global.js';
if (global_R.print_module_start_finish)
    console.log('mouse.js -> module start');
import { html5Canvas_R } from '../2_graphics_2d/html5_canvas/html5_canvas.js';
import { html5CanvasMouseEvent_R } from './html5_canvas_mouse_event.js';
class Mouse_C {
    NAME = "Mouse_C";
    isOk = "";
    constructor() {
    }
    iniM() {
    }
    startM() {
        html5CanvasMouseEvent_R.startM();
    }
    tick() {
        if (html5CanvasMouseEvent_R.mouseMoveIsChange == 1) {
            html5CanvasMouseEvent_R.mouseMoveIsChange = 0;
        }
        if (html5CanvasMouseEvent_R.mouseDownIsChange == 1) {
            html5CanvasMouseEvent_R.mouseDownIsChange = 0;
        }
        if (html5CanvasMouseEvent_R.mouseUpIsChange == 1) {
            html5CanvasMouseEvent_R.mouseDownIsChange = 0;
        }
    }
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
    }
    printText(textEvent, offsetX, offsetY, left, top, width, height, X0, Y0) {
        html5Canvas_R.clearRect(left, top, width, height);
        html5Canvas_R.drawRect(left, top, width, height, 1, 'red', 0);
        html5Canvas_R.drawText(textEvent + ": X = "
            + offsetX + " Y = " + offsetY, X0, Y0, 'italic 20px sans-serif', 'red', 1);
    }
}
let mouse_R = new Mouse_C();
mouse_R.iniM();
export { mouse_R, Mouse_C };
if (global_R.print_module_start_finish)
    console.log('mouse.js -> module finish');
mouse_R.isOk = "OK";
