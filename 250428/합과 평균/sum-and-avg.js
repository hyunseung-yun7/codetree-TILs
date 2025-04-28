const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ');

let A = parseInt(input[0], 10);
let B = parseInt(input[1], 10);

let total = A + B;
let average = total / 2;

console.log(total + ' ' + average.toFixed(1));