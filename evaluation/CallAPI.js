const fetch = require("node-fetch");
var LocalStorage = require("node-localstorage").LocalStorage,
  localStorage = new LocalStorage("./scratch");

var users = [];
async function fetchUsers() {
  try {
    fetch("https://randomuser.me/api/?results=3")
      .then((response) => response.json())
      .then(function (data) {
        data.results.forEach((item) => {
          var obj = {};
          obj["name"] =
            item.name.title + " " + item.name.first + " " + item.name.last;
          obj["wealth"] = Math.floor(
            Math.random() * 1000000 + Math.random() * 1000000
          );
          users.push(obj);
          localStorage.setItem("users", JSON.stringify(users));
        });
        console.log("<---User details: START--->");
        console.log(users);
        console.log("<---User details: END--->");
      });
  } catch (err) {
    console.log(err);
  }
}

function doubleWealth() {
  users.forEach((item) => {
    return (item.wealth = item.wealth * 2);
  });
  console.log(users);
}

const millionaires = users.filter(function (users) {
  return users.wealth > 100000;
});

function sortByRichest() { 
    users = JSON.parse(localStorage.getItem('users'))
    users.sort(function (a, b) {
        return a.wealth.toString().localeCompare(b.wealth.toString());
    });
     console.log(users);
}

function calculateTotalWealth() { 
    users = JSON.parse(localStorage.getItem('users'))
    let totalWealth = 0;
    for (i = 0; i < users.length; i++) { 
        totalWealth += users[i]['wealth']
    }
    console.log(totalWealth)
}

fetchUsers();

module.exports = { fetchUsers, doubleWealth, millionaires, sortByRichest, calculateTotalWealth};