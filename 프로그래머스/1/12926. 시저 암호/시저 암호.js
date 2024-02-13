function solution(s, n) {
  const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
  let strArr = s.split("");
  let answer = "";
  for (let i = 0; i < strArr.length; i++) {
    if (!strArr[i].trim().length) {
      answer += " ";
    } else {
      const newIndex = ALPHABET.indexOf(strArr[i].toLowerCase()) + n;
      const newChar = ALPHABET[newIndex <= 25 ? newIndex : newIndex - 26];
      const isLowerChar = strArr[i].toLowerCase() === strArr[i];
      answer += isLowerChar ? newChar : newChar.toUpperCase();
    }
  }
  return answer;
}