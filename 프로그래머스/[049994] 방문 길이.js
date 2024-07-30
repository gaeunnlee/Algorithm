function solution(dirs) {
  var answer = 0;
  const dir = dirs.split("");
  const visited = Array.from(Array(11), () =>
    Array.from(Array(11), () => Array(4).fill(false))
  );

  const move = {
    R: [0, 1],
    D: [-1, 0],
    L: [0, -1],
    U: [1, 0],
  };

  const moveIndex = {
    R: 0,
    D: 1,
    L: 2,
    U: 3,
  };

  let [y, x] = [5, 5];

  for (const d of dir) {
    const [ny, nx] = [y, x];
    [y, x] = [y + move[d][0], x + move[d][1]];
    if (y > 10 || x > 10 || y < 0 || x < 0) {
        [y,x] = [ny,nx]
        continue
    }
    const v = visited[ny][nx][moveIndex[d]];
    if (!v) {
      answer++;
      visited[ny][nx][moveIndex[d]] = true;
      switch(d) {
        case 'R':
            visited[y][x][moveIndex['L']] =true;
            break;
        case 'D':
            visited[y][x][moveIndex['U']] =true;
            break;
        case 'U':
            visited[y][x][moveIndex['D']] =true;
            break;        
        case 'L':
            visited[y][x][moveIndex['R']] =true;
            break; 
      }
    }
  }
  return answer;
}

solution("UDU");
