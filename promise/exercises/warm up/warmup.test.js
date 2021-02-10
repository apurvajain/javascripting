const { TestScheduler } = require("jest");
const warmup = require("./warmup");

test("should print 'TIMED OUT!' after 300ms", (done) => {
  const consoleSpy = jest.spyOn(console, "log");
  warmup();
  setTimeout(() => {
    expect(consoleSpy).toHaveBeenCalledWith("TIMED OUT!");
    done();
  }, 300);
});
