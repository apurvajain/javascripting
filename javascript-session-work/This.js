// It has different values depending on where it is used:

// In a method, this refers to the owner object.
// Alone, this refers to the global object.

// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), and apply() can refer this to any object.


var exampleThis = function () {
    return this;
};
// In a function, this refers to the global object.
console.log(exampleThis() === global);  // returns true


//In a method, this refers to the owner object.
var ConstructorThisExample = function () {
    console.log(this);
  };
var obj = new ConstructorThisExample(); // {}


//In a function, in strict mode, `this` is undefined.
var strictThisExample = function () {
    'use strict';
    return this;
  };
console.log(strictThisExample()); //  returns undefined

var strictThisExample = function () {
    'use strict';
    // this.a = 2;   // this will throw type error Cannot set property 'a' of undefined
    return this;
};
console.log(strictThisExample());


//Methods like call(), and apply() can refer `this` to any object.

//Call() - let us borrow method to use in another object - Function-borrowing tool
//call(thisArg,value1,value2....)
//thisArg: The value to use as this when calling function


var steveJobs = {
    mission: "Change the world",
    describe: function(a,b) {
        console.log(this.mission + a +b);
    }
};

steveJobs.describe(); 

var steveWoz = {
    mission: "Do great engineering"
};

//borrow describe method to use in steveWoz object
//Also remember call invokes the borrowed method.
//Here we are using `steveWoz` as this Arguement
steveJobs.describe.call(steveWoz, ' Hurray! ','Steve');

//Apply() - also let us borrow method to use in another object - Function-borrowing tool
//Only difference is here u have to pass array - useful - when u don't know the number of exact parameters
steveJobs.describe.apply(steveWoz,[' Hurray! ','Steve']);

//Another example
const nums = [1, 2, 3]
console.log(Math.min(nums)); // gives Nan because u need to pass individually
console.log(Math.min.apply(null,nums));


//Bind() - This Partial functions is a functional programming concept.It returns a function that takes the remaining arguments
var describe = steveJobs.describe.bind(steveWoz);
describe(' Hurray! ','Steve');






function food(kind) {
    this.kind = kind;
    this.cook = cook; // functions are hoisted, so it's perfectly
                      // fine to call or assign function names
                      // before they are defined.
    function cook(sec) {
      setTimeout(function() {
        console.log(this.kind + " cooked for " + sec + " seconds.");
      }, sec * 1000);
    }
  }
let soup = new food("soup"); // <--- this.kind = "soup"
soup.cook(2); // undefined cooked for 2 seconds.

//Why does it say undefined cooked for 2 seconds?

//When we called setTimeout function, it disconnected us from this keyword of the object.
//In callback of setTimeout this points to [object Window] and not the original food object aka [object Object].


//To fix this Issue

function food(kind) {
    this.kind = kind;
    this.cook = cook;

    function cook(sec) {
        //No copies are created in let that = this assignment.
        //In JavaScript we don’t make copies when assigning variables.It creates references in object
        let that = this; 
        // Now inside setTimeout, refer to that.kind not this.kind:
        setTimeout(function() {
        console.log(that.kind + " cooked for " + sec + " seconds.");
        }, sec * 1000);
    }
}
soup = new food("soup"); // <--- this.kind = "soup"
soup.cook(2);

//Arrow Functions To The Rescue

//Arrow functions have a “transparent” scope. In other words in setTimeout(()=>{this}, 1000) 
//the `this` keyword does not point to [object Window]. It points to whatever is outside of it Arrow functions have a “transparent” scope.
// In other words in setTimeout(()=>{this}, 1000) the this keyword does not point to [object Window]. It points to whatever is outside of it

function food(kind) {
    this.kind = kind;
    this.cook = cook;
    function cook(sec) {
      setTimeout(() => {
        console.log(this.kind + " cooked for " + sec + " seconds.");
      }, sec * 1000);
    }
  }
let soup = new food("soup");
soup.cook(2); // soup cooked for 2 seconds.

















