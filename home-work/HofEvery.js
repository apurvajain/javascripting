// Every is used to test if all elements in the array pass the test
const temps1 = [100, 66, 60, 90, 80];
const temps2 = [11, 66, 60, 90, 80];

function isAboveFifty(temperatures) {
  return temperatures > 50;
}
const isAboveFifty1 = temps1.every(isAboveFifty);
const isAboveFifty2 = temps2.every(isAboveFifty);

console.log(isAboveFifty1);
console.log(isAboveFifty2);
