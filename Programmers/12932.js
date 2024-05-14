// main start!

n = 10000; // TC no.1
console.log(solution(n));

// main end!

function solution(n) {
  return String(n)
    .split("")
    .reverse()
    .map((num) => Number(num));
}
