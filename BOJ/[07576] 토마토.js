const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
const [[X, Y], ...graph] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];
let dist = Array.from(Array(Y), () => Array(X).fill(0));
let queue = [];
let answer = 0;

for (let y = 0; y < Y; y++) {
  for (let x = 0; x < X; x++) {
    let tomato = graph[y][x];
    if (tomato === 1) {
      queue.push([y, x]);
    } else if (tomato === 0) {
      dist[y][x] = -1;
    }
  }
}

function bfs() {
  let head = 0;
  while (queue.length > head) {
    const [y, x] = queue[head++];
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx >= 0 && nx < X && ny >= 0 && ny < Y && dist[ny][nx] === -1) {
        dist[ny][nx] = dist[y][x] + 1;
        queue.push([ny, nx]);
      }
    }
  }
}

bfs();

for (let y = 0; y < Y; y++) {
  for (let x = 0; x < X; x++) {
    if (dist[y][x] === -1) {
      console.log(-1);
      return;
    }
    answer = Math.max(answer, dist[y][x]);
  }
}

console.log(answer);
