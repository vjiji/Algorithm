function solution(num, total) {
  let answer = [];
  if (num % 2 !== 0) {
    for (let i = 0; i < num; i++) {
      answer.push(total / num - (num - 1) / 2 + i);
    }
  } else {
    for (let i = 0; i < num; i++) {
      answer.push(Math.floor(total / num) - num / 2 + 1 + i);
    }
  }

  return answer;
}
