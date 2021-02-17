const fetch = require('node-fetch');
const { LocalStorage } = require('node-localstorage');

localStorage = new LocalStorage('./scratch');


  let users = JSON.parse(localStorage.getItem('users'));
  if (!users) {
    users = [];

}
function fetchUser(userCount) {
  // const users = getDetails();
  for (let initialCount = 0; initialCount < userCount; initialCount += 1) {
    fetch('https://randomuser.me/api')
      .then((response) => response.json())
      .then((JSONdata) => {
        const userNameWealth = {};
        userNameWealth.name = `${JSONdata.results[0].name.first}+ ${JSONdata.results[0].name.last}`;
        userNameWealth.wealth = Math.floor(Math.random() * 10000000 + 10000);

        users.push(userNameWealth);
        localStorage.setItem('users', JSON.stringify(users));
        return users;
      })

      .catch((err) => {
        console.log(err);
      });
  }
}

function addAndDisplay() {
  const userList = users;
  fetchUser(1);
  userList.forEach((user) => {
    console.log(`Name: ${user.name}  ` + `Wealth: ${user.wealth}`);
    
  });
}

function doubleWealth() {
   const userList = users
  const doubledMoney = userList.map((user) => ({
    name: user.name,
    wealth: user.wealth * 2,
  }));
  localStorage.setItem('users', JSON.stringify(doubledMoney));
}

function showMillionaires() {
   const userList = users
  userList.forEach((user) => {
    if (user.wealth > 10000000) {
      console.log(`Name: ${user.name}  ` + `Wealth: ${user.wealth}`);
    }
  });
}

function sortByRichest() {
  const userList =users
  userList.sort((a, b) => b.wealth - a.wealth);
  localStorage.setItem('users', JSON.stringify(userList));
  userList.forEach((user) => {
    console.log(`Name: ${user.name}  ` + `Wealth: ${user.wealth}`);
  });
}

 function totalWealth() {
  const usersList = users;
  const totalWealth = usersList.reduce((accumulator, currentValue) => accumulator + currentValue.wealth, 0);
  console.log(totalWealth);
}

function clearLocal() {
  localStorage.clear();
}
// clearLocal()
module.exports = {
  fetchUser, addAndDisplay, doubleWealth, showMillionaires, sortByRichest, totalWealth, clearLocal,
};
