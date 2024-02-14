function solution(a, b) {
  if (a === b) {
    return a;
  }
  let sum = 0;
  let smallNum = a < b ? a : b;
  const largeNum = a > b ? a : b;
  let i = 0;
  do {
    sum += smallNum + i;
    i++;
  } while (i + smallNum <= largeNum);
  return sum;
}