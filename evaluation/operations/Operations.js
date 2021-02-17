/* eslint-disable dot-notation */
/* eslint-disable no-loop-func */
const fetch = require('node-fetch');
const userOps = require('../users/Users');
const utilities = require('../utilities/Utilities');

const MIN_WEALTH = 50;
const MAX_WEALTH = 3000000;

const fetchUsers = (numberOfUsers) => {
  let users = userOps.getUsers();
  let fetchedUsers = [];
  let count = 0; // to keep track of the number of users fetched
  for (let i = 0; i < numberOfUsers; i += 1) {
    fetchedUsers = fetchedUsers.concat(fetch('https://randomuser.me/api')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`No user fetched! ${response.status}`);
        }
        return response.json();
      })
      .then((jsonResponse) => {
        const user = jsonResponse.results;
        user[0]['wealth'] = utilities.generateRandomValue(MIN_WEALTH, MAX_WEALTH);
        users = users.concat(user);
        count += 1;
        if (count === numberOfUsers) {
          userOps.saveUsers(users);
        }
        return user[0];
      })
      .catch((error) => error));
  }
  return Promise.all(fetchedUsers).then(() => 'Users fetched and saved successfully');
};

const doubleMoney = () => {
  const users = userOps.getUsers();
  const updatedUsers = users.map((user) => {
    const updatedUser = user;
    updatedUser.wealth *= 2;
    return updatedUser;
  });
  userOps.saveUsers(updatedUsers);
};

module.exports = {
  fetchUsers,
  doubleMoney,
};
