const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const [m, n] = fs.readFileSync(file).toString().trim().split(' ').map(Number);
const num = Array(n + 1).fill(true);
const result = [];

for (let i = 2; i <= Math.ceil(Math.sqrt(n)); i++) {
   if (num[i] === true) {
      let j = 2;
      while (i * j <= n) {
         num[i * j] = false;
         j++;
      }
   }
}

num.forEach((isPrime, index) => {
   if (isPrime && index > 1 && index >= m) {
      result.push(index);
   }
});

console.log(result.join('\n'));
