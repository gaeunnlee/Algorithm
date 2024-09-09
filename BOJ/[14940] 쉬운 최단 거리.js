const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "BOJ/input.txt";
let [size, ...graph] = fs.readFileSync(file).toString().trim().split("\n");
const [Y, X] = size.split(" ").map(Number);
let [targetY, targetX] = [];
const visited = Array.from({ length: Y }, () => Array(X).fill(-1));
const queue = [];

graph = graph.map((v, y) =>
  v.split(" ").map((value, x) => {
    if (value === "2") {
      [targetY, targetX] = [y, x];
      visited[targetY][targetX] = 0;
    }
    if (value === "0") {
      visited[y][x] = 0;
    }
    return Number(value);
  })
);

function bfs(y, x, acc) {
    const distance = acc + 1;
  
    const dy = [1, 0, -1, 0];
    const dx = [0, 1, 0, -1];
    for (let i = 0; i < 4; i++) {
      const [ey, ex] = [y + dy[i], x + dx[i]];
      if (ey < 0 || ey >= Y || ex < 0 || ex >= X || visited[ey][ex] > 0 || graph[ey][ex] !== 1) continue;
      visited[ey][ex] = distance;
      queue.push([ey, ex, distance]);
    }
  
    while (queue.length > 0) {
      const [ny, nx, distance] = queue.shift();
      bfs(ny, nx, distance);
    }
  }
  

bfs(targetY, targetX, 0);
console.log(visited.join("\n").split(",").join(" "));
