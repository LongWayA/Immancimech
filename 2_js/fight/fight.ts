// @ts-check
/** 
 * @module fight
 * @author ABr75
 * @copyright Copyright (c) 2025, ABr75 and/or its affiliates. All rights reserved.
 * @version Last_modified -24.02m.2024
/**
* НАЗНАЧЕНИЕ
*/
import { global_R } from '../global/global.js';

if (global_R.print_module_start_finish) console.log('fight.js -> module start');


/**
 * Description placeholder
 *
 * @class fight_C
 */
class fight_C {
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    public NAME: string = "fight_R";
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    public isOk: string = "";

    //=============================================================================
    /**
     * Creates an instance of fight_C.
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
 * @type {fight_C}
 */
let fight_R = new fight_C();

fight_R.iniM();

export { fight_R, fight_C };

if (global_R.print_module_start_finish) console.log('fight.js -> module finish');

fight_R.isOk = "OK"; //