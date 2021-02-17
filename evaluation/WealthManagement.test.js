const {
  fetchUsers,
  displayAllUsers,
  doubleMoney,
  showMillionaires,
  sortByRichest,
  totalWealth,
} = require("./WealthManagement");

test("Should call fetchUsers function", () => {
  fetchUsers();
});

test("Should call displayUsers function", () => {
  displayAllUsers();
});

xtest("Should call doubleMoney function", () => {
  doubleMoney();
});

xtest("Should show millionares on console", (done) => {
  const consoleSpy = jest.spyOn(console, "log");
  showMillionaires();
  setTimeout(() => {
    expect(consoleSpy).toHaveBeenCalled();
    done();
  }, 3000);
});

xtest("Should call sortByRichest function", () => {
  sortByRichest();
});

xtest("Should show total wealth on console", (done) => {
  const consoleSpy = jest.spyOn(console, "log");
  totalWealth();
  setTimeout(() => {
    expect(consoleSpy).toHaveBeenCalled();
    done();
  }, 3000);
});
