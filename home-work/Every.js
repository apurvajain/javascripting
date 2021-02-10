//The every() method checks if all elements in an array pass a test (provided as a function).

const array1 = [1, 30, 39, 29, 10, 13];
const o1 = array1.every(function (currentValue) {
    return currentValue < 40;
});
console.log(o1); //true

const array2 = [1, 45, 39, 29, 10, 13];
const o2 = array2.every(function (currentValue) {
    return currentValue < 40;
});
console.log(o2);  //false
