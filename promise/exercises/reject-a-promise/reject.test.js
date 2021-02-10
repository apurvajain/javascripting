const { TestScheduler } = require("jest");
const { promise, executePromise } = require("./reject");

test("Should reject the promise with an Error object", () => {
  const errorObject = {
    message: "REJECTED!",
  };
  expect(promise).rejects.toEqual(      //to check if object only contains message
    expect.objectContaining({
      message: "REJECTED!",
    })
  );
});

test("Should print 'REJECTED!' (reject value) to console after 300ms", (done) => {
  const consoleSpy = jest.spyOn(console, "log");
  executePromise();
  setTimeout(() => {
    expect(consoleSpy).toHaveBeenCalledWith("REJECTED!");
    done();
  }, 300);
});
