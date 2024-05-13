const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
let input = fs.readFileSync(file).toString().trim().split('\n').slice(1).map(Number);

const divide = (n) => {
   let count = 0;
   let result = [];
   while (parseInt(n / 2) >= 0) {
      if (n % 2 === 1) {
         result.push(count);
      }
      count++;
      n = parseInt(n / 2);
      if (n === 0) {
         break;
      }
   }
   return result.join(' ');
};

for (n of input) {
   console.log(divide(n));
}
