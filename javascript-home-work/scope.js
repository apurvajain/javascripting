
// global scope  - includes firstNum, secondNum, and the
// function number
var firstNum = 1;
function number() {
    // local scope for number - only thirdNum is local to number()
    // because it was explicitly declared. secondNum is implicitly declared in the
    // the global scope.
secondNum = 2;
    var thirdNum = 3;
    return firstNum + secondNum;
  }
// what do we have access to in the global scope?
number(); // 3
firstNum; // 1
secondNum; // 2
thirdNum; // Reference Error: thirdNum is not defined






a = 1;
var b = 2;
function outer(z) {
  b = 3;
  c = 4;
  var d = 5;
  e = 6;
function inner() {
    var e = 0;
    d = 2 * d;
    return d;
  }
  return inner();
  var e;
}
outer(1);