const warmUp = require("./WarmUp");

// Wait for all the expects to finish before you complete your test
// Use done for that

test("should print TIMED OUT! after 300ms", () => {
  const spy = jest.spyOn(console, "log");
  setTimeout(() => {
    expect(spy).toHaveBeenCalledWith("TIMED OUT!");
  }, 100);
});
