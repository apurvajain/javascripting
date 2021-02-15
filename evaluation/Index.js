const { copyFileSync } = require("fs");
const fetch = require("node-fetch");
const {LocalStorage} = require("node-localstorage");
var localStorage = new LocalStorage('./scratch'); 
var users = [];
function fetchUsers() {
    fetch(`https://randomuser.me/api`)
      .then(function (response) {
        return response.json();
      })
      .then(function (userData) {
        console.log(`<--------: START-------->`);
        const fullname = userData.results[0].name;
        let money = setMoney();
        localStorage.setItem(`${fullname.first}  ${fullname.last}`,setMoney());
        console.log(`${fullname.first}  ${fullname.last} ` + money);
        console.log(`<---------: END--------->`);
      })
  }



function displayAllUsers() {
//   for (var key in localStorage){
//     console.log(key)
//  }
  // console.log(localStorage.getItem('Profile'));
}

function setMoney(){
  return Math.random() * (1000 - 10) + 10;
}

function clearLocalStorage() {
  localStorage.clear();
}


module.exports = {
  fetchUsers,
  displayAllUsers,
  setMoney,
  clearLocalStorage
}
  
   // localStorage.setItem('Profile',`${fullname.first}  ${fullname.last}`) ;
        // console.log(localStorage.getItem('Profile'));
            // console.log(localStorage.getItem('Name'));
        // localstorage.clear()
            // users.push(Math.random());