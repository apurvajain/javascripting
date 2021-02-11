const {
    promise,
    usePromise 
  } = require("./FulfillPromise");
  test("promise should resolve with a value FULFILLED! after 300ms", () => {
    expect(promise).resolves.toEqual('FULFILLED!');
  });
  test("promise resolved value (FULFILLED!) should be printed to console", (done) => {
    const consoleSpy = jest.spyOn(console, "log");
    usePromise();
    setTimeout(() => {
      expect(consoleSpy).toHaveBeenCalledWith("FULFILLED!");
      done();
    }, 300);
  });

// const usePromise = require("./promise");

// test("should print 'FULLFILLED! after 300ms", (done) => {
//     const consoleSpy = jest.spyOn(console, 'log')
//     usePromise();
//     setTimeout(() => {
//         expect(consoleSpy).toHaveBeenCalledWith("FULFILLED!");
//         done();
//     }, 300);    
// });