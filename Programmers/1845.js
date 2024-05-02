// main start!

nums = [3, 1, 2, 3]; // TC no.1
nums = [3, 3, 3, 2, 2, 4, 5, 6]; // TC no.2
// nums = [3,3,3,2,2,2];		// TC no.3
console.log(solution(nums));

// main end!

function solution(nums) {
  let count = [];
  nums
    .sort((a, b) => a - b)
    .forEach((num) =>
      count[count.length - 1] !== num ? count.push(num) : false
    );
  return count.length < nums.length / 2 ? count.length : nums.length / 2;
}

/*
// Set 자료구조 사용 풀이
function solution(nums) {
  const max = nums.length / 2;
  const arr = [...new Set(nums)];

  return arr.length > max ? max : arr.length
}
*/
function counter() {
  let count = 0;

  return {
    increase: function () {
      return ++count;
    },
  };
}

const c = counter();

console.log(c.increase());
console.log(c.increase());

const arr = Array.from({ length: 10 }, (_, i) => i + 1);
console.log(arr);
