function duckCount() {
    return Array.prototype.slice.call(arguments).filter(function (obj) {
      return Object.prototype.hasOwnProperty.call(obj, "quack");
    }).length;
  }
  
  module.exports = duckCount;
  
  // slice method can be called to convert Array-like 
  // objects/collections to a new Array. You just bind the 
  // method to the object.
  
  // function list() {
  //   return Array.prototype.slice.call(arguments)
  // }
  
  // let list1 = list(1, 2, 3) // [1, 2, 3]