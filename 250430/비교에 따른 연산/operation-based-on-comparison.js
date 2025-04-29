const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(' ');

const a = parseInt(input[0], 10);
const b = parseInt(input[1], 10);

if (a > b) {
    console.log(a * b);
} else {
    console.log(Math.trunc(b / a));
}