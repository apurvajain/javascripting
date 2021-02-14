function reduce(arr, fn, initial) {
     if(arr.length === 0) return initial;
     initial = fn(initial, arr[0],0, arr )
     arr = arr.slice(1)
     return reduce(arr,fn,initial)
  }
  
  module.exports = reduce

