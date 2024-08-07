function solution(board, moves) {
  var answer = 0;
  var stack = [];
  var positions = [];
  for (let j = 0; j < board[0].length; j++) {
    for (let i = 0; i < board.length; i++) {
      if (board[i][j] !== 0) {
        positions[j] = i;
        break;
      }
    }
  }
  for (const move of moves) {
    let m = move - 1;
    const doll = board[positions[m]][m];
    if (!doll) continue;
    if (doll === stack[stack.length - 1]) {
      stack.pop();
      answer += 2;
    } else {
      stack.push(doll);
    }
    board[positions[m]][m] = 0;
    if (positions[m] < board.length - 1) positions[m]++;
  }
  return answer;
}