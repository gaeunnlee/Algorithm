const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const [N, arr] = fs
   .readFileSync(file)
   .toString()
   .trim()
   .split('\n')
   .map((item) => item.split(' ').map(Number));

let dp = Array(Number(N)).fill(1);

for (let i = 1; i < N; i++) {
   for (let j = 0; j < i; j++) {
      if (arr[j] > arr[i] && dp[j] + 1 > dp[i]) {
         dp[i] = dp[j] + 1;
      }
   }
}

console.log(Math.max(...dp));
