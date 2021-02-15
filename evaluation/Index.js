const { copyFileSync } = require("fs");
const fetch = require("node-fetch");
const {LocalStorage} = require("node-localstorage");
var localStorage = new LocalStorage('./scratch'); 
var users = [];
function fetchUsers() {
    return fetch(`https://randomuser.me/api`)
      .then(function (response) {
        return response.json();
      })
      .then(function (userData) {
        const fullname = userData.results[0].name;
        let money = setMoney();
        var person = {name: `${fullname.first}  ${fullname.last}`,money:setMoney()};
        return person;
  
      })
  }

function fetchAllUsers(){
  for(let i=0;i<3;i++){
    fetchUsers().then((user)=>{ console.log(user); users.push(user);});
   
  }
  
  localStorage.setItem('profile', users);
  
}



function displayAllUsers() {
  console.log(localStorage.getItem('profile'));
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
  clearLocalStorage,
  fetchAllUsers
}
  
   // localStorage.setItem('Profile',`${fullname.first}  ${fullname.last}`) ;
        // console.log(localStorage.getItem('Profile'));
            // console.log(localStorage.getItem('Name'));
        // localstorage.clear()
            // users.push(Math.random());