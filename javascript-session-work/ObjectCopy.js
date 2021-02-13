const person={
    name:'Megh',
    age:21,
    address:{
        place:{
            city:'Coimbatore'
        },
        zip:641062
    }
}
const tempPerson=person

tempPerson.address.zip=100678;
console.log(tempPerson);
console.log(person); // changes the main object 