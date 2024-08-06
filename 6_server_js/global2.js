
// Copyright (c) 2023, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -09.07.2023-
//
/*
 НАЗНАЧЕНИЕ
     

*/
//console.log('Global -> module start');

var Global = {
    isOk: "",
    NAME: "Global",
    test_count: 1,
    //=============================================================================
    ini: function () {
        //console.log("Global.ini -> инициализация пройдена ");
    },
    //=============================================================================
    //=============================================================================
    start: function () {
        console.log("Global.start -> start ");
    },
    //=============================================================================
    //============================================================================
    // сообщаем что модуль был прочитан до конца
    testLoading: function (_nameScript) {
        console.log(Global.test_count + ' Module ' + _nameScript + ' ok');
        Global.test_count = Global.test_count + 1; //
    },
    //=============================================================================
}; //Global

module.exports.Global = Global;
module.exports.start = Global.start;
module.exports.testLoading = Global.testLoading;

Global.ini();
Global.testLoading('Global.js');
Global.isOk = "OK"; //
//export { Global }; //
//module.exports.Global = Global;