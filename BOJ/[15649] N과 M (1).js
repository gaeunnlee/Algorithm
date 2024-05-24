const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
let [N, M] = fs.readFileSync(file).toString().trim().split(' ').map(Number);

const solution = () => {
   const temp = [];
   const visited = Array(N + 1).fill(false);

   const recur = (n) => {
      if (n === M) {
         console.log(temp.join(' '));
         return;
      }
      for (let i = 1; i < N + 1; i++) {
         if (visited[i] === false) {
            visited[i] = true;
            temp.push(i);
            recur(n + 1);
            visited[i] = false;
            temp.pop();
         }
      }
   };

   recur(0);
};

solution();
