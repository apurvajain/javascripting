const user = require('./Users');

test('Local Storgae saves and retrives data', () => {
  const users = [{ name: 'Abhi', age: 21 }, { name: 'Adi', age: 22 }];
  user.saveUsers(users);
  const gotUsers = user.getUsers();
  expect(gotUsers).toEqual([{ name: 'Abhi', age: 21 }, { name: 'Adi', age: 22 }]);
});

test('Clear local storage and handle empty local storgae', () => {
  user.clearLocalStorage();
  const gotUsers = user.getUsers();
  expect(gotUsers).toEqual([]);
});
