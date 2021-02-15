const {
  fetchUsers,
  addUser,
  displayAllUsers,
  setMoney,
  clearLocalStorage,
  fetchAllUsers,
  doubleMoney,
  showMillionares,
  sortByRichest,
  totalWealth
  } = require("./Index");


  test("fetch users should return an object", () => {
    expect(typeof fetchUsers()).toBe('object');
  });


