var car = 'Tesla';

var car= {type:'Fiat', model:'500', color:'white'};

console.log(car.type)
console.log(car['type'])

var person = {
    firstName: 'John',
    lastName : 'Doe',
    id       : 5566,
    fullName: function() {
        return this.firstName+' '+this.lastName;
    }
  };

  //In a function definition, this refers to the 'owner' of the function.

  console.log(person.fullName)
  console.log(person.fullName())
  console.log(person['fullName']())

  var name=person.fullName;
  console.log(name);
  var fullName=name();
  console.log(fullName);

//problem

var person = {
    firstName: 'John',
    lastName : 'Doe',
    id       : 5566,
  };
  
  // prints ['firstName', 'lastName', 'id']
  console.log(Object.keys(person));
  console.log(Object.values(person));







