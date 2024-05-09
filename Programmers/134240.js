// main start!

food = [1, 3, 4, 6]; // TC no.1
// food = [1, 7, 1, 2];		// TC no.2
console.log(solution(food));

// main end!

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

//스프레드 문법 활용
// return res + '0' + [...res].reverse().join('');
