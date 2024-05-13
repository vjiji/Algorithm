// main start!

k = 3; // TC no.1
score = [10, 100, 20, 150, 1, 100, 200]; // TC no.1
k = 4; // TC no.2
score = [0, 300, 40, 300, 40, 70, 150, 50, 500, 1000]; // TC no.2
// k = 4;
// score = [10, 0, 0, 20, 0, 0, 0, 0];
console.log(solution2(k, score));
console.log(solution(k, score));
console.log(Math.min(...score));
// main end!

function solution2(k, score) {
  let topK = [];
  let scoreLimit = [score[0]];

  score.reduce((acc, cur) => {
    topK.push(cur);
    topK.sort((a, b) => b - a);
    if (topK.length > k - 1) topK.pop();
    scoreLimit.push(topK[topK.length - 1]);
    return topK;
  }, []);

  return scoreLimit;
}

/**
//reduce 사용
function solution(k, score) {
    var answer = [];

    return score.reduce((acc, cur) => {
        answer.push(cur);
        answer = answer.sort((a, b) => b - a).slice(0, k);
        return [...acc, Math.min(...answer)];
    }, []);
}
 */

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
