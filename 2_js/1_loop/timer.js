"use strict";
import { global_R } from '../global.js';
if (global_R.print_module_start_finish)
    console.log('timer.js -> module start');
class Timer_C {
    NAME = "timer_R";
    isOk = "";
    TICKS_PER_SECOND_02 = 0.2;
    TICKS_PER_SECOND_05 = 0.5;
    TICKS_PER_SECOND_1 = 1;
    TICKS_PER_SECOND_2 = 2;
    TICKS_PER_SECOND_3 = 3;
    TICKS_PER_SECOND_4 = 4;
    TICKS_PER_SECOND_5 = 5;
    TICKS_PER_SECOND_6 = 6;
    TICKS_PER_SECOND_7 = 7;
    TICKS_PER_SECOND_8 = 8;
    TICKS_PER_SECOND_9 = 9;
    TICKS_PER_SECOND_10 = 10;
    TICKS_PER_SECOND_15 = 15;
    TICKS_PER_SECOND_20 = 20;
    TICKS_PER_SECOND_30 = 30;
    TICKS_PER_SECOND_40 = 40;
    TICKS_PER_SECOND_50 = 50;
    TICKS_PER_SECOND_60 = 60;
    TICKS_PER_SECOND_62 = 62;
    TICKS_PER_SECOND_70 = 70;
    ticksPerSecond = 0;
    tick_timeOnAllMs = 0;
    tick_timeStartMs = 0;
    tick_timeEndMs = 0;
    tick_timeEndMinusStartTickMs = 0;
    tick_timeThreadSleepGameMs = 0;
    tickOld_timeStartMs = 0;
    tick_tickOld_timeStart_Minus_tick_timeStartMs = 0;
    constructor() {
    }
    iniM() {
    }
    startM() {
    }
    updateTimeBeforeTick() {
        this.tickOld_timeStartMs = this.tick_timeStartMs;
        this.tick_timeStartMs = (new Date).getTime();
        this.tick_tickOld_timeStart_Minus_tick_timeStartMs = this.tick_timeStartMs - this.tickOld_timeStartMs;
    }
    updateTimeAfterTick() {
        this.tick_timeEndMs = (new Date).getTime();
        this.tick_timeEndMinusStartTickMs = this.tick_timeEndMs - this.tick_timeStartMs;
        this.tick_timeThreadSleepGameMs = this.tick_timeOnAllMs - this.tick_timeEndMinusStartTickMs;
        if (this.tick_timeThreadSleepGameMs < 10) {
            this.tick_timeThreadSleepGameMs = 10;
        }
    }
    iniTicksPerSecond(ticksPerSecond) {
        this.tick_timeStartMs = (new Date).getTime();
        this.ticksPerSecond = ticksPerSecond;
        this.tick_timeOnAllMs = 1000 / this.ticksPerSecond;
        console.log('Timer-> iniTicksPerSecond = ' + ticksPerSecond);
    }
    getTickTimeOnAllMs() {
        return this.tick_timeOnAllMs;
    }
    getTickTimeStartMs() {
        return this.tick_timeStartMs;
    }
    getTickTimeEndMs() {
        return this.tick_timeEndMs;
    }
    getTickTimeEndMinusStartTickMs() {
        return this.tick_timeEndMinusStartTickMs;
    }
    getTickTimeThreadSleepGameMs() {
        return this.tick_timeThreadSleepGameMs;
    }
    getTickOldTimeStartMs() {
        return this.tickOld_timeStartMs;
    }
    getTickTickOldTimeStartMinusTickTimeStartMs() {
        return this.tick_tickOld_timeStart_Minus_tick_timeStartMs;
    }
    getCurrentTimeMs() {
        let currentTimeMs = (new Date).getTime();
        return currentTimeMs;
    }
}
let timer_R = new Timer_C();
timer_R.iniM();
export { timer_R, Timer_C };
if (global_R.print_module_start_finish)
    console.log('timer.js -> module finish');
timer_R.isOk = "OK";
