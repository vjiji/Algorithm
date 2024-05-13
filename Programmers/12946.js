// main start!
// n = 2;s
// arr = [[1,2]/[1,3][2,3]]
// n = 3;
// arr= [[1,3]/[1,2][3,2]/[1,3][2,1][2,3][1,3]]
// n = 4; // TC no.1
// arr = [[1,2]/[1,3][2,3]/[1,2][3,1][3,2][1,2]/[1,3][2,3][2,1][3,1][2,3],[1,2][1,3][2,3]]
console.log(solution(n));

// main end!

function solution(n) {
  let arr1 = Array.from({ length: n }, (_, i) => n - i);
  let arr2 = [];
  let arr3 = [];

  let answer = [];

  function checkLast() {
    return arr1.length ? calc1() : arr2.length ? calc2() : null;
  }

  function calc1() {
    if (arr1.length === n) {
      if (!(n % 2)) {
        arr2.push(arr1.pop());
        answer.push([1, 2]);
      } else {
        arr3.push(arr1.pop());
        answer.push([1, 3]);
      }
    } else if (!arr2.length || !arr3.length) {
      //두 줄
      if (!arr2.length) {
        arr2.push(arr1.pop());
        answer.push([1, 2]);
      } else {
        arr3.push(arr1.pop());
        answer.push([1, 3]);
      }
    } else {
      //세 줄
    }
    checkLast();
  }

  function calc2() {
    //
  }
  checkLast();

  return answer;
}
