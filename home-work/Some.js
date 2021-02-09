//The some() method tests whether at least
// one element in the array passes the test implemented 
//by the provided function. 

// some() - returns a Boolean value


const array = [1, 11, 3, 1, 5];

// checks if there is an even element in an array
let isEven = array.some(function(item){
    return item%2 === 0;
});

// checks if there is an element in an array with index greater than one
let isGreaterThanOne = array.some(function(item,idx){
    return idx > 1;
});

console.log(isEven);
console.log(isGreaterThanOne);
