const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
let input = fs.readFileSync(file).toString().trim();
let arr = [0, 1];
const fib = (n) => {
   for (let i = 2; i <= n; i++) {
      arr[i] = arr[i - 1] + arr[i - 2];
   }
   return arr[n];
};

console.log(fib(input));
