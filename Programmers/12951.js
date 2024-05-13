s = "3people unFollowed me";
s = "for the      last week 3way";
s = "1HELLO 1WORLD";

// main start!
console.log(solution(s), solution(s).length === s.split(" ").join(" ").length);
// main end!

function solution(s) {
  return s
    .split(" ")
    .map((str) => {
      return Math.abs(-str[0]) >= 0
        ? [...str.toLowerCase()].join("")
        : str.trim().length
        ? [
            str[0].toUpperCase(),
            ...str.slice(1, str.length).toLowerCase(),
          ].join("")
        : "";
    })
    .join(" ");
}
