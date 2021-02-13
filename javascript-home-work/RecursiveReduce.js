let arr = [1, 2, 3, 4, 5];
 

function reduceWithRecursion(arr, f, accumulator) {

  if (arr.length === 0) return accumulator;
   
     accumulator = f(accumulator, arr[0]);
   
  
  return reduceWithRecursion(arr.slice(1), f, accumulator);
 
}

function accumulatorHelper(a, b) {
  return a+b
}

console.log(reduceWithRecursion(arr, accumulatorHelper, 0)); 