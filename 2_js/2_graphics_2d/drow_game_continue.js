let Copyright_AnBr75 = 2024;
import { global_R } from '../1_index/global.js';
if (global_R.print_module_start_finish)
    console.log('drow_game_go.js -> module start');
import { html5Canvas_R, Html5Canvas_C } from './html5_canvas/html5_canvas.js';
import { mouse_R } from '../5_user_control/mouse.js';
import { userInputKeyboard_R } from '../5_user_control/keyboard.js';
import { frames_R } from './frames/frames.js';
import { background_R } from '../local/background/background.js';
import { immortals_R } from '../user_avatars/immortals.js';
import { drawTimerNumber_R } from './drow_timer_number.js';
class DrawGameContinue_C {
    static NAME = "DrawGameContinue_C";
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
        html5Canvas_R.clearRect(left, top, this.widthCanvas, this.heightCanvas);
        html5Canvas_R.drawRect(left, top, this.widthCanvas, this.heightCanvas, Html5Canvas_C.LINE_WIDTH_1, Html5Canvas_C.BLUE, 0);
        let left0 = 10;
        let top0 = 455;
        html5Canvas_R.clearRect(0, 0, frames_R.editorFrame.width, frames_R.editorFrame.height);
        background_R.drow();
        frames_R.drowEditorFrame();
        frames_R.drowMapFrame();
        frames_R.drowTilesPanelFrame();
        frames_R.drowPrintFrameFrame();
        drawTimerNumber_R.drawTimerTick(10, 510);
        mouse_R.drow();
        userInputKeyboard_R.drow();
        immortals_R.drow();
        drawTimerNumber_R.drawNumberTick(left0, top0);
    }
}
let drawGameContinue_R = new DrawGameContinue_C();
drawGameContinue_R.iniM();
export { drawGameContinue_R, DrawGameContinue_C };
if (global_R.print_module_start_finish)
    console.log('drow_game_go.js -> module finish');
drawGameContinue_R.isOk = "OK";
