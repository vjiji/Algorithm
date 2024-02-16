function solution(a, b) {
  const DAY_NAME = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
  const monthDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const fullDays =
    a === 1 ? 0 : monthDays.slice(0, a - 1).reduce((acc, cur) => acc + cur);
  const totalDays = fullDays + b;
  return DAY_NAME[totalDays % 7];
}