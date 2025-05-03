const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();
const n = parseInt(input, 10);

if (isNaN(n) || n < 0 || n > 10000) {
  console.log("no");
} else {
  let answer;
  if (n >= 3000) {
    answer = "book";
  } else if (n >= 1000) {
    answer = "mask";
  } else {
    answer = "no";
  }
  console.log(answer);
}