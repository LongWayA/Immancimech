// Copyright (c) 2024, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -12.11.2023-
// -24.02m.2024-
/*
   НАЗНАЧЕНИЕ
       
Вы можете подумать, что setTimeout вызовет myCat.logInfo(), которая запишет информацию об объекте myCat. 
Но метод отделяется от объекта, когда передаётся в качестве параметра: setTimout(myCat.logInfo), и через 
секунду происходит вызов функции. Когда logInfo вызывается как функция, this становится глобальным объектом или 
undefined (но не объектом myCat), поэтому информация об объекте выводится некорректно.
*/

import { global_R } from '../global/global.js';

if (global_R.print_module_start_finish) console.log('loop.js -> module start');

import { gameState_R } from '../game/game_state.js';
import { timer_R } from './timer.js';
import { buttons_R } from './buttons.js';

//
// здесь из за итераций внутри класса ссылаемся на созданный объект
// изменение названия объекта все сломает
// this теряет ссылку на контекст при использовании метода в качестве функции обратного вызова.(callback)
// поэтому оставил объект без класса, но с интерфейсом

interface Loop_I {

    NAME: string;
    isOk:string;

    // Внешние ссылки
    //-

    timerCount: number;
    timerCountStop: number;
    delayMs: number;

    //=============================================================================
    iniM(): void;
    //=============================================================================

    //=============================================================================
    startM(): void;
    //=============================================================================

    //=============================================================================
    //
    loop(): void;
    //=============================================================================

}; //


let loop_R : Loop_I = {
    NAME:"loop_R",
    isOk: "",

    // Внешние ссылки
    //-

    timerCount: -1,

    timerCountStop: 0,

    delayMs: 0,

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

        loop_R.timerCount = -1;

        //Задержка перед запуском в миллисекундах (1000 мс = 1 с). Значение по умолчанию – 0.
        loop_R.delayMs = timer_R.getTickTimeThreadSleepGameMs();


        loop_R.timerCount = setTimeout(function tick() {

            //console.log("loop_R-> Out.timer_R.get_tick_timeThreadSleepGameMs() = " + Out.timer_R.get_tick_timeThreadSleepGameMs());
            if (gameState_R.isStartGame()) {
                timer_R.updateTimeBeforeTick(); //
                gameState_R.tickStartGame();
                timer_R.updateTimeAfterTick();
                loop_R.delayMs = timer_R.getTickTimeThreadSleepGameMs();

                loop_R.timerCount = setTimeout(tick, loop_R.delayMs);
                if ((loop_R.timerCount - loop_R.timerCountStop) > 500) {
                    gameState_R.setEndGame();
                    buttons_R.endButtonAttribute();
                    console.log("loop_R-> if ((loop_R.timerCount - loop_R.timerCountStop) > 500)  ");
                };
                console.log("loop_R-> StartGame timerCount = " + loop_R.timerCount);
            } else if (gameState_R.isGoGame()) {
                timer_R.updateTimeBeforeTick(); //
                gameState_R.tickGoGame();
                timer_R.updateTimeAfterTick();
                loop_R.delayMs = timer_R.getTickTimeThreadSleepGameMs();

                loop_R.timerCount = setTimeout(tick, loop_R.delayMs);
                if ((loop_R.timerCount - loop_R.timerCountStop) > 10000) {
                    gameState_R.setEndGame();
                    buttons_R.endButtonAttribute();
                };
                // console.log("loop_R-> GoGame timerCount = " + loop_R.timerCount);
            } else if (gameState_R.isPauseGame()) {
                timer_R.updateTimeBeforeTick(); //
                gameState_R.tickPauseGame();
                timer_R.updateTimeAfterTick();
                loop_R.delayMs = timer_R.getTickTimeThreadSleepGameMs();
                // @ts-ignore
                loop_R.timerCount = setTimeout(tick, loop_R.delayMs);
                if ((loop_R.timerCount - loop_R.timerCountStop) > 500) {
                    gameState_R.setEndGame();
                    buttons_R.endButtonAttribute();
                };
                console.log("loop_R-> PauseGame timerCount = " + loop_R.timerCount);
            } else if (gameState_R.isEndGame()) {
                timer_R.updateTimeBeforeTick(); //           
                gameState_R.tickEndGame();
                timer_R.updateTimeAfterTick();
                console.log("loop_R->EndGame timerCount = " + loop_R.timerCount);
                loop_R.timerCountStop = loop_R.timerCount;
            };
        }, loop_R.delayMs);
        console.log("loop_R-> timerCount = " + loop_R.timerCount);
    }, //var loop = function() {
    //=============================================================================

}; //

loop_R.iniM();

export { loop_R };

if (global_R.print_module_start_finish) console.log('loop.js -> module finish');

loop_R.isOk = "OK"; //

/*
Еще о ловушке с this при вызове в setTimeout:
Вы можете подумать, что setTimeout вызовет myCat.logInfo(), которая запишет информацию об объекте myCat. 
Но метод отделяется от объекта, когда передаётся в качестве параметра: setTimout(myCat.logInfo), и через 
секунду происходит вызов функции. Когда logInfo вызывается как функция, this становится глобальным объектом или 
undefined (но не объектом myCat), поэтому информация об объекте выводится некорректно.
https://tproger.ru/translations/javascript-this-keyword


let userName = prompt("Введите имя", "Алиса");
let isTeaWanted = confirm("Вы хотите чаю?");
alert( "Посетитель: " + userName ); // Алиса
alert( "Чай: " + isTeaWanted ); // true
*/