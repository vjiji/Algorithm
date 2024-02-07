function solution(common) {
  answer =
    (common[0] + common[2]) / 2 === common[1]
      ? common[common.length - 1] + common[1] - common[0]
      : (common[1] / common[0]) * common[common.length - 1];
  return answer;
}