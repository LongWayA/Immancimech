// @ts-check
/** 
 * @module run
 * @author ABr75
 * @copyright Copyright (c) 2025, ABr75 and/or its affiliates. All rights reserved.
 * @version Last_modified -24.02m.2024-
/**
* НАЗНАЧЕНИЕ
*/

import { global_R } from '../global/global.js';

if (global_R.print_module_start_finish) console.log('run.js -> module start');

import { immortals_R } from '../user_avatars/immortals.js';
import { background_R, Background_C } from '../local/background/background.js';

/**
 * Description placeholder
 *
 * @class Run_C
 */
class Run_C {
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    public NAME: string = "run_R";
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    public isOk: string = "";

    /**
     * Description placeholder
     *
     * @public
     */
    public out_immortals_R = immortals_R;//, Immortals_C


    /**
     * Description placeholder
     *
     * @public
     */
    public out_background_R: Background_C = background_R;

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
    iniM():void {
    }
    //=============================================================================
    //=============================================================================
    /** Description placeholder */
    startM():void {
    }
    //=============================================================================
    //=============================================================================
    /** Description placeholder */
    tick():void {
        this.out_immortals_R.update(run_R.out_background_R);
    }
    //=============================================================================   
    //=============================================================================
    /** Description placeholder */
    update():void {
    }
    //=============================================================================
    //=============================================================================
    /** Description placeholder */
    drow():void {
    }
    //=============================================================================
    //=============================================================================
}

/**
 * Description placeholder
 *
 * @type {Run_C}
 */
let run_R = new Run_C();

run_R.iniM();

export { run_R };

if (global_R.print_module_start_finish) console.log('run.js -> module finish');

run_R.isOk = "OK"; //