function solution(name, yearning, photo) {
  const score = {};
  name.forEach((man, i) => (score[man] = yearning[i]));

  let answer = photo.map((pic, i) =>
    pic.reduce((acc, cur) => (score[cur] ? score[cur] + acc : acc), 0)
  );
  return answer;
}