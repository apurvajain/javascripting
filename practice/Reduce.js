const arr = [5, 7, 1, 8, 4];

const sum = arr.reduce(function (accumulator, currentValue) {
  //console.log(accumulator);
  return accumulator + currentValue;
});
console.log(sum);

const sum2 = arr.reduce(function (accumulator, currentValue) {
  //console.log(accumulator);
  return accumulator + currentValue;
}, 2);
console.log(sum2);
