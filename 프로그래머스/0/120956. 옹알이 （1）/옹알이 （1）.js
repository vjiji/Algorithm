const words = ["aya", "ye", "woo", "ma"];

function solution(babbling) {
  let count = 0;
  for (let i = 0; i < babbling.length; i++) {
    let currentBab = babbling[i];
    for (let x = 0; x < words.length; x++) {
      currentBab = currentBab.split(words[x]).join(" ");
    }
    if (!currentBab.split(" ").join("")) {
      count += 1;
    }
  }

  return count;
}
