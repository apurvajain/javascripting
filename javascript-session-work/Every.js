//If it finds an array element where the function returns a false value, every() returns false 
//return type is bool
const arr=[1,2,3,4,5,6]

console.log(arr.every((item)=>item>0))
console.log(arr.every((item)=>item>1))