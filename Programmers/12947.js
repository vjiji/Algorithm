// main start!
// const n = 13;
// const n = 18
const n = 132;
// const n = 12;
console.log(solution(n));

// main end!

function solution(num) {
  let sum = 0;
  let n = num;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }

  return num % sum === 0;
}
