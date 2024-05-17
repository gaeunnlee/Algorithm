const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
let [N, n, operator] = fs.readFileSync(file).toString().trim().split('\n');

const solution = (N, n, operator) => {
   let min = Infinity;
   let max = -Infinity;
   let num = n.split(' ').map(Number);
   let count = 0;
   let opArr = [];

   operator.split(' ').forEach((count, index) => {
      for (let i = 0; i < count; i++) {
         opArr.push(index);
      }
   });
   const calculate = [
      (a, b) => a + b,
      (a, b) => a - b,
      (a, b) => a * b,
      (a, b) => (a >= 0 ? Math.floor(a / b) : -Math.floor(-a / b)),
   ];

   const dfs = (count, temp, operators) => {
      if (count === N - 1) {
         max = Math.max(max, temp);
         min = Math.min(min, temp);
         return;
      }
      count++;

      for (let i = 0; i < operators.length; i++) {
         const nextOperators = operators.filter((_, index) => index !== i);
         dfs(count, calculate[operators[i]](temp, num[N - nextOperators.length - 1]), nextOperators);
      }
   };

   dfs(count, num[0], opArr);

   console.log(max ? max : 0);
   console.log(min ? min : 0);
};

solution(N, n, operator);
