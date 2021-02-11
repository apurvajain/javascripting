function greeting() 
{
    console.log('Hello World');
  }
  // Invoking the function
  greeting();  // prints 'Hello World'

// We can add properties to functions like we do with objects
greeting.lang = 'English';
// Prints 'English'
console.log(greeting.lang);

//assigning func to variables
const square = function(x) 
{
    return x * x;
}
  // prints 25
console.log(square(5)); 

//passing them around

const foo = square;
// prints 36
console.log(foo(6));

//passing them as parameters
function formalGreeting() {
    console.log("How are you?");
  }
  function casualGreeting() {
    console.log("What's up?");
  }
  function greet(type, greetFormal, greetCasual) {
    if(type === 'formal') {
      greetFormal();
    } else if(type === 'casual') {
      greetCasual();
    }
  }

// prints 'What's up?'
greet('casual', formalGreeting, casualGreeting);

