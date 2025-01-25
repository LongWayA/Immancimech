let Copyright_AnBr75 = 2023;
import { global_R } from '../../1_index/global.js';
if (global_R.print_module_start_finish)
    console.log('html5_canvas_mouse_event.js -> module start');
class Html5CanvasMouseEvent_C {
    static NAME = "Html5CanvasMouseEvent_C";
    isOk = "";
    idCanvas = document.getElementById('game-canvas');
    mouseMoveIsChange = 0;
    mouseMoveX = 0;
    mouseMoveY = 0;
    mouseDownIsChange = 0;
    mouseDownX = 0;
    mouseDownY = 0;
    mouseUpIsChange = 0;
    mouseUpX = 0;
    mouseUpY = 0;
    constructor() {
    }
    iniM() {
        this.idCanvas.addEventListener('mousemove', (event) => {
            this.mouseMoveIsChange = 1;
            this.mouseMoveX = event.offsetX;
            this.mouseMoveY = event.offsetY;
        });
        this.idCanvas.addEventListener('mousedown', (event) => {
            this.mouseDownIsChange = 1;
            this.mouseDownX = event.offsetX;
            this.mouseDownY = event.offsetY;
        });
        this.idCanvas.addEventListener('mouseup', (event) => {
            this.mouseUpIsChange = 1;
            this.mouseUpX = event.offsetX;
            this.mouseUpY = event.offsetY;
        });
    }
    startM() {
    }
}
let html5CanvasMouseEvent_R = new Html5CanvasMouseEvent_C();
html5CanvasMouseEvent_R.iniM();
export { html5CanvasMouseEvent_R, Html5CanvasMouseEvent_C };
if (global_R.print_module_start_finish)
    console.log('html5_canvas_mouse_event.js -> module finish');
html5CanvasMouseEvent_R.isOk = "OK";
