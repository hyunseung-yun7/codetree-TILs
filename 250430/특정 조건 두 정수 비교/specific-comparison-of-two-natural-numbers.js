const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(' ');

const a = parseInt(input[0], 10);
const b = parseInt(input[1], 10);

let smaller;
if (a < b) {
  smaller = 1;
} else {
  smaller = 0;
}

let equal;
if (a === b) {
  equal = 1;
} else {
  equal = 0;
}

console.log(smaller, equal);