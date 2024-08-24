const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let [N, ...nodes] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((v) => (v.split(" ").length > 1 ? v.split(" ").map(Number) : Number(v)));
let tree = Array.from({ length: N + 1 }, () => []);
let visited = Array(N + 1).fill(false);
let answer = []
nodes.forEach(([a, b]) => {
  tree[a].push(b);
  tree[b].push(a);
});

visited[1] = true;
let queue = [1];

while (queue.length) {
  const current = queue[0];
  visited[current] = true;
  tree[current].forEach((child) => {
    if (!visited[child]) {
      answer[child] = current;
      queue.push(child);
    }
  });
  queue.shift();
}

console.log(answer.slice(2).join('\n'));
