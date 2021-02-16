const fetch = require("node-fetch");
const { LocalStorage } = require("node-localstorage");
const localStorage = new LocalStorage('./UserWealthStorage'); 
const MAX_MONEY = 1000000000;
const MIN_MONEY = 1000000;



function fetchUser() {
    return fetch(`https://randomuser.me/api`)
      .then(function (response) {
        return response.json();
      })
      .then(function (userData) {
        const fullname = userData.results[0].name;
        const money = getMoney();
        const person = {name: `${fullname.first}  ${fullname.last}`, money: money};
        return person;
  
      })
}

function getMoney(){
    //Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive):
    //Range of this is between MIN_MONEY(inclusive), and MAX_MONEY (exclusive);
    return Math.random() * (MAX_MONEY - MIN_MONEY) + MIN_MONEY;
}

module.exports = {
    fetchUser,
    getMoney
}