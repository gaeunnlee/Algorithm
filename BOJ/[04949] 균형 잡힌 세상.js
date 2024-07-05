const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n').slice(0, -1);

let answer = [];
const leftBracket = ['(', '['];
const rightBracket = [')', ']'];

input.forEach((line, index) => {
   let stack = [];
   Array.from(line).every((char) => {
      if (leftBracket.includes(char)) {
         stack.push(char);
      } else if (rightBracket.includes(char)) {
         if (stack.length === 0) {
            answer.push('no');
            return false;
         }
         if (leftBracket[rightBracket.findIndex((c) => c === char)] === stack[stack.length - 1]) {
            stack.pop();
         } else {
            return false;
         }
      }
      return true;
   });
   if (answer[index] === undefined) {
      if (stack.length > 0) {
         answer.push('no');
      } else {
         answer.push('yes');
      }
   }
});

console.log(answer.join('\n'));
