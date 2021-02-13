//slice() - method returns the selected elements in an array, as a new array object.
//syntax - array.slice(start, end) start is included , end is not included( also end parameter is optional);

let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

// this will return array with values at index 1 and 2
let citrus = fruits.slice(1, 3);
console.log(citrus);

// this will return array with values at index 1,2,3 and 4
citrus = fruits.slice(1);
console.log(citrus);


//Negative Index Slicing
// Here Banana idx is -5, Orange idx is -4, Lemon idx is -3 , Apple idx is -2,  Mango idx is -1
citrus = fruits.slice(-5, -1);
console.log(citrus);

