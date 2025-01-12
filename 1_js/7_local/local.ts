/** 
 * local
 * @author AnBr75
 * @copyright Copyright (c) 2024, AnBr75 and/or its affiliates. All rights reserved.
 * @version Last_modified -24.02m.2024-
 */
let Copyright_AnBr75 = 2024;
 
/**
* НАЗНАЧЕНИЕ
*/

import { global_R } from '../1_index/global.js';
if (global_R.print_module_start_finish) console.log('local_c.js -> module start');

import { background_R } from './background/background.js';

class Local_C {

    public NAME = "Local_C";
    public isOk = "";

    //=============================================================================
    constructor() {
    }
    //=============================================================================

    //=============================================================================
    iniM(): void {
    }
    //=============================================================================
    //=============================================================================
    startM(): void {
        background_R.startM();
        
    }
    //=============================================================================
    //=============================================================================
    tick(): void {
    }
    //=============================================================================   

    //=============================================================================
    drow(): void {
    }
    //=============================================================================
    //=============================================================================
} //

let local_R = new Local_C();

local_R.iniM();

export {local_R, Local_C };

if (global_R.print_module_start_finish) console.log('local_c.js -> module finish');

local_R.isOk = "OK"; //