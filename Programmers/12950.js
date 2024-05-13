// main start!

arr1 = [
  [1, 2],
  [2, 3],
]; // TC no.1
arr2 = [
  [3, 4],
  [5, 6],
]; // TC no.1
// arr1 = [[1],[2]];		// TC no.2
// arr2 = [[3],[4]];		// TC no.2
console.log(solution(arr1, arr2));
// main end!

function solution(arr1, arr2) {
  let answer = [[]];
  for (let i = 0; i < arr1.length; i++) {
    answer[i] = [];
    for (let j = 0; j < arr1[i].length; j++) {
      answer[i].push(arr1[i][j] + arr2[i][j]);
    }
  }
  return answer;
}

/*
// 재귀함수 풀이
function solution(arr1, arr2) {
  return arr1.map((el, i) => {
      return typeof el == 'object' ? solution(el, arr2[i]) : el + arr2[i]
  })
} 
*/
