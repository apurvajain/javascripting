const { LocalStorage } = require('node-localstorage');
const functions = require('./Functions');

const localStorage = new LocalStorage('./scratch1');

test('should Double Wealth ', () => {
  localStorage.clear();
  const users = JSON.stringify([{ fullName: 'Manav', wealth: 234 }]);
  localStorage.setItem('users', users);
  const consoleSpy = jest.spyOn(console, 'log');
  functions.doubleWealth();
  const result = 'FullName: Manav\tWealth: 468';
  expect(consoleSpy).toHaveBeenCalledWith(result);
  localStorage.clear();
});

test('should show Millionaries ', () => {
  localStorage.clear();
  const users = JSON.stringify([{ fullName: 'Manav', wealth: 4212368 }]);
  localStorage.setItem('users', users);
  const consoleSpy = jest.spyOn(console, 'log');
  functions.showMillionares();
  const result = 'FullName: Manav\tWealth: 4212368';
  expect(consoleSpy).toHaveBeenCalledWith(result);
  localStorage.clear();
});

test('should sort by Wealth ', () => {
  localStorage.clear();
  const users = JSON.stringify([{ fullName: 'Manav', wealth: 4212368 }, { fullName: 'Manav', wealth: 212368 }]);
  localStorage.setItem('users', users);
  const consoleSpy = jest.spyOn(console, 'log');
  functions.sortByWealth();
  let result = 'FullName: Manav\tWealth: 4212368';
  expect(consoleSpy).toHaveBeenCalledWith(result);
  result = 'FullName: Manav\tWealth: 212368';
  expect(consoleSpy).toHaveBeenCalledWith(result);

  localStorage.clear();
});

test('should calculate all Wealth ', () => {
  localStorage.clear();
  const users = JSON.stringify([{ fullName: 'Manav', wealth: 123 }, { fullName: 'Manav', wealth: 123 }]);
  localStorage.setItem('users', users);
  const consoleSpy = jest.spyOn(console, 'log');
  functions.calculateWealth();
  const result = 'Total sum: 246';
  expect(consoleSpy).toHaveBeenCalledWith(result);

  localStorage.clear();
});
