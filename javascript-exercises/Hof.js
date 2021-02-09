// Let's say, we have an array of strings and we want to convert this array to an array of integers, where each element represent the length of the string in the original array - Without using any native high order functions

const strArray = ['JavaScript', 'Python', 'PHP', 'Java', 'C'];

function mapForEach(arr, fn) {
    const newArray = [];
    for (str in arr) {
        newArray.push(fn(arr[str]))
    }
    return newArray;
  }
  const lenArray = mapForEach(strArray, function(item) {
      return item.length;
  });
  // prints [ 10, 6, 3, 4, 1 ]
  console.log(lenArray);