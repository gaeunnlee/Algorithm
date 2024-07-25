const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");

n = Number(input.shift);
input = input.map((v) => v.split(" ").map(Number));

let visited = Array.from(Array(100), () => Array(100).fill(0));
let answer = 0

input.forEach(([x, y]) => {
  for (let i = y; i < y + 10; i++) {
    for (let j = x; j < x + 10; j++) {
      if (visited[i][j] === 0) {
        answer++
        visited[i][j] = 1;
      }
    }
  }
});

console.log(answer);
