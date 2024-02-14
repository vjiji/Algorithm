function solution(array, commands) {
  let answer = [];
  commands.map((idxArr) => {
    const sliceNum = array
      .slice(idxArr[0] - 1, idxArr[1])
      .sort((a, b) => (a > b ? 1 : a < b ? -1 : 0));
    answer.push(sliceNum[idxArr[2] - 1]);
  });
  return answer;
}