import { global_R } from '../global.js';
if (global_R.print_module_start_finish)
    console.log('ai.js -> module start');
class Ai_C {
    NAME = "ai_R";
    isOk = "";
    constructor() {
    }
    iniM() {
    }
    startM() {
    }
    tick() {
    }
    update() {
    }
    drow() {
    }
}
let ai_R = new Ai_C();
ai_R.iniM();
export { ai_R, Ai_C };
if (global_R.print_module_start_finish)
    console.log('ai.js -> module finish');
ai_R.isOk = "OK";
