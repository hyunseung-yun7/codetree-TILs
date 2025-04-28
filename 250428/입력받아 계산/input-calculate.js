const fs = require("fs");
let a = fs.readFileSync(0).toString().trim();
a = parseInt(a, 10);

console.log(a + 2);