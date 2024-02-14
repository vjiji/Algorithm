function solution(s) {
  const idx = s.length / 2;
  return !(s.length % 2) ? s[idx - 1] + s[idx] : s[Math.floor(idx)];
}
