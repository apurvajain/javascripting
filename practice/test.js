// const birthYear = [1975,1997,2002,1995,1985]
// const age = birthYear.map(function(year){
//     return 2021-year;
// })
// console.log(age)

// const age = [15,14,25,36]
// const reqage = age.filter(function(year){
//     return year <= 25
// })
// console.log(reqage)

//.................................
// const persons = [
//     { name: 'Peter', age: 16 },
//     { name: 'Mark', age: 18 },
//     { name: 'John', age: 27 },
//     { name: 'Jane', age: 14 },
//     { name: 'Tony', age: 24},
// ];
// //console.log(persons[0].name)
// const reqage = persons.filter(function(item){
//     return item.age>=15;
// })
// console.log(reqage)
// //.................................

//The slice() method returns the selected elements in an array, as a new array object.
//Has a start index and end index(not included)

//arr.slice([start[, end]])

// const cities = ["Bangalore", "Delhi", "Mumbai", "Hyderabad", "Pune"];
// console.log(cities.slice(-1))
// console.log(cities.slice(1, 3));
// console.log(cities.slice(1));

//...................................
// Let's say, we have an array of strings and we want to convert
// this array to an array of integers, where each element represent
// the length of the string in the original array - Without using any native high order functions
// const strArray = ['JavaScript', 'Python', 'PHP', 'Java', 'C'];

// const strArray = ["JavaScript", "Python", "PHP", "Java", "C"];
// const newArray = [];

// function mapForEach(arr, fn) {
//   for (const i in arr) {
//     newArray[i] = fn(strArray[i]);
//   }
//   return newArray;
// }

// const lenArray = mapForEach(strArray, function (item) {
//   return item.length;
// });
// // prints [ 10, 6, 3, 4, 1 ]
// console.log(lenArray);

//..............................................

//Object Freeze

//Shallow freeze will work only on non-object values. eg- string
// const obj = {name:'Swetha'};
// Object.freeze(obj);
// obj.name="HI";   //does not change value. coz frozen
// console.log(obj);

//Deep freeze : implement using recursion. Shoulf freeze  object  values as well
const obj = {
  name: "Bob",
  address: {
    place: {
      city: "Sagar",
    },
    zip: 470002,
  },
};

function Recursion(obj) {
  if (typeof obj !== "object") return;
  Object.values(obj).forEach(Recursion);
  Object.freeze(obj);
}
Recursion(obj)
obj.address.place.city = "Delhi"; //should not change
console.log(obj);
