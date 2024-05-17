const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
let [m, n] = fs.readFileSync(file).toString().trim().split('\n').map(Number);

const solution = (m, n) => {
   let min = 0;
   let sum = 0;

   for (let i = m; i <= n; i++) {
      if (i === 1) {
         continue;
      }
      for (let j = 2; j <= i; j++) {
         if (i === j) {
            if (sum === 0) {
               min = i;
            }
            sum += i;
            break;
         }
         if (i % j === 0) {
            break;
         }
      }
   }

   if (min === 0) {
      console.log(-1);
      return;
   }

   console.log(sum, min);
};

solution(m, n);
