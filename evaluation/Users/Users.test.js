const user = require('./Users');

test('Handle empty local storgae', () => {
  const gotUsers = user.getUsers();
  expect(gotUsers).toEqual([]);
});

test('Local Storgae saves and retrives data', () => {
  const users = [{ name: 'Abhi', age: 21 }, { name: 'Adi', age: 22 }];
  user.saveUsers(users);
  const gotUsers = user.getUsers();
  expect(gotUsers).toEqual([{ name: 'Abhi', age: 21 }, { name: 'Adi', age: 22 }]);
});
