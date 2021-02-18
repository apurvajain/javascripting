const { LocalStorage } = require('node-localstorage');
const fetch = require('node-fetch');

const localStorage = new LocalStorage('./UserWealthStorage');
const utils = require('./Utils');
const index = require('./Index');

const { Response } = jest.requireActual('node-fetch');

jest.mock('node-fetch');

test(" fetchAndDisplayAllUsers() should store three users in local storage under key 'profile'  ", async () => {
  const mockUsers = [{ name: 'appy', money: 12345678 }, { name: 'shubham', money: 34567812 }, { name: 'priya', money: 67812345 }];
  const fetchThreeUsersSpy = jest.spyOn(utils, 'fetchThreeUsers');
  fetchThreeUsersSpy.mockImplementation(() => Promise.resolve(mockUsers));
  await index.fetchAndDisplayAllUsers();
  expect(JSON.parse(localStorage.getItem('profile'))).toEqual(mockUsers);
  localStorage.clear();
  fetchThreeUsersSpy.mockClear();
});

test("addUser() should add 1 user to localstorage key 'profile'  ", async () => {
  localStorage.clear();
  const firstname = 'Apoorva'; const lastname = 'Choudhary';
  const user = JSON.stringify({ results: [{ name: { first: firstname, last: lastname } }] });
  fetch.mockReturnValueOnce(Promise.resolve(new Response(user)));
  await index.addUser();
  const requestedUser = JSON.parse(localStorage.getItem('profile'));
  expect(requestedUser.length).toBe(1);
  expect(requestedUser[0].name).toEqual(`${firstname} ${lastname}`);
  fetch.mockClear();
});

test('doubleMoney() should double money', async () => {
  const users = [{ name: 'Appy', money: 20000000 }, { name: 'shubh', money: 200000 }];
  utils.setProfile(users);
  index.doubleMoney();
  const updatedUsers = JSON.parse(localStorage.getItem('profile'));
  updatedUsers.forEach((user, idx) => {
    expect(user.money).toBe(users[idx].money * 2);
  });
});

test(' showMillionares should list all millionares', async () => {
  const consoleSpy = jest.spyOn(console, 'log');
  const users = [{ name: 'Appy', money: 10000 }, { name: 'shubh', money: 2000000 }];
  utils.setProfile(users);
  index.showMillionares();
  expect(consoleSpy).toHaveBeenCalledWith(`name = ${users[1].name}  money = ${users[1].money}`);
  expect(consoleSpy).not.toHaveBeenCalledWith(`name = ${users[0].name}  money = ${users[0].money}`);
});

test(' sortByRichest should sort user accordng to money in descending order', async () => {
  const users = [{ name: 'rahul', money: 10000 }, { name: 'anu', money: 2000000 }, { name: 'priya', money: 500000 }];
  utils.setProfile(users);
  const sortedUsers = index.sortByRichest();
  expect(sortedUsers).toEqual([{ name: 'anu', money: 2000000 }, { name: 'priya', money: 500000 }, { name: 'rahul', money: 10000 }]);
});
