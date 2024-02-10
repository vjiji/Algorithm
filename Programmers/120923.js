/*
문제 설명
연속된 세 개의 정수를 더해 12가 되는 경우는 3, 4, 5입니다. 두 정수 num과 total이 주어집니다. 연속된 수 num개를 더한 값이 total이 될 때, 정수 배열을 오름차순으로 담아 return하도록 solution함수를 완성해보세요.

제한사항
1 ≤ num ≤ 100
0 ≤ total ≤ 1000
num개의 연속된 수를 더하여 total이 될 수 없는 테스트 케이스는 없습니다.
*/

// main start!
// num = 3; // TC no.1
// total = 12; // TC no.1
// num = 5; // TC no.2
// total = 15; // TC no.2
num = 8; // TC no.3
total = 52; // TC no.3
// num = 5; // TC no.4
// total = 5; // TC no.4
console.log(solution(num, total));

// main end!

function solution(num, total) {
  let answer = [];
  if (num % 2 !== 0) {
    for (let i = 0; i < num; i++) {
      answer.push(total / num - (num - 1) / 2 + i);
    }
  } else {
    for (let i = 0; i < num; i++) {
      answer.push(Math.floor(total / num) - num / 2 + 1 + i);
    }
  }

  return answer;
}
