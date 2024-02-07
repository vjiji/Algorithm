function solution(s){
    let answer = 0;
    let lowS = s.toLowerCase();
    for (let i = 0; i < s.length; i++) {
        if(lowS[i] === 'p') {
            answer += 1
        } 
        
        if(lowS[i] === 'y') {
            answer -= 1
        } 
    }   
    
    return answer === 0 
}