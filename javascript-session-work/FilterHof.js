const persons = [
    { name: 'Peter', age: 16 },
    { name: 'Mark', age: 18 },
    { name: 'John', age: 27 },
    { name: 'Jane', age: 14 },
    { name: 'Tony', age: 24},
    ];

    // const fullAge = [];

    // for(let i = 0; i < persons.length; i++) 
    // {
    // if(persons[i].age >= 18) 
    // {
    //     fullAge.push(persons[i]);
    // }
    // }

    // console.log(fullAge);

    const fullAge=persons.filter(function(item){
        if(item.age>=18)
        return true;
    })

    console.log(fullAge)
    

// const filteredPersons=persons.filter(function(person){
//     return person.age>18
// })
// console.log(filteredPersons)