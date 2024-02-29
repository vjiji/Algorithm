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
