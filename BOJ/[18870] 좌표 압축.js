const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
let input = fs.readFileSync(file).toString().trim().split('\n')[1].split(' ').map(Number);
let numbers = [...new Set(input)].sort((a, b) => a - b);
let obj = {};
let answer = [];
numbers.forEach((v, i) => (obj[v] = i));
input.forEach((v) => answer.push(obj[v]));
console.log(answer.join(' '));
