function solution(n, m, section) {
  let count = 1;
  let startingWall = section[0] - 1;
  section.forEach((currentWall) => {
    if (currentWall - startingWall > m) {
      count++;
      startingWall = currentWall - 1;
    }
  });
  return count;
}