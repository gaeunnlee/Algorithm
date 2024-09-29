const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((v) => v.split(" ").map(Number));

input = input.sort(([a1, a2], [b1, b2]) => {
  if (a2 !== b2) {
    return a2 - b2;
  }
  return a1 -  b1;
});

console.log(input.map((v) => v.join(" ")).join("\n"));
