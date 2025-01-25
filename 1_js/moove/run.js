let Copyright_AnBr75 = 2024;
import { global_R } from '../1_index/global.js';
if (global_R.print_module_start_finish)
    console.log('run.js -> module start');
class Run_C {
    NAME = "run_R";
    isOk = "";
    immortals_R = null;
    background_R = null;
    constructor() {
    }
    iniM() {
    }
    startM(immortals_R, background_R) {
        this.immortals_R = immortals_R;
        this.background_R = background_R;
    }
    tick() {
        this.immortals_R.update(this.background_R);
    }
    update() {
    }
    drow() {
    }
}
export { Run_C };
if (global_R.print_module_start_finish)
    console.log('run.js -> module finish');
