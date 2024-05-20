const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
let [N, K] = fs.readFileSync(file).toString().trim().split(' ').map(Number);

const solution = (N, K) => {
   const arr = Array(N).fill(false);
   let result = [];
   let count = 1;
   let start = 0;

   while (result.length !== N) {
      for (let i = start; ; i++) {
         if (count % K === 0 && arr[i % N] !== true) {
            result.push((i % N) + 1);
            arr[i % N] = true;
            start = (i % N) + 1;
            count = 1;
            break;
         }
         if (arr[i % N] === false) {
            count++;
         }
      }
   }

   console.log(`<${result.join(', ')}>`);
};

solution(N, K);
