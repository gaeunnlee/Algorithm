function solution(s) {
    let stack = [];
    let count = 0;
    
    for (let i = 0; i < s.length ; i++){
        stack.push(s[i]);
        
        const x = stack.filter((item) => item === stack[0]);
        const y = stack.filter((item) => item !== stack[0]);
        
        if(x.length === y.length){
            count += 1;
            stack = [];
        }
    }
    
    if (stack.length !== 0){
        count += 1;
    }
    return count;
}