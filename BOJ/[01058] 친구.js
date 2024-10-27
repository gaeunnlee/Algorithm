const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let [N, ...graph] = fs.readFileSync(file).toString().trim().split("\n");
graph = graph.map((line) => line.split(""));
let visited = Array.from({ length: N }, () =>
  Array.from({ length: N }).fill(0)
);


for (let k = 0; k < N; k++) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (i === j) continue;

      if (graph[i][j] === "Y" || (graph[i][k] === "Y" && graph[k][j] === "Y")) {
        visited[i][j] = 1;
      }
    }
  }
}

let answer = 0;

for (const visit of visited) {
  answer = Math.max(
    answer,
    visit.reduce((sum, v) => sum + v, 0)
  );
}

console.log(answer);
