const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const [N, K] = fs.readFileSync(file).toString().trim().split(' ').map(Number);

const arr = Array(N)
   .fill()
   .map((v, i) => i + 1);

let index = K - 1;
let answer = [];
while (arr.length !== 0) {
   answer.push(arr[index]);
   arr.splice(index, 1);
   index = (index + K - 1) % arr.length;
}

console.log(`<${answer.join(', ')}>`);
