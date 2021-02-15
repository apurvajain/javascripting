//Execution Stack 

// Execution context is created when function is called. (Activation object)
// Execution context is created when global execution context is called(Variable object).It is placed in stack.
// Execution context  2things
// 1. Declarations, variables, parameter(Activation object)
// 2. This reference

//Scope chain is list of activation objects /variable object

//How do we move to find from one identifier to another?

//It moves between Variable objects and Activation objects with [[scope]] property. 
//So scope chain has objects + [[scope]] s the hidden mechanism that links these variable objects for identifier lookup




//Block Scope

//unlike var variables, let and const cannot be accesssed outside
{
    const say = 'Hello';
    let greeting = 'Hello World!';
    var lang = 'English';
    console.log(greeting); // Prints 'Hello World!'
}
console.log(lang); //var can be accessed. 
// console.log(greeting); //this will give reference error
// console.log(say); //this will give reference error


let meet  = 'Meet Hello World!';

{
    // console.log(meet); // this will give error because of hoisting at line 18 .
    //Let and const  fall into what is known as the Temporal Dead Zone until they are initialised. This leads to a ReferenceError 
    let meet = 'Hello World!';

}

//variables defined with var keyword are not block scoped. 

{
    console.log(a); // this will not throw error
    var a = 'jajaj';

}

//Hoisting 

var a;
{
    console.log(a);
    a = 'jajaj';

}
  








//LEXICAL  Environment
//A lexical environment is a structure that holds identifier-variable mapping.
// lexicalEnvironment = {
//     a: 25,
//     obj: <ref. to the object>
//   }

//A new lexical environment is created for each Lexical Scope

//Example: - 
let greeting = 'Hello';
function greet() {
  let name = 'Peter';
  console.log(`${greeting} ${name}`);
}
greet();
{
  let greeting = 'Hello World!'
  console.log(greeting);
}


// globalLexicalEnvironment = {
//     greeting: 'Hello'
//     greet: <ref. to greet function>
//     outer: <null>
//   }

// functionLexicalEnvironment = {
//     name: 'Peter'
//     outer: <globalLexicalEnvironment>
// }

// blockLexicalEnvironment = {
//     greeting: 'Hello World',
//     outer: <globalLexicalEnvironment>
// }


function Foo() {        
    
    console.log(this); // - this is in foo {} space
    return  function () {
        console.log(this);  //this is in global {} space
    };


}

var result = new Foo(); 


//Settimeout
// With var you have a function scope, and only one shared binding for all of your loop iterations - i.e. 
//the i in every setTimeout callback means the same variable that finally is equal to 6 after the loop iteration ends.

// With let you have a block scope and when used in the for loop you get a new binding for each iteration - i.e. 
//the i in every setTimeout callback means a different variable, each of which has a different value: the first one is 0, the next one is 1 etc.

(function timer() {
    for (let i = 0; i <= 5; i++) {
      setTimeout(function clog() { console.log(i); }, i * 1000);
    }
})();

(function timer() {
    for (var i = 0; i <= 5; i++) {
      setTimeout(function clog() { console.log(i); }, i * 1000);
    }
})();

// this i is quivalent to let . Here we have explicitly bind i with setTimeout
(function timer() {
    for (var i = 0; i <= 5; i++) {
      (function (i) {
        setTimeout(function clog() { console.log(i); }, i * 1000);
      }(i));
    }
  })();

