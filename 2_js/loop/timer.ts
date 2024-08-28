// Copyright (c) 2024, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -08.08.2021-31.07.2022-06.03.2023-18.03.2023-26.03.2023-3.09.2023
// -24.02m.2024-
/*
 НАЗНАЧЕНИЕ


*/

import { global_R } from '../global/global.js';

if (global_R.print_module_start_finish) console.log('timer.js -> module start');


/**
 * Description placeholder
 *
 * @class Timer_C
 * @typedef {Timer_C}
 */
class Timer_C {
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    public NAME: string = "timer_R";
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    public isOk: string = "";

    // пустой тик выполняется не быстрее 5 мс, т.е. максимальный фпс выдаваемый браузером это 200
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    public TICKS_PER_SECOND_02: number = 0.2;// 1 ticks per 5 sec
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    public TICKS_PER_SECOND_05: number = 0.5;// 1 ticks per 2 sec
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    public TICKS_PER_SECOND_1: number = 1;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    public TICKS_PER_SECOND_2: number = 2;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    public TICKS_PER_SECOND_3: number = 3;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    public TICKS_PER_SECOND_4: number = 4;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    public TICKS_PER_SECOND_5: number = 5;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    public TICKS_PER_SECOND_6: number = 6;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    public TICKS_PER_SECOND_7: number = 7;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    public TICKS_PER_SECOND_8: number = 8;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    public TICKS_PER_SECOND_9: number = 9;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    public TICKS_PER_SECOND_10: number = 10;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    public TICKS_PER_SECOND_15: number = 15;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    public TICKS_PER_SECOND_20: number = 20;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    public TICKS_PER_SECOND_30: number = 30;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    public TICKS_PER_SECOND_40: number = 40;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    public TICKS_PER_SECOND_50: number = 50;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    public TICKS_PER_SECOND_60: number = 60;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    public TICKS_PER_SECOND_62: number = 62;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    public TICKS_PER_SECOND_70: number = 70;

    //timerId: number = 0;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    public ticksPerSecond: number = 0;



    // 1000 задержка в секунду. т.е тысяча милисекунд это секунда
    // 60 кадров это 0,01(6) sek = 16,(6) millis
    // 30 кадров это 0,03(3) sek = 30,(3) millis
    // 25 кадров это 0,04 sek = 40 millis
    // 10 кадров это 0,1 sek = 100 millis
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    public tick_timeOnAllMs: number = 0;// время отведенное на один тик
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    public tick_timeStartMs: number = 0;// фиксируем время начала тика
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    public tick_timeEndMs: number = 0;// фиксируем время конца тика
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    public tick_timeEndMinusStartTickMs: number = 0;// время тика	в это время идет расчет и отрисовка игры
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    public tick_timeThreadSleepGameMs: number = 0;// время бездействия потока игры. мы все сделали и оставшееся время бездействуем

    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    public tickOld_timeStartMs: number = 0;// время начала предыдущего тика нужно для вычисления времени полного круга цикла
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    public tick_tickOld_timeStart_Minus_tick_timeStartMs: number = 0;// время прошедшее за полный круг цикла игры

    //=============================================================================
    /**
     * Creates an instance of Timer_C.
     *
     * @constructor
     */
    constructor() {
    }
    //=============================================================================

    //=============================================================================
    /** Description placeholder */
    iniM(): void {
    }
    //=============================================================================
    //=============================================================================
    /** Description placeholder */
    startM(): void {
    }
    //=============================================================================
    /*
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
    /** Description placeholder */
    updateTimeBeforeTick(): void {
        this.tickOld_timeStartMs = this.tick_timeStartMs;
        this.tick_timeStartMs = (new Date).getTime();
        this.tick_tickOld_timeStart_Minus_tick_timeStartMs = this.tick_timeStartMs - this.tickOld_timeStartMs;
        //console.log("this.timeBetweenStartMinOldStartTickMs = " + this.timeBetweenStartMinOldStartTickMs);
    }
    //============================================================================
    /*
     * timeAfterTickMs время прошедшее после обсчета игры
     * тут мы не учитываем время сна
     * высчитываем время сколько мы должны спать для того что бы получить
     * нужное время одного цикла а это tickMustTimeMs
     * если время сна timeSleepGame_RMs оказывается отрицательным или просто меньше 5
     * то делаем его 5
     * отрицательное когда задержка в цикле больше чем отведено на цикл
     */
    //============================================================================
    /** Description placeholder */
    updateTimeAfterTick(): void {
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
    /**
     * Description placeholder
     *
     * @param {number} ticksPerSecond
     */
    iniTicksPerSecond(ticksPerSecond: number): void {
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
    /**
     * Description placeholder
     *
     * @returns {number}
     */
    getTickTimeOnAllMs(): number {
        return this.tick_timeOnAllMs;
    }
    //============================================================================

    //============================================================================
    /**
     * Description placeholder
     *
     * @returns {number}
     */
    getTickTimeStartMs(): number {
        return this.tick_timeStartMs;
    }
    //============================================================================

    //============================================================================
    /**
     * Description placeholder
     *
     * @returns {number}
     */
    getTickTimeEndMs(): number {
        return this.tick_timeEndMs;
    }
    //============================================================================

    //============================================================================
    /**
     * Description placeholder
     *
     * @returns {number}
     */
    getTickTimeEndMinusStartTickMs(): number {
        return this.tick_timeEndMinusStartTickMs;
    }
    //============================================================================

    //============================================================================
    /**
     * Description placeholder
     *
     * @returns {number}
     */
    getTickTimeThreadSleepGameMs(): number {
        return this.tick_timeThreadSleepGameMs;
    }
    //============================================================================

    //============================================================================
    /**
     * Description placeholder
     *
     * @returns {number}
     */
    getTickOldTimeStartMs(): number {
        return this.tickOld_timeStartMs;
    }
    //============================================================================    

    //============================================================================
    /**
     * Description placeholder
     *
     * @returns {number}
     */
    getTickTickOldTimeStartMinusTickTimeStartMs(): number {
        return this.tick_tickOld_timeStart_Minus_tick_timeStartMs;
    }
    //============================================================================    


    //============================================================================
    /**
     * Description placeholder
     *
     * @returns {number}
     */
    getCurrentTimeMs(): number {
        let currentTimeMs = (new Date).getTime();
        return currentTimeMs;
    }
    //============================================================================    

} //Timer

/**
 * Description placeholder
 *
 * @type {Timer_C}
 */
let timer_R = new Timer_C();

timer_R.iniM();

export { timer_R, Timer_C };

if (global_R.print_module_start_finish) console.log('timer.js -> module finish');

timer_R.isOk = "OK"; //