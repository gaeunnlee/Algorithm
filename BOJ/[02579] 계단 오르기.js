const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
let inputs = fs.readFileSync(file).toString().trim().split('\n').map(Number);
let [N, ...input] = inputs;

let dp = Array(300).fill(0);
dp[0] = input[0];
dp[1] = input[0] + input[1];
dp[2] = Math.max(input[0] + input[2], input[1] + input[2]);

for (let i = 3; i < N; i++) {
   dp[i] = Math.max(dp[i - 3] + input[i - 1] + input[i], dp[i - 2] + input[i]);
}

console.log(dp[N - 1]);
