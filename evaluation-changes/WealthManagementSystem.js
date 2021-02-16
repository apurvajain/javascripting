const {LocalStorage} = require("node-localstorage");
var localStorage = new LocalStorage('./scratch'); 
const fetch = require("node-fetch");

function displayUsers() {
    let allUsers = getAllUserDetails();
    allUsers.forEach((user) => {
     console.log("name : "+user.fullname + " wealth : " + user.wealth)
    })
 } 

function clearUserDetails() {
    let allUsers = getAllUserDetails();
    while (allUsers.length) {
        allUsers.pop();
    }
    localStorage.setItem("allUsers", JSON.stringify(allUsers));
  }

function randomNumber(min, max) {  
    return Math.floor(Math.random() * (max - min) + min); 
}  

function getAllUserDetails() {
    let users = JSON.parse(localStorage.getItem("allUsers") || "[]");
    return users;
}

function storeUserDetails(allUserDetails) {
   let allUsers=getAllUserDetails();
   if(allUsers.length>0) {
        allUsers.forEach((user)=> {
            allUserDetails.push(user)
        })
   }
   localStorage.setItem("allUsers", JSON.stringify(allUserDetails));
}

function fetchUser(url) {
    let randomWealth = randomNumber(80000, 2000000);
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function(data) {
            let userDetails=[];
            let eachUserDetail={};
            const fullName=data.results[0].name.first+" "+data.results[0].name.last;
            eachUserDetail.fullname=fullName;
            eachUserDetail.wealth=randomWealth;
            userDetails.push(eachUserDetail);
            //console.log(userDetails);
            storeUserDetails(userDetails);
            return eachUserDetail;
        })
        .catch((error)=> {
            //console.log("hi")
            console.log(error);
        })
}




//fetchUser("https://randomuser.me/api");
module.exports={fetchUser, clearUserDetails, displayUsers}