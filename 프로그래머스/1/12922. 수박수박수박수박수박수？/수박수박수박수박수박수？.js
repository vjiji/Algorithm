function solution(n) {
  const str = "수박";
  return n % 2 ? str.repeat(Math.ceil(n / 2)).slice(0, n) : str.repeat(n / 2);
}
