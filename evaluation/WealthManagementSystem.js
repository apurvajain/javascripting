const fetch = require("node-fetch");
var LocalStorage = require("node-localstorage").LocalStorage,
  localStorage = new LocalStorage("./scratch");

var users = [];
function compare(a, b) {
  if (a.wealth < b.wealth) return 1;
  if (a.wealth > b.wealth) return -1;
  return 0;
}
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
        console.log();
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
  console.log();
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
  console.log();
}

function sortByRichest() {
  var fetchUsers = JSON.parse(localStorage.getItem("users"));
  if (!fetchUsers) {
    console.log("   You dont have any users");
    return;
  }
  const sortedUsers = fetchUsers.sort(compare);
  console.log(sortedUsers);
  console.log();
}

function getTotalWealth() {
  var fetchUsers = JSON.parse(localStorage.getItem("users"));
  if (!fetchUsers) {
    console.log(" You dont have any users");
    return;
  }
  var total = 0;
  for (var i in fetchUsers) {
    total += fetchUsers[i].wealth;
  }
  console.log("Total wealth of all the users: ", total);
  console.log();
}

module.exports = {
  fetchUsers,
  doubleWealth,
  getMillionaires,
  sortByRichest,
  getTotalWealth,
};
