const { attachTitle, promise, executePromise } = require("./ValuesAndPromises");

test("should prepend 'DR. ' to first argument and return result", () => {
  const message = attachTitle("MANHATTAN");
  expect(message).toBe("DR. MANHATTAN");
});

test('promise should resolve with value "MANHATTAN', () => {
  expect(promise).resolves.toEqual("MANHATTAN");
});

test('should print "DR. MANHATTAN" to console', () => {
  const consoleSpy = jest.spyOn(console, "log");
  executePromise();
  setTimeout(() => {
    expect(consoleSpy).toHaveBeenCalledWith("DR. MANHATTAN");
    done();
  }, 0);
});
