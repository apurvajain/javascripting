const promiseResolved = require("./Shortcuts");

test("promise should respond with a value RESOLVED! after 300ms", () => {
  expect(promiseResolved).resolves.toBe("RESOLVED!");
});

test("promise reject value REJECTED! should be printed to console", () => {
  const consoleSpy = jest.spyOn(console, "log");
  setTimeout(() => {
    expect(consoleSpy).toHaveBeenCalledWith("REJECTED!");
  }, 300);
});
