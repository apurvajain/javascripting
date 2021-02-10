const promise = require("./RejectAPromise");

test("promise shoould reject with a value REJECTED! after 300ms", () => {
  const obj = new Error("REJECTED!");
  expect(promise).rejects.toThrow(obj);
});

test("promise reject value REJECTED! should be printed to console", (done) => {
  const consoleSpy = jest.spyOn(console, "log");
  setTimeout(() => {
    expect(consoleSpy).toHaveBeenCalledWith("REJECTED!");
    done();
  }, 300);
});
