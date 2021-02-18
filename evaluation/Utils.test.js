const fetch = require('node-fetch');
const { LocalStorage } = require('node-localstorage');
const utils = require('./Utils');

const localStorage = new LocalStorage('./UserWealthStorage');

jest.mock('node-fetch');
const { Response } = jest.requireActual('node-fetch');

test(' getMoney() should return a number ', () => {
  expect(typeof utils.getMoney()).toBe('number');
});

test(' getMoney() should return a number greater than MIN_MONEY and less than MAX_MONEY', () => {
  expect(utils.getMoney()).toBeGreaterThan(utils.MIN_MONEY - 1);
  expect(utils.getMoney()).toBeLessThan(utils.MAX_MONEY);
});

test('fetchUser() should call with mock fetch api one time and return user object with name and money  ', async () => {
  const firstname = 'Apoorva'; const lastname = 'Choudhary';
  const user = JSON.stringify({ results: [{ name: { first: firstname, last: lastname } }] });
  fetch.mockReturnValueOnce(Promise.resolve(new Response(user)));
  const userDetails = await utils.fetchUser();
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith('https://randomuser.me/api');
  expect(userDetails).toHaveProperty('name');
  expect(userDetails).toHaveProperty('money');
  expect(userDetails.name).toBe(`${firstname} ${lastname}`);
  fetch.mockClear();
});

test('fetchThreeUsers() should return array of 3 users with property name and money ', async () => {
  const firstname = 'Apoorva'; const lastname = 'Choudhary';
  const mockUser = JSON.stringify({ results: [{ name: { first: firstname, last: lastname } }] });
  fetch.mockReturnValueOnce(Promise.resolve(new Response(mockUser)))
    .mockReturnValueOnce(Promise.resolve(new Response(mockUser)))
    .mockReturnValueOnce(Promise.resolve(new Response(mockUser)));
  const users = await utils.fetchThreeUsers();
  expect(fetch).toHaveBeenCalledTimes(3);
  expect(fetch).toHaveBeenCalledWith('https://randomuser.me/api');
  expect(users.length).toBe(3);
  expect(users[0]).toHaveProperty('name');
  expect(users[0]).toHaveProperty('money');
  fetch.mockClear();
});

test("setProfile() should set users in localstorage under key 'profile' ", async () => {
  const users = [{ name: 'appy', money: 12345678 }, { name: 'shub', money: 34567821 }];
  utils.setProfile(users);
  expect(JSON.parse(localStorage.getItem('profile'))).toEqual(users);
});
