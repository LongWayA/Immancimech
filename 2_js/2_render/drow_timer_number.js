import { global_R } from '../global.js';
if (global_R.print_module_start_finish)
    console.log('drow_timer_number.js -> module start');
import { timer_R } from '../1_loop/timer.js';
import { html5Canvas_R, Html5Canvas_C } from './html5_canvas/html5_canvas.js';
import { gameState_R } from '../4_game_state/game_state.js';
class DrawTimerNumber_C {
    NAME = "DrawTimerNumber_C";
    isOk = "";
    constructor() {
    }
    iniM() {
    }
    startM() {
    }
    drawNumberTick(left, top) {
        let width = 500;
        let height = 35;
        html5Canvas_R.clearRect(left, top, width, height);
        html5Canvas_R.drawRect(left, top, width, height, Html5Canvas_C.LINE_WIDTH_1, Html5Canvas_C.GREEN, 0);
        html5Canvas_R.drawText("Game.tick = " + gameState_R.sprite, left, top, Html5Canvas_C.ITALIC_30PT_ARIAL, Html5Canvas_C.GREEN, 1);
    }
    drawTimerTick(left, top) {
        let top1 = top + 25;
        let top2 = top1 + 25;
        let top3 = top2 + 25;
        let top4 = top3 + 25;
        let top5 = top4 + 25;
        let top6 = top5 + 25;
        let width = 500;
        let height = 200;
        let leftR = left;
        let topR = top - 5;
        html5Canvas_R.clearRect(leftR, topR, width, height);
        html5Canvas_R.drawRect(leftR, topR, width, height, Html5Canvas_C.LINE_WIDTH_1, Html5Canvas_C.GREEN, 0);
        html5Canvas_R.drawText("tick_timeOnAllMs = " + timer_R.getTickTimeOnAllMs(), left, top, Html5Canvas_C.ITALIC_15PT_ARIAL, Html5Canvas_C.GREEN, 1);
        html5Canvas_R.drawText("tick_timeStartMs = " + timer_R.getTickTimeStartMs(), left, top1, Html5Canvas_C.ITALIC_15PT_ARIAL, Html5Canvas_C.GREEN, 1);
        html5Canvas_R.drawText("tick_timeEndMs = " + timer_R.getTickTimeEndMs(), left, top2, Html5Canvas_C.ITALIC_15PT_ARIAL, Html5Canvas_C.GREEN, 1);
        html5Canvas_R.drawText("tick_timeEndMinusStartTickMs = " + timer_R.getTickTimeEndMinusStartTickMs(), left, top3, Html5Canvas_C.ITALIC_15PT_ARIAL, Html5Canvas_C.GREEN, 1);
        html5Canvas_R.drawText("tick_timeThreadSleepGameMs = " + timer_R.getTickTimeThreadSleepGameMs(), left, top4, Html5Canvas_C.ITALIC_15PT_ARIAL, Html5Canvas_C.GREEN, 1);
        html5Canvas_R.drawText("tickOld_timeStartMs = " + timer_R.getTickOldTimeStartMs(), left, top5, Html5Canvas_C.ITALIC_15PT_ARIAL, Html5Canvas_C.GREEN, 1);
        html5Canvas_R.drawText("tick_tickOld_timeStart_Minus_tick_timeStartMs = "
            + timer_R.getTickTickOldTimeStartMinusTickTimeStartMs(), left, top6, Html5Canvas_C.ITALIC_15PT_ARIAL, Html5Canvas_C.GREEN, 1);
    }
}
let drawTimerNumber_R = new DrawTimerNumber_C();
drawTimerNumber_R.iniM();
export { drawTimerNumber_R, DrawTimerNumber_C };
if (global_R.print_module_start_finish)
    console.log('drow_timer_number.js -> module finish');
drawTimerNumber_R.isOk = "OK";
