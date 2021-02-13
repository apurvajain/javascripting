// var add=(function(){
//     var counter=0;
//     return function(){
//         counter+=1
//         return counter;
//     }
// })();
// //IIF can only be executed once .Assignns counter=0
// //add=return function(){counter+=1 return counter;}
// console.log(add())//1

// console.log(add())//2

// console.log(add())//3


// function outer() {
//     var b = 10;
//     function inner() {
         
//           var a = 20; 
//           console.log(a+b);
//      }
//     return inner;
//  }
//  var X = outer(); //outer() invoked the first time
//  var Y = outer(); //outer() invoked the second time
//  console.log(X())
//  console.log(X())
//  console.log(X())

function outer() {
    var b = 10;
    var c = 100;
       function inner() {
            
             var a = 20; 
             console.log("a= " + a + " b= " + b);
             a++;
             b++;
        }
       return inner;
    }
    var X = outer();  // outer() invoked the first time
    var Y = outer();  // outer() invoked the second time
    //end of outer() function executions
    X(); // X() invoked the first time  a=20 b=10 
    X(); // X() invoked the second time a=20 b=21
    X(); // X() invoked the third time a=20 b=21
    Y(); // Y() invoked the first time  a=20 b=10


