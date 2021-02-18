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

function sortByRichest() {
  const users = utils.getProfile();
  users.sort((a, b) => ((a.money > b.money) ? -1 : ((b.money > a.money) ? 1 : 0)));
  utils.displayAllUsers(users, 'Users(Sort By Money)');
  return users;
}

function totalWealth() {
  const users = utils.getProfile();
  const wealth = users.reduce((agg, evl) => agg + evl.money, 0);
  console.log(`Total Wealth = ${wealth}`);
  return wealth;
}

module.exports = {
  fetchAndDisplayAllUsers,
  addUser,
  doubleMoney,
  showMillionares,
  sortByRichest,
  totalWealth,
};
