// main start!

strings = ["sun", "bed", "car"]; // TC no.1
n = 1; // TC no.1
// strings = ["abce", "abcd", "cdx"];		// TC no.2
// n = 2;		// TC no.2
console.log(solution(strings, n));

// main end!

function solution(strings, n) {
  let result = [];

  for (let i = 0; i < strings.length; i++) {
    strings[i] = strings[i][n] + strings[i];
  }

  strings.sort();

  for (let j = 0; j < strings.length; j++) {
    strings[j] = strings[j].replace(strings[j][0], "");
    result.push(strings[j]);
  }

  return result;
}
