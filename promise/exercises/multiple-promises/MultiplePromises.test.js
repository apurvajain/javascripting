const all = require("./MultiplePromises");




test("promise resolved with array values ", (done) => {
    const consoleSpy = jest.spyOn(console, 'log')
    all(getPromise1(), getPromise2());
    setTimeout(() => {
        expect(consoleSpy).toHaveBeenCalled();
        done();
    }, 300);    
});