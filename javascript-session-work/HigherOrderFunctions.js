//JavaScript functions are a special type of objects
//To prove functions are objects in JavaScript.

function greeting() {
    console.log('Hello World');
}
greeting.lang = 'English';
console.log(greeting.lang);

//Functions in JavaScript are known as First-Class Functions.
//Everything you can do with other types like object, string, or number, you can do with functions
//assign variable
const square = function(x) {
    return x * x;
}
console.log(square(5)); 
//passing function around
const foo = square;
console.log(foo(5));

// Higher Order Function
// receives a function as an argument or returns the function as output.

//Array.prototype.map - creates new array 
//map() method accepts 3 arguments: element, index, and array.


//Array.prototype.filter - creates new array 
//filter() callback method accepts 3 arguments: element, index, and array.

//Array.prototype.reduce
//The reducer function (callback) accepts four parameters: accumulator, currentValue, currentIndex, sourceArray
// if Initial value is provided then accumulator is initialized with intial value,
// otherwise with value at index 0 of array

const arr = [x => x * 1, x => x * 2, x => x * 3, x => x * 4];
console.log(arr.reduce((agg, el) => agg + el(agg), 1));

//Agg = 1 
//Agg = 1+ 1
//Agg = 2+ 4
//Agg = 6 + 18
//Agg = 24 + 24*4
//Agg = 24*5 = 120 







