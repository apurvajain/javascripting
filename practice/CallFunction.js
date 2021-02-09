var person={
    firstName:"Ryan",
    lastName:"Howard",
    greeting: function(){
        console.log(`Hey ${this.firstName} ${this.lastName} ! How have you been`);
        console.log("My favourite things are: ")
        for(var i = 0; i < arguments.length; i++) {
            console.log(arguments[i]);
        }
    }
}
var person2={
    firstName:"Dwight",
    lastName:"Schrute",
}
var person3={
    firstName:"Andy",
    lastName:"Samberg",
    fav1:"comedy",
    fav2:"donuts"
}
person.greeting.call(person2, "beets", "bears","battlestar galactica");
console.log('');
person.greeting.call(person3, person3.fav1, person3.fav2);