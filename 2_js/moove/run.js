// Copyright (c) 2024, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -24.02m.2024-
// 
/*
 НАЗНАЧЕНИЕ

*/
import { global_R } from '../global/global.js';
if (global_R.print_module_start_finish)
    console.log('run.js -> module start');
import { immortals_R } from '../user_avatars/immortals.js';
import { background_R } from '../local/background/background.js';
/**
 * Description placeholder
 *
 * @class Run_C
 * @typedef {Run_C}
 */
class Run_C {
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    NAME = "run_R";
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    isOk = "";
    /**
     * Description placeholder
     *
     * @public
     * @type {*}
     */
    out_immortals_R = immortals_R; //, Immortals_C
    /**
     * Description placeholder
     *
     * @public
     * @type {Background_C}
     */
    out_background_R = background_R;
    //=============================================================================
    /**
     * Creates an instance of Run_C.
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
        this.out_immortals_R.update(run_R.out_background_R);
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
}
/**
 * Description placeholder
 *
 * @type {Run_C}
 */
let run_R = new Run_C();
run_R.iniM();
export { run_R };
if (global_R.print_module_start_finish)
    console.log('run.js -> module finish');
run_R.isOk = "OK"; //
