// main start!

d = [1, 3, 2, 5, 4]; // TC no.1
budget = 9; // TC no.1
d = [2, 2, 3, 3]; // TC no.2
budget = 10; // TC no.2
console.log(solution2(d, budget));

// main end!

// function solution(d, budget) {
//   let answer = 0;
//   for (let num of d.sort((a, b) => a - b)) {
//     budget -= num;
//     if (budget < 0) break;
//     answer++;
//   }
//   return answer;
// }

function solution2(d, budget) {
  const dSort = d.sort((a, b) => a - b);
  let i = 0;
  do {
    budget -= dSort[i];
    i++;
  } while (budget >= 0);
  return i - 1;
}
