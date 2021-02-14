module.exports = function(namespace) {
      return function() {
          console.log(namespace, Array.prototype.slice.bind(arguments)().join(' '))
      }
  }