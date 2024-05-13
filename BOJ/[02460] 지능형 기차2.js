const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
let input = fs
   .readFileSync(file)
   .toString()
   .trim()
   .split('\n')
   .map((item) => item.split(' ').map(Number));

let temp = 0;
let max = 0;

for (const k of input) {
   temp -= k[0];
   temp += k[1];
   max = Math.max(max, temp);
}

console.log(max);
