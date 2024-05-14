/*
문제 설명
정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

제한 조건
num은 int 범위의 정수입니다.
0은 짝수입니다.
*/

// main start!
// const num = 0;
const num = 1;
// const num = 2
// const num = 3
console.log(solution(num));

// main end!

function solution(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}
