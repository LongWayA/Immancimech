//@ts-check
/** 
 * immortals
 * @author AnBr75
 * @copyright Copyright (c) 2025, AnBr75 and/or its affiliates. All rights reserved.
 * @version created 23.01m.2025
 */

let Copyright_AnBr75 = 2025;

console.log('Test is OK');

const username = "Tom";
//username = "Bob";   // ошибка, username - константа, поэтому мы не можем изменить ее значение
console.log(username);  // Tom

let id;
console.log(typeof id);       // undefined
 
id = 45;
console.log(typeof id);   // number
 
id = 45n;
console.log(typeof id);     // bigint
 
id = "45";
console.log(typeof id);     // string

let num  = 0b0000000000000000000000000000000000000000000000000000000000000101;  // 
let num2 = 0b1011111111111111111111111111111111111111111111111111111111111111;  // 
let num3 = 0b1101111111111111111111111111111111111111111111111111111111111111;  // 
let num1 = ~num;  // 

console.log("num = " + num);   //
console.log("numb= " + num.toString(2));
console.log("num1= " + num1);
console.log("num1b= " + num1.toString(2));   // 
console.log("num2b= " + num2.toString(2));   //
console.log("num3= " + num3);   // 13 
console.log("num3b= " + num3.toString(2));   //

let binaryString = (16140901064495858000n).toString(2); // "101"
console.log(binaryString);

/*
2 — Число будет отображаться как двоичное значение
8 — Число будет отображаться как восьмеричное значение
16 — Число будет отображаться как шестнадцатеричное значение
*/
let d = 20;
let b = (d).toString(16);
let r = (b).toString();
console.log("d = " + d);
console.log("b = " + b);
console.log("r = " + r);