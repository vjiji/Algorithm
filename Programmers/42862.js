// main start!

n = 10; // TC no.1
lost = [1, 3, 4, 7, 8, 11]; // TC no.1
reserve = [2, 3, 4, 5, 9, 10]; // TC no.1
// n = 5; // TC no.2
// lost = [2, 4]; // TC no.2
// reserve = [3]; // TC no.2
// n = 3; // TC no.3
// lost = [3]; // TC no.3
// reserve = [1]; // TC no.3
// n = 8;
// lost = [1, 2, 6, 8];
// reserve = [5, 5, 7];

console.log(solution(n, lost, reserve));

// main end!

function solution(n, lost, reserve) {
  const _lost = lost
    .filter((num) => !reserve.includes(num))
    .sort((a, b) => a - b);
  let _reserve = reserve
    .filter((num) => !lost.includes(num))
    .sort((a, b) => a - b);
  let students = n - _lost.length;

  for (let i = 0; i < _lost.length; i++) {
    for (let n = 0; n < _reserve.length; n++) {
      if (_reserve[n] > _lost[i] + 1) {
        _reserve.splice(0, n);
        break;
      }
      if (_reserve[n] + 1 === _lost[i] || _reserve[n] - 1 === _lost[i]) {
        students++;
        _reserve.shift();
        break;
      }
    }
  }
  return students;
}
