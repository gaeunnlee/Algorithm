const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
let input = fs.readFileSync(file).toString().trim().split('\n');
const N = Number(input[0]);
const point = input.slice(1).map((item) => item.split(' ').map(Number));
let sortedArray = [];

sortedArray = point.sort((a, b) => {
   if (a[0] === b[0]) {
      return a[1] - b[1];
   }
   return a[0] - b[0];
});

console.log(sortedArray.map((item) => item.join(' ')).join('\n'));
