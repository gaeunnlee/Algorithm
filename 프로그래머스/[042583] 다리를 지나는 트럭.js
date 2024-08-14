function solution(bridge_length, weight, truck_weights) {
  var answer = 0; // 시간 (초)
  var bridge = []; // 다리 위에 있는 트럭 인덱스 리스트
  var truck_positions = Array(truck_weights.length).fill(0); // 트럭들의 위치
  var truck_index = 0; // 대기 중인 트럭 인덱스
  var arrived_truck_length = 0; // 도착한 트럭 수

  while (arrived_truck_length < truck_weights.length) {
    answer++;
    let trucks_weight_bridge = // 다리 위에 있는 트럭들의 무게
      bridge.length > 0
        ? bridge.reduce((acc, cur) => acc + truck_weights[cur], 0)
        : 0;

    if (
      trucks_weight_bridge + truck_weights[truck_index] <= weight && // 다리 위 트럭 무게와 다음 트럭 무게가 최대 무게보다 작고
      bridge.length <= bridge_length - 1 // 다리 위 트럭 수가 다리 위 최대 트럭 수보다 1 작아야 다리에 트럭 push 
    ) {
      bridge.push(truck_index);
      truck_index++; // 다음 대기 트럭 인덱스 증가
    }

    for (let i = 0; i < bridge.length; i++) { // 다리 위에 있는 트럭들의 위치를 1씩 이동
      truck_positions[bridge[i]] += 1;
    }

    if (truck_positions[bridge[0]] === bridge_length) { // 가장 앞의 트럭의 위치가 다리 길이와 같으면 도착한 것이므로 도착 트럭 수 증가 후 bridge에서 제거 
      arrived_truck_length += 1;
      bridge.shift();
    }
  }

  return answer + 1;
}

console.log(solution(2, 10, [7, 4, 5, 6]));
