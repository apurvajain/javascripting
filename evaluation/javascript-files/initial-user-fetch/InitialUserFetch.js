const fetch = require("node-fetch");
var LocalStorage = require("node-localstorage").LocalStorage,
localStorage = new LocalStorage("./scratch");

const users = [];
const fetchUsers = (numberOfUsers) => {
  let count = 0;
  for (let i = 0; i < numberOfUsers; i++) {
    fetch("https://randomuser.me/api")
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        users.push(jsonResponse["results"]);
        count++;
        if (count === numberOfUsers) {
          localStorage.setItem("users", JSON.stringify(users));
          console.log(localStorage.getItem("users"));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
};


fetchUsers(3);


module.exports = { fetchUsers, users };
