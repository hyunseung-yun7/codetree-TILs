const fs = require("fs");
const [A_str, N_str] = fs.readFileSync(0).toString().trim().split(' ');
let A = parseInt(A_str, 10);
const N = parseInt(N_str, 10);

for (let i = 0; i < N; i++) {
  A += N;
  console.log(A);
}