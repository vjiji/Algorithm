function solution(price, money, count) {
  let total = -money;
  let i = 0;
  while (i < count) {
    total += price * (i + 1);
    i++;
  }
  return total > 0 ? total : 0;
}