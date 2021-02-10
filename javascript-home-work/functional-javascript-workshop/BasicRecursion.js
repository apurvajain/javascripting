function recReduceHelper(array,func,accumulator){
    if(array.length===0){
        return accumulator;
    }
    //console.log(`Array Value ${array[0]}`); 
    accumulator=func(accumulator,array[0]);
    //console.log(` Accumulator value ${accumulator}`);
    return recReduceHelper(array.slice(1),func,accumulator);
}
function reduce(array,func,initalValue){
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
  
  module.exports = reduce

//   function reduce(arr, fn, initial) {
//     return (function reduceOne(index, value) {
//       if (index > arr.length - 1) return value // end condition
//       return reduceOne(index + 1, fn(value, arr[index], index, arr)) // calculate & pass values to next step
//     })(0, initial) // IIFE. kick off recursion with initial values
//   }