//The some() method tests whether at least one element in the array passes the test

const array1 = [1, 30, 39, 41, 10, 13];
const o1 = array1.some(function (currentValue) {
    return currentValue > 40;
});
console.log(o1); 