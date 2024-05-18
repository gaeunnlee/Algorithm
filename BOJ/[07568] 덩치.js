const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
let input = fs.readFileSync(file).toString().trim().split('\n');

const solution = (input) => {
   const N = Number(input[0]);
   const data = input.slice(1).map((item) => item.split(' ').map(Number));
   let result = Array(N).fill(0);
   for (let i = 0; i < N; i++) {
      result[i] += 1;
      for (let j = 0; j < N; j++) {
         if (j !== i && data[j][0] > data[i][0] && data[j][1] > data[i][1]) {
            result[i] += 1;
         }
      }
   }
   console.log(result.join(' '));
};

solution(input);
