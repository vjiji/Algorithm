// main start!

price = 2; // TC no.1
money = 20; // TC no.1
count = 4; // TC no.1
console.log(solution(price, money, count));

// main end!

function solution(price, money, count) {
  let total = -money;
  let i = 0;
  while (i < count) {
    total += price * (i + 1);
    i++;
  }
  return total > 0 ? total : 0;
}
