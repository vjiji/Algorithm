function solution(food) {
  const foodList = food.slice(1, food.length);
  let leftFood = "";
  let rightFood = "";

  const repeatFood = (repeatNum, foodNum) =>
    String(foodNum).repeat(Math.floor(repeatNum / 2));

  foodList.map((food, i) => (leftFood += repeatFood(food, i + 1)));
  foodList
    .reverse()
    .map((food, i) => (rightFood += repeatFood(food, foodList.length - i)));

  return leftFood + 0 + rightFood;
}