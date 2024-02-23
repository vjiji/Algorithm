function solution(n, arr1, arr2) {
  let answer = arr1.map((num, i) => {
    const binaryNum = num.toString(2) / 1;
    const binaryNum2 = arr2[i].toString(2) / 1;
    const sum = String(binaryNum + binaryNum2);
    let hash = " ".repeat(n - sum.length);
    [...sum].forEach((num) => (hash += Number(num) > 0 ? "#" : " "));
    return hash;
  });
  return answer;
}