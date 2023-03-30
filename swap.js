function swap(x, y) {
  [x, y] = [y, x];
  return [x, y];
}

let x = 5;
let y = 6;

console.log(swap(x, y));
