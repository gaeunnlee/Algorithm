const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let [N, M] = fs.readFileSync(file).toString().trim().split(" ").map(Number);
let visited = Array.from({ length: N + 1 }).fill(false);
let arr = [];

function dfs(n, count) {
  if (count === M) {
    console.log(`${arr.join(" ")}`);
    return;
  }
  for (let i = n; i <= N; i++) {
    if (!visited[i]) {
      visited[i] = true;
      arr[count] = i;
      dfs(i + 1, count + 1);
      visited[i] = false;
    }
  }
}

dfs(1, 0);
