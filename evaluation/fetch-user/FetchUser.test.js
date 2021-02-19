const { TestScheduler } = require('jest');
const fileOps = require('./FetchUser.js');

test('Length of users should be 3', (done) => {
  fileOps.fetchUser(3);
  setTimeout(() => {
    expect(fileOps.users).toHaveLength(3);
    done();
  }, 3000);
});

test('Fetch user should resolve with a value from api', () => {
  jest.spyOn(fileOps, 'fetch')
    .mockResolvedValue('abc');
  expect(fileOps.fetchUser(1).resolves.toEQual('abc'));
});

test('Should call fetchUsers function', () => {
  fileOps.fetchUser();
});

test('Should call displayUsers function', (done) => {
  const consoleSpy = jest.spyOn(console, 'log');
  fileOps.addAndDisplay();
  setTimeout(() => {
    expect(consoleSpy).toHaveBeenCalled();
    done();
  }, 3000);
});

test('Should call doubleMoney function', () => {
  fileOps.doubleWealth();
});

test('Should show millionares on console', (done) => {
  const consoleSpy = jest.spyOn(console, 'log');
  fileOps.showMillionaires();
  setTimeout(() => {
    expect(consoleSpy).toHaveBeenCalled();
    done();
  }, 3000);
});

test('Should call sortByRichest function', () => {
  fileOps.sortByRichest();
});

test('Should show total wealth on console', (done) => {
  const consoleSpy = jest.spyOn(console, 'log');
  fileOps.totalWealth();
  setTimeout(() => {
    expect(consoleSpy).toHaveBeenCalled();
    done();
  }, 3000);
});
