const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ');

let A = parseInt(input[0], 10);
let B = parseInt(input[1], 10);

if (A >= B) {
    console.log(1);
} else {
    console.log(0);
}

if (A > B) {
    console.log(1);
} else {
    console.log(0);
}

if (A <= B) {
    console.log(1);
} else {
    console.log(0);
}

if (A < B) {
    console.log(1);
} else {
    console.log(0);
}

if (A == B) {
    console.log(1);
} else {
    console.log(0);
}

if (A != B) {
    console.log(1);
} else {
    console.log(0);
}