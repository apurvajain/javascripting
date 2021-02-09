const array=[1,2,3,4,5,6];

function map(arr,fn,newArray){
    if(arr.length==0) return newArray;
    newArray.push(fn(arr[0]));
    return map(arr.slice(1),fn,newArray);
   
}

const doubleArray = map(array, function(item){
    return item*2; 
},[]);

console.log(doubleArray);