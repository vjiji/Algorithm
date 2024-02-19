// checkIn = [9, 9, 8, 8, 7, 8, 9];
// checkOut = [21, 25, 30, 29, 22, 23, 30];
checkIn = [9, 7, 8, 9, 7, 9, 8];
checkOut = [23, 22, 26, 26, 29, 27, 22];
checkIn = [9, 9, 9, 9, 7, 9, 8];
checkOut = [23, 23, 30, 28, 30, 23, 23];

console.log(solution(checkIn, checkOut));

// 일주일 시간이 담긴 checkout 배열을 reduce 메서드로 (오늘 체크아웃 시간 - 체크인 시간)을 계산해 더한 값을 리턴한다.
function solution(checkIn, checkOut) {
  let weekTime = checkOut.reduce((sum, curOutTime, i) => {
    curOutTime = curOutTime >= 29 ? 21 : curOutTime;
    return sum + (curOutTime - checkIn[i]);
  }, 0);
  return weekTime;
}
