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
    let allData = getData()
    if(allData.length > 0) {
        allData.forEach((user)  => {
            allUsers.push(user)
        })
    }
   localStorage.setItem("users", JSON.stringify(allUsers));
}

function clearData() {
    let allData = getData()
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
   let allData = getData();
   allData.forEach((user) => {
    console.log(user.fullname + " " + user.wealth)
   })
}

function addUser(url, first) {
    getUser(url, first);
    showAllUsers()
}

function doubleMoney() {
   let allData = getData();
   allData.forEach((user) => {
     user.wealth = user.wealth * 2
   })
   allData.length = 
   setData(allData)
   showAllUsers()
   
}

function showMillionares() {
   let allData = getData();
   let millionare = 0;
   let millionareUser;
   allData.forEach((user) => {
     user.wealth = user.wealth * 2
     if(user.wealth > millionare){
       millionare = user.wealth;
       millionareUser = user
     } 
    })
   console.log("Millionare user is: ")
   console.log(millionareUser)
   console.log("Millionare user end ")
}



module.exports = {callFirst, addUser, doubleMoney, showAllUsers, showMillionares}
