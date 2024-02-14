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