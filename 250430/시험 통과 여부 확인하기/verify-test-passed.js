const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const N = parseInt(input, 10);

if (N >= 80) {
    console.log("pass");
} else {
    const x =  80 - N;
    console.log(`${x} more score`);
}