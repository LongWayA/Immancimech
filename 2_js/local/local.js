let Copyright_AnBr75 = 2024;
import { global_R } from '../1_index/global.js';
if (global_R.print_module_start_finish)
    console.log('local_c.js -> module start');
class Local_C {
    NAME = "Local_C";
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
let local_R = new Local_C();
local_R.iniM();
export { local_R, Local_C };
if (global_R.print_module_start_finish)
    console.log('local_c.js -> module finish');
local_R.isOk = "OK";
