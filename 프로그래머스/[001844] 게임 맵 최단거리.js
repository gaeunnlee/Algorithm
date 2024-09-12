function solution(maps) {
  var answer = -1;
  const [Y, X] = [maps.length, maps[0].length];
  var queue = [[0,0,0]];
  const dir = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  function bfs(y, x, acc) {
    for (const [dy, dx] of dir) {
      const [ey, ex] = [y + dy, x + dx];
      if (ey < 0 || ey >= Y || ex < 0 || ex >= X || maps[ey][ex] === 0)
        continue;
      queue.push([ey, ex, acc + 1]);
      maps[ey][ex] = 0;
    }
  }

  while (queue.length > 0) {
    const [ny, nx, dist] = queue.shift();
    if (ny === Y - 1 && nx === X - 1) {
      answer = dist + 1;
      return answer;
    }
    bfs(ny, nx, dist);
  }

  return answer;
}
