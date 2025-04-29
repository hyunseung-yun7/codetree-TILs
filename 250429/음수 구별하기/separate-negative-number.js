const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');

let N = parseInt(input, 10);

console.log(N);

if (N < 0) {
    console.log("minus");
}
