const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let [N, ...input] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

input = input.sort((a, b) => a - b);

let max = input[N - 1];

for (let i = N - 1; i >= 0; i--) {
  const w = input[i] * (N - i);
  max = max < w ? w : max;
}

console.log(max);
