//@ts-check
/** 
 * start_server
 * @author AnBr75
 * @copyright Copyright (c) 2024, AnBr75 and/or its affiliates. All rights reserved.
 * @version Last_modified -02.12.2023-23.06.2024-01.09.2024-
 */

/**
 * НАЗНАЧЕНИЕ
 * Локальный сервер для игры Immancimech.html
 * запускаемый командой
 * node 3_Immancimech\6_server_js\start_server3.js
 * игра должна находиться по адресу G:/1_2_Andrey_programming_All/localhost/
 * либо надо менять переменную ROOT
 * Когда сервер запущен игру запускаем 
 * http://127.0.0.1/Immancimech.html
 */

   
import os from "node:os";

import http from 'node:http';

import fs from 'node:fs';

// 
/**
 * имя текущего пользователя
 */
const userName = os.userInfo().username;
console.log('   ');
console.log('START server--------------');
console.log('userName: ' + userName);


const nodePath = process.argv[0];

const appPath = process.argv[1];
//console.log("nodePath:" + nodePath);
//console.log("appPath:"  + appPath);

/** @type {number} */
let con = 0;
const ROOT = 'C:/1_2_Andrey_programming_ssd/localhost/Immancimech/';
const STR = 'Mozilla';
//console.log(STR.substring(1, 3));
// Expected output: "oz"
//console.log(STR.substring(2));
// Expected output: "zilla"

//=============================================================================
/**
 * Функция получает запрос как параметр, считывает с диска нужный файл 
 * и самостоятельно отправляет ответ клиенту.
 *
 * @async
 * @param {string} ROOT = 'G:/1_2_Andrey_programming_All/localhost/';
 * @param {any} request - запрос от клиента
 * @param {any} response - ответ клиенту
 */
let requestUrl = async function (ROOT, request, response) {

    /** @type {string} */
    let split_1 = "";
    /** @type {string} */
    let split_2 = "";

    /** @type {string} */
    let split_err_1 = "";
    /** @type {string} */
    let split_err_2 = "";

    /** @type {string} */
    let request_url = request.url;

    try {
        /** @type {string} */
        let type = "";
        /** @type {BufferEncoding} */
        let encoding = "binary";

        /** @type {boolean} */
        let encodingUse_f = false;

        if (request_url === '/') {
            request_url = '/index.html';
        }
        /**
          * используем str.split(separator, limit)-возвращает массив строк. 
          * разбиваем строку на две части: до точки(split_1) и после(split_2)
          * часть до точки это путь к файлу плюс название
          * нам нужна только часть после точки чтобы узнать расширение файла
         */
        // const [split_1, split_2] = request_url.split(".");
        const split = request_url.split(".");
        split_1 = split[0];
        split_2 = split[1];
        //console.log('split_1 = ' + split_1);
        //console.log('split_2 = ' + split_2);

        split_err_1 = split_1;
        split_err_2 = split_2;
        if (split_2 == 'html') {
            type = 'text/html';
            encoding = 'utf8';
            encodingUse_f = true;
            //console.log('>>>>>>>>>>>>>>>>>>>html');
        } else if (split_2 == 'css') {
            type = 'text/css';
            encoding = 'utf8';
            encodingUse_f = true;
            //console.log('>>>>>>>>>>>>>>>>>>>css');	
        } else if (split_2 == 'ico') {
            type = 'image/png';
            encodingUse_f = false;
            //console.log('>>>>>>>>>>>>>>>>>>>ico');		
        } else if (split_2 == 'js') {
            type = 'text/javascript';
            encoding = 'utf8';
            encodingUse_f = true;
            //console.log('>>>>>>>>>>>>>>>>>>>js');	
        } else if (split_2 == 'png') {
            type = 'image/png';
            encodingUse_f = false;
            //console.log('>>>>>>>>>>>>>>>>>>>png');	
        }
        /**
         * читаем файл с диска и отправляем в ответе.
         * type - тип файла. это или картинка или текст или чтото еще.
         * cod - кодировка текста. у нас это utf8, если не текст то пусто.
        */
        let textFromFile;
        if(encodingUse_f){
            textFromFile = await fs.promises.readFile(ROOT + request_url, encoding);
        }else{
            textFromFile = await fs.promises.readFile(ROOT + request_url);
        }
        response.writeHead(200, { 'Content-Type': type });
        response.write(textFromFile);
        response.end();
        // console.log('split_1 = ' + split_1);
        // console.log('split_2 = ' + split_2);
        // console.log('OK-> ' + request_url);
    }
    catch (err) {
        console.log('split_err_1 = ' + split_err_1);
        console.log('split_err_2 = ' + split_err_2);
        console.log("err = " + err); // TypeError: failed to fetch
        console.log("request.url = " + request_url); // TypeError: failed to fetch
    } //try {
}
//=============================================================================

//=============================================================================
/**
 * функция для обработки послания формы методом POST
 * вызов в форме вида form action="user" 
 * в форме две переменные это username и userage
 * обрабатываем запрос вида username=and&userage=23
 * в данный момент это все просто проба технологии.
 * 
 * @async
 * @param {any} request
 * @param {any} response
 */
let requestUrlBody = async function (request, response) {
    /** @type {string} */
    let body = ""; // буфер для получаемых данных
    // получаем данные из запроса в буфер
    for await (const chunk of request) {
        body += chunk;
        //console.log('chunk : ' + chunk);
    }

    // для параметра name
    /** @type {string} */
    let userName = "";
    // для параметра age
    /** @type {string} */
    let userAge = "";
    // разбиваем запрос на параметры по символу &
    /** @type {string[]} */
    const params = body.split("&");
    //console.log('body : ' + body);
    //console.log('params : ' + params);
    //console.log('params[0] : ' + params[0]);
    //console.log('params[1] : ' + params[1]);
    // проходим по всем параметрам и определяем их значения
    for (const param of params) {
        // разбиваем каждый параметр на имя и значение
        const [paramName, paramValue] = param.split("=");
        if (paramName === "username")
            userName = paramValue;
        if (paramName === "userage")
            userAge = paramValue;
    }
    //console.log('body : ' + body);
    console.log(`Your name: ${userName}  Your Age: ${userAge}`);
    //response.end(`Your name: ${userName}  Your Age: ${userAge}`);
} // var request_url
//=============================================================================

//=============================================================================
/**
 * @async
 * @param {any} request
 * @param {any} response
 */
http.createServer(async (request, response) => {
    con = con + 1;
    //console.log("con:" + con);
    //console.log("request.url:" + request.url);

    //console.log("request:" + request);
    //	console.log("request.method:" + request.method);
    //	console.log("User-Agent:" + request.headers["user-agent"]);
    //console.log("Content-Type:" + request.headers["Content-Type"]);
    //	const contentType = request.getHeader('Content-Type');
    //	console.log("contentType:" + contentType);
    if (request.url == "/user") {
        //console.log(">>>>>>>>>request.url == /user");
        requestUrlBody(request, response);
    }
    else {
        requestUrl(ROOT, request, response);
    }
}).listen(80, "127.0.0.1", function () {
    console.log("Server listen to port 127.0.0.1:80");
});
//=============================================================================

/*
  пример формы для проверки     
<form action="user" method="post">
        <label for="name">Name:</label>
        <input id="username" type="text" name="username" />
        <label for="age">Age:</label>
        <input id="userage" type="text" name="userage" />
        <input type="submit" value="Reg" />
    </form>
*/