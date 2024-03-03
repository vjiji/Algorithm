s = "1 2 3 4";
// s = "-1 -2 -3 -4";
// s = "-1 -1";
// main start!

console.log(solution(s));

// main end!

function solution(s) {
  const sArr = s.split(" ").sort((a, b) => b - a);

  return [sArr[sArr.length - 1], sArr[0]].join(" ");
}
