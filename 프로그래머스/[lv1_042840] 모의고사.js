function solution(answers) {
  var answer = [];
  var scores = Array(3).fill(0);

  var students = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  students.forEach((studentAnswers, studentId) =>
    answers.forEach(
      (answer, answerIndex) =>
        studentAnswers[answerIndex % studentAnswers.length] === answer &&
        scores[studentId]++
    )
  );

  const max  = Math.max(...scores)
  
  scores.forEach(
    (score, studentId) =>
        max === score && answer.push(studentId + 1)
  );

  return answer;
}

solution(answers)
