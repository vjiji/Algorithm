// main start!

// X = "100"; // TC no.1
// Y = "2345"; // TC no.1
X = "100"; // TC no.2
Y = "203045"; // TC no.2
// X = "100"; // TC no.3
// Y = "123450"; // TC no.3
// X = "12321"; // TC no.4
// Y = "42531"; // TC no.4
// X = "5525";		// TC no.5
// Y = "1255";		// TC no.5
// X = "9877777777777777643";
// Y = "987654";
// X = "987654";
// Y = "98777777777777777643";
// X =
//   "9999909999988989888889898989898989898989898989898989898989898989898987976626545326311".repeat(
//     100
//   );
// Y =
//   "989898989898989898989898989898989898989898989898989898989872361233333".repeat(
//     100
//   );
console.log(solution(X, Y));

// main end!

function solution(X, Y) {
  const numArr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
  let answer = "";
  numArr.forEach((num) => {
    const [countX, countY] = [X.split(num).length - 1, Y.split(num).length - 1];
    const numLength = countX <= countY ? countX : countY;
    answer += String(num).repeat(numLength);
  });

  return !answer ? "-1" : !(answer / 1) ? "0" : answer;
}
