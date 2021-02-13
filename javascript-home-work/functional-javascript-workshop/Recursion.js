function reduce(arr, fn, inital) {
  if (arr.length === 0) return inital;
  inital = fn(inital, arr[0]);
  return reduce(arr.slice(1), fn, inital);
}
module.exports = reduce;
