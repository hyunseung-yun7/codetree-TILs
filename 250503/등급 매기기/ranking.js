const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();
const n = parseInt(input, 10);

if (isNaN(n) || n < 0 || n > 100) {
  console.log("no");
} else {
  let answer;
  if (n >= 90) {
    answer = "A";
  } else if (n >= 80) {
    answer = "B";
  } else if (n >= 70) {
    answer = "C";
  } else if (n >= 60) {
    answer = "D";
  } else {
    answer = "F";
  }
  console.log(answer);
}