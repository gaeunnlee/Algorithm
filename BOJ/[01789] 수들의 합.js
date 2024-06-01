const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const n = Number(fs.readFileSync(file).toString().trim());
let sum = 0;

for (let i = 1; sum <= n; i++) {
   temp = (i * (i + 1)) / 2;
   if (n - temp >= i + 1) {
      sum = temp;
      continue;
   } else {
      console.log(i);
      break;
   }
}
