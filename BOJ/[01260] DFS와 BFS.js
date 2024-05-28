const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
let input = fs.readFileSync(file).toString().trim().split('\n');
const [N, M, V] = input[0].split(' ').map(Number);
const graph = input.slice(1).map((item) => item.split(' ').map(Number));
const dfsResult = [];
const bfsResult = [];
const adj = [];
let visited = [];

const initialize = () => {
   visited = Array(N + 1).fill(false);
   graph.forEach(([node1, node2]) => {
      if (adj[node1] === undefined) {
         adj[node1] = [node2];
      } else {
         adj[node1] = [...adj[node1], node2];
      }
      if (adj[node2] === undefined) {
         adj[node2] = [node1];
      } else {
         adj[node2] = [...adj[node2], node1];
      }
   });
   adj.forEach((item) => item.sort((a, b) => a - b));
};

initialize();

const dfs = (start) => {
   visited[start] = true;
   dfsResult.push(start);
   while (adj[start] && adj[start].length !== 0) {
      let next = adj[start].shift();
      if (visited[next] === false) {
         visited[next] = true;
         dfs(next);
      }
   }
};

const bfs = (start, queue) => {
   visited[start] = true;
   if (bfsResult.length === 0) {
      bfsResult.push(start);
   }
   while (adj[start] && adj[start].length !== 0) {
      let next = adj[start].shift();
      if (visited[next] === false) {
         visited[next] = true;
         bfsResult.push(next);
         queue.push(next);
      }
   }
   while (queue.length !== 0) {
      let top = queue.shift();
      bfs(top, queue);
   }
};

dfs(V);
console.log(dfsResult.join(' '));
initialize();
bfs(V, [V]);
console.log(bfsResult.join(' '));
