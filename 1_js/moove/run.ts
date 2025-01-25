/** 
 * run
 * @author AnBr75
 * @copyright Copyright (c) 2024, AnBr75 and/or its affiliates. All rights reserved.
 * @version created 24.02m.2024
 */

let Copyright_AnBr75 = 2024;
 
/**
* НАЗНАЧЕНИЕ
*/

import { global_R } from '../1_index/global.js';

if (global_R.print_module_start_finish) console.log('run.js -> module start');

import { Immortals_C } from '../user_avatars/immortals.js';
import { Background_C } from '../7_local/background/background.js';

class Run_C {
 
    public NAME: string = "run_R";
    public isOk: string = "";

    public immortals_R: Immortals_C | null = null;

    background_R: Background_C | null = null;

    //=============================================================================
    constructor() {
    }
    //=============================================================================

    //=============================================================================
    iniM():void {
       // console.log(" Run_C-> iniM() ");
    }
    //=============================================================================
    //=============================================================================
    startM( immortals_R: Immortals_C, background_R: Background_C):void {
       // console.log(" Run_C-> startM() ");

        this.immortals_R = immortals_R;
        this.background_R = background_R;
    }
    //=============================================================================
    //=============================================================================
    tick():void {
        (this.immortals_R as Immortals_C).update(this.background_R as Background_C);
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

export { Run_C };
if (global_R.print_module_start_finish) console.log('run.js -> module finish');
