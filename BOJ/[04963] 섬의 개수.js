const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
const input = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

while (input.length > 1) {
  const [w, h] = input.shift();

  let map = [];
  let count = -1;

  while (count < h - 1) {
    map.push(input.shift());
    count++;
  }

  const visited = Array.from({ length: h }, () => Array(w).fill(false));

  let target = 0;

  const dfs = (y, x) => {
    visited[y][x] = true;

    if (!map[y][x]) return;

    const dy = [-1, -1, -1, 0, 1, 1, 1, 0];
    const dx = [-1, 0, 1, 1, 1, 0, -1, -1];

    for (let i = 0; i < dy.length; i++) {
      const [ey, ex] = [y + dy[i], x + dx[i]];
      if (
        ey < 0 ||
        ey >= h ||
        ex < 0 ||
        ex >= w ||
        visited[ey][ex] ||
        !map[y][x]
      )
        continue;

      dfs(ey, ex);
    }
  };

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (!visited[i][j]) {
        dfs(i, j);
        if (map[i][j]) target++;
      }
    }
  }

  console.log(target);
}