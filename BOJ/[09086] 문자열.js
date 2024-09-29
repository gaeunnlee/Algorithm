const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
const [N, ...input] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")

input.map(v => console.log(`${v[0]}${v[v.length - 1]}`))