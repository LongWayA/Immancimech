let Copyright_AnBr75 = 2024;
import { global_R } from '../../1_index/global.js';
if (global_R.print_module_start_finish)
    console.log('drow_game_end.ts -> module start');
import { Html5Canvas_C } from '../../2_graphics_2d/html5_canvas/html5_canvas.js';
class DrawGameEnd_C {
    html5Canvas_R = null;
    html5Sprites_R = null;
    static NAME = "DrawGameEnd_C";
    widthCanvas = 0;
    heightCanvas = 0;
    constructor() {
    }
    iniM(html5Canvas_R, html5Sprites_R) {
        this.html5Canvas_R = html5Canvas_R;
        this.widthCanvas = html5Canvas_R.widthCanvas;
        this.heightCanvas = html5Canvas_R.heightCanvas;
        this.html5Sprites_R = html5Sprites_R;
    }
    tick() {
        let left = 0;
        let top = 0;
        let width = 500;
        let height = 35;
        let left0 = 100;
        let top0 = 100;
        let left1 = 100;
        let top1 = 200;
        this.html5Canvas_R.clearRect(left, top, this.widthCanvas, this.heightCanvas);
        this.html5Canvas_R.drawRect(left, top, this.widthCanvas, this.heightCanvas, Html5Canvas_C.LINE_WIDTH_1, Html5Canvas_C.BLUE, 0);
        this.html5Canvas_R.drawRect(left0, top0, width, height, Html5Canvas_C.LINE_WIDTH_1, Html5Canvas_C.GREEN, 0);
        this.html5Canvas_R.drawText("Game End ", left0, top0, Html5Canvas_C.ITALIC_30PT_ARIAL, Html5Canvas_C.GREEN, 1);
    }
}
export { DrawGameEnd_C };
if (global_R.print_module_start_finish)
    console.log('drow_game_end.ts -> module finish');
