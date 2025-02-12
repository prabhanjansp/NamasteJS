const arr = [5, 1, 3, 2, 6];
function double(x) {
  return x * 2;
}
function triple(x) {
  return x * 3;
}
function binary(x) {
  return x.toString(2);
}
const output = arr.map(double);
const output1 = arr.map(triple);
const output2 = arr.map(binary);
console.log(output);
console.log(output1);
console.log(output2);
