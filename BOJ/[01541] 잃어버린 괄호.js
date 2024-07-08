const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
let input = fs.readFileSync(file).toString().trim();
let isNegative = false;

if (input[0] === '-') {
   isNegative = true;
   input = input.slice(1, input.length);
}

input = input
   .split(/([+-])/)
   .map((item, index) => (!(index % 2) ? Number(item) : item))
   .join('')
   .split('-')
   .map((item) => eval(item));

console.log(eval(isNegative ? `-${input.join('-')}` : input.join('-')));
