const { localStorage } = require("../initial-user-fetch/InitialUserFetch");
var retrievedUsers = localStorage.getItem("users");
var users = JSON.parse(retrievedUsers);


users.forEach((user) => {
    console.log(user[0].wealth);
    const newWealth=user[0]["wealth"]*2;
    user[0]["wealth"]=newWealth;
});

localStorage.setItem("users", JSON.stringify(users));