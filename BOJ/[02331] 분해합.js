const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const n = Number(fs.readFileSync(file).toString().trim());

for (let i = 0; i < n; i++) {
   let temp = i;
   let k = i.toString();
   for (m of k) {
      temp += Number(m);
   }
   if (temp === n) {
      console.log(i);
      return;
   }
}
console.log(0);
