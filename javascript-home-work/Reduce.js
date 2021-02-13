//reduce() - executes a reducer function on each element of the array.
//Returned value is assigned to the accumulator, whose value is remembered 
//across each iteration throughout the array. A function execute on each element in the array (except for the first, 
//if no initialValue is supplied)

//reduce() - returns single output value.

const numbers = [15, 2, 1, 4];

const sum = numbers.reduce(function(accumulator,currentValue){
    return accumulator + currentValue;
},10);

// print 32 (reduced value)
console.log(sum);