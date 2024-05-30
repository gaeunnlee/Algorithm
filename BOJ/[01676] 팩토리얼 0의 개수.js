const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const n = Number(fs.readFileSync(file).toString().trim());

function factorial(x) {
   let result = BigInt(1);
   for (let i = x; i > 0; i--) {
      result *= BigInt(i);
   }
   return result;
}

`${factorial(n)}`
   .split('')
   .reverse()
   .some((item, index) => {
      if (item !== '0') {
         console.log(index);
         return true;
      }
   });
