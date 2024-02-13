function solution(n) {
  let tritNum = [];
  let i = 1;
  while (3 ** i <= n) {
    i++;
  }
  let numThird = i - 1;
  for (let y = 0; y < numThird + 1; y++) {
    tritNum.push(Math.floor(n / 3 ** (numThird - y)));
    n = n % 3 ** (numThird - y);
  }
  let answer = 0;
  tritNum.map((num, i) => (answer += num * 3 ** i));

  return answer;
}