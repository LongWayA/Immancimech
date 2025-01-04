import { global_R } from '../1_index/global.js';
import { drowGame_R } from './drow_game.js';
if (global_R.print_module_start_finish)
    console.log('request_animation.js -> module start');
let requestAnimationFrame_R = {
    NAME: "requestAnimationFrame_R",
    isOk: "",
    iniM() {
    },
    startM() {
    },
    drawGameStart() {
        drowGame_R.drawGameStart();
    },
    drowGoGame() {
        drowGame_R.drowGameGo();
    },
    drawGamePaused() {
        drowGame_R.drawGamePaused();
    },
    drawGameEnd() {
        drowGame_R.drawGameEnd();
    },
};
requestAnimationFrame_R.iniM();
export { requestAnimationFrame_R };
if (global_R.print_module_start_finish)
    console.log('request_animation.js -> module finish');
requestAnimationFrame_R.isOk = "OK";
