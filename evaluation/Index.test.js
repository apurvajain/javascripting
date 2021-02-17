const fetch = require('node-fetch');
const { LocalStorage } = require('node-localstorage');

const localStorage = new LocalStorage('./UserWealthStorage');
const index = require('./Index');

const { Response } = jest.requireActual('node-fetch');

jest.mock('node-fetch', () => jest.fn());

test('fetch should be called one time and return user object with name and money  ', async () => {
  const firstname = 'Apoorva'; const
    lastname = 'Choudhary';
  const user = JSON.stringify({ results: [{ name: { first: firstname, last: lastname } }] });
  fetch.mockReturnValue(Promise.resolve(new Response(user)));
  const userDetails = await index.fetchUser();
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith('https://randomuser.me/api');
  expect(userDetails.name).toBe(`${firstname}  ${lastname}`);
  fetch.mockClear();
});

test(' money function should return a number ', () => {
  expect(typeof index.getMoney()).toBe('number');
});

test(' money function should return a number greater than MIN_MONEY and less than MAX_MONEY', () => {
  expect(index.getMoney()).toBeGreaterThan(index.MIN_MONEY - 1);
  expect(index.getMoney()).toBeLessThan(index.MAX_MONEY);
});

test('fetchAndDisplayAllUsers function call fetch api 3 times  ', async () => {
  localStorage.clear();
  const firstname = 'Apoorva'; const lastname = 'Choudhary';
  const user = JSON.stringify({ results: [{ name: { first: firstname, last: lastname } }] });
  fetch.mockReturnValueOnce(Promise.resolve(new Response(user)))
    .mockReturnValueOnce(Promise.resolve(new Response(user)))
    .mockReturnValueOnce(Promise.resolve(new Response(user)));
  await index.fetchAndDisplayAllUsers();
  expect(fetch).toHaveBeenCalledTimes(3);
  expect(fetch).toHaveBeenCalledWith('https://randomuser.me/api');
  fetch.mockClear();
});

test("fetchAndDisplayAllUsers function stores three users in local storage key 'profile'  ", async () => {
  localStorage.clear();
  const firstname = 'Apoorva'; const lastname = 'Choudhary';
  const user = JSON.stringify({ results: [{ name: { first: firstname, last: lastname } }] });
  fetch.mockResolvedValueOnce(new Response(user))
    .mockReturnValueOnce(Promise.resolve(new Response(user)))
    .mockReturnValueOnce(Promise.resolve(new Response(user)));
  await index.fetchAndDisplayAllUsers();

  expect(JSON.parse(localStorage.getItem('profile')).length).toBe(3);
  fetch.mockClear();
});

test("addUser function should add  1 user  to localstorage key 'profile'  ", async () => {
  localStorage.clear();
  const firstname = 'Apoorva'; const lastname = 'Choudhary';
  const user = JSON.stringify({ results: [{ name: { first: firstname, last: lastname } }] });
  fetch.mockReturnValueOnce(Promise.resolve(new Response(user)))
    .mockReturnValueOnce(Promise.resolve(new Response(user)))
    .mockReturnValueOnce(Promise.resolve(new Response(user)))
    .mockReturnValueOnce(Promise.resolve(new Response(user)));
  await index.fetchAndDisplayAllUsers();
  await index.addUser();
  expect(JSON.parse(localStorage.getItem('profile')).length).toBe(4);
  fetch.mockClear();
});

test(' should double money', async () => {
  localStorage.clear();
  const firstname = 'Apoorva'; const lastname = 'Choudhary';
  const user = JSON.stringify({ results: [{ name: { first: firstname, last: lastname } }] });
  fetch.mockReturnValueOnce(Promise.resolve(new Response(user)))
    .mockReturnValueOnce(Promise.resolve(new Response(user)))
    .mockReturnValueOnce(Promise.resolve(new Response(user)));
  await index.fetchAndDisplayAllUsers();
  const users = JSON.parse(localStorage.getItem('profile'));
  index.doubleMoney();
  const updatedUsers = JSON.parse(localStorage.getItem('profile'));
  users.forEach((user, idx) => {
    expect(user.money * 2).toBe(updatedUsers[idx].money);
  });
});
