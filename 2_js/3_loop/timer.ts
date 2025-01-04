// @ts-check
"use strict";
/** 
 * 1_loop
 * @author AnBr75
 * @copyright Copyright (c) 2024, AnBr75 and/or its affiliates. All rights reserved.
 * @version Last_modified -08.08.2021-31.07.2022-06.03.2023-18.03.2023-26.03.2023-3.09.2023
 * @version Last_modified -24.02m.2024-
 */

/**
* НАЗНАЧЕНИЕ
*/

import { global_R } from '../1_index/global.js';

if (global_R.print_module_start_finish) console.log('timer.js -> module start');

class Timer_C {
    
    public static NAME: string = "timer_R";
    public isOk: string = "";

    // пустой тик выполняется не быстрее 5 мс, т.е. максимальный фпс выдаваемый браузером это 200
    public static TICKS_PER_SECOND_02: number = 0.2;// 1 ticks per 5 sec
    public static TICKS_PER_SECOND_05: number = 0.5;// 1 ticks per 2 sec
    public static TICKS_PER_SECOND_1: number = 1;
    public static TICKS_PER_SECOND_2: number = 2;
    public static TICKS_PER_SECOND_3: number = 3;
    public static TICKS_PER_SECOND_4: number = 4;
    public static TICKS_PER_SECOND_5: number = 5;
    public static TICKS_PER_SECOND_6: number = 6;
    public static TICKS_PER_SECOND_7: number = 7;
    public static TICKS_PER_SECOND_8: number = 8;
    public static TICKS_PER_SECOND_9: number = 9;
    public static TICKS_PER_SECOND_10: number = 10;
    public static TICKS_PER_SECOND_15: number = 15;
    public static TICKS_PER_SECOND_20: number = 20;
    public static TICKS_PER_SECOND_30: number = 30;
    public static TICKS_PER_SECOND_40: number = 40;
    public static TICKS_PER_SECOND_50: number = 50;
    public static TICKS_PER_SECOND_60: number = 60;
    public static TICKS_PER_SECOND_62: number = 62;
    public static TICKS_PER_SECOND_70: number = 70;

    //timerId: number = 0;
    public ticksPerSecond: number = 0;

    // 1000 задержка в секунду. т.е тысяча милисекунд это секунда
    // 60 кадров это 0,01(6) sek = 16,(6) millis
    // 30 кадров это 0,03(3) sek = 30,(3) millis
    // 25 кадров это 0,04 sek = 40 millis
    // 10 кадров это 0,1 sek = 100 millis
    public tick_timeNeedOnAllMs: number = 0;// время отведенное на один тик
    public tick_timeStartMs: number = 0;// фиксируем время начала тика
    public tick_OldTimeStartMs: number = 0;// время начала предыдущего тика, нужно для вычисления времени полного круга цикла   
    public tick_timeEndMs: number = 0;// фиксируем время конца тика
    public tick_timeEndMs_minus_timeStartMs: number = 0;// время тика, в это время идет обсчет и отрисовка игры
    public tick_timeThreadSleepGameMs: number = 0;// время бездействия потока игры, мы все сделали и оставшееся время бездействуем
    public tick_OldTimeStartMs_minus_timeStartMs: number = 0;// время прошедшее за полный круг цикла игры

    private currentTimeMs: number = 0;

    //=============================================================================
    constructor() {
    }
    //=============================================================================

    //=============================================================================
    iniM(): void {
        this.iniTicksPerSecond(Timer_C.TICKS_PER_SECOND_05);
    }
    //=============================================================================
    //=============================================================================
    startM(): void {
    }

