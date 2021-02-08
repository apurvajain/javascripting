const array1 = [ 1, 2, 3, 4, 5 ];
const array2 = [ 0, -1, -30, 5];

console.log(array1.every(function(value){
    return value >=0;
}));                        // returns true
console.log(array2.every(function(value){
    return value >=0;
}));                        // returns false