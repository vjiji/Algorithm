function solution(n) {
  let i = 2;

  while ((n - 1) % i !== 0) {
    i++;
  }
  return i;
}