const fs = require("fs");
const [A_str, B_str] = fs.readFileSync(0).toString().trim().split(" ");
const A = parseInt(A_str, 10);
const B = parseInt(B_str, 10);

const result = [];
for (let i = B; i >= A; i--) {
  result.push(i);
}
console.log(result.join(" "));