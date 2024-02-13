function solution(s) {
  let answer = "";
  const strArr = s.split(" ");

  for (let i = 0; i < strArr.length; i++) {
    if (!strArr[i].trim().length) {
      answer += strArr[i];
    } else {
      strArr[i]
        .split("")
        .map(
          (char, i) =>
            (answer += !(i % 2) ? char.toUpperCase() : char.toLowerCase())
        );
    }
    answer += " ";
  }
  return answer.slice(0, -1);
}
