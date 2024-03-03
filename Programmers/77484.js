// main start!

lottos = [44, 1, 0, 0, 31, 25]; // TC no.1
win_nums = [31, 10, 45, 1, 6, 19]; // TC no.1
// lottos = [12, 19, 13, 0, 0, 0]; // TC no.2
// win_nums = [12, 19, 20, 40, 15, 25]; // TC no.2
lottos = [45, 4, 35, 20, 3, 9]; // TC no.3
win_nums = [20, 9, 3, 45, 4, 35]; // TC no.3
console.log(solution(lottos, win_nums));

// main end!

function solution(lottos, win_nums) {
  let lossNum = 0;
  let rightNum = 0;
  lottos.forEach((num) => {
    !num && lossNum++;
    win_nums.includes(num) && rightNum++;
  });

  const currentRank = 7 - rightNum < 6 ? 7 - rightNum : 6;
  const maxRank = 7 - rightNum - lossNum < 6 ? 7 - rightNum - lossNum : 6;

  return [maxRank, currentRank];
}
