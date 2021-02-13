//If it finds an array element where the function returns a true value, some() returns true
//return value is boolean
const arr=[1,2,3,4,5,6]

console.log(arr.some((item)=>item>6))
console.log(arr.some((item)=>item>=6))