const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let words = fs.readFileSync(file).toString().trim().split("\n").slice(1);

words = Array(...new Set(words)).sort((a, b) => {
    if (a.length === b.length) {
        console.log(a,b)
        return [a,b].sort()[0] === b ? 1 : 0
    } else {
        return a.length - b.length
    }
});

for (let i = 1; i <= words[words.length - 1].length; i++) { 
    let temp = words.filter((el) => el.length === i);
    answer.push(...temp.sort());
  }

console.log(words);
