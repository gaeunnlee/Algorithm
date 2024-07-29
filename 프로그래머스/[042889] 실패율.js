function solution(N, stages) {
  var answer = [];
  var peopleInStage = Array(N + 2).fill(0);
  var fail = Array(N + 2).fill(0);
  let temp = stages.length;

  for (const s of stages) {
    peopleInStage[s]++;
  }

  peopleInStage.forEach((people, index) => {
    if (index === N + 1) return;
    fail[index] = people / temp;
    temp -= people;
  });

  Object.entries(fail)
  .sort(([_, a], [__, b]) => b - a)
  .forEach(([stage, _]) => {
    stage = +stage
    if (stage !== 0 && stage !== N + 1)
      answer.push(stage);
  })

  return answer;
}