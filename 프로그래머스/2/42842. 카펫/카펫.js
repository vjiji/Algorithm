function solution(outer, inner) {
  let innerY = [1];
  for (let i = 2; i <= inner / 2; i++) {
    if (!(inner % i)) innerY.push(i);
  }
  innerY.push(inner);

  let answer = [];
  let n = 0;
  do {
    if ((inner / innerY[n] + 2) * (innerY[n] + 2) === outer + inner)
      answer.push(inner / innerY[n] + 2, innerY[n] + 2);
    n++;
  } while (!answer.length && n < innerY.length);
  return answer;
}