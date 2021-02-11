//const { promise } = require("./Asynchronous");

const { promise, executePromise } = require("./Asynchronous");

test("Promise should resolve with a value of 'PROMISE VALUE", () => {
  expect(promise).resolves.toEqual("PROMISE VALUE");
});

test("Should print 'MAIN PROGRAM before promise resolve value('PROMISE", () => {
  const consoleSpy = jest.spyOn(console, "log");
  executePromise();
  setTimeout(() => {
    expect(consoleSpy).toHaveBeenCalledWith("MAIN PROGRAM");
  }, 0);

  executePromise();
  setTimeout(() => {
    expect(consoleSpy).toHaveBeenCalledWith("PROMISE VALUE");
  }, 0);
});
