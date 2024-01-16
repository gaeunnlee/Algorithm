let selfNumberArr = Array.from({ length: 10000 }, (value, index) => index + 1);
let constructorArr = [];

for (let i = 1; i <= 10000; i++) {
  let result = 0;
  let digit = String(i).length;
  for (let j = 0; j < digit; j++) {
    result += Number(String(i)[j]);
  }
  result += i;
  constructorArr.push(result);
}

selfNumberArr = selfNumberArr.filter((item) => !constructorArr.includes(item));
selfNumberArr.forEach((item) => console.log(item));