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
  Promise.all([fetchUsers(),fetchUsers(),fetchUsers()]).then(users => {
    localStorage.setItem('profile', JSON.stringify(users));
    displayAllUsers();
  });
}



function displayAllUsers() {
  var users = JSON.parse(localStorage.getItem('profile'));
  console.log(`<--------Users : START-------->`);
  users.forEach(user => {
    console.log('name ' + user.name + '     '+'money' + user.money);
  });
  console.log(`<--------Users : END-------->`);

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