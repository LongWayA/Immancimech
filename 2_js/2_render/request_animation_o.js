import { global_R } from '../global.js';
import { render_R } from './render.js';
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
        render_R.drawGameStart();
    },
    drowGoGame() {
        render_R.drowGameGo();
    },
    drawGamePaused() {
        render_R.drawGamePaused();
    },
    drawGameEnd() {
        render_R.drawGameEnd();
    },
};
requestAnimationFrame_R.iniM();
export { requestAnimationFrame_R };
if (global_R.print_module_start_finish)
    console.log('request_animation.js -> module finish');
requestAnimationFrame_R.isOk = "OK";
