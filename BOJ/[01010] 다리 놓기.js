const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
let input = fs.readFileSync(file).toString().trim().split('\n');

const solution = (input) => {
   const test = input.slice(1).map((tc) => tc.split(' ').map(Number));
   const fac = (n) => {
      let result = 1;
      for (let i = 1; i <= n; i++) {
         result *= i;
      }
      return result;
   };
   const comb = (n, r) => {
      return parseInt(fac(n) / (fac(r) * fac(n - r)) + 0.5);
   };
   test.forEach(([west, east]) => {
      console.log(comb(east, west));
   });
};
solution(input);
