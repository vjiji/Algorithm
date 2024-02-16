function solution(k, m, score) {
  if (score.length < m) return 0;
  let total = 0;
  score.sort((a, b) => b - a);
  let i = 1;
  do {
    total += score[m * i - 1] * m;
    i++;
  } while (i * m <= score.length);

  return total;
}