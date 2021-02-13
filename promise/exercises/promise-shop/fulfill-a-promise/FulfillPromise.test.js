const { promise, fulfillPromise } = require("./FulfillPromise")

test("promise should resolve with a value FULFILLED!", () => {
    expect(promise).resolves.toEqual("FULFILLED!")
})

test("promise resolved value (FULFILLED!) should be printed to console after 300ms", (done) => {
    const consoleSpy = jest.spyOn(console, 'log')
    fulfillPromise()
    setTimeout(() => {

        expect(consoleSpy).toHaveBeenCalledWith("FULFILLED!");
        done();
    }, 300)
})