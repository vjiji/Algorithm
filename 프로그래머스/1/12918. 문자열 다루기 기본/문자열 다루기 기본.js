function solution(s) {
  if (!(s.length === 4 || s.length === 6)) return false;
  return Math.abs(Number(s.split("").reduce((a, b) => a - b))) >= 0;
}
