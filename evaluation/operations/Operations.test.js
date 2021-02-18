const operations = require('./Operations');
const userOps = require('../users/Users');

test('3 user objects should be saved', (done) => {
  operations.fetchUsers(3).then((message) => {
    expect(message).toBe('Users fetched and saved successfully');
    const retrivedUsers = userOps.getUsers();
    expect(retrivedUsers).toHaveLength(3);
    expect(retrivedUsers[0]).toHaveProperty('name');
    expect(retrivedUsers[0]).toHaveProperty('wealth');
    userOps.clearLocalStorage();
    done();
  });
});

test('Should double the wealth of all users', () => {
  const spyOnGetUser = jest.spyOn(userOps, 'getUsers');
  const spyOnSaveUser = jest.spyOn(userOps, 'saveUsers');
  const mockUsers = [{ name: 'Abhi', wealth: 21 }, { name: 'Adi', wealth: 22 }];
  spyOnGetUser.mockImplementation(() => mockUsers);
  spyOnSaveUser.mockImplementation(() => {});
  const receivedUsers = operations.doubleMoney();
  expect(receivedUsers).toEqual([{ name: 'Abhi', wealth: 42 }, { name: 'Adi', wealth: 44 }]);
});

test('Should return only millionares', () => {
  const spyOnGetUser = jest.spyOn(userOps, 'getUsers');
  const mockUsers = [{ name: 'Abhi', wealth: 2000000 }, { name: 'Adi', wealth: 200 }];
  spyOnGetUser.mockImplementation(() => mockUsers);
  const millionares = operations.returnMillionares();
  expect(millionares).toEqual([{ name: 'Abhi', wealth: 2000000 }]);
});

test('Should return users sorted by wealth in ascending order', () => {
  const spyOnGetUser = jest.spyOn(userOps, 'getUsers');
  const mockUsers = [{ name: 'Abhi', wealth: 2000000 }, { name: 'Adi', wealth: 200 }];
  spyOnGetUser.mockImplementation(() => mockUsers);
  const sortedUsers = operations.sortByRichest();
  expect(sortedUsers).toEqual([{ name: 'Adi', wealth: 200 }, { name: 'Abhi', wealth: 2000000 }]);
});

test('Should return the total wealth of all users', () => {
  const spyOnGetUser = jest.spyOn(userOps, 'getUsers');
  const mockUsers = [{ name: 'Abhi', wealth: 2000000 }, { name: 'Adi', wealth: 200 }];
  spyOnGetUser.mockImplementation(() => mockUsers);
  const totalWealth = operations.findTotalWealth();
  expect(totalWealth).toBe(2000000 + 200);
});

test('Should return printable users data', () => {
  const expectedData = '<------------------User Details: START----------------->\n\nName: Mr. Abhi Singh\tWealth: 2000000\nName: Mr. Adi Sharma\tWealth: 200\n\n<-------------------------END----------------------------->';
  const spyOnGetUser = jest.spyOn(userOps, 'getUsers');
  const mockUsers = [{ name: { title: 'Mr.', first: 'Abhi', last: 'Singh' }, wealth: 2000000 },
    { name: { title: 'Mr.', first: 'Adi', last: 'Sharma' }, wealth: 200 }];
  spyOnGetUser.mockImplementation(() => mockUsers);
  const printData = operations.returnPrintData();
  expect(printData).toEqual(expectedData);
});
