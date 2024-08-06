// Copyright (c) 2024, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -09.07.2023-24.02m.2024-
//
/*
 НАЗНАЧЕНИЕ
     

*/

//let print_module_start_finish = true;
let print_module_start_finish: boolean = false;
//print_module_start_finish = true;

if (print_module_start_finish) console.log('global.js -> module start');


class Global_C {
    NAME: string = "global_R";
    isOk: string = "";
    test_count: number = 1;
    print_module_start_finish: boolean = print_module_start_finish;//true

    //=============================================================================
    constructor() {

    }
    //============================================================================= 

    //=============================================================================
    iniM(): void {
        //console.log("Global.ini -> инициализация пройдена ");
    };
    //=============================================================================
    //=============================================================================
    startM(): void {
    };
    //=============================================================================
    //============================================================================
    // сообщаем что модуль был прочитан до конца
    testLoading(_nameScript: string): void {
        console.log(this.test_count + ' Script ' + _nameScript + ' ok');
        this.test_count = this.test_count + 1; //
    };
    //=============================================================================
}; //Global

let global_R = new Global_C();

global_R.iniM();
//Global.testLoading('Global.js');

export { global_R, Global_C };

if (print_module_start_finish) console.log('global.js -> module finish');

global_R.isOk = "OK"; //