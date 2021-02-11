//multiply each value with its index

const numArray = [1, 2, 3, 4, 5];

function mapWithReduce(arr, fn) {
  const resArray = [];
  arr.reduce(function (accumulator, currentValue, index) {
    resArray.push(fn(currentValue, index));
  }, 0);
  return resArray;
}

const res = mapWithReduce(numArray, function (currentValue, index) {
  return currentValue * index;
});

console.log(res);
//[0,2,6,12,20]
