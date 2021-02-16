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
        userDetails["name"] = data.results[0].name.first + " " + data.results[0].name.last;
        userDetails["wealth"] = Math.floor(Math.random() * 10000000 + 10000);
        //console.log(userDetails)
        users.push(userDetails);
        localStorage.setItem("users",JSON.stringify(users))
        return users;
      })
      .catch((err) => {
        console.log(err);
      });

    usersCount--;
  }
}

function displayAllUsers(){
    let usersDetails = JSON.parse(localStorage.getItem("users"))
    usersDetails.forEach((user)=>{
        console.log(user.name + " " + user.wealth)
    })
}
//console.log(fetchUsers(3));
module.exports = {fetchUsers,displayAllUsers}
