function solution(k, score) {
  let topK = [score[0]];
  let scoreLimit = [score[0]];
  for (let i = 1; i < score.length; i++) {
    if (i < k) {
      topK.push(score[i]);
      topK.sort((a, b) => (a > b ? -1 : a < b ? 1 : 0));
    } else {
      if (score[i] > topK[k - 1]) {
        topK.pop();
        topK.push(score[i]);
        topK.sort((a, b) => (a > b ? -1 : a < b ? 1 : 0));
      }
    }
    scoreLimit.push(topK[topK.length - 1]);
  }

  return scoreLimit;
}