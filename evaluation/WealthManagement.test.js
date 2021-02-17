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

test("Should call displayUsers function", (done) => {
    const consoleSpy = jest.spyOn(console, "log")
    displayAllUsers();
    setTimeout(() => {
        expect(consoleSpy).toHaveBeenCalled();
        done();
      }, 3000);
});

test("Should call doubleMoney function", () => {
  doubleMoney();
});

test("Should show millionares on console", (done) => {
  const consoleSpy = jest.spyOn(console, "log");
  showMillionaires();
  setTimeout(() => {
    expect(consoleSpy).toHaveBeenCalled();
    done();
  }, 3000);
});

test("Should call sortByRichest function", () => {
  sortByRichest();
});

test("Should show total wealth on console", (done) => {
  const consoleSpy = jest.spyOn(console, "log");
  totalWealth();
  setTimeout(() => {
    expect(consoleSpy).toHaveBeenCalled();
    done();
  }, 3000);
});
