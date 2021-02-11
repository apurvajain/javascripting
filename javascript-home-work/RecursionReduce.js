function recursiveReduce(array,func,initialValue)
{
    if(array.length==0) 
    return initialValue;
    initialValue = func(initialValue,array[0]); 
    return recursiveReduce(array.slice(1),func,initialValue);
   
}
const array=[1,2,3,4,5,6];

const productArray = recursiveReduce(array, function(accumulator,currentValue){
    return accumulator * currentValue;
},1);

console.log(productArray);