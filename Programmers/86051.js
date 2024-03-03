// main start!

numbers = [1, 2, 3, 4, 6, 7, 8, 0]; // TC no.1
numbers = [5, 8, 4, 0, 6, 7, 9]; // TC no.2
console.log(solution(numbers));

// main end!

function solution(numbers) {
  return 45 - numbers.reduce((a, b) => a + b);
}
