const executePromises = require("./PromiseAfterPromise");

//accesses first() and second() from set-up-jest-global.js
test("should print promise resolved value 'SECRET to console", (done) => {
  const consoleSpy = jest.spyOn(console, "log");
  executePromises();
  setTimeout(() => {
    expect(consoleSpy).toHaveBeenCalledWith("SECRET");
    done();
  }, 300);
});
