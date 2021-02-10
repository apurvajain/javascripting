const fulfillPromise = require("./fulfill");
const fulfill = require("./fulfill");

test("should print 'FULFILLED!' after 300ms", (done) => {
  const consoleSpy = jest.spyOn(console, "log");
  fulfill();
  setTimeout(() => {
    expect(consoleSpy).toHaveBeenCalledWith("FULFILLED!");
    done();
  }, 300);
});