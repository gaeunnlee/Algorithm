const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const n = Number(fs.readFileSync(file).toString().trim());
let dp = Array(n + 1).fill(0);

for (let i = 2; i < n + 1; i++) {
   dp[i] = dp[i - 1] + 1;
   if (i % 2 === 0) {
      dp[i] = Math.min(dp[i], dp[i / 2] + 1);
   }
   if (i % 3 === 0) {
      dp[i] = Math.min(dp[i], dp[i / 3] + 1);
   }
}

console.log(dp[n]);
