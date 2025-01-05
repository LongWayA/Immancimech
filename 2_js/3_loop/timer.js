"use strict";
let Copyright_AnBr75 = 2024;
import { global_R } from '../1_index/global.js';
if (global_R.print_module_start_finish)
    console.log('timer.js -> module start');
class Timer_C {
    static NAME = "timer_R";
    isOk = "";
    static TICKS_PER_SECOND_02 = 0.2;
    static TICKS_PER_SECOND_05 = 0.5;
    static TICKS_PER_SECOND_1 = 1;
    static TICKS_PER_SECOND_2 = 2;
    static TICKS_PER_SECOND_3 = 3;
    static TICKS_PER_SECOND_4 = 4;
    static TICKS_PER_SECOND_5 = 5;
    static TICKS_PER_SECOND_6 = 6;
    static TICKS_PER_SECOND_7 = 7;
    static TICKS_PER_SECOND_8 = 8;
    static TICKS_PER_SECOND_9 = 9;
    static TICKS_PER_SECOND_10 = 10;
    static TICKS_PER_SECOND_15 = 15;
    static TICKS_PER_SECOND_20 = 20;
    static TICKS_PER_SECOND_30 = 30;
    static TICKS_PER_SECOND_40 = 40;
    static TICKS_PER_SECOND_50 = 50;
    static TICKS_PER_SECOND_60 = 60;
    static TICKS_PER_SECOND_62 = 62;
    static TICKS_PER_SECOND_70 = 70;
    ticksPerSecond = 0;
    tick_timeNeedOnAllMs = 0;
    tick_timeStartMs = 0;
    tick_OldTimeStartMs = 0;
    tick_timeEndMs = 0;
    tick_timeEndMs_minus_timeStartMs = 0;
    tick_timeThreadSleepGameMs = 0;
    tick_OldTimeStartMs_minus_timeStartMs = 0;
    currentTimeMs = 0;
    constructor() {
    }
    iniM() {
        this.iniTicksPerSecond(Timer_C.TICKS_PER_SECOND_05);
    }
    startM() {
    }
    updateTimeBeforeTick() {
        this.tick_OldTimeStartMs = this.tick_timeStartMs;
        this.tick_timeStartMs = (new Date).getTime();
        this.tick_OldTimeStartMs_minus_timeStartMs = this.tick_timeStartMs - this.tick_OldTimeStartMs;
    }
    updateTimeAfterTick() {
        this.tick_timeEndMs = (new Date).getTime();
        this.tick_timeEndMs_minus_timeStartMs = this.tick_timeEndMs - this.tick_timeStartMs;
        this.tick_timeThreadSleepGameMs = this.tick_timeNeedOnAllMs - this.tick_timeEndMs_minus_timeStartMs;
        this.tick_timeThreadSleepGameMs = (this.tick_timeThreadSleepGameMs < 10) ? 10 : this.tick_timeThreadSleepGameMs;
    }
    iniTicksPerSecond(ticksPerSecond) {
        this.ticksPerSecond = ticksPerSecond;
        this.tick_timeNeedOnAllMs = 1000 / this.ticksPerSecond;
        console.log('Timer-> iniTicksPerSecond = ' + ticksPerSecond);
    }
    getTickTimeOnAllMs() {
        return this.tick_timeNeedOnAllMs;
    }
    getTickTimeStartMs() {
        return this.tick_timeStartMs;
    }
    getTickTimeEndMs() {
        return this.tick_timeEndMs;
    }
    getTickTimeEndMsMinusTimeStartMs() {
        return this.tick_timeEndMs_minus_timeStartMs;
    }
    getTickTimeThreadSleepGameMs() {
        return this.tick_timeThreadSleepGameMs;
    }
    getTickOldTimeStartMs() {
        return this.tick_OldTimeStartMs;
    }
    getTickOldTimeStartMinusTimeStartMs() {
        return this.tick_OldTimeStartMs_minus_timeStartMs;
    }
    getCurrentTimeMs() {
        this.currentTimeMs = (new Date).getTime();
        return this.currentTimeMs;
    }
}
let timer_R = new Timer_C();
timer_R.iniM();
console.log('timer.js -> currentTimeMs = ' + timer_R.getCurrentTimeMs());
export { timer_R, Timer_C };
if (global_R.print_module_start_finish)
    console.log('timer.js -> module finish');
timer_R.isOk = "OK";
