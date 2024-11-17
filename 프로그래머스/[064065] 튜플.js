function solution(s) {
    const numbers = s.slice(2, -2).split("},{");
    const sorted = numbers.sort((a,b) => a.length - b.length);
    const answer = [];
    
    for (const  element of sorted) {
        const nums = element.split(",");
        for ( const num of nums) {
            if (!answer.includes(Number(num))){
                answer.push(Number(num));
            }
        }
    }
    return answer
}