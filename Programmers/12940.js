// main start!

n = 18; // TC no.1
m = 24; // TC no.1
// n = 2;		// TC no.2
// m = 5;		// TC no.2
console.log(solution(n, m));

// main end!

function solution(n, m) {
  function divisor(num) {
    let arr = [];
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) arr.push(i);
    }
    return arr.filter((num) => num !== 1);
  }
  let nDivisor = divisor(n);
  let mDivisor = divisor(m);

  let duplDivisor = [];
  for (let i = 0; i < nDivisor.length; i++) {
    if (mDivisor.includes(nDivisor[i])) {
      duplDivisor.push(nDivisor[i]);
    }
  }
  const minDuplNum = duplDivisor.length
    ? duplDivisor[duplDivisor.length - 1]
    : 1;
  const maxDuplNum = minDuplNum !== 1 ? (n / minDuplNum) * m : n * m;
  return [minDuplNum, maxDuplNum];
}

/*
// 유클리드 호제법(최대공약수)
function greatestCommonDivisor(a, b) {
  return b ? greatestCommonDivisor(b, a % b) : Math.abs(a);
}
function leastCommonMultipleOfTwo(a, b) {
  return (a * b) / greatestCommonDivisor(a, b);
}
function gcdlcm(a, b) {
  return [greatestCommonDivisor(a, b), leastCommonMultipleOfTwo(a, b)];
}

*/
