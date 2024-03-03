// main start!

n = 125; // TC no.1
// n = 3; // TC no.2
console.log(solution(n));

// main end!

function solution(n) {
  let tritNum = [];
  let i = 1;
  while (3 ** i <= n) {
    i++;
  }
  let numThird = i - 1;
  console.log(numThird);
  for (let y = 0; y < numThird + 1; y++) {
    tritNum.push(Math.floor(n / 3 ** (numThird - y)));
    n = n % 3 ** (numThird - y);
  }
  let answer = 0;
  tritNum.map((num, i) => (answer += num * 3 ** i));

  return answer;
}
/*
// toString 문법
const solutionB = (n) => {
  console.log(...n.toString(3));
  return parseInt([...n.toString(3)].reverse().join(""), 3);
};
console.log(solutionB(n));

*/
