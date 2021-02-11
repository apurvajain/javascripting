const {
    promise,
    executePromise,
    onReject
} = require('./RejectNotReject');

test("promise should resolve with a value 'I FIRED' ", () => {
    expect(promise).resolves.toEqual('I FIRED');
});


test("promise should resolve and  print 'I FIRED' to console ", (done) => {
    const consoleSpy = jest.spyOn(console, "log");
    executePromise();
    setTimeout(() => {
      expect(consoleSpy).toHaveBeenCalledWith('I FIRED');
      done();
    },300);
});






// test("promise should not reject and return undefined ", () => {
//     expect(promise).rejects.toEqual(undefined);
// });



