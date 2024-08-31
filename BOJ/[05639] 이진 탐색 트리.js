const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
const input = fs.readFileSync(file).toString().trim().split("\n").map(Number);

const postOrder = (start, end) => {
  if (start >= end) return;
  let i = 0;
  for (i = start + 1; i < end; i++) {
    if (input[i] > input[start]) break;
  }
  postOrder(start + 1, i);
  postOrder(i, end);
  console.log(input[start]);
};

postOrder(0, input.length);
