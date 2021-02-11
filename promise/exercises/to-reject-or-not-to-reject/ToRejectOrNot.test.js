const { promise, executePromise } = require("./ToRejectOrNot");

test('Promise should be fulfilled with "I FIRED" and not rejected', () => {
  expect(promise).resolves.toEqual("I FIRED");
});

test('Should print "I FIRED" (resolved value) on console', () => {
  const consoleSpy = jest.spyOn(console, "log");
  executePromise();
  // promise-asynchronous task, always need setTimeout
  setTimeout(() => {
    expect(consoleSpy).toHaveBeenCalledWith("I FIRED");
  }, 0);
    // expect(consoleSpy).toHaveBeenCalledWith("I FIRED");
});
