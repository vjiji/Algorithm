function solution(s) {
  let arrows = 0;
  for (let i = 0; i < s.length; i++) {
    s[i] === "(" ? arrows++ : arrows--;
    if (arrows < 0) return false;
  }
  return arrows === 0 ? true : false;
}