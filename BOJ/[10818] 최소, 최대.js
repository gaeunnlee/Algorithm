let [length, arr] = require('fs').readFileSync('BOJ/input.txt').toString().split('\n');
arr = arr.split(' ').map(Number);
let min = arr[0];
let max = arr[0];

for (let i = 0; i < length; i++) {
   min = min < arr[i] ? min : arr[i];
   max = max > arr[i] ? max : arr[i];
}

console.log(min, max);
