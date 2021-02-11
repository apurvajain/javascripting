let { fulfilledPromise, attachTitle } = require("./ValuesAndPromises");

test("promise should resolve with a value MANHATTAN", () => {
  expect(fulfilledPromise).resolves.toEqual("MANHATTAN");
});

test("promise resolved value after promise chain should print DR MANHATTAN on screen", () => {
  const consoleSpy = jest.spyOn(console, "log");
  fulfilledPromise.then(attachTitle).then(console.log);
  setTimeout(() => {
    expect(consoleSpy).toHaveBeenCalledWith("DR MANHATTAN");
  }, 300);
});
