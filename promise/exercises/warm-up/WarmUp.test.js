const warmUp = require("./WarmUp");

// Wait for all the expects to finish before you complete your test
// Use done for that

test("should print TIMED OUT! after 300ms", (done) => {
  const spy = jest.spyOn(console, "log");
  warmUp();
  setTimeout(() => {
    expect(spy).toHaveBeenCalledWith("TIMED OUT!");
    done();
  }, 1000);
});
