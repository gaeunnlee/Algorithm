const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
let inputList = fs
   .readFileSync(file)
   .toString()
   .trim()
   .split('\n')
   .slice(1)
   .map((input) => input.split(' ').map(Number));

const solution = (inputList) => {
   for (input of inputList) {
      console.log(input.sort((a, b) => b - a)[2]);
   }
};

solution(inputList);
