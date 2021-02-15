function outer() {
    var b = 10;
    function inner() {
            
             var a = 20; 
             console.log("a= " + a + " b= " + b);
             a++;
             b++;
    }
    return inner;
}
    
var X = outer();
var Y = outer();
//technically this should give reference error because b is not in scope of inner() function 
//but due to closure property it stores the  variables inside inner() and then in child () as well
X(); 
//However, b(first_time) was preserved as the closure, so b(first_time) continues to exist. but a cease after X execution
X();  //a =20, b=11
X(); //a =20, b=12

Y()  //a =20, b=10

//The activation object of the outer function, cannot be destroyed once it is finished executing. 
//Its scope chain for that execution context is destroyed. But the activation object will remain in memory until inner( ) is destroyed

// Closure -  Immediately Invoked Function Expression (IIFE) - as soon as it is defined it is invoked . It has property that it can contain the scope of immediate above parent. So it can access the counter 

// var add = (function () {
//   var counter = 0;
//   return function () {counter += 1; return counter}
// })() -> IIIFE;

// add();
// add();
// add();

