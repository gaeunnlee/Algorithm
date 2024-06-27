const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n').slice(1).map(Number);

dp = [0, 1, 2, 4];

for (let i = 4; i <= 10; i++) {
   dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1];
}

console.log(input.map((n) => dp[n]).join('\n'));
