function solution(n, computers) {
  var answer = 0;
  const visited = Array(n).fill(false);

  function dfs(node) {
    visited[node] = true;
    for (let i = 0; i < n; i++) {
      if (node !== i && computers[node][i] && !visited[i]) {
        dfs(i);
      }
    }
  }

  for (let i = 0; i < n4; i++) {
    if (!visited[i]) {
      dfs(i);
      answer++;
    }
  }
  return answer;
}
