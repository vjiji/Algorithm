function solution(X, Y) {
  const numArr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
  let answer = "";
  numArr.forEach((num) => {
    const [countX, countY] = [X.split(num).length - 1, Y.split(num).length - 1];
    const numLength = countX <= countY ? countX : countY;
    answer += String(num).repeat(numLength);
  });

  return !answer ? "-1" : !(answer / 1) ? "0" : answer;
}