// @ts-check
/**
 * @module local
 * @author ABr75
 * @copyright Copyright (c) 2025, ABr75 and/or its affiliates. All rights reserved.
 * @version Last_modified -24.02m.2024-
/**
* НАЗНАЧЕНИЕ
*/
import { global_R } from '../global/global.js';
if (global_R.print_module_start_finish)
    console.log('local_c.js -> module start');
/**
 * Description placeholder
 *
 * @class Local_C
 */
class Local_C {
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    NAME = "Local_C";
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    isOk = "";
    //=============================================================================
    /**
     * Creates an instance of Local_C.
     *
     * @constructor
     */
    constructor() {
    }
    //=============================================================================
    //=============================================================================
    /** Description placeholder */
    iniM() {
    }
    //=============================================================================
    //=============================================================================
    /** Description placeholder */
    startM() {
    }
    //=============================================================================
    //=============================================================================
    /** Description placeholder */
    tick() {
    }
    //=============================================================================   
    //=============================================================================
    /** Description placeholder */
    update() {
    }
    //=============================================================================
    //=============================================================================
    /** Description placeholder */
    drow() {
    }
} //
/**
 * Description placeholder
 *
 * @type {Local_C}
 */
let local_R = new Local_C();
local_R.iniM();
export { local_R, Local_C };
if (global_R.print_module_start_finish)
    console.log('local_c.js -> module finish');
local_R.isOk = "OK"; //
