function solution(numbers, limit, power) {
  if (numbers === 1) {
    return 1;
  }
  let sum = 1;
  let i = 2;
  do {
    let count = 2;
    for (let n = 2; n <= Math.sqrt(i); n++) {
      if (!(i % n)) {
        count++;
        if (i / n !== n) count++;
      }
    }
    sum += count > limit ? power : count;
    i++;
  } while (i < numbers + 1);
  return sum;
}
