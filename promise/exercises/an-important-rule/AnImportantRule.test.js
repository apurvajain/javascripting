const { executePromise } = require("./AnImportantRule");

test("promise shoould rejeect with a value 'OH NOES'", (done) => {
  const consoleSpy = jest.spyOn(console, "log");
  setTimeout(() => {
    expect(consoleSpy).toHaveBeenCalledWith("OH NOES");
    done();
  }, 300);
});
