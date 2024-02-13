function solution(arr) {
  return arr.reduce((cur, index) => cur + index) / arr.length;
}