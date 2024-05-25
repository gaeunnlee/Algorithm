const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number); // n: 세로, m: 가로
const map = input.slice(1).map((item) => item.split(' ').map(Number));
const visited = Array.from(Array(n), () => Array(m).fill(false));

let count = 0;
let maxSize = 0;

const dy = [0, 1, 0, -1];
const dx = [1, 0, -1, 0];

const bfs = (y, x) => {
   let size = 1;
   let queue = [[y, x]];
   while (queue.length !== 0) {
      const [ey, ex] = queue.shift();
      for (let k = 0; k < 4; k++) {
         const ny = ey + dy[k];
         const nx = ex + dx[k];
         if (nx >= 0 && nx < m && ny >= 0 && ny < n) {
            if (!visited[ny][nx] && map[ny][nx]) {
               visited[ny][nx] = true;
               size++;
               queue.push([ny, nx]);
            }
         }
      }
   }
   return size;
};

for (let i = 0; i < n; i++) {
   for (let j = 0; j < m; j++) {
      if (map[i][j] === 1 && visited[i][j] === false) {
         visited[i][j] = true;
         count += 1;
         temp = bfs(i, j);
         maxSize = Math.max(maxSize, temp);
      }
   }
}

console.log(`${count}\n${maxSize}`);
