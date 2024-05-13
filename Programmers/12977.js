// main start!

// nums = [1, 2, 3, 4]; // TC no.1
nums = [1, 2, 7, 6, 4]; // TC no.2
console.log(solution(nums));

// main end!

function solution(nums) {
  let answer = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let n = i + 1; n < nums.length; n++) {
      for (let m = n + 1; m < nums.length; m++) {
        const sum = nums[i] + nums[n] + nums[m];

        const findFactors = (num) => {
          let count = 0;

          for (let x = 2; x < num; x++) {
            !(num % x) && count++;
          }
          return count;
        };

        !findFactors(sum) && answer++;
      }
    }
  }
  return answer;
}

// 8:55
