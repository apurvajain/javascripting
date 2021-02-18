const fetch = require('node-fetch');
const { LocalStorage } = require('node-localstorage');

const localStorage = new LocalStorage('./UserWealthStorage');

const MAX_MONEY = 1000000;
const MIN_MONEY = 10;

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
      const person = { name: `${fullname.first} ${fullname.last}`, money };
      return person;
    }).catch((err) => { console.log(err); });
}

async function fetchThreeUsers() {
  const users = await Promise.all([fetchUser(), fetchUser(), fetchUser()]);
  return users;
}

function displayAllUsers(users, context) {
  console.log(`<--------${context} : START-------->`);
  users.forEach((user) => {
    console.log(`name = ${user.name}  money = ${user.money}`);
  });
  console.log(`<--------${context} : END-------->`);
}

function setProfile(users) {
  localStorage.setItem('profile', JSON.stringify(users));
}
function getProfile() {
  return JSON.parse(localStorage.getItem('profile'));
}

module.exports = {
  fetchUser,
  MAX_MONEY,
  MIN_MONEY,
  getMoney,
  displayAllUsers,
  fetchThreeUsers,
  setProfile,
  getProfile,
};
