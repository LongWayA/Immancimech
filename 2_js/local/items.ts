

// Copyright (c) 2024, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -24.02m.2024-
// 
/*
 НАЗНАЧЕНИЕ

*/

import { global_R } from '../global/global.js';

if (global_R.print_module_start_finish) console.log('items.js -> module start');


class Items_C {
    public NAME: string = "imps_R";
    public isOk: string = "";

    //=============================================================================
    iniM(): void {
    };
    //=============================================================================
    //=============================================================================
    startM(): void {
    };
    //=============================================================================
    //=============================================================================
    update(): void {
    };
    //=============================================================================
    //=============================================================================
    drow(): void {
    }; //drow () : void{
    //=============================================================================
    //=============================================================================
}; //Imps

let items_R = new Items_C();

items_R.iniM();

export { items_R, Items_C };

if (global_R.print_module_start_finish) console.log('items.js -> module finish');

items_R.isOk = "OK"; //
