//objects/functions passed by reference while primitve data types are passed by value

const person={
    name:'Anukriti',
    age:21,
    address:{
        place:{
            city:'Meerut'
        },
        zip:250001
    }
}
const tempPerson=person

tempPerson.address.zip=250002;
console.log(tempPerson);
console.log(person); //changes will reflect in original object also



