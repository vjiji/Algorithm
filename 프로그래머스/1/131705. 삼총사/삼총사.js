function solution(number) {
  let count = 0;

  for (let i = 0; i < number.length; i++) {
    for (let n = i + 1; n < number.length; n++) {
      for (let m = n + 1; m < number.length; m++) {
        if (number[i] + number[n] + number[m] === 0) count += 1;
      }
    }
  }

  return count;
}