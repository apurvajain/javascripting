const { copyFileSync } = require("fs");
const fetch = require("node-fetch");
const {LocalStorage} = require("node-localstorage");
var localStorage = new LocalStorage('./scratch'); 

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

function addUser(){
  fetchUsers().then(user => {
    var users = JSON.parse(localStorage.getItem('profile'));
    users.push(user);
    localStorage.setItem('profile', JSON.stringify(users));
    displayAllUsers();
  });
}

function doubleMoney() {
  var users = JSON.parse(localStorage.getItem('profile'));
  
  users.map((user)=>{
    user.money = user.money*2;
  }) 
  localStorage.setItem('profile', JSON.stringify(users));
  displayAllUsers();
}

function showMillionares(){
  var users = JSON.parse(localStorage.getItem('profile'));
  var filterUsers = users.filter((user)=>{
      if(user.money>=1000000 && user.money<1000000000){
          return true;
      }
  });
  console.log(`<--------Millionare Users : START-------->`);
  filterUsers.forEach((user)=>{
    console.log('name = ' + user.name + '     '+'money = ' + user.money);
  })
  console.log(`<--------Users : END-------->`);

}


function displayAllUsers() {
  var users = JSON.parse(localStorage.getItem('profile'));
  console.log(`<--------Users : START-------->`);
  users.forEach(user => {
    console.log('name = ' + user.name + '     '+'money = ' + user.money);
  });
  console.log(`<--------Users : END-------->`);

}


function setMoney(){
  return Math.random() * (1000000000 - 1000000) + 1000000;
}

function clearLocalStorage() {
  localStorage.clear();
}

function sortByRichest(){
  var users = JSON.parse(localStorage.getItem('profile'));
  users.sort((a,b) => (a.money > b.money) ? -1 : ((b.money> a.money) ? 1 : 0));
  console.log(`<--------Users(Sort By Money) : START-------->`);
  users.forEach((user)=>{
    console.log('name = ' + user.name + '     '+'money = ' + user.money);
  });
  console.log(`<--------Users : END-------->`);
}


function totalWealth(){
  var users = JSON.parse(localStorage.getItem('profile'));
  let wealth = users.reduce(function (agg,evl){
      return agg +evl.money;
  },0);
    console.log('Total Wealth = ' + wealth);
}



module.exports = {
  addUser,
  fetchUsers,
  displayAllUsers,
  setMoney,
  clearLocalStorage,
  fetchAllUsers,
  doubleMoney,
  showMillionares,
  sortByRichest,
  totalWealth
}
  