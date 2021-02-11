const promise = require("./Shortcuts");

test("promise should resolve with a value I AM RESPONSE", () => {
  expect(promise).resolves.toEqual("I AM RESPONSE");
});
test("promise resolved value I AM IN RESPONSE should be printed to console", () => {
  const consoleSpy = jest.spyOn(console, "log");
  setTimeout(() => {
    expect(consoleSpy).toHaveBeenCalledWith("I AM RESPONSE");
  }, 0);
});
