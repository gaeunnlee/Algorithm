const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs
   .readFileSync(file)
   .toString()
   .trim()
   .split('\n')
   .map((item) => item.split(' ').map(Number));
const [info, numbers, ...ranges] = input;
const [N] = info;
let answer = [];
let acc = Array(N + 1).fill(0);
for (let i = 1; i <= N; i++) {
   acc[i] = acc[i - 1] + numbers[i - 1];
}
ranges.forEach(([i, j]) => answer.push(acc[j] - acc[i - 1]));
console.log(answer.join('\n'));
