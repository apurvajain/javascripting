function duckCount() {
    console.log(arguments)
    console.log(Array.prototype.slice.call(arguments))
    return Array.prototype.slice.call(arguments).filter(function(obj) {
      return Object.prototype.hasOwnProperty.call(obj, 'quack')
    }).length
  }
  
module.exports = duckCount