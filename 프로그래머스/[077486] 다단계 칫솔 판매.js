function solution(enroll, referral, seller, amount) {
  var answer = [];
  var data = {};

  for (let i = 0; i < enroll.length; i++) {
    const member = enroll[i];
    data[member] = {
      referral: referral[i],
      profit: 0,
    };
  }

  for (let j = 0; j < seller.length; j++) {
    let member = seller[j];
    let profit = amount[j] * 100;
    data[member].profit += profit;

    while (member) {
      const referral = data[member].referral;
      data[member].profit -= Math.floor(profit * 0.1);
      if (referral === "-") break;
      data[referral].profit += Math.floor(profit * 0.1);
      profit *= 0.1;
      if (profit < 1) break;
      member = referral;
    }
  }

  answer = Object.values(data).map(({ profit }) => profit);

  return answer;
}
