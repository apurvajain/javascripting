const fetch = require("node-fetch");
var LocalStorage = require("node-localstorage").LocalStorage,
localStorage = new LocalStorage("./scratch");


var retrievedUsers = localStorage.getItem("users");

if(retrievedUsers===null){
  var users=[];
}
else{
  var users = JSON.parse(retrievedUsers);
}




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
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
};

module.exports = { fetchUsers, users,localStorage };