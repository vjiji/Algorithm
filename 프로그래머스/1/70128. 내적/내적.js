function solution(a, b) {
  let sum = 0;
  a.map((num, i) => (sum += num * b[i]));
  return sum;
}
