// Copyright (c) 2024, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -24.02m.2024-
// 
/*
 НАЗНАЧЕНИЕ

*/

import { global_R } from '../global/global.js';

if (global_R.print_module_start_finish) console.log('local_c.js -> module start');


/**
 * Description placeholder
 *
 * @class Local_C
 * @typedef {Local_C}
 */
class Local_C {

    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    public NAME = "Local_C";
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    public isOk = "";

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
    tick(): void {
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
} //

/**
 * Description placeholder
 *
 * @type {Local_C}
 */
let local_R = new Local_C();

local_R.iniM();

export {local_R, Local_C };

if (global_R.print_module_start_finish) console.log('local_c.js -> module finish');

local_R.isOk = "OK"; //