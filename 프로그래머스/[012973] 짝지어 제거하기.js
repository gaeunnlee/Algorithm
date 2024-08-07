function solution(s) {
  var string = s.split("");
  var stack = [];
  var top = -1;
  string.forEach((v) => {
    if (top > -1 && stack[top] === v) {
      stack.pop();
      top--;
    } else {
      stack.push(v);
      top++;
    }
  });
  return top === -1 ? 1 : 0;
}