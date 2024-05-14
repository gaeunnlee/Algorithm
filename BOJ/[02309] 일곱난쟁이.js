const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
let input = fs.readFileSync(file).toString().trim().split('\n').map(Number);

const getCombinations = function (arr, selectNumber) {
   const results = [];
   if (selectNumber === 1) return arr.map((el) => [el]);
   arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1);
      const combinations = getCombinations(rest, selectNumber - 1);
      const attached = combinations.map((el) => [fixed, ...el]);
      results.push(...attached);
   });
   return results;
};

for (caseItem of getCombinations(input, 7)) {
   let sum = caseItem.reduce((acc, cur) => acc + cur, 0);
   if (sum === 100) {
      console.log(caseItem.sort((a, b) => a - b).join('\n'));
      break;
   }
}
