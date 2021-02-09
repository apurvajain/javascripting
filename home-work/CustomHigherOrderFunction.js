//mapForEach()  - takes string array and function as input 
//mapForEach()  - return array of length of strings 

const strArray = ['JavaScript', 'Python', 'PHP', 'Java', 'C'];

function mapForEach(arr, fn) {
    const newArray = [];
    for(i in arr){
        newArray.push(fn(arr[i]));
    }
    return newArray;
}
const lenArray = mapForEach(strArray, function(item) {
    return item.length;
});
  // prints [ 10, 6, 3, 4, 1 ]
  console.log(lenArray);


 



  