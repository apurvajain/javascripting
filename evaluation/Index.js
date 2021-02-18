const { LocalStorage } = require('node-localstorage');
const utils = require('./Utils');

const localStorage = new LocalStorage('./UserWealthStorage');

async function fetchAndDisplayAllUsers() {
  const users = await utils.fetchThreeUsers();
  utils.setProfile(users);
  utils.displayAllUsers();
}

async function addUser() {
  const newUser = await utils.fetchUser();
  let users = [];
  const retrievedUsers = JSON.parse(localStorage.getItem('profile'));
  if (retrievedUsers !== null) users = retrievedUsers;
  users.push(newUser);
  utils.setProfile(users);
  utils.displayAllUsers();
}

function doubleMoney() {
  let users = JSON.parse(localStorage.getItem('profile'));
  if (users === null) return;

  users = users.map((user) => {
    user.money *= 2;
    return user;
  });

  utils.setProfile(users);
  utils.displayAllUsers();
}

module.exports = {
  fetchAndDisplayAllUsers,
  addUser,
  doubleMoney,
};
