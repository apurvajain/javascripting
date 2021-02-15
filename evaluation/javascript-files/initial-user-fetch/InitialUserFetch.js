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

function setWealth(user){
  user[0]["wealth"] = getRandomInt(5000, 100000000);
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

const fetchUsers = (numberOfUsers) => {
  let count = 0;
  for (let i = 0; i < numberOfUsers; i++) {
    fetch("https://randomuser.me/api")
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        let user=jsonResponse["results"];
        setWealth(user);
        users.push(user);
        count++;
        if (count === numberOfUsers) {
          localStorage.setItem("users", JSON.stringify(users));
          //console.log(localStorage.getItem("users"));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
};


//fetchUsers(3);


module.exports = { fetchUsers, users,localStorage };
