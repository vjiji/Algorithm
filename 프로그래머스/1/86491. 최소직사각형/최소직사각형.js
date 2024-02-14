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
