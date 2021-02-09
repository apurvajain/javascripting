
var persons = [
    {
      id: 5,
      pilotingScore: 98,
      shootingScore: 56,
    },
    {
        id: 7,
        pilotingScore: 10,
        shootingScore: 20,
      },
    {
        id: 9,
        pilotingScore: 15,
        shootingScore: 20,
    },

]


// map returns array of scores calculated by summation of  pilotingScore and shootingScore 
// reduce then calculates the sum of all the scores of each person
const totalScore = persons.map(function(person){
   return person.pilotingScore + person.shootingScore;
}).reduce(function(accumulator,currentValue){
    return accumulator + currentValue;
});

console.log(totalScore);