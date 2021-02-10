function recursiveReduce(array, func, accumulator) {
  if (array.length === 0) {
    return accumulator;
  }
  accumulator = func(accumulator, array[0]);
  return recursiveReduce(array.slice(1), func, accumulator);
}
const array = [1, 2, 3, 4, 5];

const arraySum = recursiveReduce(
  array,
  function (accumulator, currentItem) {
    return accumulator + currentItem;
  },
  0
);

console.log(arraySum);
