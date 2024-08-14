function solution(cards1, cards2, goal) {
  var answer = "";
  while (goal.length) {
    const word = goal.shift();
    if (cards1[0] === word) {
      cards1.shift();
    } else if (cards2[0] === word) {
      cards2.shift();
    } else {
      answer = "No";
      return answer;
    }
  }
  answer = "Yes";
  return answer;
}

console.log(
  solution(
    ["i", "drink", "water"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"]
  )
);
