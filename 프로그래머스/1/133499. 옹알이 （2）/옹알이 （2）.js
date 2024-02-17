function solution(babbling) {
  let words = ["aya", "ye", "woo", "ma"];
  let count = 0;
  babbling.forEach((bab) => {
    for (let i = 0; i < words.length; i++) {
      if (bab.includes(words[i].repeat(2))) return;
      bab = bab.split(words[i]).join(" ");
      if (!bab.trim().length) {
        count++;
        return;
      }
    }
  });
  return count;
}
