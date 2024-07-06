const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
let [info, ...graph] = fs.readFileSync(file).toString().trim().split('\n');
[Y, X] = info.split(' ').map(Number);
graph = graph.map((line) => line.split(''));
let visited = Array.from(Array(Y), () => Array(X).fill(false));
let count = 0;

const dfs = (y, x, shape) => {
   let nextShape = '';
   visited[y][x] = true;
   if (shape === '-') {
      if (x + 1 >= X) {
         count++;
         return;
      }
      nextShape = graph[y][x + 1];
      if (nextShape === shape) {
         visited[y][x + 1] = true;
         dfs(y, x + 1, shape);
      } else {
         count++;
      }
   } else {
      if (y + 1 >= Y) {
         count++;
         return;
      }
      nextShape = graph[y + 1][x];
      if (nextShape === shape) {
         visited[y + 1][x] = true;
         dfs(y + 1, x, shape);
      } else {
         count++;
      }
   }
};

for (let y = 0; y < Y; y++) {
   for (let x = 0; x < X; x++) {
      if (visited[y][x] === false) {
         dfs(y, x, graph[y][x]);
      }
   }
}

console.log(count);
