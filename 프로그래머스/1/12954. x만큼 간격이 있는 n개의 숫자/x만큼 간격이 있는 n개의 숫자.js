function solution(x, n) {
  let arr = new Array(n).fill(0);
  return arr.map((num, i) => x * (i + 1));
}