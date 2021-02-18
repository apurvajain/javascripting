const { LocalStorage } = require('node-localstorage');
const utils = require('./Utils');

const localStorage = new LocalStorage('./UserWealthStorage');

async function fetchAndDisplayAllUsers() {
  const users = await utils.fetchThreeUsers();
  utils.setProfile(users);
  const finalUsers = utils.getProfile();
  utils.displayAllUsers(finalUsers, 'Users in Wealth System');
}

async function addUser() {
  const newUser = await utils.fetchUser();
  let users = [];
  const retrievedUsers = JSON.parse(localStorage.getItem('profile'));
  if (retrievedUsers !== null) users = retrievedUsers;
  users.push(newUser);
  utils.setProfile(users);
  const finalUsers = utils.getProfile();
  utils.displayAllUsers(finalUsers, 'Users in Wealth System');
}

function doubleMoney() {
  let users = JSON.parse(localStorage.getItem('profile'));
  if (users === null) return;

  users = users.map((user) => {
    user.money *= 2;
    return user;
  });

  utils.setProfile(users);
  const finalUsers = utils.getProfile();
  utils.displayAllUsers(finalUsers, 'Users Money Doubled');
}

function showMillionares() {
  const users = utils.getProfile();
  const millionares = users.filter((user) => {
    if (user.money >= 1000000) {
      return true;
    }
  });
  utils.displayAllUsers(millionares, 'Millionares');
}

module.exports = {
  fetchAndDisplayAllUsers,
  addUser,
  doubleMoney,
  showMillionares,
};
