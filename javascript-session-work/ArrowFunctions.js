const std1 = {
    subject: 'Javascript',
    learn: function () {
       
        console.log(`Learning this ${this.subject}`); // -  Learning this Javascript
    
        return function () {
            //a function expression is invoked from another function, so “this” is global
            console.log(`Learning this ${this.subject}`); // -  Learning this undefined
        }
    }
}
std1.learn()();

const std2 = {
    subject: 'Javascript',
    learn: function () {   
        console.log(`Learning this ${this.subject}`); // -  Learning this Javascript
        return () => {
            //the arrow function retains the scope of the method it was declared in.
            console.log(`Learning this ${this.subject}`); // -  Learning this Javascript
        }
    }
}
std2.learn()();

// Constraints of using arrow functions:
// 1. They are not suited for object-methods
// 2. They cannot be used as constructors
// 3. They are anonymous

//1. They are not suited for object-methods
//Since arrow functions do not rebind the value of “this,” when using an arrow function as an object method, 
//“this” will point to the parent scope.
const std3= {
    subject: 'Javascript',
    learn: ()=> {   
        console.log(`Learning this ${this.subject}`); // -  Learning this Undefined
    }
}
std3.learn();

//2. They cannot be used as constructors
//It is also important to note that because arrow functions do not rebind “this,” they cannot be used as constructors.
const greeting = text => {
    this.text = text;
    console.log(this.text);

}
//This will give error. It cannot be used as constructor 
const goodbye =  new greeting('goodbye');
