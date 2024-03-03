// main start!

s = "110010101001"; // TC no.1
// s = "01110";		// TC no.2
// s = "1111111";		// TC no.3
console.log(solution(s));

// main end!

function solution(s) {
  let answer = [0, 0];
  function carlc(s) {
    if (s === "1") return answer;
    const only1Num = [...s].filter((num) => num === "1").length;
    answer[0]++;
    answer[1] += s.length - only1Num;

    return carlc(only1Num.toString(2));
  }
  return carlc(s);
}
