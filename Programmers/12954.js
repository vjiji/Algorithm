// main start!

x = 2; // TC no.1
n = 5; // TC no.1
// x = 4;		// TC no.2
// n = 3;		// TC no.2
// x = -4;		// TC no.3
// n = 2;		// TC no.3
console.log(solution(x, n));

// main end!

function solution(x, n) {
  let arr = new Array(n).fill(0);
  return arr.map((num, i) => x * (i + 1));
}
