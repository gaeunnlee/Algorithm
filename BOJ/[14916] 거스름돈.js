const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
let input = Number(fs.readFileSync(file));
let answer = 0;
let temp = input;
let increaseMode = false;

while (temp !== 0) {
   if (temp > input) {
      answer = -1;
      break;
   }
   if (temp >= 5 && !increaseMode) {
      temp -= 5;
      answer++;
   } else if (temp % 2 === 0) {
      temp -= 2;
      answer++;
   } else {
      increaseMode = true;
      answer--;
      temp += 5;
   }
}
console.log(answer);
