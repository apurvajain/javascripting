const array=[1,2,3,4,5,6];

function reduce(arr,fn,initialValue){
    if(arr.length==0) return initialValue;
    initialValue = fn(initialValue,arr[0]); 
    arr.shift();
    return reduce(arr,fn,initialValue);
   
}

const result = reduce(array, function(accumulator,currentValue){
    return accumulator + currentValue;
},10);

console.log(result);