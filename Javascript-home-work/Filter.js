const persons = [
    { name: 'Peter', age: 16 },
    { name: 'Mark', age: 18 },
    { name: 'John', age: 27 },
    { name: 'Jane', age: 14 },
    { name: 'Tony', age: 24},
];
 
// here the filter test is age >=15
const fullAge = persons.filter(function(person){
    return person.age >= 15;
});
 
console.log(fullAge);