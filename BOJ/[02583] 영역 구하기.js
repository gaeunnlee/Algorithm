const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
const [M, N, K] = input.shift().split(' ').map(Number);
const visited = Array.from(Array(M), () => Array(N).fill(0));
let answer = [];

for (let i = 0; i < K; i++) {
  const [x1, y1, x2, y2] = input[i].split(' ').map(Number);
  for (let y = M - y2; y < M - y1; y++) {
    for (let x = x1; x < x2; x++) {
      visited[y][x] = 1;
    }
  }
}

const bfs = (start) => {
  const dir = [[-1, 0], [1, 0], [0, 1], [0, -1]];
  const queue = [start];
  let temp = 0;
  while (queue.length) {
    const [cy, cx] = queue.shift();
    temp++;
		
    for (let i = 0; i < 4; i++) {
      const ny = cy + dir[i][1];
      const nx = cx + dir[i][0];

      if (ny >= 0 && ny < M && nx >= 0 && nx < N && !visited[ny][nx]) {
        visited[ny][nx] = 1;
        queue.push([ny, nx]);
      }
    }
  }
  return cnt;
};

for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    if (!visited[i][j]) {
      visited[i][j] = 1; 
      answer.push(bfs([i, j])); 
    }
  }
}
console.log(answer.length);
console.log(answer.sort((a, b) => a - b).join(' '));