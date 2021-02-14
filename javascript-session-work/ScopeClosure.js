// Closure: even though add has finished executing, inner function can access counter variable

var add = (function () {
    var counter = 0;
    //once exec finishes, add exits. destroy counter variable
    //but since we returning func, that func has ability to store counter varb
    return function () {counter += 1; return counter}
  })();

  console.log(add); //prints var add= function () {counter += 1; return counter}, where counter avlb through closure, counter=0
  //so add will everytime call the above function
 
  var k= add(); 
  console.log(k);
  k= add();
  console.log(k);
  k= add();
  console.log(k);

// var add = function () {
//     var counter = 0;
//     return function () {counter += 1; return counter}
//   };
  
//   var k= add();
//   console.log(k);
//   k= add();
//   console.log(k);
//   k= add();
//   console.log(k);

  //problem, w2d215