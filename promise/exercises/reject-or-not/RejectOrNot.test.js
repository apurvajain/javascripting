const promise = require("./RejectOrNot");

test("Promise should resolve I FIRED only once and not be rejected", () => {
  expect(promise).resolves.toEqual("I FIRED");
});

test("promise resolved I FIRED should be printed to console", () => {
  const consoleSpy = jest.spyOn(console, "log");
  setTimeout(() => {expect(consoleSpy).toHaveBeenCalledWith("I FIRED");
  //done();
}, 400)
});
