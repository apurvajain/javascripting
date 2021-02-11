let arr = [1, 2, 3, 4, 5];
 
function sum(i, j) {
  return i + j;
}
let flag = 0;
let accumulator = 0;
function reduceWithRecursion(arr, f) {

  if (arr.length === 0) return false;

  if(flag ===  0) {
    accumulator += f(arr[0], arr[1]);
    arr.shift();
    arr.shift(); 
    flag = 1;
  } else if(arr.length > 1){
    accumulator = f(accumulator, arr[0]);
    arr.shift();
  } else {
    accumulator = f(accumulator, arr[0]);
    arr.shift();
  }
  
  reduceWithRecursion(arr, f);
  return accumulator;
}

console.log(reduceWithRecursion(arr, sum));