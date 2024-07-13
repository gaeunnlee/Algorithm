const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
let input = fs.readFileSync(file).toString().trim().split('\n');

let T = Number(input.shift());
let testCase = [];
while (input.length !== 0) {
   const N_OF_WORMS = input[0].split(' ').map(Number)[2];
   testCase.push(input.splice(0, N_OF_WORMS + 1).map((v) => v.split(' ').map(Number)));
}

testCase.forEach((input) => {
   let [X, Y] = input.shift();
   let answer = 0;

   let graph = Array.from(
      Array(Y)
         .fill()
         .map(() => Array(X).fill(0))
   );
   let visited = Array.from(
      Array(Y)
         .fill()
         .map(() => Array(X).fill(false))
   );

   input.forEach(([x, y]) => (graph[y][x] = 1));

   const dfs = (x, y) => {
      if (visited[y][x]) return;
      if (x >= 0 && x < X && y >= 0 && y < Y) {
         visited[y][x] = true;
      }

      if (y > 0 && graph[y - 1][x] === 1) {
         dfs(x, y - 1);
      }
      if (y < Y - 1 && graph[y + 1][x] === 1) {
         dfs(x, y + 1);
      }
      if (x > 0 && graph[y][x - 1] === 1) {
         dfs(x - 1, y);
      }
      if (x < X - 1 && graph[y][x + 1] === 1) {
         dfs(x + 1, y);
      }
   };

   for (let y = 0; y < Y; y++) {
      for (let x = 0; x < X; x++) {
         if (visited[y][x]) continue;
         if (graph[y][x] === 1) {
            dfs(x, y);
            answer++;
         } else {
            visited[y][x] = true;
         }
      }
   }
   console.log(answer);
});
