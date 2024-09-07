// @ts-check
/** 
 * @module global
 * @author ABr75
 * @copyright Copyright (c) 2025, ABr75 and/or its affiliates. All rights reserved.
 * @version Last_modified -09.07.2023-24.02m.2024-
/**
* НАЗНАЧЕНИЕ
*/

//let print_module_start_finish = true;
/**
 * Description placeholder
 *
 * @type {boolean}
 */
let print_module_start_finish: boolean = false;
//print_module_start_finish = true;

if (print_module_start_finish) console.log('global.js -> module start');


/**
 * Description placeholder
 *
 * @class Global_C
 */
class Global_C {
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    public NAME: string = "Global_C";
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
     * @type {number}
     */
    public test_count: number = 1;
    /**
     * Description placeholder
     *
     * @public
     * @type {boolean}
     */
    public print_module_start_finish: boolean = print_module_start_finish;//true
    /**
     * Description placeholder
     *
     * @private
     * @type {boolean}
     */
    private isTestLoading: boolean = false; 

    //=============================================================================
    /**
     * Creates an instance of Global_C.
     *
     * @constructor
     */
    constructor() {
    }
    //============================================================================= 

    //=============================================================================
    /** Description placeholder */
    iniM(): void {
        //console.log("Global.ini -> инициализация пройдена ");
    }
    //=============================================================================
    //=============================================================================
    /** Description placeholder */
    startM(): void {
    }
    //=============================================================================
    //============================================================================
    // сообщаем что модуль был прочитан до конца
    /**
     * Description placeholder
     *
     * @param {string} nameScript
     */
    testLoading(nameScript: string): void {
        if(this.isTestLoading){
           console.log(this.test_count + ' Script ' + nameScript + ' ok');
           this.test_count = this.test_count + 1; //
        }
    }
    //=============================================================================
}; //Global

/**
 * Description placeholder
 *
 * @type {Global_C}
 */
let global_R = new Global_C();

global_R.iniM();

export { global_R, Global_C };

if (print_module_start_finish) console.log('global.js -> module finish');

global_R.isOk = "OK"; //