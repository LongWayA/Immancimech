let Copyright_AnBr75 = 2024;
import { global_R } from '../1_index/global.js';
if (global_R.print_module_start_finish)
    console.log('drow_game_start.js -> module start');
import { html5Canvas_R, Html5Canvas_C } from './html5_canvas/html5_canvas.js';
import { html5Sprites_R } from './html5_sprites/html5_sprites.js';
import { drawTimerNumber_R } from './drow_timer_number.js';
class DrawGameStart_C {
    static NAME = "DrawGameStart_C";
    isOk = "";
    widthCanvas = 0;
    heightCanvas = 0;
    constructor() {
    }
    iniM() {
    }
    startM() {
        this.widthCanvas = html5Canvas_R.widthCanvas;
        this.heightCanvas = html5Canvas_R.heightCanvas;
    }
    tick() {
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
        html5Canvas_R.clearRect(left, top, this.widthCanvas, this.heightCanvas);
        html5Canvas_R.drawRect(left, top, this.widthCanvas, this.heightCanvas, Html5Canvas_C.LINE_WIDTH_1, Html5Canvas_C.BLUE, 0);
        html5Canvas_R.drawRect(left1, top1, width, height, Html5Canvas_C.LINE_WIDTH_1, Html5Canvas_C.RED, 0);
        html5Canvas_R.drawText("Game Start ", left1, top1, Html5Canvas_C.ITALIC_30PT_ARIAL, Html5Canvas_C.GREEN, 1);
        drawTimerNumber_R.drawNumberTick(left0, top0);
        drawTimerNumber_R.drawTimerTick(left2, top2);
        let y = 200;
        for (let i = 1; i < 20; i++) {
            let x = 100 + i * 50;
            html5Sprites_R.drowSprite(3, i, x, y);
        }
        y = 300;
        for (let i = 1; i < 15; i++) {
            let x = 100 + i * 50;
            html5Sprites_R.drowSprite(4, i, x, y);
        }
    }
}
let drawGameStart_R = new DrawGameStart_C();
drawGameStart_R.iniM();
export { drawGameStart_R, DrawGameStart_C };
if (global_R.print_module_start_finish)
    console.log('drow_game_start.js -> module finish');
drawGameStart_R.isOk = "OK";