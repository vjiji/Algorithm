function solution(n) {
  let answer = [1, n];
  if (n === 0 || n === 1) {
    return n;
  } else {
    for (let i = 2; i < n; i++) {
      let m = n;
      let x = 1;
      while (m % i === 0) {
        answer.push(i ** x);
        if (i ** x === m / i) {
          break;
        }
        answer.push(m / i);
        m = m / i;
        x++;
      }
    }
  }
  let arr = new Set(answer);
  return [...arr].reduce((a, b) => a + b);
}