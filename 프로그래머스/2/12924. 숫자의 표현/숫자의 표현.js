function solution(n) {
  let sum = 0;
  let answer = 0;
  for (let i = 0; i < n + 1; i++) {
    sum += i;
    if (n - sum <= 0) {
      return answer;
    }
    !((n - sum) % (i + 1)) && answer++;
  }
}