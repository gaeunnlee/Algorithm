function solution(progresses, speeds) {
  var answer = [];
  var day = 0;
  var deployNum = 0;

  var daysLeft = progresses.map((task, i) =>
    Math.ceil((100 - task) / speeds[i])
  );

  while (daysLeft.length) {
    var head = daysLeft.shift() - day;
    answer[deployNum] = 1;

    while (head >= daysLeft[0] - day) {
      answer[deployNum] += 1;
      daysLeft.shift();
    }
    
    deployNum++;
    day += head;
  }
  return answer;
}

console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
