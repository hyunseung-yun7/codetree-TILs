const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ');

let a = parseInt(input[0], 10);
let b = parseInt(input[1], 10);
let c = parseInt(input[2], 10);

let total = a + b + c;
let average = total / 3;
let cal = total - average;

console.log(total);
console.log(average);
console.log(cal);
