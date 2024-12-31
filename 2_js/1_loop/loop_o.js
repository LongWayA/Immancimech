import { global_R } from '../global.js';
if (global_R.print_module_start_finish)
    console.log('loop.js -> module start');
import { gameState_R } from '../4_game_state/game_state.js';
import { timer_R } from './timer.js';
import { buttons_R } from '../3_user_control/buttons.js';
let loop_R = {
    NAME: "loop_R",
    isOk: "",
    timerCount: -1,
    timerCountStop: 0,
    delayMs: 0,
    isLoop: false,
    iniM() {
    },
    startM() {
    },
    loop() {
        loop_R.isLoop = true;
        loop_R.timerCount = -1;
        loop_R.delayMs = timer_R.getTickTimeThreadSleepGameMs();
        loop_R.timerCount = setTimeout(function tick() {
            timer_R.updateTimeBeforeTick();
            gameState_R.tickGame();
            timer_R.updateTimeAfterTick();
            loop_R.delayMs = timer_R.getTickTimeThreadSleepGameMs();
            if (gameState_R.isEndGame())
                loop_R.isLoop = false;
            if (loop_R.isLoop)
                loop_R.timerCount = setTimeout(tick, loop_R.delayMs);
            if ((loop_R.timerCount - loop_R.timerCountStop) > 10000) {
                gameState_R.setEndGame();
                buttons_R.endButtonAttribute();
            }
        }, loop_R.delayMs);
        console.log("loop_R->loop() timerCount = " + loop_R.timerCount);
    },
};
loop_R.iniM();
export { loop_R };
if (global_R.print_module_start_finish)
    console.log('loop.js -> module finish');
loop_R.isOk = "OK";
