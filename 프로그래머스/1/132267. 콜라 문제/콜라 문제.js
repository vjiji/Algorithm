function solution(a, b, n) {
  let count = 0;
  let i = 0;
  do {
    count += b * Math.floor(n / a);
    n = b * Math.floor(n / a) + (n % a);
    i++;
  } while (n >= a);
  return count;
}