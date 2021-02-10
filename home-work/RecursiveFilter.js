const array=[1,2,3,4,5,6];

function filter(arr,fn,newArray){
    if(arr.length==0) return newArray;
    if(fn(arr[0])) {
        newArray.push(arr[0]);
    }
    arr.shift()
    return filter(arr,fn,newArray);
   
}

const evenArray = filter(array, function(item){
    return item%2==0; 
},[]);

console.log(evenArray);