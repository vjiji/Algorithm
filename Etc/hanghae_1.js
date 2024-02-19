total = 900;
total = 550;
total = 320;
total = 160;
// total = 990;
// total = 400;
// total = 10;
// total = 0;

console.log(solution(total));

function solution(total) {
  let exchange = 1000 - total;
  let count = 0;
  const coins = [500, 100, 50, 10];

  let i = 0;
  do {
    count += Math.floor(exchange / coins[i]);
    exchange = exchange % coins[i];
    i++;
  } while (exchange);
  return count;
}
