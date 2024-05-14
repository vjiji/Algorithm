// main start!

// arr = [4, 3, 2, 1]; // TC no.1
// arr = [10];
arr = [1, 2, 3, 4]; // TC no.2
console.log(solution(arr));

// main end!

function solution(arr) {
  let delNum = [...arr].sort((a, b) => (a > b ? -1 : a < b ? 1 : 0)).pop();

  return arr.length === 1 ? [-1] : arr.filter((num) => num !== delNum);
}
