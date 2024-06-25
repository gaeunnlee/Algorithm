const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
let input = fs
   .readFileSync(file)
   .toString()
   .trim()
   .split('\n')
   .slice(1)
   .map((item) => item.split(' ').map(Number));

let endTime = 0;
let count = 0;

input
   .sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]))
   .forEach((item) => {
      if (endTime <= item[0]) {
         endTime = item[1];
         count++;
      }
   });

console.log(count);
