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
            //console.log("details Length" + userDetails.length)
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

function doubleMoney() {
    let allData = getAllUsers();
    let doubledData = allData.map((user) => {
         return ({
           fullname : user.fullname,
           wealth : user.wealth * 2})
       })
    localStorage.setItem("users", JSON.stringify(doubledData));
 }

 function showMillionares() {
    let allData = getAllUsers();
    let millionare = 0;
    let millionareUser;
    allData.forEach((user) => {
      if(user.wealth > millionare){
        millionare = user.wealth;
        millionareUser = user
      } 
     })
    console.log("Millionare user is: ")
    console.log(millionareUser)
    console.log("Millionare user end ")
 }

function clearData() {
    let allData = getAllUsers()
    while (allData.length) {
        allData.pop();
    }
    localStorage.setItem("users", JSON.stringify(allData));
  }
 
 


module.exports = {fetchUsers, showAllUsers, storeUser, doubleMoney, showMillionares, clearData}