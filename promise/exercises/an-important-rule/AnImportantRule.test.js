const iterate = require("./AnImportantRule");


// test("promise should resolve with a value FULFILLED!", () => {
//     expect(promise).resolves.toEqual('FULFILLED');
//   }); 


test("promise resolved value rejected after 5 iteration", (done) => {
    const consoleSpy = jest.spyOn(console, 'log')
    iterate();
    setTimeout(() => {
        expect(consoleSpy).toHaveBeenCalled();
        done();
    }, 300);    
});