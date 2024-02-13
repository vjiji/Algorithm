function solution(num) {
  const reverseN = String(num)
    .split("")
    .sort((a, b) =>
      Number(a) > Number(b) ? -1 : Number(a) < Number(b) ? 1 : 0
    );
  return Number(reverseN.join(""));
}