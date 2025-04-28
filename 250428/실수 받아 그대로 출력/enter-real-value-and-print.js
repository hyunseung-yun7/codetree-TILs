const fs = require("fs");
let N = fs.readFileSync(0).toString().trim();
N = parseFloat(N);

console.log(N.toFixed(2));