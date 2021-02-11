var person={
    firstName:"Asmita",
    lastName:"Hajra",
    greeting: function()
    {
        console.log(`Hey ${this.firstName} ${this.lastName}!`);
        console.log("I like: ")
        for(var i = 0; i < arguments.length; i++) 
        {
            console.log(arguments[i]);
        }
    }
}
var person2={
    firstName:"Atimsa",
    lastName:"Arjah",
}

var person3={
    firstName:"KK",
    lastName:"Kiran",
    fav1:"movies",
    fav2:"basketball"
}
person.greeting();
person.greeting.call(person2, "honey", "money","chocolate");
console.log('');
person.greeting.call(person3, person3.fav1, person3.fav2);