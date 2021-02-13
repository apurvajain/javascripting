var array1 = [1, 2, 3, 4];
var array2 = [6, 7, 8];
array1.push.apply(array1, array2);
console.log(array1.length);
