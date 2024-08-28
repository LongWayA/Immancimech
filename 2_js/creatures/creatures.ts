// Copyright (c) 2024, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -24.02m.2024-
// 
/*
 НАЗНАЧЕНИЕ

*/

import { global_R } from '../global/global.js';

if (global_R.print_module_start_finish) console.log('creatures.js -> module start');


/**
 * Description placeholder
 *
 * @class Imps_C
 * @typedef {Imps_C}
 */
class Imps_C {
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
    /**
     * Creates an instance of Imps_C.
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
    update(): void {
    }
    //=============================================================================
    //=============================================================================
    /** Description placeholder */
    drow(): void {
    }
    //=============================================================================
    //=============================================================================
}; //

/**
 * Description placeholder
 *
 * @type {Imps_C}
 */
let imps_R = new Imps_C();

imps_R.iniM();

export { imps_R, Imps_C };

if (global_R.print_module_start_finish) console.log('creatures.js -> module finish');

imps_R.isOk = "OK"; //