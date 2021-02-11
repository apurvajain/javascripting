const executePromise = require("./PromiseAfterPromise");


// test("promise should resolve with a value FULFILLED!", () => {
//     expect(promise).resolves.toEqual('FULFILLED');
//   });


test("promise resolved value (FULFILLED) should be printed to console ", (done) => {
    const consoleSpy = jest.spyOn(console, 'log')
    executePromise();
    setTimeout(() => {
        expect(consoleSpy).toHaveBeenCalledWith("SECRET");
        done();
    }, 300);    
});