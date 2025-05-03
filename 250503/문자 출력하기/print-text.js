const fs = require("fs");

const input = fs.readFileSync(0).toString();
const ch = input.charAt(0);

let output = "";
for (let i = 0; i < 8; i++) {
  output += ch;
}

console.log(output);