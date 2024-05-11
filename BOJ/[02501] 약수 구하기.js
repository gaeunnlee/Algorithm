let [n, i] = require('fs').readFileSync('/dev/stdin').toString().split(' ');

const m = Math.floor(Math.sqrt(n));
let answer = 0;
let tempArr = [];
let majorArr = [];

for (let k = 1; k <= m; k++) {
   if (n % k === 0) {
      tempArr.push(k);
   }
}

majorArr = tempArr.concat();

for (const major of tempArr) {
   majorArr.push(n / major);
}

answer = [...new Set(majorArr.sort((a, b) => a - b))][i - 1] ?? 0;

console.log(answer);
