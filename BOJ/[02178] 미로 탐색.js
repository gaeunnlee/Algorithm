const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const graph = input.slice(1).map((item) => item.split('').map(Number));
let visited = Array.from(Array(N), () => Array(M).fill(0));

const bfs = (x, y) => {
   const dx = [0, 1, 0, -1];
   const dy = [1, 0, -1, 0];
   let queue = [[x, y]];

   while (queue.length !== 0) {
      let [ex, ey] = queue.shift();
      for (let i = 0; i < 4; i++) {
         let nx = dx[i] + ex;
         let ny = dy[i] + ey;
         if (nx >= 0 && nx < N && ny >= 0 && ny < M) {
            if (graph[nx][ny] === 1 && visited[nx][ny] === 0) {
               visited[nx][ny] = visited[ex][ey] + 1;
               queue.push([nx, ny]);
            }
         }
      }
   }
   console.log(visited[N - 1][M - 1]);
};

const solution = () => {
   visited[0][0] = 1;
   bfs(0, 0);
};

solution();
