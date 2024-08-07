function solution(prices) {
  var answer = Array(prices.length).fill(0);
  var stack = [];
  var top = -1;
  for (let i = 0; i < prices.length; i++) {
    if (prices[stack[top]] > prices[i]) {
      for (let j = top; j >= 0; j--) {
        if (prices[stack[j]] > prices[i]) {
          answer[stack[j]] = i - stack[j];
          stack.pop();
          top--;
        } else {
          break;
        }
      }
    }
    stack.push(i);
    top++;
  }
  while (stack.length !== 0) {
    const p = stack.pop();
    answer[p] = prices.length - p - 1;
  }
  return answer;
}

console.log(solution([1, 6, 9, 5, 3, 2, 7]));
