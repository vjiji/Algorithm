// main start!

A = [1, 4, 2]; // TC no.1
B = [5, 4, 4]; // TC no.1
A = [1, 2]; // TC no.2
B = [3, 4]; // TC no.2
// A = [1, 2, 4, 10];
// B = [2, 3, 6, 9];
console.log(solution(A, B));

// main end!

function solution(A, B) {
  let aNums = A.sort((a, b) => a - b);
  let bNums = B.sort((a, b) => b - a);

  return aNums.reduce((acc, cur, i) => acc + cur * bNums[i], 0);
}
