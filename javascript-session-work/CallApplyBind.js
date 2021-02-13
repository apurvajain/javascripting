var steveJobs = {
  about: "Hello I'm Jobs",
  describe: function (place) {
    console.log(this.about + " from " + place);
  },
};
steveJobs.describe("LalaLand");
var steveWoz = {
  about: "Hello I'm Woz",
};
steveJobs.describe.call(steveWoz, "USA");

// Apply : Math.min and Math.max expects distict variables and not array so we need
// to use apply in that case

var numbers = [5, 6, 7, 8];
console.log(Math.min(numbers)); //return NaN as it doesnt expect an array
console.log(Math.min.apply(null, numbers));

// Bind to attach an object to another function
// Returns a function

var pokemon = {
  firstname: "Anjali",
  lastname: "Nair",
  getPokemon: function () {
    var fullname = this.firstname + this.lastname;
    return fullname;
  },
};

var pokemonConsole = function (snack) {
  console.log(this.getPokemon() + " hello ");
};

var logPokemon = pokemonConsole.bind(pokemon);
logPokemon();

// Currying refers to process of transforming a fx with moree arity to less arity
// Binding some arguments to first function so those values are fixed for next invocation

var babyAnimals = function (animal1) {
  return function (animal2) {
    return `I love ${animal1} and ${animal2}`;
  };
};

var fixedAnimal = babyAnimals("Koala");
console.log(fixedAnimal("Monkey"));
console.log(fixedAnimal("Donkey"));
