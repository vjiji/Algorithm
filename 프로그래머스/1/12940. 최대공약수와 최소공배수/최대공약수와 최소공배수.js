
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
