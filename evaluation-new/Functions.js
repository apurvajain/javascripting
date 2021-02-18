const { LocalStorage } = require('node-localstorage');

const localStorage = new LocalStorage('./scratch1');

function doubleWealth() {
  const users = JSON.parse(localStorage.getItem('users'));
  // console.log(typeof users);
  for (obj in users) {
    users[obj].wealth *= 2;
    console.log(`FullName: ${users[obj].fullName}\tWealth: ${users[obj].wealth}`);
  }
}

function showMillionares() {
  const users = JSON.parse(localStorage.getItem('users'));
  for (obj in users) {
    if (users[obj].wealth > 1000000) console.log(`FullName: ${users[obj].fullName}\tWealth: ${users[obj].wealth}`);
  }
}

function sortByWealth() {
  const users = JSON.parse(localStorage.getItem('users'));
  const sorted = users.sort((a, b) => (a.wealth < b.wealth ? 1 : -1));
  for (obj in users) {
    console.log(`FullName: ${users[obj].fullName}\tWealth: ${users[obj].wealth}`);
  }
}
function calculateWealth() {
  let sum = 0;
  const users = JSON.parse(localStorage.getItem('users'));
  for (obj in users) sum += users[obj].wealth;
  console.log(`Total sum: ${sum}`);
}
function clearStorage() {
  localStorage.clear();
}
module.exports = {
  doubleWealth,
  showMillionares,
  sortByWealth,
  calculateWealth,
  clearStorage
};
