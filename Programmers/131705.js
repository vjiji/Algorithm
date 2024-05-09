// 11:15

// main start!

// number = [-2, 3, 0, 2, -5]; // TC no.1
// number = [-3, -2, -1, 0, 1, 2, 3]; // TC no.2
// number = [-1, 1, -1, 1]; // TC no.3
console.log(solution(number));

// main end!

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

/*
// 재귀
function solution(number) {
    let result = 0;

    const combination = (current, start) => {
        if (current.length === 3) {
            result += current.reduce((acc, cur) => acc + cur, 0) === 0 ? 1 : 0;
            return;
        }

        for (let i = start; i < number.length; i++) {
            combination([...current, number[i]], i + 1);
        }
    }
    combination([], 0);
    return result;
}
*/
