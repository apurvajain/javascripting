function recMap(array,func,newArray){
    if(array.length===0){
        return newArray;
    }
   
    newArray.push(func(array[0]));
    recMap(array.slice(1),func,newArray);
    return newArray;
}

const array=[1,2,3,4,5,6];

const squaredArray=recMap(array,function(value){
    return value*value;
},[])

console.log(squaredArray);