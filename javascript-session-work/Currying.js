//first we call function with x num of variables and that will return function.
//then we call that func with y num of variables
var babyAnimals = function(animal1) {
    return function(animal2) {
        return function(animal3) {
        return `I love ${animal1}, ${animal2} and ${animal3}`;
        };
    };
}

//babyanimal takes a func with one arg, and returns a func w another arg

//var babyKoala = babyAnimals('Koala');
//console.log(babyKoala('Monkey'))
//gives the ability to not replicate logic of calling koala
console.log(babyAnimals('cats')('dogs')('ducks'))

var calculatePercentage = function(cent) {
    return function(percentValue) {
        return function(percentOf){
            return `${percentValue} % of ${percentOf} is ${(percentValue/cent)*percentOf}`;
        };
    };
};
 
const findXPercent = calculatePercentage(100);
const find25Percentage = findXPercent(25);
const find50Percentage = findXPercent(50);
const find75Percentage = findXPercent(75);

console.log(calculatePercentage(100)(25)(300))

console.log(find25Percentage(200));

console.log(find50Percentage(200));

console.log(find75Percentage(200));
