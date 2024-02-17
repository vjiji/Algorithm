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