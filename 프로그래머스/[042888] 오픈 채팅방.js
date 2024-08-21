function solution(record) {
  var answer = [];
  let userTable = {};

  for (const i of record) {
    const [command, uid, nickname] = i.split(" ");
    // 최종적으로 바뀐 닉네임을 바탕으로 기록이 남으므로
    // uid에 대한 닉네임은 userTable에 저장하고
    // answer에는 uid 변수와 메시지만 push한다.
    switch (command) {
      case "Enter":
        userTable[uid] = nickname;
        answer.push([uid, "님이 들어왔습니다."]);
        break;
      case "Leave":
        answer.push([uid, "님이 나갔습니다."]);
        break;
      case "Change":
        userTable[uid] = nickname;
        break;
    }
  }

  // 최종 userTable의 닉네임을 바탕으로 map 함수를 통해 answer 배열에 재할당한다.
  answer = answer.map(([uid, msg]) => `${userTable[uid]}${msg}`);
  return answer;
}

console.log(
  solution(
    [
      "Enter uid1234 Muzi",
      "Enter uid4567 Prodo",
      "Leave uid1234",
      "Enter uid1234 Prodo",
      "Change uid4567 Ryan",
    ],
    [
      "Prodo님이 들어왔습니다.",
      "Ryan님이 들어왔습니다.",
      "Prodo님이 나갔습니다.",
      "Prodo님이 들어왔습니다.",
    ]
  )
);