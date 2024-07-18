const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
let [N, ...graph] = fs.readFileSync(file).toString().trim().split('\n');
N = +N
graph = graph.map(v => v.split('').map(Number))
let visited = Array.from(Array(N), () => Array(N).fill(false))
let temp = 0;
let array = [];

const dfs = (y,x) => {
    if (visited[y][x]) return;
    let value = graph[y][x]
    visited[y][x] = true;
    if (value !== 1) return;
    temp = temp + 1

    if ( x < N - 1) dfs(y, x + 1)
    if ( y < N - 1) dfs(y + 1, x)
    if ( x > 0 ) dfs(y, x - 1)
    if ( y > 0 ) dfs(y - 1, x)
}

for (let y= 0 ; y < N; y++) {
    for (let x = 0; x < N; x++) {
        if (visited[y][x]) continue
        temp = 0;
        dfs(y,x)
        if (temp !== 0) {
            array.push(temp)
        }
    }
}

console.log(array.length)
console.log(array.sort((a, b) => a - b).join('\n'))