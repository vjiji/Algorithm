// main start!

// n = 3; // TC no.1
n = 100000; // TC no.2
console.log(solution(n));

// main end!

// function solution(n) {
//   let count = 1;
//   function pattern(num1, num2) {
//     count++;
//     return count === n
//       ? num1 + num2
//       : pattern(num2 % 1234567, (num1 + num2) % 1234567);
//   }
//   return pattern(0, 1);
// }

// function solution(n) {
//   let count = 1;
//   let num1 = 0;
//   let num2 = 1;
//   let answer = 1;

//   function sum() {
//     count++;
//     answer = (num1 + num2) % 1234567;
//     num1 = num2;
//     num2 = answer;
//     return count === n ? answer : sum();
//   }
//   return sum();
// }

function solution(n) {
  let answer = 0;
  let f1 = 0;
  let f2 = 1;

  for (let i = 2; i <= n; i++) {
    answer = (f1 + f2) % 1234567;
    f1 = f2;
    f2 = answer;
  }

  return answer;
}
