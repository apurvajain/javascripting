let arr = [1, 2, 3, 4, 5]
 
function isEven(i) {
    return i%2 === 0
}
const newA = [];
function filterWithRecur(arr, f) {
     
      if (arr.length === 0) return false;
      let isEven = f(arr[0]);
      newA.push(isEven)
      arr.shift();
      filterWithRecur(arr,f)
      return newA;
}

console.log(filterWithRecur(arr, isEven))