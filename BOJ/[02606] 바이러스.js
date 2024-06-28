const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
let input = fs.readFileSync(file).toString().trim().split('\n');

const N = +input.shift();
const M = +input.shift();
const data = input.map((item) => item.split(' ').map(Number));

let graph = Array.from(Array(N + 1), () => []);
let result = Array(N + 1).fill(false);
result[1] = true;
let count = 0;

data.forEach(([nodeA, nodeB]) => {
   graph[nodeA].push(nodeB);
   graph[nodeB].push(nodeA);
});

const dfs = (node) => {
   for (let next of graph[node]) {
      if (result[next] === false) {
         result[next] = true;
         count++;
         dfs(next);
      }
   }
};

dfs(1);

console.log(count);
