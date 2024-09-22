// @ts-check
/**
 * @module global
 * @author ABr75
 * @copyright Copyright (c) 2024, ABr75 and/or its affiliates. All rights reserved.
 * @version Last_modified -09.07.2023-24.02m.2024-
/**
* НАЗНАЧЕНИЕ
*/
//let print_module_start_finish = true;
let print_module_start_finish = false;
//print_module_start_finish = true;
if (print_module_start_finish)
    console.log('global.js -> module start');
class Global_C {
    NAME = "Global_C";
    isOk = "";
    test_count = 1;
    print_module_start_finish = print_module_start_finish; //true
    isTestLoading = false;
    //=============================================================================
    constructor() {
    }
    //============================================================================= 
    //=============================================================================
    iniM() {
        //console.log("Global.ini -> инициализация пройдена ");
    }
    //=============================================================================
    //=============================================================================
    startM() {
    }
    //=============================================================================
    //============================================================================
    // сообщаем что модуль был прочитан до конца
    testLoading(nameScript) {
        if (this.isTestLoading) {
            console.log(this.test_count + ' Script ' + nameScript + ' ok');
            this.test_count = this.test_count + 1; //
        }
    }
}
; //Global
let global_R = new Global_C();
global_R.iniM();
export { global_R, Global_C };
if (print_module_start_finish)
    console.log('global.js -> module finish');
global_R.isOk = "OK"; //
