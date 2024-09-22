const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
const [[N, S], numbers] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));
let answer = 0;

function dfs(i, sum, size, arr) {
  if (i === N && sum === S && size > 0) {
    answer++;
  }
  const next = i + 1;
  if (next < N + 1) {
    const newArr = [...arr, numbers[i]];
    dfs(next, sum + numbers[i], size + 1, newArr);
    dfs(next, sum, size, arr);
  }
}

dfs(0, 0, 0, []);
console.log(answer);
