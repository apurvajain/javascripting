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
    favourites:["bears","beets","battleStarGallectica"]
}

person.greeting.apply(person2,person2.favourites);
