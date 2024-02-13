
function solution(phone_number) {
  const starCount = phone_number.length - 4;
  console.log(starCount);
  return "*".repeat(starCount) + phone_number.slice(-4);
}