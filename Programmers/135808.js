// main start!

k = 3; // TC no.1
m = 4; // TC no.1
// score = [1, 2, 3, 1, 2, 3, 1];		// TC no.1
// k = 9; // TC no.2
// m = 9; // TC no.2
score = [4, 1, 2, 2, 4, 4, 4]; // TC no.2
console.log(solution(k, m, score));

// main end!

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
