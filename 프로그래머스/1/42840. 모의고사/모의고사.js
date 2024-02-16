function solution(answers) {
  const aPattern = [1, 2, 3, 4, 5];
  const bPattern = [2, 1, 2, 3, 2, 4, 2, 5];
  const cPattern = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const arr = [aPattern, bPattern, cPattern];
  let scores = new Array(arr.length).fill(0);

  arr.forEach((pattern, i) => {
    answers.forEach((answer, idx) => {
      if (answer === pattern[idx % pattern.length]) scores[i]++;
    });
  });

  const topScore = Math.max(...scores);
  const topScorer = [];
  scores.forEach((score, idx) => {
    if (score === topScore) {
      topScorer.push(idx + 1);
    }
  });
  return topScorer;
}