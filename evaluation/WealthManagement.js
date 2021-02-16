const fetch = require("node-fetch");
var LocalStorage = require("node-localstorage").LocalStorage;
localStorage = new LocalStorage("./scratch");

// Script should initially fetch 3 random users using https://randomuser.me/api API and assign random wealth to the fetched users
//usersCount - number of users to fetch
function fetchUsers(usersCount) {
  let users = JSON.parse(localStorage.getItem("users"));
  if (!users) {
    users = [];
  }
  while (usersCount) {
    fetch("https://randomuser.me/api")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        var userDetails = {};
        userDetails["name"] =
          data.results[0].name.first + " " + data.results[0].name.last;
        userDetails["wealth"] = Math.floor(Math.random() * 10000000 + 10000);
        //console.log(userDetails)
        users.push(userDetails);
        localStorage.setItem("users", JSON.stringify(users));
        return users;
      })
      .catch((err) => {
        console.log(err);
      });

    usersCount--;
  }
}

function displayAllUsers() {
  let usersDetails = JSON.parse(localStorage.getItem("users"));
  console.log("<--------User details: START----------->")
  usersDetails.forEach((user) => {
    console.log("Name: " + user.name + "  " + "Wealth: " + user.wealth);
  });
  console.log("<--------User details: END ------------->")
}

//Double money of all users
function doubleMoney() {
  let usersDetails = JSON.parse(localStorage.getItem("users"));
  let doubledMoney = usersDetails.map((user) => {
    return {
      name: user.name,
      wealth: user.wealth * 2,
    };
  });
  localStorage.setItem("users", JSON.stringify(doubledMoney));
}

function showMillionaires() {
  let usersDetails = JSON.parse(localStorage.getItem("users"));
  console.log("<--------Millionaire User details: START----------->")
    usersDetails.forEach((user)=>{
        if (user.wealth > 10000000){
            console.log("Name: " + user.name + "  " + "Wealth: " + user.wealth);
        }
    })
  console.log("<--------Millionaire User details: END----------->")
}

function clearLocalStorage() {
  localStorage.clear();
}

module.exports = {
  fetchUsers,
  displayAllUsers,
  clearLocalStorage,
  doubleMoney,
  showMillionaires,
};
