var slice = Array.prototype.slice
    
function logger(namespace) {
  // SOLUTION GOES HERE
 
//   console.log(namespace)
  return function() {
      console.log(namespace, (slice.call(arguments).join(' ')))
  }
}

module.exports = logger