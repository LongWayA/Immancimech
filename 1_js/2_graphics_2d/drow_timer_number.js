let Copyright_AnBr75 = 2024;
import { global_R } from '../1_index/global.js';
if (global_R.print_module_start_finish)
    console.log('drow_timer_number.js -> module start');
import { Html5Canvas_C } from './html5_canvas/html5_canvas.js';
class DrawTimerNumber_C {
    html5Canvas_R = null;
    html5Sprites_R = null;
    timer_R = null;
    static NAME = "DrawTimerNumber_C";
    isOk = "";
    constructor() {
    }
    iniM() {
    }
    startM(timer_R, html5Canvas_R, html5Sprites_R) {
        this.html5Canvas_R = html5Canvas_R;
        this.timer_R = timer_R;
        this.html5Sprites_R = html5Sprites_R;
    }
    drawNumberTick(left, top, countTick) {
        let width = 500;
        let height = 35;
        this.html5Canvas_R.clearRect(left, top, width, height);
        this.html5Canvas_R.drawRect(left, top, width, height, Html5Canvas_C.LINE_WIDTH_1, Html5Canvas_C.GREEN, 0);
        this.html5Canvas_R.drawText("Game.tick = " + countTick, left, top, Html5Canvas_C.ITALIC_30PT_ARIAL, Html5Canvas_C.GREEN, 1);
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
        this.html5Canvas_R.clearRect(leftR, topR, width, height);
        this.html5Canvas_R.drawRect(leftR, topR, width, height, Html5Canvas_C.LINE_WIDTH_1, Html5Canvas_C.GREEN, 0);
        this.html5Canvas_R.drawText("tick_timeOnAllMs = " + this.timer_R.getTickTimeOnAllMs(), left, top, Html5Canvas_C.ITALIC_15PT_ARIAL, Html5Canvas_C.GREEN, 1);
        this.html5Canvas_R.drawText("tick_timeStartMs = " + this.timer_R.getTickTimeStartMs(), left, top1, Html5Canvas_C.ITALIC_15PT_ARIAL, Html5Canvas_C.GREEN, 1);
        this.html5Canvas_R.drawText("tick_timeEndMs = " + this.timer_R.getTickTimeEndMs(), left, top2, Html5Canvas_C.ITALIC_15PT_ARIAL, Html5Canvas_C.GREEN, 1);
        this.html5Canvas_R.drawText("tick_timeEndMinusStartTickMs = " + this.timer_R.getTickTimeEndMsMinusTimeStartMs(), left, top3, Html5Canvas_C.ITALIC_15PT_ARIAL, Html5Canvas_C.GREEN, 1);
        this.html5Canvas_R.drawText("tick_timeThreadSleepGameMs = " + this.timer_R.getTickTimeThreadSleepGameMs(), left, top4, Html5Canvas_C.ITALIC_15PT_ARIAL, Html5Canvas_C.GREEN, 1);
        this.html5Canvas_R.drawText("tickOld_timeStartMs = " + this.timer_R.getTickOldTimeStartMs(), left, top5, Html5Canvas_C.ITALIC_15PT_ARIAL, Html5Canvas_C.GREEN, 1);
        this.html5Canvas_R.drawText("tick_tickOld_timeStart_Minus_tick_timeStartMs = "
            + this.timer_R.getTickOldTimeStartMinusTimeStartMs(), left, top6, Html5Canvas_C.ITALIC_15PT_ARIAL, Html5Canvas_C.GREEN, 1);
    }
}
let drawTimerNumber_R = new DrawTimerNumber_C();
drawTimerNumber_R.iniM();
export { drawTimerNumber_R, DrawTimerNumber_C };
if (global_R.print_module_start_finish)
    console.log('drow_timer_number.js -> module finish');
drawTimerNumber_R.isOk = "OK";
