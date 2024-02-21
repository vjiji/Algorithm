// main start!

arr = [1, 1, 3, 3, 0, 1, 1]; // TC no.1
arr = [4, 4, 4, 3, 3]; // TC no.2
console.log(solution(arr));

// main end!

function solution(arr) {
  const answer = arr.filter((num, i) => num !== arr[i - 1]);

  return answer;
}
