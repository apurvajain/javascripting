
var firstName = 'Apoorva';
var lastName = 'Choudhary';

var person = {
    firstName: 'John',
    lastName : 'Doe',
    id       : 5566,
    fullName : function() {
      return this.firstName + ' ' + this.lastName; 
      // if remove this keyword both console.log will print 'Apoorva Choudhary'
    }
};

console.log(person.fullName());

//without the () parentheses it will return the function definition
functionFullName = person.fullName;
console.log(functionFullName());

//OBJECT KEYS
console.log(Object.keys(person));

//OBJECT VALUES
console.log(Object.values(person));

//Objects can have only strings and symbols as their keys

//Setting KEY and VALUE  pair in javascript
var dwayne = {}
dwayne['daniel']=123;
console.log(dwayne['daniel']);
// This will give reference error because 
//no object is defined with name daniel
// dwayne[daniel]=456; 

daniel = { firstName: 'Daniel'}, jason = {key: 'jason'};
dwayne[daniel]=123;
dwayne[jason]=456;
//since daniel and jason are both objects, they will both be converted to "[object Object]"
//Therefore when u print Object.keys it will print '[object Object]' no daniel or jason
console.log(Object.keys(dwayne));
console.log(Object.values(dwayne));
console.log(dwayne["[object Object]"]);
//Both values will be 456 since pointing to same object 
console.log(dwayne[daniel]);
console.log(dwayne[jason]); 


//Passing functions as key will point to different keys, unlike objects
function appy(){}
function apple(){}
dwayne[appy]=123;
dwayne[apple]=456;
console.log(Object.keys(dwayne));
console.log(Object.values(dwayne));
//Both values will be different, first 123 then 456 since pointing to different keys
console.log(dwayne[appy]);
console.log(dwayne[apple]);

//Objects are compared based on references.Both pointing to different references.//Hence false in both
console.log({a:1} == {a:1});
console.log({a:1} === {a:1});


//Symbols as Object Properties
const obj = {};
const sym = Symbol();
obj[sym] = 'foo';
obj.bar = 'bar';

//Calling code does not already have access to the symbol itself. 
//As an example, the Reflect.ownKeys() method is able to get a list of all keys on an object,
//both strings and symbols alike:
console.log(Object.keys(obj));

console.log(Reflect.ownKeys(obj));


//Object Prototype vs Closure

//a closure is maintained for each copy of the object containing getFullName method.
const jamesBond = {
    firstName: "Daniel",
    lastName: "Craig",
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`.trim();
    }
};

jamesBond.getFullName();


class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

//While in the second approach, the method `getFullName` is registered in the prototype rather than in every object.
//More memory efficient
Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`.trim();
};

const getPerson = new Person("Daniel", "Craig");
console.log(getPerson.getFullName());

