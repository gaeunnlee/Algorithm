const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let [N, K] = fs.readFileSync(file).toString().trim().split(" ").map(Number);

const solution = (N) => {
  let dist = [];
  let queue = [];
  let answer = 0;
  let head = 0;

  if (N === K) {
    console.log(answer);
    return;
  }

  const bfs = (n, time) => {
    if (n + 1 === K || (2 * n === K && n > 0) || (n - 1 === K && n > 0)) {
        queue = [];
        answer = time + 1;
        return;
      }
  
    if (n > 0 && !dist[n - 1]) {
      queue.push(n - 1);
      dist[n - 1] = time + 1;
    }

    if (n <= K && !dist[n + 1]) {
      queue.push(n + 1);
      dist[n + 1] = time + 1;
    }

    if (2 * n <= 2 * K + 1 && n > 0 && !dist[2 * n]) {
      queue.push(2 * n);
      dist[2 * n] = time + 1;
    }

    while (queue.length > head) {
      const next = queue[head++];
      bfs(next, dist[next]);
    }
  };

  bfs(N, 0);
  console.log(answer);
};

solution(N, K);
