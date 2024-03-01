function solution(A, B) {
  let aNums = A.sort((a, b) => a - b);
  let bNums = B.sort((a, b) => b - a);

  return aNums.reduce((acc, cur, i) => acc + cur * bNums[i], 0);
}