// main start!

sizes = [
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
]; // TC no.1
sizes = [
  [10, 7],
  [12, 3],
  [8, 15],
  [14, 7],
  [5, 15],
]; // TC no.2
sizes = [
  [14, 4],
  [19, 6],
  [6, 16],
  [18, 7],
  [7, 11],
]; // TC no.3
console.log(solution(sizes));

// main end!

function solution(sizes) {
  let w = 0;
  let h = 0;
  sizes.map((n) => {
    let resize = n.sort((a, b) => (a < b ? 1 : a > b ? -1 : 0));
    w = resize[0] > w ? resize[0] : w;
    h = resize[1] > h ? resize[1] : h;
  });
  return w * h;
}
