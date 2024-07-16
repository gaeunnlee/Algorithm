const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
let [size, ...inputs] = fs.readFileSync(file).toString().trim().split('\n');
let [M, N] = size.split(' ').map(Number);
inputs = inputs.map((v) => v.split(''));

let answer = Infinity;
let isStartW = false;
const isStartWFunc = (rowIndex) => (rowIndex % 2 === 0 ? true : false);

let [X, Y] = [N - 8, M - 8];

for (let i = 0; i <= X; i++) {
   for (let j = 0; j <= Y; j++) {
      let temp = 0;
      for (let r = j; r <= j + 7; r++) {
         isStartW = isStartWFunc(r);
         for (let c = i; c <= i + 7; c++) {
            let col = inputs[r][c];
            let isColorCorrect = (isStartW ? c % 2 === 0 : c % 2 === 1) ? col === 'W' : col === 'B';
            if (!isColorCorrect) {
               temp++;
            }
         }
      }
      answer = Math.min(temp, 64 - temp, answer);
   }
}

console.log(answer);
