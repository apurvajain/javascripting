/* eslint-disable no-param-reassign */
/* eslint-disable default-case */
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
  return updatedUsers;
};

const returnMillionares = () => {
  const users = userOps.getUsers();
  const millionares = users.filter((user) => user.wealth >= 1000000);
  return millionares;
};

const sortByRichest = () => {
  const users = userOps.getUsers();
  const sortedUsers = users.sort((user1, user2) => user1.wealth - user2.wealth);
  return sortedUsers;
};

const findTotalWealth = () => {
  const users = userOps.getUsers();
  return users.reduce((accumulator, user) => accumulator + user.wealth, 0);
};

const returnPrintData = (users = 0, templateType = 'User') => {
  const stringTemplateEnd = '<-------------------------END----------------------------->';
  const stringTemplateStart = `<------------------${templateType} Details: START----------------->\n`;
  switch (users) {
    case 0:
      users = userOps.getUsers();
      break;
    case 1:
      users = doubleMoney();
      break;
    case 2:
      users = returnMillionares();
      break;
    case 3:
      users = sortByRichest();
      break;
    case 4:
      users = findTotalWealth();
      break;
  }
  if (templateType === 'Total Wealth') {
    console.log(`<-------${templateType}:-------->:${users}`);
    return;
  }
  let requiredData = '';
  users.forEach((user) => {
    requiredData += `Name: ${user.name.title} ${user.name.first} ${user.name.last}\tWealth: ${user.wealth}\n`;
  });
  console.log(`${stringTemplateStart}\n${requiredData}\n${stringTemplateEnd}`);
};

module.exports = {
  fetchUsers,
  doubleMoney,
  returnMillionares,
  sortByRichest,
  findTotalWealth,
  returnPrintData,
};
