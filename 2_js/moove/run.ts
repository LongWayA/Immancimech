/** 
 * run
 * @author AnBr75
 * @copyright Copyright (c) 2024, AnBr75 and/or its affiliates. All rights reserved.
 * @version Last_modified -24.02m.2024-
/**
* НАЗНАЧЕНИЕ
*/

import { global_R } from '../1_index/global.js';

if (global_R.print_module_start_finish) console.log('run.js -> module start');

import { immortals_R } from '../user_avatars/immortals.js';
import { background_R, Background_C } from '../local/background/background.js';

class Run_C {
 
    public NAME: string = "run_R";
    public isOk: string = "";

    public out_immortals_R = immortals_R;//, Immortals_C

    public out_background_R: Background_C = background_R;

    //=============================================================================
    constructor() {
    }
    //=============================================================================

    //=============================================================================
    iniM():void {
    }
    //=============================================================================
    //=============================================================================
    startM():void {
    }
    //=============================================================================
    //=============================================================================
    tick():void {
        this.out_immortals_R.update(run_R.out_background_R);
    }
    //=============================================================================   
    //=============================================================================
    update():void {
    }
    //=============================================================================
    //=============================================================================
    drow():void {
    }
    //=============================================================================
    //=============================================================================
}

let run_R = new Run_C();

run_R.iniM();

export { run_R };

if (global_R.print_module_start_finish) console.log('run.js -> module finish');

run_R.isOk = "OK"; //