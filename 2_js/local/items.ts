// @ts-check
/** 
 * @module items
 * @author ABr75
 * @copyright Copyright (c) 2025, ABr75 and/or its affiliates. All rights reserved.
 * @version Last_modified -24.02m.2024-
/**
* НАЗНАЧЕНИЕ
*/

import { global_R } from '../global/global.js';

if (global_R.print_module_start_finish) console.log('items.js -> module start');


/**
 * Description placeholder
 *
 * @class Items_C
 */
class Items_C {
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    public NAME: string = "imps_R";
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    public isOk: string = "";

    //=============================================================================
    /** Description placeholder */
    iniM(): void {
    }
    //=============================================================================
    //=============================================================================
    /** Description placeholder */
    startM(): void {
    }
    //=============================================================================
    //=============================================================================
    /** Description placeholder */
    update(): void {
    }
    //=============================================================================
    //=============================================================================
    /** Description placeholder */
    drow(): void {
    }
    //=============================================================================
    //=============================================================================
}

/**
 * Description placeholder
 *
 * @type {Items_C}
 */
let items_R = new Items_C();

items_R.iniM();

export { items_R, Items_C };

if (global_R.print_module_start_finish) console.log('items.js -> module finish');

items_R.isOk = "OK"; //
