
function solution(num) {
  const strNum = String(num).split("");
  return num % strNum.reduce((a, b) => Number(a) + Number(b)) === 0;
}