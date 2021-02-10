const { promiseResolve, promiseReject, executePromise } = require('./shortcuts');

test("Promise should be resolved to 'FULFILLED!'", () => {
    expect(promiseResolve).resolves.toEqual("FULFILLED!");
})

test("Next Promise should give error object'", () => {
    expect(promiseReject).rejects.toEqual(new Error('REJECTED!'));
})

test("Should show 'REJECTED!' in the console", () => {
    const consoleSpy = jest.spyOn(console, "log");
    executePromise();
    setTimeout(() => {
        expect(consoleSpy).toHaveBeenCalledWith('REJECTED!');
    }, 300)
})