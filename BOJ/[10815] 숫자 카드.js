const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let [N, numbers, M, targets] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));
  
let answer = [];

numbers = new Set(numbers)

for (const target of targets) {
    answer.push(Number(numbers.has(target)))
}

console.log(answer.join(' '))