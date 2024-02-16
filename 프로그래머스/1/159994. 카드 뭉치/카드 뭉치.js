function solution(cards1, cards2, goal) {
  let i = 0;
  do {
    if (cards1[0] === goal[0]) {
      goal.reverse().pop();
      goal.reverse();
      cards1.reverse().pop();
      cards1.reverse();
      i++;
    } else if (cards2[0] === goal[0]) {
      goal.reverse().pop();
      goal.reverse();
      cards2.reverse().pop();
      cards2.reverse();
      i++;
    } else {
      return "No";
    }
  } while (goal.length);
  return "Yes";
}