    //=============================================================================
    /**
     * обновляется только в одном месте цикла игры
     * в главном цикле окна перед всеми вычислениями и выводами
     * именно здесь вычисляем промежуток времени прошедший за весь цикл
     * включая и время сна
     * это время должно стремиться к tickMustTimeMs = 1000 /(long)ticksPerSecond
     * например если ticksPerSecond зададим 60 в сек
     * то получим tickMustTimeMs = 16,(6)  msec
     * если ticksPerSecond = 30  в сек
     * получим tickMustTimeMs = 33,(3) msec
     */
    updateTimeBeforeTick(): void {
        this.tick_OldTimeStartMs = this.tick_timeStartMs;
        this.tick_timeStartMs = (new Date).getTime();
        // получаем время которое ушло на полный цикл игры
        this.tick_OldTimeStartMs_minus_timeStartMs = this.tick_timeStartMs - this.tick_OldTimeStartMs;
        //console.log("this.timeBetweenStartMinOldStartTickMs = " + this.timeBetweenStartMinOldStartTickMs);
    }
    //============================================================================

    //============================================================================   
    /**
     * timeAfterTickMs время потраченное на один тик игры
     * тут мы не учитываем время сна
     * высчитываем время сколько мы должны спать для того что бы получить
     * нужное время одного цикла а это tickMustTimeMs
     * если время сна timeSleepGame_RMs оказывается отрицательным или просто меньше 10
     * то делаем его 10
     * отрицательное когда задержка в цикле больше чем отведено на цикл
     */
    updateTimeAfterTick(): void {
        this.tick_timeEndMs = (new Date).getTime();
        //время ушедшее на реализацию одного тика игры
        this.tick_timeEndMs_minus_timeStartMs = this.tick_timeEndMs - this.tick_timeStartMs;
        this.tick_timeThreadSleepGameMs = this.tick_timeNeedOnAllMs - this.tick_timeEndMs_minus_timeStartMs;
        //System.out.println("Timer: timeBetweenTickMs = " + timeBetweenTickMs );
        this.tick_timeThreadSleepGameMs = (this.tick_timeThreadSleepGameMs < 10) ? 10 : this.tick_timeThreadSleepGameMs;
        // console.log("this.tickMustTimeMs = " + this.tickMustTimeMs);
    }
    //============================================================================

    //=============================================================================
    // стартовая инициализация таймера
    iniTicksPerSecond(ticksPerSecond: number): void {
        this.ticksPerSecond = ticksPerSecond;
        //тысяча милисекунд это секунда
        this.tick_timeNeedOnAllMs = 1000 / this.ticksPerSecond; //33,(3)   16,(6)  msec
        // console.log("this.tickMustTimeMs = " + this.tickMustTimeMs);
        //alert("!");
        console.log('Timer-> iniTicksPerSecond = ' + ticksPerSecond);
    }
    //============================================================================

    //============================================================================
    getTickTimeOnAllMs(): number {
        return this.tick_timeNeedOnAllMs;
    }
    //============================================================================

    //============================================================================
    getTickTimeStartMs(): number {
        return this.tick_timeStartMs;
    }
    //============================================================================

    //============================================================================
    getTickTimeEndMs(): number {
        return this.tick_timeEndMs;
    }
    //============================================================================

    //============================================================================
    getTickTimeEndMsMinusTimeStartMs(): number {
        return this.tick_timeEndMs_minus_timeStartMs;
    }
    //============================================================================

    //============================================================================
    getTickTimeThreadSleepGameMs(): number {
        return this.tick_timeThreadSleepGameMs;
    }
    //============================================================================

    //============================================================================
    getTickOldTimeStartMs(): number {
        return this.tick_OldTimeStartMs;
    }
    //============================================================================    

    //============================================================================
    getTickOldTimeStartMinusTimeStartMs(): number {
        return this.tick_OldTimeStartMs_minus_timeStartMs;
    }
    //============================================================================    

    //============================================================================
    getCurrentTimeMs(): number {
        this.currentTimeMs = (new Date).getTime();
        return this.currentTimeMs;
    }
    //============================================================================    

} //Timer

let timer_R = new Timer_C();

timer_R.iniM();

console.log('timer.js -> currentTimeMs = ' + timer_R.getCurrentTimeMs());

export { timer_R, Timer_C };

if (global_R.print_module_start_finish) console.log('timer.js -> module finish');

timer_R.isOk = "OK"; //