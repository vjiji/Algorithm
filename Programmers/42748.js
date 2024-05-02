// main start!

array = [1, 5, 2, 6, 3, 7, 4]; // TC no.1
commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
]; // TC no.1
console.log(solution(array, commands));

// main end!

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

// // 구조분해 할당 : 가독성
// const [sPosition, ePosition, position] = command
