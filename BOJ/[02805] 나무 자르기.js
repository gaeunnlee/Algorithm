const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs
   .readFileSync(file)
   .toString()
   .trim()
   .split('\n')
   .map((item) => item.split(' ').map(Number));
let [[N, M], trees] = input;
let cuttingSize = 0;

const binaryCut = (start, end, arr) => {
   while (start <= end) {
      const mid = ~~((start + end) / 2);
      const sum = arr.reduce((acc, cur) => {
         if (cur > mid) return acc + cur - mid;
         return acc;
      }, 0);
      if (sum >= M) {
         cuttingSize = mid;
         start = mid + 1;
      } else {
         end = mid - 1;
      }
   }
   return cuttingSize;
};

console.log(binaryCut(0, Math.max(...trees), trees));
