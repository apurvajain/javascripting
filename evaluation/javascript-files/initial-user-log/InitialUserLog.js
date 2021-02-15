const { localStorage } = require("../initial-user-fetch/InitialUserFetch");
var retrievedUsers = localStorage.getItem("users");
var users = JSON.parse(retrievedUsers);




function logUsers() {
  users.forEach((user) => {
    console.log(
      "Name: " +
        user[0].name.title +
        " " +
        user[0].name.first +
        " " +
        user[0].name.last +
        " wealth:" +
        user[0].wealth
    );
  });
}


