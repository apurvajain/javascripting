function recFilter(array,func,newArray){
    if(array.length===0){
        return newArray;
    }
    if(func(array[0])){
        newArray.push(array[0]);
    }
    
    recFilter(array.slice(1),func,newArray);
    return newArray;
}

const array=[1,2,3,4,5,6];

const evenArray=recFilter(array,function(value){
    return value%2===0;
},[])

console.log(evenArray);

