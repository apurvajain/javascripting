const { LocalStorage } = require('node-localstorage');

const localStorage = new LocalStorage('./scratch');

const saveUsers = (users) => {
  localStorage.setItem('users', JSON.stringify(users));
};

const getUsers = () => {
  const retrievedUsers = localStorage.getItem('users');
  let users = [];
  if (retrievedUsers !== null) {
    users = JSON.parse(retrievedUsers);
  }
  return users;
};

module.exports = {
  saveUsers,
  getUsers,
};
