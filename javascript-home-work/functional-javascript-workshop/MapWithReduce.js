module.exports = function arrayMap(arr, fn) {
    // SOLUTION GOES HERE
    var  newArr = [];
    arr.reduce((accumulator, current) => {
        newArr.push(fn(current))
    },0)
    return newArr;

  }