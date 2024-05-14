const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
let [m, n] = fs.readFileSync(file).toString().trim().split(' ').map(Number);

const gcd = (m, n) => {
   let result = 1;
   if (m === 1 || n === 1) {
      return result;
   }
   for (let i = 2; i <= Math.min(m, n); i++) {
      if (m % i === 0 && n % i === 0) {
         result = i;
      }
   }
   return result;
};

const lcm = (m, n) => {
   return (m * n) / gcd(m, n);
};

console.log(gcd(m, n));
console.log(lcm(m, n));
