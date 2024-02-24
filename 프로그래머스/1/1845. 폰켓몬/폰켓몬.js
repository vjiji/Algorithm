function solution(nums) {
  let count = [];
  nums
    .sort((a, b) => a - b)
    .forEach((num) =>
      count[count.length - 1] !== num ? count.push(num) : false
    );
  return count.length < nums.length / 2 ? count.length : nums.length / 2;
}
