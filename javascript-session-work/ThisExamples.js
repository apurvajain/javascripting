// normal function
var exampleThis = function () {
    return this;
  };
  console.log(exampleThis() === global);  // returns true, by def refers to global
  
  exampleThis().a = 10; // *polluting the global!*
  console.log(a); // 10
  //never assign properties to functions
  
  var strictThisExample = function () {
    'use strict';
    //means this shouldnt belong to global scope, should only belong to strictThisExample
    return this;
  };
  console.log(strictThisExample()); //  returns undefined, cos no this in strictThisExample
  
  var ConstructorThisExample = function () {
    console.log(this); 
  };
  var obj = new ConstructorThisExample(); // {}
  //owner of func is the obj, object is defined but is empty