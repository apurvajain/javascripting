// some is used to  test if any of the elements in the array pass the test
const temps1 = [100, 66, 60, 90, 80];
const temps2 = [1, 6, 6, 9, 8];

function isAboveFifty(temperatures) {
  return temperatures > 50;
}
const isAboveFifty1 = temps1.some(isAboveFifty);
const isAboveFifty2 = temps2.some(isAboveFifty);

console.log(isAboveFifty1);
console.log(isAboveFifty2);
