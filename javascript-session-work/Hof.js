// HOC is the fact that functions can be passed as argument or returned
const birthYear = [1975, 1997, 2002, 1995, 1985];
const age = birthYear.map(function (year) {
  return 2021 - year;
});

// Filter
const persons = [
  { name: "Peter", age: 16 },
  { name: "Mark", age: 18 },
  { name: "John", age: 27 },
  { name: "Jane", age: 14 },
  { name: "Tony", age: 24 },
];
const greaterThanFifteen = persons.filter(function (item) {
  return item.age >= 15;
});

// Reduce is used to summarise an array
const arr = [5, 7, 1, 8, 4];
const sum = arr.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
});

// Every is used to test if all elements in the array pass the test
const temps = [100, 66, 60, 90, 80];
const isAboveFifty = temps.every(function (temp) {
  return temp > 50;
});

// Some is used to  test if any of the elements in the array pass the test
const temps = [100, 66, 60, 90, 80];
const isAboveFifty = temps.some(function (temp) {
  return temp > 50;
});

// For Each
const professionals = ["Doctor", "Engineer"];
const updatedProfessionals = professionals.forEach(function(professional) {
    //console.log(professional+" did his work")
})  

// Slice returns the selected elements in an array
console.log(temps.slice(1,3));
console.log(temps.slice(-1));

// HOF implementation
const strArray = ['JavaScript', 'Python', 'PHP', 'Java', 'C'];
function mapForEach(strArray, fn) {
    var strLength = [];
    for(i in strArray){
         strLength.push(fn(strArray[i]));
    }
    return strLength;
}
const strLength = mapForEach(strArray, function(item) {
    return item.length;
});
console.log(strLength);

// Obj Freeze
const obj = {name:"Anj"};
Object.freeze(obj);
obj.name = "LALA";
console.log(obj)

// Recursion for deep freeze
const obj1 = {
    name : "Bob",
    address: {
        place: {
            city: 'Sagar'
        },
        zip: 470002
    }
};
function deepFreeze(obj){
    if(typeof obj !== "object")
        return;
    Object.values(obj).forEach(deepFreeze);
    Object.freeze(obj);
 }
deepFreeze(obj1);
obj1.name = "Anj";
console.log(obj1);