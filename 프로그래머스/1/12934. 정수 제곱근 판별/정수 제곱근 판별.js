function solution(num) {
  const sqrtNum = Math.sqrt(num);
  return sqrtNum - Math.floor(sqrtNum) === 0 ? (sqrtNum + 1) ** 2 : -1;
}