module.exports = function arrayMap(arr, fn) {
  return arr.reduce((accumulator, currentValue, index, arr) => {
    accumulator.push(fn(currentValue));
    return accumulator;
  }, []);
};
