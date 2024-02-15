// main start!

arr = [5, 9, 7, 10]; // TC no.1
divisor = 5; // TC no.1
arr = [2, 36, 1, 3]; // TC no.2
divisor = 1; // TC no.2
// arr = [3, 2, 6]; // TC no.3
// divisor = 10; // TC no.3
console.log(solution(arr, divisor));

// main end!

function solution(arr, divisor) {
  const divArr = arr.filter((num) => !(num % divisor));
  return divArr.length ? divArr.sort() : [-1];
}
