// main start!

s = "banana"; // TC no.1
// s = "foobar"; // TC no.2
s = "aaaaaaaaaab";
console.log(solution(s));

// main end!

function solution(s) {
  const sArr = [...s];
  let charArr = [];
  let charIndexArr = [];
  let answer = [];
  sArr.forEach((char, i) => {
    if (charArr.indexOf(char) === -1) {
      charArr.push(char);
      charIndexArr.push(i);
      answer.push(-1);
    } else {
      answer.push(i - charIndexArr[charArr.indexOf(char)]);
      charIndexArr[charArr.indexOf(char)] = i;
    }
  });
  return answer;
}
