// Let's say, we have an array of strings and we want to convert
// this array to an array of integers, where each element represent
// the length of the string in the original array - Without using any native high order functions
// const strArray = ['JavaScript', 'Python', 'PHP', 'Java', 'C'];

const strArray = ["JavaScript", "Python", "PHP", "Java", "C"];
const newArray = [];

function mapForEach(arr, fn) {
  for (const i in arr) {
    newArray[i] = fn(strArray[i]);
  }
  return newArray;
}

const lenArray = mapForEach(strArray, function (item) {
  return item.length;
});
// prints [ 10, 6, 3, 4, 1 ]
console.log(lenArray);