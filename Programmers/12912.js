// main start!

// a = 3; // TC no.1
// b = 5; // TC no.1
// a = 3;		// TC no.2
// b = 3;		// TC no.2
a = 5; // TC no.3
b = 3; // TC no.3
console.log(solution(a, b));

// main end!

function solution(a, b) {
  if (a === b) {
    return a;
  }
  let sum = 0;
  let smallNum = a < b ? a : b;
  const largeNum = a > b ? a : b;
  let i = 0;
  do {
    sum += smallNum + i;
    i++;
  } while (i + smallNum <= largeNum);
  return sum;
}
