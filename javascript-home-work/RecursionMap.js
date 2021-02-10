function recursiveMap(array, func, outputArray) {
  if (array.length == 0) return outputArray;
  outputArray.push(func(array[0]));
  recursiveMap(array.slice(1), func, outputArray);
  return outputArray;
}
const array = [1, 2, 3, 4, 5];

const complementedArray = recursiveMap(
  array,
  function (item) {
    return -1 * item;
  },
  []
);

console.log(complementedArray);
