const fetch = require('node-fetch');
const { LocalStorage } = require('node-localstorage');

const localStorage = new LocalStorage('./UserWealthStorage');
const MAX_MONEY = 1000000000;
const MIN_MONEY = 1000000;

function getMoney() {
  // Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive):
  // Range of this is between MIN_MONEY(inclusive), and MAX_MONEY (exclusive);
  return Math.random() * (MAX_MONEY - MIN_MONEY) + MIN_MONEY;
}

function fetchUser() {
  return fetch('https://randomuser.me/api')
    .then((response) => response.json())
    .then((userData) => {
      const fullname = userData.results[0].name;
      const money = getMoney();
      const person = { name: `${fullname.first}  ${fullname.last}`, money };
      return person;
    }).catch((err) => { console.log(err); });
}

function displayAllUsers() {
  const users = JSON.parse(localStorage.getItem('profile'));
  console.log('<--------Users : START-------->');
  users.forEach((user) => {
    console.log(`name = ${user.name}  money = ${user.money}`);
  });
  console.log('<--------Users : END-------->');
}

async function fetchAndDisplayAllUsers() {
  const users = await Promise.all([fetchUser(), fetchUser(), fetchUser()]);
  localStorage.setItem('profile', JSON.stringify(users));
  displayAllUsers();
}

async function addUser() {
  const user = await fetchUser();
  const users = JSON.parse(localStorage.getItem('profile'));
  users.push(user);
  localStorage.setItem('profile', JSON.stringify(users));
  displayAllUsers();
}

function doubleMoney() {
  let users = JSON.parse(localStorage.getItem('profile'));

  users = users.map((user) => {
    user.money *= 2;
    return user;
  });
  localStorage.setItem('profile', JSON.stringify(users));
  displayAllUsers();
}

module.exports = {
  fetchUser,
  MAX_MONEY,
  MIN_MONEY,
  getMoney,
  fetchAndDisplayAllUsers,
  addUser,
  doubleMoney,
};
