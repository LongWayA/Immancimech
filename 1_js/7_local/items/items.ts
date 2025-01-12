/** 
 * items
 * @author AnBr75
 * @copyright Copyright (c) 2024, AnBr75 and/or its affiliates. All rights reserved.
 * @version Last_modified -24.02m.2024-
 */
let Copyright_AnBr75 = 2024;
 
/**
* НАЗНАЧЕНИЕ
*/

import { global_R } from '../../1_index/global.js';

if (global_R.print_module_start_finish) console.log('items.js -> module start');

class Items_C {
 
    public NAME: string = "imps_R";
    public isOk: string = "";

    //=============================================================================
    iniM(): void {
    }
    //=============================================================================
    //=============================================================================
    startM(): void {
    }
    //=============================================================================
    //=============================================================================
    update(): void {
    }
    //=============================================================================
    //=============================================================================
    drow(): void {
    }
    //=============================================================================
    //=============================================================================
}

let items_R = new Items_C();

items_R.iniM();

export { items_R, Items_C };

if (global_R.print_module_start_finish) console.log('items.js -> module finish');

items_R.isOk = "OK"; //
