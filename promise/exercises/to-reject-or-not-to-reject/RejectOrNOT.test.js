const {promise, usePromise}= require("./RejectOrNot")
// test("Promise should have been resolved with a value I FIRED only once and not be rejected",() => {
//     expect(promise).resolves.toEqual("I FIRED");
// })

test("promise resolved value I FIRED should be printed to console",() => {
    const consoleSpy = jest.spyOn(console,"log");
    usePromise()
    setTimeout(() => {
        expect(consolespy).toHaveBeenCalledWith("I FIRED", 0);
    })



})