const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
let count = {};
let [N, numbers, M, targets] = fs
   .readFileSync(file)
   .toString()
   .trim()
   .split('\n')
   .map((item, index) =>
      index % 2 === 0
         ? Number(item)
         : item.split(' ').map((number) => {
              if (index === 1) {
                 if (count[number] === undefined) {
                    count[number] = 1;
                 } else {
                    count[number] = count[number] + 1;
                 }
              }
              return Number(number);
           })
   );

numbers = Array.from(new Set(numbers));
let answer = [];
targets.forEach((target) => {
   if (count[target] !== undefined) {
      answer += `${count[target]} `;
   } else {
      answer += '0 ';
   }
});

console.log(answer.trim());
