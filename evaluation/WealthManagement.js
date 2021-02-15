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
var LocalStorage = require("node-localstorage").LocalStorage,
localStorage = new LocalStorage("./scratch");


var storedUsers = localStorage.getItem("users");
var users = storedUsers


function personDetails(user) {
  const money = Math.floor(Math.random() * 10000 + 1000);
  const person = {
    name: "Name:" + user.name.first + " " + user.name.last,
    wealth: money,
  };
  //return person.name + " Wealth: " + person.wealth;
  return person
}
var users = [];
const fetchPeople = (count) => {
  fetch(`https://randomuser.me/api/?results=${count}`)
    .then(function (response) {
      return response.json(); //returns a promise
    })
    .then(function (data) {
      
      data.results.forEach((person) => {
       users.push(personDetails(person));
        var  p =  personDetails(person)
        console.log(p.name + " Wealth: " + p.wealth)
      });
      console.log(localStorage.setItem("users", users));
      //console.log(users)
    })
    .then(() => menu());
};

//only after fetch is success call menu

const menu = () => {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question(
    "1. Add user and print new user list\n2. Double money of all users and print updated user list\n3. Show only millionares\n4. Sort by richest\n5. Calculate total wealth of all users and print it\n6. Exit\n",
    (entry) => {
      query(entry);
      readline.close();
      console.log("hi" + users);
    }
  );
};

function query(value) {
  // 1. Add user and print new user list
  if (value === 1) {

  }
}

fetchPeople(3);
//menu()

module.exports = fetchPeople;
