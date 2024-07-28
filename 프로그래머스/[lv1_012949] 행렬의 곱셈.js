function solution(arr1, arr2) {
  var answer = [[]];
  answer = arr1.map((column) =>
    arr2[0].map((_, j) =>
      column.reduce((acc, cur, k) => {
        return (acc += cur * arr2[k][j]);
      }, 0)
    )
  );
  return answer;
}

