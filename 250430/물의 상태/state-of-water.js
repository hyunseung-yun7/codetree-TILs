const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const n = parseInt(input, 10);

if (n < 0) {
    console.log('ice');
} else if (n >= 100) {
    console.log('vapor');
} else if (0 < n < 100) {
    console.log('water');
}