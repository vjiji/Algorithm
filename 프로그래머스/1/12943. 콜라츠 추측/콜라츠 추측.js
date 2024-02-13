function solution(n) {
  for (let i = 0; i < 501; i++) {
    if (i === 500) return -1;
    if (n === 1) return i;
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = 3 * n + 1;
    }
  }
}