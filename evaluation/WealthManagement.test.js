const { fetchUsers, doubleMoney } = require("./WealthManagement");

test("Can call fetchUsers function", () => {
  fetchUsers();
});

test("Can call doubleMoney function", () => {
  doubleMoney();
});
