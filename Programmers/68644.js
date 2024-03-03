// main start!

numbers = [1, 3, 5, 7, 1];
// numbers = [2, 1, 3, 4, 1]; // TC no.1
// numbers = [5,0,2,7];		// TC no.2
console.log(solution(numbers));

// main end!

function solution(numbers) {
  let answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let n = i + 1; n < numbers.length; n++) {
      answer.push(numbers[i] + numbers[n]);
    }
  }

  const sortedAnswer = [...new Set(answer)].sort((a, b) =>
    a > b ? 1 : a < b ? -1 : 0
  );

  return sortedAnswer;
}
