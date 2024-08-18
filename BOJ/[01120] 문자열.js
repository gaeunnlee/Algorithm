const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let [X, Y] = fs.readFileSync(file).toString().trim().split(" ");
let min = Y.length;

for (let i = 0; i <= Y.length - X.length; i++) {
  let diff = 0;
  for (let j = 0; j < X.length; j++) {
    if (X[j] !== Y[i + j]) {
      diff++;
    }
  }
  min = Math.min(min, diff);
}

console.log(min);