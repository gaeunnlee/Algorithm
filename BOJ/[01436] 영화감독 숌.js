const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const n = Number(fs.readFileSync(file).toString().trim());
let count = 0;
let answer = 0;
for (let i = 0; count !== n; i++) {
   if (`${i}`.includes('666')) {
      count++;
   }
   answer = i;
}

console.log(answer);
