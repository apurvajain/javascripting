function mapWithReduce(arr, f) {
    let newArray = []
   
     arr.reduce((acc, current) => {
          
        newArray.push(f(current))
     }, 0)
     return newArray;
}

function twice(num) {
    return num*2;
}
let arr = [1,2,3,4,5];
let newA = mapWithReduce(arr,twice);
console.log(newA)
