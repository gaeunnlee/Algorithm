function solution(enroll, referral, seller, amount) {
  var answer = [];
  var data = {};
  for (let i = 0; i < enroll.length; i++) {
    data[enroll[i]] = {
      ref: referral[i],
      profit: 0,
    };
  }
  for (let j = 0; j < seller.length; j++) {
    let member = seller[j];
    let profit = Math.floor(amount[j] * 100);
    data[member].profit += profit;
    while (true) {
      data[member].profit = Math.floor(
        data[member].profit - Math.floor(profit * 0.1)
      );
      if (data[member].ref !== "-") {
        member = data[member].ref;
        profit = Math.floor(profit * 0.1);
        if (profit < 1) break;
        data[member].profit += profit;
      } else {
        break;
      }
    }
  }
  answer = Object.values(data).map(({ profit }) => profit);
  return answer;
}
