// main start!
const n = 121;
console.log(solution(n));

// main end!

function solution(num) {
  const sqrtNum = Math.sqrt(num);
  return sqrtNum - Math.floor(sqrtNum) === 0 ? (sqrtNum + 1) ** 2 : -1;
}
