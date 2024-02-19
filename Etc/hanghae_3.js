s = "2 3 4 5";
// s = "15 3 10 9 7 8";
// s = "97 75 88 99 95 92 73";
// s = "1 2 3 5 8 9";
// s = "1 4 8 12 22 23 0";
s = "3 5 7 11 13 17 23 29 41 22 1 0";
// s = "2 4";
// s = "1 2 3 4";
// s = "1 2 4";

//return : '(소수가 아닌 수의 최소값) (소수의 최대값)'
//소수 : 1과 자신만을 약수로 가지는 1보다 큰 자연수

console.log("test case : " + s);
console.log(solution(s));

function solution(s) {
  let answer = "";
  let numbers = s.split(" ").sort((a, b) => a - b);

  for (let i = 0; i < numbers.length; i++) {
    if (answer.length) break;

    for (let n = 2; n < numbers[i]; n++) {
      if (!(numbers[i] % n)) {
        answer += numbers[i];
        numbers.reverse();
        break;
      }
    }
  }

  for (let i = 0; i < numbers.length; i++) {
    for (let n = 2; n < numbers[i] + 1; n++) {
      if (!(numbers[i] % n)) {
        if (numbers[i] / 1 === 2) {
          answer += ` ${numbers[i]}`;
          return answer;
        } else {
          break;
        }
      }

      if (n >= numbers[i] / 2) {
        answer += ` ${numbers[i]}`;
        return answer;
      }
    }
  }
  return;
}
