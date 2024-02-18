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