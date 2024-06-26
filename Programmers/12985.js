// main start!

N = 8; // TC no.1
A = 4; // TC no.1
B = 7; // TC no.1
console.log(solution(N, A, B));

// main end!

function solution(N, A, B) {
  let count = 1;
  function nextMatch(A, B) {
    count++;
    return Math.ceil(A / 2) === Math.ceil(B / 2)
      ? count - 1
      : nextMatch(Math.ceil(A / 2), Math.ceil(B / 2));
  }

  return nextMatch(A, B);
}
