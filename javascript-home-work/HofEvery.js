// Array.prototype.every()
// return type: boolean, checks whether all elements in array pass the test implemented by the provided function
var age= [55, 23, 65, 60, 43]

console.log(age.every(function(ageHolder){
    return ageHolder> 21&& ageHolder<70;
}));

