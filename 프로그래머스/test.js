// 루트 노드를 찾는 함수
function find(parents, x) {
  // 만약 x의 부모가 자기 자신이면, 즉 x가 루트 노드라면
  if (parents[x] === x) {
    return x;
  }
  // 그렇지 않다면 x의 부모를 찾아서 parents[x]에 저장
  // 그 부모 노드의 루트 노드를 찾아서 parents[x]에 저장
  // 이 부분이 압축 경로에 해당
  parents[x] = find(parents, parents[x]);

  return parents[x]; // parents[x]를 반환
}

// 두 개의 집합을 합치는 함수
function union(parents, x, y) {
  const root1 = find(parents, x); // x가 속한 집합의 루트 노드 찾기
  const root2 = find(parents, y); // y가 속한 집합의 루트 노드 찾기

  parents[root2] = root1; // y가 속한 집합을 x가 속한 집합에 합침
}

function solution(k, operations) {
  // k는 노드의 개수
  // 처음에는 각 노드가 자기 자신을 부모로 가지도록 초기화
  const parents = Array.from({ lengh: k }, (_, i) => i);
  let n = k; // 집합의 개수를 저장할 변수, 처음에는 모든 노드가 서로 다른 집합에 있으므로 k

  for (const op of operations) {
    // operations 배열에 있는 연산들을 하나씩 처리
    if (op[0] === "u") {
      // 'u' 연산이면
      union(parents, op[1], op[2]);
    } else if (op[0] === "f") {
      // 'f' 연산이면
      find(parents, op[1]); // op[1]이 속한 집합의 루트 노드를 찾음
    }

    // 모든 노드의 루트 노드를 찾아서 집합의 개수를 계산
    n = new Set(Array.from({ length: k }, (_, i) => find(parents, i))).size;
  }

  return n;
}
