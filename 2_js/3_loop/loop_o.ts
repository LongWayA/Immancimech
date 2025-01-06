/** 
 * 3_loop
 * @author AnBr75
 * @copyright Copyright (c) 2024, AnBr75 and/or its affiliates. All rights reserved.
 * @version Last_modified -24.02m.2024- 
 */
let Copyright_AnBr75 = 2024;

/**
* НАЗНАЧЕНИЕ
*/

import { global_R } from '../1_index/global.js';

if (global_R.print_module_start_finish) console.log('loop.js -> module start');

import { gameState_R } from '../4_game_state/game_state.js';
import { timer_R } from './timer.js';
import { buttons_R } from '../1_index/buttons.js';

interface Loop_I {

    NAME: string;
    isOk: string;
    timerCount: number;
    timerCountStop: number;
    delayMs: number;
    isLoop: boolean;
    STOP_LOOP: number;
    iniM(): void;
    startM(): void;
    loop(): void;
}


/**
 * this теряет ссылку на контекст при использовании метода в качестве функции обратного вызова(callback),
 * поэтому оставил объект без класса, но с интерфейсом
 */
let loop_R: Loop_I = {
    NAME: "loop_R",
    isOk: "",

    timerCount: -1,
    timerCountStop: 0,
    delayMs: 0,
    isLoop: false,
    STOP_LOOP: 30000,

    //=============================================================================
    iniM(): void {
        //console.log('Loop-> ini');
        //console.log('Loop-> ini -> this=' + this.NAME);
    },
    //=============================================================================

    //=============================================================================
    startM(): void {
    },
    //=============================================================================


    //=============================================================================
    // setTimeout позволяет вызвать функцию один раз через определённый интервал времени
    loop(): void {

        loop_R.isLoop = true;
        loop_R.timerCount = -1;

        //Задержка перед запуском в миллисекундах (1000 мс = 1 с). Значение по умолчанию – 0.
        loop_R.delayMs = timer_R.getTickTimeThreadSleepGameMs();

        loop_R.timerCount = setTimeout(function tick() {

            timer_R.updateTimeBeforeTick(); //
            gameState_R.tick();
            timer_R.updateTimeAfterTick();
            loop_R.delayMs = timer_R.getTickTimeThreadSleepGameMs();

            if (gameState_R.isEndGame()) loop_R.isLoop = false;
            if (loop_R.isLoop) loop_R.timerCount = setTimeout(tick, loop_R.delayMs);

            if ((loop_R.timerCount - loop_R.timerCountStop) > loop_R.STOP_LOOP) {
                gameState_R.setEndGame();
                buttons_R.endButtonAttribute();
            }

        }, loop_R.delayMs);
        console.log("loop_R->loop() timerCount = " + loop_R.timerCount);
    },
    //=============================================================================

} //

loop_R.iniM();

export { loop_R };

if (global_R.print_module_start_finish) console.log('loop.js -> module finish');

loop_R.isOk = "OK"; //

/**
* Еще о ловушке с this при вызове в setTimeout:
* Вы можете подумать, что setTimeout вызовет myCat.logInfo(), которая запишет информацию об объекте myCat. 
* Но метод отделяется от объекта, когда передаётся в качестве параметра: setTimout(myCat.logInfo), и через 
* секунду происходит вызов функции. Когда logInfo вызывается как функция, this становится глобальным объектом или 
* undefined (но не объектом myCat), поэтому информация об объекте выводится некорректно.
* https://tproger.ru/translations/javascript-this-keyword
*/