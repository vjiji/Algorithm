// main start!

left = 13; // TC no.1
right = 17; // TC no.1
// left = 24;		// TC no.2
// right = 27;		// TC no.2
console.log(solution(left, right));

// main end!

function cal(num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) count += 1;
  }
  return count;
}

function solution(left, right) {
  let sum = 0;
  for (let i = left; i < right + 1; i++) {
    cal(i) % 2 ? (sum -= i) : (sum += i);
  }
  return sum;
}
