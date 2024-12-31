import { global_R } from '../global.js';
if (global_R.print_module_start_finish)
    console.log('drow_game_pause.js -> module start');
import { html5Canvas_R, Html5Canvas_C } from './html5_canvas/html5_canvas.js';
import { drawTimerNumber_R } from './drow_timer_number.js';
class DrawGameEnd_C {
    NAME = "DrawGameEnd_C";
    isOk = "";
    constructor() {
    }
    iniM() {
    }
    startM() {
    }
    tick(out_Game, widthCanvas, heightCanvas) {
        let left = 0;
        let top = 0;
        let width = 500;
        let height = 35;
        let left0 = 100;
        let top0 = 100;
        let left1 = 100;
        let top1 = 200;
        html5Canvas_R.clearRect(left, top, widthCanvas, heightCanvas);
        drawTimerNumber_R.drawNumberTick(left1, top1);
        html5Canvas_R.drawRect(left0, top0, width, height, Html5Canvas_C.LINE_WIDTH_1, Html5Canvas_C.GREEN, 0);
        html5Canvas_R.drawText("Game End ", left0, top0, Html5Canvas_C.ITALIC_30PT_ARIAL, Html5Canvas_C.GREEN, 1);
        drawTimerNumber_R.drawTimerTick(10, 510);
    }
}
let drawGameEnd_R = new DrawGameEnd_C();
drawGameEnd_R.iniM();
export { drawGameEnd_R, DrawGameEnd_C };
if (global_R.print_module_start_finish)
    console.log('drow_game_pause.js -> module finish');
drawGameEnd_R.isOk = "OK";
