const persons = [
  { name: "Peter", age: 16 },
  { name: "Mark", age: 18 },
  { name: "John", age: 27 },
  { name: "Jane", age: 14 },
  { name: "Tony", age: 24 },
];

const reqage = persons.filter(function (item) {
    return item.age>=20
    // if (item.age >= 20){
    //   return item.name
    // };
    //console.log(item.name)
    // return item.name
});
console.log(reqage);
