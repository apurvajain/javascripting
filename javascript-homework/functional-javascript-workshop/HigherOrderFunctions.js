// Implement a function that takes a function as its first argument,
// a number num as its second argument, then executes the passed in function num times.
//Implemented using recursion

function repeat(func, num) {
  if (num === 0) {
    return;
  }
  func();
  return repeat(func, num - 1);
}

module.exports = repeat;
