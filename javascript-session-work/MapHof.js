// const arr1 = [1, 2, 3];
// const arr2 = [];
// for(let i = 0; i < arr1.length; i++) 
// {
// arr2.push(arr1[i] * 2);
// }
// // prints [ 2, 4, 6 ]
// console.log(arr2);

//map() method accepts 3 arguments: element, index, and array

const arr1= [1,2,3];
const arr2=arr1.map(function(item)
{
    return item*2;
})
console.log(arr2);

const arr=[1,2,3];
const array=arr.map(item => item*2);
console.log(array);

//exc
const birthYear = [1975, 1997, 2002, 1995, 1985]
const ageArray=birthYear.map(function (year){
    return 2021-year;
})
console.log(ageArray)