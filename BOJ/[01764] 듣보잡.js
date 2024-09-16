const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(file).toString().trim().split("\n").slice(1);
const nameList = new Set(input);
const answer = [];

input.forEach((v) => {
  nameList.has(v) ? nameList.delete(v) : answer.push(v);
});

console.log(answer.length);
console.log(answer.sort().join("\n"));