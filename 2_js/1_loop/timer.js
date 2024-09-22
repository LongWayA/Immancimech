// @ts-check
"use strict";
/**
 * 1_loop
 * @module timer
 * @author ABr75
 * @copyright Copyright (c) 2024, ABr75 and/or its affiliates. All rights reserved.
 * @version Last_modified -08.08.2021-31.07.2022-06.03.2023-18.03.2023-26.03.2023-3.09.2023
 * @version Last_modified -24.02m.2024-
 */
/**
* НАЗНАЧЕНИЕ
*/
import { global_R } from './global.js';
if (global_R.print_module_start_finish)
    console.log('timer.js -> module start');
class Timer_C {
    NAME = "timer_R";
    isOk = "";
    // пустой тик выполняется не быстрее 5 мс, т.е. максимальный фпс выдаваемый браузером это 200
    TICKS_PER_SECOND_02 = 0.2; // 1 ticks per 5 sec
    TICKS_PER_SECOND_05 = 0.5; // 1 ticks per 2 sec
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
    //timerId: number = 0;
    ticksPerSecond = 0;
    // 1000 задержка в секунду. т.е тысяча милисекунд это секунда
    // 60 кадров это 0,01(6) sek = 16,(6) millis
    // 30 кадров это 0,03(3) sek = 30,(3) millis
    // 25 кадров это 0,04 sek = 40 millis
    // 10 кадров это 0,1 sek = 100 millis
    tick_timeOnAllMs = 0; // время отведенное на один тик
    tick_timeStartMs = 0; // фиксируем время начала тика
    tick_timeEndMs = 0; // фиксируем время конца тика
    tick_timeEndMinusStartTickMs = 0; // время тика	в это время идет расчет и отрисовка игры
    tick_timeThreadSleepGameMs = 0; // время бездействия потока игры. мы все сделали и оставшееся время бездействуем
    tickOld_timeStartMs = 0; // время начала предыдущего тика нужно для вычисления времени полного круга цикла
    tick_tickOld_timeStart_Minus_tick_timeStartMs = 0; // время прошедшее за полный круг цикла игры
    //=============================================================================
    constructor() {
    }
    //=============================================================================
    //=============================================================================
    iniM() {
    }
    //=============================================================================
    //=============================================================================
    startM() {
    }
    //=============================================================================
    /**
     * обновляется только в одном месте цикла игры
     * в главном цикле окна перед всеми вычислениями и выводами
     * именно здесь вычисляем промежуток времени прошедший за весь цикл
     * включая и время сна
     * это время должно стремиться к tickMustTimeMs = 1000 /(long)ticksPerSecond
     * сейчас ticksPerSecond мы должны задавать 60 в сек
     * т.е tickMustTimeMs = 16,(6)  msec  как принято в файтингах
     * однако реально ticksPerSecond = 30  в сек т.е
     * tickMustTimeMs = 33,(3) msec так как иначе не успеваем все обсчитать
     */
    //============================================================================
    updateTimeBeforeTick() {
        this.tickOld_timeStartMs = this.tick_timeStartMs;
        this.tick_timeStartMs = (new Date).getTime();
        this.tick_tickOld_timeStart_Minus_tick_timeStartMs = this.tick_timeStartMs - this.tickOld_timeStartMs;
        //console.log("this.timeBetweenStartMinOldStartTickMs = " + this.timeBetweenStartMinOldStartTickMs);
    }
    //============================================================================
    /**
     * timeAfterTickMs время прошедшее после обсчета игры
     * тут мы не учитываем время сна
     * высчитываем время сколько мы должны спать для того что бы получить
     * нужное время одного цикла а это tickMustTimeMs
     * если время сна timeSleepGame_RMs оказывается отрицательным или просто меньше 5
     * то делаем его 5
     * отрицательное когда задержка в цикле больше чем отведено на цикл
     */
    //============================================================================
    updateTimeAfterTick() {
        this.tick_timeEndMs = (new Date).getTime();
        this.tick_timeEndMinusStartTickMs = this.tick_timeEndMs - this.tick_timeStartMs;
        this.tick_timeThreadSleepGameMs = this.tick_timeOnAllMs - this.tick_timeEndMinusStartTickMs;
        //System.out.println("Timer: timeBetweenTickMs = " + timeBetweenTickMs );
        if (this.tick_timeThreadSleepGameMs < 10) {
            this.tick_timeThreadSleepGameMs = 10;
            //System.out.println("Timer: tick_timeThreadSleepGameMs(< 1) = " + tick_timeThreadSleepGameMs );
        }
        // console.log("this.tickMustTimeMs = " + this.tickMustTimeMs);
    }
    //============================================================================
    // стартовая инициализация таймера
    //=============================================================================
    iniTicksPerSecond(ticksPerSecond) {
        this.tick_timeStartMs = (new Date).getTime();
        this.ticksPerSecond = ticksPerSecond;
        //тысяча милисекунд это секунда
        this.tick_timeOnAllMs = 1000 / this.ticksPerSecond; //33,(3)   16,(6)  msec
        // console.log("this.tickMustTimeMs = " + this.tickMustTimeMs);
        //alert("!");
        console.log('Timer-> iniTicksPerSecond = ' + ticksPerSecond);
    }
    //============================================================================
    //============================================================================
    getTickTimeOnAllMs() {
        return this.tick_timeOnAllMs;
    }
    //============================================================================
    //============================================================================
    getTickTimeStartMs() {
        return this.tick_timeStartMs;
    }
    //============================================================================
    //============================================================================
    getTickTimeEndMs() {
        return this.tick_timeEndMs;
    }
    //============================================================================
    //============================================================================
    getTickTimeEndMinusStartTickMs() {
        return this.tick_timeEndMinusStartTickMs;
    }
    //============================================================================
    //============================================================================
    getTickTimeThreadSleepGameMs() {
        return this.tick_timeThreadSleepGameMs;
    }
    //============================================================================
    //============================================================================
    getTickOldTimeStartMs() {
        return this.tickOld_timeStartMs;
    }
    //============================================================================    
    //============================================================================
    getTickTickOldTimeStartMinusTickTimeStartMs() {
        return this.tick_tickOld_timeStart_Minus_tick_timeStartMs;
    }
    //============================================================================    
    //============================================================================
    getCurrentTimeMs() {
        let currentTimeMs = (new Date).getTime();
        return currentTimeMs;
    }
} //Timer
let timer_R = new Timer_C();
timer_R.iniM();
export { timer_R, Timer_C };
if (global_R.print_module_start_finish)
    console.log('timer.js -> module finish');
timer_R.isOk = "OK"; //
