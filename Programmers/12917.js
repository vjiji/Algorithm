// main start!

s = "zZbcdefg"; // TC no.1
console.log(solution(s));

// main end!

function solution(s) {
  return s
    .split("")
    .sort((a, b) => (a > b ? -1 : a < b ? 1 : 0))
    .join("");
}
