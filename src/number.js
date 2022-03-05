/* eslint-disable quotes */
/* eslint-disable semi */
const age = 100;
const money = 1000.50;
console.log(typeof age);
console.log(typeof money);
// 'typeof' is used to find the type of the variable.

// eslint-disable-next-line quotes
console.log("10" * "10");
console.log("10" - "3");
/* the above works wit sub,mul,div but not with
addition(+) because + is automatically taked for concatenation. */

console.log(Math.round(2.2));
console.log(Math.floor(5.6));
console.log(Math.ceil(8.4));
console.log(Math.random());

const sweets = 20;
const kids = 3;
const eachKidGets = Math.floor(sweets / kids);
console.log(eachKidGets);
const leftsweets = sweets % kids;
console.log(leftsweets);

let x = 2 ** 3; // power
console.log(x);
x = Math.pow(2, 3);
console.log(x);

console.log(0.1 + 0.2);
// eslint-disable-next-line no-unused-vars
const costOfProduct = 10095; // in paise

console.log(typeof Infinity);
console.log(typeof -Infinity);
// let result = 10 / 'hello';
console.log(typeof NaN);

const y = 100;
let result = Number.isInteger(y);
console.log(`Is y a number: ${result}`);
const z = "abcd";
result = Number.isInteger(z);
console.log(`Is z a number: ${result}`);
result = (typeof z === 'string');
console.log(`Is z a string: ${result}`);
const flag = true;
result = (typeof flag === 'boolean');
console.log(`Is flaf a boolean: ${result}`);
const nos = [1, 2, 3, 4, 5];
result = (typeof nos === 'object');
console.log(`Is nos an object: ${result}`);
