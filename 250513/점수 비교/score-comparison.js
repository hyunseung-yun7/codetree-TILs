const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const A = input[0].split(" ").map(Number);
const B = input[1].split(" ").map(Number);

const A_math = A[0], A_eng = A[1];
const B_math = B[0], B_eng = B[1];

if (A_math > B_math && A_eng > B_eng) {
    console.log(1);
} else {
    console.log(0);
}