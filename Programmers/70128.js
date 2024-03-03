// main start!

a = [1, 2, 3, 4]; // TC no.1
b = [-3, -1, 0, 2]; // TC no.1
// a = [-1,0,1];		// TC no.2
// b = [1,0,-1];		// TC no.2
console.log(solution(a, b));

// main end!

function solution(a, b) {
  let sum = 0;
  a.map((num, i) => (sum += num * b[i]));
  return sum;
}
