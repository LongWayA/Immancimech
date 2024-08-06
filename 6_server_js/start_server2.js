// Copyright (c) 2023, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -02.12.2023-23.06.2024-
/*
   НАЗНАЧЕНИЕ
       

*/
//console.log('start.js -> module start');
const os = require("os");
//import  os from 'node:os';
const http = require("http");
//import  http from 'node:http';
const fs = require("fs");
//import  fs from 'node:fs';
// Внешние модули
//-
// имя текущего пользователя
const userName = os.userInfo().username;
console.log('-');
console.log('-');
console.log('START server---------------------------------');
console.log('userName: ' + userName);
const nodePath = process.argv[0];
const appPath = process.argv[1];
//console.log("nodePath:" + nodePath);
//console.log("appPath:"  + appPath);
let con = 0;
let root = 'G:/1_2_Andrey_programming_All/localhost/';
const str = 'Mozilla';
//console.log(str.substring(1, 3));
// Expected output: "oz"
//console.log(str.substring(2));
// Expected output: "zilla"
//=============================================================================
let request_url = async function (_root, _request, _response) {
    let sG1, sG2;
    try {
        let type;
        let cod;
        let request_url;
        request_url = _request.url;
        if (_request.url === '/')
            request_url = '/Immancimech.html';
        //////////////////////////////////
        const [s1, s2] = request_url.split(".");
        sG1 = s1;
        sG2 = s2;
        if (s2 == 'html') {
            type = 'text/html';
            cod = 'utf8';
            //console.log('>>>>>>>>>>>>>>>>>>>html');
        }
        else if (s2 == 'css') {
            type = 'text/css';
            cod = 'utf8';
            //console.log('>>>>>>>>>>>>>>>>>>>css');	
        }
        else if (s2 == 'ico') {
            type = 'image/png';
            cod = '';
            //console.log('>>>>>>>>>>>>>>>>>>>ico');		
        }
        else if (s2 == 'js') {
            type = 'text/javascript';
            cod = 'utf8';
            //console.log('>>>>>>>>>>>>>>>>>>>js');	
        }
        else if (s2 == 'png') {
            type = 'image/png';
            cod = '';
            //console.log('>>>>>>>>>>>>>>>>>>>png');	
        }
        /////////////////////////////////
        let text = await fs.promises.readFile(_root + request_url, cod);
        _response.writeHead(200, { 'Content-Type': type });
        _response.write(text);
        _response.end();
        console.log('s1 = ' + s1);
        console.log('s2 = ' + s2);
        console.log('OK-> ' + request_url);
    }
    catch (err) {
        console.log('sG1 = ' + sG1);
        console.log('sG2 = ' + sG2);
        console.log("err = " + err); // TypeError: failed to fetch
        console.log("_request.url = " + _request.url); // TypeError: failed to fetch
    } //try {
}; // var request_url
//=============================================================================
//=============================================================================
let request_url_body = async function (_request, _response) {
    let body = ""; // буфер для получаемых данных
    // получаем данные из запроса в буфер
    for await (const chunk of _request) {
        body += chunk;
        console.log('chunk : ' + chunk);
    }
    ;
    // для параметра name
    let userName = "";
    // для параметра age
    let userAge = "";
    // разбиваем запрос на параметры по символу &
    const params = body.split("&");
    // проходим по всем параметрам и определяем их значения
    for (const param of params) {
        // разбиваем каждый параметр на имя и значение
        const [paramName, paramValue] = param.split("=");
        if (paramName === "username")
            userName = paramValue;
        if (paramName === "userage")
            userAge = paramValue;
    }
    ;
    _response.end(`Your name: ${userName}  Your Age: ${userAge}`);
}; // var request_url
//=============================================================================
//=============================================================================
http.createServer(async (_request, _response) => {
    con = con + 1;
    console.log("con:" + con);
    console.log("request.url:" + _request.url);
    //console.log("request:" + request);
    //	console.log("request.method:" + request.method);
    //	console.log("User-Agent:" + request.headers["user-agent"]);
    //console.log("Content-Type:" + request.headers["Content-Type"]);
    //	const contentType = request.getHeader('Content-Type');
    //	console.log("contentType:" + contentType);
    if (_request.url == "/user") {
        console.log(">>>>>>>>>request.url == /user");
        request_url_body(_request, _response);
    }
    else {
        request_url(root, _request, _response);
    }
    ;
}).listen(80, "127.0.0.1", function () {
    console.log("Server listen to port 3000");
});
//=============================================================================
