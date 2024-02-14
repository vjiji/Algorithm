function solution(s) {
  const numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  for (let i = 0; i < numbers.length; ) {
    if (s.includes(numbers[i])) {
      s = s.replace(numbers[i], i);
    } else {
        i++
    }
  }
  return s/1;
}