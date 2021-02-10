const array1 = [ 1, 2, 3, 4, 5 ];
const array2 = [ 0, -1, -30, 5];

console.log(array1.some(function(value){
    return value <0;
}));                        //false
console.log(array2.some(function(value){
    return value <0;
}));                        //true