const {
    promise,
    executePromise 
  } = require("./promise");
  test("promise should resolve with a value FULFILLED! after 300ms", () => {
    expect(promise).resolves.toEqual('FULFILLED!');
  });
  test("promise resolved value (FULFILLED!) should be printed to console", (done) => {
    const consoleSpy = jest.spyOn(console, "log");
    executePromise();
    setTimeout(() => {
      expect(consoleSpy).toHaveBeenCalledWith("FULFILLED!");
      done();
    }, 300);
  });