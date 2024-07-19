const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let [[N, M], ...input] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

let visited = Array(N + 1).fill(false);
let graph = Array.from({ length: N + 1 }, () => []);
let count = 0;
input.forEach(([v, u]) => {
  graph[v].push(u), graph[u].push(v);
});

const dfs = (n) => {
  if (visited[n]) return;
  visited[n] = true
  for (const next of graph[n]) {
    if (!visited[next]) {
      dfs(next)
    }
  }
};

graph.slice(1).forEach((_, i) => {
  let p = i + 1;
  if (!visited[p]) {
    dfs(p);
    count++;
  }
});

console.log(count);
