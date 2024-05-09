// main start!

a = 2; // TC no.1
b = 1; // TC no.1
n = 20; // TC no.1
a = 3; // TC no.2
b = 1; // TC no.2
n = 20; // TC no.2
console.log(solution(a, b, n));

// main end!

function solution(a, b, n) {
  let count = 0;
  let i = 0;
  do {
    count += b * Math.floor(n / a);
    n = b * Math.floor(n / a) + (n % a);
    i++;
  } while (n >= a);
  return count;
}
