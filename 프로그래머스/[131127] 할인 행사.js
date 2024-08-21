function solution(want, number, discount) {
  var answer = 0;
  const wantTable = {}; // 품목별 구매 원하는 수량
  let discountTable = Array.from({ length: discount.length - 9 }).fill({}); // 날짜별로 열흘동안의 품목별 할인 수량 정리

  for (let i = 0; i < want.length; i++) {
    wantTable[want[i]] = number[i];
  }

  for (let startDay = 0; startDay < discountTable.length; startDay++) {
    for (let day = startDay; day < startDay + 10; day++) {
      discountTable[startDay] = {
        ...discountTable[startDay],
        [discount[day]]: discountTable[startDay][discount[day]]
          ? discountTable[startDay][discount[day]] + 1
          : 1,
      };
    }
  }

  for (const discountData of discountTable) {
    let n = 0; // 할인 품목과 구매를 원하는 품목의 수량이 일치하는 경우
    for (const [product, size] of Object.entries(wantTable)) {
      if (discountData[product] === size) {
        n++;
      } else {
        break;
      }
    }
    if (n === Object.keys(wantTable).length) answer++;
  }

  return answer;
}

var want = ["banana", "apple", "rice", "pork", "pot"];
var number = [3, 2, 2, 2, 1];
var discount = [
  "chicken",
  "apple",
  "apple",
  "banana",
  "rice",
  "apple",
  "pork",
  "banana",
  "pork",
  "rice",
  "pot",
  "banana",
  "apple",
  "banana",
];

console.log(solution(want, number, discount));