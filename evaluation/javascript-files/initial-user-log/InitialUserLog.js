const { localStorage } = require("../initial-user-fetch/InitialUserFetch");
var retrievedUsers = localStorage.getItem("users");
var users = JSON.parse(retrievedUsers);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

users.forEach((user) => {
  user[0]["wealth"] = getRandomInt(5000,100000000);
  console.log(
    "Name: "+user[0].name.title + " " + user[0].name.first + " " + user[0].name.last+" wealth:"+user[0].wealth
  );
});
