const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();
const N = parseInt(input, 10);

const multiples = [];
for (let i = 1; i <= 5; i++) {
    multiples.push(N * i);
}

console.log(multiples.join(" "));