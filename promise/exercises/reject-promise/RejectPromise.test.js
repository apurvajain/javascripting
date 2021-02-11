const {
    promise,
    executePromise,
    onReject
} = require('./RejectPromise');

test("promise should reject with a Error object 'Error('REJECTED!')' ", () => {
    expect(promise).rejects.toMatchObject(Error('REJECTED!'));
});

test("promise onReject should print 'REJECTED!' to console after 300ms", (done) => {
    const consoleSpy = jest.spyOn(console, "log");
    executePromise();
    setTimeout(() => {
      expect(consoleSpy).toHaveBeenCalledWith("REJECTED!");
      done();
    }, 300);
  });