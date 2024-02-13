function solution(arr) {
  let delNum = [...arr].sort((a, b) => (a > b ? -1 : a < b ? 1 : 0)).pop();

  return arr.length === 1 ? [-1] : arr.filter((num) => num !== delNum);
}
