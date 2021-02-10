function mapWithReduce(array, func) {
  const outputArray = [];
  array.reduce(function (accumulator, currentValue) {
    accumulator = func(currentValue, accumulator);
    outputArray.push(accumulator);
    return accumulator;
  }, 0);
  return outputArray;
}

const array = [1, 2, 3, 4, 5];

const mappedArray = mapWithReduce(array, function (currentValue, accumulator) {
  return accumulator + currentValue * 2;
});

console.log(mappedArray);
