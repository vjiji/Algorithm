function solution(arr, divisor) {
  const divArr = arr.filter((num) => !(num % divisor));
  return divArr.length ? divArr.sort((a,b)=>a>b?1:a<b?-1:0) : [-1];
}