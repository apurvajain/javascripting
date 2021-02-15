// Create a User wealth management system using command line
// Script should initially fetch 3 random users using https://randomuser.me/api API and assign random wealth to the fetched users
// It should then ask CLI user to select an option from the given menu
// 1. Add user and print new user list
// 2. Double money of all users and print updated user list
// 3. Show only millionares
// 4. Sort by richest
// 5. Calculate total wealth of all users and print it
// 6. Exit
// and print results as per chosen operation

const fetch = require("node-fetch");



function getName() {
  fetch(`https://randomuser.me/api/?results=3`)
    .then(function (response) {
      return response.json(); //returns a promise
    })
    .then(function (data) {
      data.results.forEach((person) => {
        console.log(person);
      });
    });
}

getName();

module.exports = getName;
