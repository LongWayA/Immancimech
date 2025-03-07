let Copyright_AnBr75 = 2025;
import { global_R } from '../../1_index/global.js';
if (global_R.print_module_start_finish)
    console.log('drow_game_start.js -> module start');
import { Html5Canvas_C } from '../../2_graphics_2d/html5_canvas/html5_canvas.js';
import { drawTimerNumber_R } from './../drow_timer_number.js';
class DrawGameMenu_C {
    html5Canvas_R = null;
    html5Sprites_R = null;
    static NAME = "DrawGameMenu_C";
    widthCanvas = 0;
    heightCanvas = 0;
    constructor() {
    }
    iniM(html5Canvas_R, html5Sprites_R, timer_R) {
        this.html5Canvas_R = html5Canvas_R;
        this.widthCanvas = html5Canvas_R.widthCanvas;
        this.heightCanvas = html5Canvas_R.heightCanvas;
        this.html5Sprites_R = html5Sprites_R;
        drawTimerNumber_R.iniM(timer_R, this.html5Canvas_R, this.html5Sprites_R);
    }
    tick(countTick) {
        let left = 0;
        let top = 0;
        let width = 500;
        let height = 35;
        let left0 = 10;
        let top0 = 450;
        let left1 = 10;
        let top1 = 10;
        let left2 = 10;
        let top2 = 510;
        this.html5Canvas_R.clearRect(left, top, this.widthCanvas, this.heightCanvas);
        this.html5Canvas_R.drawRect(left, top, this.widthCanvas, this.heightCanvas, Html5Canvas_C.LINE_WIDTH_1, Html5Canvas_C.BLUE, 0);
        this.html5Canvas_R.drawRect(left1, top1, width, height, Html5Canvas_C.LINE_WIDTH_1, Html5Canvas_C.RED, 0);
        this.html5Canvas_R.drawText("Game Menu ", left1, top1, Html5Canvas_C.ITALIC_30PT_ARIAL, Html5Canvas_C.GREEN, 1);
        drawTimerNumber_R.drawNumberTick(left0, top0, countTick);
        drawTimerNumber_R.drawTimerTick(left2, top2);
        let y = 200;
        for (let i = 1; i < 10; i++) {
            let x = 0 + i * 150;
            this.html5Sprites_R.drowSprite(1, i, x, y);
        }
        y = 300;
        for (let i = 1; i < 8; i++) {
            let x = 100 + i * 50;
            this.html5Sprites_R.drowSprite(2, i, x, y);
        }
    }
}
export { DrawGameMenu_C };
if (global_R.print_module_start_finish)
    console.log('drow_game_start.js -> module finish');
