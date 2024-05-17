const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
let arr = fs
   .readFileSync(file)
   .toString()
   .trim()
   .split('\n')[1]
   .split(' ')
   .map(Number)
   .sort((a, b) => a - b);

const solution = (arr) => {
   let answer = 0;
   for (const n of arr) {
      if (n === 1) {
         continue;
      }
      for (let i = 2; i <= n; i++) {
         if (n === i) {
            answer += 1;
         }
         if (n % i === 0) {
            break;
         }
      }
   }
   console.log(answer);
};

solution(arr);
