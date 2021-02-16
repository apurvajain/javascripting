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

function doubleMoney() {
    let allUsers=getAllUserDetails();
    let doubledWealth=allUsers.map((user)=> {
        return ({
            fullname: user.fullname,
            wealth: user.wealth*2 })
    });
    localStorage.setItem("allUsers", JSON.stringify(doubledWealth));
}

function totalWealth() {
    let allUsers = getAllUserDetails();
    let total = allUsers.reduce((accumulator, current) => {
       return accumulator += current.wealth
    }, 0)
    console.log(total);
}
  

function sortByRichest() {
    let allUsers = getAllUserDetails();
    sorted=allUsers.sort((a, b) => (a.wealth < b.wealth) ? 1 : -1);
    for(object in sorted)
    {
        console.log("name: "+sorted[object].fullname+" wealth :"+sorted[object].wealth);

    }

}

function showMillionaires() {
    let allUsers = getAllUserDetails();
    allUsers.forEach((user)=> {
        if(user.wealth>1000000) {
            millionaire=user.wealth
            console.log("name: "+user.fullname+" wealth: "+user.wealth);
        }
    })
    console.log("These are the millionaires");
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
            console.log(error);
        })
}




//fetchUser("https://randomuser.me/api");
module.exports={fetchUser, clearUserDetails, displayUsers, doubleMoney, showMillionaires, sortByRichest, totalWealth}