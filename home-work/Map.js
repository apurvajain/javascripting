//map() - method calls the provided function once 
//for each element in an array, in sequence. 

//***does not change original array

//map() - returns a new array;

const birthYear = [1975, 1997, 2002, 1995, 1985];

// map returns array of age calculated using birth year
const age = birthYear.map(function(item){
   return (2021 - item);
});

console.log(age);