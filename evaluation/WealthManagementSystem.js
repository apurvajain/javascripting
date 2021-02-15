const {LocalStorage} = require("node-localstorage");
const { get } = require("http");
const fetch = require("node-fetch");
const { clear } = require("console");
var localStorage = new LocalStorage('./scratch'); 
function randomNumber(min, max) {  
    return Math.floor(Math.random() * (max - min) + min); 
}  
let allUsers = [];
let userDetails = {
    fullname : "",
    wealth : ""
};

function callFirst(url, first) {
    getUser(url, first)
    getUser(url, first)
    getUser(url, first)
}

function getUser(url, first) {
    if(first)
      clearData()
    let wealth = randomNumber(90000, 100000);
    fetch(url)
     .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      fullname = data.results[0].name.first + " " + data.results[0].name.last;
      userDetails.fullname = fullname;
      userDetails.wealth = wealth;
      allUsers.length = 0
      allUsers.push(userDetails);
    //   console.log("user:" + allUsers[0].fullname)
      setData(allUsers)
      showAllUsers()
    //   console.log(allUsers)
     })
    
    
     
  
}



function setData(allUsers) {
    allData = getData()
    if(allData.length > 0) {
        allData.forEach((user)  => {
            allUsers.push(user)
        })
    }
   localStorage.setItem("users", JSON.stringify(allUsers));
}

function clearData() {
    allData = getData()
    allData.length = 0;
    localStorage.setItem("users", JSON.stringify(allData));
}

function getData() {
    let allData = []
    users = JSON.parse(localStorage.getItem("users") || "[]");
        users.forEach(function(user, index) {
            allData[index] = user
       });
    return allData;
}

function showAllUsers() {
    let allUsers = getData();
    allUsers.forEach((user) => {
        console.log(user.fullname + " " + user.wealth)
    })
}

function addUser(url, first) {
    getUser(url, first);
    showAllUsers()
}


module.exports = {callFirst, addUser}
