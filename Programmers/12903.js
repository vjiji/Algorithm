// main start!

// s = "abcde"; // TC no.1
s = "qwer"; // TC no.2
console.log(solution(s));

// main end!

function solution(s) {
  const idx = s.length / 2;
  return !(s.length % 2) ? s[idx - 1] + s[idx] : s[Math.floor(idx)];
}
