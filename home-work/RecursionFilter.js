function recursiveFilter(array, func, outputArray) {
  if (array.length === 0) return outputArray;
  if (func(array[0])) {
    outputArray.push(array[0]);
  }
  recursiveFilter(array.slice(1), func, outputArray);
  return outputArray;
}
const array = [11, 2, 3, 4, 5];
const ItemsGreaterThan3 = recursiveFilter(
  array,
  function (item) {
    return item > 3;
  },
  []
);

console.log(ItemsGreaterThan3);
