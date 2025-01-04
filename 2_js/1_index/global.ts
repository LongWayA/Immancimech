/** 
 * 1_loop
 * @author AnBr75
 * @copyright Copyright (c) 2024, AnBr75 and/or its affiliates. All rights reserved.
 * @version Last_modified -09.07.2023-24.02m.2024-
/**
* НАЗНАЧЕНИЕ
*/

//let print_module_start_finish: boolean = true;
let print_module_start_finish: boolean = false;
//print_module_start_finish = true;

if (print_module_start_finish) console.log('global.js -> module start');

class Global_C {
 
    public static NAME: string = "Global_C";
    public isOk: string = "";
    public test_count: number = 1;
    public print_module_start_finish: boolean = print_module_start_finish;//true
    private isTestLoading: boolean = false; 

    //=============================================================================
    constructor() {
    }
    //============================================================================= 

    //=============================================================================
    iniM(): void {
        //console.log("Global.ini -> инициализация пройдена ");
    }
    //=============================================================================
    //=============================================================================
    startM(): void {
    }
    //=============================================================================
    //============================================================================
    // сообщаем что модуль был прочитан до конца
    testLoading(nameScript: string): void {
        if(this.isTestLoading){
           console.log(this.test_count + ' Script ' + nameScript + ' ok');
           this.test_count = this.test_count + 1; //
        }
    }
    //=============================================================================
} //Global

let global_R = new Global_C();

global_R.iniM();

export { global_R, Global_C };

if (print_module_start_finish) console.log('global.js -> module finish');

global_R.isOk = "OK"; //