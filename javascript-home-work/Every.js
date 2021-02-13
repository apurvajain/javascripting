//every() - method checks if all elements in an array passes the test provided in function
//every() - returns boolean value

let ages = [32, 33, 16, 40];

function checkAdult(age) {
  return age >= 18;
}
// This will return false since age 16 is below the criteria mention above i.e age equal or above 18
const isAdult = ages.every(checkAdult);
console.log(isAdult);