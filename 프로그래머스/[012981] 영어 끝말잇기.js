function solution(n, words) {
  var answer = [0, 0];
  let endChar = null;
  let usedWord = [];

  words.every((word, index) => {
    if (index > 0) {
      if (word[0] !== endChar || usedWord.includes(word)) {
        answer = [(index % n) + 1, parseInt(index / n + 1)];
        return false;
      }
    }
    usedWord.push(word);
    endChar = word[word.length - 1];
    return true;
  });

  return answer;
}