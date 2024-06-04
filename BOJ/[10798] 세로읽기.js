const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
let max = 0;
let result = [];
let input = fs
   .readFileSync(file)
   .toString()
   .trim()
   .split('\n')
   .map((item) => {
      k = item.split('');
      max = Math.max(max, k.length);
      return item;
   });

input = input.map((item) => item.padEnd(max, '_'));

for (let i = 0; i < max; i++) {
   for (let j = 0; j < 5; j++) {
      const element = input[j][i];
      if (element !== '_') {
         result.push(element);
      }
   }
}
console.log(result.join(''));
