const num=[1,2,3,4,9]

console.log(Math.max(num))
console.log(Math.max.apply(null,num))

var a = [1, 2, 3, 4];
var b = [5, 6, 7];

Array.prototype.push.apply(a,b)
console.log(a)