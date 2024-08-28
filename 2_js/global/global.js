// Copyright (c) 2024, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -09.07.2023-24.02m.2024-
//
/*
 НАЗНАЧЕНИЕ
    
*/
//let print_module_start_finish = true;
/**
 * Description placeholder
 *
 * @type {boolean}
 */
let print_module_start_finish = false;
//print_module_start_finish = true;
if (print_module_start_finish)
    console.log('global.js -> module start');
/**
 * Description placeholder
 *
 * @class Global_C
 * @typedef {Global_C}
 */
class Global_C {
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    NAME = "Global_C";
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
     * @type {number}
     */
    test_count = 1;
    /**
     * Description placeholder
     *
     * @public
     * @type {boolean}
     */
    print_module_start_finish = print_module_start_finish; //true
    /**
     * Description placeholder
     *
     * @private
     * @type {boolean}
     */
    isTestLoading = false;
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
    iniM() {
        //console.log("Global.ini -> инициализация пройдена ");
    }
    //=============================================================================
    //=============================================================================
    /** Description placeholder */
    startM() {
    }
    //=============================================================================
    //============================================================================
    // сообщаем что модуль был прочитан до конца
    /**
     * Description placeholder
     *
     * @param {string} nameScript
     */
    testLoading(nameScript) {
        if (this.isTestLoading) {
            console.log(this.test_count + ' Script ' + nameScript + ' ok');
            this.test_count = this.test_count + 1; //
        }
    }
}
; //Global
/**
 * Description placeholder
 *
 * @type {Global_C}
 */
let global_R = new Global_C();
global_R.iniM();
export { global_R, Global_C };
if (print_module_start_finish)
    console.log('global.js -> module finish');
global_R.isOk = "OK"; //
