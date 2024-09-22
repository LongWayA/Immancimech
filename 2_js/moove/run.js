// @ts-check
/**
 * @module run
 * @author ABr75
 * @copyright Copyright (c) 2024, ABr75 and/or its affiliates. All rights reserved.
 * @version Last_modified -24.02m.2024-
/**
* НАЗНАЧЕНИЕ
*/
import { global_R } from '../1_loop/global.js';
if (global_R.print_module_start_finish)
    console.log('run.js -> module start');
import { immortals_R } from '../user_avatars/immortals.js';
import { background_R } from '../local/background/background.js';
class Run_C {
    NAME = "run_R";
    isOk = "";
    out_immortals_R = immortals_R; //, Immortals_C
    out_background_R = background_R;
    //=============================================================================
    constructor() {
    }
    //=============================================================================
    //=============================================================================
    iniM() {
    }
    //=============================================================================
    //=============================================================================
    startM() {
    }
    //=============================================================================
    //=============================================================================
    tick() {
        this.out_immortals_R.update(run_R.out_background_R);
    }
    //=============================================================================   
    //=============================================================================
    update() {
    }
    //=============================================================================
    //=============================================================================
    drow() {
    }
}
let run_R = new Run_C();
run_R.iniM();
export { run_R };
if (global_R.print_module_start_finish)
    console.log('run.js -> module finish');
run_R.isOk = "OK"; //
