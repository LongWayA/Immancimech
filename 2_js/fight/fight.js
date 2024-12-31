import { global_R } from '../global.js';
if (global_R.print_module_start_finish)
    console.log('fight.js -> module start');
class fight_C {
    NAME = "fight_R";
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
let fight_R = new fight_C();
fight_R.iniM();
export { fight_R, fight_C };
if (global_R.print_module_start_finish)
    console.log('fight.js -> module finish');
fight_R.isOk = "OK";
