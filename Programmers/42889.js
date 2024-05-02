// main start!

// N = 5; // TC no.1
// stages = [2, 1, 2, 6, 2, 4, 3, 3]; // TC no.1
N = 4; // TC no.2
stages = [4, 4, 4, 4, 4]; // TC no.2
console.log(solution(N, stages));

// main end!

function solution(N, stages) {
  let allStages = Array.from({ length: N }, (_, i) => i + 1);
  let userStages = new Set(stages.sort((a, b) => a - b));
  let userCount = stages.length;
  let failPer = [];

  for (const stage of userStages) {
    if (stage > N) break;
    let nextStages = stages.filter((num) => num !== stage);
    failPer.push([stage, (userCount - nextStages.length) / userCount]);
    userCount = nextStages.length;
    stages = nextStages;
    allStages = allStages.filter((n) => n !== stage);
  }
  let answer = failPer.sort((a, b) => b[1] - a[1]);
  return [...answer.map((n) => n[0]), ...allStages];
}
