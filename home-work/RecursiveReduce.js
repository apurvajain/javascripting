//program to get product of array
let array=[1,2,3,4,5,6];

function reduce(array,func,initialValue)
{
    if(array.length==0) return initialValue;
    initialValue=func(initialValue,array[0])
    return reduce(array.slice(1),func,initialValue)
}

const productArray=reduce(array,function(accumulator,currentValue){
    return accumulator*currentValue;

},1)

console.log(productArray)