/** 
 * test
 * @author AnBr75
 * @copyright Copyright (c) 2024, AnBr75 and/or its affiliates. All rights reserved.
 * @version created 12.11.2023
 */

let Copyright_AnBr75 = 2023;
 
/**
* НАЗНАЧЕНИЕ
*/

import { global_R } from '../1_index/global.js';

if (global_R.print_module_start_finish) console.log('test.js -> module start');


class Test_C {

    public static NAME: string = "Test_C";

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
    }
    //=============================================================================

    //=============================================================================
    // 
    test(): void {

    }
    //=============================================================================

}

export { Test_C };

if (global_R.print_module_start_finish) console.log('test.js -> module finish');