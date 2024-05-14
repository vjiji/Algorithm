// main start!

// n = 6; // TC no.1
n = 16; // TC no.2
// n = 626331; // TC no.3
console.log(solution(n));

// main end!

function solution(n) {
  for (let i = 0; i < 501; i++) {
    if (i === 500) return -1;
    if (n === 1) return i;
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = 3 * n + 1;
    }
  }
}
