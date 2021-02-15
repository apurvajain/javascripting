const fetch = require("node-fetch");
var LocalStorage = require("node-localstorage").LocalStorage,
  localStorage = new LocalStorage("./scratch");

var users = [];
async function fetchUsers() {
  var fetchUsers = JSON.parse(localStorage.getItem("users"));
  if (!fetchUsers) fetchUsers = [];
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
          fetchUsers.push(obj);
          localStorage.setItem("users", JSON.stringify(fetchUsers));
        });
        console.log("<---User details: START--->");
        console.log(JSON.parse(localStorage.getItem("users")));
        console.log("<---User details: END--->");
      });
  } catch (err) {
    console.log(err);
  }
}

function doubleWealth() {
  var fetchUsers = JSON.parse(localStorage.getItem("users"));
  if (!fetchUsers) {
    console.log("   You dont have any users");
    return;
  }
  for (var i in fetchUsers) {
    fetchUsers[i].wealth = fetchUsers[i].wealth * 2;
  }
  //   var updatedWealth = fetchUsers.map((item) => item.wealth * 2);
  //   console.log(updatedWealth);
  localStorage.setItem("users", JSON.stringify(fetchUsers));
  console.log("<---User details: START--->");
  console.log(JSON.parse(localStorage.getItem("users")));
  console.log("<---User details: END--->");
}

function getMillionaires() {
  var fetchUsers = JSON.parse(localStorage.getItem("users"));
  if (!fetchUsers) {
    console.log("   You dont have any users");
    return;
  }
  const millionaires = fetchUsers.filter(function (users) {
    return users.wealth > 1000000;
  });
  console.log(millionaires);
}

module.exports = { fetchUsers, doubleWealth, getMillionaires };
