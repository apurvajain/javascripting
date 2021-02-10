//The forEach() method calls a function once for each element in an array, in order.
var sum = 0;
const numbers=[33,90,102,55,77,110]

function calculateSum(number)
{
    sum+=number
}

numbers.forEach(calculateSum);
console.log(sum)

