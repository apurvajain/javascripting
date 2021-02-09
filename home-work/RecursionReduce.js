function recReduceHelper(array,func,accumulator){
    if(array.length===0){
        return accumulator;
    }
    //console.log(`Array Value ${array[0]}`); 
    accumulator=func(accumulator,array[0]);
    //console.log(` Accumulator value ${accumulator}`);
    return recReduceHelper(array.slice(1),func,accumulator);
}
function recReduce(array,func,initalValue){
    let accumulator;
    let result;
    if(!initalValue){
        accumulator=array[0];
        result=recReduceHelper(array.slice(1),func,accumulator)
    }
    else{
        accumulator=initalValue;
        result=recReduceHelper(array,func,accumulator);
    }
    //console.log(`hello ${result}`)
    return result;
}

const array=[1,2,3,4,5,6];

const sumArray=recReduce(array,function(accumulator,currentValue){
    return accumulator+currentValue;
},10);

console.log(sumArray);