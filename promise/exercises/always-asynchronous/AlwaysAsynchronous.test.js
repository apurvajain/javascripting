const promise = require("./AlwaysAsynchronous");

test("print MAIN PROGRAM beforee PROMISE VALUE", () => {
  const consoleSpy = jest.spyOn(console, "log");
  setTimeout(() => expect(consoleSpy).toHaveBeenCalledWith("MAIN PROGRAM"), 0);
  setTimeout(() => expect(consoleSpy).toHaveBeenCalledWith("PROMISE VALUE"), 0);
});
test("promise should resolve with a value PROMISE VALUE", () => {
  expect(promise).resolves.toEqual("PROMISE VALUE");
});
