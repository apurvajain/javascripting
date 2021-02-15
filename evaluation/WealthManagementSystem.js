const {LocalStorage} = require("node-localstorage");
const fetch = require("node-fetch");
var localStorage = new LocalStorage('./scratch'); 

function randomNumber(min, max) {  
    return Math.floor(Math.random() * (max - min) + min); 
}  

function fetchUsers(url) {
    let allUsers = getAllUsers();
    let count = 1;
    if(allUsers.length === 0) {
          count = 3;
    }
    //console.log("count:" + count)
    while(count--) {
        let wealth = randomNumber(90000, 100000);
        fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let userDetails = [];
            let eachUserDetails = {};
            const fullname = data.results[0].name.first + " " + data.results[0].name.last;
            eachUserDetails.fullname = fullname;
            eachUserDetails.wealth = wealth;
            userDetails.push(eachUserDetails)
            storeUser(userDetails)
            console.log("details Length" + userDetails.length)
            return eachUserDetails
          })
        .catch((err) => {
            console.log(err)
        })
    }
     
}



function storeUser(allUsers) {
    let allData = getAllUsers()
    if(allData.length > 0) {
        allData.forEach((user)  => {
            allUsers.push(user)
        })
    }
   localStorage.setItem("users", JSON.stringify(allUsers));
}

function getAllUsers() {
    let users = JSON.parse(localStorage.getItem("users") || "[]");
    return users;
}

function showAllUsers() {
   let allData = getAllUsers();
   allData.forEach((user) => {
    console.log(user.fullname + " " + user.wealth)
   })
}




module.exports = {fetchUsers, showAllUsers, storeUser}