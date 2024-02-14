function solution(t, p) {
  let numArr = [];
  for (let i = 0; i < t.length - p.length + 1; i++) {
    numArr.push(t.slice(i, p.length + i));
  }
  const answer = numArr.filter((num) => num <= p);
  return answer.length;
}