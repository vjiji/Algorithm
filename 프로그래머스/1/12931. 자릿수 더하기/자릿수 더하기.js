function solution(N) {
  const NstrArr = String(N).split("");
  return Number(NstrArr.reduce((a, b) => Number(a) + Number(b)));
}