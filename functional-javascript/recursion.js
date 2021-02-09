function reduce(arr, fn, initial) {
    return (function red(index, value) {
      if (index > arr.length - 1) return value 
      return red(index + 1, fn(value, arr[index], index, arr))
    })(0, initial) 
  }
  
  module.exports = reduce