function solution(s) {
  var answer = 0;
  const arr = s.split("");
  const left = ["{", "[", "("];
  const right = ["}", "]", ")"];
  for (let x = 0; x < s.length; x++) {
    const stack = [];
    let isWrong = false;
    for (let i = x, j = 0; j < s.length; j++, i++) {
      const b = arr[i % s.length];
      const isLeft = left.includes(b);
      if (isLeft) {
        stack.push(b);
      } else if (stack.length === 0) {
        isWrong = true;
        break;
      } else {
        const pop = stack.pop();
        const leftIndex = left.findIndex((v) => v === pop);
        if (b !== right[leftIndex]) {
          isWrong = true;
          break;
        }
      }
    }
    if (stack.length === 0 && !isWrong) answer++;
  }
  return answer;
}