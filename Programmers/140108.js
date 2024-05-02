// main start!

s = "aaaaaaaaaa`"; // TC no.1
s = "abracadabra"; // TC no.2

console.log(solution(s));

// main end!

function solution(s) {
  if (s.length === 1) {
    return 1;
  }

  var answer = 0;
  let count = 1;
  let char = s[0];
  for (let i = 1; i < s.length; i++) {
    char === s[i] ? count++ : count--;
    if (!count) {
      answer++;
      char = s[i + 1];
    }

    if (i === s.length - 1 && count) {
      answer++;
    }
  }

  return answer;
}
