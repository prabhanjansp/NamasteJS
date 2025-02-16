//slower appraoch

function add(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}
let t1 = performance.now();
console.log(add(1000000000));
let t2 = performance.now();
console.log(`time taken to  complete the task ${(t2 - t1) / 1000} seconds`);
/************************************************************************************* */
// faster apprach
function addSum(n) {
  return n * (n + 1) / 2;
}
let t11 = performance.now();
console.log(addSum(1000000000));
let t22 = performance.now();
console.log(`time taken to  complete the task ${(t22 - t11) / 1000} seconds`);
