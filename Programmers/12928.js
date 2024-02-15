/**
문제 설명
정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

제한 사항
n은 0 이상 3000이하인 정수입니다.

 */
// main start!

// n = 12; // TC no.1
// n = 5; // TC no.2
n = 12;
console.log(solution(n));

// main end!

function solution(n) {
  let answer = [1, n];
  if (n === 0 || n === 1) {
    return n;
  } else {
    for (let i = 2; i < n; i++) {
      let m = n;
      let x = 1;
      while (m % i === 0) {
        answer.push(i ** x);
        if (i ** x === m / i) {
          break;
        }
        answer.push(m / i);
        m = m / i;
        x++;
      }
    }
  }
  let arr = new Set(answer);
  return [...arr].reduce((a, b) => a + b);
}
