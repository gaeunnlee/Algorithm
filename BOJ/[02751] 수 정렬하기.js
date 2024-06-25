const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
let input = fs.readFileSync(file).toString().trim().split('\n').map(Number).slice(1);

console.log(input.sort((a, b) => a - b).join('\n'));
